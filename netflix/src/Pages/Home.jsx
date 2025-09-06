import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Banner from "../Components/Baner/Banner";
import RowLists from "../Components/Rows/RowLists/RowLists";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <RowLists />
      <Footer />
    </>
  );
};

export default Home;
