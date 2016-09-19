/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.BrowseProjectDetails1.Back_execute = function (screen) {
    // Write code here.
    window.history.go(-1);
};
myapp.BrowseProjectDetails1.Back_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("Back");
    $(element).css({ "min-width": 1 });
};

myapp.BrowseProjectDetails1.View_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("View");
    $(element).css({ "min-width": 1 });
};