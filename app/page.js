import Grid from "@/components/Grid";
import React from "react";
const page = () => {
  return (
    <div>
      <span className="flex items-center text-center text-2xl font-bold">
        <h1>SpreadSheets</h1>
      </span>
      <div className="container mx-auto p-4">
        <Grid />
      </div>
    </div>
  );
};

export default page;
