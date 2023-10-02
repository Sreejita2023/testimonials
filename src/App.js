import "./App.css";
import Box from "./components/Box";
import Head from "./components/Head";

function App() {
  return (
    <div className="bg-main_color w-screen flex flex-col h-screen items-center justify-center">
      <div><Head/></div>
      <div className="w-full flex justify-center"><Box/></div>
    </div>
  );
}

export default App;
