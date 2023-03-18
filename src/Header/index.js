import "./style.css";
const Header = ({ title }) => (
    <header>
        <h1 className="header">{title.toUpperCase()}</h1>
    </header>
);

export default Header;