import { useEffect, useState } from "react";
import { getEDPDataByID } from "../Services/edpService";

export const useEDPDataByID = (edpID) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                const fetchedData = await getEDPDataByID(edpID);

                if (isMounted) {
                    setData(fetchedData);
                    console.log("Goals Data:", fetchedData);
                }
            } catch (error) {
                console.error("Error fetching goals data:", error);
            }
        };

        if (edpID) {
            fetchData();
        }

        return () => {
            isMounted = false;
        };
    }, [edpID]);

    return data;
};
