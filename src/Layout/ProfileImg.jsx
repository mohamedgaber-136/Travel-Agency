import React, { useState } from "react";
import { accountAvatar } from "../assets/images";
import profile1 from "./ProfileAvatars/profile1.jpg";
import profile2 from "./ProfileAvatars/profile2.jpg";
import profile3 from "./ProfileAvatars/profile3.jpg";
import profile4 from "./ProfileAvatars/profile4.jpg";
import profile5 from "./ProfileAvatars/profile5.jpg";
import profile6 from "./ProfileAvatars/profile6.jpg";
import profile7 from "./ProfileAvatars/profile7.jpg";
import profile8 from "./ProfileAvatars/profile8.jpg";
import profile9 from "./ProfileAvatars/profile9.jpg";
import profile10 from "./ProfileAvatars/profile10.jpg";
import Modalimgs from "./Modalimgs";
export const ProfileImg = () => {
  const [ProfileAvatar, setAvatar] = useState(accountAvatar);
  const [modalShow, setModalShow] = useState(false);
  console.log(modalShow);
  function addCover(x) {
    setAvatar(x);
  }
  const profileImgs = [
    profile1,
    profile2,
    profile3,
    profile4,
    profile5,
    profile6,
    profile7,
    profile8,
    profile9,
    profile10,
  ];
  return (
    <div className="account__avatar d-flex flex-column align-items-center ">
      <img
        src={ProfileAvatar}
        alt=""
        className="account__avatar__img rounded-circle"
        onClick={() => setModalShow(true)}
      />
      <div className="text-center">
        <h4 className="m-0">Mahmoud Serag</h4>
        <p>mmmmmmmmmmmmmm hhhhhhhhhhh</p>
      </div>
      <Modalimgs
       show={modalShow}
       onHide={() => setModalShow(false)}
        imgsCovres={profileImgs}
        addCover={addCover}
      />
    </div>
  );
};
