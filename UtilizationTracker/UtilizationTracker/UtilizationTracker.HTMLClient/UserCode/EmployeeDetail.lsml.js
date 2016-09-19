/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.EmployeeDetail.created = function (entity) {
    // Write code here.
    //msls.promiseOperation(CallGetUserName).then(function PromiseSuccess(PromiseResult) {

      
    //});
  
};
// This function will be wrapped in a Promise object
function CallGetUserName(operation) {
    $.ajax({
        type: 'post',
        data: {},
        url: '../Handler1.ashx',
        success: operation.code(function AjaxSuccess(AjaxResult) {
            operation.complete(AjaxResult);
        })
    });
}