/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  future: {
    webpack5: true,
  },
  env: {
    REACT_APP_ENDPOINT: "http://localhost/v1",
    REACT_APP_PROJECT: "test-church",
    REACT_APP_COLLECTION_ID: "62ce6922210bc11d57b8",
    REACT_APP_DATABASE_ID: "62ce690ed39bd5f2379e"
  }
}

module.exports = nextConfig
