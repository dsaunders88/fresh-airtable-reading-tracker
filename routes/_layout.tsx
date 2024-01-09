import { defineLayout } from "$fresh/server.ts";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

export default defineLayout((_req, ctx) => {
  return (
    <>
      <Header />
      <ctx.Component />
      <Footer />
    </>
  );
});
