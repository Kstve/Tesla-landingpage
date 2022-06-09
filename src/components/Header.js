import "./Header.css";

const Header = ({ logo, menu }) => {
  return (
    <div className="header">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>

      <div className="nav-links">
        <a href="/">Model S</a>
        <a href="/">Model X</a>
        <a href="/">Solar Roof</a>
        <a href="/">Solar Panels</a>
      </div>

      <div className="mobile-menu">
        <img src={menu} alt="mobile-menu" />
      </div>
    </div>
  );
};

export default Header;
