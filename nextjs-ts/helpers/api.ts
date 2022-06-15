const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const API = {
  topPage: {
    find: `${API_URL}/top-page/find`,
    byAlias: `${API_URL}/top-page/byAlias`
  },
  product: {
    find: `${API_URL}/product/find`
  },
  review: {
    createDemo: `${API_URL}/review/create-demo`
  },
}