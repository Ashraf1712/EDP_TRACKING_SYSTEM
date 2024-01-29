import { useEffect, useState } from "react";
import { getEDPData } from "../Services/edpService";

export const useEdpData = (staffEmail) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const fetchedData = await getEDPData(staffEmail);

        if (isMounted) {
          setData(fetchedData);
          console.log("Goals Data:", fetchedData);
        }
      } catch (error) {
        console.error("Error fetching goals data:", error);
      }
    };

    if (staffEmail) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [staffEmail]);

  return data;
};
