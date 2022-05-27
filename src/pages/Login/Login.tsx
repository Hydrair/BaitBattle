import React, { useRef, useState } from "react";
import { View } from "../../components/View";
import "./login.scss";
import { sha512 } from "crypto-hash";
import { storageWrapper } from "../../services/storagewrapper";
import { url } from "../../services/provider";
import { User } from "../../types";
import { Authenticator } from "@aws-amplify/ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import awsExports from "../../aws-exports";
import { Amplify } from "aws-amplify";
Amplify.configure(awsExports);
export interface LoginProps {}

export function Login({ signOut, user }): JSX.Element {
    return (
        <div>
            <h1>Hey, {user.attributes.email}</h1>
            <button onClick={signOut}>Sign out</button>
        </div>
    );
}

//6.
export default withAuthenticator(Login);
