import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";
import DefaultPage from "./views/DefaultPage";
import Bw from "./views/Bw";
import OmOs from "./views/OmOs";
import Cases from "./views/Cases";
import Kontakt from "./views/Kontakt";
import Quiz from "./views/Quiz"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DefaultPage />,
      },
      {
        path: "/bw",
        element: <Bw />,
      },
      {
        path: "/OmOs",
        element: <OmOs />,
      },
      {
        path: "/Cases",
        element: <Cases />
      },
      {
        path: "/Kontakt",
        element: <Kontakt />
      },
      {
        path: "/Quiz",
        element: <Quiz />
      },
      // {
      //   path: "*",
      //   element: <NotFound />,
      // }
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
