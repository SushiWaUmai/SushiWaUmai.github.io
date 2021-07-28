import React, { ReactNode } from "react";
import FooterComponent from "./FooterComponent";
import NavbarComponent from "./NavbarComponent";
import Head from "next/head";

function LayoutComponent({ children }) {
  return (
    <>
      <Head>
        <meta httpEquiv="content-language" content="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Eugene Matsumura" />
        <meta name="publisher" content="Eugene Matsumura" />
        <meta name="copyright" content="Eugene Matsumura" />
      </Head>
      <header>
        <NavbarComponent />
      </header>
      <main>{children}</main>
      <FooterComponent />
    </>
  );
}

export default LayoutComponent;
