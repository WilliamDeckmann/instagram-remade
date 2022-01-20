// Hooks
import useFetch from "../hooks/useFetch";

// Templates
import GalleryList from "./GalleryList";

// Components
import ThinText from "../components/ThinText";

const ProfileGallery = () => {

    // API data
    const {
        data,
        isPending,
        error
    } = useFetch("https://jsonplaceholder.typicode.com/users");
    
    return (
        <div className="Gallery-container">
            {error && <ThinText text={error} />}
            {isPending && <ThinText text="Loading" />}
            {data && <GalleryList data={data} />}
        </div>
    );
}
 
export default ProfileGallery;