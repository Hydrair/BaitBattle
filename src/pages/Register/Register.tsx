import React, { useRef, useState } from "react";
import "./register.scss";
import { sha512 } from "crypto-hash";
import { storageWrapper } from "../../services/storagewrapper";
import { Fish, User } from "../../types";
import { url } from "../../services/provider";
import { View } from "../../components/View";
import { v4 as uuidv4 } from "uuid";

export interface RegisterProps {}

enum LoginState {
    UserEmpty,
    UserFailed,
    PasswordEmpty,
    PasswordFailed,
    PasswordNoMatch,
    FirstNameEmpty,
    LastNameEmpty,
    Success,
    Failure,
}

async function registerUser(
    username: string,
    password: string,
    password2: string,
    firstName: string,
    lastName: string
) {
    if (firstName == "" || firstName == undefined)
        return { ret: LoginState.FirstNameEmpty, user: {} as User };
    if (lastName == "" || lastName == undefined)
        return { ret: LoginState.LastNameEmpty, user: {} as User };
    if (username == "" || username == undefined)
        return { ret: LoginState.UserEmpty, user: {} as User };
    if (password == "" || password == undefined)
        return { ret: LoginState.PasswordEmpty, user: {} as User };
    if (password2 == "" || password2 == undefined)
        return { ret: LoginState.PasswordEmpty, user: {} as User };
    if (password != password2)
        return { ret: LoginState.PasswordNoMatch, user: {} as User };

    const users = await fetch(`${url}/user`)
        .then((res) => res.json())
        .then((userJSON) => {
            return userJSON.Items;
        });
    let double = false;
    users.forEach((user: User) => {
        if (user.username == username) {
            double = true;
        }
    });
    if (double) {
        return { ret: LoginState.UserFailed, user: {} as User };
    }
    const user: User = {
        id: uuidv4(),
        username: username,
        firstName: firstName,
        lastName: lastName,
        password: await sha512(password).then((res) => res),
        avatar: "",
        points: 0,
        fish: [{} as Fish],
    };
    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    };
    const msg = await fetch(`${url}/user`, options)
        .then((response) => response.json())
        .then((data) => console.log(data));

    return { ret: LoginState.Success, user: user, msg: msg };
}

export function Register(props: RegisterProps): JSX.Element {
    const [error, setError] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [password2, setPassword2] = useState<string>("");
    const userInput = useRef<HTMLInputElement>(null);
    const firstInput = useRef<HTMLInputElement>(null);
    const lastInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);
    const password2Input = useRef<HTMLInputElement>(null);

    const handleSubmit = async (
        e:
            | React.FormEvent<HTMLFormElement>
            | React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        setError("");
        userInput?.current?.classList?.remove("failed");
        passwordInput?.current?.classList?.remove("failed");
        const ret = await registerUser(
            username,
            password,
            password2,
            firstName,
            lastName
        );

        switch (ret.ret) {
            case LoginState.FirstNameEmpty:
                firstInput?.current?.classList?.add("failed");
                setError("Bitte Vornamen eingeben!");
                break;
            case LoginState.LastNameEmpty:
                lastInput?.current?.classList?.add("failed");
                setError("Bitte Nachnamen eingeben!");
                break;
            case LoginState.UserEmpty:
                userInput?.current?.classList?.add("failed");
                setError("Bitte Benutzernamen eingeben!");
                break;
            case LoginState.UserFailed:
                userInput?.current?.classList?.add("failed");
                setError("Benutzername schon vorhanden!");
                break;
            case LoginState.PasswordEmpty:
                passwordInput?.current?.classList?.add("failed");
                setError("Bitte Passwort eingeben!");
                break;
            case LoginState.PasswordNoMatch:
                password2Input?.current?.classList?.add("failed");
                setError("Passwörter stimmen nicht überein!");
                break;
            case LoginState.Success:
                storageWrapper.setUser(ret.user!, true);
                document
                    .getElementById("password2")
                    ?.append("<p>" + ret.msg + "</p>");
                console.log(ret.msg);

                // window.location.href = `/profile/${ret.user!.username}`;
                break;
            default:
                break;
        }
    };

    return (
        <View>
            <h1>Registrieren</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="username form">
                    <label htmlFor="firstName">Vorname*</label>
                    <input
                        type="text"
                        id="firstName"
                        placeholder="Vorname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        ref={firstInput}
                    />
                </div>
                <div className="username form">
                    <label htmlFor="lastName">Nachname*</label>
                    <input
                        type="text"
                        id="lastName"
                        placeholder="Nachname"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        ref={lastInput}
                    />
                </div>
                <div className="username form">
                    <label htmlFor="username">Benutzername*</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Benutzername"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        ref={userInput}
                    />
                </div>
                <div className="password form">
                    <label htmlFor="password">Passwort*</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Passwort"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        ref={passwordInput}
                    />
                </div>
                <div className="password form">
                    <label htmlFor="password2">Passwort wiederholen*</label>
                    <input
                        type="password"
                        id="password2"
                        placeholder="Passwort wiederholen"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                        ref={password2Input}
                    />
                </div>
                <p className="error">{error}</p>

                <button type="submit" onClick={(e) => handleSubmit(e)}>
                    Registrieren
                </button>
            </form>
        </View>
    );
}
