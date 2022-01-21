// Templates
import BookmarkPlaceholder from "./BookmarkPlaceholder";
import BookmarkGalleryList from "./BookmarkGalleryList";

const BookmarkGallery = () => {

    // Bookmark Array
    let bookmarkArray = [];
    if (localStorage.getItem("bookmarks")) {
        bookmarkArray = JSON.parse(localStorage.getItem("bookmarks"));
    };
    
    return (
        <div className="Bookmark-gallery">
            {localStorage.getItem("bookmarks") ? <BookmarkGalleryList data={bookmarkArray} /> : <BookmarkPlaceholder />}
        </div>
    );
}
 
export default BookmarkGallery;