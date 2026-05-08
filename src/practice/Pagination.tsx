import { useEffect, useState } from "react";
import { useGetAllUsersQuery } from "../redux/slices/myOwnSlice";
import PaginationButton from "../components/PaginationButton";

function Pagination() {
  const [currPage, setCurrPage] = useState(1);
  const { isLoading, data = {}, isError } = useGetAllUsersQuery(currPage);
  const response = [data["results"]];


  //   useEffect(() => {
  //     const controller = new AbortController();
  //     const dataFetching = async () => {
  //       try {
  //         const response = await fetch(
  //           ` http://localhost:3000/paginated?start=${currPage}&limit=4`,
  //           {
  //             signal: controller.signal,
  //           },
  //         );
  //         const results = await response.json();
  //         setData([...results["results"]["results"]]);
  //         setPages(
  //           Array.from({ length: results["numberOfPage"] }, (_, i) => i + 1),
  //         );
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     dataFetching();

  //     return () => {
  //       console.log(`aborting...`);
  //       controller.abort();
  //       console.log("aborted");
  //     };
  //   }, [currPage]);
  // console.log(currPage)
  if (isError) throw Error("failed to fetch");

  return (
    <>
      {isLoading ? (
        <p>loading....</p>
      ) : (
        <div>
          {response[0].response.map((element) => {
            return (
              <p key={element.id}>
                {element.id}: {element.names}
              </p>
            );
          })}

          <PaginationButton
            setCurrPage={setCurrPage}
            numberOfPage={data["numberOfPage"] as number}
          />
        </div>
      )}
    </>
  );
}

export default Pagination;
