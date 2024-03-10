import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HostelLayout,
  HostelDashboard,
  AgentProfile,
  StudentProfile,
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
        element: <AgentProfile />,
      },
    ],
  },
  {
    path: "/hosteldetails/:hostelID",
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
