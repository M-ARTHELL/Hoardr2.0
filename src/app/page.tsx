import React from "react";
import { TopNavbar } from "./components/TopNavbar"
import { ResourceCard } from "./components/ResourceCard";
import { Sidebar } from "./components/Sidebar";

export default function Home() {
  return (
    <main>
      <span>
        <TopNavbar />
      </span>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div>
          <ResourceCard />
        </div>
      </div>
    </main>
  );
};