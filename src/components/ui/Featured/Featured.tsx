import { useGetAllBikesQuery } from "../../../redux/features/bikes/bikesApi";

const Featured = () => {
  const { data, isError, error } = useGetAllBikesQuery(undefined);
  console.log(data, isError, error);

  return (
    <div className="min-h-screen">
      <h2>Featured Component Coming Soon</h2>
    </div> 
  );
};

export default Featured;
