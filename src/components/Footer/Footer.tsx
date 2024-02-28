import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="bg-primary/10 py-8">
        <p className="text-center">
          © 2024 - Developed by
          <span className="font-semibold"> Peacover </span>- All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
