import { createContext, useState } from "react";
import type { DestinationData } from "../types";

export const CountryData = createContext<any>(undefined);

export default function CountryProvider({ children }) {
  const [data, setData] = useState<DestinationData[]>([]);

  return (
    <CountryData.Provider value={{ data, setData }}>
      {children}
    </CountryData.Provider>
  );
}
