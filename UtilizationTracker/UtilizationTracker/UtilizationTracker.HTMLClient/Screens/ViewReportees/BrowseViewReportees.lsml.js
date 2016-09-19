/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.BrowseViewReportees.created = function (screen) {
    // Write code here.
    msls.showLogOut = true;
};
myapp.BrowseViewReportees.Back_execute = function (screen) {
    // Write code here.
    window.history.go(-1);
};
myapp.BrowseViewReportees.Back_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("Back");
    $(element).css({ "min-width": 1 });
};
myapp.BrowseViewReportees.View_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("View");
    $(element).css({ "min-width": 1 });
};