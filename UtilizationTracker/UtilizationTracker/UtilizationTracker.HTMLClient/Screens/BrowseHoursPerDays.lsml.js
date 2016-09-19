/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.BrowseHoursPerDays.View_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("View");
    $(element).css({ "min-width": 1 });
};
myapp.BrowseHoursPerDays.Back_execute = function (screen) {
    // Write code here.
    window.history.go(-1);
};
myapp.BrowseHoursPerDays.Back_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("Back");
    $(element).css({ "min-width": 1 });
};
