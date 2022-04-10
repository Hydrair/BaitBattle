import React, { useRef, useState } from "react";
import { View } from "../../components/View";
import "./login.scss";
import { sha512 } from "crypto-hash";
import { storageWrapper } from "../../services/storagewrapper";
import { url } from "../../services/provider";
import { User } from "../../types";

export interface LoginProps {}

enum LoginState {
    UserEmpty,
    UserFailed,
    PasswordEmpty,
    PasswordFailed,
    Success,
    Failure,
}

const loginUser = async (username: any, password: any) => {
    if (username == "" || username == undefined)
        return { ret: LoginState.UserEmpty, user: {} as User };
    if (password == "" || password == undefined)
        return { ret: LoginState.PasswordEmpty, user: {} as User };

    let user;
    const pw = fetch(`${url}/user?username=${username}`)
        .then((res) => res.json())
        .then((userJSON) => {
            if (userJSON.Items[0].password) {
                user = userJSON.Items[0];
                return user.password;
            } else {
                return undefined;
            }
        });

    if ((await pw) == undefined)
        return { ret: LoginState.UserFailed, user: {} as User };
    const pwHashed = sha512(password).then((res) => res);
    if ((await pwHashed) != (await pw))
        return { ret: LoginState.PasswordFailed, user: {} as User };
    return { ret: LoginState.Success, user: user };
};

export function Login(props: LoginProps): JSX.Element {
    const [error, setError] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [remember, setRemember] = useState(false);
    const userInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);
    const user = storageWrapper.getUser();
    const handleSubmit = async (
        e:
            | React.FormEvent<HTMLFormElement>
            | React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        setError("");
        userInput?.current?.classList?.remove("failed");
        passwordInput?.current?.classList?.remove("failed");
        const ret = await loginUser(username, password);

        switch (ret.ret) {
            case LoginState.UserEmpty:
                userInput?.current?.classList?.add("failed");
                setError("Bitte Benutzernamen eingeben!");
                break;
            case LoginState.UserFailed:
                userInput?.current?.classList?.add("failed");
                setError("Benutzername nicht vorhanden!");
                break;
            case LoginState.PasswordEmpty:
                passwordInput?.current?.classList?.add("failed");
                setError("Bitte Passwort eingeben!");
                break;
            case LoginState.PasswordFailed:
                passwordInput?.current?.classList?.add("failed");
                setError("Passwort falsch!");
                break;
            case LoginState.Success:
                storageWrapper.setUser(ret.user!, remember);
                window.location.href = `/profile/${ret.user!.username}`;
                break;
            default:
                break;
        }
    };

    if (user["id"] != undefined) {
        return <></>;
    }

    return (
        <View>
            <h1>Einloggen</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
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
                <div className="remember form">
                    <label htmlFor="remember">Nutzername merken?</label>
                    <input
                        type="checkbox"
                        id="remember"
                        checked={remember}
                        onChange={() => setRemember(!remember)}
                    />
                </div>
                <p className="error">{error}</p>

                <button type="submit" onClick={(e) => handleSubmit(e)}>
                    Login
                </button>
            </form>
        </View>
    );
}
