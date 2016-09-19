/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddEditAssignProject.ProjectType_postRender = function (element, contentItem)
{  
    // Write code here.
        function updateWorkingDay()
        {
            msls.promiseOperation(CallGetProjectType).then(function PromiseSuccess(PromiseResult) {
                var user = PromiseResult;              
                    contentItem.screen.AssignProject.ProjectType = user;
                    //this.FindControl("ProjectType").IsEnabled = false;
            });
        }
        
        contentItem.dataBind("screen.AssignProject.ProjectsInCompany", updateWorkingDay);
 


        function CallGetProjectType(operation) {
            var sdd = contentItem.screen.AssignProject.ProjectsInCompany.ProjectName;
            $.ajax({
                type: 'post',
                data: { sdd: sdd },
                url: '../ProjectType.ashx',
                success: operation.code(function AjaxSuccess(AjaxResult) {
                    operation.complete(AjaxResult);
                })
            });
        }
};

myapp.AddEditAssignProject.created = function (screen) {
    // Write code here.
    //$(element).parent().find("ProjectType").css({ "font-size": "100px" });
    //screen.findContentItem("ProjectType").isEnabled = false;
    screen.findContentItem("ProjectType").isReadOnly = true;
};