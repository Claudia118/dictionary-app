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
        <footer className="text-center footer">
          Coded by Claudia Ortiz and is open source{" "}
          <a
            href="https://github.com/Claudia118/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
