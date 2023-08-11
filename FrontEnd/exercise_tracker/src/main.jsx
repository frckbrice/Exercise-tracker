import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import CreateStudent from './Components/createStudent.jsx';
import CreateExercise from './Components/CreateExercise.jsx';
import ExerciseLogs from './Components/exerciseLogs.jsx';
import {Toaster} from 'react-hot-toast'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        children: [
          {
            path: "/createStudent",
            element: <CreateStudent />,
          },
          {
            path: "/createExercise",
            element: <CreateExercise />,
          },
          {
            path: "/exerciseLogs",
            element: <ExerciseLogs />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster position="top-right" reverseOrder={false}/>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
