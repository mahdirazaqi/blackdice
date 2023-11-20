interface Props {
  className?: string;
}

const Header = ({ className }: Props) => {
  return <header className={`${className}`}></header>;
};

export default Header;
