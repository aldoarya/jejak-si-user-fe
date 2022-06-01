import React from "react";
import Image from "next/image";
import Link from "next/link";

export const DashboardLayout = ({ children }) => {
  return (
    <>
      <nav className="w-full p-4">
        <div className="relative h-9">
          <Image
            src="/assets/img/fundwise-logo.png"
            layout="fill"
            objectFit="contain"
            alt="Fundwise Logo"
          />
        </div>

        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/spending">Spending</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
};
