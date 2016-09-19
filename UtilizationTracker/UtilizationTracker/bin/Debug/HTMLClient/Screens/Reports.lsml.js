/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.Reports.Back_execute = function (screen) {
    // Write code here.
    window.history.go(-1);
};
myapp.Reports.Back_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("Back");
    $(element).css({ "min-width": 1 });
};
myapp.Reports.ProjectWiseReport_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("button");
    
};
myapp.Reports.MonthandDateWiseReport_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("button");
    //$(element).css({ "font-size": 50 });
    //var $uiBtnText = $(element).find(".ui-btn-text");
    //$uiBtnText.css("font-size", "44px");
};
myapp.Reports.ProjectScore_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("button");
};
myapp.Reports.UtilizationScore_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("button");
};