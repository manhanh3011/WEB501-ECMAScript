// Sửa đoạn code sau để hoạt động đúng
// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i); // Hiện tại in ra 3,3,3
//   }, 100);
// }
// Yêu cầu: Sửa để in ra 0,1,2

//Sửa lại
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); 
  }, 100);
};

// Tạo một object student với const
// Thêm thuộc tính điểm và in ra
const student = {
  name: "ThuyTien",
  age: 20,
};

// Thực hiện các thao tác sau:
// 1. Thêm thuộc tính grade với giá trị "A"
// 2. Thay đổi tuổi thành 21
// 3. In ra toàn bộ thông tin student

student.grade = "A"; // Thêm thuộc tính grade
student.age = 21; //Thay đổi tuổi thành 21
console.log(student); 



//Bài tập thực hành Template Literals
// Tạo template cho email thông báo
const user = {
  firstName: "Nguyen",
  lastName: "Van A",
  product: "Laptop Dell XPS",
  price: 25000000,
  orderDate: "2024-01-15",
};

// Tạo template string cho email
const emailTemplate = `
                        Họ tên: ${user.firstName + user.lastName}
                        Sản phẩm: ${user.product}
                        Gía: ${user.price}
                        Ngày mua: ${user.orderDate}
                        `; // Viết template ở đây

console.log(emailTemplate);


//Bài 2: Tạo HTML template
// Tạo HTML template cho card sản phẩm
const product = {
  name: "iPhone 15",
  price: 20000000,
  discount: 10,
  inStock: true,
};

// Tính giá sau giảm
const finalPrice = product.price * (1 - product.discount / 100);

// Tạo template HTML
const productCard = `
                    <ul>
                        <li>Tên sản phẩm: ${product.name}</li>
                        <li>Giá: ${product.price} VNĐ</li>
                        <li>Khuyến mãi: ${product.discount} % </li>
                        <li>Gía sau giảm: ${finalPrice} VNĐ </li>
                        <li>Tổng tiền: ${product.price - finalPrice} VNĐ </li>
                    </ul>`;             // Viết template ở đây

console.log(productCard);

//Bài tập thực hành Enhanced Object Literals
//Bài 1: Sử dụng property và method shorthand
// Viết lại object sau sử dụng ES6 enhanced object literals
const width = 100;
const height = 200;
const color = "red";

// const rectangle = {
//   width: width,
//   height: height,
//   color: color,
//   calculateArea: function () {
//     return this.width * this.height;
//   },
//   describe: function () {
//     return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
//   },
// };

// Viết lại object
const rectangle = {
    width,
    height,
    color,
    calculateArea(){
        return this.width * this.height;
    },
    describe(){
        return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
    },
};


// Bài 2: Sử dụng computed properties
// Tạo object configuration với computed property names
const env = "production";
const version = "v2";
const features = ["auth", "payment", "notification"];

// Tạo object config với:
// - key: `api_${env}_${version}`
// - key cho từng feature: `feature_${featureName}`
// - method: `get${env}Config()`

const config = {
   [`api_${env}_${version}`]: `https://api/${env}/${version}`,
   [`feature_${features[0]}`]: true,
   [`feature_${features[1]}`]: true,
   [`feature_${features[2]}`]: true,
   [`get${env}Config`] () {
      return `Config for ${env}`;
    },
};
console.log(config);