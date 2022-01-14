/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import arrow from './../assets/arrow.svg';
const Slider = () => {

  const slider = css`
      border: 1px solid grey;
      border-radius: 5px;
      background: #ffffff;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;

      .arrowleft,.arrowright {
          width: 30px;
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
          opacity: 0.5;
          border-radius: 50%;
      }

      .followbutton {
          background: #0095f6;
          color: #ffffff;
      }

      .slider__item1 {
          grid-column: 1;
      }
      .slider__item2 {
          grid-column: 3;
      }
      .slider__item3 {
          grid-column: 1;
          grid-row: 2;
          place-self: start;
      }

      .slider__item4 {
          grid-column: 3;
          grid-row: 2;
          place-self: end;
      }

      .slider__item5 {
          grid-column: 1/span 3;
          grid-row: 2;
      }

      .sliderprofile {
          border: 1px solid grey;
          border-radius: 5px;
          width: 50px;
          height: 50px;
      }
  `;

  return (
      <div css={slider}>
          <div className="slider__item1">Suggestions For You</div>
          <div className="slider__item2">See All</div>
          <div className="buttonbackground slider__item3"><img src={arrow} className="arrowleft" /></div>
          <div className="buttonbackground slider__item4"><img src={arrow} className="arrowright" /></div>
          <div className="slider__item5">
            <div className="sliderprofile">
              <button className="followbutton">Follow</button>
            </div>
            <div className="sliderprofile">
              <button className="followbutton">Follow</button>
            </div>
            <div className="sliderprofile">
              <button className="followbutton">Follow</button>
            </div>
            <div className="sliderprofile">
              <button className="followbutton">Follow</button>
            </div>
            <div className="sliderprofile">
              <button className="followbutton">Follow</button>
            </div>
            <div className="sliderprofile">
              <button className="followbutton">Follow</button>
            </div>
            <div className="sliderprofile">
              <button className="followbutton">Follow</button>
            </div>
            <div className="sliderprofile">
              <button className="followbutton">Follow</button>
            </div>
            <div className="sliderprofile">
              <button className="followbutton">Follow</button>
            </div>
            <div className="sliderprofile">
              <button className="followbutton">Follow</button>
            </div>
          </div>
      </div>
  );
}

export default Slider;