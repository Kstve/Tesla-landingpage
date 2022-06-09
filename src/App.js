import "./App.css";
import Header from "./components/Header";
import Logo from "./assets/logo.svg";
import Menu from "./assets/menu.svg";
import Item from "./components/Item";
import ModelS from "./assets/models.jpg";
import ModelX from "./assets/modelx.jpg";
import SolarPanel from "./assets/solar_panel.jpg";
import SolarRoof from "./assets/solar_roof.jpg";

function App() {
  return (
    <div className="App">
      <Header logo={Logo} menu={Menu} />
      <div className="container">
        <Item heading="Model S" img={ModelS} />
        <Item heading="Model X" img={ModelX} />
        <Item heading="Solar Panel" img={SolarPanel} />
        <Item heading="Solar Panel" img={SolarRoof} />
      </div>
    </div>
  );
}

export default App;
