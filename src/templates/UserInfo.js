/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import BoldText from "../components/BoldText";
import ThinText from "../components/ThinText";
import UserIcon from "../components/UserIcon";
import UserName from "../components/UserName";
import SocialIcon from "../components/SocialIcon";

// Assets
import Arrow from "../assets/arrow.svg";
import Dots from "../assets/options.svg";
import Gear from "../assets/settings.svg"

const UserInfo = () => {

    const Styles = css`
        margin-bottom: 44px;
        display:flex;
        gap: 30px;

        .User-info__figure {
            width: 291px;
            display: flex;
            justify-content: center;
        };

        .User-info__header {
            margin-bottom: 20px;
            display: flex;
            gap: 20px;
        };

        .User-info__section {
            display: flex;
            align-items: center;
            gap: 8px;
        };

        .User-info__list {
            margin-bottom: 20px;
            display: flex;
        };

        .User-info__item {
            width: 100px;
            display: flex;
            gap: 4px;

            /* Imports */
            .Bold-text, .Thin-text {
                font-size: 16px;
            };
        };

        .User-info__description {

            /* Imports */
            .Bold-text, .Thin-text {
                font-size: 16px;
            };
        };

        /* Imports */
        .User-icon {
            width: 150px;
            height: 150px;
        };

        .Edit-button, .Message-button, .Follow-button, .Recommendation-button {
            height: 30px;
            border: 1px solid #dbdbdb;
            border-radius: 5px;
            display: flex;
            align-items: center;
        };

        .Edit-button {
            padding: 5px 9px;
        };

        .Gear-button {
            padding: 8px;
        };

        .Message-button {
            padding: 5px 9px;
        };

        .Follow-button {
            padding: 0 24px;
            display: flex;
            gap: 4px;
        };

        .Recommendation-button {
            padding: 0px 12px;

            .Recommendation-button__arrow-down {
                transform: rotate(180deg);
            };

            /* Imports */
            .Social-icon {
                height: 12px;
            };
        };

        .Options-button {
            padding: 0px 0px;

            /* Imports */
            .Social-icon {
                height: 32px;
            };
        };
    `;

    return (
        <div className="User-info" css={Styles}>
            <figure className="User-info__figure">
                <UserIcon img="" alt="user-icon" />
            </figure>
            <section className="User-info__info">
                <header className="User-info__header">
                    <UserName text="user-name" />
                    {/* <section className="User-info__section">
                        <div className="Edit-button">
                            <BoldText text="Rediger profil" />
                        </div>
                        <div className="Gear-button">
                            <SocialIcon img={Gear} alt="gear" />
                        </div>
                    </section> */}
                    <section className="User-info__section">
                        <div className="Message-button">
                            <BoldText text="Besked" />
                        </div>
                        <div className="Follow-button">
                            <SocialIcon img="" alt="user" />
                            <SocialIcon img="" alt="check-mark" />
                            {/* <SocialIcon img="" alt="cross" /> */}
                        </div>
                        <div className="Recommendation-button">
                            {/* <SocialIcon className="Recommendation-button__arrow-up" img={Arrow} alt="arrow" /> */}
                            <SocialIcon className="Recommendation-button__arrow-down" img={Arrow} alt="arrow" />
                        </div>
                        <div className="Options-button">
                            <SocialIcon img={Dots} alt="dots" />
                        </div>
                    </section>
                </header>
                {/* <ul className="User-info__list">
                    <li className="User-info__item">
                        <BoldText text="0" /> <ThinText text="opslag" />
                    </li>
                    <li className="User-info__item">
                        <BoldText text="0" /> <ThinText text="følger" />
                    </li>
                    <li className="User-info__item">
                        <BoldText text="0" /> <ThinText text="fulgte" />
                    </li>
                </ul> */}
                <ul className="User-info__list">
                    <li className="User-info__item">
                        <BoldText text="0" /> <ThinText text="opslag" />
                    </li>
                    <li className="User-info__item">
                        <BoldText text="0" /> <ThinText text="følgere" />
                    </li>
                    <li className="User-info__item">
                        <BoldText text="0" /> <ThinText text="fulgte" />
                    </li>
                </ul>
                <p className="User-info__description">
                    <BoldText text="text-body" />
                </p>
            </section>
        </div>
    );
}
 
export default UserInfo;