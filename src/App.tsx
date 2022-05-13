import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router";
import { Profile } from "./pages/User";
import { NoMatch } from "./NoMatch";
import { Login } from "./pages/Login";
import { Ranking } from "./pages/Ranking";
import { Register } from "./pages/Register";
import { storageWrapper } from "./services/storagewrapper";
import { QueryClient, QueryClientProvider } from "react-query";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsmobile from "./aws-exports";
Amplify.configure(awsmobile);
function App({ signOut, user }) {
    return (
        <>
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
        </>
    );
}

export default withAuthenticator(App);
// function App({ signOut, user }) {
//     return (
//         <Authenticator.Provider>
//             <QueryClientProvider client={new QueryClient()}>
//                 <BrowserRouter>
//                     <>
//                         <h1>Hello {user.username}</h1>
//                         <button onClick={signOut}>Sign out</button>
//                     </>
//                     <Routes>
//                         <Route path="/" element={<Home />} />
//                         <Route
//                             path="/profile/:userName"
//                             element={
//                                 <Profile
//                                     username={storageWrapper.getUser().username}
//                                 />
//                             }
//                         />
//                         <Route path="/login" element={<Login />} />
//                         <Route path="/ranking" element={<Ranking />} />
//                         <Route path="/register" element={<Register />} />
//                         <Route path="*" element={<NoMatch />} />
//                     </Routes>
//                 </BrowserRouter>
//             </QueryClientProvider>
//         </Authenticator.Provider>
//     );
// }
//
// export default App;
