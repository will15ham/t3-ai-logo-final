import React, { useState } from "react";

type ColorOption = {
  label: string;
  value: string;
};

const colorOptions: ColorOption[] = [
  { label: "Red", value: "#ff0000" },
  { label: "Green", value: "#00ff00" },
  { label: "Blue", value: "#0000ff" },
  { label: "Yellow", value: "#ffff00" },
];

const ColorSelector: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<ColorOption>(
    colorOptions[0]
  );

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selectedOption = colorOptions.find(
      (option) => option.value === selectedValue
    );
    if (selectedOption) {
      setSelectedColor(selectedOption);
    }
  };

  return <form></form>;
};

export default ColorSelector;
