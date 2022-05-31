import "./profile.scss";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { DataStore, Predicates, SortDirection } from "aws-amplify";
import { Fish, User } from "../../models";
import { useEffect, useState } from "react";
import UpdateProfile from "./UpdateProfile";
import { UserCard } from "../../components/UserCard";
import { Pill } from "../../components/Pill";
import UpdateFish from "./UpdateFish";
import { useLocation } from "react-router";

export interface ProfileProps {}
enum Setup {
    NewUser,
    Profile,
    Change,
}

function ProfileUser({ signOut, user }): JSX.Element {
    const [hasProfile, setHasProfile] = useState<User>();
    const [hasSetup, setHasSetup] = useState(Setup.Profile);
    const [fish, setFish] = useState<Fish[]>();
    const [fishCount, setFishCount] = useState(0);
    const [rank, setRank] = useState(0);
    const [isOwner, setIsOwner] = useState(false);

    const state = useLocation().state as User;

    useEffect(() => {
        const getProfile = async (id: string) => {
            const user = await DataStore.query(User, (u) => u.owner("eq", id));
            if (user.length > 0) {
                setHasProfile(user[0]);
            } else {
                await DataStore.save(
                    new User({
                        firstName: "",
                        lastName: "",
                        avatar: "",
                        fish: [],
                        rank: 0,
                        points: 0,
                        owner: id,
                    })
                );
                setHasSetup(Setup.NewUser);
            }
        };
        const getFish = async (id: string) => {
            const fish = await DataStore.query(Fish, (u) => u.userID("eq", id));
            setFish(fish);
            setFishCount(fish.length);
        };
        const getRank = async (id: string) => {
            const users = await DataStore.query(User, Predicates.ALL, {
                sort: (u) => u.points(SortDirection.DESCENDING),
            });
            setRank(users.indexOf(users.filter((u) => u.owner === id)[0]) + 1);
        };

        let id = user.attributes.sub;
        if (state.owner === user.attributes.sub) {
            setIsOwner(true);
        } else {
            setHasProfile(state);
            id = state.owner;
        }

        isOwner && getProfile(id);
        getRank(id);
        getFish(id);
    }, [user, hasSetup, fishCount]);

    const filledout = () => {
        setHasSetup(Setup.Profile);
    };

    if (isOwner && (hasSetup === Setup.NewUser || hasSetup === Setup.Change)) {
        return (
            <>
                <UpdateProfile
                    update={filledout}
                    signOut={signOut}
                    user={user}
                />
            </>
        );
    } else if (hasProfile) {
        return (
            <>
                <UserCard
                    name={`${hasProfile.firstName} ${hasProfile.lastName}`}
                    rank={rank}
                    points={hasProfile.points}
                    img={hasProfile.avatar}
                />
                {isOwner && (
                    <button onClick={() => setHasSetup(Setup.Change)}>
                        Profil bearbeiten
                    </button>
                )}
                <section>
                    <h2>Fische</h2>
                    {isOwner && (
                        <UpdateFish
                            update={() => setFishCount(fishCount + 1)}
                            signOut={signOut}
                            user={user}
                        />
                    )}
                    {fishCount > 0 &&
                        fish &&
                        fish.map((fish) => <Pill fish={fish} key={fish.id} />)}
                </section>
            </>
        );
    }
    return <></>;
    // return (
    //     <>
    //         <h1>Profil</h1>
    //         <h1>Hey, {user.attributes.email}</h1>
    //         <button onClick={signOut}>Sign out</button>
    {
        /* <UserCard
                name={`${userJson.firstName} ${userJson.lastName}`}
                rank={userJson.rank}
                points={userJson.points}
                img={userJson.avatar}
            />
            <section className="center">
                <h2>Zielfische</h2>
                {userJson.fish !== undefined &&
                    userJson.fish
                        .filter((fish: { target: any }) => fish.target)
                        .sort(
                            (a: { species: number }, b: { species: number }) =>
                                a.species - b.species
                        )
                        .map((fish: any) => {
                            return <Pill fish={fish} key={fish.id} />;
                        })}
                <h3>Weitere Wertungsfische</h3>
                {userJson.fish !== undefined &&
                    userJson.fish
                        .filter((fish: { target: any }) => !fish.target)
                        .sort(
                            (a: { species: number }, b: { species: number }) =>
                                a.species - b.species
                        )
                        .map((fish: any) => {
                            return <Pill fish={fish} key={fish.id} />;
                        })}
            </section> */
    }
    {
        /* </>
    ); */
    }
}

export default withAuthenticator(ProfileUser);
