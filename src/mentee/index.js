import Sidebar from "./components/sidebar";
import Task from "./task";
import Session from "./session";
import Profile from "./profile";
import { Routes, Route } from "react-router-dom";

function Mentee() {
    return (
        <div>
            <Sidebar />
            <main>
                <Routes>
                    <Route path="dashboard" element={<Hello />} />
                    <Route path="task" element={<Task />} />
                    <Route path="session" element={<Session />} />
                    <Route path="profile" element={<Profile />} />
                </Routes>
            </main>
        </div>

    )
}

function Hello() {
    return <h1>Hello World</h1>
}

export default Mentee;