// import { Container } from "react-bootstrap";
// import "./accountFligjt.css";

// const AccountFlight = ({ image }) => {
//   return (
//     <div className="my-3">
//       {/* <Container className="bg-white py-4 rounded-3 flight-shadow">
//         <div className="d-flex align-items-center flex-wrap gap-4 justify-content-between  justify-content-center justify-content-md-between py-1">
//           <div className="d-flex flex-wrap gap-3  align-items-center justify-content-center justify-content-md-between">
//             <div>
//               <img src={image} alt="" />
//             </div>
//             <div className="d-flex align-items-center px-5  flight-">
//               <div>
//                 <span>Newark(EWR)</span>
//                 <p className="m-0">12:00 pm</p>
//               </div>
//               <div className="px-3">--</div>
//               <div>
//                 <span>Newark(EWR)</span>
//                 <p className="m-0">6:00 pm</p>
//               </div>
//             </div>

//             <div className="d-flex flex-wrap gap-5 ticket-info">
//               <div className="">
//                 <div className="d-flex align-items-center mb-2 flight-shadow p-2 rounded-2">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="22"
//                     height="22"
//                     viewBox="0 0 22 22"
//                     fill="none"
//                   >
//                     <path
//                       d="M19.25 6.28578C19.25 5.66063 19.0017 5.06108 18.5596 4.61903C18.1176 4.17698 17.518 3.92864 16.8929 3.92864H16.3036V3.35593C16.3036 3.03882 16.0598 2.76664 15.7426 2.7508C15.663 2.74697 15.5833 2.75934 15.5086 2.78719C15.4338 2.81503 15.3655 2.85776 15.3078 2.91279C15.25 2.96782 15.204 3.034 15.1726 3.10732C15.1412 3.18065 15.125 3.25958 15.125 3.33935V3.92864H6.875V3.35593C6.875 3.03882 6.63118 2.76664 6.31407 2.7508C6.2344 2.74697 6.15477 2.75934 6.08002 2.78719C6.00527 2.81503 5.93695 2.85776 5.8792 2.91279C5.82145 2.96782 5.77547 3.034 5.74405 3.10732C5.71264 3.18065 5.69644 3.25958 5.69643 3.33935V3.92864H5.10714C4.48199 3.92864 3.88244 4.17698 3.44039 4.61903C2.99834 5.06108 2.75 5.66063 2.75 6.28578V6.72775C2.75 6.76682 2.76552 6.80429 2.79315 6.83192C2.82078 6.85955 2.85825 6.87507 2.89732 6.87507H19.1027C19.1418 6.87507 19.1792 6.85955 19.2069 6.83192C19.2345 6.80429 19.25 6.76682 19.25 6.72775V6.28578ZM2.75 16.8929C2.75 17.5181 2.99834 18.1176 3.44039 18.5597C3.88244 19.0017 4.48199 19.2501 5.10714 19.2501H16.8929C17.518 19.2501 18.1176 19.0017 18.5596 18.5597C19.0017 18.1176 19.25 17.5181 19.25 16.8929V8.16413C19.25 8.13483 19.2384 8.10672 19.2176 8.086C19.1969 8.06528 19.1688 8.05364 19.1395 8.05364H2.86049C2.83119 8.05364 2.80308 8.06528 2.78236 8.086C2.76164 8.10672 2.75 8.13483 2.75 8.16413V16.8929ZM15.4196 9.23221C15.5945 9.23221 15.7654 9.28405 15.9107 9.38118C16.0561 9.47831 16.1694 9.61636 16.2363 9.77787C16.3032 9.93939 16.3207 10.1171 16.2866 10.2886C16.2525 10.4601 16.1683 10.6176 16.0447 10.7412C15.9211 10.8648 15.7636 10.949 15.5921 10.9831C15.4206 11.0172 15.2429 10.9997 15.0814 10.9328C14.9199 10.8659 14.7818 10.7526 14.6847 10.6072C14.5876 10.4619 14.5357 10.291 14.5357 10.1161C14.5357 9.88171 14.6288 9.65688 14.7946 9.49111C14.9604 9.32534 15.1852 9.23221 15.4196 9.23221ZM15.4196 12.1786C15.5945 12.1786 15.7654 12.2305 15.9107 12.3276C16.0561 12.4247 16.1694 12.5628 16.2363 12.7243C16.3032 12.8858 16.3207 13.0635 16.2866 13.235C16.2525 13.4065 16.1683 13.564 16.0447 13.6876C15.9211 13.8112 15.7636 13.8954 15.5921 13.9295C15.4206 13.9636 15.2429 13.9461 15.0814 13.8792C14.9199 13.8123 14.7818 13.699 14.6847 13.5537C14.5876 13.4083 14.5357 13.2374 14.5357 13.0626C14.5357 12.8281 14.6288 12.6033 14.7946 12.4375C14.9604 12.2718 15.1852 12.1786 15.4196 12.1786ZM12.4732 9.23221C12.648 9.23221 12.8189 9.28405 12.9643 9.38118C13.1097 9.47831 13.223 9.61636 13.2899 9.77787C13.3568 9.93939 13.3743 10.1171 13.3402 10.2886C13.3061 10.4601 13.2219 10.6176 13.0982 10.7412C12.9746 10.8648 12.8171 10.949 12.6457 10.9831C12.4742 11.0172 12.2965 10.9997 12.135 10.9328C11.9734 10.8659 11.8354 10.7526 11.7383 10.6072C11.6411 10.4619 11.5893 10.291 11.5893 10.1161C11.5893 9.88171 11.6824 9.65688 11.8482 9.49111C12.014 9.32534 12.2388 9.23221 12.4732 9.23221ZM12.4732 12.1786C12.648 12.1786 12.8189 12.2305 12.9643 12.3276C13.1097 12.4247 13.223 12.5628 13.2899 12.7243C13.3568 12.8858 13.3743 13.0635 13.3402 13.235C13.3061 13.4065 13.2219 13.564 13.0982 13.6876C12.9746 13.8112 12.8171 13.8954 12.6457 13.9295C12.4742 13.9636 12.2965 13.9461 12.135 13.8792C11.9734 13.8123 11.8354 13.699 11.7383 13.5537C11.6411 13.4083 11.5893 13.2374 11.5893 13.0626C11.5893 12.8281 11.6824 12.6033 11.8482 12.4375C12.014 12.2718 12.2388 12.1786 12.4732 12.1786ZM12.4732 15.1251C12.648 15.1251 12.8189 15.1769 12.9643 15.274C13.1097 15.3712 13.223 15.5092 13.2899 15.6707C13.3568 15.8322 13.3743 16.01 13.3402 16.1814C13.3061 16.3529 13.2219 16.5104 13.0982 16.634C12.9746 16.7576 12.8171 16.8418 12.6457 16.8759C12.4742 16.91 12.2965 16.8925 12.135 16.8256C11.9734 16.7587 11.8354 16.6454 11.7383 16.5001C11.6411 16.3547 11.5893 16.1838 11.5893 16.009C11.5893 15.7746 11.6824 15.5497 11.8482 15.384C12.014 15.2182 12.2388 15.1251 12.4732 15.1251ZM9.52679 12.1786C9.70161 12.1786 9.87251 12.2305 10.0179 12.3276C10.1632 12.4247 10.2765 12.5628 10.3434 12.7243C10.4103 12.8858 10.4278 13.0635 10.3937 13.235C10.3596 13.4065 10.2754 13.564 10.1518 13.6876C10.0282 13.8112 9.8707 13.8954 9.69923 13.9295C9.52777 13.9636 9.35004 13.9461 9.18852 13.8792C9.027 13.8123 8.88895 13.699 8.79183 13.5537C8.6947 13.4083 8.64286 13.2374 8.64286 13.0626C8.64286 12.8281 8.73599 12.6033 8.90175 12.4375C9.06752 12.2718 9.29235 12.1786 9.52679 12.1786ZM9.52679 15.1251C9.70161 15.1251 9.87251 15.1769 10.0179 15.274C10.1632 15.3712 10.2765 15.5092 10.3434 15.6707C10.4103 15.8322 10.4278 16.01 10.3937 16.1814C10.3596 16.3529 10.2754 16.5104 10.1518 16.634C10.0282 16.7576 9.8707 16.8418 9.69923 16.8759C9.52777 16.91 9.35004 16.8925 9.18852 16.8256C9.027 16.7587 8.88895 16.6454 8.79183 16.5001C8.6947 16.3547 8.64286 16.1838 8.64286 16.009C8.64286 15.7746 8.73599 15.5497 8.90175 15.384C9.06752 15.2182 9.29235 15.1251 9.52679 15.1251ZM6.58036 12.1786C6.75518 12.1786 6.92608 12.2305 7.07144 12.3276C7.2168 12.4247 7.3301 12.5628 7.397 12.7243C7.4639 12.8858 7.48141 13.0635 7.4473 13.235C7.4132 13.4065 7.32901 13.564 7.20539 13.6876C7.08177 13.8112 6.92427 13.8954 6.7528 13.9295C6.58134 13.9636 6.40361 13.9461 6.24209 13.8792C6.08058 13.8123 5.94252 13.699 5.8454 13.5537C5.74827 13.4083 5.69643 13.2374 5.69643 13.0626C5.69643 12.8281 5.78956 12.6033 5.95533 12.4375C6.12109 12.2718 6.34592 12.1786 6.58036 12.1786ZM6.58036 15.1251C6.75518 15.1251 6.92608 15.1769 7.07144 15.274C7.2168 15.3712 7.3301 15.5092 7.397 15.6707C7.4639 15.8322 7.48141 16.01 7.4473 16.1814C7.4132 16.3529 7.32901 16.5104 7.20539 16.634C7.08177 16.7576 6.92427 16.8418 6.7528 16.8759C6.58134 16.91 6.40361 16.8925 6.24209 16.8256C6.08058 16.7587 5.94252 16.6454 5.8454 16.5001C5.74827 16.3547 5.69643 16.1838 5.69643 16.009C5.69643 15.7746 5.78956 15.5497 5.95533 15.384C6.12109 15.2182 6.34592 15.1251 6.58036 15.1251Z"
//                       fill="#8DD3BB"
//                     />
//                   </svg>
//                   <div className="ms-1">
//                     <span>Date</span>
//                     <p className="mb-0 line-heigh">12-11-22</p>
//                   </div>
//                 </div>

