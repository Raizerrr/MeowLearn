import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <>
      <div
        className={cx(
          "container-fluid",
          "p-0",
          "position-fixed",
          "sidebar-wrapper"
        )}
      >
        <div className={cx("sidebar-container")}>
          <div className="flex-column  w-100 py-5 ">
            <h1 className={cx("py-4", "ps-5", "text-white")}>Logo</h1>
            <div className={cx("d-flex", "flex-column", "py-3", "mx-5")}>
              <Link
                to="/"
                className={cx("py-3", "ps-5", "nav-item", "rounded-3")}
              >
                Dashboard
              </Link>
              <Link
                to="/courses"
                className={cx("py-3", "ps-5", "nav-item", "rounded-3")}
              >
                Courses
              </Link>
              <Link
                to="/userMananger"
                className={cx("py-3", "ps-5", "nav-item", "rounded-3")}
              >
                User Mananger
              </Link>
              <Link
                to="/profit"
                className={cx("py-3", "ps-5", "nav-item", "rounded-3")}
              >
                Profit
              </Link>
            </div>

            <div
              className={cx(
                "d-flex",
                "setting-nav-container",
                "flex-column",
                "py-3",
                "border-nav-top",
                "mx-5"
              )}
            >
              <Link
                to="/"
                className={cx("py-3", "ps-5", "nav-item", "rounded-3")}
              >
                Setting
              </Link>
            </div>
            <div
              className={cx(
                "d-flex",
                "admin-nav-container",
                "flex-column",
                "py-3",
                "border-nav-top",
                "mx-5"
              )}
            >
              <Link
                to="/profile"
                className={cx("py-3", "ps-5", "nav-item", "rounded-3")}
              >
                Admin Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
