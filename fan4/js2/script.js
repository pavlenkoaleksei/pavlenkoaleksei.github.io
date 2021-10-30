const basket = [];
document.getElementById("add").onclick = () => {
  const item = document.querySelector("input").value.replace(/\</g, "&lt;");
  if (item.trim() == "") {
    return;
  }
  if (!basket.some((basket_item) => basket_item == item)) {
    basket.push(item);
  } else {
    document.getElementById("message").textContent = "Такой товар уже куплен.";
  }
};
document.getElementById("show").onclick = () => {
  document.getElementById("list").innerHTML = basket.length
    ? `<ol><li>${basket.join("</li><li>")}</li></ol>`
    : "Корзина пока пуста.";
};
