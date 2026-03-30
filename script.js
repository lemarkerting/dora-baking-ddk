function order(product) {
  localStorage.setItem("product", product);
  window.location.href = "checkout.html";
}

function sendOrder(e) {
  e.preventDefault();

  let product = localStorage.getItem("product");
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;

  let message = `Order Details:
Product: ${product}
Name: ${name}
Phone: ${phone}
Address: ${address}`;

  let whatsapp = "https://wa.me/27823385749?text=" + encodeURIComponent(message);

  window.open(whatsapp, "_blank");
}
