import React from "react";

function Button({
  children,
  bg,
  color,
  type,
}: {
  children: React.ReactNode;
  bg: string;
  color: string;
  type?: "submit";
}) {
  return type == "submit" ? (
    <button
      type="submit"
      className={`flex items-center box-border h-10 w-auto px-5 py-auto bg-[${bg}] text-[${color}] rounded-md `}
    >
      <span>{children}</span>
    </button>
  ) : (
    <div
      className={`flex items-center box-border h-10 w-auto px-5 py-auto bg-[${bg}] text-[${color}] rounded-md `}
    >
      <span>{children}</span>
    </div>
  );
}

export default Button;
