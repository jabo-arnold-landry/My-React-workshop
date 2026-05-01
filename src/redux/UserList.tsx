import { useGetUsersQuery, useSetUsersMutation } from "./slices/apiSlice";

function UserList() {
  const { data = [], isLoading, isError, isFetching } = useGetUsersQuery();
  const [setusers, { isLoading: isSending }] = useSetUsersMutation();
  console.log({ isSending });

  if (isError) throw Error("failed");

  return (
    <>
      {isLoading && <p>loading....</p>}
      {isFetching && <p>refreshing....</p>}
      {data.map((post) => {
        const { id, name } = post;
        return (
          <div key={id}>
            <p>{name}</p>
          </div>
        );
      })}
      <button onClick={() => setusers({ names: "jabo" })} disabled={isSending}>
        create user
      </button>
    </>
  );
}

export default UserList;
