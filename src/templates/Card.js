/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

const Card = (props) => {
    const {id} = props;
    console.log(props);

    const styles = css`
        display: flex;
        flex-direction: column;

        .Card__header {
            padding: 20px;
        }

        .Card__figure {
            margin: 0;
        }
    `;

    return (
        <div className="Card" css={styles}>
            <Link to="/">
                <header className="Card__header">
                    <figure className="Card__figure">
                        "user-img"
                        "user-name"
                    </figure>
                    "settings"
                </header>
                <main className="Card__main">
                    <img src="" alt="image" className="Card__img"/>
                    <section className="Card__section">
                        <header className="Card__header">
                            <section className="Card__left-section">
                                "heart"
                                "comments"
                                "share"
                            </section>
                            <section className="Card__right-section">
                                "bookmark"
                            </section>
                        </header>
                        <article className="Card__article">
                            <p className="Card__paragraph">
                                "like-count"
                                "semi-bold-text (synes godt om)"
                            </p>
                            <p className="Card__paragraph">
                                "semi-bold-text ("user-name")"
                                "text-body ("post-data")"
                            </p>
                            "post-date"
                        </article>
                        <footer className="Card__footer" >
                            "comment-input"
                        </footer>
                    </section>
                </main>
            </Link>
        </div>
    );
}
 
export default Card;