import { Container } from "react-bootstrap";
import "./accountPayment.css";
import React from "react";
import PaymentModal from "./modal";
const AccountPayment = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Container>
        <h2 className="py-3">AccountPayment</h2>
      </Container>
      <Container className="bg-white py-3 rounded-3 d-flex gap-3 visa-flex">
        <div className="visa p-3 rounded-3 add-visa-width ">
          <div className="d-flex align-items-start justify-content-between visa-content">
            <div>
              <p className="mb-0 lh-sm">**** **** ****</p>
              <p className="fs-5">4321</p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 2.25H3C2.17157 2.25 1.5 2.92157 1.5 3.75V4.5C1.5 5.32843 2.17157 6 3 6H21C21.8284 6 22.5 5.32843 22.5 4.5V3.75C22.5 2.92157 21.8284 2.25 21 2.25Z"
                  fill="black"
                />
                <path
                  d="M3.49031 7.50001C3.43761 7.49972 3.38544 7.51055 3.33721 7.53178C3.28898 7.55301 3.24576 7.58416 3.21038 7.62322C3.17499 7.66227 3.14824 7.70834 3.13186 7.75843C3.11548 7.80852 3.10984 7.8615 3.11531 7.91391L4.34859 19.7527C4.34833 19.7561 4.34833 19.7595 4.34859 19.763C4.41303 20.3105 4.67628 20.8154 5.08837 21.1817C5.50046 21.548 6.0327 21.7502 6.58406 21.75H17.4164C17.9676 21.75 18.4996 21.5477 18.9115 21.1814C19.3234 20.8151 19.5865 20.3104 19.6509 19.763V19.7531L20.8823 7.91391C20.8878 7.8615 20.8822 7.80852 20.8658 7.75843C20.8494 7.70834 20.8226 7.66227 20.7873 7.62322C20.7519 7.58416 20.7087 7.55301 20.6604 7.53178C20.6122 7.51055 20.56 7.49972 20.5073 7.50001H3.49031ZM15.1556 15.9698C15.2269 16.0391 15.2837 16.1219 15.3228 16.2133C15.3618 16.3048 15.3823 16.403 15.383 16.5024C15.3837 16.6019 15.3646 16.7004 15.3269 16.7924C15.2891 16.8844 15.2335 16.9679 15.1632 17.0382C15.0929 17.1085 15.0093 17.1641 14.9173 17.2018C14.8253 17.2395 14.7267 17.2585 14.6273 17.2577C14.5279 17.257 14.4296 17.2365 14.3382 17.1974C14.2468 17.1583 14.1641 17.1015 14.0948 17.0302L12.0005 14.9358L9.90562 17.0302C9.76432 17.1675 9.57467 17.2436 9.37766 17.2422C9.18065 17.2408 8.9921 17.162 8.85276 17.0227C8.71342 16.8834 8.63448 16.6949 8.633 16.4979C8.63151 16.3009 8.70761 16.1112 8.84484 15.9698L10.9397 13.875L8.84484 11.7802C8.70761 11.6388 8.63151 11.4491 8.633 11.2521C8.63448 11.0551 8.71342 10.8666 8.85276 10.7273C8.9921 10.588 9.18065 10.5092 9.37766 10.5078C9.57467 10.5064 9.76432 10.5826 9.90562 10.7198L12.0005 12.8142L14.0948 10.7198C14.2361 10.5826 14.4258 10.5064 14.6228 10.5078C14.8198 10.5092 15.0084 10.588 15.1477 10.7273C15.287 10.8666 15.366 11.0551 15.3675 11.2521C15.3689 11.4491 15.2928 11.6388 15.1556 11.7802L13.0608 13.875L15.1556 15.9698Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <div className="">
              <p className="mb-0">Valid Thru</p>
              <p className="mb-0">02/27</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="33"
              viewBox="0 0 52 33"
              fill="none"
            >
              <path
                d="M2.29751 -0.00689697C1.15398 -0.00689697 0.226562 0.920264 0.226562 2.06405V30.436C0.226562 31.5797 1.15445 32.5069 2.29751 32.5069H49.9292C51.0727 32.5069 52.0001 31.5798 52.0001 30.436V2.06405C52.0001 0.920316 51.0723 -0.00689697 49.9292 -0.00689697H2.29751ZM31.1483 9.68284C32.4084 9.68284 33.4182 9.96118 34.0622 10.22L33.6221 12.9883L33.3309 12.841C32.731 12.5822 31.9605 12.3331 30.8975 12.3508C29.6252 12.3508 29.037 12.9184 29.037 13.4494C29.0296 14.0478 29.7243 14.4424 30.8603 15.0333C32.7354 15.9451 33.602 17.0505 33.5898 18.5038C33.5646 21.1555 31.3468 22.869 27.9303 22.869C26.4727 22.8529 25.0685 22.5443 24.3094 22.1878L24.7656 19.3273L25.1847 19.5312C26.2521 20.0081 26.9433 20.201 28.2441 20.201C29.1783 20.201 30.1809 19.8099 30.1889 18.9536C30.195 18.3944 29.7698 17.9958 28.5046 17.3696C27.2718 16.7585 25.6374 15.7348 25.6555 13.8992C25.6748 11.4161 27.9368 9.68284 31.1483 9.68284ZM4.80526 10.089H10.0522C10.7588 10.1157 11.3292 10.3432 11.5261 11.1099L12.6571 16.9473C12.6572 16.9479 12.6569 16.95 12.6571 16.9506L12.9968 18.6996L16.1825 10.089H19.6287L14.5063 22.6926L11.0634 22.6958L8.32266 12.5255C9.95342 13.3895 11.3418 14.3891 12.1458 15.7646C11.9385 15.3294 11.6654 14.838 11.3158 14.3538C10.9088 13.7899 10.0297 13.0618 9.6623 12.752C8.38194 11.6727 6.64312 10.801 4.76483 10.3397L4.80526 10.089ZM20.9991 10.1035H24.3693L22.261 22.6877H18.8909L20.9991 10.1035ZM40.034 10.1035H42.5871L45.2599 22.6877H42.1955C42.1955 22.6877 41.8915 21.242 41.7927 20.8012C41.311 20.8012 37.9424 20.7964 37.5634 20.7964C37.4352 21.1371 36.8677 22.6877 36.8677 22.6877H33.4005L38.3044 11.1487C38.6516 10.3287 39.2434 10.1035 40.034 10.1035ZM40.2848 13.4882C40.1189 13.9563 39.8302 14.7122 39.8495 14.679C39.8495 14.679 38.8121 17.4458 38.5407 18.164L41.2668 18.1624C41.0136 16.9624 40.7601 15.7625 40.5064 14.5626L40.2848 13.4883V13.4882Z"
                fill="#112211"
              />
            </svg>
          </div>
        </div>
        <div
          className="add-visa py-3 rounded-3 add-visa-width"
          onClick={() => setModalShow(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="65"
            viewBox="0 0 64 65"
            fill="none"
          >
            <path
              d="M56 32.5C56 19.25 45.25 8.5 32 8.5C18.75 8.5 8 19.25 8 32.5C8 45.75 18.75 56.5 32 56.5C45.25 56.5 56 45.75 56 32.5Z"
              stroke="#8DD3BB"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M32 22.5V42.5M42 32.5H22"
              stroke="#8DD3BB"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Add a new card</p>
        </div>
        <PaymentModal show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </div>
  );
};

export default AccountPayment;
