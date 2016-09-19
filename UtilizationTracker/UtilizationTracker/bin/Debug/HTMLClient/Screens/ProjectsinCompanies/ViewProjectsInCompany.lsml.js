/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewProjectsInCompany.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.ProjectsInCompany.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.ProjectsInCompany." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

