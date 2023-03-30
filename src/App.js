import React from "react";
import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import ApodContainer from "./components/ApodContainer";

function App() {
  const [apodData, setApodData] = useState();
  const [datePicker, setDatePicker] = useState(
    new Date("2022-03-30").toISOString().slice(0, 10)
  );

  useEffect(() => {
    // Optionally the request above could also be done as
    axios
      .get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: "DEMO_KEY",
          date: datePicker,
        },
      })
      .then(function (response) {
        console.log(response);
        setApodData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    console.log("sayfam render oldu");
  }, [datePicker]);

  return (
    <div className="App">
      <ApodContainer
        data={apodData}
        dateChange={setDatePicker}
        currentDate={datePicker}
      />
    </div>
  );
}

export default App;
