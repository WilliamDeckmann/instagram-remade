/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

function suggestionProfile() {
  const styles = css`

  // User main profile
      .suggestions__Mainprofile_content{
        display:flex;
        justify-content:center;
      }

      .suggestions__Mainprofile_names{
        display:flex;
        align-items:start;
        flex-direction: column;
        position:relative;
        right:40px;
        font-size:14px;
        font-weight:600;
        max-width: 100%;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        .suggestions__Mainprofile_fullname{
          color:#8e8e8e;
          font-weight:400;
          overflow-wrap:break-word;
          overflow:hidden;
          text-overflow:ellipsis;
          max-width:100px;
        }
        span{
          max-width: 100%;
          overflow: hidden;
          white-space:nowrap;
          a{
            overflow-x:hidden;
            text-overflow:ellipsis;
            display: inline-block;
            width: 100%;
          }
        }
      }

      .suggestions__Mainprofile_switch{
        position: relative;
        left:55px;
        top:10px;
        font-size: 12px;
        font-weight:600;
        a{
          text-decoration:none; 
          color:#0095f6;
         }
      }

      .suggestions__Mainprofile_img{
        position: relative;
        right:60px;
        top:-10px;
        img{
        border-radius:50%;
        }
      }

      a{
       text-decoration:none; 
       color:#262626;
      }

// Recommended text

      .suggestions__recommended_main{
        display:flex;
        justify-content:center;
        flex-direction:row;
        align-items:center;
        font-weight:600;
        margin-bottom:15px;
        margin-top:5px;
        a{
          font-size:12px;
          position:relative;
          left:65px;
        }
      }

      .suggestions__recommended_text{
        position:relative;
        right:60px;
        color:#8e8e8e;
        font-size:14px;
      }

// Recommended profiles
.container{
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
        max-width: 47%;
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
        left:125px;
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

      // Footer

      color: yellow;
        gap: 20px;
        .footer__item1 {
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 15px;
            color: #8e8e8e;
            margin-bottom: 20px;
        }
        .footer__item1 {
            div {
                a {
                    color: #8e8e8e;
                    text-decoration: none;
                }
            }
        }
        .footer__item2 {
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 15px;
            color: #8e8e8e;
        }
        .footer__item1, .footer__item2 {
            font-size: 12px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            line-height: 16px;
        }
        .langselector {
            display: flex;
            align-items: center;
        }
        .langselector__image {
            transform: rotate(180deg);
            width: 12px;
            height: 12px;
        }

        // Footer

    `;
    return (
      
      // Main profile
      <div className="container" css={styles} style={{display: "flex", justifyContent:"center", width:'100%'}}>
        <div className="suggestions__profile_main">
          <div className="suggestions__Mainprofile_content">
            <div className="suggestions__Mainprofile_img">
                <img src="https://via.placeholder.com/60" alt="Pfp" />
            </div>
            <div className="suggestions__Mainprofile_names">
               <span><a href="#"><div style={{maxWidth: '110px', overflowWrap:"break-word", overflow:"hidden", textOverflow:"ellipsis"}}>-username-</div></a></span> 
              <div className="suggestions__Mainprofile_fullname">-usersfullname-</div>
            </div>
            <div className="suggestions__Mainprofile_switch">
              <a href="#"><div>Switch</div></a>
            </div>
              </div> 
        {/* Main profile */}
            
            {/* Recommended text */}
              <div className="suggestions__recommended_main">
              <div className="suggestions__recommended_text">Recommended for you</div>
              <a href="#"><div>See all</div></a>
              </div>
            {/* Recommended text */}

            {/* Profiles */}
              <div className="suggestions__profiles_content">
                <div className="suggestions__profiles_img">
              <img src="https://via.placeholder.com/35" alt="Pfp" />
                </div>
                <div className="suggestions__profiles_namefollowed">
                <span><a href="#"><div style={{maxWidth: '130px', overflowWrap:"break-word", overflow:"hidden", textOverflow:"ellipsis"}}>Profile_Name</div></a></span>
                <div className="suggestions__profiles_followedBy">Followed by</div>
                </div>
                <div className="suggestions__profile_follow">
              <a href="#"><div>Follow</div></a>
            </div>
              </div>    
          {/* Profiles */}
          <div>
        <footer>
            <div className="footer__item1">
                <div><a href="#">Meta</a></div>
                <div><a href="#">About</a></div>
                <div><a href="#">Blog</a></div>
                <div><a href="#">Jobs</a></div>
                <div><a href="#">Help</a></div>
                <div><a href="#">API</a></div>
                <div><a href="#">Privacy</a></div>
                <div><a href="#">Terms</a></div>
                <div><a href="#">Top Accounts</a></div>
                <div><a href="#">Hashtags</a></div>
                <div><a href="#">Locations</a></div>
                <div><a href="#">Instagram Lite</a></div>
            </div>
            <div className="footer__item2">
                <div className="langselector">
                    <div className="langselector__text">English</div>
                    <img src="" className="langselector__image" />
                </div>
                <div>© 2022 Instagram from Meta</div>
            </div>
        </footer>
          </div>
        </div>
      </div>

    );
}

export default suggestionProfile;