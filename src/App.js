import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>
        <footer className="App-footer">
          <small>
            The project was coded by Jessica Paker and is{" "}
            <a href="https://github.com/jpaker05/dictionary-application">
              {" "}
              open-sourced{" "}
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
