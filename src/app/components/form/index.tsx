"use client"

import BasicForm from "@/app/basicForm/page";
import Link from "next/link";
import { useState } from "react";

export default function Form() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");
  const [opcionLenguajes, setOpcionLenguajes] = useState("");
  const [opcionDura, setOpcionDura] = useState("");

  const trabajosDuros = [
    {id: "arena", trabajo: "Llevar arena", descripcion: "llevar arena"},
    {id: "ladrillos", trabajo: "Cargar ladrillos", descripcion: "cargar ladrillos"},
    {id: "concreto", trabajo: "Batir concreto", descripcion: "batir concreto"},
  ]

  const handleChangeSelect = (event:any) => {
    setOpcionSeleccionada(event.target.value);
    setOpcionLenguajes("");
    setOpcionDura("");
  }

  const handleChangeLenguajes = (event:any) => {
    setOpcionLenguajes(event.target.value);
  }

  const handleChangeDuro = (event:any) => {
    setOpcionDura(event.target.value);
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Formulario Dinámico
      </h2>
      <form>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nombre"
            type="text"
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="apellido"
          >
            Apellido
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="apellido"
            type="text"
            placeholder="Ingresa tu apellido"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="anime-favorito"
          >
            ¿Cuál es tu cargo?
          </label>
          <div className="relative">
            <select
              onChange={handleChangeSelect}
              className="block appearance-none text-gray-700 w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="anime-favorito"
            >
              <option value="">Selecciona...</option>
              <option value="programador">Programador</option>
              <option value="diseñador">Diseñador</option>
              <option value="constructor">Constructor</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {opcionSeleccionada === "programador" && (
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lenguaje"
            >
              ¿Con cuál lenguaje?
            </label>
            <div className="relative">
              <select
                onChange={handleChangeLenguajes}
                className="block appearance-none text-gray-700 w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                id="lenguaje"
              >
                <option value="">Selecciona...</option>
                <option value="js">Javascript</option>
                <option value="tsx">Typescript</option>
                <option value="py">Phyton</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        )}

        {opcionSeleccionada === "diseñador" && (
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="apellido"
            >
              ¿Qué tanto te gusta?
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              id="apellido"
              type="range"
              placeholder="Ingresa tu apellido"
            />
          </div>
        )}

        {opcionSeleccionada === "constructor" && (
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              >
              ¿Qué es lo MAS duro?
            </label>
            <ul className="text-black">
              {trabajosDuros.map((objeto) => (
                <li
                  key={objeto.id}
                >
                  <input 
                    type="radio" 
                    name="grupoDeTrabajos" 
                    id={objeto.id} 
                    value={objeto.descripcion} 
                    onChange={handleChangeDuro}
                  />
                  <label 
                    htmlFor={objeto.id} 
                    className="pl-2"
                  >
                    {objeto.trabajo}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}

        {opcionLenguajes  && (
          <div className="text-black text-center mb-4">
            <p>¡Que buen lenguaje!</p>
          </div>
        )}

        {opcionDura && (
          <div>
            <label 
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="pqDuro">
                ¿Por qué {opcionDura} es duro?
              </label>
            <textarea id="pqDuro" className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        )}

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            Enviar
          </button>
        </div>
      </form>
      <div>
        <Link href={"basicForm"}>
          <p>Ir al formulario básico</p>
        </Link>
      </div>
    </div>
  );
}
