import React from 'react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

async function getAllStore() {
  let response = await fetch("http://127.0.0.1:1337/api/stores?populate=*"
  );
  let res = await response.json();
  return res.data;
}

export default async function Homepage() {
  let store = await getAllStore();

  return (
    <div className='grid grid-cols-3 gap-5 pt-4'>
      {store.map((i) => (

        
        <div key={i.documentId} className="border border-b-gray-500 p-5 flex flex-col items-center rounded-md shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 ">
        <h2 className="text-xl font-semibold mb-2 text-center">{i.title}</h2>
        <img
          src={"http://127.0.0.1:1337" + i.image.url}
          className="w-full h-[200px] mb-3"
          alt={i.title}
        />
        <p className="text-gray-700 text-sm mb-4 text-center">{i.description.substring(0, 80) + "..."}</p>
        <div className='flex gap-5'>
            <a href={i.link} target="_blank" rel="noopener noreferrer" className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Go to Web
            </a>
            <a href={"#"} className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Go to Store
            </a>
        </div>
        
      </div>
      ))}
    </div>
  );
}