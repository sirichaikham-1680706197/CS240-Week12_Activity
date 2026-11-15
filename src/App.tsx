import { RouterProvider } from "react-router";
import { router } from "./router";

function App() {
  return (
    <>
      <p className="text-center text-2xl font-bold">This is My App</p>

      <RouterProvider router={router} />
    </>
  );
}

export default App;
