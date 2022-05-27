import { useAuthenticator } from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../../services/isLoggedIn";
import { storageWrapper } from "../../services/storagewrapper";
import { User } from "../../types";
import "./header.scss";
export const Header = (): JSX.Element => {
    const { user, signOut } = useAuthenticator((context) => [context.user]);

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <img src="/img/logo2.png" />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/ranking">Rangliste</Link>
                    </li>
                    <li>
                        <Link to={`/profile`}>Profil</Link>
                    </li>
                    {user ? (
                        <li onClick={signOut}>
                            <Link to="/">Logout</Link>
                        </li>
                    ) : (
                        <li>
                            <Link to="/profile">Login</Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};
