const createPlanData = async (planData) => {
  try {
    const response = await fetch("/api/plan/createPlan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        plan: {
          competencyAddress: planData.competencyAddress,
          competencyCluster: planData.competencyCluster,
          actionPlan: planData.actionPlan,
          intervention: planData.intervention,
          remarks: planData.remarks,
        },
      }),
    });

    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
    }
    if (response.ok) {
      console.log("dead 2");
    }
  } catch (error) {
    console.error("Error creating plan data:", error);
  }
};

export { createPlanData };
