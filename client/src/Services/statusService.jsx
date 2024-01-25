// services/statusService.js
import axios from "axios";

const getStatusData = async () => {
  const response = await axios.get("/api/status/getStatus");
  return response.data;
};

const createStatusData = async (statusData) => {
  try {
    const response = await fetch("/api/status/createStatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: {
          status: statusData.status,
          dueDate: statusData.dueDate,
          dateAgreement: statusData.dateAgreement,
          dateReview: statusData.dateReview,
          updatedBy: statusData.updatedBy,
        },
      }),
    });

    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
    }
    if (response.ok) {
      console.log("dead 3");
    }
  } catch (error) {
    console.error("Error creating status data:", error);
  }
};

export { getStatusData, createStatusData };
