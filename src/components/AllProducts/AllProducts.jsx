import Product from "./Product/Product";

const AllProducts = ({ handleText, innerPage }) => {
  return (
    <div>
      {!innerPage && (
        <div className="my-4 text-lg font-medium uppercase relative ">
          {handleText}
          <div className="absolute bottom-0 left-0 w-10 h-[2px] bg-[#8e2de2]"></div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-6">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default AllProducts;
