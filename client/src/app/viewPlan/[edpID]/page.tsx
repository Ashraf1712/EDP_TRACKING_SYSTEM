'use client'
import React, { useState } from "react";
import { EDPDetails } from "@/types/edp/edp.types";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableThree from "@/components/Tables/TableThree";
import useFetchEDPDataByID from "@/hooks/edpHooks/plan/useFetchEDPDataByID";
import { COMPETENCY_CLUSTER, INTERVENTION } from "@/assets/constants/constats";
import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import DatePickerTwo from "@/components/FormElements/DatePicker/DatePickerTwo";
import { Stepper, Step, StepLabel } from '@mui/material';
import PlanStepper from "@/components/Stepper/PlanStepper";

const displayMultipleLineData = (data: string) => {
  if (!data) return "";

  return data.replace(/<br\s*\/?>/g, "\n");
}


export default function PlanDetails({ params }: any) {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);
  const data = useFetchEDPDataByID(params.edpID);
  const [currentStep, setCurrentStep] = useState<number>(2);

  if (!data) {
    return null;
  }

  const edpDetails: EDPDetails = data;


  const changeTextColor = () => {
    setIsOptionSelected(true);
  };


  return (
    <>
      <DefaultLayout>
        <div className="mt-4 grid grid-cols-3 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          {/* CONTAINER FOR PLAN DETAILS */}

          <div className="col-span-2">
            <div className="container h-full overflow-y-auto bg-red bg-opacity-30 text-black dark:text-white">
              <div className="p-4">Staff Details</div>
              <div className="border-t-[1px] border-t-slate-400 border-opacity-30 p-4">

                <p className="mb-2.5">Long Term Goals</p>
                <div className="mb-4">
                  <textarea
                    rows={6}
                    disabled
                    placeholder="Disabled textarea"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black"
                    value={displayMultipleLineData(
                      edpDetails.goalsLongterm || ""
                    )}
                  ></textarea>
                </div>

                <p className="mb-2.5">Short Term Goals</p>
                <div className="mb-4">
                  <textarea
                    rows={6}
                    disabled
                    placeholder="Disabled textarea"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black"
                    value={displayMultipleLineData(
                      edpDetails.goalsShortterm || ""
                    )}
                  ></textarea>
                </div>



                <p className="mb-2.5">Competency Address</p>
                <div className="mb-4">
                  <textarea
                    rows={6}
                    disabled
                    placeholder="Disabled textarea"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black"
                    value={displayMultipleLineData(
                      edpDetails.competencyAddress || "",
                    )}
                  ></textarea>
                </div>

                <label className="mb-2.5 block text-black dark:text-white">
                  Competency Cluster
                </label>

                <div className="relative z-20 bg-transparent dark:bg-form-input mb-4">
                  <select
                    value={data.competencyCluster}
                    disabled
                    className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${isOptionSelected ? "text-black dark:text-white" : ""
                      }`}
                  >
                    <option value="" disabled className="text-body dark:text-bodydark">
                      Select your cluster
                    </option>
                    {COMPETENCY_CLUSTER.map((cluster) => (
                      <option key={cluster} value={cluster} className="text-body dark:text-bodydark">
                        {cluster}
                      </option>
                    ))}
                  </select>

                  <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
                    <svg
                      className="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill=""
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>

                <p className="mb-2.5">Action Plan</p>
                <div className="mb-4">
                  <textarea
                    rows={6}
                    disabled
                    placeholder="Disabled textarea"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black"
                    value={displayMultipleLineData(
                      edpDetails.actionPlan || "",
                    )}
                  ></textarea>
                </div>


                <label className="mb-2.5 block text-black dark:text-white">
                  Intervention
                </label>

                <div className="relative z-20 bg-transparent dark:bg-form-input">
                  <select
                    value={data.competencyCluster}
                    disabled
                    className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${isOptionSelected ? "text-black dark:text-white" : ""
                      }`}
                  >
                    <option value="" disabled className="text-body dark:text-bodydark">
                      Select your intervention
                    </option>
                    {INTERVENTION.map((item) => (
                      <option key={item} value={item} className="text-body dark:text-bodydark">
                        {item}
                      </option>
                    ))}
                  </select>

                  <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
                    <svg
                      className="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill=""
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* COLUMN FOR STEPPER, STATUS, DUE DATE , Review */}
          {/* STEPPER HERE */}
          <div className="col-span-1 p-4">
            <h1 className="text-xl font-black">EDP Details</h1>
            <div className="flex flex-col h-full">
              <div className="h-1/3 flex flex-col w-full bg-white mb-4">
                {/* <Stepper
                  activeStep={3}
                  orientation="vertical"
                  style={{ marginLeft: "20px", }}
                >
                  <Step>
                    <StepLabel>Pending</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>In Progress</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>Completed</StepLabel>
                  </Step>
                </Stepper> */}

                <PlanStepper />
              </div>
              <DatePickerTwo title="Due Date" date={data.dueDate} />

              <DatePickerTwo title="Date Review" date={data.dateReview} />
            </div>


          </div>
        </div>



      </DefaultLayout >
    </>
  );
}
