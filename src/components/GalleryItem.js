/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

// Components
import PostImage from "../components/PostImage";
import GalleryItemHover from "./GalleryItemHover";

const GalleryItem = (props) => {

    // Style
    const styles = css`
        .Gallery-item__button {
            ${'' /* width: 293px;
            height: 293px; */}
            display: grid;
            grid-template-columns: 293px;
            grid-template-rows: 293px;
        };

        /* Imports */
        .Post-image {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            width: 100%;
            height: 100%;
            object-fit: cover;
        };

        .Gallery-item-hover {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
        };
    `;

    return (
        <div className="Gallery-item" css={styles}>
            <button className="Gallery-item__button">
                <PostImage img={props.media_url} alt="image"/>
                <GalleryItemHover />
            </button>
        </div>
    );
}

export default GalleryItem;