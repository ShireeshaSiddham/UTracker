﻿/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ProjectScore.Back_execute = function (screen) {
    // Write code here.
    window.history.go(-1);
};
myapp.ProjectScore.Back_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("Back");
    $(element).css({ "min-width": 1 });
};
myapp.ProjectScore.View_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("View");
    $(element).css({ "min-width": 1 });
};