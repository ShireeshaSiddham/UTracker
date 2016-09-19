/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewReporteeDetailsbyManager.Back_execute = function (screen) {
    // Write code here.
    window.history.go(-1);
};
myapp.ViewReporteeDetailsbyManager.Back_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("Back");
    $(element).css({ "min-width": 1 });
};
myapp.ViewReporteeDetailsbyManager.ViewReporteeProjects_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("scroll");
};