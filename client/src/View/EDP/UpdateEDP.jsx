import { useState, useEffect } from "react";
import Dropdown from "../../Components/Dropdown";
import DatepickerReact from "../../Components/DatepickerReact";
import TextareaInput from "../../Components/TextareaInput";
import SubmitHeader from "../../Components/SubmitHeader";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useEDPDataByID } from "../../hooks/useEDPDataByID";
import { useParams } from "react-router-dom";
import { updateEDPData } from "../../Services/edpService";

export default function UpdateEDP() {
    let typeUser = "User";
    const { edpID } = useParams();
    const data = useEDPDataByID(edpID);
    const { user } = useAuthContext();

    const [shouldRefetch, setShouldRefetch] = useState(true);
    const [longTermGoal, setLongTermGoal] = useState("");
    const [shortTermGoal, setShortTermGoal] = useState("");
    const [competencyCluster, setCompetencyCluster] = useState("");
    const [intervention, setIntervention] = useState("");
    const [competencyAddress, setCompetencyAddress] = useState("");
    const [actionPlan, setActionPlan] = useState("");
    const [dueDate, setDueDate] = useState(null);
    const [dateAgreement, setDateAgreement] = useState(null);
    const [dateReview, setDateReview] = useState(null);
    const [status, setStatus] = useState("");
    const [remarks, setRemarks] = useState("");

    useEffect(() => {
        if (shouldRefetch && data) {
            setLongTermGoal(data.goalsLongterm || '');
            setShortTermGoal(data.goalsShortterm || '');
            setCompetencyCluster(data.competencyCluster || '');
            setIntervention(data.intervention || '');
            setCompetencyAddress(data.competencyAddress || '');
            setActionPlan(data.actionPlan || '');
            setDueDate(data.dueDate || null);
            setDateAgreement(data.dateAgreement || null);
            setDateReview(data.dateReview || null);
            setStatus(data.status || '');
            setRemarks(data.remarks || '');

            // Reset the flag
            setShouldRefetch(false);
        }
    }, [shouldRefetch, data]);


    const handleSubmit = async () => {
        try {
            // Create the dataToSend object with the desired structure
            const dataToSend = {
                actionPlan: actionPlan,
                competencyAddress: competencyAddress,
                competencyCluster: competencyCluster,
                dateAgreement: dateAgreement,
                dateReview: dateReview,
                dueDate: dueDate,
                goalLongterm: longTermGoal,
                goalShortterm: shortTermGoal,
                edpID: edpID,
                intervention: intervention,
                remarks: remarks,
                status: status,
                staffEmail: user.Staff_Email,
            };

            // Assuming updateEDPData is your update function
            const response = await updateEDPData(edpID, dataToSend);
            if (response === true) {
                window.location.reload();
                setShouldRefetch(true);

            }
        } catch (error) {
            console.error("Error updating EDP:", error);
        }
    };





    return (
        <div className="pt-24">
            <SubmitHeader onSubmit={handleSubmit} deleteEDPID={edpID} />
            <header className="bg-white shadow">
                <div className="mx-auto px-2 py-4 sm:px-4 lg:px-6">
                    <h1 className="text-lg font-bold tracking-tight text-gray-900">
                        Update Employee Development Plan (EDP)
                    </h1>
                </div>
            </header>
            <main>
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <div className="w-1/2 p-4">
                            <TextareaInput
                                label="Long Term Goal"
                                onChangeData={setLongTermGoal}
                                value={longTermGoal}
                            />
                            <div>Long Term Goal: {longTermGoal} </div>
                        </div>
                        <div className="w-1/2 p-4">
                            <TextareaInput
                                label="Short Term Goal"
                                onChangeData={setShortTermGoal}
                                value={shortTermGoal}
                            />
                            <div>Short Term Goal: {shortTermGoal} </div>
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
                                    value={competencyCluster}
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
                                    value={intervention}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>
                            <div>Intervention: {intervention}</div>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="w-1/2 p-4">
                            <TextareaInput
                                label="Gaps to Address"
                                onChangeData={setCompetencyAddress}
                                value={competencyAddress}
                            />
                            <div>Gaps to Address: {competencyAddress}</div>
                        </div>
                        <div className="w-1/2 p-4">
                            <TextareaInput
                                label="Gaps Closure"
                                onChangeData={setActionPlan}
                                value={actionPlan}
                            />
                            <div>Gaps Closure: {actionPlan}</div>
                        </div>
                    </div>

                    <div className="flex flex-row">
                        <div className="w-1/3 p-4">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <p className="text-m font-medium ">Due Date</p>
                            </div>
                            <DatepickerReact onDateChange={setDueDate} dateValue={dueDate} defaultValue={dueDate} />
                            <div>Due Date: {dueDate}</div>
                        </div>

                        <div className="w-1/3 p-4">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <p className="text-m font-medium">Status</p>
                                <Dropdown
                                    constantName={
                                        typeUser === "User" ? "USER_STATUS" : "MANAGER_STATUS"
                                    }
                                    labelText={"Select Status"}
                                    onChange={(e) => setStatus(e.target.value)}
                                    value={status}
                                    typeUser={typeUser}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                                <div>Status : {status}</div>
                            </div>
                        </div>

                        <div className="w-1/3 p-4">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <p className="text-m font-medium ">Agreement Date</p>
                            </div>
                            <DatepickerReact onDateChange={setDateAgreement} dateValue={dateAgreement} />
                            <div>Agreement Date: {dateAgreement}</div>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="w-1/2 p-4">
                            <TextareaInput label="Remarks" onChangeData={setRemarks} value={remarks} />
                            <div>
                                Remarks: <div dangerouslySetInnerHTML={{ __html: remarks }} />
                            </div>
                        </div>
                        <div className="w-1/2 p-4">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <p className="text-m font-medium ">Review Date</p>
                            </div>
                            <DatepickerReact onDateChange={setDateReview} dateValue={dateReview} />
                            <div>Review Date: {dateReview}</div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
