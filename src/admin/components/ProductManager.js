import React from "react";
import { connect } from "react-redux";
// import fetchProductsAction from "../../redux/fetchProduct";
import Spinning from "../../common/Spinning";
import { getProducts } from "../../redux/productActions";
import InserProductForm from "./InsertProductForm";
const ProductManagement = ({
  onFetchProduct,
  products,
  pending,
  error,
  state,
}) => {
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
    <div className="container">
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#basicExampleModal"
      >
        Add New Product
      </button>
      {pending === false ? (
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr>
                  <th scope="row">{product.productName}</th>
                  <td>
                    {product.image[0] && (
                      <img
                        style={{ height: "50px" }}
                        alt="imag"
                        src={`${process.env.REACT_APP_API_HOST}${product.image[0].filename}`}
                      />
                    )}
                  </td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <Spinning size={"4rem"} />
      )}
      <InserProductForm />
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductManagement);
