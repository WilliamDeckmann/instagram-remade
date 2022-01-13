/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import gridcategory from './../assets/gridcategory.svg';
import profilebubble from './../assets/profilebubble.svg';
import WuGF06 from './../assets/WuGF06.jpg';
import bookmark from './../assets/settingsbookmark.svg';
import Footer from "../components/Footer";
import React from 'react';

const Profile = () => {

    // object-fit: cover; + størrelse på billeder

    // black/grey versioner af følgende:
    // settingsbookmark.svg
    // profilebubble.svg
    // gridcategory.svg

    const gallery = css`

        hr {
            height: 1px;
            background: black;
            width: 98%;
        }

        .categorylist {
            display: flex;
            grid-template-columns: 1fr 1fr;
            justify-content: center;
            flex-direction: row;
            text-align: center;
            gap: 20px;
            font-size: 12px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            line-height: 16px;
            font-weight: 600;
        }

        .category {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            justify-items: center;
            gap: 10px;
        }

        .categorylist__item1, .categorylist__item2, .categorylist__item3 {
            display: flex;
            align-items: center;
        }

    `;

    return (
        <div css={gallery}>
            <hr />
            <div className="categorylist">
                <div className="categorylist__item1">
                    <img src={gridcategory} />
                    <span>POSTS</span>
                </div>
                <div className="categorylist__item2">
                    <img src={profilebubble} />
                    <span>TAGGED</span>
                </div>
                <div className="categorylist__item3">
                    <img src={bookmark} />
                    <span>TAGGED</span>
                </div>
            </div>
            <div className="category">
                <div><img src={WuGF06} /></div>
                <div><img src={WuGF06} /></div>
                <div><img src={WuGF06} /></div>
                <div><img src={WuGF06} /></div>
                <div><img src={WuGF06} /></div>
                <div><img src={WuGF06} /></div>
                <div><img src={WuGF06} /></div>
                <div><img src={WuGF06} /></div>
                <div><img src={WuGF06} /></div>
                <div><img src={WuGF06} /></div>
                <div><img src={WuGF06} /></div>
                <div><img src={WuGF06} /></div>
                <div><img src={WuGF06} /></div>
                <div><img src={WuGF06} /></div>
                <div><img src={WuGF06} /></div>
                <div><img src={WuGF06} /></div>
                <div><img src={WuGF06} /></div>
                <div><img src={WuGF06} /></div>
            </div>

            <React.StrictMode>
                <Footer />
            </React.StrictMode>,
        </div>
    );
}

export default Profile;