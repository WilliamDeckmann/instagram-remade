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
            object-fit: cover;
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