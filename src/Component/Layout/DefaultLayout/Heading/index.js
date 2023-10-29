import classNames from "classnames/bind";
import styles from "./Heading.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const cx = classNames.bind(styles);

function Heading() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={cx("heading-container")}
        style={
          scrollPosition > 50
            ? {
                position: "fixed",
                height: "60px",
                boxShadow: "0 2px 0px rgba(0, 0, 0, 0.5)",
                backgroundColor: "#262d3f",
                width: "77.5%",
                top: "0",
                left: "22.5%",
                border: "none",
              }
            : {}
        }
      >
        <nav className="navbar">
          <div className="container-fluid">
            <a
              href="/"
              className={cx("navbar-brand", "nav-label")}
              style={scrollPosition > 50 ? { color: "#fff" } : {}}
            >
              Dualingo Admin
            </a>
            <form className="d-flex position-relative">
              <input
                className={cx("search-input", "rounded-2", "w-100", "h-100")}
                placeholder="Search"
                aria-label="Search"
              />
              <button className={cx("search-btn", "position-absolute")}>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Heading;
