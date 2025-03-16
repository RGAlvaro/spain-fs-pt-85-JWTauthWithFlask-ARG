import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export function Navbar() {
    const navigate = useNavigate();
    const { dispatch, store } = useGlobalReducer();

    const handleLogout = () => {
        sessionStorage.removeItem("token");
        dispatch({ type: "LOGOUT" });
        navigate("/");
    };

    return (
        <nav>
            <button onClick={() => navigate("/signup")}>Registro</button>
            <button onClick={() => navigate("/login")}>Login</button>
            {store.token && <button onClick={handleLogout}>Logout</button>}
        </nav>
    );
}