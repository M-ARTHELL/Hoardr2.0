'use client'

import React, { useState } from "react";
import { TopNavbar } from "../components/TopNavbar";
import { TagInput } from "../components/TagInput";
import { Input, Button, Textarea } from "@nextui-org/react";

export default function Upload() {
  let [tags, setTags] = useState([]);

  function handleSubmitResource(event) {
    event.preventDefault();
    const {title, description, image} = event.target.elements;
    const formData = {title: title.value, description: description.value, image: image.value, tags}
    console.log(JSON.stringify(formData))
  }

  return(
    <main className="h-screen">
      <span><TopNavbar /></span>
      <div className="m-10 p-10 bg-gray-800 rounded-lg">
        <form onSubmit={handleSubmitResource} className="flex flex-col justify-evenly">
          <Input type="text" label="Title" name="title" className="mb-10"/>
          <input type="file" name="image" />
          <Textarea label="Description" name="description" className="my-10"/>
          <TagInput tags={tags} setTags={setTags}/>

          <Button type="submit" className="mt-10 w-20">Submit</Button>
        </form>
      </div>
    </main>
  )
}