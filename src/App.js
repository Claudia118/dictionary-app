import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo" />
      </header>

      <div className="container">
        <main>
          <Dictionary defaultKeyword={"wine"} />
        </main>
        <footer className="text-center">Coded by Claudia Ortiz</footer>
      </div>
    </div>
  );
}
