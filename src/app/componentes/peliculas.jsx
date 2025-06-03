"use client";

import React, {useEffect, useState } from "react"; 
export default function Peliculas() {
    const [peliculas, setPeliculas] = useState([]); 

    useEffect(() => {
        const apiKey = "3a7cc84c049eb5d333e91f8b63d07b4c";

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es&page=1`)
            .then(res => res.json()) //si hay respuesta lo convertimo en json 
            .then(data => {
                setPeliculas(data.results); //actualizamos el estado de pelis con los resultados 
            })
    }, []);

  return (
   <main>
    <h1 className="text-lg font-bold">Peliculas mas Populares </h1>
    <div className="tarjetas">
      {peliculas.map((pelicula) => ( 
        //cada peli es un div con su id
        <div key={pelicula.id} className="p-5">
          <img
            src={
                `https://image.tmdb.org/t/p/w200${pelicula.poster_path}`
            }
            alt=""
          />
          <h3>{pelicula.title}</h3>
           <h3> Calificacion: {pelicula.vote_average }</h3>
         
        </div>
      ))}

         </div>
   </main>
  );
}