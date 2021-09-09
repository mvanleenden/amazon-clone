import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header";
import ShoppingBasket from "../components/ShoppingBasket";

const Checkout = () => {
  return (
    <>
      <Head>
        <title>Checkout</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-100">
        <Header />
        <main className="lg:flex max-w-screen-2xl mx-auto">
          <div className="flex-grow m-5 shadow-sm">
            <Image
              width={1020}
              height={250}
              src="/prime-day-banner.png"
              objectFit="contain"
              alt="promo"
            />
            <ShoppingBasket />
          </div>
          <div></div>
        </main>
      </div>
    </>
  );
};

export default Checkout;
