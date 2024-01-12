// Khởi tạo 1 vùng AngularJS
// Khai báo 1 controller mới
// Khai báo 1 mảng dữ liệu nhanVien
// (ten, ngaySinh, luong, gioiTinh (0: Nam, 1: Nữ))
// Sử dụng AngularJS để hiển thị toàn bộ
// dữ liệu của nhanVien ra view dưới dạng table
// table có sử dụng Bootstrap
// ngày sinh phải khai báo dữ liệu bằng new Date("năm-tháng-ngày")

let myApp = angular.module('myApp', []);
myApp.controller('employeeController', function ($scope) {
    $scope.title = "Danh sách nhân viên";

    $scope.employees = [
        {
            hoTen: "Nguyễn Văn A",
            ngaySinh: new Date("2004-11-20"),
            luong: 10000000,
            gioiTinh: 0
        },
        {
            hoTen: "Nguyễn Thị A",
            ngaySinh: new Date("2004-11-20"),
            luong: 20000000,
            gioiTinh: 1
        },
        {
            hoTen: "Nguyễn Văn B",
            ngaySinh: new Date("2004-11-20"),
            luong: 5000000,
            gioiTinh: 0
        },
        {
            hoTen: "Nguyễn Thị B",
            ngaySinh: new Date("2004-11-20"),
            luong: 100000000,
            gioiTinh: 1
        }
    ];

    // Khai báo hàm
    $scope.sayHello = function (name) {
        alert("Xin chào " + name);
    }

    $scope.myFunc = function () {
        console.log("Mãi bên nhau bạn nhé!");
    }

    $scope.orderBy2 = '';
    $scope.limitTo2 = '';
    $scope.search = '';
});