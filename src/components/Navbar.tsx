import { FaBell, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
    const navigate = useNavigate(); //✅ Needed to redirect after logout
    const handleLogout = () =>{
        localStorage.removeItem("isAuthenticated"); //✅ Clear login flag
        navigate("/login"); // ✅ Redirect to login page
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
            <input type="text" className="form-control w-25" placeholder="Find something..." />
            <div className="ms-auto">
                <FaBell className="mx-3" size={20} />
                <FaUser size={20}
                style={{cursor:"pointer"}}
                onClick={handleLogout} // ✅ Logout when clicked
                title="Logout"
                
                />
            </div>
        </nav>
    );
};

export default Navbar;
