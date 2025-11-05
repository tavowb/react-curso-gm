//Objetivo del UseRef
//Nos permite crear una referencia mutable que persiste durante todo el ciclo de vida del componente.
//No causa re-renderizados cuando su valor cambia.

import { useRef, useState } from "react";

//Objetivo 2: hacer referencia a un elemento del DOM
//Podemos usar useRef para acceder directamente a un elemento del DOM y manipularlo si es necesario.

//Ejemplo
// un Marcador de un libro que guarda la última página visitada
// No modifica el contenido del libro, solo guarda un valor que puede ser útil para el usuario.

export const BookReader = () => {
  const currentPageRef = useRef<number>(1); // Inicializa la referencia con la página 1
  const [currentPage, setCurrentPage] = useState<number>(1);

  const nextPage = () => {
    currentPageRef.current += 1; // Actualiza la página actual
    console.log(`Pasaste a la página: ${currentPageRef.current}`);
  };

  const prevPage = () => {
    if (currentPageRef.current === 1) {
      console.log("Ya estás en la primera página.");
      return;
    }
    currentPageRef.current -= 1; // Actualiza la página actual
    console.log(`Regresaste a la página: ${currentPageRef.current}`);
  };

  const goToPage = (page: number) => {
    if (page < 1) {
      console.log("El número de página debe ser mayor o igual a 1.");
      return;
    }
    currentPageRef.current += page; // Salta a una página específica
    setCurrentPage(page);
    console.log(`Saltaste a la página: ${currentPageRef.current}`);
  };

  return (
    <div>
      <h2>Lector de Libros</h2>
      <p>Página actual: {currentPageRef.current}</p>
      <p>Página actual [State]: {currentPage}</p>
      <button onClick={prevPage}>Página Anterior</button>
      <button onClick={nextPage}>Página Siguiente</button>
      <button onClick={() => goToPage(10)}>Ir a la Página 10</button>
    </div>
  );
};
