import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Error-Page";
import Home from "../pages/Home";
import CompetitorDetails from "../pages/CompetitorDetails";
import { paths } from "./paths";

export const router = createBrowserRouter([
  {
    path: paths.root,
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: paths.competitorDetails,
    element: <CompetitorDetails />,
    errorElement: <ErrorPage />,
  },
]);
