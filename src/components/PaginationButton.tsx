import type { Dispatch, SetStateAction } from "react";
import Button from "./Button";

interface PropType {
  numberOfPage: number;
  setCurrPage: Dispatch<SetStateAction<number>>;
}

function PaginationButton(prop: PropType) {
  const btns = Array.from({ length: prop.numberOfPage }, (_, i) => i + 1);

  return (
    <>
      {btns.map((number, index) => {
        return (
          <Button
            onClick={(e) => prop.setCurrPage(+e.currentTarget.textContent)}
            key={index}
          >
            {number}
          </Button>
        );
      })}
    </>
  );
}

export default PaginationButton;
