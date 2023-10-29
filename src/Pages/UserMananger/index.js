import classNames from "classnames/bind";
import styles from "./UserMananger.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBicycle,
  faRecycle,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function UserMananger() {
  return (
    <>
      <div className="container py-3">
        <h1 className={cx("heading-title")}>User Mananger</h1>
        <div className={cx("fillter-header", "py-3", "mb-3")}>
          <div className="row">
            <div className="col-7">
              <input
                type="text"
                className={cx(
                  "search-input",
                  "py-1",
                  "px-3",
                  "rounded-2",
                  "w-100"
                )}
                placeholder="Search..."
              />
            </div>
            <div className="col-5">
              <div className="row">
                <div className="col-8">
                  <select
                    className={cx(
                      "role-filter",

                      "px-3",
                      "h-100",
                      "w-100"
                    )}
                    aria-label="Default select example"
                  >
                    <option selected>Chose Role</option>
                    <option value="1">Admin</option>
                    <option value="2">User</option>
                  </select>
                </div>
                <div className="col-4">
                  <div className="user-search-button">Search</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={cx("user-container")}>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">User Name</th>
                <th scope="col">Role</th>
                <th scope="col">Scored</th>
                <th scope="col">Start At</th>
                <th scope="col">Resent Update</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <button className="p-1 rounded-1">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UserMananger;
