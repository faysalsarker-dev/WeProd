import { useState } from "react";
import { BookingCard } from "../component/Card";
import useAxios from "../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Button, IconButton, Input } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const Display = () => {
  const axiosCommon = useAxios();

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [queryKey, setQueryKey] = useState("");

  const onChange = ({ target }) => setSearch(target.value);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["product", page, queryKey],
    queryFn: async () => {
      const response = await axiosCommon.get(`/product?page=${page}&search=${queryKey}`);
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3">
        {data?.data?.map(pd => (
          <BookingCard key={pd._id} pd={pd}/>
        ))}
      </div>
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
    </div>
  );
};

export default Display;
