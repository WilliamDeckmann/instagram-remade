/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import BoldText from "./BoldText";
import SocialIcon from "./SocialIcon";
import ThinText from "./ThinText";
import ReadMore from "./ReadMore";
import DetailsText from "./DetailsText";

// Assets
import Heart from "../assets/heart.svg";
import ChatBubble from "../assets/chatbubble.svg";
import PaperPlane from "../assets/paperplane.svg";
import SettingsBookmark from "../assets/settingsbookmark.svg";

const PostDetails = () => {

    const styles = css`
        border-top: 1px solid lightgrey;

        .Post-details__header {
            padding: 6px 8px 8px 8px;
            display: flex;
            justify-content: space-between;
        };

        .Post-details__left-section {
            display: flex;
        };

        .Post-details__article {
            padding: 0 16px 16px 16px;

        };

        .Post-details__like-count {
            margin-bottom: 8px;
            display: flex;
            gap: 4px;
        };

        .Post-details__paragraph {
            display: flex;
            gap: 4px;
        };


        /* Imports */
        .heart {
            padding: 8px;
        };

        .comments {
            padding: 8px;
        };

        .share {
            padding: 8px;
        };

        .bookmark {
            padding: 8px;
        };
    `;

    return (
        <div className="Post-details" css={styles}>
            <header className="Post-details__header">
                <section className="Post-details__left-section">
                    <div className="heart">
                        <SocialIcon img={Heart} alt="heart" />
                    </div>
                    <div className="comments">
                        <SocialIcon img={ChatBubble} alt="comments" /> 
                    </div>
                    <div className="share">
                        <SocialIcon img={PaperPlane} alt="share" />
                    </div>
                </section>
                <section className="Post-details__right-section">
                    <div className="bookmark">
                        <SocialIcon img={SettingsBookmark} alt="bookmark" />
                    </div>
                </section>
            </header>
            <article className="Post-details__article">
                <p className="Post-details__like-count">
                    <BoldText text="0" /> <BoldText text="Synes godt om" />
                </p>
                <p className="Post-details__paragraph">
                    <BoldText text="user-name" />
                    <ThinText text="text-body" /> <ThinText text=" ..." /> <ReadMore />
                </p>
                <p className="Post-details__date">
                    <DetailsText text="post-date" />
                </p>
            </article>
        </div>
    );
}
 
export default PostDetails;