import Dashboard from "../Pages/Dashboard";
import Courses from "../Pages/Courses/index";
import Profit from "../Pages/Profit/index";
import Profile from "../Pages/Profile/index";
import UserMananger from "../Pages/UserMananger/index";
import CourseDetail from "../Pages/CourseDetail/index";
import Learn from "../Pages/Learn/learn";

const publicRoutes = [
  { path: "/", component: Dashboard },
  { path: "/courses", component: Courses },
  { path: "/profile", component: Profile },
  { path: "/profit", component: Profit },
  { path: "/userMananger", component: UserMananger },
  { path: "/courseDetail", component: CourseDetail },
  { path: "/learnEdit", component: Learn },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
