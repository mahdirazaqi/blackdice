import axios, { AxiosResponse } from "axios";
import { urlParser } from "../common/url-parser";

const PriceListService = {
  getPriceList: async (): Promise<AxiosResponse> => {
    return axios.get(urlParser("/products", "?sort=title", "&limit=500"));
  },
};

export default PriceListService;
