window.ListController = function ($scope, $http) {
    $scope.title = "Danh sách sinh viên";

    // Sử dụng tham số $http để thực hiện
    // việc call api 

    // Link api
    const apiStudent = 'http://localhost:3000/student';

    // $http.phương thức truy cập HTTP
    // GET, POST, PUT, DELETE
    function getAll() {
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
    getAll();
    

    $scope.deleteStudent = function (deleteID) {
        // alert(deleteID)
        let confirm = window.confirm("Bạn có muốn xóa không?");
        // console.log(confirm);
        if (confirm) {
            $http.delete(
                // apiStudent + '/' + deleteID
                `${apiStudent}/${deleteID}`
            ).then(function (response) {
                if (response.status == 200) {
                    alert("Xóa thành công");
                    getAll();
                }
            });
        }
    }
}