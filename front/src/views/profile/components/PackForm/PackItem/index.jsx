import { faCheck, faWarning, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton, Input } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import PackDetail from "../PackDetail";

const PackItem = ({item, handleRemovePack, setPacks, packs}) => {

    const [openDetail, setOpenDetail] = useState(false)
    const [name, setName] = useState(item.name);
    const [stock, setStock] = useState(item.stock);
    const [time_start, setTime_start] = useState(item.time_start);
  const [time_end, setTime_end] = useState(item.time_end);
  const [tags, setTags] = useState(item.tags);
  const [price, setPrice] = useState(item.price);
    const [description, setDescription] = useState(item.description)
  const [fieldsCompleted, setFieldsCompleted] = useState(false)
  const [buttonDetail, setButtonDetail] = useState(false)

    const handleSubmitPack = () => {
        if (name && stock)
        {
            let dateStart = new Date();
            const [hoursStart, minutesStart] = time_start.split(":");
            dateStart.setHours(parseInt(hoursStart, 10));
            dateStart.setMinutes(parseInt(minutesStart, 10));
        
            let dateEnd = new Date();
            const [hoursEnd, minutesEnd] = time_end.split(":");
            dateEnd.setHours(parseInt(hoursEnd, 10));
            dateEnd.setMinutes(parseInt(minutesEnd, 10));
            const newPack = {...item, name, stock, time_start: dateStart, time_end: dateEnd, tags, price, description }
            const packIndex = packs.findIndex((pack) => pack.id === newPack.id)
            if (packIndex !== -1) {
                const updatedPacks = [...packs];
                updatedPacks[packIndex] = newPack;
                setPacks(updatedPacks);
                handleOpenDetail()
                setFieldsCompleted(true)
            }
           
            
        }
       
    }
    const handleOpenDetail = () => {
        if (name && stock)
        setOpenDetail(!openDetail)
    }



    useEffect(() => {
        if (name && stock && price && description && time_start && time_end) {
            setFieldsCompleted(true)
        } else {
            setFieldsCompleted(false)
        }
        if (name && stock) {
            setButtonDetail(true)
        } else {
            setButtonDetail(false)
        }
    }, [name, price, stock, description, time_start, time_end])


  return (
    <div className="w-full">
    <div className="flex justify-between w-full items-center">
    <IconButton
          variant="outlined"
          size="sm"
          className="rounded-full"
          onClick={()=>handleRemovePack(item.id)}
        >
          <FontAwesomeIcon icon={faX} />
         
        </IconButton>
      <Input
        type="text"
        placeholder="Nombre del pack"
        className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
        labelProps={{
          className: "hidden",
        }}
        containerProps={{ className: "max-w-[200px]" }}
        value={name} 
            onChange={(e) => setName(e.target.value)} 
      />
      
      <Input
        type="number"
        placeholder="0"
        className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
        labelProps={{
          className: "hidden ",
        }}
        containerProps={{ className: "max-w-[80px] min-w-[80px]" }}
        value={stock} 
            onChange={(e) => setStock(e.target.value)} 
      />
      {fieldsCompleted?  (
        <FontAwesomeIcon icon={faCheck}/>
      ) : (<FontAwesomeIcon icon={faWarning}/>)}
    </div>
    <p className={buttonDetail ? "text-textButton font-sizeTextButton my-2 text-black cursor-pointer text-colorPrimary font-weightTitle" : "custom-textButton my-2"} onClick={handleOpenDetail}>Gestionar pack</p>
        {openDetail &&  (
    <PackDetail open={openDetail} handleOpen={handleOpenDetail} handleSubmitPack={handleSubmitPack} time_start={time_start} time_end={time_end} setTime_start={setTime_start} setTime_end={setTime_end} description={description} setDescription={setDescription} price={price} setPrice={setPrice} tags={tags} setTags={setTags}/>
  )}
    </div>
  );
  
};

export default PackItem;
