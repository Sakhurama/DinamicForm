"use client"
import Link from "next/link";
import { useState } from "react";

export default function BasicForm(){
const [selectedOption, setSelectedOption] = useState("");

const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value)
};

    return(
    <>
        <Link href={"/"}>
            <button>Volver</button>
        </Link>
        <div>
            <h1>Basic Form</h1>
        </div>

        <form action="">
            <label htmlFor="">
                Anime favorito:
                <br />
                <select 
                    onChange={handleSelectChange} 
                    className="text-black"
                    >
                    <option value="">Selecciona...</option>
                    <option value="naruto">Naruto</option>
                    <option value="vinland">Vinland</option>
                    <option value="snk">Atack of Tittan</option>
                </select>
            </label>

            {selectedOption === "naruto" && (
                <>
                <p>¿Personaje Favorito de NARUTO?</p>
                <div>
                    <input type="checkbox" name="naruto" id="naruto" />
                    <label htmlFor="naruto">Naruto</label>

                    <input type="checkbox" name="sasuke" id="sasuke" />
                    <label htmlFor="sasuke">Sasuke</label>

                    <input type="checkbox" name="itachi" id="itachi" />
                    <label htmlFor="itachi">Itachi</label>
                </div>
                </>
            )}

            {selectedOption === "vinland" && (
                <div>
                    <label htmlFor="">¿Por qué te gusta VINLAND?</label>
                    <input type="text" />
                </div>
            )}

            {selectedOption === "snk" ? (
                <div>Eren</div>
            ) : null}
        </form>
    </>
    )
}