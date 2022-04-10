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

function App() {
    return (
        <QueryClientProvider client={new QueryClient()}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/profile/:userName"
                        element={
                            <Profile
                                username={storageWrapper.getUser().username}
                            />
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/ranking" element={<Ranking />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
