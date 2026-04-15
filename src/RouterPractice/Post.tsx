import { useParams, useOutletContext } from "react-router-dom";
import postings from "../postingsdata";
type OutletContext = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};
function Post() {
  const { id } = useParams();
  const data = postings[id];
  const {counter}= useOutletContext<OutletContext>();
  if (data.description == undefined || data.description == null) {
    throw Error("wrong id");
  }
  return (
    <>
      <h4>{data.description}</h4>
      <button>{counter}</button>
    </>
  );
}

export default Post;
