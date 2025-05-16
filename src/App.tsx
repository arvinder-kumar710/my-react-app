import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import AdminDashboard from "./AdminDashboard";



const App: React.FC = () => {
    return (
        <Router>
            <div className="d-flex">
                <div className="w-100">
                    <div className="container-fluid mt-4">
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/dashboard" element={<AdminDashboard  />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;
