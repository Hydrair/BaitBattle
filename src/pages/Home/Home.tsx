import { useAuthenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import "./home.scss";

export interface HomeProps {}

export function Home(props: HomeProps): JSX.Element {
    const { user, signOut } = useAuthenticator((context) => [context.user]);

    return (
        <section className="center">
            <h2>Herzlich Willkommen beim</h2>
            <img className="logo" src="./img/logo2.png" />
            {user ? (
                <button onClick={signOut}>Logout</button>
            ) : (
                <button>Login</button>
            )}
        </section>
    );
}
