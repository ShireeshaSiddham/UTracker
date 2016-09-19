/// <reference path="~/GeneratedArtifacts/viewModel.js" />


myapp.BrowseTotalHoursProjectWise.Back_postRender = function (element, contentItem)
{
    // Write code here.
    $(element).children().addClass("Back");
    $(element).css({ "min-width": 1 });
};


myapp.BrowseTotalHoursProjectWise.Back_execute = function (screen) {
    // Write code here.
    window.History.go();
};