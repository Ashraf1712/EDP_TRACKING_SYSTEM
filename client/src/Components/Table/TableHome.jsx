import React, { useState, useEffect } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import FilterReferenceNo from "../Filter/FilterReferenceNo";
import FilterDueDate from "../Filter/FilterDueDate";
import FilterStatus from "../Filter/FilterStatus";
import FilterCompetencyCluster from "../Filter/FilterCompetencyCluster";
import FilterIntervention from "../Filter/FilterIntervention";
import FilterCompetencyAddress from "../Filter/FilterCompetencyAddress";
import FilterActionPlan from "../Filter/FilterActionPlan";
import Pagination from "../Pagination/Pagination"; // Assuming Pagination component is in the same directory

function TableHome({ headers, rows, dueDatesInYear, resultsPerPage }) {
  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortingOrder, setSortingOrder] = useState("asc");
  const [selectedYear, setSelectedYear] = useState("");
  const [referenceNoFilter, setReferenceNoFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [competencyClusterFilter, setCompetencyClusterFilter] = useState([]);
  const [interventionFilter, setInterventionFilter] = useState([]);
  const [competencyAddressFilter, setCompetencyAddressFilter] = useState("");
  const [actionPlanFilter, setActionPlanFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [
    selectedYear,
    referenceNoFilter,
    statusFilter,
    competencyClusterFilter,
    interventionFilter,
    competencyAddressFilter,
    actionPlanFilter,
  ]);

  const handleSort = (column, order) => {
    setSortedColumn(column);
    setSortingOrder(order);
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const handleReferenceNoFilterChange = (text) => {
    setReferenceNoFilter(text);
  };

  const handleStatusFilterChange = (status) => {
    setStatusFilter(status);
  };

  const handleCompetencyClusterFilterChange = (competencyClusters) => {
    setCompetencyClusterFilter(competencyClusters);
  };

  const handleInterventionFilterChange = (interventions) => {
    setInterventionFilter(interventions);
  };

  const handleCompetencyAddressFilterChange = (text) => {
    setCompetencyAddressFilter(text);
  };

  const handleActionPlanFilterChange = (text) => {
    setActionPlanFilter(text);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const filteredRows = rows.filter((rowData) => {
    const year = new Date(rowData.dueDate).getFullYear().toString();
    const referenceNo = rowData.edpID.toLowerCase();
    const filterText = referenceNoFilter.toLowerCase();
    const status = rowData.status;
    const competencyCluster = rowData.competencyCluster || "";
    const intervention = rowData.intervention || "";
    const competencyAddress = rowData.competencyAddress || "";
    const actionPlan = rowData.actionPlan || "";

    return (
      (selectedYear === "" || year === selectedYear) &&
      referenceNo.includes(filterText) &&
      (statusFilter === "" || status === statusFilter) &&
      (competencyClusterFilter.length === 0 ||
        competencyClusterFilter.includes(competencyCluster)) &&
      (interventionFilter.length === 0 ||
        interventionFilter.includes(intervention)) &&
      (competencyAddressFilter === "" ||
        competencyAddress
          .toLowerCase()
          .includes(competencyAddressFilter.toLowerCase())) &&
      (actionPlanFilter === "" ||
        actionPlan.toLowerCase().includes(actionPlanFilter.toLowerCase()))
    );
  });

  const filteredResults = filteredRows.length;

  const sortedRows = [...filteredRows].sort((a, b) => {
    const aValue = a[sortedColumn];
    const bValue = b[sortedColumn];

    if (aValue === undefined || aValue === null) {
      return sortingOrder === "asc" ? -1 : 1;
    }

    if (bValue === undefined || bValue === null) {
      return sortingOrder === "asc" ? 1 : -1;
    }

    if (sortingOrder === "asc") {
      return aValue.localeCompare(bValue);
    } else {
      return bValue.localeCompare(aValue);
    }
  });

  const displayedRows = sortedRows.slice(startIndex, endIndex);

  return (
    <div>
      <FilterCompetencyCluster
        onCompetencyClusterChange={handleCompetencyClusterFilterChange}
      />
      <FilterIntervention
        onInterventionChange={handleInterventionFilterChange}
      />

      <table
        className="w-full text-left border border-separate rounded border-slate-200"
        cellSpacing="0"
      >
        <tbody>
          <TableHeader
            headers={headers}
            onSort={handleSort}
            filterComponents={{
              edpID: (
                <FilterReferenceNo
                  onFilterChange={handleReferenceNoFilterChange}
                />
              ),
              dueDate: (
                <FilterDueDate
                  dueDates={dueDatesInYear}
                  onYearChange={handleYearChange}
                />
              ),
              status: (
                <FilterStatus onStatusChange={handleStatusFilterChange} />
              ),
              competencyCluster: (
                <FilterCompetencyCluster
                  onCompetencyClusterChange={
                    handleCompetencyClusterFilterChange
                  }
                />
              ),
              intervention: (
                <FilterIntervention
                  onInterventionChange={handleInterventionFilterChange}
                />
              ),
              competencyAddress: (
                <FilterCompetencyAddress
                  onFilterCompetencyAddressChange={
                    handleCompetencyAddressFilterChange
                  }
                />
              ),
              actionPlan: (
                <FilterActionPlan
                  onFilterActionPlanChange={handleActionPlanFilterChange}
                />
              ),
            }}
          />
          {displayedRows.map((rowData, rowIndex) => (
            <TableRow
              key={rowIndex}
              headers={headers}
              data={rowData}
              href={`/edpDetails/${rowData.edpID}`}
            />
          ))}
        </tbody>
      </table>

      <Pagination
        totalResults={filteredResults}
        resultsPerPage={resultsPerPage}
        currentPage={currentPage}
        onChange={handlePageChange}
      />
    </div>
  );
}

export default TableHome;
