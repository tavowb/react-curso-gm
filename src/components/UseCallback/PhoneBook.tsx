// Objetivo: Se usa para memorizar una instancia de una función
// entonces Cual es la diferencia con useMemo?
// useMemo memoriza el resultado de una función
// useCallback memoriza una instancia de una función

import { memo, useCallback, useState } from "react";

// Ejemplo:
// Supongamos que tenemos un numero de telefono al que yo llamo con frecuencia
// en vez de marcarlo continuamente, lo vamos a almacenar en los contactos del telefono
// a menos que el numero de telefono cambie solo ultilizo el mismo numero de telefono o contacto

interface Contact {
  id: number;
  name: string;
  phone: string;
}

interface ContactProps {
  contact: Contact;
  onCall: (phone: string) => void;
}

const ContactCard = memo(({ contact, onCall }: ContactProps) => {
  console.log(`Renderizando tarjeta de contacto: ${contact.name}`);
  return (
    <div>
      <h3>{contact.name}</h3>
      <button onClick={() => onCall(contact.name)}>Llamar</button>
    </div>
  );
});

export const PhoneBook = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    { id: 1, name: "Juan", phone: "123-456-7890" },
    { id: 2, name: "María", phone: "987-654-3210" },
    { id: 3, name: "Pedro", phone: "555-555-5555" },
  ]);

  const [log, setLog] = useState<string>("");

  // Función para llamar a un contacto
  const makeCall = useCallback((name: string) => {
    setLog(`Llamando a ${name}`);
  }, []); // La función se memoriza y no cambia a menos que cambien las dependencias (en este caso, ninguna)

  const addContact = () => {
    const newContact = {
      id: contacts.length + 1,
      name: `Contacto ${contacts.length + 1}`,
      phone: `000-000-000${contacts.length + 1}`,
    };
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <h2>Angenda de Contactos</h2>
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} onCall={makeCall} />
      ))}

      <button onClick={addContact}>Agregar Contacto</button>

      <h3>Registro de Llamadas</h3>
      <pre>{log}</pre>
    </div>
  );
};
