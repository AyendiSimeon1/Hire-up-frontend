import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand custom-brand" href="#">
          Brand
        </a>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link custom-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <button className="btn custom-button ms-auto">Sign Up</button>
      </div>
    </nav>
    );
}

export default Navbar;