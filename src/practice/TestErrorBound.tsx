import React from "react";

function TestErrorBound({ heroName }: { heroName: string }) {
  if (heroName === "arnold") throw new Error("unkown hero");
  return <p>{heroName}</p>;
}

export default TestErrorBound;
