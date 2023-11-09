import React from "react";

import { Card, CardHeader, Typography, Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import './styles.css';

export function SkeletonCardPack() {
  return (
    <Card className="w-[254px] h-[413px] relative flex-none m-4  overflow-hidden cursor-pointer shadow-none border-[2px] border-colorNeutral2">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none h-[120px] w-full relative "
      >
        <div className="h-full w-full object-cover gray-color-animation"></div>

        <div className="flex items-center justify-center absolute right-3 bottom-1 white-color-animation rounded-md w-[100px] h-[20px]">

        </div>
      </CardHeader>

      <section className={`h-48 p-[0.70rem] flex-column  "blur-none"}`}>


        <div className="flex item-center gap-8 mt-4">
          <div className="flex items-center gap-1 ">
            <FontAwesomeIcon icon={faStar} />
            <span></span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 text-sizeNote my-5 text-colorPrimary font-bold h-[57px] overflow-y-auto  snap-y">
          <span
            className="tag-color-animation px-2 py-[1px] h-[24.5px] rounded-md w-[81px]"
          ></span>
        </div>

        <div className="text-sizeNote font-weightSubtitle flex items-center justify-end  text-colorNeutral1 mb-3">
          <span className="border-[2px] border-colorNeutral2 px-4 py-[2px] rounded-md w-[117px] h-[29px]">

          </span>
        </div>

        <div className="h-[1px] border-t-[2px] border-colorNeutral2"></div>

        <div className="flex justify-between items-center mt-6">
          <div className="flex-column justify-between ">

          </div>

          <div
            className="rounded-full normal-case px-3 button-color-animation h-[38px] w-[90px]"
          >

          </div>
        </div>
      </section>
    </Card>
  );
}

export default SkeletonCardPack;
