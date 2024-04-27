"use client";

import React from "react";
import { Select, SelectItem, Button } from "@nextui-org/react";
import { FaStar } from "react-icons/fa"

export function Sidebar() {
  return(
    <div className="bg-gray-800 w-80 h-screen p-5">
      <h2 className="text-2xl font-semibold">Filters</h2>
      <h3 className="next-lg py-2">Order By</h3>
      <Select label="Rating" className="max-w-xs">
        <SelectItem key="hi-to-lo">Rating: Highest to Lowest</SelectItem>
        <SelectItem key="lo-to-hi">Rating: Lowest to Highest</SelectItem>
      </Select>

      <h3 className="next-lg pt-4 pb-2">By Tag</h3>
      <Button size="sm">Tag</Button>

      <h3 className="next-lg pt-4 pb-2">By Rating</h3>
      <p className="text-sm">Lowest Rating:</p>
      <div className="rating flex text-xl mb-2"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
      <p className="text-sm">Highest Rating:</p>
      <div className="rating flex text-xl"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
    </div>
  )
}