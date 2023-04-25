import { url } from "inspector";
import { NextPage } from "next";
import React from "react";
import { api } from "~/utils/api";
import Image from "next/image";
import Nav from "~/components/Nav";
import Generate from "~/components/Generate";

const community: NextPage = () => {
  return (
    <div className="py-80">
      <Generate />
    </div>
  );
};

export default community;
