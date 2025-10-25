import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";

const RootLayout = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header />

          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
};

export default RootLayout;
