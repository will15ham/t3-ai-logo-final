import React, { useState } from "react";
import { api } from "~/utils/api";
import { useSession } from "next-auth/react";
import Loading from "./LoadingSpinner";

interface FormValues {
  textInput: string;
  colorInput: string;
  shapeInput: string;
  styleInput: string;
  typeInput: string;
}

const colorOptions = [
  { name: "red", color: "bg-red-500" },
  { name: "green", color: "bg-green-500" },
  { name: "blue", color: "bg-blue-500" },
  { name: "yellow", color: "bg-yellow-500" },
  { name: "orange", color: "bg-orange-500" },
  { name: "purple", color: "bg-purple-500" },
  { name: "pink", color: "bg-pink-500" },
  { name: "teal", color: "bg-teal-500" },
];

const styles = [
  "Minimalist",
  "Metallic",
  "Polygon",
  "Pixelated",
  "Clay",
  "Gradient",
  "Flat",
  "Illustrated",
  "Realism",
];

const shapes = ["Circular", "Rounded", "Square"];

const types = ["Regular", "Professionalism"];

const GenerateForm: React.FC = () => {
  const { data: sessionData } = useSession();

  const [formValues, setFormValues] = useState<FormValues>({
    textInput: "",
    colorInput: "",
    shapeInput: "Circular",
    styleInput: "Minimalist",
    typeInput: "Regular",
  });

  const handleInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  interface input {
    style: string;
    userId: string;
    prompt: string;
    type: string;
    shape: string;
    color: string;
  }
  const mutate = api.generateImages.generateImage.useMutation({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted form values:", formValues);
    const input: input = {
      style: formValues.styleInput,
      userId: sessionData?.user.id || "",
      prompt: formValues.textInput,
      type: formValues.typeInput,
      shape: formValues.shapeInput,
      color: formValues.colorInput,
    };
    // mutate.mutate(input);
  };

  return (
    <>
      <h2 className="px-4 text-2xl">Generate:</h2>
      <p className="px-4 py-2">
        Complete the form below to generate yourself an icon. Each icon
        generated cost 1 credit! <br></br>{" "}
        <span className="font-bold">
          {sessionData
            ? `You currently have ${sessionData.user?.credits.toString()} credits remaining.`
            : ""}
        </span>{" "}
      </p>
      <section className="mx-4 flex flex-wrap justify-center rounded-md border border-slate-700 bg-slate-500 bg-opacity-25 p-4">
        <form onSubmit={handleSubmit} className="mx-auto max-w-md py-20">
          <div className="mb-4">
            <label htmlFor="textInput" className="mb-2 block font-medium">
              Describe your icon using a noun and adjective
            </label>
            <input
              type="text"
              id="textInput"
              name="textInput"
              value={formValues.textInput}
              onChange={handleInputChange}
              className="w-full rounded-md border-gray-300 p-2 text-black shadow-sm"
              placeholder="e.g. 'a happy dog'"
              required
            />
          </div>
          <div className="mb-4">
            <p className="mb-2 block font-medium">Select a color:</p>
            {colorOptions.map((color) => (
              <label
                key={color.name}
                className={`mb-2 mr-4 inline-flex items-center ${
                  color.color
                } h-12 w-12 scale-110 cursor-pointer justify-center rounded-3xl ${
                  formValues.colorInput === color.name
                    ? "ring-2 ring-white"
                    : "bg-opacity-50"
                }`}
              >
                <input
                  type="radio"
                  name="colorInput"
                  value={color.name}
                  checked={formValues.colorInput === color.name}
                  onChange={handleInputChange}
                  className="hidden"
                />
                <span className="sr-only">{color.name}</span>
              </label>
            ))}
          </div>
          <div className="mb-4">
            <label htmlFor="shapeInput" className="font-large mb-2 block">
              Select a shape:
            </label>
            <select
              id="shapeInput"
              name="shapeInput"
              value={formValues.shapeInput}
              onChange={handleInputChange}
              className="block w-full rounded-3xl bg-slate-600 px-3 py-3 text-white"
            >
              {shapes.map((shape) => (
                <option key={shape} value={shape}>
                  {shape}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="styleInput" className="mb-2 block font-medium">
              Select a style:
            </label>
            <select
              id="styleInput"
              name="styleInput"
              value={formValues.styleInput}
              onChange={handleInputChange}
              className="block w-full rounded-3xl bg-slate-600 px-3 py-3 text-white"
            >
              {styles.map((style) => (
                <option key={style} value={style}>
                  {style}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="typeInput" className="mb-2 block font-medium">
              Select a type:
            </label>
            <select
              id="typeInput"
              name="typeInput"
              value={formValues.typeInput}
              onChange={handleInputChange}
              className="block w-full rounded-3xl bg-slate-600 px-3 py-3 text-white"
            >
              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className={
              sessionData
                ? "rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                : "pointer-events-none cursor-not-allowed rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            }
          >
            {sessionData
              ? sessionData.user.credits < 1
                ? `Generate!`
                : "Not enough credits"
              : "Sign in to generate"}{" "}
            {mutate.isLoading ? <Loading /> : ""}
          </button>
        </form>
      </section>
    </>
  );
};

export default GenerateForm;
