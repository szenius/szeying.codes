import React from 'react';
import {ProfileLink} from './ProfileLink';

export const ProfileCollapsed = () => (
  <>
    <div class="profile-banner">
      <div class="profile-banner-wrapper">
        <ProfileLink url="https://github.com/szenius" text="github" className="profile-link inline" />
      </div>
      <div class="profile-banner-wrapper">
        <ProfileLink url="https://gitlab.com/szenius" text="gitlab" className="profile-link inline" />
      </div>
      <div class="profile-banner-wrapper">
        <ProfileLink url="https://dev.to/szenius" text="dev.to" className="profile-link inline" />
      </div>
      <div class="profile-banner-wrapper">
        <h2 class="profile-name collapsed">SZE YING</h2>
      </div>
      <div class="profile-banner-wrapper">
        <ProfileLink url="https://twitter.com/szenius" text="twitter" className="profile-link inline" />
      </div>
      <div class="profile-banner-wrapper">
        <ProfileLink
          url="https://linkedin.com/in/sze-ying-ting"
          text="linkedin"
          className="profile-link inline"
        />
      </div>
      <div class="profile-banner-wrapper">
        <ProfileLink url="mailto:ting.szeying@gmail.com" text="email" className="profile-link inline " />
      </div>
    </div>
  </>
);
