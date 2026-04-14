import { createContext, useState, type ReactNode } from "react";
import type { DestinationData } from "../types";

export const CountryData = createContext<any>(undefined);
interface ChildProp {
  children: ReactNode;
}

export default function CountryProvider({ children }: ChildProp) {
  const [data, setData] = useState<DestinationData[]>([]);

  return (
    <CountryData.Provider value={{ data, setData }}>
      {children}
    </CountryData.Provider>
  );
}
