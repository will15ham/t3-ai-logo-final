import { url } from "inspector";
import { NextPage } from "next";
import React from "react";
import { api } from "~/utils/api";
import Image from "next/image";
import Nav from "~/components/Nav";
import Link from "next/link";
import Loading from "~/components/LoadingSpinner";

const community: NextPage = () => {
  const allImages = api.getAllImages.getAll.useQuery();

  return (
    <>
      <section className=" mx-auto py-20">
        <h2 className="px-4 text-2xl">Community:</h2>
        <p className="px-4 py-2">
          Here are the 50 most recent generated designs from the community! To
          generate your own designs,{" "}
          <Link href="/generate" className="text-blue-500">
            click here!
          </Link>
        </p>
        <div className="mx-4 flex flex-wrap justify-center rounded-md border border-slate-700 bg-slate-500 bg-opacity-25 p-4">
          {allImages.isLoading && <Loading />}
          {allImages.data?.map((icon, index) => (
            <div key={index} className="m-2 md:m-4">
              <Image
                src={icon.url}
                alt={""}
                className="mx-auto rounded-lg hover:scale-110"
                height={100}
                width={100}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default community;
