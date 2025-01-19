"use client";

import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
interface IProps {
  children: React.ReactNode;
}

export const ActiveLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
