import Card from "./Card";

const CardList = (props) => {

    return (
        <div className="Card-list">
            {props.data.map(card => (
                <Card {...card} key={card.id} />
            ))}
        </div>
    );
}
 
export default CardList;