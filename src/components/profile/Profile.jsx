import React, {useContext} from 'react';
import {ProfileLink} from './ProfileLink';
import './profile.css';
import {Context} from '../../context/ContextProvider';

export const Profile = () => {
  const {state} = useContext(Context);
  const colorTheme = state.colorTheme;

  return (
    <div class="profile">
      <div class={`icon`} />
      <div class="body">
        <div class="mt10">
          <h1 class="header">SZE YING</h1>
          <p class="subheader">aka @szenius</p>
          <span class="divider" role="img" aria-label="SG">
            🌻🌻🌻
          </span>
          <p class="block">
            Hello! I am a Software Engineer from Singapore. I don't want to restrict myself to one field just
            yet, but I am currently dabbling most in web development. I graduated from National University of
            Singapore in 2019 with a Double Degree in Computer Science and Business Administration. I
            volunteer at BLESS to help improve literacy rates of young low-income children regularly.
          </p>
          <div className="flex-wrap">
            <ProfileLink url="https://github.com/szenius" text="side projects" />
            <ProfileLink url="https://dev.to/szenius" text="my dev blog" />
            <ProfileLink url="https://twitter.com/szenius" text="me twitter" />
            <ProfileLink url="https://linkedin.com/in/sze-ying-ting" text="linkedin" />
            <ProfileLink url="https://medium/@szenius" text="medium" />
            <ProfileLink url="mailto:ting.szeying@gmail.com" text="talk to me" />
          </div>
        </div>
      </div>
    </div>
  );
};
