// Hooks
import useFetch from "../hooks/useFetch";

// Components
import GalleryList from "./GalleryList";

const GalleryContainer = () => {

    // Style
    const {
        data,
        isPending,
        error
    } = useFetch("https://jsonplaceholder.typicode.com/users");
    
    return (
        <div className="Gallery-container">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <GalleryList data={data} />}
        </div>
    );
}
 
export default GalleryContainer;