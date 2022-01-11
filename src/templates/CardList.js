const CardList = (props) => {

    return (
        <div className="Card-list">
            {props.data.map(card => (
                <Card index={card.index} />
            ))}
        </div>
    );
}
 
export default CardList;