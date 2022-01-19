const PostImage = (props) => {
    return (
        <img className="Post-image" src={props.img} alt={props.alt} />
    );
}
 
export default PostImage;