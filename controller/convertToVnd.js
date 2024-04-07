export const convertToVnd = (number) => {
  return (number * 1)
    .toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    })
    .replace("VND", "đ");
};
