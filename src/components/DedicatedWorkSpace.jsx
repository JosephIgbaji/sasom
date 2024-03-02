import React from "react";
import WorkSpaceCard from "./WorkSpaceCard";

const DedicatedWorkSpace = () => {
  return (
    <div>
      <div>
        <h2 className="font-semibold text-2xl mb-2">Dedicated Workspace</h2>
        <p className="text-opacity-50 mb-7">
          A workspace that's all yours, always!
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center flex-1 flex-wrap gap-10 justify-between">
        <WorkSpaceCard title="Freelancer" monthlyPrice={50000} />
        <WorkSpaceCard title="Office" monthlyPrice={70000} />
        <WorkSpaceCard title="Suites" monthlyPrice={100000} />
      </div>
    </div>
  );
};

export default DedicatedWorkSpace;
