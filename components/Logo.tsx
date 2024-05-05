import { BadgeDollarSign } from "lucide-react";
import React from "react";

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <BadgeDollarSign className="stroke h-11 w-11 stroke-orange-600 stroke-[1.5]" />
    </a>
  );
}

export function LogoMobile() {
  return (
    <a href="/" className="flex items-center gap-2">
      <BadgeDollarSign className="stroke h-11 w-11 stroke-orange-600 stroke-[1.5]" />
    </a>
  );
}

export default Logo;
