import {
    Card,
    CardHeader,
} from "@material-tailwind/react";



const Cards = ({ img, title }) => {

    return (
        <Card className=" Card overflow-hidden w-[220px] h-[158.506px] rounded-sm ">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
            >
                <img
                    src={img}
                    alt="ui/ux review check"
                    className="h-full w-full"
                />
            </CardHeader>
            <div className="flex justify-center items-center text-black h-10">
                <span className="font-medium text-sm">
                    {title}
                </span>
            </div>
        </Card>
    );
};

export default Cards;