'use client'
import React from "react";
import { EDP } from "@/types/edp/edp.types";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableThree from "@/components/Tables/TableThree";
import useFetchNonCompletedEDPByEmail from "@/hooks/edpHooks/useFetchNonCompletedEDPByEmail";


export default function Plan() {
  const data: EDP | null = useFetchNonCompletedEDPByEmail("Tester1234@fakegmail.com");

  return (
    <>
      <DefaultLayout>
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          <div className="col-span-12">
            <TableThree data={data} />
          </div>
        </div>

      </DefaultLayout>
    </>
  );
}
