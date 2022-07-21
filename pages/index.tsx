import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/essentials/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="container">
        <h1>Hi there</h1>
      </div>
    </Layout>
  );
};

export default Home;
