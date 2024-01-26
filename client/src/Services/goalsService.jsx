// Example of the correct implementation
const getGoalsData = async (staffEmail) => {
  try {
    const response = await fetch(`/api/goals/getGoalsByEmail/${staffEmail}`, {
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
    console.error("Error fetching goals data:", error);
  }
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
