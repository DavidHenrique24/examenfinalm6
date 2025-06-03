import React, { useState, useEffect } from "react";


export default function Buscador() {
    const [query, setQuery] = useState("");  // Estado para la busqueda 
    const [peliculas, setPeliculas] = useState([]);

    const API_KEY = "3a7cc84c049eb5d333e91f8b63d07b4c"; 

    useEffect(() => {
        const apiKey = "3a7cc84c049eb5d333e91f8b63d07b4c";

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es&page=1`)
            .then(res => res.json()) //si hay respuesta lo convertimo en json 
            .then(data => {
                setPeliculas(data.results); //actualizamos el estado de pelis con los resultados 
            })
    }, []);


    useEffect(() => {
        // Si no hay texto en query, no hacemos naada 
        if (!query) {  
            return;
        }
      
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=es-ES&query=${encodeURIComponent(query)}&page=1`)
            .then(response => response.json()) 
            .then(data => setPeliculas(data.results)) 
    }, [query]); // Cada que query cambia se ejeccuta 

    return (
       <div>
    
            <h1 className="text-2xl font-bold mb-4">Buscador de Películas</h1>

            <input
                type="text"
                placeholder="Buscar películas..."
                value={query}
                onChange={(e) => setQuery(e.target.value)} //Actualiza el query con el valor del buscador
                className="border p-2 w-full mb-4"
            />
    
            <div className="p-5">Resultados: </div>
        
            <div className="tarjetas">
      
                {peliculas.map((pelicula) => ( 
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
       </div>
    );
}