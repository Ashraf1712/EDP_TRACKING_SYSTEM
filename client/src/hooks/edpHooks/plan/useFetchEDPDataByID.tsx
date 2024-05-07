import { useState, useEffect } from 'react';
import { EDPServices } from '@/services/edp.service';
import { EDPDetails } from '@/types/edp/edp.types';
const useFetchEDPDataByID = (edpID: string) => {
    const [data, setData] = useState<EDPDetails | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const edpServices = new EDPServices();
            const res = await edpServices.getEDPDataByID(edpID);
            setData(res);
        }

        fetchData();
    }, [edpID]);

    return data;
};

export default useFetchEDPDataByID;
