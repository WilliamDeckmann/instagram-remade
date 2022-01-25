/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import arrowwhite from './../assets/arrowwhite.svg';
import Image from "../assets/image-test.jpg";
import spritemap from "../assets/spritemap.png";
const Slider = () => {

  const slider = css`
      border: 1px solid lightgrey;
      border-radius: 4px;
      background: #ffffff;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 20px 1fr;
      padding: 20px;

      .arrowleft,.arrowright {
          width: 20px;
          height: auto;
      }
      .arrowleft {
          transform: rotate(-90deg);
      }
      .arrowright {
          transform: rotate(90deg);
      }
      .buttonbackground {
          width: 30px;
          height: 30px;
          background: #7f7f7f;
          opacity: 0.9;
          border-radius: 50%;
      }

      .followbutton {
          background: #0095f6;
          color: #ffffff;
          border: 0;
          padding-left: 30px;
          padding-right: 30px;
          padding-top: 5px;
          padding-bottom: 5px;

          font-size: 14px;
          font-weight: 600;
      }

      .slider__item1 {
          grid-column: 1;
          place-self: center;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      }
      .slider__item2 {
          grid-column: 3;
          color: #0095f6;
          place-self: center;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      }
      .slider__item3 {
          grid-column: 1;
          grid-row: 2;
          place-self: center;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
          align-self: center;
          justify-self: start;
      }

      .imageconstraint {
          grid-column: 1;
          grid-row: 1;
          place-self: center;
      }

      .slider__item4 {
          grid-column: 3;
          grid-row: 2;
          place-self: center;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
          align-self: center;
          justify-self: end;
      }

      .slider__item5 {
          grid-column: 1/span 3;
          grid-row: 2;
          display: flex;
          gap: 25px;
          padding: 35px;
          /* overflow: hidden; */
          place-self: center;
      }

      .sliderprofile {
          border: 1px solid lightgrey;
          border-radius: 4px;
          padding: 35px;
          gap: 10px;
          display: grid;
          place-items: center;
      }

      .sliderprofile__popular {
        font-size: 12px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      }

      .sliderimage {
          width: 50px;
          height: 50px;
          border-radius: 50%;
      }

      /* css hack for background-image */
      .verified {
          background-image: url('${spritemap}');
          background-position: 0 -369px;
          background-repeat: no-repeat;
          width: 18px;
          height: 18px;
          display:block;
          overflow: hidden;
          text-indent: 110%;
      }

      .sliderprofile__identity {
          display: flex;
      }

      .username {
          font-size: 14px;
          font-weight: 600;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      }
  `;

  return (
      <div css={slider}>
          <div className="slider__item1">Forslag til dig</div>
          <div className="slider__item2">Se Alle</div>
          <div className="buttonbackground slider__item3">
              <div className="imageconstraint">
                  <img src={arrowwhite} className="arrowleft" />
              </div>
          </div>
          <div className="buttonbackground slider__item4">
              <div className="imageconstraint">
                  <img src={arrowwhite} className="arrowright" />
              </div>
          </div>
          <div className="slider__item5">
              <div className="sliderprofile">
                  <img src={Image} className="sliderimage" />
                  <div className="sliderprofile__identity">
                      <div className="username">username</div>
                      <span className="verified">verified</span>
                  </div>
                  <div className="sliderprofile__popular">Popular</div>
                  <button className="followbutton">Follow</button>
              </div>
              <div className="sliderprofile">
                  <img src={Image} className="sliderimage" />
                  <div className="sliderprofile__identity">
                      <div className="username">username</div>
                      <span className="verified">verified</span>
                  </div>
                  <div className="sliderprofile__popular">Popular</div>
                  <button className="followbutton">Follow</button>
              </div>
              <div className="sliderprofile">
                  <img src={Image} className="sliderimage" />
                  <div className="sliderprofile__identity">
                      <div className="username">username</div>
                      <span className="verified">verified</span>
                  </div>
                  <div className="sliderprofile__popular">Popular</div>
                  <button className="followbutton">Follow</button>
              </div>
          </div>
      </div>
  );
}

export default Slider;