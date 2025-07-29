import "./App.css";
import { AppForm, Button, ColorRed } from "./components";
import { GlobalProvider } from "./context/global.provider";

function App() {
  const handleClick = () => {
    console.log("uy me clickio todo");
  };

  const submit = () => {
    console.log("submitted");
  };

  const dimeHola = () => {
    alert("hola !!");
  };

  return (
    <GlobalProvider>
      <ColorRed>
        <Button parentMethod={dimeHola}>My Boton Rojo</Button>
      </ColorRed>
      <Button parentMethod={handleClick}> My Boton Normal</Button>

      <AppForm>
        <button type="submit" onClick={submit}></button>
      </AppForm>
    </GlobalProvider>
  );
}

export default App;
