"use client";

import Button from "./Button.jsx";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    console.log("Email submitted:", email);
  };

  return (
    <section className="w-full flex justify-center items-center p-4 mt-8 bg-gray-800">
      <div className="flex flex-col items-center mr-6">
        <i className="fa-solid fa-gifts text-amber-400 py-2 text-3xl"></i>
        <h2 className="contact-title__txt py-4 text-2xl text-red-700">Suscríbete</h2>
        <h3 className="contact-title__subtxt py-4 w-1/2 text-center text-gray-300">
          Mantente al tanto de las últimas ofertas y novedades
        </h3>
      </div>
      <form className="flex justify-between bg-white text-gray-600 rounded-lg mr-2" onSubmit={handleSubmit}>
        <label htmlFor="email" className="sr-only">Correo electrónico</label>
        <input
          className="contact-form__input"
          type="email"
          name="email"
          id="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button text="Suscríbete" />
      </form>
    </section>
  );
}
