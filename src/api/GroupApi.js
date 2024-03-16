import Api from "./Api";

const url = "/u";

const getAll = () => {
  return Api.get(url);
};

// export
const groupApi = { getAll };
export default groupApi;
