// Hooks
import useFetch from "../hooks/useFetch";

// Templates
import GalleryList from "./GalleryList";

// Components
import ThinText from "../components/ThinText";

const ProfileGallery = () => {

    // Api data
    const {
        data: call,
        isPending,
        error,
    } = useFetch("https://graph.instagram.com/17841445293806227/media?access_token=IGQVJVTzZASN19TcVNVWXUtN1duT0FaYmlCcUctUnhNSXBSOEZAXZAU83TzIxQTVxSHVYa2FTSmJFbUNrTWpIcElhN0ZAGRGFRTldOamR5U2ZAIRV9OT2NYd21CR0t3dFNvWnAxOS1RaWxn&fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username");
    
    return (
        <div className="Gallery-container">
            {error && <ThinText text={error} />}
            {isPending && <ThinText text="Loading" />}
            {call && <GalleryList data={call} />}
        </div>
    );
}
 
export default ProfileGallery;