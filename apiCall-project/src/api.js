import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID _LRWeda79bfzmBtHKfdP5-JNQUdQarBo-iiykhD1MIs",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;


