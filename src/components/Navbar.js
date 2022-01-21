/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

import heart from '../assets/heart.svg'
import home from '../assets/home.svg'
import paperplane from '../assets/paperplane.svg'
import explore from '../assets/explore.svg'
import plus from '../assets/plus.svg'
import profile from '../assets/profile.jpg'
import logo from '../assets/735145cfe0a4.png'

const Navbar = () => {

    const styles = css`
      display: flex;
      justify-content: space-between;
      max-width: 950px;
      width: 100%;
      margin: 0 auto;

        .logo{
            margin-right: 130px;
        }

        .search{
            border: none;
            border-radius: 8px;
            padding: 10px 25px;
            background-color: #ececec;
            font-family:Arial, FontAwesome;
            color: #C7C7C7;
            text-align: left;
        }

        .search:focus{
            outline: none;
        }

        .icons-wrap{
            display: flex;
            width: 250px;
            justify-content: space-between;
            margin-top: 5px;
        }

        .profile-btn img{
            width: 22px;
            height: 22px;
        }

        .icons img{
            cursor: pointer;
            width: 21px;
            height: 21px;
        }

        .icons a{
            color: black;
        }
    `;

  return (
      <div className="nav-wrapper" css={styles}>
          <a href="/home"><img className="logo" src={logo} alt="" /></a>
          <div className="search-main">
              <input type="text" name="text" className="search" placeholder="&#xF002; Søg" />
          </div>
          <div className="icons-wrap" css={styles}>
              <a href="#" className="search-btn"></a>
              <a href="/home"><img src={home} alt="" /></a>
              <a href="index.html"><img className='icons' src={paperplane} alt="" /></a>
              <a href="index.html"><img className='icons' src={plus} alt="" /></a>
              <a href="index.html"><img className='icons' src={explore} alt="" /></a>
              <a href="index.html"><img className='icons' src={heart} alt="" /></a>
              <a href="/user" className="profile-btn"><img src={profile} alt="" /></a>
          </div>
      </div>
  );
}

export default Navbar;