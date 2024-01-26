// Example of the correct implementation
import axios from "axios";

const getGoalsData = (staffEmail) => {
  axios
    .get(`/api/goals/getGoalsByEmail/${staffEmail}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching goals data:", error);
      throw error; // Re-throw the error to propagate it further
    });
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
