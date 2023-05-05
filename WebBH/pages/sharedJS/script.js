const productLink = document.getElementsByClassName("product-link")
const PRODUCT = "product"
if (productLink)
  productLink.forEach((item) => {
    item.addEventListener("click", () => {
      localStorage.setItem(PRODUCT, item.dataset.link)
    })
  })

function updateProductLink() {
  const productLink = document.getElementsByClassName("product-link")
  if (productLink)
    productLink.forEach((item) => {
      item.addEventListener("click", () => {
        localStorage.setItem(PRODUCT, item.dataset.link)
      })
    })
}
