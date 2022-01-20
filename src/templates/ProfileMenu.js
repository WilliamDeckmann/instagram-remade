/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

// Components
import SocialIcon from "../components/SocialIcon";
import ThinText from "../components/ThinText";

//Assets
import GridCategory from './../assets/gridcategory.svg';
import Bookmark from './../assets/settingsbookmark.svg';
import ProfileBubble from './../assets/profilebubble.svg';

const ProfileMenu = () => {

    const styles = css`
      .Profile-menu__line {
          height: 1px;
          background: black;
      };

      .Profile-menu__nav {
          display: flex;
          grid-template-columns: 1fr 1fr;
          justify-content: center;
          flex-direction: row;
          text-align: center;
          gap: 20px;
          margin-top: 20px;
          margin-bottom: 20px;
          font-size: 12px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          line-height: 16px;
          font-weight: 600;
      };

      .Profile-menu__link {
            display: flex;
            align-items: center;
            gap: 6px;
        };

        // Imports
        .Social-icon {
            height: 12px;
        };

        .Thin-text {
            font-size: 12px;
        };
  `;

    return (
        <div className="Profile-menu" css={styles}>
            <hr className="Profile-menu__line" />
            <nav className="Profile-menu__nav">
                <li className="Profile-menu__item">
                    <Link className="Profile-menu__link" to="/user" >
                        <SocialIcon img={GridCategory} alt="icon" />
                        <ThinText text="Opslag" />
                    </Link>
                </li>
                <li className="Profile-menu__item">
                    <Link className="Profile-menu__link" to="/user/saved" >
                        <SocialIcon img={Bookmark} alt="icon" />
                        <ThinText text="Gemt" />
                    </Link>
                </li>
                <li className="Profile-menu__item">
                    <Link className="Profile-menu__link" to="/user/tagged" >
                        <SocialIcon img={ProfileBubble} alt="icon" />
                        <ThinText text="Tagged" />
                    </Link>
                </li>
          </nav>
        </div>
    );
}
 
export default ProfileMenu;