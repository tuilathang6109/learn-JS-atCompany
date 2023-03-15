const products = document.querySelector('.product');
const priceAscending = document.querySelector('#price-ascending');
const priceDescending= document.querySelector('#price-descending');
// Sắp xếp giá từ cao đến thấp
function sortPriceDescending() {
    const productItems = Array.from(products.children);

    productItems.sort(function(a, b) {
        const priceA = parseFloat(a.querySelector('.price').textContent.slice(1));
        const priceB = parseFloat(b.querySelector('.price').textContent.slice(1));

        return priceB - priceA;
    });

    products.innerHTML = '';

    productItems.forEach(function(product) {
        products.appendChild(product);
    });
}

// Sắp xếp giá từ thấp đến cao
function sortPriceAscending() {
    const productItems = Array.from(products.children);

    productItems.sort(function(a, b) {
        const priceA = parseFloat(a.querySelector('.price').textContent.slice(1));
        const priceB = parseFloat(b.querySelector('.price').textContent.slice(1));
        return priceA - priceB;
    });

    products.innerHTML = '';

    productItems.forEach(function(product) {
        products.appendChild(product);
    });
}

priceDescending.addEventListener('click', sortPriceDescending);
priceAscending.addEventListener('click', sortPriceAscending);


/*
Trong phần JS, chúng ta tạo ra hai hàm để sắp xếp danh sách sản phẩm theo giá từ cao đến thấp và từ thấp đến cao.

Hàm sortPriceDescending() được sử dụng để sắp xếp danh sách sản phẩm theo giá từ cao đến thấp. Đầu tiên, chúng ta lấy danh sách các sản phẩm bằng cách sử dụng phương thức children trên thẻ ul chứa danh sách các sản phẩm. Sau đó, chúng ta sử dụng hàm Array.from() để chuyển đổi danh sách sản phẩm thành một mảng các phần tử. Tiếp theo, chúng ta sử dụng hàm sort() trên mảng các phần tử để sắp xếp các sản phẩm theo giá từ cao đến thấp. Để so sánh giá của các sản phẩm với nhau, chúng ta lấy giá của mỗi sản phẩm bằng cách tìm phần tử span có lớp là price, sau đó lấy giá trị văn bản của phần tử đó bằng cách sử dụng thuộc tính textContent. Chúng ta loại bỏ ký tự đầu tiên ($) của giá trị đó bằng cách sử dụng phương thức slice(), và cuối cùng chúng ta sử dụng phép tính trừ để so sánh giá của các sản phẩm với nhau.

Sau khi danh sách sản phẩm đã được sắp xếp theo thứ tự giá từ cao đến thấp, chúng ta sử dụng vòng lặp forEach() để thêm các sản phẩm đã được sắp xếp trở lại vào danh sách sản phẩm.

Hàm sortPriceAscending() hoạt động tương tự như hàm sortPriceDescending(), tuy nhiên, nó được sử dụng để sắp xếp danh sách sản phẩm theo thứ tự giá từ thấp đến cao. Các sản phẩm sẽ được sắp xếp dựa trên giá trị price như đã mô tả ở trên, tuy nhiên, chúng ta sẽ sử dụng phép tính cộng (+) thay vì phép tính trừ để so sánh giá của các sản phẩm với nhau.

Cuối cùng, chúng ta sử dụng phương thức addEventListener() để gán hai hàm sắp xếp sản phẩm vào hai nút sắp xếp tương ứng. Khi người dùng nhấp vào một nút, hàm tương ứng sẽ được gọi để sắp xếp danh sách sản phẩm theo thứ tự tương ứng. */

