"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Breadcrumbs = () => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((path) => path !== "");

  paths.forEach((path, index) => {
    paths[index] = path.replace(/-/g, " ");
  });

  return (
    <nav>
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link href="/" className="text-white">
            Home
          </Link>
        </li>

        {paths.map((path, index) => {
          const href = `/${paths.slice(0, index + 1).join("/")}`;
          const isLast = index === paths.length - 1;
          path = path.charAt(0).toUpperCase() + path.slice(1);

          return (
            <li key={path}>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>

                {isLast ? (
                  <span className="text-white font-medium">{path}</span>
                ) : (
                  <Link href={href} className="text-white">
                    {path}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
