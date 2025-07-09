import "./App.css";
import { useFetch } from "./hooks";
const url = "https://jsonplaceholder.typicode.com/posts";
//User ejemplo
//const user = "https://jsonplaceholder.typicode.com/user";
interface Data {
  name: string;
  lastname: string;
  age: number;
}

function App() {
  const { data, loading, error } = useFetch<Data>(url);
  //const { data: userData, loading: userLoading, error: userError } = useFetch<Data>(user); ejemplo del alias

  // useFetch es un hook personalizado que maneja la logica de la peticion
  // y devuelve los datos, el estado de carga y los errores
  // data es el resultado de la peticion, loading es un booleano que indica si
  // la peticion esta en curso y error es un objeto que contiene el error si lo hay
  if (loading) {
    return <div>Cargando...</div>;
  }
  if (error) {
    return <div>Ups! Hay un error: {error.message}</div>;
  }
  return (
    <>
      <div> {JSON.stringify(data)} </div>
    </>
  );
}

export default App;
