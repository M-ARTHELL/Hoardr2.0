import React from "react";
import { TopNavbar } from "../components/TopNavbar"
import { ResourceCard } from "../components/ResourceCard";
import { Sidebar } from "../components/Sidebar";

export default function Test() {
  return (
    <div className="bg-color: red">
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
    </div>
  );
};