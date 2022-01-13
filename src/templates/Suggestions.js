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
        max-width: 50%;
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

    `;
    return (

      <div className="container" css={styles} style={{display: "flex", justifyContent:"space-around", width:'51.5vw', marginLeft: '20%'}}>

        <div className="suggestions__profile_main">
          <div className="suggestions__Mainprofile_content">
            <div className="suggestions__Mainprofile_img">
                <img src="https://via.placeholder.com/60" alt="Pfp" />
            </div>
            <div className="suggestions__Mainprofile_names">
               <span><a href="#"><div style={{maxWidth: '20%', overflowWrap:"break-word"}}>-username-</div></a></span> 
              <div className="suggestions__Mainprofile_fullname">-usersfullname-</div>
            </div>
            <div className="suggestions__Mainprofile_switch">
              <a href="#"><div>Switch</div></a>
            </div>
              </div> 

              <div className="suggestions__recommended_main">
              <div className="suggestions__recommended_text">Recommended for you</div>
              <a href="#"><div>See all</div></a>
              </div>

              <div className="suggestions__profiles_content">
                <div className="suggestions__profiles_img">
              <img src="https://via.placeholder.com/35" alt="Pfp" />
                </div>
                <div className="suggestions__profiles_namefollowed">
                <span><a href="#"><div style={{maxWidth: '20%', overflowWrap:"break-word"}}>Profile_Names</div></a></span>
                <div className="suggestions__profiles_followedBy">Followed by</div>
                </div>
                <div className="suggestions__profile_follow">
              <a href="#"><div>Follow</div></a>
            </div>
              </div>  

              <div className="suggestions__profiles_content">
                <div className="suggestions__profiles_img">
              <img src="https://via.placeholder.com/35" alt="Pfp" />
                </div>
                <div className="suggestions__profiles_namefollowed">
                <span><a href="#"><div style={{maxWidth: '20%', overflowWrap:"break-word"}}>Profile_Names</div></a></span>
                <div className="suggestions__profiles_followedBy">Followed by</div>
                </div>
                <div className="suggestions__profile_follow">
              <a href="#"><div>Follow</div></a>
            </div>
              </div>
        </div>

      </div>

    );
}

export default suggestionProfile;