import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Product_Header from "./Product_Header";
import Product_Type from "./Product_Type";
import Loading from "../loading/Loading";
import Product_Core from "./Product_Core";
import { getdata } from "../../services/coffe";
import ErrorQuery from "../error/ErrorQuery";

const Product = () => {
  const [typeprd, setTypePrd] = useState<string>("monmoiphaithu");
  const { data, isLoading, isError } = useQuery({
    queryKey: ["coffe"],
    queryFn: async () => {
      const data = await getdata();
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorQuery />;
  }

  return (
    <section className="w-full py-[50px]">
      <div className="sm:px-[15px] w-full overflow-hidden flex flex-col">
        <Product_Header />
        <Product_Type data={data!.data.data.type} typeprd={typeprd} setTypePrd={setTypePrd} />
        <Product_Core data={data!.data.data.data} typeprd={typeprd} />
      </div>
    </section>
  );
};

export default Product;
