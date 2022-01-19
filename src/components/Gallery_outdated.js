/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import gridcategory from './../assets/gridcategory.svg';
import profilebubble from './../assets/profilebubble.svg';
import bookmark from './../assets/settingsbookmark.svg';
import GalleryContainer from "../templates/GalleryContainer";

const Gallery = () => {

  const gallery = css`
      .Gallery__line {
          height: 1px;
          background: black;
      };

      .categorylist {
          display: flex;
          grid-template-columns: 1fr 1fr;
          justify-content: center;
          flex-direction: row;
          text-align: center;
          gap: 20px;
          margin-top: 20px;
          margin-bottom: 20px;
          font-size: 12px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          line-height: 16px;
          font-weight: 600;
      };

      .categorylist__item1, .categorylist__item2, .categorylist__item3 {
          display: flex;
          align-items: center;
      };
  `;

  return (
      <div className="Gallery" css={gallery}>
          <hr className="Gallery__line" />
          <div className="categorylist">
              <div className="categorylist__item1">
                  <img src={gridcategory} />
                  <span>POSTS</span>
              </div>
              <div className="categorylist__item2">
                  <img src={bookmark} />
                  <span>SAVED</span>
              </div>
              <div className="categorylist__item3">
                  <img src={profilebubble} />
                  <span>TAGGED</span>
              </div>
          </div>
          <GalleryContainer />
      </div>
  );
}

export default Gallery;