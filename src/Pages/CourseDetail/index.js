import classNames from "classnames/bind";
import styles from "./CourseDetail.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function CourseDetail() {
  return (
    <>
      <div className={cx("course-detail-container")}>
        <div className="row">
          <div className="col-8"></div>
          <div className="col-4 p-0">
            <div
              className={cx("question-wrapper", "d-flex", "flex-column", "p-4")}
            >
              <div className={cx("edit-question-container")}>
                <button className={cx("edit-question-btn")}>
                  Edit question
                </button>
              </div>
              <div
                className={cx(
                  "question-container",
                  "px-2",
                  "position-relative"
                )}
              >
                <h3
                  className={cx(
                    "question",
                    "mx-3",
                    "p-0",
                    "mb-0",
                    "text-center",
                    "rounded-3"
                  )}
                >
                  Question 1
                </h3>
                <div className={cx("delete-btn-container")}>
                  <button className={cx("delete-question", "p-2")}>
                    <FontAwesomeIcon icon={faClose} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseDetail;
