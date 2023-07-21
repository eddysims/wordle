import { ChangeEvent } from "react";
import { clsx } from "clsx";

interface InputTextProps {
  onChange(val: string): void;
  value?: string;
  minLength?: number;
  maxLength?: number;
}

export function InputText({
  value,
  minLength,
  maxLength,
  onChange,
}: InputTextProps) {
  const className = clsx(
    "h-12 py-3 px-5 rounded outline-0 bg-white w-full",
    "border border-neutral-300",
    "text-lg tracking-wider",
    "focus:shadow-lg transition-shadow duration-300"
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange(value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      minLength={minLength}
      maxLength={maxLength}
      className={className}
    />
  );
}
