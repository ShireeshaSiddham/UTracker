/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.BrowseProjectDetails.created = function (screen)
{
  //for ascending or descending using filter icon
    //screen.CustomerSortAscending = true;
    //screen.CustomerSortPropertyName = "ProjectName1";
    //screen.CustomerSortPropertyName = "StartDate1";
};

myapp.BrowseProjectDetails.Back_execute = function (screen) {
    // Write code here.
    window.history.go(-1);
    //string startupPath = System.IO.Path.GetFullPath(".\\").
};
myapp.BrowseProjectDetails.Back_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("Back");
    $(element).css({ "min-width": 1 });
};

