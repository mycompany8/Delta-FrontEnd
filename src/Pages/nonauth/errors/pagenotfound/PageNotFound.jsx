import React from "react";
import Header from "../../../../common/layout/header/Header";
import ErrorLayOut from "../../../../common/layout/error/ErrorLayOut";

import bgimage from "../../../../../public/Images/product4.png";
import cookie from "../../../../../public/Images/cookie.png";
import saved from "../../../../../public/Images/saved.png";
import like from "../../../../../public/Images/like.png";
import gmail from "../../../../../public/Images/gmailorange.png";
import Footer from "../../../../common/layout/footer/Footer";
import sadcookie from "../../../../../public/Images/sadcookie.jpg";

function PageNotFound() {
  const buttons = [
    { name: "Back to Home", onClick: () => alert("Go to home") },
    { name: "View Menu", onClick: () => alert("View menu") },
  ];

  const icons = [
    { src: like, label: "Like" },
    { src: cookie, label: "Cookie" },
    { src: saved, label: "Saved" },
  ];

  const support = {
    icon: gmail,
    title: "Need Help Finding Something?",
    subtitle:
      "Our team is here to help you find exactly what you're looking for.",
    contactText: "Contact Support",
    onContact: () => alert("Support clicked!"),
  };
  return (
    <>
      <Header />

      <ErrorLayOut
      img={sadcookie}
        bgImage={bgimage}
        code="404"
        title="Page Not Found"
        description="It looks like this page crumbled away! Don’t worry, our fresh baked goods are still waiting for you at home."
        buttons={buttons}
        icons={icons}
        support={support}
      />
      <Footer />
    </>
  );
}

export default PageNotFound;
