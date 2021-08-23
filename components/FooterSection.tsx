type Props = {
  title: string;
  links: string[];
  hidden?: boolean;
};

const FooterSection = ({ title, links, hidden }: Props) => {
  return (
    <div className={`w-48 ${hidden ? "hidden lg:block" : ""}`}>
      <h4 className="font-extrabold mb-3 whitespace-nowrap">{title}</h4>
      <div className="space-y-1">
        {links.map((link, i) => (
          <p key={`${link}_${i}`} className="link">
            {link}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FooterSection;
