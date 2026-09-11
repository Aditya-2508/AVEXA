type LogoProps = {
  markOnly?: boolean;
  light?: boolean;
};

export function Logo({ markOnly = false }: LogoProps) {
  return (
    <a
      href="#home"
      aria-label="AVEXA home"
      className="focus-ring inline-flex items-center"
    >
      <img
        src="/avexa-logo.png"
        alt="AVEXA"
        className={
          markOnly
            ? "h-10 w-10 object-contain"
            : "h-11 w-auto max-w-[190px] object-contain"
        }
      />
    </a>
  );
}
