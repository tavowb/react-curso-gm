import { useState, useEffect } from 'react';
type Data<T> = T | null;
type ErrorType = Error | null;

interface Params<T> {
    data: Data<T>;
    loading: boolean;
    error: ErrorType;
}

    // Definimos los estados para manejar los datos, el estado de carga y los errores
    // T es un tipo genérico que se puede usar para cualquier tipo de dato
    // Data<T> es un tipo que puede ser T o null, lo que permite manejar la ausencia de datos
    // ErrorType es un tipo que puede ser Error o null, lo que permite manejar la
export const useFetch = <T>(url: string): Params<T>  => {
    const [data, setData] = useState<Data<T>>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<ErrorType>(null);
    useEffect(() => {
        // Usamos AbortController para cancelar la solicitud si el componente se desmonta
        // Esto es útil para evitar actualizaciones de estado en componentes desmontados
        const controller = new AbortController();
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch(url, controller);
                if (!response.ok) {
                    throw new Error(`Error en la peticion`);
                }
                const jsonData: T = await response.json();
                setData(jsonData);
                setError(null);
            }catch(err){
                setError(err as Error);
            }finally {
                setLoading(false);
            }
        }
        fetchData();

        return () => {
            controller.abort(); // Cancelar la solicitud si el componente se desmonta
        };

    },[url]);

    return { data, loading, error };
}