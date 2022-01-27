/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import Data from "../json/Suggestions.json";
import { Link } from "react-router-dom";

function suggestionProfileComponent() {
  const styles = css`


// Recommended profiles
.container{
  min-height: 100%;
}

.suggestions__profile_main{
        max-width: 100%;
        margin-top:40px;
        margin-left:10px;
        position:fixed;
}

.suggestions__profiles_content{
        display:flex;
        justify-content:center;
        position:relative;
        right:50px;
        padding-bottom:8px;
        padding-top:8px;
      }

      .suggestions__profiles_namefollowed{
        display:flex;
        align-items:start;
        flex-direction: column;
        font-size:14px;
        font-weight:600;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        max-width: 70%;
        span{
          max-width: 100%;
          overflow: hidden;
          white-space:nowrap;
        }
        .suggestions__profiles_followedBy{
          color:#8e8e8e;
          font-weight:400;
          overflow-wrap:break-word;
          overflow:hidden;
          text-overflow:ellipsis;
          max-width:100px;
        }
      }

      .suggestions__profile_follow{
        position: relative;
        left:115px;
        top:10px;
        font-size: 12px;
        font-weight:600;
        a{
          text-decoration:none;
          color:#0095f6;
         }
      }

      .suggestions__profiles_img{
        position: relative;
        right:20px;
        img{
        border-radius:50%;
      }
    `;
  return (
      <div>
          {Data.users.map(item => (
            <div key={item.id} >
              <div className="suggestions__profiles_content">
                <div className="suggestions__profiles_img">
                  <img src="https://via.placeholder.com/35" alt="Pfp" />
                </div>
                <div className="suggestions__profiles_namefollowed">
                  <span><a href="#"><div style={{ maxWidth: '130px', overflowWrap: "break-word", overflow: "hidden", textOverflow: "ellipsis" }}>{item.userName}</div></a></span>
                  <div className="suggestions__profiles_followedBy">Følges af {item.følgesAf}</div>
                </div>
                <div className="suggestions__profile_follow">
                  <a href="#"><div>Følg</div></a>
                </div>
              </div>
            </div>
          ))}
      </div>
  );
}

export default suggestionProfileComponent;