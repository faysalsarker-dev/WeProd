import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { Controller } from "react-hook-form";

export function DialogDefault({
  onSubmit,
  register,
  handleSubmit,
  handleReset,
  control
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
        className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto"
      >
          
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader className="text-2xl font-semibold text-gray-800">
            Filter Products
          </DialogHeader>
          <DialogBody className="space-y-4 relative">
                    <div className="absolute -top-16 right-0">
              <button onClick={handleReset}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
</button>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div className="flex-1">
                <Controller
                  name="brand"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select label="Brand" {...field} className="w-full">
                      <Option value="Apple">Apple</Option>
                      <Option value="Samsung">Samsung</Option>
                      <Option value="Sony">Sony</Option>
                      <Option value="Microsoft">Microsoft</Option>
                      <Option value="Asus">Asus</Option>
                      <Option value="Dell">Dell</Option>
                      <Option value="HP">HP</Option>
                      <Option value="Google">Google</Option>
                      <Option value="Bose">Bose</Option>
                      <Option value="Amazon">Amazon</Option>
                      <Option value="Canon">Canon</Option>
                      <Option value="Nikon">Nikon</Option>
                      <Option value="Garmin">Garmin</Option>
                      <Option value="Fitbit">Fitbit</Option>
                      <Option value="OnePlus">OnePlus</Option>
                      <Option value="Lenovo">Lenovo</Option>
                      <Option value="Razer">Razer</Option>
                      <Option value="Nintendo">Nintendo</Option>
                      <Option value="Dyson">Dyson</Option>
                      <Option value="LG">LG</Option>
                      <Option value="GoPro">GoPro</Option>
                      <Option value="Roku">Roku</Option>
                      <Option value="Corsair">Corsair</Option>
                      <Option value="HyperX">HyperX</Option>
                      <Option value="Anker">Anker</Option>
                    </Select>
                  )}
                />
              </div>

              <div className="flex-1">
                <Controller
                  name="category"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select label="Category" {...field} className="w-full">
                      <Option value="Smartphone">Smartphone</Option>
                      <Option value="Laptop">Laptop</Option>
                      <Option value="Camera">Camera</Option>
                      <Option value="Gaming Console">Gaming Console</Option>
                      <Option value="Home Appliance">Home Appliance</Option>
                      <Option value="Television">Television</Option>
                      <Option value="Tablet">Tablet</Option>
                      <Option value="Smart Speaker">Smart Speaker</Option>
                      <Option value="Smart Display">Smart Display</Option>
                      <Option value="Fitness Tracker">Fitness Tracker</Option>
                      <Option value="Action Camera">Action Camera</Option>
                      <Option value="Wireless Earbuds">Wireless Earbuds</Option>
                      <Option value="Monitor">Monitor</Option>
                      <Option value="Streaming Device">Streaming Device</Option>
                      <Option value="Speaker">Speaker</Option>
                      <Option value="Keyboard">Keyboard</Option>
                      <Option value="Smartwatch">Smartwatch</Option>
                      <Option value="Headset">Headset</Option>
                      <Option value="Storage">Storage</Option>
                      <Option value="Portable Charger">Portable Charger</Option>
                    </Select>
                  )}
                />
              </div>
            </div>

            <div className="text-center mt-4">
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
                  {...register("minimum")}
                  size="lg"
                  placeholder="Min price (e.g., $10)"
                  className="w-full"
                />
              </div>
              <Typography className="text-gray-700 font-medium my-1">to</Typography>
              <div className="flex-1 w-full">
                <Typography className="mb-1 font-medium text-gray-700">
                  Maximum Price
                </Typography>
                <Input
                  {...register("maximum")}
                  size="lg"
                  placeholder="Max price (e.g., $1000)"
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
            onClick={handleOpen}
              type="submit"
              variant="filled"
              color="green"
              className="bg-green-500 hover:bg-green-600"
            >
              <span>Apply Filters</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}
