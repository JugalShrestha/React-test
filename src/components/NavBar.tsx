import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <section className="nav-bar">
      <ul className="nav-options">
        <Link to="/" className="logo">
          BIM21
        </Link>
        <div className="pc-options">
          <Link to="/projects" className="nav-option">
            Projects
          </Link>
          <Link to="/routine" className="nav-option">
            Routine
          </Link>
          <Link to="/notes" className="nav-option">
            Notes
          </Link>
          <a
            target="_blank"
            href="https://github.com/JugalShrestha/bim21/blob/main/README.md#help"
            className="nav-option"
          >
            Help
          </a>
        </div>
      </ul>
    </section>
  );
};

export default NavBar;