import CopyrightIcon from "./icons/CopyrightIcon";
import GithubIcon from "./icons/GithubIcon";
import InstagramIcon from "./icons/InstagramIcon";

interface Props {
  className?: string;
}

const Footer = ({ className }: Props) => {
  return (
    <footer
      className={`footer flex flex-wrap justify-center items-center p-4 bg-base-300 text-base-content ${className}`}
    >
      <aside className="w-fit">
        <p>کلیه حقوق این وب‌سایت متعلق به بلک‌دایس می‌باشد.</p>
      </aside>
    </footer>
  );
};

export default Footer;
