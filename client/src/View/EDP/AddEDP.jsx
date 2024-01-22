import { useState } from "react";
import CountCard from "../../Components/CountCard";
import Dropdown from "../../Components/Dropdown";

export default function AddEDP() {
  const [competencyCluster, setCompetencyCluster] = useState("");
  const [intervention, setIntervention] = useState("");

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
        <div className="flex">
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
            <div>
              Competency Cluster:
              {competencyCluster}
            </div>
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
            <div>
              Intervention:
              {intervention}
            </div>
          </div>
        </div>

        <div className="w-full overflow-x-auto p-5">
          <table
            className="w-full text-left border border-separate rounded border-slate-200 "
            cellSpacing="0"
          >
            <tbody>
              <tr>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
                >
                  Reference No.
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
                >
                  Competency to Address
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
                >
                  Action Plan
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
                >
                  Due Date
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
                >
                  Date Review
                </th>
              </tr>
              {/* Reference No. */}
              <tr className="transition-colors duration-300 hover:bg-slate-50">
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Ayub Salas
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Designer
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Carroll Group
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Member
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  salas_a
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  salas_a
                </td>
              </tr>
              {/* Competency to Address */}
              <tr className="transition-colors duration-300 hover:bg-slate-50">
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Agnes Sherman
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Developer
                  <br />
                  <span className="badge badge-ghost badge-sm">Technical</span>
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Apple
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Admin
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  shermanagnes
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  shermanagnes
                </td>
              </tr>
              {/* Action Plan */}
              <tr className="transition-colors duration-300 hover:bg-slate-50">
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Jemma Cummings
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Senior Designer
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  20goto10
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Member
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  jemmaC
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  jemmaC
                </td>
              </tr>
              {/* Due Date */}
              <tr className="transition-colors duration-300 hover:bg-slate-50">
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Jimi Cardenas
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Copywriter
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Wind-UI
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Owner
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  cardenasji
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  cardenasji
                </td>
              </tr>
              <tr className="transition-colors duration-300 hover:bg-slate-50">
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Mateusz Tucker
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Project Manager
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Tailwindui
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  Member
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  mt
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  mt
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
