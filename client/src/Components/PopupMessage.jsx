// PopupMessage.jsx
import React, { useState, useRef, useEffect } from "react";
import { deleteEDPData } from "../Services/edpService";
import { useNavigate } from "react-router-dom";

function PopupMessage({ edpID, onDeleteSuccess }) {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const navigate = useNavigate();
    const modalRef = useRef(null);

    const handleDelete = () => {
        setShowConfirmation(true);
    };

    const confirmDelete = async () => {
        const response = await deleteEDPData(edpID);
        if (response) {
            navigate('/');
            onDeleteSuccess();
        }
        setShowConfirmation(false);
    };

    const cancelDelete = () => {
        setShowConfirmation(false);
    };

    const cancelDeleteBackdrop = (e) => {
        if (e.target === modalRef.current) {
            setShowConfirmation(false);
        }
    };

    useEffect(() => {
        // Prevent scrolling when the popup is open
        if (showConfirmation) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup function to remove the added style
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showConfirmation]);

    return (
        <>
            <button
                onClick={handleDelete}
                className="btn btn-xs sm:btn-sm md:btn-sm lg:btn-sm text-white bg-red-500 hover:bg-red-600 border-white"
            >
                Delete
            </button>

            {showConfirmation && (
                <div
                    ref={modalRef}
                    onClick={cancelDeleteBackdrop}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                >
                    <div id="radix-:rp3:" className="col-auto col-start-2 row-auto row-start-2 w-full rounded-xl text-left shadow-xl max-w-lg">
                        <div className="px-4 pb-4 pt-5 sm:p-6 flex items-center justify-between border-b border-black/10 dark:border-white/10 bg-white rounded-t-xl text-black">
                            <div className="flex">
                                <div className="flex items-center">
                                    <div className="flex grow flex-col gap-1">
                                        <h2 id="radix-:rp4:" className="text-lg font-medium leading-6 text-token-text-primary">
                                            Delete Record?
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 sm:p-6 bg-gray-300 rounded-b-xl text-black">
                            This will delete <strong>Reference No: {edpID}</strong>.
                            <div className="flex flex-col gap-3 sm:flex-row-reverse mt-5 sm:mt-4">
                                <button className="btn relative bg-red-500 hover:bg-red-400 text-white border-red-500 hover:border-red-400" onClick={confirmDelete}>
                                    <div className="flex w-full gap-2 items-center justify-center">Yes, Delete Record</div>
                                </button>

                                <button className="btn relative bg-white hover:bg-gray-100 border-white hover:border-gray-200 text-gray-700" onClick={cancelDelete}>
                                    <div className="flex w-full gap-2 items-center justify-center">No, Keep Record</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default PopupMessage;
