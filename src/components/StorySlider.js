/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import img from "../assets/WuGF06.jpg";

const StorySlider = (props) => {

    // Style
    const styles = css`
    
        display: grid;
        grid-template-columns: 1.6fr;
        gap: 0px 0px;
        grid-template-areas:
          "story";
          width: 612px;
          margin-left: 165px;
      

        .story {
        grid-area: story; 
        border: 1px solid black;
        padding: 22px;
        border: 1px solid #dbdbdb;
        background-color: white;
        border-radius: 3px;
        overflow: hidden;
        width: 100%;
        position: relative;
        z-index: 1;
        margin-top: 30px;
    }
  
      .border-gradient p{
        position: absolute;
        bottom: -18px;
        font-size: 12px;
        left: 50%;
        transform: translateX(-50%);
      }
  
      .story-wrapper{
        display: flex;
        gap: 15px;
        transition: 1s;
      }
      .next-btn{
        color: white;
        position: absolute;
        z-index: 2;
        top: 39px;
        right: 5px;
        font-size: 1.5rem;
        cursor: pointer;
      }
  
      .next-btn i{
        box-shadow: 0px 5px 16px -3px #000000;
        border-radius: 50%;
      }
  
      .back-btn{
        color: white;
        position: absolute;
        z-index: 2;
        top: 39px;
        left: 5px;
        font-size: 1.5rem;
        cursor: pointer;
        display: none;
      }
  
      .back-btn i{
        box-shadow: 0px 5px 16px -3px #000000;
        border-radius: 50%;
      }
  
      .border-gradient{
        position: relative;
        background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
        min-width: 66.14px;
        height: 66.14px;
        border-radius: 50%;
        position: relative;
        z-index: 1;
        left: 0;
      }
  
      .border-gradient img{
        position: absolute;
        top: 2px;
        left: 2px;
        width: 62.14px;
        height: 62.14px;
        border-radius: 50%;
        border: 2px solid white;
      }
  
      .border-gradient:hover{
        cursor: pointer;
      }
       
    
    `;
    return(
        <div className="grid-container" css={styles}>
        <div className="story">
      <div className="story-wrapper">

        <figure className="border-gradient">
        <img className="User-icon" src={img}/>
        </figure>
        <figure className="border-gradient">
        <img className="User-icon" src={img}/>
        </figure>
        <figure className="border-gradient">
        <img className="User-icon" src={img}/>
        </figure>
        <figure className="border-gradient">
        <img className="User-icon" src={img}/>
        </figure>
        <figure className="border-gradient">
        <img className="User-icon" src={img}/>
        </figure>
        <figure className="border-gradient">
        <img className="User-icon" src={img}/>
        </figure>
        <figure className="border-gradient">
        <img className="User-icon" src={img}/>
        </figure>
        <figure className="border-gradient">
        <img className="User-icon" src={img}/>
        </figure>
      </div>
      <a href="#" className="next-btn"><i class="fas fa-arrow-circle-right"></i></a>
        <a href="#" className="back-btn"><i class="fas fa-arrow-circle-left"></i></a>
      </div>  
      </div>  
    )
}

export default StorySlider;