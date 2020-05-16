import React from 'react';
import {ProfileLink} from './ProfileLink';

export const ProfileExpanded = () => (
  <>
    <div class="profile-header" />
    <div class="profile-icon" />
    <h1 class="profile-name">SZE YING</h1>
    <p class="profile-nickname">aka @szenius</p>
    <span class="profile-emoji" role="img" aria-label="SG">
      🌻 💻 🇸🇬
    </span>
    <div>
      <ProfileLink url="https://github.com/szenius" text="fun projects" className="profile-link" />
      <ProfileLink url="https://dev.to/szenius" text="what i'm writing" className="profile-link" />
      <ProfileLink url="https://twitter.com/szenius" text="me tweet too" className="profile-link" />
      <ProfileLink url="https://linkedin.com/in/sze-ying-ting" text="linkedin" className="profile-link" />
      <ProfileLink url="mailto:ting.szeying@gmail.com" text="come talk to me" className="profile-link" />
    </div>
  </>
);
