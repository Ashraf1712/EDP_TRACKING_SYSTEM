import { useState, useEffect } from 'react';
import { EDPServices } from '@/services/edp.service';
import { EDP } from '@/types/edp/edp.types';
const useFetchNonCompletedEDPByEmail = (email: string) => {
    const [data, setData] = useState<EDP | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const edpServices = new EDPServices();
            const res = await edpServices.getNonCompletedEDPDataByEmail(email);
            setData(res);
        }

        fetchData();
    }, [email]);

    return data;
};

export default useFetchNonCompletedEDPByEmail;
