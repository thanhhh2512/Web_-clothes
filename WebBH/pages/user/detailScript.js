const USERS = "userList"
const LOGINED = "logined"

const logined = localStorage.getItem("logined")
if (logined == null) {
  location.replace("./index.html")
}

const phoneNumber = document.getElementById("phone-number")
const email = document.getElementById("email-signup")
const password = document.getElementById("password-signup")
const passwordRepeat = document.getElementById("password-signup-repeat")
if (logined) {
  const userInfo = JSON.parse(logined)
  phoneNumber.value = userInfo.phoneNumber
  email.value = userInfo.email
  password.value = userInfo.password
  passwordRepeat.value = userInfo.password
}

function signup(e) {
  e.preventDefault()
  const phoneNumber = document.getElementById("phone-number")
  const email = document.getElementById("email-signup")
  const password = document.getElementById("password-signup")
  const passwordRepeat = document.getElementById("password-signup-repeat")

  const emailValue = email.value
  const passwordValue = password.value
  const phoneNumberValue = phoneNumber.value
  const passwordRepeatValue = passwordRepeat.value
  const data = localStorage.getItem(USERS)

  const userList = JSON.parse(data)
  let findIndex = -1
  const userInfo = JSON.parse(logined)
  for (let index = 0; index < userList.length; index++) {
    if (userList[index].phoneNumber === userInfo.phoneNumber) findIndex = index
  }
  let findSame = -1
  for (let index = 0; index < userList.length; index++) {
    if (
      index != findIndex &&
      (userList[index].phoneNumber === phoneNumberValue ||
        userList[index].emai === emailValue)
    )
      findSame = index
  }

  if (findSame != -1) {
    alert(
      "Số điện thoại hoặc email đã được sử dụng, vui lòng chọn số điện thoại hoặc email khác"
    )
  } else {
    if (passwordRepeatValue !== passwordValue)
      alert("Mật khẩu không trùng khớp")
    else {
      userList[findIndex].phoneNumber = phoneNumberValue
      userList[findIndex].email = emailValue
      userList[findIndex].password = passwordValue
      localStorage.setItem(USERS, JSON.stringify(userList))
      localStorage.setItem(LOGINED, JSON.stringify(userList[findIndex]))
      alert("Tài khoản được cập nhật thành công!")
      location.reload()
    }
  }
}
const formSignup = document.querySelector(".form-signup")

if (formSignup) formSignup.addEventListener("submit", signup)

function logout() {
  alert("Đăng xuất thành công")
  localStorage.removeItem(LOGINED)
  location.replace("../../index.html")
}
