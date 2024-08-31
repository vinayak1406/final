"use client";

import React, { useState } from "react";
import { useGridStore } from "../store/gridStore";

const Search = () => {
  const { cellData } = useGridStore();
  const [searchTerm, setSearchTerm] = useState("");

  const results = Object.keys(cellData).filter(key =>
    cellData[key].includes(searchTerm)
  );

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={e => setSearchTerm(cellData[results])}
        className=" p-2 m-2 rounded-lg " 
      />
      <ul>
        {results.map(result =>
          <li key={result}>
            Cell {result}: {cellData[result]}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Search;
