import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";
import DefaultPage from "./views/DefaultPage";
import Bw from "./views/Bw";
import OmOs from "./views/OmOs";
import Cases from "./views/Cases";
import Kontakt from "./views/Kontakt";
import Quiz from "./views/Quiz";


const router = createBrowserRouter([ 
  {
    path: "/", // Dette er hovedruten og viser altid Layout (med Header og Footer)
    element: <Layout />,
    children: [ // Dette er alle undersider som vises inde i Layout via <Outlet />
      {
        index: true, // Dette betyder at DefaultPage er forsiden
        element: <DefaultPage />,
      },
      {
        path: "/bw", // Undersider
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
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}