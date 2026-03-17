import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import clsx from "clsx";

function Popup() {
  const [isPoped, setIsPoped] = useState(false);
  return (
    <>
      <div className="flex flex-col justify-center items-center relative mt-20 has-[input:checked]:[&>#overlay]:opacity-[0.9] pointer-events-auto has-[input:checked]:[&>#pop]:grid">
        <Input
          type="checkbox"
          className="appearance-none before:content-['popme'] before:border border-black rounded-md px-1 py-2 bg-blue-500 before:text-white cursor-pointer"
        />

        <div
          className="bg-black/50 fixed inset-0 z-10 opacity-0 pointer-events-none"
          id="overlay"
        ></div>
        <div
          className="gap-1 bg-gray-300 px-4 py-2 absolute -top-14 z-20 hidden"
          id="pop"
        >
          <p>input your names to be displayed</p>
          <Input type="text" />
          <Button>display</Button>
          <Button onClick={() => setIsPoped(false)}>close</Button>
        </div>
      </div>
    </>
  );
}

export default Popup;
