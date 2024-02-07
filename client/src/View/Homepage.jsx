import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEDPData } from "../hooks/useEDPData";
import TableHome from "../Components/Table/TableHome";
import CountCardDisplay from "../Components/CountCardDisplay";
import notYetStartedIcon from "../assets/icons/notYetStarted.svg";
import inProgressIcon from "../assets/icons/inProgress.svg";
import completedIcon from "../assets/icons/completed.svg";
import Pagination from "../Components/Pagination/Pagination";

function Homepage() {
  const { user } = useAuthContext();
  const data = useEDPData(user.Staff_Email);
  const [notYetStartedCount, setNotYetStartedCount] = useState(0);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [dueDatesInYear, setDueDatesInYear] = useState([]);
  const [overallProgress, setOverallProgress] = useState(0.0);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 5;

  useEffect(() => {
    const updateCounts = () => {
      if (data) {
        let notStarted = 0;
        let inProgress = 0;
        let completed = 0;
        let dueDates = [];

        data.forEach((item) => {
          switch (item.status) {
            case "Not yet Started":
              notStarted += 1;
              break;
            case "In Progress":
              inProgress += 1;
              break;
            case "Completed":
              completed += 1;
              break;
            default:
              // Handle other statuses if needed
              break;
          }
          dueDates.push(item.dueDate);
        });
        setDueDatesInYear(dueDates);
        setNotYetStartedCount(notStarted);
        setInProgressCount(inProgress);
        setCompletedCount(completed);
        setOverallProgress(
          (completed / (completed + inProgress + notStarted)) * 100
        );
      }
    };

    updateCounts();
  }, [data]);

  const headers = [
    { id: "edpID", header: "Reference No." },
    {
      id: "competencyAddress",
      header: "Competency to Address",
      badge: "competencyCluster",
      isHtml: true,
    },
    {
      id: "actionPlan",
      header: "Action Plan",
      badge: "intervention",
      isHtml: true,
    },
    { id: "dueDate", header: "Due Date", isDate: true },
    { id: "status", header: "Status" },
    { id: "dateReview", header: "Date Review", isDate: true },
  ];

  return (
    <div className="flex">
      {/* Navigation Bar */}
      {/* Main Content */}
      <div className="flex-1 ml-48">
        <header className="bg-white shadow">
          <div className="mx-auto px-2 py-4 sm:px-4 lg:px-6">
            <h1 className="text-lg font-bold tracking-tight text-gray-900">
              Homepage
            </h1>
          </div>
        </header>
        <main>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 ml-auto mr-auto mt-5 justify-center items-center">
            <CountCardDisplay
              icon={notYetStartedIcon}
              header="Not Yet Started"
              count={notYetStartedCount}
            />
            <CountCardDisplay
              icon={inProgressIcon}
              header="In Progress"
              count={inProgressCount}
            />
            <CountCardDisplay
              icon={completedIcon}
              header="Completed"
              count={completedCount}
            />
            <CountCardDisplay
              icon={completedIcon}
              header="Progression"
              count={overallProgress}
              isPercentage={true}
            />
          </div>
          {/* FILTER SECTION */}
          <div className="w-full overflow-x-auto p-5">
            <TableHome
              headers={headers}
              rows={data ? data : []}
              dueDatesInYear={dueDatesInYear}
              currentPage={currentPage}
              resultsPerPage={resultsPerPage}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Homepage;
