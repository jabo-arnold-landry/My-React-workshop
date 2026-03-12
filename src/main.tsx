import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Calculator from "./calculatorExercises/Calculator";
// import App from "./App.tsx";
// import LayoutAndUseEffectDiff from "./practice/LayoutAndUseEffectDiff.tsx";
// import CounterReduce from "./practice/ReducerPractice.tsx";
// import Count from "./practice/Count.tsx";
// import ContextPractice from "./practice/ContextPractice.tsx";
// import CountryProvider from "./context/ContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Calculator />
  </StrictMode>,
);
