// import { useState } from "react";
import { useImmer } from "use-immer";

// let nextId = 3;
const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

function ArraysNesting() {
  const [myList, updateMyList] = useImmer(initialList);
  const [yourList, updateYourList] = useImmer(initialList);

  return (
    <>
      <div className="lists">
        <p>myList</p>
        {myList.map((list, index) => {
          const { title, seen } = list;
          return (
            <ul key={index}>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={seen}
                  onChange={(e) => {
                    updateMyList((draft) => {
                      const obj = draft.find(
                        (element) => element.id === index,
                      ) as Record<string, unknown>;
                      obj.seen = !obj.seen;
                    });
                  }}
                />
                <li>{title}</li>
              </div>
            </ul>
          );
        })}
      </div>

      <div>
        <p>you list</p>
        {yourList.map((list, index) => {
          const { title, seen } = list;
          return (
            <ul key={index}>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={seen}
                  onChange={(e) => {
                    updateYourList((draft) => {
                      const obj = draft.find(
                        (element) => element.id === index,
                      ) as Record<string, unknown>;
                      obj.seen = !obj.seen;
                    });
                  }}
                />
                <li>{title}</li>
              </div>
            </ul>
          );
        })}
      </div>
    </>
  );
}

export default ArraysNesting;
