import Heading from "./Heading";
import Sidebar from "./Sidebar";
import classNames from "classnames/bind";

// const cx = classNames.bind(style)

function DefaultLayout({ children }) {
  return (
    <>
      <div className="container p-0 overflow-hidden">
        <div className="row">
          <div className="col-3 position-relative">
            <Sidebar />
          </div>
          <div className="col-9">
            <Heading />
            <div className="content">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DefaultLayout;
