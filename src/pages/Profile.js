/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import gridcategory from './../assets/gridcategory.svg';
import profilebubble from './../assets/profilebubble.svg';
import WuGF06 from './../assets/WuGF06.jpg';
import arrow from './../assets/arrow.svg';
import Footer from "../components/Footer";
import React from 'react';
const Profile = () => {

    // mangler
    // teste med rigtige billeder
      // object-fit: cover;
    // størrelse på billeder

    const gallery = css`

        .categorylist {
            display: flex;
            grid-template-columns: 1fr 1fr;
            justify-content: center;
            flex-direction: row;
            text-align: center;
            gap: 20px;
        }

        .category {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            justify-items: center;
            gap: 10px;
        }

        .category__item {
            background: yellow;
        }

        footer {
            color: yellow;
            padding: 60px;
            gap: 20px;
        }

        hr {
            height: 1px;
            background: red;
            width: 98%;
        }

        .footer__item1 {
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 15px;
            color: #8e8e8e;
            font-size: 12px;
            margin-bottom: 20px;
        }

        .footer__item1 div a {
            color: #8e8e8e;
        }

        .footer__item2 {
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 15px;
            color: #8e8e8e;
            font-size: 12px;
        }

        .langselector {
            transform: rotate(180deg);
            width: 12px;
            height: 12px;
        }
    `;

    return (
        <div css={gallery}>
            <hr />
            <div className="categorylist">
                <div className="categorylist__item"><img src={gridcategory} className="App-logo" /> POSTS</div>
                <div className="categorylist__item"><img src={profilebubble} className="App-logo" /> TAGGED</div>
            </div>
            <div className="category">
                <div className="category__item"><img src={WuGF06} /></div>
                <div className="category__item"><img src={WuGF06} /></div>
                <div className="category__item"><img src={WuGF06} /></div>
                <div className="category__item"><img src={WuGF06} /></div>
                <div className="category__item"><img src={WuGF06} /></div>
                <div className="category__item"><img src={WuGF06} /></div>
                <div className="category__item"><img src={WuGF06} /></div>
                <div className="category__item"><img src={WuGF06} /></div>
                <div className="category__item"><img src={WuGF06} /></div>
                <div className="category__item"><img src={WuGF06} /></div>
                <div className="category__item"><img src={WuGF06} /></div>
                <div className="category__item"><img src={WuGF06} /></div>
                <div className="category__item"><img src={WuGF06} /></div>
                <div className="category__item"><img src={WuGF06} /></div>
                <div className="category__item"><img src={WuGF06} /></div>
                <div className="category__item"><img src={WuGF06} /></div>
                <div className="category__item"><img src={WuGF06} /></div>
                <div className="category__item"><img src={WuGF06} /></div>
            </div>
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
                    <div>English <img src={arrow} className="langselector" /></div>
                    <div>© 2022 Instagram from Meta</div>
                </div>
            </footer>

            <React.StrictMode>
                <Footer />
            </React.StrictMode>,
        </div>
    );
}

export default Profile;