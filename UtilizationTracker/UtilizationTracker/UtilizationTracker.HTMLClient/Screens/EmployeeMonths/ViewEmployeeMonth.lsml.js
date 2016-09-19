/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewEmployeeMonth.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.EmployeeMonth.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.EmployeeMonth." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}


myapp.ViewEmployeeMonth.created = function (screen) {
    // Write code here.
    msls.showLogOut = true;
};
myapp.ViewEmployeeMonth.Back_execute = function (screen) {
    // Write code here.
    window.history.go(-1);
};
myapp.ViewEmployeeMonth.Back_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("Back");
    $(element).css({ "min-width": 1 });
};