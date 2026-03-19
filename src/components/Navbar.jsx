import { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Shop{" "}
          <span className="" style={{ color: "GrayText" }}>
            Hub
          </span>
        </Link>
        <div className="navbar-links">
          <Link className="navbar-link" to={"/"}>
            Home
          </Link>
          <Link className="navbar-link" to={"/checkout"}>
            Cart
          </Link>
        </div>
        <div className="navbar-auth">
          {!user ? (
            <div className="navbar-auth-links">
              <Link className="btn btn-secondary" to={"/auth"}>
                Login
              </Link>
              <Link className="btn btn-primary" to={"/auth"}>
                Signup
              </Link>
            </div>
          ) : (
            <div className="navbar-user">
              <span className="navbar-greeting ">Hello , {user.email}</span>
              <button className="btn btn-secondary" onClick={logout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
