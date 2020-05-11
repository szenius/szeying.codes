import React from 'react';
import {ProfileLink} from './ProfileLink';

export const Profile = () => (
  <>
    <div class="profile-header" />
    <div class="profile-icon-wrapper">
      <div class="profile-icon" />
    </div>
    <h1 class="profile-name">SZE YING</h1>
    <p class="profile-nickname">aka @szenius</p>
    <span class="profile-emoji" role="img" aria-label="SG">
      🌻 💻 🇸🇬
    </span>
    <div>
      <ProfileLink url={'https://github.com/szenius'} text="fun projects" />
      <ProfileLink url={'https://dev.to/szenius'} text="what i'm writing" />
      <ProfileLink url={'https://twitter.com/szenius'} text="me tweet too" />
      <ProfileLink url={'https://linkedin.com/in/sze-ying-ting'} text="linkedin" />
      <ProfileLink url={'mailto:ting.szeying@gmail.com'} text="come talk to me" />
    </div>
  </>
);
