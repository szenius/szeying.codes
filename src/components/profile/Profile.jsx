import React from 'react';
import {ProfileLink} from './ProfileLink';

export const Profile = ({isProfileExpanded}) => (
  <>
    <div class={'profile-header'.concat(isProfileExpanded ? '' : ' collapsed')} />
    <div class={'profile-icon'.concat(isProfileExpanded ? '' : ' collapsed')} />
    <h1 class={'profile-name'.concat(isProfileExpanded ? '' : ' collapsed')}>SZE YING</h1>
    <p class={'profile-nickname'.concat(isProfileExpanded ? '' : ' hidden')}>aka @szenius</p>
    <span class={'profile-emoji'.concat(isProfileExpanded ? '' : ' hidden')} role="img" aria-label="SG">
      🌻 💻 🇸🇬
    </span>
    <div>
      <ProfileLink url={'https://github.com/szenius'} text="fun projects" isProfileExpanded={isProfileExpanded} />
      <ProfileLink url={'https://dev.to/szenius'} text="what i'm writing" isProfileExpanded={isProfileExpanded} />
      <ProfileLink url={'https://twitter.com/szenius'} text="me tweet too" isProfileExpanded={isProfileExpanded} />
      <ProfileLink url={'https://linkedin.com/in/sze-ying-ting'} text="linkedin" isProfileExpanded={isProfileExpanded} />
      <ProfileLink url={'mailto:ting.szeying@gmail.com'} text="come talk to me" isProfileExpanded={isProfileExpanded} />
    </div>
  </>
);
