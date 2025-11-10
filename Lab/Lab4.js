// Bài tập Array Destructuring
// Bài 1: Viết hàm trả về phần tử đầu tiên và cuối cùng của mảng

function getFirstLast(array) {
  const [first] = array;
  const last = array[array.length - 1];
  return [first, last];
};

console.log(getFirstLast([1, 2, 3, 4, 5, 6])); 

// Bài 2: Hoán đổi vị trí phần tử thứ 2 và thứ 4 trong mảng
function swapElements(arr) {
    [arr[1], arr[3]] = [arr[3], arr[1]];
    return arr;
};

console.log(swapElements([1, 2, 3, 4, 5])); // [1, 4, 3, 2, 5]


// Bài tập Object Destructuring
// Bài 1: Viết hàm extract thông tin user
const user = {
  id: 1,
  personalInfo: {
    name: "javascript",
    contact: {
      email: "javascript@email.com",
      phone: "123-456-7890",
    },
  },
};

function getUserInfo(user) {
    const {
        personalInfo: {name, 
                       contact: {email, phone}}
    } = user;
    return {name, email};
}

console.log(getUserInfo(user));
// { name: 'javascript', email: 'javascript@email.com' }


// Bài 2: Viết hàm với tham số mặc định
function createProduct({ name, price, category = "general", inStock = true }) {
    return {name, price, category, inStock} ;
}

const product1 = createProduct({ name: "Laptop", price: 999 });
const product2 = createProduct({ name: "Desktop", price: 100, category: "general", inStock: false });
console.log(product1);
console.log(product2);
// { name: 'Laptop', price: 999, category: 'general', inStock: true }


// Bài tập Promises
// Bài 1: Viết hàm delay trả về Promise

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms); 
  });
}

delay(2000).then(() => console.log("2 seconds passed"));
