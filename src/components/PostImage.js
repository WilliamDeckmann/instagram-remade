const PostImage = (props) => {
    return (
        <img className="image Post-image" src={props.img} alt={props.alt} />
    );
}

export default PostImage;