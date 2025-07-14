import { Suspense } from "react";
import { Layout } from "./layout/Layout";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center font-semibold text-lg">
          Loading...
        </div>
      }
    >
      <Layout />
      <ToastContainer />
    </Suspense>
  );
}

export default App;
