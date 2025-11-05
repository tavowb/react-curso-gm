//Objetivo: memorizar (en cache) el resultado de ejecutar una funcion COSTOSA, para evitar que se vuelva a llamar el metodo.
// Controlar si el beneficio de memorizar el resultado, es mayor al de volver a ejecutar a calcular el resultado

import { useMemo, useState } from "react";

//Ejemplo
// Tenemos una lista de comprar y ya calculaste el costo total de hacer toda la compra y es x
// Si no agragamos nada, ni tampoco cambio nada, cual es el costo total?
// El mismo siguen siendo x

interface Item {
  id: number;
  name: string;
  price: number;
}

export const ShoppingCart = () => {
  const [item, setItem] = useState<Item[]>([
    { id: 1, name: "Manzana", price: 1.5 },
    { id: 2, name: "Banana", price: 0.5 },
    { id: 3, name: "Naranja", price: 0.8 },
  ]);

  const [discount, setDiscount] = useState<number>(0);

  // Función costosa para calcular el costo total
  const totalCost = useMemo(() => {
    console.log("Calculando costo total...");
    return item.reduce((total, item) => total + item.price, 0);
  }, [item]); // Solo recalcula si 'item' cambia

  const finalCost = useMemo(() => totalCost - discount, [totalCost, discount]);

  const addItem = () => {
    const newItem = {
      id: item.length + 1,
      name: `Producto ${item.length + 1} `,
      price: Math.random() * 5,
    };
    setItem([...item, newItem]);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {item.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Costo Total: ${totalCost.toFixed(2)}</p>
      <div>
        <label>Descuento: </label>
        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(Number(e.target.value))}
        />
      </div>
      <p>Costo Final (con descuento): ${finalCost.toFixed(2)}</p>
      <button onClick={addItem}>Agregar Item</button>
    </div>
  );
};
