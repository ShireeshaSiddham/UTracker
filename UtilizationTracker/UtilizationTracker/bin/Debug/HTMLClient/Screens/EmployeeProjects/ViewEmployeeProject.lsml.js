/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewEmployeeProject.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.EmployeeProject.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.EmployeeProject." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}


myapp.ViewEmployeeProject.created = function (screen) {
    // Write code here.
    msls.showLogOut = true;
};
myapp.ViewEmployeeProject.Back_execute = function (screen) {
    // Write code here.
    window.history.go(-1);
};
myapp.ViewEmployeeProject.beforeApplyChanges = function (screen) {
    // Write code here.

};
myapp.ViewEmployeeProject.Back_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("Back");
    $(element).css({ "min-width": 1 });
};