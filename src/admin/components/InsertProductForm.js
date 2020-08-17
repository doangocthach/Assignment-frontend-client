import React from "react";
import "./insertForm.css";
// import { Progress } from "reactstrap";
import Spinning from "../../common/Spinning";
import { connect } from "react-redux";
import { addProduct } from "../../redux/productActions";
import { getProducts } from "../../redux/productActions";
const ProductDetail = ({ setDetails, details, index }) => {
  const items = details;
  return (
    <div
      className="product-detail-wrapper"
      style={{ display: "flex", alignItems: "center" }}
    >
      <div className="product-detail-wrapper">
        <label htmlFor="size">Size</label>
        <input
          name="for"
          onChange={(e) => {
            //  const item = {...details[key]}
            items.size[index] = e.target.value;
            setDetails(items);
          }}
          value={items.size[index]}
        />
      </div>
      <div className="product-detail-wrapper">
        <label htmlFor="color">Color</label>
        <input
          name="color"
          onChange={(e) => {
            items.color[index] = e.target.value;
            setDetails(items);
          }}
          value={items.color[index]}
        />
      </div>
      <div className="product-detail-wrapper">
        <label htmlFor="quantity">Quantity</label>
        <input
          name="quantity"
          type="number"
          onChange={(e) => {
            items.quantity[index] = e.target.value;
            setDetails(items);
          }}
          value={items.quantity[index]}
        />
      </div>
    </div>
  );
};

const AddProductForm = ({
  productIdAdded,
  pending,
  error,
  onAddProduct,
  page,
  limit,
  products,
  onFetchProduct,
}) => {
  const [details, setDetails] = React.useState([]);
  const [state, setstate] = React.useState({
    productName: "",
    price: 0,
    description: "",
    category: "",
    files: [],
    size: [],
    color: [],
    quantity: [],
    clear: false,
  });
  // const details = [];

  const [numbOfDetail, setNumbOfDetail] = React.useState(1);

  const [loading, setLoading] = React.useState(false);
  const handleUploadImages = (e) => {
    const div = document.createElement("div");
    div.className = "image-wrapper";
    div.style.height = "100px";
    div.style.width = "100px";
    div.style.border = "2px solid";
    div.style.textAlign = "center";
    div.style.margin = "1rem";
    const wrapper = document.getElementById("images-wrapper");
    if (e === "clear") {
      wrapper.innerHTML = "";
      return;
    }
    if (e.target.files) {
      [].forEach.call(e.target.files, readAndPreview);
    }
    function readAndPreview(file) {
      // Make sure `file.name` matches our extensions criteria
      if (!/\.(jpe?g|png|gif)$/i.test(file.name)) {
        return alert(file.name + " is not an image");
      } // else...

      var reader = new FileReader();
      reader.addEventListener("load", function () {
        var image = new Image();
        image.height = 100;
        image.style.maxWidth = "100%";
        image.style.maxHeight = "100%";
        image.style.objectFit = "contain";
        image.title = file.name;
        image.src = reader.result;
        div.appendChild(image);
        wrapper.appendChild(div);
      });

      reader.readAsDataURL(file);
    }
  };

  return (
    <React.Fragment>
      <div>
        {/* Modal */}
        <div
          className="modal fade"
          id="basicExampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  style={{ fontWeight: "bold", textTransform: "uppercase" }}
                  className="modal-title"
                  id="exampleModalLabel"
                >
                  Add new product
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body" style={{ display: "flex" }}>
                <div className="left-content-form main-content-form">
                  <label htmlFor="product_name">Product Name</label>
                  <input
                    autoComplete="off"
                    name="product_name"
                    onChange={(e) => {
                      setstate({ ...state, productName: e.target.value });
                    }}
                    value={state.productName}
                  />
                  <label htmlFor="price">Price</label>
                  <input
                    type="number"
                    name="price"
                    onChange={(e) => {
                      setstate({ ...state, price: e.target.value });
                    }}
                    value={state.price}
                  />
                  <label htmlFor="description">Description</label>
                  <textarea
                    rows={5}
                    onChange={(e) => {
                      setstate({ ...state, description: e.target.value });
                    }}
                    value={state.description}
                  ></textarea>
                  <label htmlFor="description">Category</label>
                  <input
                    onChange={(e) => {
                      setstate({ ...state, category: e.target.value });
                    }}
                    value={state.category}
                  />
                </div>
                <div className="right-content-form main-content-form">
                  <label
                    htmlFor="image"
                    style={{
                      border: " 1px solid",
                      padding: "1rem",
                      textAlign: "center",
                      textTransform: "uppercase",
                    }}
                  >
                    + Add Image
                  </label>
                  <input
                    id="image"
                    style={{ display: "none" }}
                    name="image"
                    type="file"
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length) {
                        handleUploadImages(e);
                        console.log(e.target.files);
                        setstate({
                          ...state,
                          files: [...state.files, e.target.files[0]],
                        });
                      }
                    }}
                  />
                  <div id="images-wrapper" style={{ display: "flex" }}></div>
                  <label>Product Detail</label>
                  <ProductDetail
                    key={0}
                    setDetails={setstate}
                    details={state}
                    index={0}
                  />
                  {details.map((e, index) => e)}

                  <button
                    type="button"
                    className="btn btn-secondary"
                    style={{ float: "right", marginTop: "1rem" }}
                    onClick={() => {
                      setNumbOfDetail(numbOfDetail + 1);
                      setDetails([
                        ...details,
                        <ProductDetail
                          key={numbOfDetail}
                          setDetails={setstate}
                          details={state}
                          index={numbOfDetail}
                        />,
                      ]);
                    }}
                  >
                    Add more Detail
                  </button>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={(e) => {
                    setLoading(true);
                    setTimeout(() => {
                      setLoading(false);
                      onAddProduct({ state });
                      onFetchProduct({ page, limit });
                      setstate({
                        productName: "",
                        price: 0,
                        description: "",
                        category: "",
                        files: [],
                        size: [],
                        color: [],
                        detail: details,
                        quantity: [],
                      });
                      handleUploadImages("clear");
                    }, 2000);
                    console.log(pending);
                  }}
                >
                  {loading && !pending ? (
                    <Spinning />
                  ) : (
                    <React.Fragment> Add Product</React.Fragment>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  productIdAdded: state.product.productIdAdded,
  pending: state.product.addProductPending,
  error: state.product.error,
});

const mapDispatchToProps = (dispatch) => ({
  onAddProduct: ({ state }) =>
    dispatch(
      addProduct({
        state,
      })
    ),
  onFetchProduct: ({ page, limit }) => dispatch(getProducts({ page, limit })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProductForm);
