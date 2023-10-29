import classNames from "classnames/bind";
import Countup from "react-countup";
import styles from "./Dashboard.module.scss";
import {
  CartesianGrid,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const data = [
  { name: "May", Benefit: 100, Deal: 400, amt: 2400 },
  { name: "Jun", Benefit: 800, Deal: 2000, amt: 2400 },
  { name: "Jul", Benefit: 300, Deal: 300, amt: 2400 },
  { name: "Aug", Benefit: 200, Deal: 500, amt: 2400 },
  { name: "Sep", Benefit: 300, Deal: 400, amt: 2400 },
];

const renderLineChart = (
  <ResponsiveContainer width="100%" height="100%">
    <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <Legend
        width={100}
        wrapperStyle={{
          top: 15,
          right: 50,
          backgroundColor: "#f5f5f5",
          border: "1px solid #d5d5d5",
          borderRadius: 3,
        }}
      />

      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />

      <Tooltip />
      <Area
        type="monotone"
        dataKey="Deal"
        stackId="1"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorUv)"
      />

      <Area
        type="monotone"
        dataKey="Benefit"
        stackId="2"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorPv)"
      />
    </AreaChart>
  </ResponsiveContainer>
);
const cx = classNames.bind(styles);

function Dashboard() {
  return (
    <>
      <div className="container py-3">
        <h1 className={cx("heading-title")}>DashBoard</h1>
        {/* analist */}

        <div className={cx("analist-section", "py-5", "px-3")}>
          <div className="row">
            <div className="col-5 pe-5">
              <div className={cx("cards-wraper", "row", "rounded-4")}>
                <div className="col-6 p-0 m-0">
                  <div
                    className={cx(
                      "card-container",
                      "p-4",
                      "border-left",
                      "border-radius-top-left"
                    )}
                  >
                    <h2 className={cx("card-title", "pb-1")}>Visitors</h2>
                    <h2 className={cx("card-number")}>
                      {" "}
                      <Countup
                        start={0}
                        end={30794}
                        duration={1}
                        delay={0}
                      />{" "}
                    </h2>
                    <div className={cx("card-percent", "increse")}>+0%</div>
                  </div>
                </div>
                <div className="col-6 p-0 m-0">
                  <div
                    className={cx(
                      "card-container",
                      "p-4",
                      "border-radius-top-right"
                    )}
                  >
                    <h2 className={cx("card-title", "pb-1")}>Contacts</h2>
                    <h2 className={cx("card-number")}>
                      {" "}
                      <Countup
                        start={0}
                        end={30794}
                        duration={1}
                        delay={0}
                      />{" "}
                    </h2>
                    <div className={cx("card-percent", "increse")}>+0%</div>
                  </div>
                </div>
                <div className="col-6 p-0 m-0">
                  <div
                    className={cx(
                      "card-container",
                      "p-4",
                      "border-left",
                      "border-top",
                      "border-radius-bottom-lef"
                    )}
                  >
                    <h2 className={cx("card-title", "pb-1")}>Earings</h2>
                    <h2 className={cx("card-number")}>
                      {" "}
                      <Countup
                        start={0}
                        end={30794}
                        duration={1}
                        delay={0}
                      />{" "}
                    </h2>
                    <div className={cx("card-percent", "increse")}>+0%</div>
                  </div>
                </div>
                <div className="col-6 p-0 m-0">
                  <div
                    className={cx(
                      "card-container",
                      "p-4",
                      "border-top",
                      "border-radius-bottom-right"
                    )}
                  >
                    <h2 className={cx("card-title", "pb-1")}>Visitors</h2>
                    <h2 className={cx("card-number")}>
                      {" "}
                      <Countup
                        start={0}
                        end={30794}
                        duration={1}
                        delay={0}
                      />{" "}
                    </h2>
                    <div className={cx("card-percent", "increse")}>+0%</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={cx("col-7", "cards-wraper", "rounded-4")}
              style={{ maxHeight: "370px" }}
            >
              {/* <h2 className={cx("card-title", "pb-1")}>Deal & Benefit</h2> */}
              <div className="p-3 h-100">
                <h2 className={cx("card-title", "pb-1")}>Deal & Benefit</h2>

                {renderLineChart}
              </div>
            </div>
          </div>
        </div>

        {/* analist */}

        <div className="newest-register-member-section cards-wraper pb-5">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">User</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  <img
                    src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww"
                    className={cx("user-img", "rounded-circle")}
                    alt=""
                  />
                  <div className={cx("username", "d-inline-block", "  ps-2")}>
                    @username1
                  </div>
                </td>
                <td>Already join a course</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>
                  <img
                    src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww"
                    className={cx("user-img", "rounded-circle")}
                    alt=""
                  />
                  <div className={cx("username", "d-inline-block", "  ps-2")}>
                    @username1
                  </div>
                </td>
                <td>Already join a course</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>
                  <img
                    src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww"
                    className={cx("user-img", "rounded-circle")}
                    alt=""
                  />
                  <div className={cx("username", "d-inline-block", "  ps-2")}>
                    @username1
                  </div>
                </td>
                <td>Already join a course</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
