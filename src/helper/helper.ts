export const imageUrls = [
  {
    id: 1,
    imageUrl: "https://picsum.photos/id/42/200/300",
  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/id/37/200/300",
  },
  {
    id: 3,
    imageUrl: "https://picsum.photos/id/48/200/300",
  },
  {
    id: 4,
    imageUrl: "https://picsum.photos/id/182/200/300",
  },
  {
    id: 5,
    imageUrl: "https://picsum.photos/id/239/200/300",
  },
  {
    id: 6,
    imageUrl: "https://picsum.photos/id/385/200/300",
  },
];

export const scrollToTop = (behavior: any = "auto") => {
  const scrollElement = document?.getElementById("root");
  scrollElement?.scroll({
    top: 0,
    left: 0,
    behavior,
  });
};
