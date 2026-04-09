import dddFourmLogo from "@/assets/dddforumlogo.png";
import "@/App.css";
import { Link } from "react-router-dom";
import { useUser } from "@/context/userContext";

function Header() {
  const { user, setUser } = useUser();

  return (
    <header id="header" className="flex align-center">
      <div id="app-logo">
        <img src={dddFourmLogo} />
      </div>
      <div id="title-container">
        <h1>Domain-Driven Designers</h1>
        <h3>Where awesome domain driven designers are made</h3>
        <a href="/submit">submit</a>
      </div>
      <div id="header-action-button">
        {user ? (
          <>
            <span>{user.username}</span>
            <br />
            <a
              style={{ cursor: "pointer" }}
              onClick={() => {
                setUser(null);
              }}
            >
              Log out
            </a>
          </>
        ) : (
          <Link to="/register">Join</Link>
        )}
      </div>
    </header>
  );
}

export default Header;
