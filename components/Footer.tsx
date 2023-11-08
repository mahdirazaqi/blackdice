import CopyrightIcon from "./icons/CopyrightIcon";
import GithubIcon from "./icons/GithubIcon";
import InstagramIcon from "./icons/InstagramIcon";

interface Props {
  className?: string;
}

const Footer = ({ className }: Props) => {
  return (
    <footer
      className={`footer items-center p-4 bg-base-300 text-base-content ${className}`}
    >
      <aside className="items-center grid-flow-col">
        <CopyrightIcon />

        <p>کلیه حقوق این وب‌سایت متعلق به بلک‌دایس می‌باشد.</p>
      </aside>

      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://github.com/mahdirazaqi/blackdice" target="_blank">
          <GithubIcon />
        </a>

        <a href="https://www.instagram.com/blackdice_games" target="_blank">
          <InstagramIcon />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
