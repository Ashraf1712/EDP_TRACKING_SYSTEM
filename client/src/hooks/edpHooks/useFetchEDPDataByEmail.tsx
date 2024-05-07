import { useState, useEffect } from 'react';
import { EDPServices } from '@/services/edp.service';
import { EDP } from '@/types/edp/edp.types';
const useFetchEDPDataByEmail = (email: string) => {
    const [data, setData] = useState<EDP | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const edpServices = new EDPServices();
            const res = await edpServices.getEDPDataByEmail(email);
            setData(res);
        }

        fetchData();
    }, [email]);

    return data;
};

export default useFetchEDPDataByEmail;
