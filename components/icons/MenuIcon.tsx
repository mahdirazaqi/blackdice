interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
}

export default function MenuIcon({
  className,
  width = 20,
  height = 20,
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width={width}
      height={height}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h7"
      />
    </svg>
  );
}
