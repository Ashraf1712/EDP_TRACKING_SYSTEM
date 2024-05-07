export class EDPServices {
    async getEDPDataByID(edpID: string) {
        try {
            const response = await fetch(`/api/edp/getEDPByID/${edpID}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch EDP data: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching EDP data:", error);
            return null;
        }
    }

    async getEDPDataByEmail(staffEmail: string) {
        try {
            const response = await fetch(`/api/edp/getEDPByEmail/${staffEmail}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch EDP data: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching EDP data:", error);
            return null;
        }
    }

    async getNonCompletedEDPDataByEmail(staffEmail: string) {
        try {
            const response = await fetch(`/api/edp/getNonCompletedEDPByEmail/${staffEmail}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch EDP data: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching EDP data:", error);
            return null;
        }
    }
}
