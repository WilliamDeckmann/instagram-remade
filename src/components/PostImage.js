import heartactivewhite from "../assets/heartactivewhite.svg";
import chatbubblewhite from "../assets/chatbubblewhite.svg";

const PostImage = (props) => {
    return (
        <div className="card">
            <img className="image Post-image" src={props.img} alt={props.alt} />
            <div className="socialbubbles" id='mouse_over'>
                <div className="socialbubblesselector socialbubbles__item1">
                    <div><img src={heartactivewhite} className="popupimg" /></div>
                    <div>20</div>
                </div>
                <div className="socialbubblesselector socialbubbles__item2">
                    <div><img src={chatbubblewhite} className="popupimg" /></div>
                    <div>20</div>
                </div>
            </div>
        </div>
    );
}

export default PostImage;