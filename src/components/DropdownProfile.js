/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { useState } from "react";
import { Link } from "react-router-dom";


const DropdownProfile = () => {
    // Style
    const styles = css`
    
        position: absolute;
        display: ${({open}) => open ? 'block' : 'none'};
        margin-top: 52px;
        background-color: white;
        box-shadow: 1px 3px 15px -1px rgba(0,0,0,0.57);
        border-radius: 10px;
        width: 230px;
        padding-bottom: 20px;
        right: 380px;
        z-index: 2;
      
    
      li{
        list-style: none;
        text-align: left;
        padding: 10px;
        cursor: pointer;
    
      }
    
      li:hover{
        background-color: rgb(221, 221, 221);
      }
    
       ul{
        padding: 0px;
      }

      .logout-btn{
          border-top: 1px solid gray;
      }
    
    `;
    return(
        <div className="profile-dropdown" css={styles}>
        <ul>
       <li><Link to="/user" className="profile-btn"><p>Profil</p></Link></li>
       <li><Link to="/" className="saved-btn"><p>Gemt</p></Link></li>
       <li><Link to="/" className="settings-btn"><p>Indstillinger</p></Link></li>
       <li><Link to="/" className="change-user-btn"><p>Skift konto</p></Link></li>
       <li><Link to="/" className="logout-btn"><p>Log af</p></Link></li>
        </ul>
      </div>
    )
}

export default DropdownProfile;