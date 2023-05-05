const productsList = document.querySelector(".products")
const productsName = ["blazer", "jacket", "jeans", "pants"]
const searchInput = document.getElementsByClassName("search-input")[0]
function updateProductLink() {
  const productLink = document.getElementsByClassName("product-link")
  if (productLink)
    productLink.forEach((item) => {
      item.addEventListener("click", () => {
        localStorage.setItem(PRODUCT, item.dataset.link)
      })
    })
}

const searchFunction = () => {
  const searchValue = searchInput.value
  if(!searchValue) return;
  const searchResult = productsName.filter((item) => {
    return searchValue.includes(item) || item.includes(searchValue)
  })
  if (searchResult) {
    const content = searchResult.map((item) => {
      let content = ""
      for (let index = 1; index <= 8; index++) {
        const temp = `
                  <div class="col-12 col-lg-6 col-md-6">
                  <a href="../productDetail/index.html" class="product-link" data-link="${item}/00${index}">
                          <div class="clothe-card d-flex flex-column justify-content-center gap-3 align-items-center p-3">
                              <img src="../../Picture/clothes/${item}/00${index}/1.jpg" alt="" />
                              <h5><b>${item} 00${index}</b></h5>
                              <h4><b>350.000 VNĐ</b></h4>
                          </div>
                      </a>
                  </div>
                  `
        content += temp
      }
      return content
    })
    productsList.innerHTML = content.join() || `<h2>Không tìm thấy sản phẩm</h2>`
  }
  updateProductLink()
}
searchInput.addEventListener("change", searchFunction)
