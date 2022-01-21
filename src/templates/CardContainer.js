// Hooks
import useFetch from "../hooks/useFetch";

// Components
import CardList from "./CardList";

const CardContainer = () => {

    // Style
    const {
        data,
        isPending,
        error
    } = useFetch("https://jsonplaceholder.typicode.com/users");
    
    return (
        <div className="Card-container">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <CardList data={data} />}
        </div>
    );
}

const ApiFetchTest = () => {
    //...
};
 
export default CardContainer;