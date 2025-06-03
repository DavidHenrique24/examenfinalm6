"use client";
import Peliculas from "../componentes/peliculas";

export default function MovieExplorer() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold ">Movie Explorer</h1>
       <Peliculas />
    </main>
      
  );
}