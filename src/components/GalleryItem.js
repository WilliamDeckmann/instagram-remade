/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

// Components
import PostImage from "../components/PostImage";

// Assets
import Image from "../assets/image-test.jpg";

const GalleryItem = () => {

    // Style
    const styles = css`
        .Gallery-item__button {
            width: 293px;
            height: 293px;
        };

        /* Imports */
        .Post-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        };

        .card {
            display: grid;
            grid-template-columns: 1;
            grid-template-rows: 1;
        };

        .socialbubbles {
            background: rgb(0 0 0 / 66%);
            display: grid;
            place-items: center;
            grid-template-rows: 1fr;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        };

        .socialbubblesselector {
          color: white;
          display: flex;
          place-items: center;
          gap: 10px;
        };

        .socialbubbles__item1 {
            justify-self: end;
        };

        .socialbubbles__item2 {
            justify-self: start;
        };

        img,
        .socialbubbles {
            width: 100%;
            height: 100%;
            grid-column: 1;
            grid-row: 1;
        };

        #mouse_over {
            opacity: 0;
        };

        #mouse_over:hover {
            opacity: 1;
        };

        .popupimg {
            width: 25px;
            height: 25px;
        };

    `;

    return (
        <div className="Gallery-item" css={styles}>
            <button className="Gallery-item__button">
                <PostImage img={Image} alt="image"/>
            </button>
        </div>
    );
}

export default GalleryItem;