// Bài tập 1: Sử dụng let, const và Template Literals

// Viết hàm tính chỉ số BMI (Body Mass Index) với công thức:
// 👉 BMI = weight / (height * height)
// function calculateBMI(weight, height) {
// // TODO: Sử dụng const cho các hằng số
// // TODO: Sử dụng template literals để tạo thông báo
// // TODO: Phân loại BMI theo:
// // - Dưới 18.5: Thiếu cân
// // - 18.5 - 24.9: Bình thường
// // - 25 - 29.9: Thừa cân
// // - Trên 30: Béo phì
// }

// // Ví dụ sử dụng
// console.log(calculateBMI(70, 1.75)); // "BMI: 22.86 - Phân loại: Bình thường"

function calculateBMI(weight, height){
    const BMI = weight / (height * height);
    let category = "";

    if(BMI < 18.5){
        category = " Thiếu cân";
    }else if(BMI >= 18.5 && BMI < 24.9){
        category = " Bình thường";
    }else if(BMI >= 25 && BMI < 29.9){
        category = " Thừa cân";
    }else {
        category = " Béo phì";
    }
    return `Chỉ số BMI: ${BMI} - Phân loại: ${category}`
};

console.log(calculateBMI(58, 1.72));


// Bài tập 2: Enhanced Object Literals

// Tạo đối tượng quản lý sách sử dụng enhanced object literals.
// function createBook(title, author, year, price) {
// // TODO: Sử dụng shorthand properties
// // TODO: Thêm method getBookInfo() trả về thông tin sách
// // TODO: Thêm method tính giá sau giảm giá (discount %)
// // TODO: Sử dụng computed property names
// }

// // Ví dụ sử dụng
// const book = createBook("JavaScript ES6", "John Doe", 2023, 200000);
// console.log(book.getBookInfo());
// console.log(book.calculateDiscount(10)); // Giảm 10%

function createBook(title, author, year, price) {
    return {
        title: title,
        author: author,
        year: year,
        price: price,
        getBookInfo: function() {
            return `Sách: ${this.title} - Tác giả: ${this.author} (${this.year}) - Giá: ${this.price}₫`;
        },

        calculateDiscount: function(discount) {
            const newPrice = this.price - (this.price * discount / 100);
            return `Giá sau khi giảm ${discount}% là: ${newPrice}₫`;
        }
    };
}

const book = createBook("JavaScript ES6", "Manh Anh", 2025, 200000);
console.log(book.getBookInfo());
console.log(book.calculateDiscount(10));
// 123
