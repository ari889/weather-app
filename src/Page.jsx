import { useContext, useEffect, useState } from "react";
import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import ScatteredCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
import ShowersImage from "./assets/backgrounds/shower-rain.jpg";
import SnowImage from "./assets/backgrounds/snow.jpg";
import SunnyImage from "./assets/backgrounds/sunny.jpg";
import ThunderStormImage from "./assets/backgrounds/thunderstorm.jpg";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherContext } from "./context";

const Page = () => {
  const { weatherData, loading } = useContext(WeatherContext);

  const [climateImage, setClimateImage] = useState("");

  useEffect(() => {
    switch (weatherData?.climate) {
      case "Clear":
        setClimateImage(ClearSkyImage);
        break;
      case "Cloud":
        setClimateImage(FewCloudsImage);
        break;
      case "Mist":
        setClimateImage(MistImage);
        break;
      case "Rain":
        setClimateImage(RainyDayImage);
        break;
      case "Scattered Clouds":
        setClimateImage(ScatteredCloudsImage);
        break;
      case "Showers":
        setClimateImage(ShowersImage);
        break;
      case "Snow":
        setClimateImage(SnowImage);
        break;
      case "Thunder":
        setClimateImage(ThunderStormImage);
        break;
      default:
        setClimateImage(SunnyImage);
        break;
    }
  }, [weatherData.climate]);

  return loading?.state ? (
    <div className="flex bg-gray-200 rounded-md w-96 mt-14 mx-auto">
      <p className="text-center text-3xl text-black p-4">{loading?.message}</p>
    </div>
  ) : (
    <div
      style={{ backgroundImage: `url(${climateImage})` }}
      className="grid place-items-center h-screen bg-no-repeat bg-cover"
    >
      <Header />
      <main>
        <section className="">
          <WeatherBoard />
        </section>
      </main>
    </div>
  );
};
export default Page;
