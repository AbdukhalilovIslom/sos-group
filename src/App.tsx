import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const Main = lazy(() => import("./pages/Main"));

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
