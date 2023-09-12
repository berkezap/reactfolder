import "./App.css";
import SearchHeader from "./searchHeader";
import axios from "axios";

function App() {
  const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Cliend-ID _LRWeda79bfzmBtHKfdP5-JNQUdQarBo-iiykhD1MIs",
      },
      params: {
        query: term,
      },
    });
    debugger;
    return response.data.results;
  };

  const handleSubmit = (term) => {
    debugger;
    console.log(term);
    searchImages(term);
  };

  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
    </div>
  );
}

export default App;
