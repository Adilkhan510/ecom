import React from "react";
import styled from "styled-components";
import Navbar from "../components/nav/Navbar";

const MainWrapper = styled.div`
  height: calc(100vh - 6rem);
`;

function Layout() {
  return (
    <>
      <Navbar />
      <MainWrapper></MainWrapper>
    </>
  );
}

export default Layout;
