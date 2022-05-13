import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { View } from "../../components/View";
import NavBar from "../../ui-components/NavBar";
import "./home.scss";

export interface HomeProps {}

export function Home(props: HomeProps): JSX.Element {
    return (
        <View>
            <section className="center">
                <h2>Herzlich Willkommen beim</h2>
                <img className="logo" src="./img/logo2.png" />
                {storageWrapper.getUser() != ({} as User) && (
                    <>
                        <Link to="/register">
                            <Button func={undefined} label={"Registrieren"} />
                        </Link>
                        <Link to="/login">
                            <Button func={undefined} label={"Einloggen"} />
                        </Link>
                    </>
                )}
            </section>
        </View>
    );
}
