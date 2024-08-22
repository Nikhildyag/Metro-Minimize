import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Header from "./components/Header";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
