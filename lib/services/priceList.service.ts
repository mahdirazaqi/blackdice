import axios, { AxiosResponse } from "axios";
import urlGenerator from "../common/urlGenerator";

const PriceListService = {
  getPriceList: async (): Promise<AxiosResponse> => {
    return axios.get(urlGenerator("/products", "?sort=title", "&limit=500"));
  },
};

export default PriceListService;
