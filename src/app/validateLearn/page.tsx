"use client"
import { useState } from "react";

export default function LearnValidateForm(){
    const [ inputName, setInputName ] = useState("");
    const [ errores, setErrores ] = useState(false);
    const [ enviado, setEnviado ] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!inputName) {
            setErrores(true)
        } else {
            setErrores(false)
            setEnviado(true)
            setInputName("")
        }
    }

    const handleResetForm = () => {
        setInputName("");
        setEnviado(false);
        setErrores(false);
    }

return (
    <>
    <div className="bg-white w-1/5 m-auto mt-32 text-black rounded-md">
        <form 
        className="flex flex-col p-4"
        onSubmit={handleSubmit}>

            {!enviado && (
                <label htmlFor="">
                    Nombre completo:
                    <input 
                        type="text"
                        className={`w-full border-2 p-2 ${errores ? "border-red-600" : "border-black"} ${inputName && "border-green-600"}`}
                        placeholder="Ingrese su nombre completo..."
                        value={inputName}
                        onChange={(e) => setInputName(e.target.value)}
                    />
                </label>
            )}

            {errores && (
                <p className="text-red-600">Debe completar todos los campos</p>
            )}

            {enviado && (
                <div className="flex flex-col justify-center items-center my-3 text-green-600">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="34"  height="34"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor" stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" /><path d="M3.69 8.56a9 9 0 0 0 -.69 3.44" /><path d="M3.69 15.44a9 9 0 0 0 1.95 2.92" /><path d="M8.56 20.31a9 9 0 0 0 3.44 .69" /><path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" /><path d="M20.31 15.44a9 9 0 0 0 .69 -3.44" /><path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" /><path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" /><path d="M9 12l2 2l4 -4" /></svg>
                    <p className="text-center mt-2">Formulario enviado exitosamente</p>
                </div>
            )}

            {!enviado ? (
                <button type="submit" className="mt-4 p-2 bg-orange-200 transition hover:scale-95 hover:bg-orange-300">Enviar</button>
            ) : (
                <button onClick={handleResetForm} className="mt-4 p-2 bg-gray-300 transition hover:scale-95 hover:bg-gray-400">Volver</button>
            ) }
        </form>
    </div>
    </>
)
};