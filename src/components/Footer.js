/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import Links from "../json/Footer.json";
import arrow from './../assets/arrow.svg';

function Footer() {
    const gallery = css`

        color: yellow;
        gap: 20px;

        .footer__item1 {
            display: flex;
            flex-wrap: wrap;
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
    `;

    return (
        <footer css={gallery}>
            <div className="footer__item1">
                {Links.FooterLinks.map(item => (
                <div key={item.FooterLinks} >
                <div><a href={item.link}>{item.text}</a></div>
                </div>
                ))}
            </div>
            <div className="footer__item2">
                <div className="langselector">
                    <div className="langselector__text">Dansk</div>
                    <img src={arrow} className="langselector__image" />
                </div>
                <div>© 2022 Instagram from Meta</div>
            </div>
        </footer>
    );
}

export default Footer;