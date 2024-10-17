import { createQueryClient } from "@/lib/createQueryClient";
import { QueryClientProvider, useQuery } from "@tanstack/react-query";

const queryClient = createQueryClient();

type Item = {
  id: number;
  name: string;
};

const getItems = async (): Promise<Item[]> => {
  const response = await fetch("http://localhost:3000/api/items");
  return response.json();
};

const Implementation = () => {
  const query = useQuery({ queryKey: ["todos"], queryFn: getItems });

  if (!query.isSuccess) return null;

  return (
    <div>
      {query.data.map((item) => (
        <div key={item.id} className="font-bold">
          {item.name}
        </div>
      ))}
    </div>
  );
};

export const ItemList = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Implementation />
    </QueryClientProvider>
  );
};
