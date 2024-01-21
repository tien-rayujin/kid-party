import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/error_page";
import Contact from "./routes/contact";
import Auth from "./routes/auth/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/contacts",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

export default router;
