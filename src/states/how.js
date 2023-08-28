import { selector } from "recoil";
import { getSiteApi } from "../../services/apiCalls";

const getHowItWorks = selector({
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

export default getHowItWorks