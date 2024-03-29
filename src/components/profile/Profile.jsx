import React, { useContext } from "react";
import { ProfileLink } from "./ProfileLink";
import "./profile.css";
import { Context } from "../../context/ContextProvider";

export const Profile = () => {
  const { state } = useContext(Context);
  const colorTheme = state.colorTheme;

  return (
    <div class="profile">
      <div class="profile__icon" />
      <div class="profile__content">
        <h1 class="profile-content__header">SZE YING</h1>
        <p class="profile-content__subheader">aka @szenius</p>
        <span class="profile-content__emoji-divider" role="img" aria-label="SG">
          🌻🌻🌻
        </span>
        <p class="profile-content__paragraph">
          Hello! I am a{" "}
          <span class={`profile-content__accent--${colorTheme}`}>
            Software Engineer
          </span>{" "}
          from Apple. I was previously from GovTech Singapore. I graduated from
          National University of Singapore in 2019 with a Double Degree in
          Computer Science and Business Administration. I volunteer regularly at
          BLESS to help improve literacy rates of young low-income children.
        </p>
        <div className="profile-content__links">
          <ProfileLink url="https://github.com/szenius" text="projects" />
          <ProfileLink url="https://dev.to/szenius" text="dev blog" />
          <ProfileLink url="https://twitter.com/szenius" text="twitter" />
          <ProfileLink
            url="https://linkedin.com/in/sze-ying-ting"
            text="linkedin"
          />
          <ProfileLink url="https://www.youtube.com/@szenius" text="youtube" />
          <ProfileLink url="mailto:ting.szeying@gmail.com" text="email" />
        </div>
      </div>
    </div>
  );
};
