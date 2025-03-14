"use client";

import Image from "next/image";
import React, { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/1937336/pexels-photo-1937336.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/250288/pexels-photo-250288.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const ProductImages = () => {
    const [index, setIndex] = useState(0);
  
    return (
      <div className="">
        <div className="h-[500px] relative">
          <Image
            src={images[index].url}
            alt=""
            fill
            sizes="50vw"
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between gap-4 mt-8">
          {images.map((item:any, i:number) => (
            <div
              className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
              key={item._id}
              onClick={() => setIndex(i)}
            >
              <Image
                src={item.url}
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
