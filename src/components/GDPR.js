/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import React, { useState } from 'react';

// assets
import options from './../assets/options.svg';

//create your forceUpdate hook
function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

const GDPR = () => {

    const consentstyle = css`
        .consent {
            background: rgb(100 100 100/0.5);
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            z-index: 11111;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            place-items: center;
            diplay: grid;
            place-items: center;
            text-align: center;
        }

        .consent__overlay {
            grid-column:1;
            grid-row:1;
            display: flex;
            flex-direction: column;
            gap: 15px;
            padding: 20px;
            width: 530px;
            height: 270px;
            position: fixed;
            z-index: 11111;
            border-radius: 12px;
            background: white;
            font-weight: 400;
            line-height: 18px;
            font-size: 14px;
        }

        .header {
            display: flex;
            place-items: center;
            gap: 20px;
        }

        h1 {
            font-weight: 300;
            font-size: 22px;
            line-height: 26px;
            margin: -4px 0 -5px;
        }

        hr {
            border-top: 1px solid lightgrey;
            height: 1px;
        }

        .consent__overlay--policy {
            font-weight: 700;
        }

        .consent__overlay--button {
            color: #0095f6;
            font-weight: 700;
            line-height: 1.5
            padding: 4px 8px;
            font-size: 14px;
        }
    `;

    let consentcookie = [];
    if (localStorage.getItem("gdpr")) {
        consentcookie = JSON.parse(localStorage.getItem("gdpr"));
    };

    const forceUpdate = useForceUpdate();

    const handle1 = () => {
        localStorage.setItem('gdpr', 1);
        forceUpdate();
    };

    return (
        <div css={consentstyle}>
            {/* <GDPR /> */}
            {localStorage.getItem("gdpr") ? "" :
                <div className="consent">
                    <div className="consent__overlay">
                        <div className="header">
                            <h1>Vil du acceptere cookies fra Instagram på denne browser?</h1>
                            <div><img src={options} /></div>
                        </div>
                        <span>


                        Vi bruger cookies som en hjælp til at tilpasse indholdet, levere relevante annoncer samt give en mere sikker oplevelse. Læs mere, om brug af cookies og kontroller i vores <a href="#" className="consent__overlay--policy">politik om cookies.</a> Du kan gennemse dine kontroller når som helst.</span>
                        <hr />
                        <button onClick={handle1} className="consent__overlay--button">Acceptér alle</button>
                        <hr />
                        <span>Administrer dataindstillinger</span>
                    </div>
                </div>
            }
        </div>
    );
};

export default GDPR;