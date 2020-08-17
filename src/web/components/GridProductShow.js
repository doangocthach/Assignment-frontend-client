import React from "react";
import { connect } from "react-redux";
import Spinning from "../../common/Spinning";
import { getProducts } from "../../redux/productActions";
import { Link } from "react-router-dom";

const GridProductShow = ({ onFetchProduct, products, pending, error }) => {
  return (
    <React.Fragment>
      {pending === false ? (
        <div className="row isotope-grid">
          {products.map((e) => {
            return (
              <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men">
                {/* Block2 */}
                <div className="block2">
                  <div className="block2-pic hov-img0">
                    <img
                      className="icon-heart1 dis-block trans-04"
                      src={`${process.env.REACT_APP_API_HOST}${e.image[0].filename}`}
                      alt="ICON"
                    />
                    <Link
                      to={`/product-detail/${e._id}`}
                      className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                    >
                      Quick View
                    </Link>
                  </div>
                  <div className="block2-txt flex-w flex-t p-t-14">
                    <div className="block2-txt-child1 flex-col-l ">
                      <Link
                        to={`/product-detail/${e._id}`}
                        className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                      >
                        {e.productName}
                      </Link>
                      <span className="stext-105 cl3">${e.price}</span>
                    </div>
                    <div className="block2-txt-child2 flex-r p-t-3">
                      <Link
                        to={`/product-detail/${e._id}`}
                        className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                      >
                        <img
                          className="icon-heart1 dis-block trans-04"
                          src="images/icons/icon-heart-01.png"
                          alt="ICON"
                        />
                        <img
                          className="icon-heart2 dis-block trans-04 ab-t-l"
                          src="images/icons/icon-heart-02.png"
                          alt="ICON"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <Spinning size={"5rem"} />
      )}
    </React.Fragment>
  );
};
export default GridProductShow;
// const mapStateToProps = (state) => ({
//   products: state.product.products,
//   pending: state.product.pending,
//   error: state.product.error,
//   state,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onFetchProduct: ({ page, limit }) => dispatch(getProducts({ page, limit })),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(GridProductShow);
