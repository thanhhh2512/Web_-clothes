const productTitle = document.querySelector(".product-detail__name")

const productImgMain = document.querySelector(".product-img-main")
const productImgSub = document.querySelector(".product-img-sub")
const data = localStorage.getItem("product").split("/")
const [productType, productCode] = data
console.log(productType, productCode)
productTitle.innerHTML = productType + " " + productCode
productImgMain.innerHTML = `
              <img
                src="../../Picture/clothes/${productType}/${productCode}/1.jpg"
                alt=""
                class="img-fluid  mx-auto d-block"
              />
`
productImgSub.innerHTML = `
              <div class="row">
                <div class="col-4">
                  <div class="product-img-sub__item" ><img
                    class="img-fluid"
                    src="../../Picture/clothes/${productType}/${productCode}/2.jpg"
                    alt=""
                  /> </div>
                </div>
                <div class="col-4">
                  <div class="product-img-sub__item" "><img
                    class="img-fluid"
                    src="../../Picture/clothes/${productType}/${productCode}/3.jpg"
                    alt=""
                  /> </div>
                </div>
                <div class="col-4">
                  <div class="product-img-sub__item" "><img
                    class="img-fluid"
                    src="../../Picture/clothes/${productType}/${productCode}/4.jpg"
                    alt=""
                  /> </div>
                </div>
              </div>
`

const productImgSubItemList = document.querySelectorAll(
  ".product-img-sub__item"
)
productImgSubItemList.forEach((item, index) => {
  item.addEventListener("click", () => {
    changeImgMain(index + 2)
  })
})
function changeImgMain(code) {
  productImgMain.innerHTML = `
              <img
                src="../../Picture/clothes/${productType}/${productCode}/${code}.jpg"
                alt=""
                class="img-fluid  mx-auto d-block"
              />
`
}

const bestSeller = document.querySelector(".product-detail-best-seller")

let content = ""
for (let index = 1; index <= 4; index++) {
  if ("00" + index == productCode) continue
  let name = "00" + index
  console.log(name)
  content += `
    <div class="col-12 col-md-6 col-lg-4">
    <div class="product-related"><a href="../productDetail/index.html" class="product-link" data-link="${productType}/${name}">
      <div class="clothe-card d-flex flex-column justify-content-center gap-3 align-items-center p-3">
          <img src="../../Picture/clothes/${productType}/${name}/1.jpg" alt="">
          <h5><b>${productType} ${name}</b></h5>
          <h4><b>350.000 VNĐ</b></h4>
      </div>
    </a></div>
  </div>
    `
}

bestSeller.innerHTML = content

const addCart = document.querySelector(".add-cart-btn")
addCart.addEventListener("click", () => {
  const data = localStorage.getItem("cart-list")
  const userData = localStorage.getItem("logined")
  const user = JSON.parse(userData)
  if (!data) localStorage.setItem("cart-list", JSON.stringify([]))
  if (!userData) {
    alert("Vui lòng đăng nhập để mua hàng!")
    return
  }
  const cartList = JSON.parse(data) || []
  let findIndex = -1
  for (let index = 0; index < cartList.length; index++) {
    const element = cartList[index]
    if (
      element.type === productType &&
      element.code === productCode &&
      element.user === user.phoneNumber
    ) {
      findIndex = index
      break
    }
  }
  if (findIndex !== -1) {
    cartList[findIndex].amount++
    localStorage.setItem("cart-list", JSON.stringify(cartList))
  } else {
    const newCartItem = {
      type: productType,
      code: productCode,
      user: user.phoneNumber,
      amount: 1,
    }
    const newCartList = [...cartList, newCartItem]
    localStorage.setItem("cart-list", JSON.stringify(newCartList))
  }
  alert("Đã thêm món đồ vào giỏ hàng!")
})
