// services/goalsService.js
import axios from "axios";

const getGoalsData = async (staffEmail) => {
  const response = await axios.get(`/api/goals/getGoals/${staffEmail}`);
  return response.data;
};

const createGoalsData = async (goalsData) => {
  try {
    const response = await fetch("/api/goals/createGoals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        goals: {
          goalsLongterm: goalsData.goalsLongterm,
          goalsShortterm: goalsData.goalsShortterm,
          staffEmail: goalsData.staffEmail,
        },
      }),
    });

    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
    }
    if (response.ok) {
      console.log("dead");
    }
  } catch (error) {
    console.error("Error creating goals data:", error);
  }
};

export { getGoalsData, createGoalsData };
