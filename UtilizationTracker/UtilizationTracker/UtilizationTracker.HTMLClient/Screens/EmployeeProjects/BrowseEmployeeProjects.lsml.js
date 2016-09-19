/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.BrowseEmployeeProjects.created = function (screen) {
    // Write code here.
    msls.showLogOut = true;
    
};

myapp.BrowseEmployeeProjects.Back_execute = function (screen) {
    // Write code here.
    window.history.go(-1);
};
myapp.BrowseEmployeeProjects.Back_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("Back");
    $(element).css({ "min-width": 1 });
};

//This function will be wrapped in a Promise object
function GetUserTotalWorkedHours(operation) {
    $.ajax({
        type: 'post',
        data: {},
        url: '../TotalWorkedHours.ashx',
        success: operation.code(function AjaxSuccess(AjaxResult) {
            operation.complete(AjaxResult);
        })
    });
}

myapp.BrowseEmployeeProjects.TotalWorkedHours_postRender = function (element, contentItem) {
    // Write code here.
    msls.promiseOperation(GetUserTotalWorkedHours).then(function PromiseSuccess(PromiseResult) {
        //screen.TotalWorked=
        var TotalWorked = PromiseResult;
        element.innerText = ": " + TotalWorked;

    });
};