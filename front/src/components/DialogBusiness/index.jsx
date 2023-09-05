import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export function DialogBusiness({setOpen, open, selectedBusiness}) {
 
  const handleOpen = () => setOpen(!open);
  return (
    <>
      
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          <div className="flex">
            <img src={selectedBusiness.avatar} alt="avatar" className="object-contain w-40 h-40"/>
            <div>
              <h1>{selectedBusiness.name}</h1>
              <p>{selectedBusiness.address} {selectedBusiness.city} {selectedBusiness.province} {selectedBusiness.country}</p>
              <p></p>
            </div>
          </div>
          
          </DialogHeader>
        <DialogBody divider>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}