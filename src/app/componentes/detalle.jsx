"use client";
import React, { useState, useEffect} from "react";

export default function Detalle() {
  const [peliculaDetalle, setPeliculaDetalle] = useState([]);

 const apiKey = "3a7cc84c049eb5d333e91f8b63d07b4c";

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}language=es-ES&append_to_response=videos,credits`)
         .then((res) => res.json()) 
        .then((data) => setPeliculaDetalle(data));
    });

  return (
    <div>
<div className="tarjetas">
 <img
            src={
              `https://image.tmdb.org/t/p/w200${peliculaDetalle.poster_path}`
            }
            alt=""
          />
           <h3>{peliculaDetalle.title}</h3>
            <h3 className="text-2xl font-semibold mb-2">Sinopsis</h3>
            <p className="text-lg">{peliculaDetalle.overview}</p> 
           <h3> Calificacion: {peliculaDetalle.vote_average }</h3>
</div>
      
    </div>
  );
}