//                 <div className="d-flex align-items-center flight-shadow p-2 rounded-2">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="22"
//                     height="22"
//                     viewBox="0 0 22 22"
//                     fill="none"
//                   >
//                     <path
//                       d="M11 2.75C6.44386 2.75 2.75 6.44386 2.75 11C2.75 15.5561 6.44386 19.25 11 19.25C15.5561 19.25 19.25 15.5561 19.25 11C19.25 6.44386 15.5561 2.75 11 2.75ZM14.8077 12.2692H11C10.8317 12.2692 10.6703 12.2024 10.5513 12.0834C10.4322 11.9643 10.3654 11.8029 10.3654 11.6346V5.92308C10.3654 5.75477 10.4322 5.59335 10.5513 5.47434C10.6703 5.35532 10.8317 5.28846 11 5.28846C11.1683 5.28846 11.3297 5.35532 11.4487 5.47434C11.5678 5.59335 11.6346 5.75477 11.6346 5.92308V11H14.8077C14.976 11 15.1374 11.0669 15.2564 11.1859C15.3754 11.3049 15.4423 11.4663 15.4423 11.6346C15.4423 11.8029 15.3754 11.9643 15.2564 12.0834C15.1374 12.2024 14.976 12.2692 14.8077 12.2692Z"
//                       fill="#8DD3BB"
//                     />
//                   </svg>
//                   <div className="ms-1">
//                     <span>Flight time</span>
//                     <p className="mb-0 line-heigh">Newark(EWR)</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="">
//                 <div className="d-flex align-items-center mb-2 flight-shadow p-2 rounded-2">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="22"
//                     height="22"
//                     viewBox="0 0 22 22"
//                     fill="none"
//                   >
//                     <path
//                       d="M15.5222 2.75C15.8302 2.75 16.1255 2.87233 16.3433 3.09008C16.561 3.30783 16.6833 3.60317 16.6833 3.91111V19.0056H18.425C18.579 19.0056 18.7266 19.0667 18.8355 19.1756C18.9444 19.2845 19.0056 19.4321 19.0056 19.5861C19.0056 19.7401 18.9444 19.8878 18.8355 19.9966C18.7266 20.1055 18.579 20.1667 18.425 20.1667H3.33056C3.17658 20.1667 3.02892 20.1055 2.92004 19.9966C2.81117 19.8878 2.75 19.7401 2.75 19.5861C2.75 19.4321 2.81117 19.2845 2.92004 19.1756C3.02892 19.0667 3.17658 19.0056 3.33056 19.0056H5.07222V3.91111C5.07222 3.60317 5.19455 3.30783 5.4123 3.09008C5.63005 2.87233 5.92539 2.75 6.23333 2.75H15.5222ZM13.2 13.2C13.5079 13.2 13.8033 13.0777 14.021 12.8599C14.2388 12.6422 14.3611 12.3468 14.3611 12.0389C14.3611 11.7309 14.2388 11.4356 14.021 11.2179C13.8033 11.0001 13.5079 10.8778 13.2 10.8778C12.8921 10.8778 12.5967 11.0001 12.379 11.2179C12.1612 11.4356 12.0389 11.7309 12.0389 12.0389C12.0389 12.3468 12.1612 12.6422 12.379 12.8599C12.5967 13.0777 12.8921 13.2 13.2 13.2Z"
//                       fill="#8DD3BB"
//                     />
//                   </svg>
//                   <div className="ms-1">
//                     <span>Gate</span>
//                     <p className="mb-0 line-heigh">A12</p>
//                   </div>
//                 </div>

