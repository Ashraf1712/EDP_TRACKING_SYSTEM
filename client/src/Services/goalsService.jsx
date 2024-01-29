// Example of the correct implementation

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
        },
      }),
    });

    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
    }
    if (response.ok) {
      console.log("LESGO! GOALS CREATED");
    }
  } catch (error) {
    console.error("Error creating goals data:", error);
  }
};

export { createGoalsData };
