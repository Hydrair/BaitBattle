import { Link } from "react-router-dom";
import { storageWrapper } from "../../services/storagewrapper";
import { User } from "../../types";
import "./header.scss";
export const Header = (): JSX.Element => {
    const user = storageWrapper.getUser();
    return (
        <header>
            <nav>
                <ul>
                    <Link to="/">
                        <li>
                            <img src="/img/logo2.png" />
                            Home
                        </li>
                    </Link>
                    <Link to="/ranking">
                        <li>Rangliste</li>
                    </Link>
                    <Link to={`/profile/${storageWrapper.getUser().username}`}>
                        <li>Profil</li>
                    </Link>
                    {user != ({} as User) ? (
                        <Link to="/login">
                            <li>Login</li>
                        </Link>
                    ) : (
                        <Link to="/">
                            <li onClick={() => storageWrapper.clearUser()}>
                                Logout
                            </li>
                        </Link>
                    )}
                </ul>
            </nav>
        </header>
    );
};
