import img from "../assets/assets_images/emptyCart.svg";
function EmptyCart() {
  console.log(img);
  return (
    <>
      <div className="container mx-auto p-12 max-w-lg text-3xl lg:text-4xl">
        <img src={img} />
        <h2 className="my-5">Empty Basket</h2>
        <p className="text-grey text-sm my-5 lg:text-lg">
          You basket is still empty, browser the delicious and mouth watering
          menu from the bardeal
        </p>
        <button className="inline-block border bg-main text-white text-base rounded-3xl my-5 w-64 lg:w-72 h-10 lg:h-12 hover:bg-grey">
          Shopping Now
        </button>
      </div>
    </>
  );
}

export default EmptyCart;
