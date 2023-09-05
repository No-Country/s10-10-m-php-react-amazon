import {
    Card,
    CardHeader,
    Avatar,
    Tooltip,
    Button,
} from "@material-tailwind/react";
import profile from "../../../../assets/profileExample.png"
import startBasic from "../../../../assets/icons/starTransparents.svg"
import iconHeart from "../../../../assets/icons/heart.svg"


const Cards = ({item, handleOpen}) => {


    if (!item) {
    return <div>Loading...</div>; 
  }
    return (
        <div>
            <Card className="w-[22rem] h-[22.063rem] overflow-hidden rounded-sm mt-4 mb-10">
                <div className="relative">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded-none h-[9.834rem]"
                    >
                        <img
                            src={item.img}
                            alt="imgPack"
                            className="absolute -top-8 w-full"
                        />
                    </CardHeader>
                    <span className="absolute top-3 right-3">
                        <img src={iconHeart} alt="IconHeart" />
                    </span>
                    <section className="flex items-center justify-between absolute right-3 bottom-1">
                        <div className="flex items-center">
                            <Tooltip content="Natali Craig">
                                <Avatar
                                    size="sm"
                                    variant="circular"
                                    alt="natali craig"
                                    src={item.shop.avatar}
                                    className="border-2 border-white hover:z-10"
                                />
                            </Tooltip>
                            <h3 className="text-sizeNote font-bold ml-2 text-[#27272A]">{item.shop.name}</h3>
                        </div>
                    </section>
                </div>
                <section className="m-4">
                    <h3 className="text-[#27272A] text-sizeText  font-weightSubtitle">{item.name}</h3>
                    <span className="font-bold text-[12px] text-[#27272A]">Buscalo entre las {item.time}</span>
                    <div className="w w-11/12 flex justify-between item-center">
                        <div className="text-sizeNote font-bold flex text-[#3F3F46]">
                            <span className="IconStart"><img src={startBasic} alt="iconStart" /></span>
                            <span>{item.shop.stars}</span>
                            <span className="ml-3"></span>
                        </div>
                        <span className="text-[18px] text-colorPrimary font-extrabold">$ {item.price}</span>
                    </div>
                </section>
                <Button className="rounded-full w-[300px] normal-case m-auto px-[24px] py-[16px] mb-4 mt-6 bg-colorPrimary" onClick={handleOpen}>
                    <span className="text-sizeButtonCTAs">Comprar</span>
                </Button>
            </Card>
        </div>
    );
};

export default Cards;