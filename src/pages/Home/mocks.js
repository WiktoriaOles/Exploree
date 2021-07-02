export const getListMock = (titles) => {
  return titles.map((title, index) => ({
    title,
    id: index,
    country: "Polskagurom",
    imageUrl:
      "https://cdn.nowiny.pl/im/v1/news-900-widen-wm/2018/06/11/140180_1528707983_47744300.jpg",
    visited: false,
  }));
};
