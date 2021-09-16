import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Navigation/Header";
import Wrapper from "./components/UserInfo/Wrapper";
import CarouselWrap from "./components/carousel/CarouselWrap";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Header />
      <Wrapper />
      <CarouselWrap />
      <Footer />
    </div>
  );
}

export default App;
