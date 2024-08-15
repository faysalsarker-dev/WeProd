import { useState } from "react";
import { BookingCard } from "../component/Card";
import useAxios from "../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Button, Card, CardBody, CardFooter, CardHeader, IconButton, Input, Option, Select, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { DialogDefault } from "../component/PopUp";
















const Display = () => {
  const axiosCommon = useAxios();
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [queryKey, setQueryKey] = useState("");
  const [maximum, setMaximum] = useState("");
  const [minimum, setMinimum] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");




  const onChange = ({ target }) => setSearch(target.value);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["product", page, queryKey, value, category, maximum, minimum, brand],
    queryFn: async () => {
      const response = await axiosCommon.get(
        `/product?page=${page}&search=${queryKey}&sort=${value}&brand=${brand}&category=${category}&minimum=${minimum}&maximum=${maximum}`
      );
      return response.data;
    },
    keepPreviousData: true,
  });

  const handlePageChange = (newPage) => setPage(newPage);

  const next = () => {
    if (page === data?.totalPages) return;
    handlePageChange(page + 1);
  };

  const prev = () => {
    if (page === 1) return;
    handlePageChange(page - 1);
  };

  const getItemProps = (index) => ({
    variant: page === index ? "filled" : "text",
    color: "gray",
    onClick: () => handlePageChange(index),
  });

  const handleSearch = () => {
    setPage(1);
    setQueryKey(search);
    refetch();
  };

  const onFilter = () => {
    console.log('Filter applied with values:', { page, queryKey, value, category, minimum, maximum, brand });
    refetch();
  };

  return (
    <div className="px-4">
      <div className="relative flex w-full mt-5">
        <Input
          type="text"
          label="type here"
          value={search}
          onChange={onChange}
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          size="sm"
          disabled={!search}
          onClick={handleSearch}
          className="!absolute right-1 top-1 rounded bg-primary"
        >
          Search
        </Button>
      </div>
      <div>
      <div className="flex gap-4 items-center my-2">
<div className="flex-1">
        <Select label="Sorting By Price"
          value={value}
          onChange={(val) =>{ setValue(val),refetch()}}>
          <Option value="Low to High">Low to High</Option>
          <Option value="High to Low">High to Low</Option>
          
        </Select>
</div>
<div>
  <DialogDefault
       setMaxium={setMaximum}
       setMinimum={setMinimum}
       setBrand={setBrand}
       setCategory={setCategory}
       maxiumValue={maximum}
       minimumValue={minimum}
       brandValue={brand}
       categoryValue={category}
       onFilter={onFilter}
  />
</div>
    </div>
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3 min-h-screen">
        {isLoading?(
          <>
          <CardPlacehoderSkeleton/>
          <CardPlacehoderSkeleton/>
          <CardPlacehoderSkeleton/>
          <CardPlacehoderSkeleton/>
          <CardPlacehoderSkeleton/>
          <CardPlacehoderSkeleton/>
        
        </>):(data?.data?.map((pd) => (
          <BookingCard key={pd._id} pd={pd} />
        )))}
  {
  data?.data?.length === 0 && (
    <div className="flex justify-center items-center col-span-4"><h3 className="text-xl font-bold">No data available</h3></div>
  )
}

      </div>
      {data?.totalPages > 0 && (
  <div className="flex justify-center mt-4">
    <Button
      variant="text"
      className="flex items-center gap-2"
      onClick={prev}
      disabled={page === 1}
    >
      <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
    </Button>
    <div className="flex items-center gap-2">
      {Array.from({ length: data?.totalPages }, (_, index) => (
        <IconButton key={index + 1} {...getItemProps(index + 1)}>
          {index + 1}
        </IconButton>
      ))}
    </div>
    <Button
      variant="text"
      className="flex items-center gap-2"
      onClick={next}
      disabled={page === data?.totalPages}
    >
      Next
      <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
    </Button>
  </div>
)}

    </div>
  );
};

export default Display;



 
 function CardPlacehoderSkeleton() {
  return (
    <Card className="mt-6  animate-pulse">
      <CardHeader
        shadow={false}
        floated={false}
        className="relative grid h-56 place-items-center bg-gray-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-12 w-12 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </CardHeader>
      <CardBody>
        <Typography
          as="div"
          variant="h1"
          className="mb-4 h-3 w-56 rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2 w-full rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2 w-full rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2 w-full rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2 w-full rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          disabled
          tabIndex={-1}
          className="h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
        >
          &nbsp;
        </Button>
      </CardFooter>
    </Card>
  );
}