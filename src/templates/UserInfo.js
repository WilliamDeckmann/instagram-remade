/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

// Components
import BoldText from "../components/BoldText";
import ThinText from "../components/ThinText";
import UserIcon from "../components/UserIcon";
import UserName from "../components/UserName";
import MessageButton from "../components/MessageButton";
import FollowButton from "../components/FollowButton";
import RecommendationButton from "../components/RecommendationButton";
import OptionsButton from "../components/OptionsButton";
import EditButton from "../components/EditButton";
import GearButton from "../components/GearButton";

// Assets
import WuGF06 from "../assets/WuGF06.jpg";

const UserInfo = () => {

    // Style
    const styles = css`
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
    `;

    return (
        <div className="User-info" css={styles}>
            <figure className="User-info__figure">
                <UserIcon img={WuGF06} alt="user-icon" />
            </figure>
            <section className="User-info__info">
                <header className="User-info__header">
                    <UserName text="rtswu06" />
                    {/* <section className="User-info__section">
                        <MessageButton />
                        <FollowButton />
                        <RecommendationButton />
                        <OptionsButton />
                    </section> */}
                    <section className="User-info__section">
                        <EditButton />
                        <GearButton />
                    </section>
                </header>
                {/* <ul className="User-info__list">
                    <li className="User-info__item">
                        <BoldText text="0" />
                        <ThinText text="opslag" />
                    </li>
                    <li className="User-info__item">
                        <BoldText text="0" />
                        <ThinText text="følgere" />
                    </li>
                    <li className="User-info__item">
                        <BoldText text="0" />
                        <ThinText text="fulgte" />
                    </li>
                </ul> */}
                <ul className="User-info__list">
                    <li className="User-info__item">
                        <BoldText text="0" />
                        <ThinText text="opslag" />
                    </li>
                    <li className="User-info__item">
                        <BoldText text="0" />
                        <ThinText text="følger" />
                    </li>
                    <li className="User-info__item">
                        <BoldText text="0" />
                        <ThinText text="fulgte" />
                    </li>
                </ul>
                <p className="User-info__description">
                    <BoldText text="Lærer Troels" />
                </p>
            </section>
        </div>
    );
}
 
export default UserInfo;