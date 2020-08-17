import React from "react";
import Filter from "./Filter";
import GridProductsShow from "./GridProductShow";
import ModalProductDetail from "./ModelProductDetail";
import { getProducts } from "../../redux/productActions";
import { connect } from "react-redux";
const Products = ({ onFetchProduct, products, pending, error, state }) => {
  const [searchFields, setSearchField] = React.useState({
    page: 1,
    limit: 10,
    from: undefined,
    to: undefined,
    searchString: "",
  });

  React.useEffect(() => {
    onFetchProduct({
      page: searchFields.page,
      limit: searchFields.limit,
      from: searchFields.from,
      to: searchFields.to,
      searchString: searchFields.searchString,
    });
  }, [onFetchProduct, searchFields]);
  return (
    <section className="bg0 p-t-23 p-b-140">
      <div className="container">
        <div className="p-b-10">
          <h3 className="ltext-103 cl5">Product Overview</h3>
        </div>
        <Filter setSearchField={setSearchField} searchFields={searchFields} />
        <GridProductsShow
          onFetchProduct={onFetchProduct}
          products={products}
          pending={pending}
          error={error}
          state={state}
          page={searchFields.page}
          limit={searchFields.limit}
        />
        <div className="flex-c-m flex-w w-full p-t-45">
          <a
            href="# "
            className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
          >
            Load More
          </a>
        </div>
      </div>
      <ModalProductDetail />
    </section>
  );
};

const mapStateToProps = (state) => ({
  products: state.product.products,
  pending: state.product.pending,
  error: state.product.error,
  state,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchProduct: ({ page, limit, from, to, searchString }) =>
    dispatch(getProducts({ page, limit, from, to, searchString })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
