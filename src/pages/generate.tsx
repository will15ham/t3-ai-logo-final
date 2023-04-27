import { url } from "inspector";
import { NextPage } from "next";
import React from "react";
import { api } from "~/utils/api";
import Image from "next/image";
import Nav from "~/components/Nav";
import Link from "next/link";
import { Formik, Field, Form } from "formik";
import { useSession } from "next-auth/react";
import GenerateForm from "~/components/Generate";

const Generate: NextPage = () => {
  return (
    <div className=" mx-auto py-20">
      <GenerateForm />
    </div>
  );
};

export default Generate;
