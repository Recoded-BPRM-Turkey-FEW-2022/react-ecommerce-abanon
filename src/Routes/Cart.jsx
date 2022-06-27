import React from "react";
import { useQuery } from "react-query";
import DisplayCart from "../components/DisplayCart";

const Cart = () => {
  // const queryClient = new useQueryClient()
  const { isLoading, error, data } = useQuery(
    "cart",
    () =>
      fetch(`http://localhost:3000/cart`)
        .then((res) => res.json())
        .then((data) => {
          return data;
        })
    // {onSuccess :  ()=> {queryClient.invalidateQueries('cart')}}
  );
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <DisplayCart data={data} />
    </div>
  );
};

export default Cart;
