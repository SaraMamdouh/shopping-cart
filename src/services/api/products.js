import request from "../axios";
import { LIST_PRODUCTS, LIST_SHOPS } from "../url";

function getLocation() {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    });
  });
}

const getCurrentPosition = async () => {
  try {
    const position = await getLocation();
    const { longitude, latitude } = position?.coords || {};
    return {
      longitude,
      latitude,
    };
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const listProductsApi = async (payload) => {
  let values = {
    ...payload,
    limit: 10,
  };

  if (
    payload?.Nearby &&
    payload.category === "" &&
    payload.searchText === "" &&
    payload.shopId === ""
  ) {
    const currentLocation = await getCurrentPosition();
    values = {
      ...values,
      ...currentLocation,
    };
  }
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
};

export const listShopsApi = async () => {
  return request.get(LIST_SHOPS);
};
