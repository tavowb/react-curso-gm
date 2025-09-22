import "./App.css";
import { Modal } from "./components";
import { useModalContext } from "./components/Modal/context/";

function App() {
  const { setState } = useModalContext();

  const openModal = () => {
    setState(true);
  };

  return (
    <>
      <Modal>
        <h1>Hola Mimi</h1>
        <h3>Te quiero</h3>
      </Modal>
      <button onClick={openModal}>Abrete sesamo</button>
    </>
  );
}

export default App;
