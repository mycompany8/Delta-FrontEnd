import React from "react";
import Header from "../../../../common/layout/header/Header";
import ErrorLayOut from "../../../../common/layout/error/ErrorLayOut";

import Footer from "../../../../common/layout/footer/Footer";
import bgimage from "../../../../../public/Images/product4.png";
import data from "../../../../../public/Images/data.png";
import repair from "../../../../../public/Images/repair.png";
import serverissue from "../../../../../public/Images/serverissue.png";
import gmail from "../../../../../public/Images/gmailorange.png";
import sadcookie from "../../../../../public/Images/sadcookie.jpg";


function ServerError() {
  const buttons = [
    { name: "Refresh Page", onClick: () => alert("Refresh Page") },
    { name: "Contact Support", onClick: () => alert("Contact Support") },
  ];

  const icons = [
    { src: serverissue, label: "Server Issue" },
    { src: repair, label: "Under Repair" },
    { src: data, label: "Data Safe" },
  ];

  const support = {
    icon: gmail,
    title: "What Happened?",
    subtitle:
      "Our servers are experiencing high demand or temporary maintenance. Your data is safe.,and we're working to restore normal service quickly.",
    contactText: "Return Home",
    onContact: () => alert("Go To Homeee!"),
  };
  return (
    <>
      <Header />

      <ErrorLayOut
      img={sadcookie}
        bgImage={bgimage}
        code="500"
        title="Server Error"
        description="Our ovens are working overtime! We're experiencing.some technical difficulties, but our team is on it. Please,try again in a moment."
        buttons={buttons}
        icons={icons}
        support={support}
      />
      <Footer />
    </>
  );
}

export default ServerError;
