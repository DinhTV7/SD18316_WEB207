window.GioiThieuController = function ($scope, $routeParams) {
    $scope.title = "Đây là trang giới thiệu";
    // $routeParams sẽ chứa toàn bộ tham số được truyền lên url
    console.log($routeParams.des);

    // Bài 1: Tạo 1 form nhập vào 2 số, 1 button
    // Tính tổng 2 số truyền và hiển thị ra màn hình
    $scope.tinhTong = function () {
        console.log($scope.inputValue.num1);
        console.log($scope.inputValue.num2);
        let num1 = parseFloat($scope.num1);
        let num2 = parseFloat($scope.num2);
        $scope.ketqua = num1 + num2 ;
    }

    // Tạo 1 form đăng nhập
    // Nếu tài khoản = dinhtv7
    // mật khẩu = 12345678
    // hiển thị alert (Chào mừng + tên đăng nhập)
    // nếu nhâp sai thì hiển thị thông báo đỏ bên dưới ô input
}