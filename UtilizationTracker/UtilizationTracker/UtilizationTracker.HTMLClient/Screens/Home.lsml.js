
myapp.Home.LabText_postRender = function (element, contentItem) {
    // Write code here.
    msls.promiseOperation(CallGetEmpName).then(function PromiseSuccess(PromiseResult) {
        // Set the result of the CallGetUserName function to the 
        // UserName of the entity
        var user = PromiseResult;
        element.innerText = "Welcome " + user;
    });

    element.style.fontSize = "27px";
    element.style.color = "blue";
    $(element).css({ "text-align": "right" });
   

   

   

};

function CallGetEmpName(operation) {
    $.ajax({
        type: 'post',
        data: {},
        url: '../GetEmpName.ashx',
        success: operation.code(function AjaxSuccess(AjaxResult) {
            operation.complete(AjaxResult);
        })
    });
}

function CallGetRole(operation) {
    $.ajax({
        type: 'post',
        data: {},
        url: '../Handler2.ashx',
        success: operation.code(function AjaxSuccess(AjaxResult) {
            operation.complete(AjaxResult);
        })
    });
}


function CallProjectRole(operation) {
    $.ajax({
        type: 'post',
        data: {},
        url: '../GetProjectRole.ashx',
        success: operation.code(function AjaxSuccess(AjaxResult) {
            operation.complete(AjaxResult);
        })
    });
}


function SendEmail(operation) {
    $.ajax({
        type: 'post',
        data: {},
        url: '../SendEmail.ashx',
        success: operation.code(function AjaxSuccess(AjaxResult) {
            operation.complete(AjaxResult);
        })
    });
}


myapp.Home.created = function (screen) {


    // Write code here.
    msls.promiseOperation(CallGetRole).then(function PromiseSuccess(PromiseResult) {
        // Set the result of the CallGetUserName function to the 
        // UserName of the entity
        var Role = PromiseResult;
        if (Role == 'Employee') {
            screen.findContentItem("ViewReportees").isVisible = false;
            screen.findContentItem("AddEmployee").isVisible = false;
            screen.findContentItem("SignUp").isVisible = false;
            screen.findContentItem("AddMonth").isVisible = false;
            screen.findContentItem("ViewEmployees").isVisible = false;
            screen.findContentItem("AddProjects").isVisible = false;
            screen.findContentItem("ProjectMembersReport").isVisible = false;
        }
        if (Role == 'Manager') {
            
            screen.findContentItem("AddEmployee").isVisible = false;
            screen.findContentItem("SignUp").isVisible = false;
            screen.findContentItem("AddMonth").isVisible = false;
            screen.findContentItem("ViewEmployees").isVisible = false;
            screen.findContentItem("AddProjects").isVisible = false;
            screen.findContentItem("ProjectMembersReport").isVisible = false;
        }
        if (Role == 'Admin') {

            screen.findContentItem("AddEditUtilization").isVisible = false;
            screen.findContentItem("ViewTracker").isVisible = false;
            screen.findContentItem("ViewReportees").isVisible = false;
            screen.findContentItem("ProjectDetails").isVisible = false;
            screen.findContentItem("EmployeeMonths").isVisible = false;
            screen.findContentItem("EmployeeProject").isVisible = false;
            screen.findContentItem("ProjectReport").isVisible = false;
            screen.findContentItem("ProjectMembersReport").isVisible = false;
        }
       
    });

    msls.promiseOperation(CallProjectRole).then(function PromiseSuccess(PromiseResult)
    {
        var ProjectRole = PromiseResult;
        if (ProjectRole == 'Project Manager')
        {
            screen.findContentItem("ProjectMembersReport").isVisible = true;
        }
    });
};



myapp.Home.Group_postRender = function (element, contentItem) {
    // Write code here.
    $(element).parent().parent().css({ background: '#f5f5dc' });
};




myapp.Home.EmailSave_execute = function (screen)
{
    // Write code here.
    msls.promiseOperation(SendEmail).then(function PromiseSuccess(PromiseResult) {
       // document.getElementById('EmailSave').innerText = 'your tip has been submitted!';
        //document.getElementById('EmailSave').innerHTML = 'your tip has been submitted!';
        //element.innerText = "Email sent successfully";
        msls.showMessageBox("Email sent successfully");
        

    });
    //element.style.fontSize = "27px";
    //element.style.color = "blue";
    //$(element).css({ "text-align": "right" });
};