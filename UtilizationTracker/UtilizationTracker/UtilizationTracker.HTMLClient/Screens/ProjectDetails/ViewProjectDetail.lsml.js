/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewProjectDetail.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.ProjectDetail.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.ProjectDetail." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}


myapp.ViewProjectDetail.created = function (screen) {
    // Write code here.
    msls.showLogOut = true;
};
myapp.ViewProjectDetail.Back_execute = function (screen) {
    // Write code here.
    window.history.go(-1);
};
myapp.ViewProjectDetail.Back_postRender = function (element, contentItem) {
    // Write code here.
 $(element).children().addClass("Back");
    $(element).css({ "min-width": 1 });
};