import { useEffect, useState } from "react";
import { getGoalsData } from "../Services/goalsService";

export const useEdpData = (staffEmail) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("Entering useEffect");
    const fetchData = async () => {
      console.log("Calling fetchData");
      try {
        const fetchedData = await getGoalsData(staffEmail);
        setData(fetchedData);
        console.log("Goals Data:", fetchedData);
      } catch (error) {
        console.error("Error fetching goals data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [staffEmail]);

  // Return the data from the state
  return data;
};
