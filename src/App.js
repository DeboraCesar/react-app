import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="weather-app">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          <p>
            <a
              className="Git-link"
              href="https://github.com/dianatech-id/react-weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Source
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;