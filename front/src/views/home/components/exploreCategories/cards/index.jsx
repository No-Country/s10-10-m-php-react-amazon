import {
    Card,
    CardHeader,
} from "@material-tailwind/react";
import { Link } from "wouter";




const Cards = ({ img, title }) => {

    return (
        <Link to="/dashboard">
            <Card className=" rounded-lg relative lg:w-[424px] w-[220px] lg:h-[159px] h-[158.506px] cursor-pointer" >
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                >
                    <img
                        src={img}
                        alt="img-businessCategory"
                        className=" lg:w-[424px] w-[220px] lg:h-[159px] h-[158.506px]  rounded-lg"
                    />
                </CardHeader>
                <div className="bg-[#101011cd] w-full h-full rounded-lg absolute top-0"></div>
                <div className="flex justify-center items-center text-colorNeutral3 h-10 absolute left-2 bottom-0">
                    <span className="font-bold text--[20px] z-10">
                        {title}
                    </span>
                </div>
            </Card>
        </Link>
    );
};

export default Cards;