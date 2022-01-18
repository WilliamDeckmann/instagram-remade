/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

// Components
import GalleryItem from "../components/GalleryItem";

const GalleryList = (props) => {

    // Style
    const styles = css`
        display: grid;
          grid-template-columns: repeat(3, 1fr);
          justify-items: center;
          gap: 28px;
    `;

    return (
        <div className="Gallery-list" css={styles}>
            {props.data.map(item => (
                <GalleryItem {...item} key={item.id} />
            ))}
        </div>
    );
}
 
export default GalleryList;