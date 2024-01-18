import React from "react";

const ContentCard = ({ icon, title, description }) => {
  return (
    <article className="md:w-[300px] xl:w-[350px] h-[331px] px-[30px] py-[32px] rounded border-primary border">
      <div>{icon}</div>
      <h2 className="text-2xl text-primary">{title}</h2>
      <p className="text-md">{description}</p>
      <div className="text-primary text-sm flex items-center gap-4 mt-5 hover:cursor-pointer w-auto">
        <p>Learn more</p>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.375 6.875L17.5 10M17.5 10L14.375 13.125M17.5 10H2.5"
            stroke="#009EC5"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </article>
  );
};

export default ContentCard;
