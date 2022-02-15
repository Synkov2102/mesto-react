import logoPath from "../images/header_logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logoPath} alt="Логотип Место" />
    </header>
  );
}

export default Header;
