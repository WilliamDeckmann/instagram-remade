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



        hr {
            height: 1px;
            background: black;
            width: 98%;
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


            <React.StrictMode>
                <Footer />
            </React.StrictMode>,
        </div>
    );
}

export default Profile;