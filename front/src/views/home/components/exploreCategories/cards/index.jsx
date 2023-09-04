import {
    Card,
    CardHeader,
} from "@material-tailwind/react";
import { Link } from "wouter";




const Cards = ({ img, title }) => {

    return (
        <Link>
            <Card className=" rounded-lg relative w-[220px] h-[158.506px]" >
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-none"
                >
                    <img
                        src={img}
                        alt="ui/ux review check"
                        className="w-[220px] h-[158.506px]  rounded-lg"
                    />
                </CardHeader>
                <div className="flex justify-center items-center text-colorNeutral3 h-10 absolute">
                    <span className="font-bold text-sm">
                        {title}
                    </span>
                </div>
            </Card>
        </Link>
    );
};

export default Cards;