import '../Scss/Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand"><a href="/">VISION</a></div>
      <ul className="navbar-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/application">Apply</a></li>
        <li><a href="/Admin">Admin</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
