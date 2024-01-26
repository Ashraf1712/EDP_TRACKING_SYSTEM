import { useEffect, useState } from "react";
import { getGoalsData } from "../Services/goalsService";
import { useAuthContext } from "../hooks/useAuthContext";

export const useEdpData = () => {
  const { user } = useAuthContext();
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("Entering useEffect");
    const fetchData = async () => {
      console.log("Calling fetchData");
      try {
        const fetchedData = await getGoalsData(user.Staff_Email);
        setData(fetchedData);
        console.log("Goals Data:", fetchedData);
      } catch (error) {
        console.error("Error fetching goals data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [user.Staff_Email]);

  // Return the data from the state
  return data;
};
