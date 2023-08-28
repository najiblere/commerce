import { atom, selector } from "recoil";
import { getSiteApi } from "../services/apiCalls";

export const blogId = atom({
  key: "blogId",
  default: ""
})

export const getBlogs = selector({
  key: "getBlogs",
  get: async ({ get }) => {
    try {
      const result = await getSiteApi("blogs");
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});

export const getBlogCategory = selector({
  key: "getBlogCategory",
  get: async ({ get }) => {
    try {
      const id = get(blogId)
      console.log(id)
      const result = await getSiteApi(`blog/list/${id}`);
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});

export const getRecom = selector({
  key: "getRecom",
  get: async ({ get }) => {
    try {
      const id = get(blogId)
      console.log(id)
      const result = await getSiteApi(`recomend/${id}`);
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});

export const getSingleBlog = selector({
  key: "getSingleBlog",
  get: async ({ get }) => {
    try {
      const id = get(blogId)
      console.log(id)
      const result = await getSiteApi(`blogs/${id}`);
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});
