import { useParams } from "react-router-dom";
import postings from "../postingsdata";
function Post() {
  const { id } = useParams();
  const data = postings[id];
  if (data.description == undefined || data.description == null) {
    throw Error("wrong id");
  }
  return (
    <>
      <h4>{data.description}</h4>
    </>
  );
}

export default Post;
