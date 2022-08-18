import { useEffect, useState } from "react";

const useVideo = (id) => {
  console.log(id);
  const [key, setKey] = useState(null);
  setKey(id);

  //   useEffect(() => {
  //     const getData = async () => {
  //       const response =
  //         await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=ef914df2994fae559350d18795448351&language=en-US
  //             `);
  //       console.log(response.data.key);
  //       setKey(response.data.key);
  //     };
  //   });
};

export default useVideo;
