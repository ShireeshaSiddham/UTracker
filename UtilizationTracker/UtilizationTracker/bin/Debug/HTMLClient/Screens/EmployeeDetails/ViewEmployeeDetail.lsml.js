/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewEmployeeDetail.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.EmployeeDetail.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.EmployeeDetail." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}


myapp.ViewEmployeeDetail.created = function (screen) {
    // Write code here.
    msls.showLogOut = true;
};
myapp.ViewEmployeeDetail.Back_execute = function (screen) {
    // Write code here.
    window.history.go(-1);
};
myapp.ViewEmployeeDetail.Back_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("Back");
    $(element).css({ "min-width": 1 });
};