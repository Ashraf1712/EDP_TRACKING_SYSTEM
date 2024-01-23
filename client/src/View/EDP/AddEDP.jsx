import { useState } from "react";
import CountCard from "../../Components/CountCard";
import Dropdown from "../../Components/Dropdown";

export default function AddEDP() {
  const [longTermGoal, setLongTermGoal] = useState("");
  const [shortTermGoal, setShortTermGoal] = useState("");
  const [competencyCluster, setCompetencyCluster] = useState("");
  const [intervention, setIntervention] = useState("");
  const [gapsToAddress, setGapsToAddress] = useState("");
  const [gapsClosure, setGapsClosure] = useState("");

  return (
    <div>
      <header className="bg-white shadow">
        <div className="mx-auto px-2 py-4 sm:px-4 lg:px-6">
          <h1 className="text-lg font-bold tracking-tight text-gray-900">
            Add Employee Development Plan (EDP)
          </h1>
        </div>
      </header>
      <main>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="w-1/2 p-4">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <p className="text-m font-medium ">Long Term Goal</p>
                <textarea
                  className="textarea textarea-primary w-full"
                  placeholder="Long Term Goal"
                  onChange={(e) => setLongTermGoal(e.target.value)}
                  required=""
                ></textarea>
              </div>
            </div>
            <div className="w-1/2 p-4">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <p className="text-m font-medium">Short Term Goal</p>
                <textarea
                  className="textarea textarea-primary w-full"
                  placeholder="Short Term Goal"
                  onChange={(e) => setShortTermGoal(e.target.value)}
                  required=""
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-1/2 p-4">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <p className="text-m font-medium">Competency Cluster</p>
                <Dropdown
                  constantName={"COMPETENCY_CLUSTER"}
                  labelText={"Select Competency Cluster"}
                  onChange={(e) => setCompetencyCluster(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>Competency Cluster: {competencyCluster}</div>
            </div>

            <div className="w-1/2 p-4">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <p className="text-m font-medium">Intervention</p>
                <Dropdown
                  constantName={"INTERVENTION"}
                  labelText={"Select Intervention"}
                  onChange={(e) => setIntervention(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>Intervention: {intervention}</div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-1/2 p-4">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <p className="text-m font-medium ">Gaps to Address</p>
                <textarea
                  className="textarea textarea-primary w-full"
                  placeholder="Gaps to Address"
                  onChange={(e) => setGapsToAddress(e.target.value)}
                  required=""
                ></textarea>
              </div>
            </div>
            <div className="w-1/2 p-4">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <p className="text-m font-medium">Gaps Closure</p>
                <textarea
                  className="textarea textarea-primary w-full"
                  placeholder="Gaps Closure"
                  onChange={(e) => setGapsClosure(e.target.value)}
                  required=""
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
