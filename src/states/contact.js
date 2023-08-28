import { selector } from "recoil";
import { getSiteApi } from "../services/apiCalls";

export const getSocialLinks = selector({
  key: "getSocialLinks",
  get: async ({ get }) => {
    try {
      // const res = get(homeRefresh);
      // console.log(res)
      const result = await getSiteApi("social");
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});

export const getAllContacts = selector({
  key: "getAllContacts",
  get: async ({ get }) => {
    try {
      const result = await getSiteApi("contact");
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});


export const getSettingsApi = selector({
  key: "getSettingsApi",
  get: async ({ get }) => {
    try {
      const result = await getSiteApi("settings");
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});


export const getContactContent = selector({
  key: "getContactContent",
  get: async ({ get }) => {
    try {
      const result = await getSiteApi("contents");
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});