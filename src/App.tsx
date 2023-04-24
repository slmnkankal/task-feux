import "./App.css";
import SwiperContainer from "./components/swiper";
import ResponsiveAppBar from "./components/header";
import Main from "./components/main";

const App = () => {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <SwiperContainer />
      <Main />
    </div>
  );
};

export default App;
