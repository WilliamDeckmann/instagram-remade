/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import BoldText from "./BoldText";
import SocialIcon from "./SocialIcon";
import UserIcon from "./UserIcon";

const UserSection = () => {

    const styles = css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid lightgrey;

        .User-section__left-section {
            width: 100%;
            padding: 14px 4px 14px 16px;
        };

        .User-section__link {
            display: flex;
            align-item: center;
            gap: 14px;
            text-decoration: none;
            color: black;
        };

        .User-section__right-section {
            padding-right: 8px;
        };


        /* Imports */
        .User-icon {
            max-width: 32px;
            max-height: 32px;
        };

        .Social-icon {
            padding: 8px;
        };
    `;

    return (
        <div className="User-section" css={styles}>
            <section className="User-section__left-section">
                <a className="User-section__link" href="">
                    <UserIcon img="" alt="user-icon" />
                    <BoldText text="user-name" />
                </a>
            </section>
            <section className="User-section__right-section">
                <SocialIcon img="" alt="dots" />
            </section>
        </div>
    );
}
 
export default UserSection;