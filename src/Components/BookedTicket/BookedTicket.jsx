import React from "react";
import avatar from "../../assets/images/accountFlow/accountAvatar.png";
import ticketImg from "./download 2.png";
import { searchContext } from "../../store/searchStore";
import { useContext, useState } from "react";

import "./Booked.css";
export const BookedTicket = () => {
  const{searchData}=useContext(searchContext)
console.log(searchData,'Data')
  return (
    <div className="BookedTicketParent d-flex align-items-center justify-content-center">
      <div className="ticket d-flex justify-content-center align-items-center">
        <div className="ticketLeftSide p-2 d-flex align-items-start justify-content-center flex-column">
          <div className="LeftTop ">
            <div className="checkInTitle  d-flex align-items-start p-2 justify-content-center flex-column">
              <h4>{searchData.CheckIn}</h4>
              <h6>Check-In</h6>
            </div>
          </div>
          <div className="svgContainer p-2 d-flex align-items-start justify-content-center flex-column ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="27"
              viewBox="0 0 38 27"
              fill="none"
            >
              <path
                opacity="0.25"
                d="M37 0.5L19 10.5M1 0.5L19 10.5M19 10.5V26.5"
                stroke="#112211"
                stroke-width="0.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <g opacity="0.2">
                <mask id="path-1-inside-1_101_8486" fill="white">
                  <path d="M20.25 8.75H15L15 3.5C15 2.90326 14.7629 2.33097 14.341 1.90901C13.919 1.48705 13.3467 1.25 12.75 1.25L3.75 1.25C3.15326 1.25 2.58097 1.48705 2.15901 1.90901C1.73705 2.33097 1.5 2.90326 1.5 3.5L1.5 23C1.5 23.1989 1.57902 23.3897 1.71967 23.5303C1.86032 23.671 2.05109 23.75 2.25 23.75H7.125C7.22446 23.75 7.31984 23.7105 7.39017 23.6402C7.46049 23.5698 7.5 23.4745 7.5 23.375V20.0211C7.5 19.6175 7.81031 19.2711 8.21391 19.2509C8.31531 19.2461 8.41666 19.2618 8.5118 19.2972C8.60693 19.3327 8.69389 19.3871 8.76739 19.4571C8.84089 19.5271 8.8994 19.6114 8.93938 19.7047C8.97937 19.798 8.99999 19.8985 9 20V23.375C9 23.4745 9.03951 23.5698 9.10983 23.6402C9.18016 23.7105 9.27554 23.75 9.375 23.75L21.75 23.75C21.9489 23.75 22.1397 23.671 22.2803 23.5303C22.421 23.3897 22.5 23.1989 22.5 23L22.5 11C22.5 10.4033 22.2629 9.83097 21.841 9.40901C21.419 8.98705 20.8467 8.75 20.25 8.75ZM4.5975 20.7439C4.44217 20.7642 4.28438 20.7354 4.14627 20.6615C4.00816 20.5875 3.89667 20.4722 3.82744 20.3317C3.75822 20.1911 3.73473 20.0325 3.76028 19.8779C3.78583 19.7234 3.85914 19.5807 3.96991 19.4699C4.08068 19.3591 4.22336 19.2858 4.37791 19.2603C4.53247 19.2347 4.69114 19.2582 4.83167 19.3274C4.9722 19.3967 5.08752 19.5082 5.16145 19.6463C5.23539 19.7844 5.26422 19.9422 5.24391 20.0975C5.22247 20.2614 5.14747 20.4137 5.03057 20.5306C4.91367 20.6475 4.76142 20.7225 4.5975 20.7439ZM4.5975 16.9939C4.44217 17.0142 4.28438 16.9854 4.14627 16.9115C4.00816 16.8375 3.89667 16.7222 3.82744 16.5817C3.75822 16.4411 3.73473 16.2825 3.76028 16.1279C3.78583 15.9734 3.85914 15.8307 3.96991 15.7199C4.08068 15.6091 4.22336 15.5358 4.37791 15.5103C4.53247 15.4847 4.69114 15.5082 4.83167 15.5774C4.9722 15.6467 5.08752 15.7582 5.16145 15.8963C5.23539 16.0344 5.26422 16.1922 5.24391 16.3475C5.22247 16.5114 5.14747 16.6637 5.03057 16.7806C4.91367 16.8975 4.76142 16.9725 4.5975 16.9939ZM4.5975 13.2439C4.44217 13.2642 4.28438 13.2354 4.14627 13.1615C4.00816 13.0875 3.89667 12.9722 3.82744 12.8317C3.75822 12.6911 3.73473 12.5325 3.76028 12.3779C3.78583 12.2234 3.85914 12.0807 3.96991 11.9699C4.08068 11.8591 4.22336 11.7858 4.37791 11.7603C4.53247 11.7347 4.69114 11.7582 4.83167 11.8274C4.9722 11.8967 5.08752 12.0082 5.16145 12.1463C5.23539 12.2844 5.26422 12.4422 5.24391 12.5975C5.22247 12.7614 5.14747 12.9137 5.03057 13.0306C4.91367 13.1475 4.76142 13.2225 4.5975 13.2439ZM4.5975 9.49391C4.44217 9.51422 4.28438 9.48539 4.14627 9.41145C4.00816 9.33752 3.89667 9.2222 3.82744 9.08167C3.75822 8.94114 3.73473 8.78247 3.76028 8.62791C3.78583 8.47335 3.85914 8.33068 3.96991 8.21991C4.08068 8.10914 4.22336 8.03583 4.37791 8.01028C4.53247 7.98473 4.69114 8.00822 4.83167 8.07744C4.9722 8.14667 5.08752 8.25816 5.16145 8.39627C5.23539 8.53438 5.26422 8.69217 5.24391 8.8475C5.22247 9.01142 5.14747 9.16367 5.03057 9.28057C4.91367 9.39747 4.76142 9.47247 4.5975 9.49391ZM4.5975 5.74391C4.44217 5.76422 4.28438 5.73539 4.14627 5.66145C4.00816 5.58752 3.89667 5.4722 3.82744 5.33167C3.75822 5.19114 3.73473 5.03247 3.76028 4.87791C3.78583 4.72336 3.85914 4.58068 3.96991 4.46991C4.08068 4.35914 4.22336 4.28583 4.37791 4.26028C4.53247 4.23473 4.69114 4.25822 4.83167 4.32744C4.9722 4.39667 5.08752 4.50816 5.16145 4.64627C5.23539 4.78438 5.26422 4.94217 5.24391 5.0975C5.22247 5.26142 5.14747 5.41367 5.03057 5.53057C4.91367 5.64747 4.76142 5.72247 4.5975 5.74391ZM8.3475 16.9939C8.19217 17.0142 8.03438 16.9854 7.89627 16.9115C7.75816 16.8375 7.64667 16.7222 7.57744 16.5817C7.50822 16.4411 7.48473 16.2825 7.51028 16.1279C7.53583 15.9734 7.60914 15.8307 7.71991 15.7199C7.83068 15.6091 7.97335 15.5358 8.12791 15.5103C8.28247 15.4847 8.44114 15.5082 8.58167 15.5774C8.7222 15.6467 8.83752 15.7582 8.91145 15.8963C8.98539 16.0344 9.01422 16.1922 8.99391 16.3475C8.97247 16.5114 8.89747 16.6637 8.78057 16.7806C8.66367 16.8975 8.51142 16.9725 8.3475 16.9939ZM8.3475 13.2439C8.19217 13.2642 8.03438 13.2354 7.89627 13.1615C7.75816 13.0875 7.64667 12.9722 7.57744 12.8317C7.50822 12.6911 7.48473 12.5325 7.51028 12.3779C7.53583 12.2234 7.60914 12.0807 7.71991 11.9699C7.83068 11.8591 7.97335 11.7858 8.12791 11.7603C8.28247 11.7347 8.44114 11.7582 8.58167 11.8274C8.7222 11.8967 8.83752 12.0082 8.91145 12.1463C8.98539 12.2844 9.01422 12.4422 8.99391 12.5975C8.97247 12.7614 8.89747 12.9137 8.78057 13.0306C8.66367 13.1475 8.51142 13.2225 8.3475 13.2439ZM8.3475 9.49391C8.19217 9.51422 8.03438 9.48539 7.89627 9.41145C7.75816 9.33752 7.64667 9.2222 7.57744 9.08167C7.50822 8.94114 7.48473 8.78247 7.51028 8.62791C7.53583 8.47335 7.60914 8.33068 7.71991 8.21991C7.83068 8.10914 7.97335 8.03583 8.12791 8.01028C8.28247 7.98473 8.44114 8.00822 8.58167 8.07744C8.7222 8.14667 8.83752 8.25816 8.91145 8.39627C8.98539 8.53438 9.01422 8.69217 8.99391 8.8475C8.97247 9.01142 8.89747 9.16367 8.78057 9.28057C8.66367 9.39747 8.51142 9.47247 8.3475 9.49391ZM8.3475 5.74391C8.19217 5.76422 8.03438 5.73539 7.89627 5.66145C7.75816 5.58752 7.64667 5.4722 7.57744 5.33167C7.50822 5.19114 7.48473 5.03247 7.51028 4.87791C7.53583 4.72336 7.60914 4.58068 7.71991 4.46991C7.83068 4.35914 7.97335 4.28583 8.12791 4.26028C8.28247 4.23473 8.44114 4.25822 8.58167 4.32744C8.7222 4.39667 8.83752 4.50816 8.91145 4.64627C8.98539 4.78438 9.01422 4.94217 8.99391 5.0975C8.97247 5.26142 8.89747 5.41367 8.78057 5.53057C8.66367 5.64747 8.51142 5.72247 8.3475 5.74391ZM12.0975 20.7439C11.9422 20.7642 11.7844 20.7354 11.6463 20.6615C11.5082 20.5875 11.3967 20.4722 11.3274 20.3317C11.2582 20.1911 11.2347 20.0325 11.2603 19.8779C11.2858 19.7234 11.3591 19.5807 11.4699 19.4699C11.5807 19.3591 11.7234 19.2858 11.8779 19.2603C12.0325 19.2347 12.1911 19.2582 12.3317 19.3274C12.4722 19.3967 12.5875 19.5082 12.6615 19.6463C12.7354 19.7844 12.7642 19.9422 12.7439 20.0975C12.7225 20.2614 12.6475 20.4137 12.5306 20.5306C12.4137 20.6475 12.2614 20.7225 12.0975 20.7439ZM12.0975 16.9939C11.9422 17.0142 11.7844 16.9854 11.6463 16.9115C11.5082 16.8375 11.3967 16.7222 11.3274 16.5817C11.2582 16.4411 11.2347 16.2825 11.2603 16.1279C11.2858 15.9734 11.3591 15.8307 11.4699 15.7199C11.5807 15.6091 11.7234 15.5358 11.8779 15.5103C12.0325 15.4847 12.1911 15.5082 12.3317 15.5774C12.4722 15.6467 12.5875 15.7582 12.6615 15.8963C12.7354 16.0344 12.7642 16.1922 12.7439 16.3475C12.7225 16.5114 12.6475 16.6637 12.5306 16.7806C12.4137 16.8975 12.2614 16.9725 12.0975 16.9939ZM12.0975 13.2439C11.9422 13.2642 11.7844 13.2354 11.6463 13.1615C11.5082 13.0875 11.3967 12.9722 11.3274 12.8317C11.2582 12.6911 11.2347 12.5325 11.2603 12.3779C11.2858 12.2234 11.3591 12.0807 11.4699 11.9699C11.5807 11.8591 11.7234 11.7858 11.8779 11.7603C12.0325 11.7347 12.1911 11.7582 12.3317 11.8274C12.4722 11.8967 12.5875 12.0082 12.6615 12.1463C12.7354 12.2844 12.7642 12.4422 12.7439 12.5975C12.7225 12.7614 12.6475 12.9137 12.5306 13.0306C12.4137 13.1475 12.2614 13.2225 12.0975 13.2439ZM12.0975 9.49391C11.9422 9.51422 11.7844 9.48539 11.6463 9.41145C11.5082 9.33752 11.3967 9.2222 11.3274 9.08167C11.2582 8.94114 11.2347 8.78247 11.2603 8.62791C11.2858 8.47335 11.3591 8.33068 11.4699 8.21991C11.5807 8.10914 11.7234 8.03583 11.8779 8.01028C12.0325 7.98473 12.1911 8.00822 12.3317 8.07744C12.4722 8.14667 12.5875 8.25816 12.6615 8.39627C12.7354 8.53438 12.7642 8.69217 12.7439 8.8475C12.7225 9.01142 12.6475 9.16367 12.5306 9.28057C12.4137 9.39747 12.2614 9.47247 12.0975 9.49391ZM12.0975 5.74391C11.9422 5.76422 11.7844 5.73539 11.6463 5.66145C11.5082 5.58752 11.3967 5.4722 11.3274 5.33167C11.2582 5.19114 11.2347 5.03247 11.2603 4.87791C11.2858 4.72336 11.3591 4.58068 11.4699 4.46991C11.5807 4.35914 11.7234 4.28583 11.8779 4.26028C12.0325 4.23473 12.1911 4.25822 12.3317 4.32744C12.4722 4.39667 12.5875 4.50816 12.6615 4.64627C12.7354 4.78438 12.7642 4.94217 12.7439 5.0975C12.7225 5.26142 12.6475 5.41367 12.5306 5.53057C12.4137 5.64747 12.2614 5.72247 12.0975 5.74391ZM20.8125 22.25H15L15 10.25L20.25 10.25C20.4489 10.25 20.6397 10.329 20.7803 10.4697C20.921 10.6103 21 10.8011 21 11L21 22.0625C21 22.1122 20.9802 22.1599 20.9451 22.1951C20.9099 22.2302 20.8622 22.25 20.8125 22.25Z" />
                </mask>
                <path
                  d="M20.25 8.75H15L15 3.5C15 2.90326 14.7629 2.33097 14.341 1.90901C13.919 1.48705 13.3467 1.25 12.75 1.25L3.75 1.25C3.15326 1.25 2.58097 1.48705 2.15901 1.90901C1.73705 2.33097 1.5 2.90326 1.5 3.5L1.5 23C1.5 23.1989 1.57902 23.3897 1.71967 23.5303C1.86032 23.671 2.05109 23.75 2.25 23.75H7.125C7.22446 23.75 7.31984 23.7105 7.39017 23.6402C7.46049 23.5698 7.5 23.4745 7.5 23.375V20.0211C7.5 19.6175 7.81031 19.2711 8.21391 19.2509C8.31531 19.2461 8.41666 19.2618 8.5118 19.2972C8.60693 19.3327 8.69389 19.3871 8.76739 19.4571C8.84089 19.5271 8.8994 19.6114 8.93938 19.7047C8.97937 19.798 8.99999 19.8985 9 20V23.375C9 23.4745 9.03951 23.5698 9.10983 23.6402C9.18016 23.7105 9.27554 23.75 9.375 23.75L21.75 23.75C21.9489 23.75 22.1397 23.671 22.2803 23.5303C22.421 23.3897 22.5 23.1989 22.5 23L22.5 11C22.5 10.4033 22.2629 9.83097 21.841 9.40901C21.419 8.98705 20.8467 8.75 20.25 8.75ZM4.5975 20.7439C4.44217 20.7642 4.28438 20.7354 4.14627 20.6615C4.00816 20.5875 3.89667 20.4722 3.82744 20.3317C3.75822 20.1911 3.73473 20.0325 3.76028 19.8779C3.78583 19.7234 3.85914 19.5807 3.96991 19.4699C4.08068 19.3591 4.22336 19.2858 4.37791 19.2603C4.53247 19.2347 4.69114 19.2582 4.83167 19.3274C4.9722 19.3967 5.08752 19.5082 5.16145 19.6463C5.23539 19.7844 5.26422 19.9422 5.24391 20.0975C5.22247 20.2614 5.14747 20.4137 5.03057 20.5306C4.91367 20.6475 4.76142 20.7225 4.5975 20.7439ZM4.5975 16.9939C4.44217 17.0142 4.28438 16.9854 4.14627 16.9115C4.00816 16.8375 3.89667 16.7222 3.82744 16.5817C3.75822 16.4411 3.73473 16.2825 3.76028 16.1279C3.78583 15.9734 3.85914 15.8307 3.96991 15.7199C4.08068 15.6091 4.22336 15.5358 4.37791 15.5103C4.53247 15.4847 4.69114 15.5082 4.83167 15.5774C4.9722 15.6467 5.08752 15.7582 5.16145 15.8963C5.23539 16.0344 5.26422 16.1922 5.24391 16.3475C5.22247 16.5114 5.14747 16.6637 5.03057 16.7806C4.91367 16.8975 4.76142 16.9725 4.5975 16.9939ZM4.5975 13.2439C4.44217 13.2642 4.28438 13.2354 4.14627 13.1615C4.00816 13.0875 3.89667 12.9722 3.82744 12.8317C3.75822 12.6911 3.73473 12.5325 3.76028 12.3779C3.78583 12.2234 3.85914 12.0807 3.96991 11.9699C4.08068 11.8591 4.22336 11.7858 4.37791 11.7603C4.53247 11.7347 4.69114 11.7582 4.83167 11.8274C4.9722 11.8967 5.08752 12.0082 5.16145 12.1463C5.23539 12.2844 5.26422 12.4422 5.24391 12.5975C5.22247 12.7614 5.14747 12.9137 5.03057 13.0306C4.91367 13.1475 4.76142 13.2225 4.5975 13.2439ZM4.5975 9.49391C4.44217 9.51422 4.28438 9.48539 4.14627 9.41145C4.00816 9.33752 3.89667 9.2222 3.82744 9.08167C3.75822 8.94114 3.73473 8.78247 3.76028 8.62791C3.78583 8.47335 3.85914 8.33068 3.96991 8.21991C4.08068 8.10914 4.22336 8.03583 4.37791 8.01028C4.53247 7.98473 4.69114 8.00822 4.83167 8.07744C4.9722 8.14667 5.08752 8.25816 5.16145 8.39627C5.23539 8.53438 5.26422 8.69217 5.24391 8.8475C5.22247 9.01142 5.14747 9.16367 5.03057 9.28057C4.91367 9.39747 4.76142 9.47247 4.5975 9.49391ZM4.5975 5.74391C4.44217 5.76422 4.28438 5.73539 4.14627 5.66145C4.00816 5.58752 3.89667 5.4722 3.82744 5.33167C3.75822 5.19114 3.73473 5.03247 3.76028 4.87791C3.78583 4.72336 3.85914 4.58068 3.96991 4.46991C4.08068 4.35914 4.22336 4.28583 4.37791 4.26028C4.53247 4.23473 4.69114 4.25822 4.83167 4.32744C4.9722 4.39667 5.08752 4.50816 5.16145 4.64627C5.23539 4.78438 5.26422 4.94217 5.24391 5.0975C5.22247 5.26142 5.14747 5.41367 5.03057 5.53057C4.91367 5.64747 4.76142 5.72247 4.5975 5.74391ZM8.3475 16.9939C8.19217 17.0142 8.03438 16.9854 7.89627 16.9115C7.75816 16.8375 7.64667 16.7222 7.57744 16.5817C7.50822 16.4411 7.48473 16.2825 7.51028 16.1279C7.53583 15.9734 7.60914 15.8307 7.71991 15.7199C7.83068 15.6091 7.97335 15.5358 8.12791 15.5103C8.28247 15.4847 8.44114 15.5082 8.58167 15.5774C8.7222 15.6467 8.83752 15.7582 8.91145 15.8963C8.98539 16.0344 9.01422 16.1922 8.99391 16.3475C8.97247 16.5114 8.89747 16.6637 8.78057 16.7806C8.66367 16.8975 8.51142 16.9725 8.3475 16.9939ZM8.3475 13.2439C8.19217 13.2642 8.03438 13.2354 7.89627 13.1615C7.75816 13.0875 7.64667 12.9722 7.57744 12.8317C7.50822 12.6911 7.48473 12.5325 7.51028 12.3779C7.53583 12.2234 7.60914 12.0807 7.71991 11.9699C7.83068 11.8591 7.97335 11.7858 8.12791 11.7603C8.28247 11.7347 8.44114 11.7582 8.58167 11.8274C8.7222 11.8967 8.83752 12.0082 8.91145 12.1463C8.98539 12.2844 9.01422 12.4422 8.99391 12.5975C8.97247 12.7614 8.89747 12.9137 8.78057 13.0306C8.66367 13.1475 8.51142 13.2225 8.3475 13.2439ZM8.3475 9.49391C8.19217 9.51422 8.03438 9.48539 7.89627 9.41145C7.75816 9.33752 7.64667 9.2222 7.57744 9.08167C7.50822 8.94114 7.48473 8.78247 7.51028 8.62791C7.53583 8.47335 7.60914 8.33068 7.71991 8.21991C7.83068 8.10914 7.97335 8.03583 8.12791 8.01028C8.28247 7.98473 8.44114 8.00822 8.58167 8.07744C8.7222 8.14667 8.83752 8.25816 8.91145 8.39627C8.98539 8.53438 9.01422 8.69217 8.99391 8.8475C8.97247 9.01142 8.89747 9.16367 8.78057 9.28057C8.66367 9.39747 8.51142 9.47247 8.3475 9.49391ZM8.3475 5.74391C8.19217 5.76422 8.03438 5.73539 7.89627 5.66145C7.75816 5.58752 7.64667 5.4722 7.57744 5.33167C7.50822 5.19114 7.48473 5.03247 7.51028 4.87791C7.53583 4.72336 7.60914 4.58068 7.71991 4.46991C7.83068 4.35914 7.97335 4.28583 8.12791 4.26028C8.28247 4.23473 8.44114 4.25822 8.58167 4.32744C8.7222 4.39667 8.83752 4.50816 8.91145 4.64627C8.98539 4.78438 9.01422 4.94217 8.99391 5.0975C8.97247 5.26142 8.89747 5.41367 8.78057 5.53057C8.66367 5.64747 8.51142 5.72247 8.3475 5.74391ZM12.0975 20.7439C11.9422 20.7642 11.7844 20.7354 11.6463 20.6615C11.5082 20.5875 11.3967 20.4722 11.3274 20.3317C11.2582 20.1911 11.2347 20.0325 11.2603 19.8779C11.2858 19.7234 11.3591 19.5807 11.4699 19.4699C11.5807 19.3591 11.7234 19.2858 11.8779 19.2603C12.0325 19.2347 12.1911 19.2582 12.3317 19.3274C12.4722 19.3967 12.5875 19.5082 12.6615 19.6463C12.7354 19.7844 12.7642 19.9422 12.7439 20.0975C12.7225 20.2614 12.6475 20.4137 12.5306 20.5306C12.4137 20.6475 12.2614 20.7225 12.0975 20.7439ZM12.0975 16.9939C11.9422 17.0142 11.7844 16.9854 11.6463 16.9115C11.5082 16.8375 11.3967 16.7222 11.3274 16.5817C11.2582 16.4411 11.2347 16.2825 11.2603 16.1279C11.2858 15.9734 11.3591 15.8307 11.4699 15.7199C11.5807 15.6091 11.7234 15.5358 11.8779 15.5103C12.0325 15.4847 12.1911 15.5082 12.3317 15.5774C12.4722 15.6467 12.5875 15.7582 12.6615 15.8963C12.7354 16.0344 12.7642 16.1922 12.7439 16.3475C12.7225 16.5114 12.6475 16.6637 12.5306 16.7806C12.4137 16.8975 12.2614 16.9725 12.0975 16.9939ZM12.0975 13.2439C11.9422 13.2642 11.7844 13.2354 11.6463 13.1615C11.5082 13.0875 11.3967 12.9722 11.3274 12.8317C11.2582 12.6911 11.2347 12.5325 11.2603 12.3779C11.2858 12.2234 11.3591 12.0807 11.4699 11.9699C11.5807 11.8591 11.7234 11.7858 11.8779 11.7603C12.0325 11.7347 12.1911 11.7582 12.3317 11.8274C12.4722 11.8967 12.5875 12.0082 12.6615 12.1463C12.7354 12.2844 12.7642 12.4422 12.7439 12.5975C12.7225 12.7614 12.6475 12.9137 12.5306 13.0306C12.4137 13.1475 12.2614 13.2225 12.0975 13.2439ZM12.0975 9.49391C11.9422 9.51422 11.7844 9.48539 11.6463 9.41145C11.5082 9.33752 11.3967 9.2222 11.3274 9.08167C11.2582 8.94114 11.2347 8.78247 11.2603 8.62791C11.2858 8.47335 11.3591 8.33068 11.4699 8.21991C11.5807 8.10914 11.7234 8.03583 11.8779 8.01028C12.0325 7.98473 12.1911 8.00822 12.3317 8.07744C12.4722 8.14667 12.5875 8.25816 12.6615 8.39627C12.7354 8.53438 12.7642 8.69217 12.7439 8.8475C12.7225 9.01142 12.6475 9.16367 12.5306 9.28057C12.4137 9.39747 12.2614 9.47247 12.0975 9.49391ZM12.0975 5.74391C11.9422 5.76422 11.7844 5.73539 11.6463 5.66145C11.5082 5.58752 11.3967 5.4722 11.3274 5.33167C11.2582 5.19114 11.2347 5.03247 11.2603 4.87791C11.2858 4.72336 11.3591 4.58068 11.4699 4.46991C11.5807 4.35914 11.7234 4.28583 11.8779 4.26028C12.0325 4.23473 12.1911 4.25822 12.3317 4.32744C12.4722 4.39667 12.5875 4.50816 12.6615 4.64627C12.7354 4.78438 12.7642 4.94217 12.7439 5.0975C12.7225 5.26142 12.6475 5.41367 12.5306 5.53057C12.4137 5.64747 12.2614 5.72247 12.0975 5.74391ZM20.8125 22.25H15L15 10.25L20.25 10.25C20.4489 10.25 20.6397 10.329 20.7803 10.4697C20.921 10.6103 21 10.8011 21 11L21 22.0625C21 22.1122 20.9802 22.1599 20.9451 22.1951C20.9099 22.2302 20.8622 22.25 20.8125 22.25Z"
                  fill="#112211"
                  stroke="#112211"
                  stroke-width="0.09375"
                  mask="url(#path-1-inside-1_101_8486)"
                />
              </g>
              <path
                d="M18.75 19.25C18.6017 19.25 18.4567 19.294 18.3333 19.3764C18.21 19.4588 18.1139 19.5759 18.0571 19.713C18.0003 19.85 17.9855 20.0008 18.0144 20.1463C18.0434 20.2918 18.1148 20.4254 18.2197 20.5303C18.3246 20.6352 18.4582 20.7066 18.6037 20.7356C18.7492 20.7645 18.9 20.7497 19.037 20.6929C19.1741 20.6361 19.2912 20.54 19.3736 20.4167C19.456 20.2933 19.5 20.1483 19.5 20C19.5 19.8011 19.421 19.6103 19.2803 19.4697C19.1397 19.329 18.9489 19.25 18.75 19.25ZM18.75 15.5C18.6017 15.5 18.4567 15.544 18.3333 15.6264C18.21 15.7088 18.1139 15.8259 18.0571 15.963C18.0003 16.1 17.9855 16.2508 18.0144 16.3963C18.0434 16.5418 18.1148 16.6754 18.2197 16.7803C18.3246 16.8852 18.4582 16.9567 18.6037 16.9856C18.7492 17.0145 18.9 16.9997 19.037 16.9429C19.1741 16.8861 19.2912 16.79 19.3736 16.6667C19.456 16.5433 19.5 16.3983 19.5 16.25C19.5 16.0511 19.421 15.8603 19.2803 15.7197C19.1397 15.579 18.9489 15.5 18.75 15.5ZM18.75 11.75C18.6017 11.75 18.4567 11.794 18.3333 11.8764C18.21 11.9588 18.1139 12.0759 18.0571 12.213C18.0003 12.35 17.9855 12.5008 18.0144 12.6463C18.0434 12.7918 18.1148 12.9254 18.2197 13.0303C18.3246 13.1352 18.4582 13.2067 18.6037 13.2356C18.7492 13.2645 18.9 13.2497 19.037 13.1929C19.1741 13.1361 19.2912 13.04 19.3736 12.9167C19.456 12.7933 19.5 12.6483 19.5 12.5C19.5 12.3011 19.421 12.1103 19.2803 11.9697C19.1397 11.829 18.9489 11.75 18.75 11.75ZM15.75 19.25C15.6017 19.25 15.4567 19.294 15.3333 19.3764C15.21 19.4588 15.1139 19.5759 15.0571 19.713C15.0003 19.85 14.9855 20.0008 15.0144 20.1463C15.0434 20.2918 15.1148 20.4254 15.2197 20.5303C15.3246 20.6352 15.4582 20.7066 15.6037 20.7356C15.7492 20.7645 15.9 20.7497 16.037 20.6929C16.1741 20.6361 16.2912 20.54 16.3736 20.4167C16.456 20.2933 16.5 20.1483 16.5 20C16.5 19.8011 16.421 19.6103 16.2803 19.4697C16.1397 19.329 15.9489 19.25 15.75 19.25ZM15.75 15.5C15.6017 15.5 15.4567 15.544 15.3333 15.6264C15.21 15.7088 15.1139 15.8259 15.0571 15.963C15.0003 16.1 14.9855 16.2508 15.0144 16.3963C15.0434 16.5418 15.1148 16.6754 15.2197 16.7803C15.3246 16.8852 15.4582 16.9567 15.6037 16.9856C15.7492 17.0145 15.9 16.9997 16.037 16.9429C16.1741 16.8861 16.2912 16.79 16.3736 16.6667C16.456 16.5433 16.5 16.3983 16.5 16.25C16.5 16.0511 16.421 15.8603 16.2803 15.7197C16.1397 15.579 15.9489 15.5 15.75 15.5ZM15.75 11.75C15.6017 11.75 15.4567 11.794 15.3333 11.8764C15.21 11.9588 15.1139 12.0759 15.0571 12.213C15.0003 12.35 14.9855 12.5008 15.0144 12.6463C15.0434 12.7918 15.1148 12.9254 15.2197 13.0303C15.3246 13.1352 15.4582 13.2067 15.6037 13.2356C15.7492 13.2645 15.9 13.2497 16.037 13.1929C16.1741 13.1361 16.2912 13.04 16.3736 12.9167C16.456 12.7933 16.5 12.6483 16.5 12.5C16.5 12.3011 16.421 12.1103 16.2803 11.9697C16.1397 11.829 15.9489 11.75 15.75 11.75Z"
                fill="#BFCCC5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="27"
              viewBox="0 0 38 27"
              fill="none"
            >
              <path
                opacity="0.25"
                d="M37 26.5L19 16.5M1 26.5L19 16.5M19 16.5V0.5"
                stroke="#112211"
                stroke-width="0.5"
              />
            </svg>
          </div>
          <div className="LeftBottom">
            <div className="checkOutTitle  d-flex align-items-start p-2 justify-content-center flex-column">
              <h4>{searchData.CheckOut}</h4>
              <h6>Check-Out</h6>
            </div>
          </div>
        </div>
        <div className="ticketMiddleSide">
          <div className="MiddleTop p-2 d-flex align-items-center justify-content-between">
            <div className="ticketImg d-flex align-items-center justify-content-start">
              <img
                src={avatar}
                width={"40px"}
                height={"40px"}
                alt="AvataLogo"
                style={{ objectFit: "cover" }}
              />{" "}
              <p className="m-0">James Doe</p>
            </div>
            <div className="ticketRoomsBooked  d-flex align-items-center justify-content-center">
              <p className="m-0">Superior room - {searchData.GuestAndRooms}</p>
            </div>
          </div>
          <div className="Middlebottom container py-2 d-flex flex-column justify-content-center align-items-center">
            <div className="checkInAndOutData d-flex justify-content-start   gap-3 align-items-center">
              <div className="checkInTime  d-flex justify-content-center align-items-center ">
                <div className="svgTiming">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M11 2.75C6.44386 2.75 2.75 6.44386 2.75 11C2.75 15.5561 6.44386 19.25 11 19.25C15.5561 19.25 19.25 15.5561 19.25 11C19.25 6.44386 15.5561 2.75 11 2.75ZM14.8077 12.2692H11C10.8317 12.2692 10.6703 12.2024 10.5513 12.0834C10.4322 11.9643 10.3654 11.8029 10.3654 11.6346V5.92308C10.3654 5.75477 10.4322 5.59335 10.5513 5.47434C10.6703 5.35532 10.8317 5.28846 11 5.28846C11.1683 5.28846 11.3297 5.35532 11.4487 5.47434C11.5678 5.59335 11.6346 5.75477 11.6346 5.92308V11H14.8077C14.976 11 15.1374 11.0669 15.2564 11.1859C15.3754 11.3049 15.4423 11.4663 15.4423 11.6346C15.4423 11.8029 15.3754 11.9643 15.2564 12.0834C15.1374 12.2024 14.976 12.2692 14.8077 12.2692Z"
                      fill="#8DD3BB"
                    />
                  </svg>
                </div>

                <div className="timing  d-flex flex-column justify-content-center align-items-center">
                  <p className="m-0">Check-In time</p>
                  <p className="m-0">12:00pm</p>
                </div>
              </div>
              <div className="checkOutTime d-flex justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M11 2.75C6.44386 2.75 2.75 6.44386 2.75 11C2.75 15.5561 6.44386 19.25 11 19.25C15.5561 19.25 19.25 15.5561 19.25 11C19.25 6.44386 15.5561 2.75 11 2.75ZM14.8077 12.2692H11C10.8317 12.2692 10.6703 12.2024 10.5513 12.0834C10.4322 11.9643 10.3654 11.8029 10.3654 11.6346V5.92308C10.3654 5.75477 10.4322 5.59335 10.5513 5.47434C10.6703 5.35532 10.8317 5.28846 11 5.28846C11.1683 5.28846 11.3297 5.35532 11.4487 5.47434C11.5678 5.59335 11.6346 5.75477 11.6346 5.92308V11H14.8077C14.976 11 15.1374 11.0669 15.2564 11.1859C15.3754 11.3049 15.4423 11.4663 15.4423 11.6346C15.4423 11.8029 15.3754 11.9643 15.2564 12.0834C15.1374 12.2024 14.976 12.2692 14.8077 12.2692Z"
                    fill="#8DD3BB"
                  />
                </svg>
                <div className="timing  d-flex flex-column justify-content-center align-items-center">
                  <p className="m-0">Check-Out time</p>
                  <p className="m-0">12:00pm</p>
                </div>
              </div>
              <div className="RoomNum  d-flex justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 22 23"
                  fill="none"
                >
                  <path
                    d="M15.5222 3.25C15.8302 3.25 16.1255 3.37233 16.3433 3.59008C16.561 3.80783 16.6833 4.10317 16.6833 4.41111V19.5056H18.425C18.579 19.5056 18.7266 19.5667 18.8355 19.6756C18.9444 19.7845 19.0056 19.9321 19.0056 20.0861C19.0056 20.2401 18.9444 20.3878 18.8355 20.4966C18.7266 20.6055 18.579 20.6667 18.425 20.6667H3.33056C3.17658 20.6667 3.02892 20.6055 2.92004 20.4966C2.81117 20.3878 2.75 20.2401 2.75 20.0861C2.75 19.9321 2.81117 19.7845 2.92004 19.6756C3.02892 19.5667 3.17658 19.5056 3.33056 19.5056H5.07222V4.41111C5.07222 4.10317 5.19455 3.80783 5.4123 3.59008C5.63005 3.37233 5.92539 3.25 6.23333 3.25H15.5222ZM13.2 13.7C13.5079 13.7 13.8033 13.5777 14.021 13.3599C14.2388 13.1422 14.3611 12.8468 14.3611 12.5389C14.3611 12.2309 14.2388 11.9356 14.021 11.7179C13.8033 11.5001 13.5079 11.3778 13.2 11.3778C12.8921 11.3778 12.5967 11.5001 12.379 11.7179C12.1612 11.9356 12.0389 12.2309 12.0389 12.5389C12.0389 12.8468 12.1612 13.1422 12.379 13.3599C12.5967 13.5777 12.8921 13.7 13.2 13.7Z"
                    fill="#8DD3BB"
                  />
                </svg>
                <div className="timing w-100  d-flex flex-column justify-content-center align-items-center">
                  <p className="m-0 ">Room no.</p>
                  <p className="m-0 ">On Arrival</p>
                </div>
              </div>
            </div>
            <div className="BarCode p-1 d-flex align-items-end justify-content-between">
              <div>
                <h3 className="m-0">EK</h3>
                <p className="m-0 ">ABC12345</p>
              </div>
              <div className="d-flex ">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="49"
                  viewBox="0 0 24 49"
                  fill="none"
                >
                  <path
                    d="M0 0V49H2.0052V0H0ZM3.7227 0V49H4.20448V0H3.7227ZM4.88036 0V49H6.40474V0H4.88036ZM7.95352 0V49H8.60402V0H7.95352ZM10.3225 0V49H10.8033V0H10.3225ZM11.0101 0V49H13.0026V0H11.0101ZM14.1983 0V49H15.2019V0H14.1983ZM17.1788 0V49H17.4012V0H17.1788ZM18.9314 0V49H19.6014V0H18.9314ZM21.3189 0V49H21.8007V0H21.3189ZM22.0075 0V49H24V0H22.0075Z"
                    fill="#112211"
                  />
                </svg>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="49"
                  viewBox="0 0 24 49"
                  fill="none"
                >
                  <path
                    d="M0 0V49H2.0052V0H0ZM3.7227 0V49H4.20448V0H3.7227ZM4.88036 0V49H6.40474V0H4.88036ZM7.95352 0V49H8.60402V0H7.95352ZM10.3225 0V49H10.8033V0H10.3225ZM11.0101 0V49H13.0026V0H11.0101ZM14.1983 0V49H15.2019V0H14.1983ZM17.1788 0V49H17.4012V0H17.1788ZM18.9314 0V49H19.6014V0H18.9314ZM21.3189 0V49H21.8007V0H21.3189ZM22.0075 0V49H24V0H22.0075Z"
                    fill="#112211"
                  />
                </svg>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="49"
                  viewBox="0 0 24 49"
                  fill="none"
                >
                  <path
                    d="M0 0V49H2.0052V0H0ZM3.7227 0V49H4.20448V0H3.7227ZM4.88036 0V49H6.40474V0H4.88036ZM7.95352 0V49H8.60402V0H7.95352ZM10.3225 0V49H10.8033V0H10.3225ZM11.0101 0V49H13.0026V0H11.0101ZM14.1983 0V49H15.2019V0H14.1983ZM17.1788 0V49H17.4012V0H17.1788ZM18.9314 0V49H19.6014V0H18.9314ZM21.3189 0V49H21.8007V0H21.3189ZM22.0075 0V49H24V0H22.0075Z"
                    fill="#112211"
                  />
                </svg>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="49"
                  viewBox="0 0 24 49"
                  fill="none"
                >
                  <path
                    d="M0 0V49H2.0052V0H0ZM3.7227 0V49H4.20448V0H3.7227ZM4.88036 0V49H6.40474V0H4.88036ZM7.95352 0V49H8.60402V0H7.95352ZM10.3225 0V49H10.8033V0H10.3225ZM11.0101 0V49H13.0026V0H11.0101ZM14.1983 0V49H15.2019V0H14.1983ZM17.1788 0V49H17.4012V0H17.1788ZM18.9314 0V49H19.6014V0H18.9314ZM21.3189 0V49H21.8007V0H21.3189ZM22.0075 0V49H24V0H22.0075Z"
                    fill="#112211"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="ticketRightSide d-flex justify-content-center align-items-center">
          <div className="ticketImgContainer d-flex justify-content-center align-items-center w-75 h-50">
            <img src={ticketImg} alt="ticketImg" />
          </div>
        </div>
      </div>
    </div>
  );
};
