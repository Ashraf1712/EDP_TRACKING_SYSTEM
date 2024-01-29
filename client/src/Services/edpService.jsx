const createEDPData = async (staffEmail) => {
    try {
        const response = await fetch(`/api/edp/createEDP`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                staffEmail: staffEmail
            }),
        });

        const json = await response.json();

        if (!response.ok) {
            console.log(json.error);
        }
        if (response.ok) {
            console.log("LESGO! EDP CREATED");
        }
    } catch (error) {
        console.error("Error creating edp data:", error);
    }
};

const getEDPData = async (staffEmail) => {
    try {
        const response = await fetch(`/api/edp/getEDPByEmail/${staffEmail}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            const json = await response.json();
            console.error(json.error);
            return; // Make sure to handle error cases
        }

        const data = await response.json();
        if (response.ok) {
            return data;
        }
    } catch (error) {
        console.error("Error fetching EDP data:", error);
    }
};

export { createEDPData, getEDPData };
