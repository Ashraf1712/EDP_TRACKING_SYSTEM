// userService.jsx
const updateUserProfile = async (staffEmail, userData, token) => {
    try {
        const formData = new FormData();

        // Append JSON data
        formData.append('staffID', userData.staffID);
        formData.append('section', userData.section);
        formData.append('category', userData.category);

        // Append profilePicture
        if (userData.profilePicture) {
            formData.append('profilePicture', userData.profilePicture);
        }

        const response = await fetch(`/api/user/updateProfile/${staffEmail}`, {
            method: "PUT",
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: formData,
        });

        if (!response.ok) {
            // Handle non-successful response here
            throw new Error(`Error updating Profile data: ${response.status} - ${response.statusText}`);
        } else {
            console.log("LESGO! USER PROFILE UPDATED");
            const updatedData = await response.json();
            console.log(updatedData);

            // Include the token in the response
            return { ...updatedData, token };
        }
    } catch (error) {
        console.error("Error updating Profile data:", error);
        throw error;
    }
};


const getCategory = async () => {
    try {
        const response = await fetch(`/api/user/getCategory`, {
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
        console.error("Error fetching Category data:", error);
    }
}

const getSection = async () => {
    try {
        const response = await fetch(`/api/user/getSection`, {
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
        console.error("Error fetching Section data:", error);
    }
}

export { updateUserProfile, getCategory, getSection };
