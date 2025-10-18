import logo from "./assets/chef-claude-icon.png";

export default function Header() {
    return (
        <header>
            <img src={logo} alt="Logo" />
            <span>Chef Claude</span>
        </header>
    );
}
