/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import img from "../assets/WuGF06.jpg";


const HoverDropdown = () => {
    // Style
    const styles = css`
    width: 310px;
    height: 320px;
    background-color: white;
    border-radius: 10px;
    border: 1px solid #dbdbdb;
    box-shadow: 1px 3px 15px -1px rgba(0,0,0,0.57);

    .profile_desc{
        padding-bottom: 100px;
    }

    .follow-section-respo{
        display: flex;
        border-top: 1px solid #dbdbdb;
        border-bottom: 1px solid #dbdbdb;
        width: 100%;
        margin: 0 auto;
        padding-top: 10px;
        justify-content: space-between;
        padding: 10px 60px 10px 60px;
      }

      .follow-section-respo-box p{
        font-size: 0.9rem;
        text-align: center;
      }

      .follow-section-respo-box p:nth-child(1){
        font-weight: 500;
      }

      .follow-section-respo-box p:nth-child(2){
        color: #8e8e8e;
      }

      .grid-container-post {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0px 0px;
          
      }
  
      .img-wrapper img{
        object-fit: cover;
        position: relative; 
        width: 100%;
        height: 100%;
      }
  
      .img-wrapper{
        position: relative;
        background-color: black;
      }

      .button_wrapper{
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 0px 5px 0px 5px;
      }

      .change-profile{
        display: inline-block;
        color: #262626;
        text-decoration: none;
        font-weight: 500;
        border: 1px solid #dbdbdb;
        border-radius: 3px;
        font-size: 0.9rem;
        line-height: 25px;
        padding: 0px 50px;
        margin-top: 12px;
      }
  
    `;
    return(
        <div className="hover_main" css={styles}>
            <div className="profile_desc">
            </div>
            <div className="follow-section-respo">
            <div className="follow-section-respo-box">
                <p>9</p>
                <p>opslag</p>
            </div>
            <div className="follow-section-respo-box">
                <p>363</p>
                <p>følgere</p>
            </div>
            <div className="follow-section-respo-box">
                <p>582</p>
                <p>fulgte</p>
            </div>
        </div>
        <div className="grid-container-post">
                <div className="img-wrapper">
                    <img src={img} alt=""/>
                </div>
                <div className="img-wrapper">
                    <img src={img} alt=""/>
                </div>
                <div className="img-wrapper">
                    <img src={img} alt=""/>
                </div>
            </div>
            <div className="button_wrapper">
            <a href="#" className="change-profile">Besked</a>
            <a href="#" className="change-profile">Følger</a>
            </div>
        
        </div>
    )
}

export default HoverDropdown;