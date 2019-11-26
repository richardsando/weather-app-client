import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import axios from "axios";
import Header from "./components/layouts/Header";
import Time from "./components/Time";
import sunny from "./images/icons/sunny.svg";
import Footer from "./components/layouts/Footer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fetching: null,
      latitude: null,
      longitude: null,
      errorMessage: "",
      value: 1,
      date: new Date(),
      temperature: null,
      summary: null,
      timezone: null,
      currently: null,
      daily: null,
      dataRequested: false,
      getPosition: false
    };
  }

  componentDidUpdate = async (prevProps, prevState) => {
    const response = await axios.get("https://obscure-fjord-88055.herokuapp.com/api/", {
      headers: { latitude: this.state.latitude, longitude: this.state.longitude }
    });
    if (this.state.currently === null) {
      this.setState({
        temperature: response.data.currently.temperature,
        summary: response.data.currently.summary,
        timezone: response.data.timezone,
        currently: response.data.currently,
        hourly: response.data.hourly,
        daily: response.data.daily,
        dataRequested: true
      });
    }
  };

  handleClick = () => {
    window.navigator.geolocation.getCurrentPosition(position => {
      const coords = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
      this.setState({ latitude: coords.latitude, longitude: coords.longitude, getPosition: true });
    });
  };

  render() {
    try {
      const {
        timezone,
        latitude,
        longitude,
        temperature,
        summary,
        currently,
        hourly,
        daily,
        dataRequested
      } = this.state;
      if (!this.state.getPosition) {
        return (
          <>
            <Header />
            <div className="container">
              <Time />

              <button
                className="sunButton"
                onClick={() => {
                  this.handleClick();
                }}
              >
                <img className="sunny" src={sunny} alt="" />
              </button>
              <p className="click-the-sun">Click the sun!</p>
            </div>
            <Footer/>
          </>
        );
      }

      return (
        <>
          <Header />
          <div className="container">
            <Time />
            <Clock
              className="clock"
              hourly={hourly}
              daily={daily}
              currently={currently}
              timezone={timezone}
              latitude={latitude}
              longitude={longitude}
              date={new Date()}
              temperature={temperature}
              summary={summary}
              requested={dataRequested}
              handleClick={e => {
                this.handleClick();
              }}
            />
          </div>
          <Footer />
        </>
      );
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}

export default App;
