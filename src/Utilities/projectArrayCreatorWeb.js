const projectArrayCretorweb = (array, index) => {
  let configArray = array.slice(index, index + 1).map((item, index) => {
    // console.log("item in projectCreator", item)
    return [
      {
        id: "1",
        title: item.item["title_1"],
        content: item.item["content_1"]
      },
      {
        id: "2",
        title: item.item["title_2"],
        content: item.item["content_2"]
      },
      {
        id: "3",
        title: item.item["title_3"],
        content: item.item["content_3"]
      },
      {
        id: "4",
        title: item.item["title_4"],
        content: item.item["content_4"]
      },
      {
        id: "5",
        title: item.item["title_5"],
        content: item.item["content_5"]
      },
      {
        id: "6",
        title: item.item["title_6"],
        content: item.item["content_6"]
      },
      {
        id: "7",
        title: item.item["title_7"],
        content: item.item["content_7"]
      },
      {
        id: "8",
        title: item.item["title_8"],
        content: item.item["content_8"]
      },
      {
        id: "9",
        title: item.item["title_9"],
        content: item.item["content_9"]
      },
      {
        id: "10",
        title: item.item["title_10"],
        content: item.item["content_10"]
      }
    ];
  });
  return configArray;
};
export default projectArrayCretorweb;
