const path = require("path");
const books = require("../books");
const { scan } = require("./utils");

const bookNavs = books.map((res) => ({
  title: res.title,
  category: res.category,
}));

const CUSTOM_DOC_ROOT_PATH = path.resolve(process.cwd(), "src");

const category = {
  backend: {
    title: "后端开发",
    data: [],
  },
  architect: {
    title: "架构师",
    data: [],
  },
  manage: {
    title: "管理",
    data: [],
  },
  worklife:{
    title: "工作生活",
    data: [],
  },
  other: {
    title: "杂谈",
    data: [],
  },
};

const getNav = function (nav) {
  return Object.keys(nav).map((cla) => ({
    title: nav[cla].title,
    children: nav[cla].data.map((book) => ({
      title: book.title,
      path: `/${book.title}`,
    })),
  }));
};

exports.getBookNavs = function () {
  [...bookNavs, ...scan(CUSTOM_DOC_ROOT_PATH)].forEach((book) => {
    category[book.category || "other"].data.push(book);
  });
  return getNav(category);
};
