import {
  Card,
  CardHeader,
  Avatar,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import profile from "../../../../assets/profileExample.png";
import startBasic from "../../../../assets/icons/starTransparents.svg";
import iconHeart from "../../../../assets/icons/heart.svg";

const Cards = ({ item, handleOpen }) => {
  const tags = JSON.parse(item.tags);
  const timeStartParts = item.time_start.split(" ")[1].split(":");
  const timeStart = `${timeStartParts[0]}:${timeStartParts[1]}`;

  const timeEndParts = item.time_end.split(" ")[1].split(":");
  const timeEnd = `${timeEndParts[0]}:${timeEndParts[1]}`;
  if (!item) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Card className="w-[22rem]  overflow-hidden rounded-t-xl rounded-b-none mb-10 shadow-none border-x-2 border-colorNeutral2">
        <div className="relative">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none h-[9.834rem]"
          >
            <img
              src={item.photo_url}
              alt="imgPack"
              className="absolute -top-8 w-full"
            />
          </CardHeader>
          <div className="flex items-center justify-center absolute right-3 bottom-1 bg-colorNeutral3 rounded-md">
            <h3 className="text-sizeNote font-bold text-colorNeutral1 px-2">
              {item.shop.name}
            </h3>
          </div>
        </div>
        <section className="m-4">
          <div className=" flex items-center justify-between text-colorNeutral1">
            <h3 className="text-sizeText  font-bold">{item.name}</h3>
            <div className="flex items-center justify-end text-sizeText w-40 ">
              <span className="IconStart">
                <img src={startBasic} alt="iconStart" />
              </span>
              <span>{item.shop.stars}</span>
              <span className="ml-3">{"150 m."}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-sizeNote my-6 text-colorPrimary font-bold">
            {tags &&
              tags.map((tag, index) => (
                <span
                  className="bg-buttonFilledColor px-2 py-[1px] rounded-md"
                  key={index}
                >
                  {tag}
                </span>
              ))}
          </div>

          <div className="text-sizeNote font-bold flex items-center justify-between">
            <span className="text-[12px] text-colorNeutral1">
              Retirar entre{" "}
              <span className="border-[2px] border-colorNeutral2 px-2 py-[2px] rounded-md">
              {timeStart} y {timeEnd}
              </span>
            </span>
            <span className="text-[20px] text-colorPrimary font-extrabold">
              $ {item.price}
            </span>
          </div>
        </section>

        <div className="w-11/12 h-[1px] bg-colorNeutral2 m-auto"></div>

        <Button
          className="rounded-full w-[300px] normal-case m-auto px-[24px] py-[16px] mb-4 mt-6 bg-colorPrimary"
          onClick={handleOpen}
        >
          <span className="text-sizeButtonCTAs">Comprar</span>
        </Button>
      </Card>
    </div>
  );
};

export default Cards;
