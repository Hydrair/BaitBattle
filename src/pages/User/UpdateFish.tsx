import "./profile.scss";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Auth, DataStore, Storage } from "aws-amplify";
import { Fish, User } from "../../models";
import { useMemo, useState } from "react";
import { FishSpecies } from "../../types";

const onUpdate = async (
    length: number,
    target: boolean,
    species: string,
    points: number,
    id: string
) => {
    await DataStore.save(
        new Fish({
            length: length,
            points: points,
            species: species,
            target: target,
            userID: id,
        })
    );
    const user = await DataStore.query(User, (u) => u.owner("eq", id));
    await DataStore.save(
        User.copyOf(user[0], (updated) => {
            if (!isNaN(user[0].points)) {
                updated.points = user[0].points + points;
            }
        })
    );
};

function UpdateFish({ signOut, user, update }): JSX.Element {
    const [length, setLength] = useState(0);
    const [target, setTarget] = useState(false);
    const [species, setSpecies] = useState("");
    const points = useMemo(() => {
        if (species === "") return 0;
        const p =
            length * FishSpecies.filter((s) => s.name == species)[0].factor;
        return parseFloat(p.toFixed(2));
    }, [length, species]);

    const handleSubmit = (e) => {
        onUpdate(length, target, species, points, user.attributes.sub).then(
            () => update()
        );
    };
    return (
        <>
            <div className="form">
                <label htmlFor="species">Fischart</label>
                <select onChange={(e) => setSpecies(e.target.value)}>
                    <option value="">Bitte auswählen</option>
                    {FishSpecies.map((s, i) => (
                        <option value={s.name} key={i}>
                            {s.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form">
                <label htmlFor="length">Länge in cm</label>
                <input
                    type="number"
                    onChange={(e) => setLength(parseInt(e.target.value))}
                />
                entspricht {points} Punkten
            </div>
            <div className="form">
                <label htmlFor="target">Zielfisch</label>
                <input
                    type="checkbox"
                    onChange={(e) => setTarget(e.target.value)}
                />
            </div>
            <button onClick={(e) => handleSubmit(e)}>Fisch hinzufügen</button>
        </>
    );
}

export default withAuthenticator(UpdateFish);
