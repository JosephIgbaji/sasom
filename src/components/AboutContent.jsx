import React from "react";

const AboutContent = () => {
  const coreValues = [
    "Passion",
    "Creativity",
    "Quality",
    "Teamwork",
    "Innovation",
    "Commitment",
  ];
  return (
    <div className="md:grid grid-cols-2 gap-5 mt-10 md:px-20 px-5">
      <div>
        <h2 className="text-lg font-bold mb-5">About Sasom</h2>
        <p className="mb-4">
          Sasom is a software development company rooted in African heritage,
          founded with the vision of emerging as a leading brand in innovative
          world-class solutions and the delivery of cutting-edge technology. Our
          team comprises distinguished, highly skilled, and innovative tech
          experts with extensive experience.
        </p>
        <p className="mb-4">
          Registered with the Corporate Affairs Commission of the Federal
          Republic of Nigeria under the Companies and Allied Matters Act 2020,
          Sasom is the preferred partner for numerous global enterprises, SMEs,
          and technology firms. We specialize in enhancing business value
          through tailored software development, product design, quality
          assurance, and consultancy services. Our expertise extends to
          maintaining and modernizing IT infrastructure, addressing various
          infrastructure-related challenges businesses may encounter.
        </p>
        <p className="mb-5">
          SASOM also conducts immersive software development boot camps,
          ushering in a new era of indigenous software developers propelling
          innovation in the information and technology industry. This training,
          facilitated by industry veterans, incorporates quality practical
          sessions and online resources within a collaborative, challenging
          environment, inspiring and shaping interns into proficient tech
          experts.
        </p>
      </div>
      <div>
        <h2 className="text-lg font-bold mb-5">Our Core Values</h2>
        <div className="flex flex-wrap gap-10">
          {coreValues.map((value, index) => (
            <ContentBox title={value} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutContent;

function ContentBox({ title }) {
  return (
    <div className="w-[250px] p-5 border rounded-lg">
      <div className="w-9 h-9 rounded-lg bg-primary bg-opacity-50 flex items-center justify-center">
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.538 1.07715C9.86219 1.07677 8.23305 1.62917 6.90307 2.64874C5.5731 3.6683 4.61657 5.09809 4.18174 6.71651C3.7469 8.33492 3.85804 10.0516 4.49793 11.6004C5.13783 13.1492 6.27074 14.4437 7.72107 15.2833C8.3543 15.6507 8.7503 16.2138 8.76784 16.7815C8.77268 16.9335 8.82748 17.0797 8.92375 17.1975C9.02002 17.3153 9.15241 17.3981 9.30046 17.4331C9.62538 17.5098 9.95584 17.5698 10.2918 17.6131C10.59 17.651 10.8457 17.4119 10.8457 17.111V12.8085C10.554 12.7765 10.265 12.7237 9.98077 12.6507C9.8927 12.628 9.80996 12.5882 9.73727 12.5336C9.66458 12.4789 9.60337 12.4105 9.55713 12.3322C9.51088 12.2539 9.48052 12.1673 9.46776 12.0772C9.455 11.9872 9.4601 11.8955 9.48277 11.8075C9.50543 11.7194 9.54523 11.6367 9.59987 11.564C9.65451 11.4913 9.72294 11.4301 9.80124 11.3838C9.87954 11.3376 9.96619 11.3072 10.0562 11.2944C10.1463 11.2817 10.2379 11.2868 10.326 11.3095C11.121 11.5144 11.955 11.5144 12.75 11.3095C12.839 11.2838 12.9321 11.2763 13.0241 11.2873C13.116 11.2983 13.2047 11.3277 13.2851 11.3736C13.3655 11.4195 13.4359 11.4811 13.492 11.5547C13.5482 11.6283 13.589 11.7124 13.6121 11.802C13.6352 11.8917 13.6401 11.985 13.6264 12.0766C13.6128 12.1682 13.581 12.2561 13.5328 12.3351C13.4846 12.4141 13.421 12.4827 13.3459 12.5368C13.2707 12.5908 13.1855 12.6292 13.0952 12.6498C12.811 12.7231 12.522 12.7762 12.2303 12.8085V17.1101C12.2303 17.4119 12.486 17.651 12.7842 17.6131C13.1202 17.5698 13.4506 17.5098 13.7755 17.4331C13.9236 17.3981 14.056 17.3153 14.1522 17.1975C14.2485 17.0797 14.3033 16.9335 14.3082 16.7815C14.3266 16.2138 14.7217 15.6507 15.3549 15.2833C16.8053 14.4437 17.9382 13.1492 18.5781 11.6004C19.218 10.0516 19.3291 8.33492 18.8943 6.71651C18.4594 5.09809 17.5029 3.6683 16.1729 2.64874C14.8429 1.62917 13.2138 1.07677 11.538 1.07715Z"
            fill="#009EC5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.78089 18.7538C8.79784 18.6644 8.83223 18.5793 8.88209 18.5033C8.93195 18.4272 8.99631 18.3617 9.07149 18.3105C9.14666 18.2594 9.23119 18.2235 9.32023 18.205C9.40927 18.1865 9.50109 18.1857 9.59043 18.2027C10.8774 18.4469 12.1988 18.4469 13.4858 18.2027C13.5762 18.1828 13.6697 18.1812 13.7608 18.1981C13.8518 18.215 13.9386 18.2499 14.0159 18.3009C14.0932 18.3519 14.1594 18.4179 14.2108 18.4949C14.2621 18.572 14.2975 18.6586 14.3148 18.7495C14.3321 18.8405 14.3309 18.934 14.3115 19.0245C14.292 19.1151 14.2545 19.2008 14.2013 19.2765C14.1481 19.3523 14.0803 19.4167 14.0018 19.4658C13.9233 19.5149 13.8357 19.5477 13.7443 19.5624C12.2865 19.839 10.7897 19.839 9.33196 19.5624C9.15171 19.5282 8.99241 19.4238 8.88908 19.2721C8.78575 19.1205 8.74684 18.9341 8.78089 18.7538ZM9.46489 21.0098C9.47433 20.9194 9.5015 20.8317 9.54484 20.7517C9.58818 20.6718 9.64684 20.6012 9.71747 20.5439C9.78811 20.4867 9.86932 20.4439 9.95649 20.418C10.0437 20.3922 10.1351 20.3837 10.2255 20.3932C11.0982 20.4844 11.978 20.4844 12.8507 20.3932C13.0334 20.3741 13.2161 20.4283 13.3587 20.544C13.5014 20.6596 13.5923 20.8272 13.6113 21.0098C13.6304 21.1924 13.5762 21.3752 13.4606 21.5178C13.3449 21.6604 13.1774 21.7513 12.9947 21.7704C12.0263 21.8718 11.0499 21.8718 10.0815 21.7704C9.99107 21.761 9.90338 21.7338 9.82345 21.6904C9.74352 21.6471 9.67291 21.5885 9.61565 21.5178C9.55839 21.4472 9.5156 21.366 9.48974 21.2788C9.46387 21.1916 9.45542 21.1002 9.46489 21.0098Z"
            fill="#009EC5"
          />
        </svg>
      </div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm">
        Our enthusiasm to deliver the best makes us unique. We uphold the
        highest standards in deliverability.
      </p>
    </div>
  );
}
