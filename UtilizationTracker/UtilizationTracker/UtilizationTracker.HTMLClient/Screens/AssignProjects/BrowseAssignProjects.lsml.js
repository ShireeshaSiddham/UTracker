/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.BrowseAssignProjects.Back_execute = function (screen) {
    // Write code here.
    window.history.go(-1);
};
myapp.BrowseAssignProjects.Back_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("Back");
    $(element).css({ "min-width": 1 });
};