"use client";
import { useState } from "react";

export default function ValidateForm() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validar que el campo no esté vacío
    if (!username) {
      setError("El nombre de usuario es requerido");
    } else {
      setError("");
      alert("Formulario enviado correctamente");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Nombre de usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}
