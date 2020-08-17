import axios from "../utils/axios";
export default {
  fetchProducts: async ({ page, limit, from, to, searchString }) => {
    return axios
      .get(
        `/product/getProducts?page=${page}&limit=${limit}&searchString=${searchString}&from=${from}&to=${to}`
      )
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        return res;
      });
  },

  addProduct: async ({ state }) => {
    const {
      productName,
      description,
      price,
      category,
      size,
      color,
      quantity,
      detail,
      files,
    } = state;
    const data = new FormData();
    for (var x = 0; x < files.length; x++) {
      data.append("files", files[x]);
    }
    console.log(size, color, quantity);
    data.append("productName", productName);
    data.append("description", description);
    data.append("price", price);
    data.append("category", category);
    data.append("size", size);
    data.append("color", color);
    data.append("quantity", quantity);
    data.append("detail", detail);
    console.log(data);

    return axios
      .post("/product/insertProduct", data)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err.message;
      });
  },
  getProduct: async ({ id }) => {
    return axios
      .get(`/product/product-detail/${id}`)
      .then((res) => res.data)
      .catch((e) => e.message);
  },
};
