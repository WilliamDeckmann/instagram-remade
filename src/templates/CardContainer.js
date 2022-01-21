// Hooks
import useFetch from "../hooks/useFetch";

// Components
import CardList from "./CardList";

const CardContainer = () => {

    // Api data
    /* const {
        data,
        isPending,
        error,
    } = useFetch("https://jsonplaceholder.typicode.com/users");
    console.log(data && data); */
    const {
        data: call,
        isPending,
        error,
    } = useFetch("https://graph.instagram.com/17841445293806227/media?access_token=IGQVJVTzZASN19TcVNVWXUtN1duT0FaYmlCcUctUnhNSXBSOEZAXZAU83TzIxQTVxSHVYa2FTSmJFbUNrTWpIcElhN0ZAGRGFRTldOamR5U2ZAIRV9OT2NYd21CR0t3dFNvWnAxOS1RaWxn&fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username")

    return (
        <div className="Card-container">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {call && <CardList data={call}  />}
        </div>
    );
} 
 
export default CardContainer;