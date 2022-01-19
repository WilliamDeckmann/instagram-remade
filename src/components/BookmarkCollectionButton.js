// Components
import ButtonText from "./ButtonText";

const BookmarkCollectionButton = () => {
    return (
        <div className="Bookmark-collection-button">
            <button className="Bookmark-collection__button">
                <ButtonText text="+ Ny samling" />
            </button>
        </div>
    );
}
 
export default BookmarkCollectionButton;