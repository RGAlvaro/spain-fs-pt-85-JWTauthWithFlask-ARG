import React, { useEffect, useState } from "react";

export default function Private() {
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (!token) {
            setError(true);
            setLoading(false);
            return;
        }

        fetch(import.meta.env.VITE_BACKEND_URL + "/private", {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.message) {
                setMessage(data.message);
            } else {
                setError(true);
            }
        })
        .catch(() => setError(true))
        .finally(() => setLoading(false));
    }, []);

    if (loading) return <h2>Cargando...</h2>;
    if (error) return <h2>No puedes ver este contenido sin iniciar sesión.</h2>;
    
    return <h2>{message}</h2>;
}