import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HostelLayout,
  HostelDashboard,
  Signup,
  Signin,
  Profile,
} from "./pages/index";
import { HostelDetails, NearbyHostel, RecommendedHostel, UploadHostel } from "./components";

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
        element: <NearbyHostel />,
      },
      {
        path: "/hostel/popular",
        element: <RecommendedHostel />,
      },
      {
        path: "/hostel/profile",
        element: <Profile />,
      },

      {
        path: "/hostel/addhostel",
        element: <UploadHostel />
      },
    ],
  },
  {
    path: "/hosteldetails/:hostelId",
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
