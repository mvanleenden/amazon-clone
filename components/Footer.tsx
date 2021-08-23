import FooterSection from "./FooterSection";

const Footer = () => {
  return (
    <footer className="bg-[#232F3E] flex flex-col items-center ">
      <div className="text-white grid grid-cols-2 lg:grid-cols-4 gap-24 py-10">
        <FooterSection
          title="Over ons"
          links={[
            "Werken bij Amazon",
            "Persberichten",
            "Over Amazon",
            "Contactgegevens",
          ]}
        />
        <FooterSection
          title="Verkopen bij ons"
          hidden
          links={[
            "Verkopen op Amazon",
            "Fulfillment by Amazon",
            "Word partner",
            "Uigeven in eigen beheer",
          ]}
        />
        <FooterSection
          title="Amazon-betaalmethoden"
          links={["iDeal", "Cadeaubonnen"]}
        />
        <FooterSection
          hidden
          title="Wij helpen je graag"
          links={[
            "Amazon en COVID-19",
            "Pakketten traceren of bestellingen bekijken",
            "Verzendtarieven en -beleid",
            "Amazon Prime",
            "Content en apparaten beheren",
            "Amazon-app",
            "Hulp",
          ]}
        />
      </div>
      <div className="border-t border-[#3a4553] p-6 w-full flex flex-col items-center"></div>
    </footer>
  );
};

export default Footer;
