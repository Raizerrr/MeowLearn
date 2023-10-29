import classNames from "classnames/bind";
import styles from "./Courses.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Courses() {
  return (
    <>
      <div className={cx("courses-container", "py-3")}>
        <div className="row pb-5">
          <div className="col">
            <h1 className={cx("heading-title")}>Course</h1>
          </div>
          <div className="col d-flex justify-content-end mx-3 align-items-center">
            <div className={cx("add-course-container")}>
              <button
                className={cx(
                  "add-new-course-btn",
                  "px-4",
                  "py-2",
                  "rounded-4",
                  "text-white",
                  "position-relative"
                )}
              >
                Add Course
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div
              to="/"
              className={cx(
                "course-inf-container",
                "p-5",
                "text-center",
                "rounded-4",
                "position-relative",
                "bg-1"
              )}
            >
              <div className={cx("modal")}>
                <div className={cx("edit-course-container", "h-100")}>
                  <Link
                    to="/learnEdit"
                    className={cx(
                      "edit-btn-wraper",
                      "d-flex",
                      "align-items-center",
                      "justify-content-center",
                      "h-100"
                    )}
                  >
                    <div
                      className={cx("edit-btn", "px-4", "py-2", "rounded-4")}
                    >
                      Edit Course
                    </div>
                  </Link>
                </div>
              </div>
              <h1 className={cx("course-title")}>Island 1</h1>
            </div>
          </div>
          <div className="col-4">
            <div
              to="/"
              className={cx(
                "course-inf-container",
                "p-5",
                "text-center",
                "rounded-4",
                "position-relative",
                "bg-2"
              )}
            >
              <div className={cx("modal")}>
                <div className={cx("edit-course-container", "h-100")}>
                  <Link
                    to="/learnEdit"
                    className={cx(
                      "edit-btn-wraper",
                      "d-flex",
                      "align-items-center",
                      "justify-content-center",
                      "h-100"
                    )}
                  >
                    <div
                      className={cx("edit-btn", "px-4", "py-2", "rounded-4")}
                    >
                      Edit Course
                    </div>
                  </Link>
                </div>
              </div>
              <h1 className={cx("course-title")}>Island 2</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
