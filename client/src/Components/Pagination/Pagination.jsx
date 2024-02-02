import { useState } from "react";
import previousPageSvg from "../../assets/icons/previousPage.svg";
import nextPageSvg from "../../assets/icons/nextPage.svg";

const Pagination = ({ totalResults, resultsPerPage, currentPage, onChange }) => {
    const totalPages = Math.ceil(totalResults / resultsPerPage);

    const isPrevDisabled = currentPage === 1;
    const isNextDisabled = currentPage === totalPages;
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setIsButtonClicked(true);
            onChange(newPage);
        }
    };

    return (
        <nav role="navigation" aria-label="Pagination Navigation" className="flex flex-col items-center w-full gap-2 md:flex-row">
            <p className="flex-1 text-sm text-center text-slate-500 md:text-left">
                Showing {((currentPage - 1) * resultsPerPage) + 1} to {Math.min(currentPage * resultsPerPage, totalResults)} of {totalResults} results
            </p>
            <ul className="flex items-center justify-center overflow-hidden text-sm list-none border divide-x rounded divide-slate-200 border-slate-200 text-slate-700">
                <li>
                    <button
                        aria-label="Previous Page"
                        className={`inline-flex items-center justify-center h-10 gap-4 px-4 text-sm font-medium transition duration-300 focus-visible:outline-none stroke-slate-700 text-slate-700 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600 ${isPrevDisabled ? 'opacity-50' : ''}`}
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        <span className="md:sr-only">Prev</span>
                        <img src={previousPageSvg} alt="Previous Page" className="w-4 h-4 -mx-1" />
                    </button>
                </li>

                {[...Array(totalPages).keys()].map((page) => (
                    <li key={page}>
                        <button
                            aria-label={`Goto Page ${page + 1}`}
                            className={`items-center justify-center h-10 px-4 text-sm font-medium transition duration-300 focus-visible:outline-none stroke-slate-700 text-slate-700 ${isButtonClicked ? 'opacity-50' : 'hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 focus:text-emerald-600'} md:inline-flex ${currentPage === page + 1 ? 'whitespace-nowrap bg-emerald-500 text-white hover:bg-emerald-600 focus:bg-emerald-700' : ''}`}
                            onClick={() => handlePageChange(page + 1)}
                        >
                            {page + 1}
                        </button>
                    </li>
                ))}

                <li>
                    <button
                        aria-label="Next Page"
                        className={`inline-flex items-center justify-center h-10 gap-4 px-4 text-sm font-medium transition duration-300 focus-visible:outline-none stroke-slate-700 text-slate-700 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600 ${isNextDisabled ? 'opacity-50 ' : ''}`}
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        <span className="md:sr-only">Next</span>
                        <img src={nextPageSvg} alt="Next Page" className="w-4 h-4 -mx-1" />
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
