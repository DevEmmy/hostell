import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HostelLayout,
  HostelDashboard,
  Signup,
  Signin,
  Profile,
} from "./pages/index";
import { HostelDetails, PopularHostel, RecommendedHostel, UploadHostel } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/hostel",
    element: <HostelLayout />,
    children: [
      {
        path: "/hostel",
        element: <HostelDashboard />,
      },
      {
        path: "/hostel/home",
        element: <HostelDashboard />,
      },
      {
        path: "/hostel/explore",
        element: <RecommendedHostel />,
      },
      {
        path: "/hostel/popular",
        element: <PopularHostel />,
      },
      {
        path: "/hostel/profile",
        element: <Profile />,
      },

      {
        path: "/hostel/addhostel",
        element: <UploadHostel />
      },
      // {
      //   path: "/hostel/:hostelid",
      //   element: <HostelDetails />,
      // },
    ],
  },
  {
    path: "/:hostelid",
    element: <HostelDetails />,
  },

]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
