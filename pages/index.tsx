import Head from "next/head";
import { GetServerSideProps } from "next";

import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import { Product } from "../models/product";
import Footer from "../components/Footer";

type Props = {
  products: Product[];
};

export default function Home({ products }: Props) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="max-w-7xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </main>
      <Footer />
    </div>
  );
}

export const getServerSideProps = async (context: GetServerSideProps) => {
  const products = (await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  )) as Product[];

  return {
    props: {
      products,
    },
  };
};
