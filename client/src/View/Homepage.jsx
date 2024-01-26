import CountCard from "../Components/CountCard";
import Table from "../Components/Table/Table";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEdpData } from "../hooks/useEdpData";
export default function Homepage() {
  const { user } = useAuthContext();
  const data = useEdpData(user.Staff_Email);

  const headers = [
    { id: "goalsID", header: "Reference No." },
    { id: "competencyAddress", header: "Competency to Address" },
    { id: "actionPlan", header: "Action Plan" },
    { id: "dueDate", header: "Due Date", isDate: true },
    { id: "status", header: "Status" },
    { id: "dateReview", header: "Date Review", isDate: true },
  ];

  const badge = [
    "competencyCluster",
    "intervention"
  ]

  return (
    <div>
      <header className="bg-white shadow">
        <div className="mx-auto px-2 py-4 sm:px-4 lg:px-6">
          <h1 className="text-lg font-bold tracking-tight text-gray-900">
            Homepage
          </h1>
        </div>
      </header>
      <main>
        {/* <UserChart /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ml-5 mt-5 mr-5">
          <div className="card bg-greyish-100 shadow-xl h-64 border-b-8 border-greenish-100">
            <figure>
              {/* <UserChart header={"Not Yet Started"} /> */}
              <div className="flex flex-col items-center justify-center h-screen">
                <svg
                  fill="#89cff0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-10 h-10"
                >
                  <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
                  <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                </svg>
                <CountCard
                  className="text-sm sm:text-base md:text-lg lg:text-xl"
                  header={"Not yet Started"}
                  finalCount={100}
                />
              </div>
            </figure>
          </div>

          <div className="card bg-greyish-100 shadow-xl h-64 border-b-8 border-greenish-100">
            <figure>
              {/* <UserChart header={"Not Yet Started"} /> */}
              <div className="flex flex-col items-center justify-center h-screen">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#fdb924"
                  className="w-10 h-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                    clipRule="evenodd"
                  />
                </svg>

                <CountCard
                  className="text-sm sm:text-base md:text-lg lg:text-xl"
                  header={"In Progress"}
                  finalCount={100}
                />
              </div>
            </figure>
          </div>

          <div className="card bg-greyish-100 shadow-xl h-64 border-b-8 border-greenish-100">
            <figure>
              {/* <UserChart header={"Not Yet Started"} /> */}
              <div className="flex flex-col items-center justify-center h-screen">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#18f98f"
                  className="w-10 h-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>

                <CountCard
                  className="text-sm sm:text-base md:text-lg lg:text-xl"
                  header={"Completed"}
                  finalCount={100}
                />
              </div>
            </figure>
          </div>
        </div>

        <div className="w-full overflow-x-auto p-5">
          <Table headers={headers} rows={data ? data : []} badge={badge} />
          {/* <button onClick={handleFetchData}>Test</button> */}
        </div>
      </main>
    </div>
  );
}
