//Bài tập thực hành
//Bài tập 1: Chuyển đổi hàm
// Function 1
// function multiply(a, b) {
//   return a * b;
// }
//Chuyển thành arrow functions:
const multiply = (a, b) => a * b;
console.log(multiply(5,10));

// Function 2
// function isPositive(number) {
//   return number >= 0;
// }
const isPositive = (number) => {
    number >= 0;
};

// Function 3
// function getRandomNumber() {
//   return Math.random();
// }
const getRandomNumber = () => Math.random();
console.log(getRandomNumber());


// Function 4
// document.addEventListener("click", function () {
//   console.log("Clicked!");
// });

// document.addEventListener("click", () => {
//    console.log("Clicked!");
//  });


//  Bài tập 2: Sử dụng Default Parameters
// Viết lại hàm sau sử dụng default parameters:
// function createUser(name, age, isAdmin) {
//   if (name === undefined) name = "Anonymous";
//   if (age === undefined) age = 18;
//   if (isAdmin === undefined) isAdmin = false;
//   return {
//     name: name,
//     age: age,
//     isAdmin: isAdmin,
//   };
// }

const createUser = (name = "Anonymous", age = 18, isAdmin = false) => ({
        name,
        age,
        isAdmin
});
console.log(createUser());
console.log(createUser("Mạnh Ánh", 20, true));


// Bài tập 3: Rest và Spread
// Viết các hàm sau:

// Hàm mergeArrays nhận nhiều mảng và trả về mảng hợp nhất
const mergeArrays = (...arrays) => [].concat(...arrays);
console.log(mergeArrays([1, 2], [5, 6, 7], [8, 9]));

// Hàm sumAll tính tổng tất cả tham số truyền vào
const sumAll = (...numbers) => numbers.reduce((sum, n) => sum + n, 0);
console.log(sumAll(1, 3, 5, 7, 9));

// Hàm createProduct nhận thông tin sản phẩm và trả về object sản phẩm với giá trị mặc định
const createProduct = ({ name = "", price = 0, quantity = 0, category = "" } = {}) => ({
  name,
  price,
  quantity,
  category,
});

console.log(createProduct({ name: "Quần dài", price: 100, quantity: 5, category: "Quần" }));



// Bài tập 4: Ứng dụng thực tế
// Tạo hàm shoppingCart với:

// Tham số đầu tiên là tên khách hàng
// Các tham số tiếp theo là các sản phẩm
// Sử dụng rest parameters để thu thập sản phẩm
// Trả về object chứa thông tin đơn hàng

const shoppingCart = (customerName, ...product) => ({customerName, product});
console.log(shoppingCart("Mạnh Ánh", "Quần", "Áo", "Giày"));