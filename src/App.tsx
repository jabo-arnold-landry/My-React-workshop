import { useImmer } from "use-immer";
import ArraysNesting from "./practice/ArraysNesting";
import Todos from "./practice/ReducerPractice";

function App() {
  const [position, updatePosition] = useImmer({
    name: "",
    age: 0,
    location: {
      street: "kk454st",
      city: "kigali",
      country: "Rwanda",
    },
  });
  return (
    <>
      <form action="">
        <input
          type="text"
          value={position.name}
          // onChange={(e) => setPosition({ ...position, name: e.target.value })}
        />
        <input
          type="text"
          value={+position.age}
          // onChange={(e) => setPosition({ ...position, age: +e.target.value })}
        />
      </form>
      <div className="details">
        <p>names: {position.name}</p>
        <p>names: {position.age}</p>
        <h2>location</h2>
        <div>
          <p>street: {position.location.street}</p>
          <p>city: {position.location.city}</p>
          <p>country: {position.location.country}</p>
        </div>
      </div>
      <button
        onClick={() => {
          updatePosition((see) => {
            see.location.city = "Rusizi";
          });
        }}
      >
        change address info
      </button>
    </>
  );
}

export default App;
