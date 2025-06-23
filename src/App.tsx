import { Suspense } from "react";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="">
      <Suspense
        fallback={
          <div className="flex items-center justify-center font-semibold text-lg">
            Loading...
          </div>
        }
      >
        <Layout />
      </Suspense>
    </div>
  );
}

export default App;
