/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

// Components
import BoldText from "./BoldText";
import UserIcon from "./UserIcon";
import SocialIcon from "./SocialIcon";

// Assets
import Dots from "../assets/options.svg";

const UserSection = () => {

    // Style
    const styles = css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid lightgrey;

        .User-section__left-section {
            width: 100%;
            padding: 14px 4px 14px 16px;
            display: flex;
            align-item: center;
            gap: 14px;
        };

        .User-section__link {
            display: flex;
            align-items: center;
        };

        .User-section__right-section {
            padding-right: 8px;
        };


        /* Imports */
        .User-icon {
            width: 32px;
            height: 32px;
        };

        .dots {
            padding: 8px;
        };
    `;

    return (
        <div className="User-section" css={styles}>
            <section className="User-section__left-section">
                <Link className="User-section__link" to="">
                    <UserIcon img="" alt="user-icon" />
                </Link>
                <Link className="User-section__link" to="">
                    <h2 className="User-section__title">
                        <BoldText text="user-name" />
                    </h2>
                </Link>
            </section>
            <section className="User-section__right-section">
                <div className="dots">
                    <SocialIcon img={Dots} alt="dots" />
                </div>
            </section>
        </div>
    );
}
 
export default UserSection;