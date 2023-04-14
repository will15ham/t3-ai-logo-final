import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-y-6">
      <section className="flex gap-8 overflow-hidden">
        <Image
          className="rounded-lg"
          src="/img-2PxqLAEeBGeVhYmSSdppeMQA.png"
          alt=""
          width={100}
          height={100}
        ></Image>
        <Image
          className="rounded-lg"
          src="/img-hcCsygjvyAHQwLXUv2ibymO8.png"
          alt=""
          width={100}
          height={100}
        ></Image>
        <Image
          className="rounded-lg"
          src="/img-ks0S7FkhqVOJ8X346Q5Ued9o.png"
          alt=""
          width={100}
          height={100}
        ></Image>
        <Image
          className="rounded-lg"
          src="/img-sq6p4j0lrYEJlYc3RyplTbcv.png"
          alt=""
          width={100}
          height={100}
        ></Image>
        <Image
          className="rounded-lg"
          src="/img-vmao9CygR1ostLIvBhcsLmVy.png"
          alt=""
          width={100}
          height={100}
        ></Image>
      </section>

      <h1 className="text-center text-6xl font-bold text-white">
        Generate icons{" "}
        <span className="font-extrabold text-cyan-400">designs</span> using AI
        <br></br>with the click of a button.
      </h1>
      <p className="text-white">
        Choose from one of many design presets to generate awesome designs!
      </p>
      <Link href="/generate">
        <button className="mb-2 mr-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800">
          Get Started
        </button>
      </Link>
    </main>
  );
};

export default Hero;
