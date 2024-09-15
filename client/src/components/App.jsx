import React from "react";
import { useOutletContext } from "react-router-dom";
import Banner from "./Banner";
import Social from "./Social"; 
import New from "./New";
import Footer from "./Footer";
import FAQ from "./FAQ";
import ShowSale from "./ShowSale";

const App = () => {
  const { collectionRef } = useOutletContext();

  return (
    <>
      <Banner CollectionRef={collectionRef} />
      <ShowSale ref={collectionRef} />
      <New />
      <Social />
      <FAQ />
      <Footer />
    </>
  );
};

export default App;
