import { useState } from "react";
import SearchBar from "./SearchBar";
import Repos from "./Repos";

function App() 
{
  const [org, setOrg] = useState("Netflix");

  return (
    <div className="content">
      <SearchBar setOrg={setOrg} />
      <Repos org={org} />
    </div>
  );
}

export default App;
