import { url } from "inspector";
import { NextPage } from "next";
import React from "react";
import { api } from "~/utils/api";
import Image from "next/image";
import Nav from "~/components/Nav";

const community: NextPage = () => {
  const allImages = api.getAllImages.getAll.useQuery();

  const imageElements = allImages.data?.map((image, index) => (
    <Image
      alt=""
      key={index}
      src={image.url}
      className="rounded-lg hover:scale-110"
      width={100}
      height={100}
    />
  ));

  return (
    <>
      <Nav />
      <div className="container mx-auto py-20">
        <h2>Community:</h2>
        <p>
          Here are the 50 most recent generated designs from the community! To
          generate your own designs, click{" "}
        </p>
        <div className="flex flex-wrap justify-center rounded-md border border-slate-700 bg-slate-500 bg-opacity-25 p-2">
          {allImages.data?.map((icon, index) => (
            <div key={index} className="w-1/4 p-1">
              <Image
                src={icon.url}
                alt={""}
                className="mx-auto rounded-lg hover:scale-110"
                height={100}
                width={100}
                layout="fixed"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default community;
