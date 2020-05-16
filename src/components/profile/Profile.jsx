import React from 'react';
import {ProfileExpanded} from './ProfileExpanded';
import {ProfileCollapsed} from './ProfileCollapsed';
import './profile.css';
export const Profile = ({isProfileExpanded}) =>
  isProfileExpanded ? <ProfileExpanded /> : <ProfileCollapsed />;
