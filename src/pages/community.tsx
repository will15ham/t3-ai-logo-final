import { url } from "inspector";
import { NextPage } from "next";
import React from "react";
import { api } from "~/utils/api";
import Image from "next/image";

const community: NextPage = () => {
  const allImages = api.getAllImages.getAll.useQuery();
  allImages.data?.forEach((image) => {
    console.log(image.url);
  });

  const imageElements = allImages.data?.map((image, index) => (
    <img key={index} src={image.url} />
  ));

  return (
    <section className="w-300 flex h-screen flex-row flex-wrap items-center justify-center gap-x-3">
      {imageElements}
    </section>

    // <section className="w-300 flex h-screen flex-row flex-wrap items-center justify-center gap-x-3">
    //   {allImages.data?.forEach((result, index) => (
    //     <Image
    //       className="rounded-lg"
    //       src={result}
    //       alt={index}
    //       width={100}
    //       height={100}
    //       key={index}
    //     />
    //   ))}
  );
};

export default community;
