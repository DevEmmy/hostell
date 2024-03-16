import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HostelLayout,
  HostelDashboard,
  AgentProfile,
  StudentProfile,
  Signup,
  Signin,
} from "./pages/index";
import { HostelDetails, NearbyHostel, RecommendedHostel } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HostelLayout />,
    children: [
      {
        path: "/",
        element: <HostelDashboard />,
      },
      {
        path: "/home",
        element: <HostelDashboard />,
      },
      {
        path: "/explore",
        element: <NearbyHostel />,
      },
      {
        path: "/popular",
        element: <RecommendedHostel />,
      },
      {
        path: "/profile",
        element: <StudentProfile />,
      },
    ],
  },
  {
    path: "/hosteldetails/:hostelID",
    element: <HostelDetails />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
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
