import React from "react";
import workingSpaceImage from "../assets/working-space.jpeg";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import ContentCard from "../components/ContentCard";
import DedicatedWorkSpace from "../components/DedicatedWorkSpace";

const WorkingSpace = () => {
  return (
    <div className="pt-28">
      {/* <header className="md:h-[600px] bg-primary w-full px-5 md:py-10 md:px-20 bg-opacity-40 flex md:justify-between flex-col md:flex-row items-center gap-10"> */}
      <header className="bg-primary w-full bg-opacity-40 flex lg:justify-between flex-col lg:flex-row items-center gap-10">
        <section className="mt-10 lg:mt-0 lg:pl-20 pl-5">
          <h1 className="text-4xl font-bold text-black mb-5">
            An Innovative setting <br />
            designed to anhance <br /> your efficiency.
          </h1>
          <p>
            Sasom provides both exclusive and collaborative work environments
            tailored for individuals and teams.
          </p>
          <div className="mt-5 flex gap-5">
            <Link to="/contact">
              <Button title="Book a Space" />
            </Link>
          </div>
        </section>
        <section className="md:w-[654px] h-full overflow-hidden rounded-bl-[300px]">
          <img src={workingSpaceImage} alt="woking office area" />
        </section>
      </header>

      <div className="my-16 px-5 md:px-20">
        <DedicatedWorkSpace />
      </div>
      {/* //last column */}
      <div className="px-5 md:px-20 mt-5 py-5 bg-primary bg-opacity-10 flex flex-col items-center lg:items-start ">
        <p className="text-primary mb-3">What we offer</p>
        <h2 className="mb-5 text-2xl font-semibold">
          All you need to perform at your <br /> optimal level
        </h2>
        {/* <div className=" flex flex-col items-center md:grid md:grid-cols-2 xl:grid-cols-3 justify-normal  gap-10 "> */}
        <div className=" flex flex-col md:flex-row flex-1 flex-wrap items-center justify-between gap-10 ">
          <ContentCard
            style={{
              backgroundColor: "white",
              border: "none",
              borderRadius: "20px",
            }}
            icon={
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M24.8896 17.8875V24.5635C24.8896 26.2833 23.549 28.1249 21.9376 28.6666L17.6178 30.102C16.8594 30.3593 15.6271 30.3593 14.8823 30.102L10.5626 28.6666C8.93756 28.1249 7.61047 26.2833 7.61047 24.5635L7.62402 17.8875L13.6094 21.7875C15.0719 22.7489 17.4823 22.7489 18.9448 21.7875L24.8896 17.8875Z"
                  fill="#009EC5"
                />
                <path
                  d="M27.0563 9.24792L18.9448 3.92605C17.4823 2.96459 15.0719 2.96459 13.6094 3.92605L5.45735 9.24792C2.84381 10.9406 2.84381 14.7729 5.45735 16.4792L7.62401 17.8875L13.6094 21.7875C15.0719 22.749 17.4823 22.749 18.9448 21.7875L24.8896 17.8875L26.7448 16.6688V20.8125C26.7448 21.3677 27.2053 21.8281 27.7605 21.8281C28.3157 21.8281 28.7761 21.3677 28.7761 20.8125V14.15C29.3178 12.4031 28.7626 10.3719 27.0563 9.24792Z"
                  fill="#009EC5"
                />
              </svg>
            }
            title="Fast Internet"
            description="Sasom  off­ers co-working space services for free­lancers, entre­preneurs, and profes­sionals. ATC func­tions from a suitable "
          />

          <ContentCard
            style={{
              backgroundColor: "white",
              border: "none",
              borderRadius: "20px",
            }}
            icon={
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M29.751 9.18025V17.9823H2.70831V9.18025C2.70831 5.88962 5.38956 3.20837 8.68019 3.20837H23.7791C27.0698 3.20837 29.751 5.88962 29.751 9.18025Z"
                  fill="#C83709"
                />
                <path
                  d="M2.70831 17.9958V18.2667C2.70831 21.5708 5.38956 24.2386 8.68019 24.2386H13.8802C14.625 24.2386 15.2344 24.8479 15.2344 25.5927V26.9063C15.2344 27.6511 14.625 28.2604 13.8802 28.2604H10.6031C10.0479 28.2604 9.58748 28.7208 9.58748 29.2761C9.58748 29.8313 10.0344 30.2917 10.6031 30.2917H21.9104C22.4656 30.2917 22.926 29.8313 22.926 29.2761C22.926 28.7208 22.4656 28.2604 21.9104 28.2604H18.6333C17.8885 28.2604 17.2791 27.6511 17.2791 26.9063V25.5927C17.2791 24.8479 17.8885 24.2386 18.6333 24.2386H23.7927C27.0969 24.2386 29.7646 21.5573 29.7646 18.2667V17.9958H2.70831Z"
                  fill="#C83709"
                />
              </svg>
            }
            title="Air Conditioned"
            description="Sasom  off­ers co-working space services for free­lancers, entre­preneurs, and profes­sionals. ATC func­tions from a suitable."
          />

          <ContentCard
            style={{
              backgroundColor: "white",
              border: "none",
              borderRadius: "20px",
            }}
            icon={
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M22.75 3.20837H8.40936C5.2677 3.20837 2.72186 5.75421 2.72186 8.88233V17.2511V17.5084C2.72186 20.65 5.2677 23.1823 8.39582 23.1823H13.2708C14.0156 23.1823 14.625 23.7917 14.625 24.5365V25.6469C14.625 26.3917 14.0156 27.0011 13.2708 27.0011H10.2239C9.69582 27.0011 9.26249 27.4344 9.26249 27.9625C9.26249 28.4907 9.69582 28.924 10.2239 28.924H20.9625C21.4906 28.924 21.9239 28.4907 21.9239 27.9625C21.9239 27.4344 21.4906 27.0011 20.9625 27.0011H17.9156C17.1708 27.0011 16.5614 26.3917 16.5614 25.6469V24.5365C16.5614 23.7917 17.1708 23.1823 17.9156 23.1823H22.75C25.8917 23.1823 28.4239 20.6365 28.4239 17.5084V17.2511V8.88233C28.4239 5.75421 25.8781 3.20837 22.75 3.20837Z"
                  fill="#0C50A5"
                />
                <path
                  d="M26.5958 13.3646H19.4323C17.0896 13.3646 16.2365 14.2177 16.2365 16.5875V27.0552C16.2365 29.4386 17.076 30.2782 19.4323 30.2782H26.5958C28.9385 30.2782 29.7917 29.425 29.7917 27.0552V16.5875C29.7917 14.2042 28.9521 13.3646 26.5958 13.3646ZM23.0208 28.0167C22.1948 28.0167 21.5312 27.3532 21.5312 26.5271C21.5312 25.7011 22.1948 25.0375 23.0208 25.0375C23.8469 25.0375 24.5104 25.7011 24.5104 26.5271C24.5104 27.3532 23.8469 28.0167 23.0208 28.0167Z"
                  fill="#0C50A5"
                />
                <path
                  opacity="0.4"
                  d="M24.5104 26.5271C24.5104 27.3531 23.8469 28.0166 23.0208 28.0166C22.1948 28.0166 21.5312 27.3531 21.5312 26.5271C21.5312 25.701 22.1948 25.0375 23.0208 25.0375C23.8469 25.0375 24.5104 25.7146 24.5104 26.5271Z"
                  fill="#0C50A5"
                />
              </svg>
            }
            title="Uninterrupted Power"
            description="Sasom  off­ers co-working space services for free­lancers, entre­preneurs, and profes­sionals. ATC func­tions from a suitable "
          />

          <ContentCard
            style={{
              backgroundColor: "white",
              border: "none",
              borderRadius: "20px",
            }}
            icon={
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M12.1875 2.70837C8.63962 2.70837 5.75525 5.59275 5.75525 9.14067C5.75525 12.6209 8.47712 15.4375 12.025 15.5594C12.1334 15.5459 12.2417 15.5459 12.323 15.5594C12.35 15.5594 12.3636 15.5594 12.3907 15.5594C12.4042 15.5594 12.4042 15.5594 12.4177 15.5594C15.8844 15.4375 18.6063 12.6209 18.6198 9.14067C18.6198 5.59275 15.7355 2.70837 12.1875 2.70837Z"
                  fill="#317EDE"
                />
                <path
                  d="M19.0667 19.1614C15.2885 16.6427 9.12709 16.6427 5.32188 19.1614C3.60209 20.3124 2.65417 21.8697 2.65417 23.5354C2.65417 25.201 3.60209 26.7447 5.30834 27.8822C7.20417 29.1552 9.69584 29.7916 12.1875 29.7916C14.6792 29.7916 17.1708 29.1552 19.0667 27.8822C20.7729 26.7312 21.7208 25.1874 21.7208 23.5083C21.7073 21.8427 20.7729 20.2989 19.0667 19.1614Z"
                  fill="#317EDE"
                />
                <path
                  opacity="0.4"
                  d="M27.0698 9.93964C27.2865 12.5667 25.4177 14.8688 22.8313 15.1803C22.8177 15.1803 22.8177 15.1803 22.8042 15.1803H22.7636C22.6823 15.1803 22.6011 15.1803 22.5333 15.2073C21.2198 15.2751 20.0146 14.8553 19.1073 14.0834C20.5021 12.8376 21.3011 10.9688 21.1386 8.93755C21.0438 7.84068 20.6646 6.8386 20.0958 5.98547C20.6104 5.72818 21.2063 5.56568 21.8156 5.51151C24.4698 5.2813 26.8396 7.25839 27.0698 9.93964Z"
                  fill="#317EDE"
                />
                <path
                  d="M29.7782 22.4656C29.6698 23.7791 28.8302 24.9166 27.4219 25.6885C26.0677 26.4333 24.3615 26.7854 22.6688 26.7448C23.6438 25.8645 24.2125 24.7677 24.3209 23.6031C24.4563 21.9239 23.6573 20.3125 22.0594 19.026C21.1521 18.3083 20.0959 17.7396 18.9448 17.3198C21.9375 16.4531 25.7021 17.0354 28.0177 18.9041C29.2636 19.9062 29.9 21.1656 29.7782 22.4656Z"
                  fill="#317EDE"
                />
              </svg>
            }
            title="Private Meeting"
            description="Sasom  off­ers co-working space services for free­lancers, entre­preneurs, and profes­sionals. ATC func­tions from a suitable."
          />
          <ContentCard
            style={{
              backgroundColor: "white",
              border: "none",
              borderRadius: "20px",
            }}
            icon={
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M12.1875 2.70837C8.63962 2.70837 5.75525 5.59275 5.75525 9.14067C5.75525 12.6209 8.47712 15.4375 12.025 15.5594C12.1334 15.5459 12.2417 15.5459 12.323 15.5594C12.35 15.5594 12.3636 15.5594 12.3907 15.5594C12.4042 15.5594 12.4042 15.5594 12.4177 15.5594C15.8844 15.4375 18.6063 12.6209 18.6198 9.14067C18.6198 5.59275 15.7355 2.70837 12.1875 2.70837Z"
                  fill="#317EDE"
                />
                <path
                  d="M19.0667 19.1614C15.2885 16.6427 9.12709 16.6427 5.32188 19.1614C3.60209 20.3124 2.65417 21.8697 2.65417 23.5354C2.65417 25.201 3.60209 26.7447 5.30834 27.8822C7.20417 29.1552 9.69584 29.7916 12.1875 29.7916C14.6792 29.7916 17.1708 29.1552 19.0667 27.8822C20.7729 26.7312 21.7208 25.1874 21.7208 23.5083C21.7073 21.8427 20.7729 20.2989 19.0667 19.1614Z"
                  fill="#317EDE"
                />
                <path
                  opacity="0.4"
                  d="M27.0698 9.93964C27.2865 12.5667 25.4177 14.8688 22.8313 15.1803C22.8177 15.1803 22.8177 15.1803 22.8042 15.1803H22.7636C22.6823 15.1803 22.6011 15.1803 22.5333 15.2073C21.2198 15.2751 20.0146 14.8553 19.1073 14.0834C20.5021 12.8376 21.3011 10.9688 21.1386 8.93755C21.0438 7.84068 20.6646 6.8386 20.0958 5.98547C20.6104 5.72818 21.2063 5.56568 21.8156 5.51151C24.4698 5.2813 26.8396 7.25839 27.0698 9.93964Z"
                  fill="#317EDE"
                />
                <path
                  d="M29.7782 22.4656C29.6698 23.7791 28.8302 24.9166 27.4219 25.6885C26.0677 26.4333 24.3615 26.7854 22.6688 26.7448C23.6438 25.8645 24.2125 24.7677 24.3209 23.6031C24.4563 21.9239 23.6573 20.3125 22.0594 19.026C21.1521 18.3083 20.0959 17.7396 18.9448 17.3198C21.9375 16.4531 25.7021 17.0354 28.0177 18.9041C29.2636 19.9062 29.9 21.1656 29.7782 22.4656Z"
                  fill="#317EDE"
                />
                S
              </svg>
            }
            title="Relaxation Space"
            description="Sasom  off­ers co-working space services for free­lancers, entre­preneurs, and profes­sionals. ATC func­tions from a suitable."
          />
          <ContentCard
            style={{
              backgroundColor: "white",
              border: "none",
              borderRadius: "20px",
            }}
            icon={
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M12.1875 2.70837C8.63962 2.70837 5.75525 5.59275 5.75525 9.14067C5.75525 12.6209 8.47712 15.4375 12.025 15.5594C12.1334 15.5459 12.2417 15.5459 12.323 15.5594C12.35 15.5594 12.3636 15.5594 12.3907 15.5594C12.4042 15.5594 12.4042 15.5594 12.4177 15.5594C15.8844 15.4375 18.6063 12.6209 18.6198 9.14067C18.6198 5.59275 15.7355 2.70837 12.1875 2.70837Z"
                  fill="#317EDE"
                />
                <path
                  d="M19.0667 19.1614C15.2885 16.6427 9.12709 16.6427 5.32188 19.1614C3.60209 20.3124 2.65417 21.8697 2.65417 23.5354C2.65417 25.201 3.60209 26.7447 5.30834 27.8822C7.20417 29.1552 9.69584 29.7916 12.1875 29.7916C14.6792 29.7916 17.1708 29.1552 19.0667 27.8822C20.7729 26.7312 21.7208 25.1874 21.7208 23.5083C21.7073 21.8427 20.7729 20.2989 19.0667 19.1614Z"
                  fill="#317EDE"
                />
                <path
                  opacity="0.4"
                  d="M27.0698 9.93964C27.2865 12.5667 25.4177 14.8688 22.8313 15.1803C22.8177 15.1803 22.8177 15.1803 22.8042 15.1803H22.7636C22.6823 15.1803 22.6011 15.1803 22.5333 15.2073C21.2198 15.2751 20.0146 14.8553 19.1073 14.0834C20.5021 12.8376 21.3011 10.9688 21.1386 8.93755C21.0438 7.84068 20.6646 6.8386 20.0958 5.98547C20.6104 5.72818 21.2063 5.56568 21.8156 5.51151C24.4698 5.2813 26.8396 7.25839 27.0698 9.93964Z"
                  fill="#317EDE"
                />
                <path
                  d="M29.7782 22.4656C29.6698 23.7791 28.8302 24.9166 27.4219 25.6885C26.0677 26.4333 24.3615 26.7854 22.6688 26.7448C23.6438 25.8645 24.2125 24.7677 24.3209 23.6031C24.4563 21.9239 23.6573 20.3125 22.0594 19.026C21.1521 18.3083 20.0959 17.7396 18.9448 17.3198C21.9375 16.4531 25.7021 17.0354 28.0177 18.9041C29.2636 19.9062 29.9 21.1656 29.7782 22.4656Z"
                  fill="#317EDE"
                />
              </svg>
            }
            title="Personal Locker"
            description="Sasom  off­ers co-working space services for free­lancers, entre­preneurs, and profes­sionals. ATC func­tions from a suitable."
          />
        </div>
      </div>
    </div>
  );
};

export default WorkingSpace;
