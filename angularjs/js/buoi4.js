// Khởi tạo module
// Set vùng angularjs cho vùng DinhTV7DZ
let DinhDZ = angular.module('DinhTV7DZ', []);
// 2 tham số: tên cả ng-app, thành phần phụ thuộc

// Định nghĩa vùng controller
DinhDZ.controller('myController', myFunction);
// 2 tham số: tên của controller cần định nghĩa, hàm thực hiện công việc

function myFunction($scope) {
    // $scope là 1 tham số mặc định, không được thay đổi
    // Luôn luôn có dùng để gender dữ liệu ra view
    $scope.xinchao = "Hello cục cưng";
}

// Định nghĩa 1 vùng controller mới
// Khai báo và hiển thị ra view hoTen, diaChi, sdt, ngayChiaTay 
// của nym

DinhDZ.controller('nymController', function ($scope) {
    $scope.hoTen = "Tạ Văn Định";
    $scope.diaChi = "Nam Định";
    $scope.sdt = "0379204876";
    $scope.ngayChiaTay = "10/01/2024";

    let test = "Xin chào";
    $scope.test_2 = test;
    console.log($scope.test_2);

    $scope.nymArr = [
        {
            hoTen: "Tạ Văn Định",
            diaChi: "Nam Định",
            sdt: "0379204876",
            ngayChiaTay: "10/01/2024"
        },
        {
            hoTen: "ĐinhTV7",
            diaChi: "Nam Định",
            sdt: "0379204876",
            ngayChiaTay: "10/01/2024"
        },
        {
            hoTen: "DinhĐZ",
            diaChi: "Nam Định",
            sdt: "0379204876",
            ngayChiaTay: "10/01/2024"
        }
    ];
});