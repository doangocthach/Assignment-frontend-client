import React from "react";

export default ({ setSearchField, searchFields }) => {
  const search = React.useRef();
  return (
    <div className="flex-w flex-sb-m p-b-52">
      <div className="flex-w flex-l-m filter-tope-group m-tb-10">
        <button
          className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1"
          data-filter="*"
          onClick={(e) => {
            setSearchField({
              ...searchFields,
              page: 1,
              limit: 10,
              from: undefined,
              to: undefined,
              searchString: "",
            });
          }}
        >
          All Products
        </button>
        <button
          className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
          data-filter=".women"
          onClick={(e) => {
            setSearchField({ ...searchFields, searchString: "Women" });
          }}
        >
          Women
        </button>
        <button
          className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
          data-filter=".men"
          onClick={(e) => {
            setSearchField({ ...searchFields, searchString: "Man" });
          }}
        >
          Men
        </button>
      </div>
      <div className="flex-w flex-c-m m-tb-10">
        <div className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
          <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list" />
          <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none" />
          Filter
        </div>
        <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
          <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search" />
          <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none" />
          Search
        </div>
      </div>
      {/* Search product */}

      <form
        className="dis-none panel-search w-full p-t-10 p-b-15"
        onSubmit={(e) => {
          e.preventDefault();
          setSearchField({
            ...searchFields,
            searchString: search.current.value,
          });
        }}
      >
        <div className="bor8 dis-flex p-l-15">
          <input
            className="mtext-107 cl2 size-114 plh2 p-r-15"
            type="text"
            name="search-product"
            placeholder="Search"
            ref={search}
          />
          <button
            className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04"
            onClick={() => {
              setSearchField({
                ...searchFields,
                searchString: search.current.value,
              });
            }}
          >
            <i className="zmdi zmdi-search" />
          </button>
        </div>
      </form>
      <div className="dis-none panel-filter w-full p-t-10">
        <div className="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
          <div className="filter-col2 p-r-15 p-b-27">
            <div className="mtext-102 cl2 p-b-15">Price</div>
            <ul>
              <li className="p-b-6 filter-link stext-106 trans-04 filter-link-active">
                All
              </li>
              <li
                className="p-b-6 filter-link stext-106 trans-04"
                onClick={(e) => {
                  setSearchField({ ...searchFields, from: 0, to: 50 });
                }}
              >
                $0.00 - $50.00
              </li>
              <li
                className="p-b-6 filter-link stext-106 trans-04filter-link stext-106 trans-04"
                onClick={(e) => {
                  setSearchField({ ...searchFields, from: 50, to: 100 });
                }}
              >
                $50.00 - $100.00
              </li>
              <li
                className="p-b-6 filter-link stext-106 trans-04filter-link stext-106 trans-04"
                onClick={(e) => {
                  setSearchField({ ...searchFields, from: 100, to: 150 });
                }}
              >
                $100.00 - $150.00
              </li>
              <li
                className="p-b-6 filter-link stext-106 trans-04filter-link stext-106 trans-04"
                onClick={(e) => {
                  setSearchField({ ...searchFields, from: 150, to: 200 });
                }}
              >
                $150.00 - $200.00
              </li>
              <li
                className="p-b-6 filter-link stext-106 trans-04filter-link stext-106 trans-04"
                onClick={(e) => {
                  setSearchField({ ...searchFields, from: 200, to: 999999999 });
                }}
              >
                $200.00++
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
