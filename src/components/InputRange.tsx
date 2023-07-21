import { ChangeEvent, useState } from "react";

interface InputRangeProps {
  label: string;
  min?: number;
  max?: number;
  onChange(val: number): void;
}

export function InputRange({
  label,
  min = 1,
  max = 10,
  onChange,
}: InputRangeProps) {
  const [val, setVal] = useState(Math.floor((min + max) / 2));

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const formattedNumber = Number(value);
    setVal(formattedNumber);
    onChange(formattedNumber);
  };

  return (
    <div className="grid gap-1">
      <label className="tracking-wider text-xs text-neutral-500">{label}</label>
      <div className="flex gap-3 items-center">
        <input
          type="range"
          min={min}
          max={max}
          value={val}
          onChange={handleChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="border border-neutral-200 w-8 h-8 text-xs font-bold flex items-center justify-center bg-neutral-100 rounded">
          {val}
        </div>
      </div>
    </div>
  );
}
