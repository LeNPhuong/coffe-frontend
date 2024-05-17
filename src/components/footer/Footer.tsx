import React from "react";
import styled from "styled-components";
import FooterVer2 from "./FooterVer2";
import FooterVer1 from "./FooterVer1";

const BgBox = styled.div`
  background: url("https://order.thecoffeehouse.com/_nuxt/img/footer-desktop.727f3a2.png");
`;

const Footer: React.FC<NonNullable<unknown>> = () => {
  return (
    <div className="">
      <FooterVer1 />
      <FooterVer2 />
    </div>
  );
};

export default Footer;
