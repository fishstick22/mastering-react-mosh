import React from "react";

const NavBar = () => {
  return (
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/products">Products</a>
      </li>
      <li>
        <a href="/posts/2018/06">Posts</a>
      </li>
      <li>
        <a href="/admin">Admin</a>
      </li>
    </ul>
  );
};

export default NavBar;
