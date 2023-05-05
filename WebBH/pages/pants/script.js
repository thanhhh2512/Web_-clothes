const productsList = document.querySelector(".products")
console.log(productsList)
let content = ""
for (let index = 1; index <= 8; index++) {
  const temp = `
    <div class="col-12 col-lg-6 col-md-6">
    <a href="../productDetail/index.html" class="product-link" data-link="pants/00${index}">
            <div class="clothe-card d-flex flex-column justify-content-center gap-3 align-items-center p-3">
                <img src="../../Picture/clothes/pants/00${index}/1.jpg" alt="" />
                <h5><b>Pants 00${index}</b></h5>
                <h4><b>350.000 VNĐ</b></h4>
            </div>
        </a>
    </div>
    `
  content += temp
}
productsList.innerHTML = content
