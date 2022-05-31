import "./profile.scss";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Auth, DataStore, Storage } from "aws-amplify";
import { User } from "../../models";
import { useState } from "react";

const onUpdate = async (
    _firstName: string,
    _lastName: string,
    _avatar: File,
    id: string
) => {
    const user = await DataStore.query(User, (u) => u.owner("eq", id));
    let filename = user[0].avatar;
    let firstName = user[0].firstName;
    let lastName = user[0].lastName;

    if (_avatar !== undefined) {
        filename = `${id}-${Date.now()}`;
        await Storage.put(filename, _avatar);
    }
    if (_firstName !== "") {
        firstName = _firstName;
    }
    if (_lastName !== "") {
        lastName = _lastName;
    }

    await DataStore.save(
        User.copyOf(user[0], (updated) => {
            updated.firstName = firstName;
            updated.lastName = lastName;
            updated.avatar = filename;
        })
    );
};

function UpdateProfile({ signOut, user, update }): JSX.Element {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [avatar, setAvatar] = useState<File>();

    const handleSubmit = (e) => {
        onUpdate(firstName, lastName, avatar, user.attributes.sub).then(() =>
            update(true)
        );
    };
    return (
        <>
            <div className="avatar form">
                <label htmlFor="avatar">Profilbild</label>
                <input
                    type="file"
                    id="avatar"
                    onChange={(e) => setAvatar(e.target.files[0])}
                />
            </div>
            <div className="username form">
                <label htmlFor="firstName">Vorname</label>
                <input
                    type="text"
                    id="firstName"
                    placeholder="Vorname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div className="username form">
                <label htmlFor="lastName">Nachname</label>
                <input
                    type="text"
                    id="lastName"
                    placeholder="Nachname"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>

            <button onClick={(e) => handleSubmit(e)}>
                Änderungen speichern
            </button>
        </>
    );
}

export default withAuthenticator(UpdateProfile);
