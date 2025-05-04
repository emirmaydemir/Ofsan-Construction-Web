import { Route } from "@/types/route";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href={Route.HOME}>
      <Image className="mt-6" src="/ofsan-mimarlik.png" alt="logo" width={250} height={100} />
    </Link>
  );
};
