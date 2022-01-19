import { Link } from "react-router-dom";

const Linkstuff = () => {
  return <div>
      <Link to="/">home</Link>
      <Link to={"/posts"}>POSTS</Link>
      <Link to={"/saved"}>SAVED</Link>
      <Link to={"/tagged"}>TAGGED</Link>
  </div>;
}

export default Linkstuff;