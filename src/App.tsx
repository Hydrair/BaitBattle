import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { NoMatch } from "./NoMatch";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { QueryClient, QueryClientProvider } from "react-query";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify, API, PubSub, DataStore } from "aws-amplify";

import awsmobile from "./aws-exports";
import Ranking from "./pages/Ranking/Ranking";
import { View } from "./components/View";
import Profile from "./pages/User/Profile";
import { Home } from "./pages/Home/Home";

// import { initSchema } from "@aws-amplify/datastore";
// import { schema } from "./models/schema";

Amplify.configure(awsmobile);
// PubSub.configure(awsmobile);
// API.configure(awsmobile);
DataStore.configure();
// let models;
// if (typeof window !== "undefined") {
//     models = initSchema(schema);
// }

function App() {
    return (
        <Authenticator.Provider>
            <QueryClientProvider client={new QueryClient()}>
                <BrowserRouter>
                    <View>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/profile" element={<Profile />} />

                            <Route path="/ranking" element={<Ranking />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="*" element={<NoMatch />} />
                        </Routes>
                    </View>
                </BrowserRouter>
            </QueryClientProvider>
        </Authenticator.Provider>
    );
}

export default App;
