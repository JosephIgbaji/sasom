import React from "react";
import Button from "../components/Button";

const Contact = () => {
  return (
    <div className="bg-white mx-auto rounded-3xl border p-5 md:p-10 w-[330px] md:w-[670px]">
      <div className="cursor-pointer mb-10">
        <svg
          width="164"
          height="46"
          viewBox="0 0 164 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_799_3)">
            <path
              d="M59.687 21.1151C59.687 23.563 58.7078 25.5581 56.7495 27.0881C54.7911 28.6242 52.129 29.3891 48.7692 29.3891C46.8231 29.3891 45.1279 29.2055 43.6836 28.8445C42.2332 28.4834 40.8807 28.0244 39.6261 27.4675V21.5068H40.287C41.5355 22.5655 42.9369 23.3733 44.4791 23.9425C46.0275 24.5055 47.5146 24.7931 48.9405 24.7931C49.3138 24.7931 49.7912 24.7564 50.3971 24.6891C50.9968 24.6279 51.4803 24.5116 51.8597 24.3586C52.3187 24.1505 52.6981 23.8996 53.0041 23.6059C53.2979 23.306 53.4509 22.8531 53.4509 22.2656C53.4509 21.7148 53.2367 21.2497 52.8022 20.8519C52.3676 20.4603 51.7251 20.1543 50.8866 19.9462C50.0054 19.7259 49.069 19.5117 48.0837 19.3159C47.1046 19.12 46.1805 18.8691 45.3176 18.5753C43.3409 17.896 41.9272 16.9719 41.0581 15.8031C40.1891 14.6403 39.7546 13.196 39.7546 11.4641C39.7546 9.14464 40.7338 7.25361 42.6921 5.79096C44.6505 4.3222 47.1719 3.59393 50.2502 3.59393C51.7985 3.59393 53.3223 3.75305 54.8278 4.06516C56.3394 4.38339 57.643 4.7873 58.7507 5.26465V10.9928H58.102C57.1595 10.1911 55.9967 9.52408 54.6259 8.98553C53.255 8.44698 51.8536 8.17771 50.4277 8.17771C49.9197 8.17771 49.4179 8.21443 48.9222 8.28786C48.4203 8.3613 47.943 8.49594 47.4779 8.69177C47.0678 8.86313 46.719 9.11404 46.4253 9.45064C46.1315 9.78723 45.9846 10.1728 45.9846 10.6073C45.9846 11.2621 46.2233 11.7639 46.6945 12.1189C47.1658 12.4677 48.0593 12.786 49.3689 13.0797C50.2318 13.2694 51.058 13.4591 51.8597 13.6366C52.6492 13.8141 53.4998 14.0589 54.4178 14.371C56.217 14.9952 57.5389 15.8459 58.3957 16.9169C59.2525 17.9878 59.6809 19.3893 59.6809 21.109L59.687 21.1151ZM85.5495 28.9424H79.2828L77.6488 23.9057H69.0137L67.3735 28.9424H61.2476L69.9133 4.03456H76.8838L85.5495 28.9424ZM76.1984 19.3464L73.3343 10.491L70.4702 19.3464H76.1984ZM107.728 21.109C107.728 23.5569 106.749 25.552 104.79 27.082C102.832 28.618 100.17 29.383 96.8101 29.383C94.864 29.383 93.1688 29.1994 91.7245 28.8384C90.2741 28.4773 88.9216 28.0183 87.667 27.4614V21.5006H88.3279C89.5764 22.5594 90.9778 23.3672 92.52 23.9363C94.0684 24.4994 95.5555 24.787 96.9814 24.787C97.3547 24.787 97.8321 24.7503 98.438 24.683C99.0377 24.6218 99.5212 24.5055 99.9006 24.3525C100.36 24.1444 100.739 23.8935 101.039 23.5998C101.333 23.2999 101.486 22.847 101.486 22.2595C101.486 21.7087 101.271 21.2436 100.837 20.8458C100.402 20.4541 99.7598 20.1482 98.9214 19.9401C98.0402 19.7198 97.1038 19.5056 96.1185 19.3097C95.1393 19.1139 94.2091 18.863 93.3523 18.5692C91.3756 17.8899 89.9619 16.9658 89.0929 15.7969C88.2239 14.6342 87.7894 13.1899 87.7894 11.458C87.7894 9.13852 88.7686 7.24749 90.7269 5.78484C92.6853 4.31608 95.2067 3.58781 98.285 3.58781C99.8333 3.58781 101.357 3.74693 102.863 4.05904C104.374 4.37727 105.678 4.78118 106.785 5.25853V10.9867H106.137C105.194 10.185 104.032 9.51796 102.661 8.97941C101.29 8.44086 99.8884 8.17159 98.4624 8.17159C97.9545 8.17159 97.4527 8.20831 96.9631 8.28174C96.4612 8.35518 95.9839 8.48982 95.5188 8.68565C95.1087 8.85701 94.7599 9.10793 94.4662 9.44452C94.1724 9.78111 94.0255 10.1667 94.0255 10.6012C94.0255 11.256 94.2642 11.7578 94.7354 12.1128C95.2067 12.4616 96.1002 12.7798 97.4098 13.0736C98.2727 13.2633 99.0989 13.453 99.9006 13.6305C100.69 13.808 101.541 14.0528 102.459 14.3649C104.258 14.9891 105.58 15.8398 106.437 16.9107C107.293 17.9817 107.722 19.3832 107.722 21.1028L107.728 21.109ZM134.753 16.4885C134.753 20.4541 133.682 23.612 131.534 25.9437C129.386 28.2814 126.418 29.4503 122.63 29.4503C118.848 29.4503 115.886 28.2814 113.738 25.9437C111.59 23.6059 110.519 20.4541 110.519 16.4885C110.519 12.4922 111.59 9.32824 113.738 7.00269C115.886 4.67715 118.848 3.51437 122.63 3.51437C126.393 3.51437 129.355 4.67715 131.516 7.00269C133.676 9.32824 134.753 12.4922 134.753 16.4885ZM126.718 22.798C127.305 22.0392 127.74 21.1457 128.027 20.1114C128.315 19.0772 128.45 17.8654 128.45 16.4701C128.45 14.9769 128.291 13.7039 127.96 12.6574C127.636 11.6109 127.207 10.7603 126.681 10.1177C126.143 9.45064 125.524 8.96717 124.821 8.66118C124.123 8.3613 123.395 8.20831 122.642 8.20831C121.871 8.20831 121.149 8.34906 120.469 8.64282C119.784 8.93657 119.166 9.41392 118.597 10.081C118.07 10.7113 117.642 11.5681 117.312 12.6697C116.981 13.7651 116.816 15.0381 116.816 16.4885C116.816 17.9756 116.975 19.2424 117.293 20.2828C117.618 21.3293 118.04 22.1799 118.566 22.8348C119.092 23.4896 119.711 23.9792 120.414 24.2913C121.118 24.6034 121.865 24.7625 122.642 24.7625C123.419 24.7625 124.16 24.6034 124.864 24.2852C125.567 23.9731 126.185 23.4774 126.712 22.8042L126.718 22.798ZM164 28.9363H157.923V12.2597L153.59 23.0796H149.435L145.102 12.2597V28.9363H139.386V4.02844H146.424L151.687 16.5252L156.925 4.02844H164.006V28.9363H164Z"
              fill="#009EC5"
            />
            <path
              d="M48.9038 41.586H43.9773V40.0928H45.3543V34.6706H43.9773V33.1773H48.9038V34.6706H47.5268V40.0928H48.9038V41.586ZM62.5449 34.8113H59.9195V41.586H57.747V34.8113H55.1216V33.1834H62.5449V34.8113ZM79.8152 38.9422C79.8152 39.7684 79.4664 40.4416 78.7626 40.9557C78.0588 41.4759 77.1102 41.7329 75.9046 41.7329C75.2069 41.7329 74.6011 41.6717 74.087 41.5493C73.5668 41.4269 73.0834 41.2739 72.6366 41.0842V39.0707H72.8753C73.322 39.4257 73.8239 39.7011 74.3746 39.8908C74.9315 40.0805 75.464 40.1784 75.9719 40.1784C76.1066 40.1784 76.2779 40.1662 76.4921 40.1417C76.7063 40.1234 76.8777 40.0805 77.0184 40.0316C77.1837 39.9642 77.3183 39.8786 77.4284 39.7745C77.5325 39.6705 77.5876 39.5175 77.5876 39.3217C77.5876 39.1381 77.508 38.979 77.355 38.8443C77.1959 38.7097 76.9695 38.6118 76.6696 38.5383C76.3514 38.4649 76.0209 38.3914 75.6659 38.3241C75.3171 38.2568 74.9866 38.1711 74.6745 38.0732C73.9646 37.8468 73.4628 37.5347 73.1507 37.1369C72.8386 36.7452 72.6856 36.2556 72.6856 35.6742C72.6856 34.8909 73.0344 34.2544 73.7382 33.7587C74.442 33.263 75.3416 33.0182 76.4432 33.0182C76.9939 33.0182 77.5386 33.0733 78.0833 33.1773C78.6218 33.2875 79.0931 33.4221 79.4847 33.5812V35.5151H79.2522C78.9156 35.2458 78.4994 35.0194 78.0098 34.8358C77.5202 34.6522 77.0184 34.5665 76.5044 34.5665C76.3208 34.5665 76.1433 34.5788 75.9658 34.6033C75.7883 34.6277 75.617 34.6706 75.4517 34.7379C75.3049 34.793 75.1825 34.8786 75.0723 34.9949C74.9683 35.1112 74.9132 35.2397 74.9132 35.3866C74.9132 35.6069 74.9989 35.7783 75.1702 35.8945C75.3416 36.0108 75.6598 36.121 76.1249 36.2189C76.4309 36.2801 76.7308 36.3474 77.0123 36.4086C77.2938 36.4698 77.5998 36.5494 77.9303 36.6595C78.5729 36.8676 79.0502 37.1552 79.3562 37.5163C79.6622 37.8774 79.8152 38.3486 79.8152 38.93V38.9422ZM92.6914 41.586H86.6082V33.1834H92.6914V34.8113H88.7869V36.2556H92.416V37.8835H88.7869V39.952H92.6914V41.5799V41.586ZM104.503 35.7477C104.503 35.5396 104.46 35.3621 104.374 35.2091C104.289 35.0561 104.142 34.9398 103.934 34.8542C103.787 34.793 103.621 34.7562 103.432 34.744C103.242 34.7318 103.016 34.7256 102.759 34.7256H101.987V36.9655H102.642C102.985 36.9655 103.266 36.9472 103.499 36.9166C103.732 36.8798 103.921 36.8064 104.08 36.6901C104.227 36.5738 104.337 36.4453 104.405 36.3046C104.472 36.1638 104.509 35.9802 104.509 35.7415L104.503 35.7477ZM107.899 41.586H105.249L102.961 38.5016H101.981V41.586H99.8088V33.1834H103.438C103.934 33.1834 104.362 33.214 104.717 33.2691C105.078 33.3242 105.408 33.4466 105.721 33.6363C106.039 33.826 106.29 34.0708 106.473 34.3646C106.663 34.6644 106.755 35.0378 106.755 35.4906C106.755 36.1087 106.614 36.6167 106.326 37.0084C106.039 37.4 105.629 37.7244 105.096 37.9875L107.899 41.5921V41.586ZM121.767 33.1834L118.701 41.586H116.271L113.205 33.1834H115.482L117.514 39.083L119.545 33.1834H121.761H121.767ZM132.819 41.586H127.893V40.0928H129.27V34.6706H127.893V33.1773H132.819V34.6706H131.442V40.0928H132.819V41.586ZM143.682 41.7574C143.058 41.7574 142.483 41.6656 141.95 41.482C141.418 41.2984 140.965 41.023 140.585 40.6558C140.206 40.2947 139.906 39.8357 139.698 39.2911C139.49 38.7464 139.386 38.1099 139.386 37.3939C139.386 36.7268 139.484 36.121 139.686 35.5763C139.888 35.0316 140.175 34.5665 140.555 34.181C140.922 33.8077 141.375 33.52 141.913 33.3181C142.452 33.1161 143.046 33.0121 143.688 33.0121C144.043 33.0121 144.361 33.0304 144.643 33.0733C144.924 33.11 145.188 33.1651 145.432 33.2263C145.683 33.2997 145.91 33.3793 146.118 33.465C146.326 33.5506 146.503 33.6363 146.656 33.7098V35.7477H146.405C146.301 35.6559 146.167 35.5518 146.008 35.4294C145.848 35.307 145.665 35.1846 145.463 35.0684C145.255 34.9521 145.028 34.848 144.79 34.7685C144.551 34.6828 144.288 34.6461 144.019 34.6461C143.713 34.6461 143.425 34.695 143.15 34.793C142.874 34.8848 142.617 35.05 142.385 35.2703C142.164 35.4845 141.981 35.7721 141.846 36.121C141.711 36.4759 141.638 36.9043 141.638 37.4061C141.638 37.9325 141.711 38.3731 141.864 38.728C142.011 39.083 142.201 39.3584 142.427 39.5603C142.654 39.7684 142.911 39.9153 143.192 40.001C143.474 40.0866 143.756 40.1356 144.031 40.1356C144.294 40.1356 144.557 40.0989 144.814 40.0193C145.071 39.9398 145.31 39.8357 145.53 39.7011C145.714 39.5909 145.885 39.4808 146.044 39.3584C146.203 39.236 146.332 39.1319 146.436 39.0401H146.662V41.0475C146.454 41.1393 146.252 41.2311 146.057 41.3106C145.867 41.3963 145.665 41.4636 145.451 41.5248C145.175 41.6044 144.918 41.6656 144.68 41.7084C144.441 41.7512 144.104 41.7696 143.688 41.7696L143.682 41.7574ZM159.63 41.586H153.547V33.1834H159.63V34.8113H155.726V36.2556H159.355V37.8835H155.726V39.952H159.63V41.5799V41.586Z"
              fill="#009EC5"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.4465 19.634L25.6056 19.6708C25.6668 19.683 25.7219 19.7013 25.7892 19.7136C48.0961 34.8296 21.4563 46.3227 8.19458 45.2089L9.11868 40.1662C17.613 43.8564 37.4475 31.886 21.8051 24.536C21.7929 24.5299 21.7746 24.5238 21.7623 24.5177C21.7317 24.5116 21.7011 24.5054 21.6644 24.4993L25.526 19.6708L25.4465 19.634Z"
              fill="#009EC5"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.46627 44.9581C-12.0744 43.3241 13.9044 10.8643 5.34879 30.4662C4.02078 35.7966 5.59359 38.7036 8.39036 39.9153L7.46627 44.9581Z"
              fill="#009EC5"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M36.3213 2.37608C25.9359 3.55721 10.3364 8.71014 12.8639 13.3612C15.8565 8.24503 25.1709 6.81298 36.1805 4.05904L36.7925 6.43355C27.9677 7.33929 17.1049 9.51184 14.1858 14.7994C15.9544 16.1641 19.2897 17.5901 24.6813 19.0282L20.7034 23.7344C20.6606 23.7099 20.6239 23.6916 20.581 23.6671C-17.1112 15.9377 20.0302 -7.46465 36.3152 2.36996L36.3213 2.37608Z"
              fill="#009EC5"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.1907 26.4026L22.258 26.4149C22.2825 26.421 22.3131 26.421 22.3376 26.4271C32.4843 32.192 20.7342 39.6705 14.9509 39.6583L15.3487 37.7733C19.1492 39.0708 27.772 31.2924 20.7587 28.6609C20.7526 28.6609 20.7464 28.6548 20.7403 28.6548C20.7281 28.6548 20.7158 28.6548 20.6975 28.6486L22.2213 26.421L22.1907 26.4026Z"
              fill="#009EC5"
            />
          </g>
          <defs>
            <clipPath id="clip0_799_3">
              <rect width="164" height="45.2779" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div>
        <form action="">
          <div className="flex md:justify-between flex-col md:flex-row mb-10">
            <div className="flex flex-col mb-10 md:mb-0">
              <label className="mb-3">Name</label>
              <input
                className="rounded-lg p-4 border w-[280px] h-14"
                type="text"
                placeholder="Enter your full name"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-3">Email</label>
              <input
                className="rounded-lg p-4 border w-[280px] h-14"
                type="text"
                placeholder="Enter email address"
              />
            </div>
          </div>
          <div className="flex md:justify-between flex-col md:flex-row mb-10">
            <div className="flex flex-col mb-10 md:mb-0">
              <label className="mb-3">Purpose</label>
              <select className="rounded-lg p-4 border w-[280px] h-14 bg-white">
                <option value="Option A">Enquiry</option>
                <option value="Option B">Partnership</option>
                <option value="Option C">Consultation</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="mb-3">Phone Number</label>
              <input
                className="rounded-lg p-4 border w-[280px] h-14"
                type="text"
                placeholder="Enter phone number"
              />
            </div>
          </div>
          <div className="mb-10">
            <div className="flex flex-col">
              <label className="mb-3">Message</label>
              <textarea
                className="rounded-lg p-4 border h-24"
                type="text"
                placeholder="Enter Your message here"
              />
              <p className="text-black text-sm mt-2 text-opacity-50">
                Call or whatsapp +234 903 922 7583
              </p>
            </div>
          </div>
          <div className="text-right">
            <Button title="Send Message" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
