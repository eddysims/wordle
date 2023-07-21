import clsx from "clsx";

interface ButtonProps {
  label: string;
  onClick(): void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function Button({
  label,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const className = clsx(
    "h-12 px-5 rounded",
    "uppercase font-bold tracking-wider text-white",
    "transition-colors duration-300",
    "disabled:cursor-not-allowed",
    "bg-green-500 hover:bg-green-600 disabled:bg-neutral-300"
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
