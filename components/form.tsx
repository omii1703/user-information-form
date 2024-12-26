"use client";

import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@radix-ui/react-select";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    gender: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      gender: value,
    });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      class: "",
      gender: "",
    });
    alert("Form has been reset");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Submitted: \nName: ${formData.name}\nClass: ${formData.class}\nGender: ${formData.gender}`
    );
    handleReset();
  };

  return (
    <div className="bg-white text-black min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 p-6 border border-gray-300 rounded-lg shadow-lg max-w-md w-full bg-white"
      >
        <h2 className="text-lg font-semibold text-center">User Information</h2>

        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="class" className="block text-sm font-medium">
            Class
          </label>
          <input
            id="class"
            name="class"
            type="text"
            value={formData.class}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="gender" className="block text-sm font-medium">
            Gender
          </label>
          <DropdownMenuRadioGroupDemo
            selectedGender={formData.gender}
            onGenderSelect={handleSelectChange}
          />
        </div>

        <div className="space-x-2 flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition duration-200"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

function DropdownMenuRadioGroupDemo({
  selectedGender,
  onGenderSelect,
}: {
  selectedGender: string;
  onGenderSelect: (value: string) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {selectedGender ? `Selected: ${selectedGender}` : "Select Gender"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select Gender</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={selectedGender}
          onValueChange={onGenderSelect}
        >
          <DropdownMenuRadioItem value="male">Male</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="female">Female</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="other">Other</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
