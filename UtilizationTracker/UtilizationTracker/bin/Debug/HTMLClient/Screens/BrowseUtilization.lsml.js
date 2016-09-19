/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.BrowseUtilization.Back_execute = function (screen) {
    // Write code here.
    window.history.go(-1);
};
myapp.BrowseUtilization.created = function (screen)
{
    // Write code here.
  
    msls.showLogOut = true;
};
myapp.BrowseUtilization.Back_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("Back");
    $(element).css({ "min-width": 1 });
};

myapp.BrowseUtilization.Parameters_postRender = function (element, contentItem) {
    // Write code here.
    $(element).children().addClass("scroll");
};



myapp.BrowseUtilization.Close_execute = function (screen) {
    // Write code here.
    screen.closePopup();
};
myapp.BrowseUtilization.OK_execute = function (screen)
{
    // Write code here.
    // Write code here.
    //var SendEmailTo = document.getElementById('<%=screen.dropdown.ManagerName.ClientID%>');
    //var SendEmailTo = document.getElementById('<%=screen.dropdown.dropdownTemplate.ClientID %>');
    //var SendEmailTo = document.getElementById('<%=screen.dropdown.ManagerName.ClientID %>');
    //var SendEmailTo = document.getElementById('<%=screen.dropdown.ManagerName.ClientID %>');
    //var element = document.createElement("div");
    //element.id = 'testqq';
    //var el = document.getElementById('testqq');
    //var SendEmailTo = document.getElementById('screen.dropdown.ManagerName.ClientID');
    //var dd = screen.findContentItem("dropdown");
    //screen.dropdown.ManagerName = dd.choiceList[screen.dropdown].stringValue;
    //divisionDropDown = screen.findContentItem("DivisionDropdown");
    //screen.Division = divisionDropDown.choiceList[screen.DivisionDropdown].stringValue;
    //var SendEmailTo = screen.dropdown.ManagerName;
   // var SendEmailTo = document.getElementById("EmailDropdown1").value;
    //screen.dropdown.ManagerName = 'll';
    //var k = screen.dropdown.ManagerName;
    if (screen.FromDate != undefined) {
        if (screen.ToDate != undefined)
        {
            
            if (screen.findContentItem("PMTeamProject").value == undefined || screen.findContentItem("PMTeamProject").value == null) {
                screen.findContentItem("PMTeamProject").value = "Select Item";
                screen.PMTeamProject.ManagerName = "Select Item";
                screen.findContentItem("PMTeamProject").choiceList = screen.findContentItem("PMTeamProject").value;
                //contentItem.value = "My Default value";
                var SendEmailTo = screen.PMTeamProject.ManagerName;
            }
            else {
                var SendEmailTo = screen.PMTeamProjectList.selectedItem.ManagerName;
                var DropdownProject = screen.PMTeamProjectList.selectedItem.ProjectName;
            }

          
            //var SendEmailTo = document.getElementById('<%=screen.EmailList.selectedItem.ManagerName.ClientID%>');
            //screen.dropdown.ManagerName = null;
            //var x = document.getElementsByName('<%= screen.dropdown.ManagerName%>');
            //var p = screen.Property2.ProjectName;
            
            //if (screen.EmailList.selectedItem.ManagerName != undefined) {
            //    var SendEmailTo = screen.EmailList.selectedItem.ManagerName;
            //}
                //var SendEmailTo = screen.dropdown.ManagerName;
               // var SendEmailTo = document.getElementById('<%=screen.dropdown.ManagerName.ClientID%>');
            if (SendEmailTo != null) {
                screen.closePopup();
                msls.promiseOperation(GetPMProject).then(function PromiseSuccess(PromiseResult) {
                    var user = PromiseResult;
                    if (user == "Manager") {
                        msls.promiseOperation(SendEmail).then(function PromiseSuccess(PromiseResult) {
                            msls.showMessageBox("Email sent successfully");
                        });
                    }
                    else {
                        if (screen.findContentItem("Property2").value == undefined || screen.findContentItem("Property2").value == null) {
                            msls.showMessageBox("Please select respective project to send an email");
                        }
                        else {
                            var ProjectSelection = screen.Property2.ProjectName;
                            if (DropdownProject == ProjectSelection) {
                                msls.promiseOperation(SendEmail).then(function PromiseSuccess(PromiseResult) {
                                    msls.showMessageBox("Email sent successfully");
                                });
                            }
                            else {
                                msls.showMessageBox("Please select respective project to send an email");
                            }
                            //msls.promiseOperation(GetProjectList).then(function PromiseSuccess(PromiseResult) {
                            //    var Project = PromiseResult;
                            //    if (Project != "")
                            //    {
                            //        msls.promiseOperation(SendEmail).then(function PromiseSuccess(PromiseResult) {
                            //            msls.showMessageBox("Email sent successfully");
                            //        });
                            //    }
                            //    else {
                            //        msls.showMessageBox("Please select respective project to send an email");
                            //    }
                            //});

                        }
                    }
                });

               


                //msls.promiseOperation(SendEmail).then(function PromiseSuccess(PromiseResult) {
                //    msls.showMessageBox("Email sent successfully");
                //});
            }
            else { msls.showMessageBox("Enter Recipient name to send an email"); }

        }
        else {
            screen.closePopup();
            msls.showMessageBox("Enter ToDate to send an email");
        }
    }

    else {
        screen.closePopup();
        msls.showMessageBox("Select Filters to send an email");

    }
    //function GetProjectList(operation) {
      
    //    function convert(str) {
    //        var ProjectSelection = screen.Property2.ProjectName;
           
    //        $.ajax({
    //            type: 'post',
    //            data: { SendEmailTo: SendEmailTo, ProjectSelection: ProjectSelection, DropdownProject: DropdownProject },
    //            url: '../GetProjectList.ashx',
    //            success: operation.code(function AjaxSuccess(AjaxResult) {
    //                operation.complete(AjaxResult);
    //            })
    //        });
    //    }
    //    convert(" ");
    //}

    function GetPMProject(operation) {

        function convert(str) {

            $.ajax({
                type: 'post',
                data: { SendEmailTo: SendEmailTo },
                url: '../GetPMProject.ashx',
                success: operation.code(function AjaxSuccess(AjaxResult) {
                    operation.complete(AjaxResult);
                })
            });
        }
        convert(" ");
    }

    function SendEmail(operation) {

        function convert(str) {
            if (screen.findContentItem("Property2").value != undefined || screen.findContentItem("Property2").value != null) {
                var ProjectSelection = screen.Property2.ProjectName;
            }
            else {
                var ProjectSelection = "";
            }
            var FromDate = screen.FromDate;
            var ToDate = screen.ToDate;

            var Fdate = new Date(FromDate),
                Fmnth = ("0" + (Fdate.getMonth() + 1)).slice(-2),
                Fday = ("0" + Fdate.getDate()).slice(-2);
            Fyear = Fdate.getFullYear();
            var FrmDate = Fyear + "-" + Fmnth + "-" + Fday;
            var FCDate = Fday + "/" + Fmnth + "/" + Fyear;

            var Tdate = new Date(ToDate),
               Tmnth = ("0" + (Tdate.getMonth() + 1)).slice(-2),
               Tday = ("0" + Tdate.getDate()).slice(-2);
            Tyear = Tdate.getFullYear();
            var ToDate = Tyear + "-" + Tmnth + "-" + Tday;
            var TCDate = Tday + "/" + Tmnth + "/" + Tyear;
            $.ajax({
                type: 'post',
                data: { FrmDate: FrmDate, ToDate: ToDate, SendEmailTo: SendEmailTo, ProjectSelection: ProjectSelection, FCDate: FCDate, TCDate: TCDate },
                url: '../SendWeeklyUT.ashx',
                success: operation.code(function AjaxSuccess(AjaxResult) {
                    operation.complete(AjaxResult);
                })
            });
        }
        convert(" ");
    }

};

//myapp.BrowseUtilization.dropdown_postRender = function (element, contentItem) {
//    // Write code here.
//    //contentItem.screen.dropdown.ManagerName = "";
//   // contentItem.screen.EmailList.selectedItem.ManagerName.toString() = "";
//    //contentItem.screen.EmailList.selectedItem = "";
//    //if (contentItem.value == undefined || contentItem.value == null) {
//    //    contentItem.value = "My Default value";
//        //element.outerHTML = contentItem.value;
//        //element.textContent = contentItem.value;
//        //element.innerHTML = contentItem.value;
//    //}
//};