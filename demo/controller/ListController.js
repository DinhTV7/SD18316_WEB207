window.ListController = function ($scope, $http) {
    $scope.title = "Danh sách sinh viên";

    // Sử dụng tham số $http để thực hiện
    // việc call api 

    // Link api
    const apiStudent = 'http://localhost:5000/student';

    // $http.phương thức truy cập HTTP
    // GET, POST, PUT, DELETE
    $http.get(apiStudent).then(function (response) {
        console.log(response);
        console.log(response.data); // Lấy ra dữ liệu
        if (response.status == 200) {
            $scope.listStudent = response.data;
        } else {
            alert("Call dữ liệu ko thành công");
        }
    });
}