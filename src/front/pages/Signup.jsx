// Import necessary hooks and components from react-router-dom and other libraries.

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/signup", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ email, password }),
        // });

        const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
      });
        if (response.ok) {
            alert("Usuario registrado con éxito");
            navigate("/login");
        } else {
            alert("Error en el registro");
        }
    };

    return (
        <div>
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
}