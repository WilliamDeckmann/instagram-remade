/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { useState } from "react";

// Components
import BoldText from "./BoldText";
import ThinText from "./ThinText";
import ReadMore from "./ReadMore";
import DetailsText from "./DetailsText";
import ShareButton from "./ShareButton";
import LikeButton from "./LikeButton";
import ChatButton from "./ChatButton";
import BookmarkButton from "./BookmarkButton";

// Assets
import Heart from "../assets/heart.svg";
import HeartHover from "../assets/heartgrey.svg";
import HeartActive from "../assets/heartactivepink.svg";
import ChatBubble from "../assets/chatbubbleblack.svg";
import ChatBubbleHover from "../assets/chatbubble.svg";
import PaperPlane from "../assets/paperplane.svg";
import PaperPlaneHover from "../assets/paperplanegrey.svg";
import Bookmark from "../assets/settingsbookmark.svg";
import BookmarkHover from "../assets/settingsbookmarkgrey.svg";
import BookmarkActive from "../assets/bookmarkfilled.svg";

const PostDetails = () => {

    // Icon states
    const [ likeButton, setLikeButton ] = useState(Heart);
    const [ chatButton, setChatButton ] = useState(ChatBubble);
    const [ shareButton, setShareButton ] = useState(PaperPlane);
    const [ bookmarkButton, setBookmarkButton ] = useState(Bookmark);

    // Like state
    const [ likeState, setLikeState ] = useState(false);
    const [ likeCount, setLikeCount ] = useState(false);
    const UpdateLikeState = () => {
        setLikeState(!likeState);
        setLikeCount(!likeCount);
    };

    // Bookmark state
    const [ bookmarkState, setBookmarkState ] = useState(false);
    const UpdateBookmarkState = () => {
        setBookmarkState(!bookmarkState);
    };

    // Style
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

        .Post-details__date {
            margin-top: 5px;
        }
    `;

    return (
        <div className="Post-details" css={styles}>
            <header className="Post-details__header">
                <section className="Post-details__left-section">
                    <div className="Post-details__icon"
                    onMouseEnter={() => setLikeButton(HeartHover)}
                    onMouseLeave={() => setLikeButton(Heart)}
                    onClick={UpdateLikeState}>
                        <LikeButton img={likeState ? HeartActive : likeButton} />
                    </div>
                    <div className="Post-details__icon"
                    onMouseEnter={() => setChatButton(ChatBubbleHover)}
                    onMouseLeave={() => setChatButton(ChatBubble)}>
                        <ChatButton img={chatButton} />
                    </div>
                    <div className="Post-details__icon"
                    onMouseEnter={() => setShareButton(PaperPlaneHover)}
                    onMouseLeave={() => setShareButton(PaperPlane)}>
                        <ShareButton img={shareButton} />
                    </div>
                </section>
                <section className="Post-details__right-section">
                    <div className="Post-details__icon"
                    onMouseEnter={() => setBookmarkButton(BookmarkHover)}
                    onMouseLeave={() => setBookmarkButton(Bookmark)}
                    onClick={UpdateBookmarkState}>
                        <BookmarkButton img={bookmarkState ? BookmarkActive : bookmarkButton} />
                    </div>
                </section>
            </header>
            <article className="Post-details__article">
                <p className="Post-details__like-count">
                    <BoldText text={likeCount ? 1 : 0} /> <BoldText text="Synes godt om" />
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