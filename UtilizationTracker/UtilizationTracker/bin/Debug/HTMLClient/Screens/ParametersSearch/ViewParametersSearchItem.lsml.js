/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewParametersSearchItem.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.EmployeeProject.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.EmployeeProject." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

