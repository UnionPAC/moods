import "./App.css";
import Header from "./components/Header";
import MainBoard from "./components/MainBoard";
import unsplash from "./api/unsplash";
import { useEffect, useState } from "react";

const App = () => {
  const [pins, setPins] = useState([]);

  const getUnsplashImgs = (searchVal) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: searchVal,
      },
    });
  };

  const onSubmit = (searchVal) => {
    console.log(`On search submit: ${searchVal}`);
    getUnsplashImgs(searchVal).then((res) => {
      let results = res.data.results;

      let newPins = [...results, ...pins];

      newPins.sort((a, b) => 0.5 - Math.random());
      setPins(newPins);
    });
  };

  // hardcoded pins on start (later to be most recently created pins)
  const getNewPins = (pinTerm) => {
    let promises = [];
    let pinData = [];

    let pins = ["forest", "street art", "water", "tokyo"];

    pins.forEach((pinTerm) => {
      promises.push(
        getUnsplashImgs(pinTerm).then((res) => {
          let results = res.data.results;
          pinData = pinData.concat(results);
          pinData.sort((a, b) => 0.5 - Math.random());
        })
      );
    });

    Promise.all(promises).then(() => {
      setPins(pinData);
    });
  };

  useEffect(() => {
    getNewPins();
  }, []);

  return (
    <div className="App">
      <Header onSubmit={onSubmit} />
      <MainBoard pins={pins} />
    </div>
  );
};

export default App;
