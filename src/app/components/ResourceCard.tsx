"use client";

import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Divider, Link } from "@nextui-org/react";
import { FaLink, FaTag, FaStar, FaStarHalf } from "react-icons/fa";


export function ResourceCard() {
  return (
    <Card className="py-1 w-80 m-5">
      <CardHeader className="pb-0 pt-2 px-4 flex-row justify-between">
        <div className="items-start flex-col">
          <h4 className="text-lg font-bold">Dad cat</h4>
          <p className="text-tiny">@KittyCat</p>
        </div>

      </CardHeader>
      <Divider className="mt-3"/>
      <CardBody className="overflow-visible py-3 px-5 items-center">
        <Image
          alt="A grumpy old tabby cat"
          className="object-cover rounded-x1 w-80 mt-2"
          src="https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </CardBody>
      <CardFooter className="text-sm flex-col items-start px-4">

        <div className="rating flex mb-1"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /></div>
        
        <p>This is my dad! Hes big and stinky and grumpy but he loves us and we love him!</p>
        <div className="flex mt-4 mb-1">
          <FaLink className="text-sm mr-2"/>
          <Link
          isExternal
          showAnchorIcon
          href="www.google.com"
          className="text-tiny"
          >
            A Link
          </Link>
        </div>
        <div className="flex text-tiny">
          <FaTag className="text-tiny mr-2" />
          <div>tag</div>,<div>tag</div>
        </div>
      </CardFooter>
    </Card>
  )
}