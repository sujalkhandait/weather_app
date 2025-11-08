import Card from "./components/Card";
import Search from "./components/Search";
import { WeatherProvider, useWeatherContext } from "./context/Weather.jsx";
import "./index.css";

function AppContent() {
  const { data } = useWeatherContext(); // ✅ Access data from context

  const getBackgroundImage = () => {
    if (!data) return "/default.avif";

    const condition = data.current.condition.text.toLowerCase();
    const isDay = data.current.is_day;
    const temp = data.current.temp_c;

    if (condition.includes("rain")) return "/rainy.avif";
    if (condition.includes("cloud")) return "/cloudy.avif";
    if (condition.includes("partly")) return "/cold.avif";
    if (condition.includes("sun")) return "/sunny1.avif";
    if (condition.includes("clear")) return "/clear.avif";
    if (condition.includes("mist")) return "/mist.avif";
    if (!isDay) return "/night1.avif";

    if (temp < 10) return "/cold.avif";
    if (temp > 30) return "/hot.webp";
    console.log("API KEY FROM ENV:", import.meta.env.VITE_API_KEY);

    return "/default.avif";
  };

  const bgImage = getBackgroundImage();

  return (
    <>
      {/* Background layer */}
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          filter: "brightness(0.8)",
          transition: "background-image 0.8s ease-in-out",
        }}
      ></div>

      {/* Foreground content */}
      <div
        className="container"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textShadow: "1px 1px 5px rgba(0, 0, 0, 0.64)",
          zIndex: 1,
        }}
      >
        <Search />
        <Card />
      </div>
    </>
  );
}

function App() {
  return (
    <WeatherProvider>
      <AppContent />
    </WeatherProvider>
  );
}

export default App;