//                 <div className="d-flex align-items-center flight-shadow p-2 rounded-2">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="22"
//                     height="22"
//                     viewBox="0 0 22 22"
//                     fill="none"
//                   >
//                     <path
//                       d="M6.9575 4.95915C6.2425 4.24415 6.2425 3.07999 6.9575 2.36499C7.6725 1.64999 8.83667 1.64999 9.55167 2.36499C10.2667 3.07999 10.2667 4.24415 9.55167 4.95915C8.8275 5.68332 7.6725 5.68332 6.9575 4.95915ZM5.5 14.6667V7.33332C5.5 6.82915 5.0875 6.41665 4.58333 6.41665C4.07917 6.41665 3.66667 6.82915 3.66667 7.33332V14.6667C3.66667 17.1967 5.72 19.25 8.25 19.25H12.8333C13.3375 19.25 13.75 18.8375 13.75 18.3333C13.75 17.8292 13.3375 17.4167 12.8333 17.4167H8.25C6.72833 17.4167 5.5 16.1883 5.5 14.6667ZM17.6733 17.7375L14.2175 14.2817C13.8783 13.9425 13.4108 13.75 12.925 13.75H10.5417V10.3767C11.5408 11.1925 12.98 11.935 14.3917 12.2283C15.0058 12.3567 15.5833 11.8983 15.5833 11.275C15.5833 10.7892 15.2258 10.395 14.74 10.3125C13.4383 10.0925 12.1 9.38665 11.3025 8.50665L10.0192 7.08582C9.845 6.89332 9.625 6.73749 9.38667 6.62749C9.12083 6.49915 8.81833 6.41665 8.50667 6.41665H8.47917C7.3425 6.41665 6.41667 7.34249 6.41667 8.47915V13.75C6.41667 15.2717 7.645 16.5 9.16667 16.5H13.8142L16.3625 19.0483C16.72 19.4058 17.3158 19.4058 17.6733 19.0483C18.04 18.6908 18.04 18.1042 17.6733 17.7375Z"
//                       fill="#8DD3BB"
//                     />
//                   </svg>
//                   <div className="ms-1">
//                     <span>Seat no.</span>
//                     <p className="mb-0 line-heigh">128</p>
//                   </div>
//                 </div>

//                 <div></div>
//               </div>
//             </div>
//           </div>
//           <div className="d-flex  align-items-center justify-content-end download-ticket-btn-div w-100 pe-2">
//             <button className="download-ticket-btn">Download Ticket</button>
//           </div>
//         </div>
//       </Container> */}
//     </div>
//   );
// };

// export default AccountFlight;
