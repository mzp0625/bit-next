import React from "react";

import NavLink from "../common/NavLink";

const ProfileTab = ({ profile }) => (
  <ul className="nav nav-pills outline-active">
    <li className="nav-item">
      <NavLink href={`/profile/${profile.username}`}>My Articles</NavLink>
    </li>
    <li className="nav-item">
      <NavLink href={`/profile/${profile.username}?favorite=true`}>
        Favorited Articles
      </NavLink>
    </li>
  </ul>
);

export default ProfileTab;