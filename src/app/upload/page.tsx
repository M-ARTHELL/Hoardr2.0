'use client'

import React from "react";
import { TopNavbar } from "../components/TopNavbar";
import { Uploader } from "../components/Uploader";
import { TagInput } from "../components/TagInput";
import { Input, Textarea } from "@nextui-org/react";



export default function Upload() {

  const selectedTags = tags => console.log(tags)

  return(
    <main className="h-screen">
      <span><TopNavbar /></span>
      <div className="m-10 p-10 bg-gray-800 rounded-lg">
        <form className="flex flex-col justify-evenly">
          <Input type="text" label="Title" className="mb-10"/>
          <Uploader />
          <Textarea type="text" label="Description" className="mt-10"/>
          <TagInput selectedTags={selectedTags}/>
          {/* <Button type="submit" className="mt-10 w-20">Submit</Button> */}
        </form>
      </div>
    </main>
  )
}