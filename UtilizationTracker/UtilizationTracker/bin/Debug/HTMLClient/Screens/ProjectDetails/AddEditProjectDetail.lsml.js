/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddEditProjectDetail.ProjectsInCompany1_postRender = function (element, contentItem)
{
    // Write code here.
  
    function updateWorkingDay()
    {
        if (contentItem.screen.ProjectDetail.ProjectsInCompany.ProjectName != "Others") {
            contentItem.screen.ProjectDetail.ProjectName = contentItem.screen.ProjectDetail.ProjectsInCompany.ProjectName;
            //this.FindControl("ProjectName").IsEnabled = false;
            //this.FindControl("ProjectName").IsVisible = false;
            
            contentItem.screen.findContentItem("ProjectName").isVisible = false;
            

        }
        else {            
            contentItem.screen.ProjectDetail.ProjectName = "";
            contentItem.screen.findContentItem("ProjectName").isVisible = true;
           
        }
       
    }
    // force the entity to be updated
    contentItem.dataBind("screen.ProjectDetail.ProjectsInCompany.ProjectName", updateWorkingDay);
    
};

myapp.AddEditProjectDetail.created = function (screen)
{
    // Write code here.
    screen.findContentItem("ProjectName").isVisible = true;
    //screen.findContentItem("QualityPeerReview").isEnabled = false;
    //msls.promiseOperation(GetUserRole).then(function PromiseSuccess(PromiseResult) {
       
    //});
};



myapp.AddEditProjectDetail.ProjectName_postRender = function (element, contentItem) {
    // Write code here.
    //var $normalTextbox = $('<input value="some text" />');
    //$normalTextbox.attr("data-role", "none");
    //$(element).append($normalTextbox);
    var $element = $(element).parent(); // li item;   
        $element.css({ height: '70px' });
    
};
myapp.AddEditProjectDetail.ProjectsInCompany_postRender = function (element, contentItem) {
    // Write code here.
    var $element = $(element).parent(); // li item;   
        $element.css({ height: '70px' });    
};
myapp.AddEditProjectDetail.ProjectStatus_postRender = function (element, contentItem) {
    // Write code here.
    var $element = $(element).parent(); // li item; 
    $element.css({ height: '70px' });
};
myapp.AddEditProjectDetail.ProjectType_postRender = function (element, contentItem) {
    // Write code here.
    var $element = $(element).parent(); // li item; 
    $element.css({ height: '70px' });
};
myapp.AddEditProjectDetail.ComplexityDifficultyLevel_postRender = function (element, contentItem) {
    // Write code here.
    var $element = $(element).parent(); // li item; 
    $element.css({ height: '70px' });
};
myapp.AddEditProjectDetail.QualityPMRating_postRender = function (element, contentItem) {
    // Write code here.
    var $element = $(element).parent(); // li item; 
    $element.css({ height: '70px' });
};
myapp.AddEditProjectDetail.QualityProjectDuration_postRender = function (element, contentItem) {
    // Write code here.
    var $element = $(element).parent(); // li item; 
    $element.css({ height: '70px' });
};
myapp.AddEditProjectDetail.EndDate_postRender = function (element, contentItem) {
    // Write code here.
    var $element = $(element).parent(); // li item; 
    $element.css({ height: '70px' });
};
myapp.AddEditProjectDetail.ComplexityScope_postRender = function (element, contentItem) {
    // Write code here.
    var $element = $(element).parent(); // li item; 
    $element.css({ height: '70px' });
};
myapp.AddEditProjectDetail.QualityPeerReview_postRender = function (element, contentItem) {
    // Write code here.
    var $element = $(element).parent(); // li item; 
    $element.css({ height: '70px' });
};
myapp.AddEditProjectDetail.StartDate_postRender = function (element, contentItem) {
    // Write code here.
    var $element = $(element).parent(); // li item; 
    $element.css({ height: '70px' });
};
//myapp.AddEditProjectDetail.Details_postRender = function (element, contentItem)
//{
//    // Write code here.
//    //contentItem.screen.findContentItem("QualityPeerReview").isEnabled = true;
//};