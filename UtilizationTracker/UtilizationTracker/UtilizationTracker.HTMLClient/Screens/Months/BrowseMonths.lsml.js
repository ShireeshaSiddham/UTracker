/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.BrowseMonths.created = function (screen) {
    // Write code here.
    msls.showLogOut = true;
};
myapp.BrowseMonths.Back_execute = function (screen) {
    // Write code here.
    window.history.go(-1);
};
myapp.BrowseMonths.Back_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("Back");
    $(element).css({ "min-width": 1 });
};

