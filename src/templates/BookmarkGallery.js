// Templates
import BookmarkPlaceholder from "./BookmarkPlaceholder";
import GalleryList from "./GalleryList";

const BookmarkGallery = () => {

    // Bookmark Array
    let bookmarkArray = [];
    if (localStorage.getItem("bookmarks")) {
        bookmarkArray = JSON.parse(localStorage.getItem("bookmarks"));
    };
    
    return (
        <div className="Bookmark-gallery">
            {localStorage.getItem("bookmarks") ? <GalleryList data={bookmarkArray} /> : <BookmarkPlaceholder />}
        </div>
    );
}
 
export default BookmarkGallery;