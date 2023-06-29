import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DesignSystem from "./pages/DesignSystem";
import SignUp from "./pages/SignUp";

function App() {
    return <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/design" element={<DesignSystem />} />
            <Route path="/sign-up" element={<SignUp />} />
        </Routes>
    </>
}

export default App;