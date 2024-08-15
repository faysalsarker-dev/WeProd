import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Typography,
} from "@material-tailwind/react";

export function DialogDefault({
  setMaxium,
  setMinimum,
  setBrand,
  setCategory,
  maxiumValue,
  minimumValue,
  brandValue,
  categoryValue,
  onFilter
}) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
        className="flex items-center space-x-2 bg-primary text-white hover:bg-gray-800 transition duration-300"
        onClick={handleOpen}
      >
        <span>Filters</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
          />
        </svg>
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        className="bg-white shadow-lg rounded-lg p-6"
      >
        <DialogHeader className="text-2xl font-semibold text-gray-800">
          Filter Products
        </DialogHeader>
        <DialogBody className="space-y-4">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <Typography className="mb-1 font-medium text-gray-700">
                Brand Name
              </Typography>
              <Input
                size="lg"
                placeholder="Enter brand name (e.g., Nike, Apple)"
                value={brandValue}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <Typography className="mb-1 font-medium text-gray-700">
                Category Name
              </Typography>
              <Input
                size="lg"
                placeholder="Enter category (e.g., Electronics, Clothing)"
                value={categoryValue}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full"
              />
            </div>
          </div>
          <div className="text-center">
            <Typography className="text-lg font-semibold text-gray-800">
              Price Range
            </Typography>
          </div>
          <div className="flex flex-col md:flex-row items-center space-x-2">
            <div className="flex-1 w-full">
              <Typography className="mb-1 font-medium text-gray-700">
                Minimum Price
              </Typography>
              <Input
                size="lg"
                placeholder="Min price (e.g., $10)"
                value={minimumValue}
                onChange={(e) => setMinimum(e.target.value)}
                className="w-full"
              />
            </div>
            <Typography className="text-gray-700 font-medium my-1">to</Typography>
            <div className="flex-1 w-full">
              <Typography className="mb-1 font-medium text-gray-700">
                Maximum Price
              </Typography>
              <Input
                size="lg"
                placeholder="Max price (e.g., $1000)"
                value={maxiumValue}
                onChange={(e) => setMaxium(e.target.value)}
                className="w-full"
              />
            </div>
          </div>
          <Typography className="mt-4 text-sm text-gray-500">
            Tip: You can refine your search by providing more specific details.
          </Typography>
        </DialogBody>
        <DialogFooter className="flex justify-end space-x-2">
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="filled"
            color="green"
            onClick={()=>(handleOpen(),onFilter())}
            className="bg-green-500 hover:bg-green-600"
          >
            <span>Apply Filters</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}