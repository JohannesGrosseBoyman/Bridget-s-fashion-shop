"use client";

import Image from "next/image";
import React, { useState } from "react";

{/* const images = [
  {
    id: 1,
    url: "/slippers_fendl.jpg",
  },
  {
    id: 2,
    url: "/slippers_grey01.jpg",
  },
  {
    id: 3,
    url: "/slippers_silver.jpg",
  },
  {
    id: 4,
    url: "/slippers_beige01.jpg",
  },
]; */}

const ProductImages = ({items}: {items: any}) => {
    const [index, setIndex] = useState(0);
  
    return (
      <div className="">
        <div className="h-[500px] relative">
          <Image
            src={items[index].image?.url}
            alt=""
            fill
            sizes="50vw"
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between gap-4 mt-8">
          {items.map((item:any, i:number) => (
            <div
              className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
              key={item._id}
              onClick={() => setIndex(i)}
            >
              <Image
                src={item.image?.url}
                alt=""
                fill
                sizes="30vw"
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
export default ProductImages;
