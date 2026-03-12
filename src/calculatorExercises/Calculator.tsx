import { useReducer, useState } from "react";

function Calculator() {
  function reduce(state: any, action: any) {
    switch (action.type) {
      case "+":
        alert(state);
    }
  }
  
  const [state, dispatch] = useReducer(reduce, {data: 0});
  const [digit, setDigit] = useState("");

  const keypadDigits: string[] = [
    "AC",
    "-/+",
    "%",
    "/",
    "7",
    "8",
    "9",
    "X",
    "6",
    "4",
    "5",
    "-",
    "1",
    "2",
    "3",
    "+",
  ];

  const lastDigits = ["0", ".", "="];

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (e.target instanceof HTMLButtonElement) {
      alert(e.target.textContent);
    }
  }

  return (
    <>
      <main>
        <header>{digit}</header>

        <section className="keypad" onClick={handleClick}>
          {keypadDigits.map((value, index) => {
            return (
              <div className="firt-pad" key={index}>
                <button>{value}</button>
              </div>
            );
          })}

          <div className="last-pad">
            {lastDigits.map((operator, index) => {
              return (
                <button
                  key={index}
                  style={{
                    gridColumn: +operator === 0 ? "span 2" : "auto",
                  }}
                >
                  {operator}
                </button>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

export default Calculator;
