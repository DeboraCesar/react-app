import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="weather-app">
      <div className="container">
        <Weather defaultCity="Lisbon" />
      </div>
    </div>
  );
}

export default App;