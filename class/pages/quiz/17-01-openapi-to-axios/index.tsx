import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiPage() {
  const [amiiboUrl, setAmiiboUrl] = useState("");
  useEffect(() => {
    const fetchAmiibo = async () => {
      const result = await axios.get(
        "https://www.amiiboapi.com/api/amiibo/?name=mario"
      );
      console.log(result);
      setAmiiboUrl(result.data.amiibo[0].image);
    };
    fetchAmiibo();
  }, []);

  return (
    <div>
      <div>오픈API 연습!!</div>
      <img src={amiiboUrl} />
    </div>
  );
}
