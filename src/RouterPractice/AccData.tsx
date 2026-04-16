import { useSearchParams } from "react-router-dom";


export default function AccountHistory() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get("tab") ?? "personal";


  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => {
            setSearchParams({ tab: "personal" });
          }}
        >
          Personal info
        </button>
        <button
          type="button"
          onClick={() => {
            setSearchParams({ tab: "history" });
          }}
        >
          Account history
        </button>
      </div>
      {tab === "personal" ? (
        <div id="personal-info">
          <p>names: jabo arnold landry</p>
          <p>location: Kigali Rwanda</p>
        </div>
      ) : (
        <div id="account-history">
          <p>Recent activity appears here.</p>
        </div>
      )}
    </>
  );
}
