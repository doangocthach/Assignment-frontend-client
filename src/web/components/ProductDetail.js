import React from "react";
import { Link } from "react-router-dom";
import { getProduct } from "../../redux/productActions";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const mapData = (product) => {
  return product.image.map((img) => (
    <div
      className="item-slick3"
      data-thumb={`${process.env.REACT_APP_API_HOST}${img.filename}`}
    >
      <div className="wrap-pic-w pos-relative">
        <img
          src={`${process.env.REACT_APP_API_HOST}${img.filename}`}
          alt="IMG-PRODUCT"
        />
        <a
          className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
          href={`${process.env.REACT_APP_API_HOST}${img.filename}`}
        >
          <i className="fa fa-expand" />
        </a>
      </div>
    </div>
  ));
};
const ProductDetail = ({ product, pending, error, onGetProduct, state }) => {
  const { id } = useParams();
  React.useEffect(() => {
    onGetProduct({ id });
  }, [id, onGetProduct]);
  const quantity = React.useRef();
  const size = React.useRef();
  const color = React.useRef();

  return (
    <div>
      <div className="container">
        <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
          <Link to="/" className="stext-109 cl8 hov-cl1 trans-04">
            Home
            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true" />
          </Link>
          <a href="product.html" className="stext-109 cl8 hov-cl1 trans-04">
            Men
            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true" />
          </a>
          <span className="stext-109 cl4">Lightweight Jacket</span>
        </div>
      </div>
      {product.image && (
        <section className="sec-product-detail bg0 p-t-65 p-b-60">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-7 p-b-30">
                <div className="p-l-25 p-r-30 p-lr-0-lg">
                  <div className="wrap-slick3 flex-sb flex-w">
                    <div className="wrap-slick3-dots" />
                    <div className="wrap-slick3-arrows flex-sb-m flex-w" />
                    <div className="slick3 gallery-lb">{mapData(product)}</div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 p-b-30">
                <div className="p-r-50 p-t-5 p-lr-0-lg">
                  <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                    {product.productName}
                  </h4>
                  <span className="mtext-106 cl2">${product.price}</span>
                  <p className="stext-102 cl3 p-t-23">{product.description}</p>
                  <div className="p-t-33">
                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-203 flex-c-m respon6">Size</div>
                      <div className="size-204 respon6-next">
                        <div className="rs1-select2 bor8 bg0">
                          <select className="js-select2" name="time" ref={size}>
                            {product.detail.map((e) => {
                              return <option value={e.size}>{e.size}</option>;
                            })}
                          </select>
                          <div className="dropDownSelect2" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-203 flex-c-m respon6">Color</div>
                      <div className="size-204 respon6-next">
                        <div className="rs1-select2 bor8 bg0">
                          <select
                            className="js-select2"
                            name="time"
                            ref={color}
                          >
                            {product.detail.map((e) => {
                              return <option>{e.color}</option>;
                            })}
                          </select>
                          <div className="dropDownSelect2" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-204 flex-w flex-m respon6-next">
                        <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                          <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                            <i className="fs-16 zmdi zmdi-minus" />
                          </div>
                          <input
                            className="mtext-104 cl3 txt-center num-product"
                            type="number"
                            name="num-product"
                            defaultValue={1}
                            ref={quantity}
                          />
                          <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                            <i className="fs-16 zmdi zmdi-plus" />
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            const lStorage = JSON.parse(
                              localStorage.getItem("@Cart")
                            );
                            console.log(lStorage);
                            if (lStorage === null) {
                              localStorage.setItem(
                                "@Cart",
                                JSON.stringify([
                                  {
                                    product: product,
                                    color: color.current.value,
                                    size: size.current.value,
                                    quantity: quantity.current.value,
                                  },
                                ])
                              );
                            } else {
                              lStorage.push({
                                product: product,
                                color: color.current.value,
                                size: size.current.value,
                                quantity: quantity.current.value,
                              });
                              localStorage.setItem(
                                "@Cart",
                                JSON.stringify(lStorage)
                              );
                            }
                          }}
                          className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                    <div className="flex-m bor9 p-r-10 m-r-11">
                      <a
                        href="# "
                        className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                        data-tooltip="Add to Wishlist"
                      >
                        <i className="zmdi zmdi-favorite" />
                      </a>
                    </div>
                    <a
                      href="# "
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Facebook"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                    <a
                      href="# "
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Twitter"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                    <a
                      href="# "
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Google Plus"
                    >
                      <i className="fa fa-google-plus" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  product: state.product.product,
  pending: state.product.pending,
  err: state.product.error,
  state,
});

const mapDispatchToProps = (dispatch) => ({
  onGetProduct: ({ id }) => dispatch(getProduct({ id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
