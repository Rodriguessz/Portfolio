import React from "react";
import { cn } from "@/lib/utils";


type ButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode;
  className?: string;
};

export const Button = ({
  children,
  onClick,
  className = "",
}: ButtonProps) => {
  return (
    <button className={cn("group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 text-neutral-200 transition hover:scale-110 cursor-pointer", className)} onClick={onClick}>
        <span className="flex gap-2 items-center">{children}</span>
        <div className="absolute inset-0 flex  justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
            <div className="relative h-full w-8 bg-white/20"></div>
        </div>
    </button>
  );
};



