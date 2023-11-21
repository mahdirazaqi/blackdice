import CopyrightIcon from "./icons/CopyrightIcon";
import GithubIcon from "./icons/GithubIcon";
import InstagramIcon from "./icons/InstagramIcon";

interface Props {
  className?: string;
}

const Footer = ({ className }: Props) => {
  return (
    <footer
      className={`footer flex flex-wrap justify-center sm:justify-between items-center p-4 bg-base-300 text-base-content ${className}`}
    >
      <aside className="w-full sm:w-fit sm:grow">
        <p className="flex m-auto sm:m-0">
          <CopyrightIcon className="mr-2" />
          کلیه حقوق این وب‌سایت متعلق به بلک‌دایس می‌باشد.
        </p>
      </aside>

      <nav className="flex gap-4 md:place-self-center md:justify-self-end sm:grow-0">
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
