/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import gridcategory from './../assets/gridcategory.svg';
import profilebubble from './../assets/profilebubble.svg';
import WuGF06 from './../assets/WuGF06.jpg';
import Footer from "../components/Footer";
import React from 'react';

const Profile = () => {

    // mangler
    // teste med rigtige billeder
    // object-fit: cover;
    // størrelse på billeder

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
        }

        .category {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            justify-items: center;
            gap: 10px;
        }

    `;

    return (
        <div css={gallery}>
            <hr />
            <div className="categorylist">
                <div><img src={gridcategory} /> POSTS</div>
                <div><img src={profilebubble} /> TAGGED</div>
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