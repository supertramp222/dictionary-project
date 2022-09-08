import logo from "./Logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer>
          <div className="horizontal-line" />
          <small>
            This project was coded by Katharina Ramer and is {""}
            <a href="https://github.com/supertramp222/dictionary-project">
              open-sourced on Github
            </a>
            .
          </small>
        </footer>
      </div>
    </div>
  );
}
