import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://stcinemas.id.vn/api/film");
        const data = await response.json();

        // Log data to the console
        console.log("Film Data:", data);
      } catch (error) {
        console.error("Error fetching film data:", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures this effect runs only once on component mount

  return <>Hello Baby</>;
}

export default App;
