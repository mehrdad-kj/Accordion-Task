import ListHeader from "./components/ListHeader";
import ListItems from "./components/ListItems";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState<object[]>([]);

  const fetchJson = () => {
    fetch("../public/data.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchJson();
  }, []);

  return (
    <div className="p-5">
      <ListHeader />
      <ListItems data={data} />
    </div>
  );
}

export default App;
