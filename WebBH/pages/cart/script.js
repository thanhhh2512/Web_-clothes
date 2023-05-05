window.addEventListener("storage", () => {
  location.reload()
})

const productsList = document.querySelector(".products")
const cartData = localStorage.getItem("cart-list")
if (!cartData) {
  localStorage.setItem("cart-list", JSON.stringify([]))
}
const userData = localStorage.getItem("logined")

if (!userData) {
  alert("Vui lòng đăng nhập để xem giỏ hàng")
  location.replace("../../index.html")
}
let cartList = []
if (cartData) {
  cartList = JSON.parse(cartData)
}
const user = JSON.parse(userData)
function formatMoney(amount) {
  let money = amount + ""
  console.log(money)
  let reverseMoney = money.split("").reverse().join("")
  money = reverseMoney.match(/.{1,3}/g)
  money = money
    .reverse()
    .map((item) => {
      return item.split("").reverse().join("")
    })
    .join(".")
  return money
}
function renderCartList(cartList) {
  const content = cartList
    .filter((item) => {
      return item.user === user.phoneNumber && item.amount > 0
    })
    .map((item) => {
      return `
    <div
    class="cart-product-card d-flex flex-row mt-3 justify-content-between border-bottom p-3 "
  >
    <div class="cart-product-card__main d-flex flex-row gap-5">
      <img
        src="../../Picture/clothes/${item.type}/${item.code}/1.jpg"
        alt=""
        class="img-fluid"
      />
      <div class="cart-product-card__detail d-flex flex-column justify-content-between">
        <h3 style="text-transform:capitalize;">${item.type} ${item.code}</h3>
        <p class="opacity-75">350.000 VNĐ</p>
        <input
          type="number"
          class="number"
          min="0"
          data-product="${item.type}/${item.code}"
          value="${formatMoney(item.amount)}"

        />
      </div>
    </div>
    <div class="cart-product-card__sub d-flex flex-column justify-content-end">
      <p>Tổng cộng: <b>${formatMoney(item.amount * 350000)}</b> VNĐ</p>
      <button
          type="button"
          class="btn border border-1 shadow border-black update-amount-btn"
          data-bs-toggle="modal"
          data-bs-target="#${item.type + item.code}Modal"
        >
          Cập nhật số lượng
        </button>
        <div
          class="modal fade"
          id="${item.type + item.code}Modal"
          tabindex="-1"
          aria-labelledby="${item.type + item.code}ModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="${
                  item.type + item.code
                }ModalLabel">
                  Thông báo
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">Bạn có thật sự muốn cập nhật số lượng cho sản phẩm ${(
                item.type +
                " " +
                item.code
              ).toUpperCase()}?</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Đóng
                </button>
                <button type="button" class="btn btn-primary " onclick="updateAmount('${
                  item.type
                }','${item.code}')">
                  Đồng ý
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>

  </div>
    `
    })
  const total = cartList
    .filter((item) => {
      return item.user === user.phoneNumber && item.amount > 0
    })
    .reduce((sum, item) => sum + item.amount * 350000, 0)
  console.log("total", total)
  const payContent = `
    <div class="pay d-flex flex-row flex-wrap justify-content-between mt-5 p-3">
      <h3 class="">Tổng hóa đơn: <span class="h3 fw-bolder">${formatMoney(
        total
      )}</span> VNĐ</h3>
      <button
          type="button"
          class="btn btn-dark "
          data-bs-toggle="modal"
          data-bs-target="#payModal"
        >
          Thanh Toán
        </button>
        <div
          class="modal fade"
          id="payModal"
          tabindex="-1"
          aria-labelledby="payModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="payModalLabel">
                  Thông báo
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">Bạn có thật toán muốn thanh toán không?</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Đóng
                </button>
                <button type="button" class="btn btn-primary" onclick="pay()">
                  Đồng ý
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  `

  productsList.innerHTML = `<h3 class="text-center">Bạn chưa thêm sản phẩm nào vào giỏ!</h3>`
  if (content.length) productsList.innerHTML = content.join() + payContent
}

renderCartList(cartList)

function updateAmount(type, code) {
  const findInput = document.querySelector(
    `input[data-product="${type}/${code}"]`
  )

  console.log(findInput)
  const newAmount = findInput.value
  const cartData = localStorage.getItem("cart-list")
  const cartList = JSON.parse(cartData)
  let findIndex = -1
  for (let index = 0; index < cartList.length; index++) {
    const element = cartList[index]
    if (
      cartList[index].type === type &&
      cartList[index].code === code &&
      cartList[index].user === user.phoneNumber
    ) {
      findIndex = index
      break
    }
  }
  cartList[findIndex].amount = newAmount
  localStorage.setItem("cart-list", JSON.stringify(cartList))
  alert("Cập nhật số lượng thành công!")
  location.reload()
}

function pay() {
  const cartData = localStorage.getItem("cart-list")
  const cartList = JSON.parse(cartData)
  console.log(cartList)
  const paiedCartList = cartList.map((item) => {
    if (item.user === user.phoneNumber) item.amount = 0
    return item
  })

  localStorage.setItem("cart-list", JSON.stringify(paiedCartList))
  alert("Thanh toán thành công!")
  location.reload()
}
