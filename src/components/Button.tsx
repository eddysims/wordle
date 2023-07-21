import clsx from "clsx";

interface ButtonProps {
  label: string;
  onClick?(): void;
  type?: "button" | "submit";
  disabled?: boolean;
  size?: "base" | "small";
}

export function Button({
  label,
  type = "button",
  disabled,
  size = "base",
  onClick,
}: ButtonProps) {
  const className = clsx(
    "px-5 rounded",
    "uppercase font-bold tracking-wider text-white",
    "transition-colors duration-300",
    "disabled:cursor-not-allowed",
    "bg-green-500 hover:bg-green-600 disabled:bg-neutral-300",
    {
      "h-12": size === "base",
      "h-8 text-xs": size === "small",
    }
  );

  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
