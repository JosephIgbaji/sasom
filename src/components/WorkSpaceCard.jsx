import React from "react";
import BG from "../assets/office-station.jpeg";

const WorkSpaceCard = ({ monthlyPrice, bgImage, title }) => {
  const pricePerDay = monthlyPrice / 4 / 5;
  return (
    <div className="w-[300px] rounded-[20px] border-[#353333] border-[1px] pb-5">
      <div className="relative rounded-t-[20px] h-[150px] overflow-hidden">
        <img src={bgImage} alt="" />
        <div className="absolute left-2 bottom-2 flex gap-5 text-sm text-white">
          <p className="rounded-2xl p-1 bg-primary">{pricePerDay}/day</p>
          <p className="rounded-2xl p-1 bg-primary">{monthlyPrice}/month</p>
        </div>
      </div>
      <div className="mt-3 w-auto px-4">
        <h2 className="font-semibold mb-2">{title}</h2>
        {title === "Freelancer" ? (
          <p className="text-xs font-semibold w-1/3 p-2 rounded-xl text-primary bg-primary bg-opacity-10">
            One Person
          </p>
        ) : (
          <p className="text-xs font-semibold w-10/12 p-2 rounded-xl text-primary bg-primary bg-opacity-10">
            For teams: 3 to 4 people
          </p>
        )}
        {title === "Freelancer" ? (
          <p className="text-sm mt-2">Private office for only one Person</p>
        ) : (
          <p className="text-sm mt-2">An office apartment for Teams</p>
        )}
      </div>
      <div className="px-4 mt-3">
        <div className="flex mb-2 gap-3 text-xs items-center">
          <div className="bg-primary p-2 rounded-[100%] h-6 w-6 flex items-center justify-center text-white">
            @
          </div>
          <p>Fully Furnished</p>
        </div>
        <div className="flex gap-3 text-xs items-center">
          <div className="bg-primary p-2 rounded-[100%] h-6 w-6 flex items-center justify-center text-white">
            @
          </div>
          <p>All amenities included</p>
        </div>
      </div>
    </div>
  );
};

WorkSpaceCard.defaultProps = {
  bgImage: BG,
};

export default WorkSpaceCard;
