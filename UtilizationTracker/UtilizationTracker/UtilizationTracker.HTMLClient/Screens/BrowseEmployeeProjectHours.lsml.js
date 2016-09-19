/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.BrowseEmployeeProjectHours.Back_execute = function (screen) {
    // Write code here.
    window.history.go(-1);
};
myapp.BrowseEmployeeProjectHours.Back_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("Back");
    $(element).css({ "min-width": 1 });
};
myapp.BrowseEmployeeProjectHours.EmployeeProjectHours_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("scroll");
};