/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import BoldText from "./BoldText";
import SocialIcon from "./SocialIcon";
import ThinText from "./ThinText";
import ReadMore from "./ReadMore";
import DetailsText from "./DetailsText";

const PostDetails = () => {

    const styles = css`
        border-top: 1px solid lightgrey;

        .Post-details__header {
            padding: 6px 8px 8px 8px;
            display: flex;
            justify-content: space-between;
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
        .Social-icon {
            padding: 8px;
        };
    `;

    return (
        <div className="Post-details" css={styles}>
            <header className="Post-details__header">
                <section className="Post-details__left-section">
                    <SocialIcon img="" alt="heart" />
                    <SocialIcon img="" alt="comments" />
                    <SocialIcon img="" alt="share" />
                </section>
                <section className="Post-details__right-section">
                    <SocialIcon img="" alt="bookmark" />
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