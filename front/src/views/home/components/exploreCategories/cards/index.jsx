import {
    Card,
    CardHeader,
} from "@material-tailwind/react";


const Cards = ({ img, title }) => {
    return (
        <Card className="overflow-hidden w-widthMainBtn h-heightCardsHome rounded-sm ">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
            >
                <img
                    src={img}
                    alt="ui/ux review check"
                    className="h-heightImgCardHome"
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