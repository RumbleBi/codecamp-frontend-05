/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true, // 우리가 만든 폴더구조처럼 out폴더안에 생성
  generateBuildId: () => "king-nyaa-deploy",
  exportPathMap: () => ({
    "/": { page: "/boards" },
    "/boards": { page: "/boards" },
    "/404": { page: "/404" },
  }),
};

module.exports = nextConfig;
