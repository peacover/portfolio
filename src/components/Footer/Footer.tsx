import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="bg-primary/10 py-8 bottom-0 w-full">
        <p className="text-center text-primary dark:text-white">
          © 2024 - Developed by
          <span className="font-semibold"> Peacover </span>- All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
