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
const updateEDPData = async (edpID, edpData) => {
    try {

        const response = await fetch(`/api/edp/updateEDP/${edpID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(edpData),
        });
        if (!response.ok) {
            // Handle non-successful response here
            throw new Error(`Error updating EDP data: ${response.status} - ${response.statusText}`);
        } else {
            // Only parse JSON once
            console.log("LESGO! EDP UPDATED");
            const updatedData = await response.json();
            console.log(updatedData);
            return true; // Assuming your server returns the updated data
        }
    } catch (error) {
        console.error("Error updating EDP data:", error);
        throw error;
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

const getEDPDataByID = async (edpID) => {
    try {
        const response = await fetch(`/api/edp/getEDPByID/${edpID}`, {
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

const deleteEDPData = async (edpID) => {
    try {
        const response = await fetch(`/api/edp/deleteEDPByID/${edpID}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            const json = await response.json();
            console.error(json.error);
            return false; // Make sure to handle error cases
        } else {
            return true;
        }
    } catch (error) {
        console.error("Error deleting EDP data:", error);
    }
}

export { createEDPData, updateEDPData, getEDPData, getEDPDataByID, deleteEDPData };
