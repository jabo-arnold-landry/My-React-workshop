import { Link } from "react-router-dom";
import postings from "../postingsdata";

function Postings() {
  return (
    <>
      {postings.map((post) => {
        return (
          <Link to={`${post.id}`} key={post.id}>
            <h2>{post.name}</h2>
            <p>{post.daily}</p>
          </Link>
        );
      })}
    </>
  );
}

export default Postings;
