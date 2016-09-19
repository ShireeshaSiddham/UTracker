/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewAssignProject.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.AssignProject.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.AssignProject." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

