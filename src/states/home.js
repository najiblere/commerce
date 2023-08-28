import { selector, atom } from "recoil";
import { getSiteApi } from "../services/apiCalls";

export const homeRefresh = atom({
  key: "homeRefresh",
  default: ""
})

export const fetching = atom({
  key: "fetching",
  default: true
})

export const getHome = selector({
  key: "getHome",
  get: async ({ get }) => {
    try {
      const res = get(homeRefresh);
      console.log(res)
      const result = await getSiteApi("home_page");
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});

export const getSettings = selector({
  key: "getSettings",
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


export const getTermsAndCondition = selector({
  key: "getTermsAndCondition",
  get: async ({ get }) => {
    try {
      const result = await getSiteApi("terms_condition");
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});


export const getPrivacyPolicy = selector({
  key: "getPrivacyPolicy",
  get: async ({ get }) => {
    try {
      const result = await getSiteApi("policy");
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});

export const getAboutContent = selector({
  key: "getAboutContent",
  get: async ({ get }) => {
    try {
      const result = await getSiteApi("about/contents");
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});

export const getFeatures = selector({
  key: "getFeatures",
  get: async ({ get }) => {
    try {
      const res = get(homeRefresh);
      console.log(res)
      const result = await getSiteApi("features");
      return result.data || [];
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return [];
    }
  }
});

export const getHowItWorks = selector({
  key: "getHowItWorks",
  get: async ({ get }) => {
    try {
      const result = await getSiteApi("how_it_works");
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});


export const getFaq = selector({
  key: "getFaq",
  get: async ({ get }) => {
    try {
      const result = await getSiteApi("faqs");
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});

export const getCareerTop = selector({
  key: "getCareerTop",
  get: async ({ get }) => {
    try {
      const result = await getSiteApi("career/top");
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});

export const getCareer = selector({
  key: "getCareer",
  get: async ({ get }) => {
    try {
      const result = await getSiteApi("career");
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});