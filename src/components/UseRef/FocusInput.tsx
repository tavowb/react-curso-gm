import { useRef } from "react";

export const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (!inputRef.current) {
      console.log("Input no existe");
      return;
    }
    inputRef.current.focus();
    console.log("Input focalizado");
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Escribe algo..." />
      <button onClick={handleButtonClick}>Enfocar en el Input</button>
    </div>
  );
};
