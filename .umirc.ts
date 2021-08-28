// Config for dumi
import { defineConfig } from "dumi";

const isDev = process.env.NODE_ENV === "development";
const isVercel = process.env.VERCEL;

console.log('isVercel',process.env);

export default defineConfig({
  ...(isDev
    ? {
        dynamicImport: {},
      }
    : {
        ssr: {},
      }),

  logo: "http://wued.winning-health.com.cn:8088/win-design/icon.png",
  base: isVercel ? "" : "/blog",
  publicPath: isVercel ? "" : "/blog/",
  favicon: "http://wued.winning-health.com.cn:8088/win-design/icon.png",
  mode: "site",
  title: "winex",
  locales: [["zh-CN", "中文"]],
  resolve: {
    includes: ["./src", "./docs"],
    previewLangs: [],
  },
  navs: [null],
  polyfill: false,
  nodeModulesTransform: {
    type: "none",
  },
  exportStatic: {},
  analytics: isDev
    ? false
    : {
        ga: "UA-149864185-1",
      },
});
