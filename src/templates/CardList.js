/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import Card from "./Card";

const CardList = (props) => {

    const styles = css`
        display: flex;
        flex-direction: column;
        gap: 60px;
    `;

    return (
        <div className="Card-list" css={styles}>
            {props.data.map(card => (
                <Card {...card} key={card.id} />
            ))}
        </div>
    );
}
 
export default CardList;