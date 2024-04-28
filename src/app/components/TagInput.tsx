'use client'

import React, { useState } from 'react'
import { Input, Button } from '@nextui-org/react'
import { FaXmark } from "react-icons/fa6";


export function TagInput({selectedTags}) {
  let [tags, setTags] = useState([]);

  const addTags = event => {

		if (event.key === "Enter" && event.target.value !== "") {
      event.preventDefault();
      if (tags.includes(event.target.value)) {
        return console.log("already exists")
      } else {
        setTags([...tags, event.target.value])
        selectedTags([...tags, event.target.value])
      }
			event.target.value = ""
		} else if (event.key === "Enter" && event.target.value == "") {
      event.preventDefault();
    }
  };

  const removeTags = index => {
    setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
  };

  return (
    <div className="flex bg-red-800 rounded-xl">
      <div className='flex flex-wrap w-full'>
      <input type="text"
      onKeyDown={event => addTags(event)} className={`self-center h-14 w-full mx-2 outline-none bg-red-800 ${tags.length > 0 ? 'border border-0 border-b-2 border-solid border-black': ''}`} />
        {tags.map((tag, index) => (
          <div key={index} className='p-2'>
            <span className='flex bg-red-500 w-min p-2 rounded-xl'>{tag}
            <FaXmark onClick={() => removeTags(index)} className='ml-1 self-center'/>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}