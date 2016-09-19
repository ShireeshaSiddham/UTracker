/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditAssignProject.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAssignProject
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAssignProject,
            data: lightSwitchApplication.AddEditAssignProject,
            value: lightSwitchApplication.AddEditAssignProject
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditAssignProject,
            data: lightSwitchApplication.AddEditAssignProject,
            value: lightSwitchApplication.AssignProject
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAssignProject,
            data: lightSwitchApplication.AssignProject,
            value: lightSwitchApplication.AssignProject
        },
        ProjectsInCompany: {
            _$class: msls.ContentItem,
            _$name: "ProjectsInCompany",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAssignProject,
            data: lightSwitchApplication.AssignProject,
            value: lightSwitchApplication.ProjectsInCompany
        },
        ProjectsInCompany1: {
            _$class: msls.ContentItem,
            _$name: "ProjectsInCompany1",
            _$parentName: "ProjectsInCompany",
            screen: lightSwitchApplication.AddEditAssignProject,
            data: lightSwitchApplication.ProjectsInCompany,
            value: lightSwitchApplication.ProjectsInCompany
        },
        EmployeeDetail: {
            _$class: msls.ContentItem,
            _$name: "EmployeeDetail",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAssignProject,
            data: lightSwitchApplication.AssignProject,
            value: lightSwitchApplication.EmployeeDetail
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "EmployeeDetail",
            screen: lightSwitchApplication.AddEditAssignProject,
            data: lightSwitchApplication.EmployeeDetail,
            value: lightSwitchApplication.EmployeeDetail
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAssignProject,
            data: lightSwitchApplication.AssignProject,
            value: lightSwitchApplication.AssignProject
        },
        ProjectType: {
            _$class: msls.ContentItem,
            _$name: "ProjectType",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditAssignProject,
            data: lightSwitchApplication.AssignProject,
            value: String
        },
        EmpRole: {
            _$class: msls.ContentItem,
            _$name: "EmpRole",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditAssignProject,
            data: lightSwitchApplication.AssignProject,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAssignProject
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditAssignProject, {
        /// <field>
        /// Called when a new AddEditAssignProject screen is created.
        /// <br/>created(msls.application.AddEditAssignProject screen)
        /// </field>
        created: [lightSwitchApplication.AddEditAssignProject],
        /// <field>
        /// Called before changes on an active AddEditAssignProject screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditAssignProject screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditAssignProject],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssignProject().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssignProject().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssignProject().findContentItem("left"); }],
        /// <field>
        /// Called after the ProjectsInCompany content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectsInCompany_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssignProject().findContentItem("ProjectsInCompany"); }],
        /// <field>
        /// Called after the ProjectsInCompany1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectsInCompany1_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssignProject().findContentItem("ProjectsInCompany1"); }],
        /// <field>
        /// Called after the EmployeeDetail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeDetail_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssignProject().findContentItem("EmployeeDetail"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssignProject().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssignProject().findContentItem("right"); }],
        /// <field>
        /// Called after the ProjectType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectType_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssignProject().findContentItem("ProjectType"); }],
        /// <field>
        /// Called after the EmpRole content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpRole_postRender: [$element, function () { return new lightSwitchApplication.AddEditAssignProject().findContentItem("EmpRole"); }]
    });

    lightSwitchApplication.BrowseAssignProjects.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseAssignProjects
        },
        AssignProjectList: {
            _$class: msls.ContentItem,
            _$name: "AssignProjectList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseAssignProjects,
            data: lightSwitchApplication.BrowseAssignProjects,
            value: lightSwitchApplication.BrowseAssignProjects
        },
        Back: {
            _$class: msls.ContentItem,
            _$name: "Back",
            _$parentName: "AssignProjectList",
            screen: lightSwitchApplication.BrowseAssignProjects
        },
        AssignProjects: {
            _$class: msls.ContentItem,
            _$name: "AssignProjects",
            _$parentName: "AssignProjectList",
            screen: lightSwitchApplication.BrowseAssignProjects,
            data: lightSwitchApplication.BrowseAssignProjects,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseAssignProjects,
                _$entry: {
                    elementType: lightSwitchApplication.AssignProject
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "AssignProjects",
            screen: lightSwitchApplication.BrowseAssignProjects,
            data: lightSwitchApplication.AssignProject,
            value: lightSwitchApplication.AssignProject
        },
        ProjectsInCompany: {
            _$class: msls.ContentItem,
            _$name: "ProjectsInCompany",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseAssignProjects,
            data: lightSwitchApplication.AssignProject,
            value: lightSwitchApplication.ProjectsInCompany
        },
        ProjectType: {
            _$class: msls.ContentItem,
            _$name: "ProjectType",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseAssignProjects,
            data: lightSwitchApplication.AssignProject,
            value: String
        },
        EmployeeDetail: {
            _$class: msls.ContentItem,
            _$name: "EmployeeDetail",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseAssignProjects,
            data: lightSwitchApplication.AssignProject,
            value: lightSwitchApplication.EmployeeDetail
        },
        EmpRole: {
            _$class: msls.ContentItem,
            _$name: "EmpRole",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseAssignProjects,
            data: lightSwitchApplication.AssignProject,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseAssignProjects
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseAssignProjects, {
        /// <field>
        /// Called when a new BrowseAssignProjects screen is created.
        /// <br/>created(msls.application.BrowseAssignProjects screen)
        /// </field>
        created: [lightSwitchApplication.BrowseAssignProjects],
        /// <field>
        /// Called before changes on an active BrowseAssignProjects screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseAssignProjects screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseAssignProjects],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.BrowseAssignProjects screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.BrowseAssignProjects],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.BrowseAssignProjects screen)
        /// </field>
        Back_execute: [lightSwitchApplication.BrowseAssignProjects],
        /// <field>
        /// Called after the AssignProjectList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssignProjectList_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssignProjects().findContentItem("AssignProjectList"); }],
        /// <field>
        /// Called after the Back content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Back_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssignProjects().findContentItem("Back"); }],
        /// <field>
        /// Called after the AssignProjects content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssignProjects_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssignProjects().findContentItem("AssignProjects"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssignProjects().findContentItem("rows"); }],
        /// <field>
        /// Called after the ProjectsInCompany content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectsInCompany_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssignProjects().findContentItem("ProjectsInCompany"); }],
        /// <field>
        /// Called after the ProjectType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectType_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssignProjects().findContentItem("ProjectType"); }],
        /// <field>
        /// Called after the EmployeeDetail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeDetail_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssignProjects().findContentItem("EmployeeDetail"); }],
        /// <field>
        /// Called after the EmpRole content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpRole_postRender: [$element, function () { return new lightSwitchApplication.BrowseAssignProjects().findContentItem("EmpRole"); }]
    });

    lightSwitchApplication.ViewAssignProject.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewAssignProject
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewAssignProject,
            data: lightSwitchApplication.ViewAssignProject,
            value: lightSwitchApplication.ViewAssignProject
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewAssignProject,
            data: lightSwitchApplication.ViewAssignProject,
            value: lightSwitchApplication.AssignProject
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewAssignProject,
            data: lightSwitchApplication.AssignProject,
            value: lightSwitchApplication.AssignProject
        },
        EmpRole: {
            _$class: msls.ContentItem,
            _$name: "EmpRole",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewAssignProject,
            data: lightSwitchApplication.AssignProject,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewAssignProject,
            data: lightSwitchApplication.AssignProject,
            value: lightSwitchApplication.AssignProject
        },
        EmployeeDetail: {
            _$class: msls.ContentItem,
            _$name: "EmployeeDetail",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewAssignProject,
            data: lightSwitchApplication.AssignProject,
            value: lightSwitchApplication.EmployeeDetail
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewAssignProject
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewAssignProject, {
        /// <field>
        /// Called when a new ViewAssignProject screen is created.
        /// <br/>created(msls.application.ViewAssignProject screen)
        /// </field>
        created: [lightSwitchApplication.ViewAssignProject],
        /// <field>
        /// Called before changes on an active ViewAssignProject screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewAssignProject screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewAssignProject],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewAssignProject().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewAssignProject().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewAssignProject().findContentItem("left"); }],
        /// <field>
        /// Called after the EmpRole content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpRole_postRender: [$element, function () { return new lightSwitchApplication.ViewAssignProject().findContentItem("EmpRole"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewAssignProject().findContentItem("right"); }],
        /// <field>
        /// Called after the EmployeeDetail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeDetail_postRender: [$element, function () { return new lightSwitchApplication.ViewAssignProject().findContentItem("EmployeeDetail"); }]
    });

    lightSwitchApplication.AddEditEmployeeDetail.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployeeDetail
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditEmployeeDetail,
            data: lightSwitchApplication.AddEditEmployeeDetail,
            value: lightSwitchApplication.AddEditEmployeeDetail
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditEmployeeDetail,
            data: lightSwitchApplication.AddEditEmployeeDetail,
            value: lightSwitchApplication.EmployeeDetail
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployeeDetail,
            data: lightSwitchApplication.EmployeeDetail,
            value: lightSwitchApplication.EmployeeDetail
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployeeDetail,
            data: lightSwitchApplication.EmployeeDetail,
            value: Number
        },
        Designation: {
            _$class: msls.ContentItem,
            _$name: "Designation",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployeeDetail,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployeeDetail,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        EmployeeDetail1: {
            _$class: msls.ContentItem,
            _$name: "EmployeeDetail1",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployeeDetail,
            data: lightSwitchApplication.EmployeeDetail,
            value: lightSwitchApplication.EmployeeDetail
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "EmployeeDetail1",
            screen: lightSwitchApplication.AddEditEmployeeDetail,
            data: lightSwitchApplication.EmployeeDetail,
            value: lightSwitchApplication.EmployeeDetail
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployeeDetail,
            data: lightSwitchApplication.EmployeeDetail,
            value: lightSwitchApplication.EmployeeDetail
        },
        EmpName: {
            _$class: msls.ContentItem,
            _$name: "EmpName",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditEmployeeDetail,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditEmployeeDetail,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        Role: {
            _$class: msls.ContentItem,
            _$name: "Role",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditEmployeeDetail,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployeeDetail
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditEmployeeDetail, {
        /// <field>
        /// Called when a new AddEditEmployeeDetail screen is created.
        /// <br/>created(msls.application.AddEditEmployeeDetail screen)
        /// </field>
        created: [lightSwitchApplication.AddEditEmployeeDetail],
        /// <field>
        /// Called before changes on an active AddEditEmployeeDetail screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditEmployeeDetail screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditEmployeeDetail],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.AddEditEmployeeDetail screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.AddEditEmployeeDetail],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.AddEditEmployeeDetail screen)
        /// </field>
        Back_execute: [lightSwitchApplication.AddEditEmployeeDetail],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeDetail().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeDetail().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeDetail().findContentItem("left"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeDetail().findContentItem("EmpID"); }],
        /// <field>
        /// Called after the Designation content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Designation_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeDetail().findContentItem("Designation"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeDetail().findContentItem("UserName"); }],
        /// <field>
        /// Called after the EmployeeDetail1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeDetail1_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeDetail().findContentItem("EmployeeDetail1"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeDetail().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeDetail().findContentItem("right"); }],
        /// <field>
        /// Called after the EmpName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpName_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeDetail().findContentItem("EmpName"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeDetail().findContentItem("Email"); }],
        /// <field>
        /// Called after the Role content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Role_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeDetail().findContentItem("Role"); }]
    });

    lightSwitchApplication.BrowseEmployeeDetails.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployeeDetails
        },
        EmployeeDetailList: {
            _$class: msls.ContentItem,
            _$name: "EmployeeDetailList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseEmployeeDetails,
            data: lightSwitchApplication.BrowseEmployeeDetails,
            value: lightSwitchApplication.BrowseEmployeeDetails
        },
        Back: {
            _$class: msls.ContentItem,
            _$name: "Back",
            _$parentName: "EmployeeDetailList",
            screen: lightSwitchApplication.BrowseEmployeeDetails
        },
        EmployeeDetails: {
            _$class: msls.ContentItem,
            _$name: "EmployeeDetails",
            _$parentName: "EmployeeDetailList",
            screen: lightSwitchApplication.BrowseEmployeeDetails,
            data: lightSwitchApplication.BrowseEmployeeDetails,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseEmployeeDetails,
                _$entry: {
                    elementType: lightSwitchApplication.EmployeeDetail
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "EmployeeDetails",
            screen: lightSwitchApplication.BrowseEmployeeDetails,
            data: lightSwitchApplication.EmployeeDetail,
            value: lightSwitchApplication.EmployeeDetail
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseEmployeeDetails,
            data: lightSwitchApplication.EmployeeDetail,
            value: Number
        },
        EmpName: {
            _$class: msls.ContentItem,
            _$name: "EmpName",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseEmployeeDetails,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        Designation: {
            _$class: msls.ContentItem,
            _$name: "Designation",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseEmployeeDetails,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseEmployeeDetails,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        Role: {
            _$class: msls.ContentItem,
            _$name: "Role",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseEmployeeDetails,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        EmployeeDetail1: {
            _$class: msls.ContentItem,
            _$name: "EmployeeDetail1",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseEmployeeDetails,
            data: lightSwitchApplication.EmployeeDetail,
            value: lightSwitchApplication.EmployeeDetail
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployeeDetails
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseEmployeeDetails, {
        /// <field>
        /// Called when a new BrowseEmployeeDetails screen is created.
        /// <br/>created(msls.application.BrowseEmployeeDetails screen)
        /// </field>
        created: [lightSwitchApplication.BrowseEmployeeDetails],
        /// <field>
        /// Called before changes on an active BrowseEmployeeDetails screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseEmployeeDetails screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseEmployeeDetails],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.BrowseEmployeeDetails screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.BrowseEmployeeDetails],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.BrowseEmployeeDetails screen)
        /// </field>
        Back_execute: [lightSwitchApplication.BrowseEmployeeDetails],
        /// <field>
        /// Called after the EmployeeDetailList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeDetailList_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeDetails().findContentItem("EmployeeDetailList"); }],
        /// <field>
        /// Called after the Back content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Back_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeDetails().findContentItem("Back"); }],
        /// <field>
        /// Called after the EmployeeDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeDetails_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeDetails().findContentItem("EmployeeDetails"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeDetails().findContentItem("rows"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeDetails().findContentItem("EmpID"); }],
        /// <field>
        /// Called after the EmpName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeDetails().findContentItem("EmpName"); }],
        /// <field>
        /// Called after the Designation content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Designation_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeDetails().findContentItem("Designation"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeDetails().findContentItem("Email"); }],
        /// <field>
        /// Called after the Role content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Role_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeDetails().findContentItem("Role"); }],
        /// <field>
        /// Called after the EmployeeDetail1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeDetail1_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeDetails().findContentItem("EmployeeDetail1"); }]
    });

    lightSwitchApplication.ViewEmployeeDetail.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewEmployeeDetail
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewEmployeeDetail,
            data: lightSwitchApplication.ViewEmployeeDetail,
            value: lightSwitchApplication.ViewEmployeeDetail
        },
        Back: {
            _$class: msls.ContentItem,
            _$name: "Back",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewEmployeeDetail
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewEmployeeDetail,
            data: lightSwitchApplication.ViewEmployeeDetail,
            value: lightSwitchApplication.EmployeeDetail
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewEmployeeDetail,
            data: lightSwitchApplication.EmployeeDetail,
            value: lightSwitchApplication.EmployeeDetail
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewEmployeeDetail,
            data: lightSwitchApplication.EmployeeDetail,
            value: Number
        },
        EmpName: {
            _$class: msls.ContentItem,
            _$name: "EmpName",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewEmployeeDetail,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        Designation: {
            _$class: msls.ContentItem,
            _$name: "Designation",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewEmployeeDetail,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewEmployeeDetail,
            data: lightSwitchApplication.EmployeeDetail,
            value: lightSwitchApplication.EmployeeDetail
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewEmployeeDetail,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewEmployeeDetail,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        EmployeeDetail1: {
            _$class: msls.ContentItem,
            _$name: "EmployeeDetail1",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewEmployeeDetail,
            data: lightSwitchApplication.EmployeeDetail,
            value: lightSwitchApplication.EmployeeDetail
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewEmployeeDetail
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewEmployeeDetail, {
        /// <field>
        /// Called when a new ViewEmployeeDetail screen is created.
        /// <br/>created(msls.application.ViewEmployeeDetail screen)
        /// </field>
        created: [lightSwitchApplication.ViewEmployeeDetail],
        /// <field>
        /// Called before changes on an active ViewEmployeeDetail screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewEmployeeDetail screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewEmployeeDetail],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.ViewEmployeeDetail screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.ViewEmployeeDetail],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.ViewEmployeeDetail screen)
        /// </field>
        Back_execute: [lightSwitchApplication.ViewEmployeeDetail],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeDetail().findContentItem("Details"); }],
        /// <field>
        /// Called after the Back content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Back_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeDetail().findContentItem("Back"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeDetail().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeDetail().findContentItem("left"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeDetail().findContentItem("EmpID"); }],
        /// <field>
        /// Called after the EmpName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpName_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeDetail().findContentItem("EmpName"); }],
        /// <field>
        /// Called after the Designation content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Designation_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeDetail().findContentItem("Designation"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeDetail().findContentItem("right"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeDetail().findContentItem("Email"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeDetail().findContentItem("UserName"); }],
        /// <field>
        /// Called after the EmployeeDetail1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeDetail1_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeDetail().findContentItem("EmployeeDetail1"); }]
    });

    lightSwitchApplication.AddEditEmployeeMonth.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployeeMonth
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditEmployeeMonth,
            data: lightSwitchApplication.AddEditEmployeeMonth,
            value: lightSwitchApplication.AddEditEmployeeMonth
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditEmployeeMonth,
            data: lightSwitchApplication.AddEditEmployeeMonth,
            value: lightSwitchApplication.EmployeeMonth
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployeeMonth,
            data: lightSwitchApplication.EmployeeMonth,
            value: lightSwitchApplication.EmployeeMonth
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployeeMonth,
            data: lightSwitchApplication.EmployeeMonth,
            value: Number
        },
        MonthID: {
            _$class: msls.ContentItem,
            _$name: "MonthID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployeeMonth,
            data: lightSwitchApplication.EmployeeMonth,
            value: Number
        },
        Month: {
            _$class: msls.ContentItem,
            _$name: "Month",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployeeMonth,
            data: lightSwitchApplication.EmployeeMonth,
            value: lightSwitchApplication.Months
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Month",
            screen: lightSwitchApplication.AddEditEmployeeMonth,
            data: lightSwitchApplication.Months,
            value: lightSwitchApplication.Months
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployeeMonth,
            data: lightSwitchApplication.EmployeeMonth,
            value: lightSwitchApplication.EmployeeMonth
        },
        NoOfLeaves: {
            _$class: msls.ContentItem,
            _$name: "NoOfLeaves",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditEmployeeMonth,
            data: lightSwitchApplication.EmployeeMonth,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployeeMonth
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditEmployeeMonth, {
        /// <field>
        /// Called when a new AddEditEmployeeMonth screen is created.
        /// <br/>created(msls.application.AddEditEmployeeMonth screen)
        /// </field>
        created: [lightSwitchApplication.AddEditEmployeeMonth],
        /// <field>
        /// Called before changes on an active AddEditEmployeeMonth screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditEmployeeMonth screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditEmployeeMonth],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.AddEditEmployeeMonth screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.AddEditEmployeeMonth],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.AddEditEmployeeMonth screen)
        /// </field>
        Back_execute: [lightSwitchApplication.AddEditEmployeeMonth],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeMonth().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeMonth().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeMonth().findContentItem("left"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeMonth().findContentItem("EmpID"); }],
        /// <field>
        /// Called after the MonthID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthID_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeMonth().findContentItem("MonthID"); }],
        /// <field>
        /// Called after the Month content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Month_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeMonth().findContentItem("Month"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeMonth().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeMonth().findContentItem("right"); }],
        /// <field>
        /// Called after the NoOfLeaves content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NoOfLeaves_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeMonth().findContentItem("NoOfLeaves"); }]
    });

    lightSwitchApplication.BrowseEmployeeMonths.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployeeMonths
        },
        EmployeeMonthList: {
            _$class: msls.ContentItem,
            _$name: "EmployeeMonthList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseEmployeeMonths,
            data: lightSwitchApplication.BrowseEmployeeMonths,
            value: lightSwitchApplication.BrowseEmployeeMonths
        },
        Back: {
            _$class: msls.ContentItem,
            _$name: "Back",
            _$parentName: "EmployeeMonthList",
            screen: lightSwitchApplication.BrowseEmployeeMonths
        },
        CandidateMonthDetails: {
            _$class: msls.ContentItem,
            _$name: "CandidateMonthDetails",
            _$parentName: "EmployeeMonthList",
            screen: lightSwitchApplication.BrowseEmployeeMonths,
            data: lightSwitchApplication.BrowseEmployeeMonths,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseEmployeeMonths,
                _$entry: {
                    elementType: lightSwitchApplication.EmployeeMonth
                }
            }
        },
        CandidateMonthDetailsTemplate: {
            _$class: msls.ContentItem,
            _$name: "CandidateMonthDetailsTemplate",
            _$parentName: "CandidateMonthDetails",
            screen: lightSwitchApplication.BrowseEmployeeMonths,
            data: lightSwitchApplication.EmployeeMonth,
            value: lightSwitchApplication.EmployeeMonth
        },
        EmpID1: {
            _$class: msls.ContentItem,
            _$name: "EmpID1",
            _$parentName: "CandidateMonthDetailsTemplate",
            screen: lightSwitchApplication.BrowseEmployeeMonths,
            data: lightSwitchApplication.EmployeeMonth,
            value: Number
        },
        MonthID1: {
            _$class: msls.ContentItem,
            _$name: "MonthID1",
            _$parentName: "CandidateMonthDetailsTemplate",
            screen: lightSwitchApplication.BrowseEmployeeMonths,
            data: lightSwitchApplication.EmployeeMonth,
            value: Number
        },
        Months2: {
            _$class: msls.ContentItem,
            _$name: "Months2",
            _$parentName: "CandidateMonthDetailsTemplate",
            screen: lightSwitchApplication.BrowseEmployeeMonths,
            data: lightSwitchApplication.EmployeeMonth,
            value: lightSwitchApplication.Months
        },
        NoOfLeaves1: {
            _$class: msls.ContentItem,
            _$name: "NoOfLeaves1",
            _$parentName: "CandidateMonthDetailsTemplate",
            screen: lightSwitchApplication.BrowseEmployeeMonths,
            data: lightSwitchApplication.EmployeeMonth,
            value: Number
        },
        EmployeeDetail: {
            _$class: msls.ContentItem,
            _$name: "EmployeeDetail",
            _$parentName: "CandidateMonthDetailsTemplate",
            screen: lightSwitchApplication.BrowseEmployeeMonths,
            data: lightSwitchApplication.EmployeeMonth,
            value: lightSwitchApplication.EmployeeDetail
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployeeMonths
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseEmployeeMonths, {
        /// <field>
        /// Called when a new BrowseEmployeeMonths screen is created.
        /// <br/>created(msls.application.BrowseEmployeeMonths screen)
        /// </field>
        created: [lightSwitchApplication.BrowseEmployeeMonths],
        /// <field>
        /// Called before changes on an active BrowseEmployeeMonths screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseEmployeeMonths screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseEmployeeMonths],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.BrowseEmployeeMonths screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.BrowseEmployeeMonths],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.BrowseEmployeeMonths screen)
        /// </field>
        Back_execute: [lightSwitchApplication.BrowseEmployeeMonths],
        /// <field>
        /// Called after the EmployeeMonthList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeMonthList_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeMonths().findContentItem("EmployeeMonthList"); }],
        /// <field>
        /// Called after the Back content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Back_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeMonths().findContentItem("Back"); }],
        /// <field>
        /// Called after the CandidateMonthDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CandidateMonthDetails_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeMonths().findContentItem("CandidateMonthDetails"); }],
        /// <field>
        /// Called after the CandidateMonthDetailsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CandidateMonthDetailsTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeMonths().findContentItem("CandidateMonthDetailsTemplate"); }],
        /// <field>
        /// Called after the EmpID1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID1_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeMonths().findContentItem("EmpID1"); }],
        /// <field>
        /// Called after the MonthID1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthID1_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeMonths().findContentItem("MonthID1"); }],
        /// <field>
        /// Called after the Months2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Months2_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeMonths().findContentItem("Months2"); }],
        /// <field>
        /// Called after the NoOfLeaves1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NoOfLeaves1_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeMonths().findContentItem("NoOfLeaves1"); }],
        /// <field>
        /// Called after the EmployeeDetail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeDetail_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeMonths().findContentItem("EmployeeDetail"); }]
    });

    lightSwitchApplication.ViewEmployeeMonth.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewEmployeeMonth
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewEmployeeMonth,
            data: lightSwitchApplication.ViewEmployeeMonth,
            value: lightSwitchApplication.ViewEmployeeMonth
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewEmployeeMonth,
            data: lightSwitchApplication.ViewEmployeeMonth,
            value: lightSwitchApplication.EmployeeMonth
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewEmployeeMonth,
            data: lightSwitchApplication.EmployeeMonth,
            value: lightSwitchApplication.EmployeeMonth
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewEmployeeMonth,
            data: lightSwitchApplication.EmployeeMonth,
            value: Number
        },
        MonthID: {
            _$class: msls.ContentItem,
            _$name: "MonthID",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewEmployeeMonth,
            data: lightSwitchApplication.EmployeeMonth,
            value: Number
        },
        NoOfLeaves: {
            _$class: msls.ContentItem,
            _$name: "NoOfLeaves",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewEmployeeMonth,
            data: lightSwitchApplication.EmployeeMonth,
            value: Number
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewEmployeeMonth,
            data: lightSwitchApplication.EmployeeMonth,
            value: lightSwitchApplication.EmployeeMonth
        },
        EmployeeDetail: {
            _$class: msls.ContentItem,
            _$name: "EmployeeDetail",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewEmployeeMonth,
            data: lightSwitchApplication.EmployeeMonth,
            value: lightSwitchApplication.EmployeeDetail
        },
        Month: {
            _$class: msls.ContentItem,
            _$name: "Month",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewEmployeeMonth,
            data: lightSwitchApplication.EmployeeMonth,
            value: lightSwitchApplication.Months
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewEmployeeMonth
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewEmployeeMonth, {
        /// <field>
        /// Called when a new ViewEmployeeMonth screen is created.
        /// <br/>created(msls.application.ViewEmployeeMonth screen)
        /// </field>
        created: [lightSwitchApplication.ViewEmployeeMonth],
        /// <field>
        /// Called before changes on an active ViewEmployeeMonth screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewEmployeeMonth screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewEmployeeMonth],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.ViewEmployeeMonth screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.ViewEmployeeMonth],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.ViewEmployeeMonth screen)
        /// </field>
        Back_execute: [lightSwitchApplication.ViewEmployeeMonth],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeMonth().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeMonth().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeMonth().findContentItem("left"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeMonth().findContentItem("EmpID"); }],
        /// <field>
        /// Called after the MonthID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthID_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeMonth().findContentItem("MonthID"); }],
        /// <field>
        /// Called after the NoOfLeaves content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NoOfLeaves_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeMonth().findContentItem("NoOfLeaves"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeMonth().findContentItem("right"); }],
        /// <field>
        /// Called after the EmployeeDetail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeDetail_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeMonth().findContentItem("EmployeeDetail"); }],
        /// <field>
        /// Called after the Month content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Month_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeMonth().findContentItem("Month"); }]
    });

    lightSwitchApplication.AddEditEmployeeProject.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployeeProject
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditEmployeeProject,
            data: lightSwitchApplication.AddEditEmployeeProject,
            value: lightSwitchApplication.AddEditEmployeeProject
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditEmployeeProject,
            data: lightSwitchApplication.AddEditEmployeeProject,
            value: lightSwitchApplication.EmployeeProject
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.EmployeeProject
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        ProjectID: {
            _$class: msls.ContentItem,
            _$name: "ProjectID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        TaskID: {
            _$class: msls.ContentItem,
            _$name: "TaskID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        ProjectDetail: {
            _$class: msls.ContentItem,
            _$name: "ProjectDetail",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.ProjectDetail
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "ProjectDetail",
            screen: lightSwitchApplication.AddEditEmployeeProject,
            data: lightSwitchApplication.ProjectDetail,
            value: lightSwitchApplication.ProjectDetail
        },
        c_Date: {
            _$class: msls.ContentItem,
            _$name: "c_Date",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: Date
        },
        Hours: {
            _$class: msls.ContentItem,
            _$name: "Hours",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.EmployeeProject
        },
        SubProject: {
            _$class: msls.ContentItem,
            _$name: "SubProject",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: String
        },
        Month: {
            _$class: msls.ContentItem,
            _$name: "Month",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.Months
        },
        MonthTemplate: {
            _$class: msls.ContentItem,
            _$name: "MonthTemplate",
            _$parentName: "Month",
            screen: lightSwitchApplication.AddEditEmployeeProject,
            data: lightSwitchApplication.Months,
            value: lightSwitchApplication.Months
        },
        Months: {
            _$class: msls.ContentItem,
            _$name: "Months",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.Months
        },
        Months1: {
            _$class: msls.ContentItem,
            _$name: "Months1",
            _$parentName: "Months",
            screen: lightSwitchApplication.AddEditEmployeeProject,
            data: lightSwitchApplication.Months,
            value: lightSwitchApplication.Months
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditEmployeeProject
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditEmployeeProject, {
        /// <field>
        /// Called when a new AddEditEmployeeProject screen is created.
        /// <br/>created(msls.application.AddEditEmployeeProject screen)
        /// </field>
        created: [lightSwitchApplication.AddEditEmployeeProject],
        /// <field>
        /// Called before changes on an active AddEditEmployeeProject screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditEmployeeProject screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditEmployeeProject],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.AddEditEmployeeProject screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.AddEditEmployeeProject],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.AddEditEmployeeProject screen)
        /// </field>
        Back_execute: [lightSwitchApplication.AddEditEmployeeProject],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeProject().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeProject().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeProject().findContentItem("left"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeProject().findContentItem("EmpID"); }],
        /// <field>
        /// Called after the ProjectID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectID_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeProject().findContentItem("ProjectID"); }],
        /// <field>
        /// Called after the TaskID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TaskID_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeProject().findContentItem("TaskID"); }],
        /// <field>
        /// Called after the ProjectDetail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectDetail_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeProject().findContentItem("ProjectDetail"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeProject().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the c_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        c_Date_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeProject().findContentItem("c_Date"); }],
        /// <field>
        /// Called after the Hours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hours_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeProject().findContentItem("Hours"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeProject().findContentItem("right"); }],
        /// <field>
        /// Called after the SubProject content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SubProject_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeProject().findContentItem("SubProject"); }],
        /// <field>
        /// Called after the Month content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Month_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeProject().findContentItem("Month"); }],
        /// <field>
        /// Called after the MonthTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeProject().findContentItem("MonthTemplate"); }],
        /// <field>
        /// Called after the Months content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Months_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeProject().findContentItem("Months"); }],
        /// <field>
        /// Called after the Months1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Months1_postRender: [$element, function () { return new lightSwitchApplication.AddEditEmployeeProject().findContentItem("Months1"); }]
    });

    lightSwitchApplication.BrowseEmployeeProjects.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployeeProjects
        },
        EmployeeProjectList: {
            _$class: msls.ContentItem,
            _$name: "EmployeeProjectList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.BrowseEmployeeProjects,
            value: lightSwitchApplication.BrowseEmployeeProjects
        },
        Back: {
            _$class: msls.ContentItem,
            _$name: "Back",
            _$parentName: "EmployeeProjectList",
            screen: lightSwitchApplication.BrowseEmployeeProjects
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "EmployeeProjectList",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.BrowseEmployeeProjects,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseEmployeeProjects,
                _$entry: {
                    elementType: lightSwitchApplication.EmployeeDetail
                }
            }
        },
        UserNameTemplate: {
            _$class: msls.ContentItem,
            _$name: "UserNameTemplate",
            _$parentName: "UserName",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.EmployeeDetail,
            value: lightSwitchApplication.EmployeeDetail
        },
        Tracker: {
            _$class: msls.ContentItem,
            _$name: "Tracker",
            _$parentName: "EmployeeProjectList",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.BrowseEmployeeProjects,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseEmployeeProjects,
                _$entry: {
                    elementType: lightSwitchApplication.EmployeeProject
                }
            }
        },
        TrackerTemplate: {
            _$class: msls.ContentItem,
            _$name: "TrackerTemplate",
            _$parentName: "Tracker",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.EmployeeProject
        },
        EmpID1: {
            _$class: msls.ContentItem,
            _$name: "EmpID1",
            _$parentName: "TrackerTemplate",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        ProjectID1: {
            _$class: msls.ContentItem,
            _$name: "ProjectID1",
            _$parentName: "TrackerTemplate",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        TaskID: {
            _$class: msls.ContentItem,
            _$name: "TaskID",
            _$parentName: "TrackerTemplate",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        ProjectDetail2: {
            _$class: msls.ContentItem,
            _$name: "ProjectDetail2",
            _$parentName: "TrackerTemplate",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.ProjectDetail
        },
        SubProject: {
            _$class: msls.ContentItem,
            _$name: "SubProject",
            _$parentName: "TrackerTemplate",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.EmployeeProject,
            value: String
        },
        Months2: {
            _$class: msls.ContentItem,
            _$name: "Months2",
            _$parentName: "TrackerTemplate",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.Months
        },
        c_Date1: {
            _$class: msls.ContentItem,
            _$name: "c_Date1",
            _$parentName: "TrackerTemplate",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.EmployeeProject,
            value: Date
        },
        Hours1: {
            _$class: msls.ContentItem,
            _$name: "Hours1",
            _$parentName: "TrackerTemplate",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.EmployeeProject,
            value: String
        },
        TotalWorkedHours: {
            _$class: msls.ContentItem,
            _$name: "TotalWorkedHours",
            _$parentName: "EmployeeProjectList",
            screen: lightSwitchApplication.BrowseEmployeeProjects,
            data: lightSwitchApplication.BrowseEmployeeProjects,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployeeProjects
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseEmployeeProjects, {
        /// <field>
        /// Called when a new BrowseEmployeeProjects screen is created.
        /// <br/>created(msls.application.BrowseEmployeeProjects screen)
        /// </field>
        created: [lightSwitchApplication.BrowseEmployeeProjects],
        /// <field>
        /// Called before changes on an active BrowseEmployeeProjects screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseEmployeeProjects screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseEmployeeProjects],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.BrowseEmployeeProjects screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.BrowseEmployeeProjects],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.BrowseEmployeeProjects screen)
        /// </field>
        Back_execute: [lightSwitchApplication.BrowseEmployeeProjects],
        /// <field>
        /// Called to determine if the MonthWise method can be executed.
        /// <br/>canExecute(msls.application.BrowseEmployeeProjects screen)
        /// </field>
        MonthWise_canExecute: [lightSwitchApplication.BrowseEmployeeProjects],
        /// <field>
        /// Called to execute the MonthWise method.
        /// <br/>execute(msls.application.BrowseEmployeeProjects screen)
        /// </field>
        MonthWise_execute: [lightSwitchApplication.BrowseEmployeeProjects],
        /// <field>
        /// Called after the EmployeeProjectList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeProjectList_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("EmployeeProjectList"); }],
        /// <field>
        /// Called after the Back content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Back_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("Back"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("UserName"); }],
        /// <field>
        /// Called after the UserNameTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserNameTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("UserNameTemplate"); }],
        /// <field>
        /// Called after the Tracker content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tracker_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("Tracker"); }],
        /// <field>
        /// Called after the TrackerTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TrackerTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("TrackerTemplate"); }],
        /// <field>
        /// Called after the EmpID1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID1_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("EmpID1"); }],
        /// <field>
        /// Called after the ProjectID1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectID1_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("ProjectID1"); }],
        /// <field>
        /// Called after the TaskID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TaskID_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("TaskID"); }],
        /// <field>
        /// Called after the ProjectDetail2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectDetail2_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("ProjectDetail2"); }],
        /// <field>
        /// Called after the SubProject content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SubProject_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("SubProject"); }],
        /// <field>
        /// Called after the Months2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Months2_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("Months2"); }],
        /// <field>
        /// Called after the c_Date1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        c_Date1_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("c_Date1"); }],
        /// <field>
        /// Called after the Hours1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hours1_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("Hours1"); }],
        /// <field>
        /// Called after the TotalWorkedHours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TotalWorkedHours_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjects().findContentItem("TotalWorkedHours"); }]
    });

    lightSwitchApplication.ViewEmployeeProject.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewEmployeeProject
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewEmployeeProject,
            data: lightSwitchApplication.ViewEmployeeProject,
            value: lightSwitchApplication.ViewEmployeeProject
        },
        Back: {
            _$class: msls.ContentItem,
            _$name: "Back",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewEmployeeProject
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewEmployeeProject,
            data: lightSwitchApplication.ViewEmployeeProject,
            value: lightSwitchApplication.EmployeeProject
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.EmployeeProject
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        ProjectID: {
            _$class: msls.ContentItem,
            _$name: "ProjectID",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        TaskID: {
            _$class: msls.ContentItem,
            _$name: "TaskID",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        SubProject: {
            _$class: msls.ContentItem,
            _$name: "SubProject",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.EmployeeProject
        },
        c_Date: {
            _$class: msls.ContentItem,
            _$name: "c_Date",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: Date
        },
        Hours: {
            _$class: msls.ContentItem,
            _$name: "Hours",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: String
        },
        Month: {
            _$class: msls.ContentItem,
            _$name: "Month",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.Months
        },
        ProjectDetail: {
            _$class: msls.ContentItem,
            _$name: "ProjectDetail",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewEmployeeProject,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.ProjectDetail
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewEmployeeProject
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewEmployeeProject, {
        /// <field>
        /// Called when a new ViewEmployeeProject screen is created.
        /// <br/>created(msls.application.ViewEmployeeProject screen)
        /// </field>
        created: [lightSwitchApplication.ViewEmployeeProject],
        /// <field>
        /// Called before changes on an active ViewEmployeeProject screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewEmployeeProject screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewEmployeeProject],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.ViewEmployeeProject screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.ViewEmployeeProject],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.ViewEmployeeProject screen)
        /// </field>
        Back_execute: [lightSwitchApplication.ViewEmployeeProject],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeProject().findContentItem("Details"); }],
        /// <field>
        /// Called after the Back content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Back_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeProject().findContentItem("Back"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeProject().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeProject().findContentItem("left"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeProject().findContentItem("EmpID"); }],
        /// <field>
        /// Called after the ProjectID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectID_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeProject().findContentItem("ProjectID"); }],
        /// <field>
        /// Called after the TaskID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TaskID_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeProject().findContentItem("TaskID"); }],
        /// <field>
        /// Called after the SubProject content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SubProject_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeProject().findContentItem("SubProject"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeProject().findContentItem("right"); }],
        /// <field>
        /// Called after the c_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        c_Date_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeProject().findContentItem("c_Date"); }],
        /// <field>
        /// Called after the Hours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hours_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeProject().findContentItem("Hours"); }],
        /// <field>
        /// Called after the Month content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Month_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeProject().findContentItem("Month"); }],
        /// <field>
        /// Called after the ProjectDetail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectDetail_postRender: [$element, function () { return new lightSwitchApplication.ViewEmployeeProject().findContentItem("ProjectDetail"); }]
    });

    lightSwitchApplication.AddEditMonths.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditMonths
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditMonths,
            data: lightSwitchApplication.AddEditMonths,
            value: lightSwitchApplication.AddEditMonths
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditMonths,
            data: lightSwitchApplication.AddEditMonths,
            value: lightSwitchApplication.Months
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditMonths,
            data: lightSwitchApplication.Months,
            value: lightSwitchApplication.Months
        },
        MonthID: {
            _$class: msls.ContentItem,
            _$name: "MonthID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditMonths,
            data: lightSwitchApplication.Months,
            value: Number
        },
        Year: {
            _$class: msls.ContentItem,
            _$name: "Year",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditMonths,
            data: lightSwitchApplication.Months,
            value: Number
        },
        NoOfDays: {
            _$class: msls.ContentItem,
            _$name: "NoOfDays",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditMonths,
            data: lightSwitchApplication.Months,
            value: Number
        },
        Holidays: {
            _$class: msls.ContentItem,
            _$name: "Holidays",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditMonths,
            data: lightSwitchApplication.Months,
            value: Number
        },
        WorkingDay: {
            _$class: msls.ContentItem,
            _$name: "WorkingDay",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditMonths,
            data: lightSwitchApplication.Months,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditMonths,
            data: lightSwitchApplication.Months,
            value: lightSwitchApplication.Months
        },
        MonthName: {
            _$class: msls.ContentItem,
            _$name: "MonthName",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditMonths,
            data: lightSwitchApplication.Months,
            value: String
        },
        WeekDays: {
            _$class: msls.ContentItem,
            _$name: "WeekDays",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditMonths,
            data: lightSwitchApplication.Months,
            value: Number
        },
        TotalHour: {
            _$class: msls.ContentItem,
            _$name: "TotalHour",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditMonths,
            data: lightSwitchApplication.Months,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditMonths
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditMonths, {
        /// <field>
        /// Called when a new AddEditMonths screen is created.
        /// <br/>created(msls.application.AddEditMonths screen)
        /// </field>
        created: [lightSwitchApplication.AddEditMonths],
        /// <field>
        /// Called before changes on an active AddEditMonths screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditMonths screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditMonths],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.AddEditMonths screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.AddEditMonths],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.AddEditMonths screen)
        /// </field>
        Back_execute: [lightSwitchApplication.AddEditMonths],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonths().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonths().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonths().findContentItem("left"); }],
        /// <field>
        /// Called after the MonthID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthID_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonths().findContentItem("MonthID"); }],
        /// <field>
        /// Called after the Year content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Year_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonths().findContentItem("Year"); }],
        /// <field>
        /// Called after the NoOfDays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NoOfDays_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonths().findContentItem("NoOfDays"); }],
        /// <field>
        /// Called after the Holidays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Holidays_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonths().findContentItem("Holidays"); }],
        /// <field>
        /// Called after the WorkingDay content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkingDay_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonths().findContentItem("WorkingDay"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonths().findContentItem("right"); }],
        /// <field>
        /// Called after the MonthName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthName_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonths().findContentItem("MonthName"); }],
        /// <field>
        /// Called after the WeekDays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WeekDays_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonths().findContentItem("WeekDays"); }],
        /// <field>
        /// Called after the TotalHour content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TotalHour_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonths().findContentItem("TotalHour"); }]
    });

    lightSwitchApplication.AddEditMonths1.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditMonths1
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditMonths1,
            data: lightSwitchApplication.AddEditMonths1,
            value: lightSwitchApplication.AddEditMonths1
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditMonths1,
            data: lightSwitchApplication.AddEditMonths1,
            value: lightSwitchApplication.Months
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditMonths1,
            data: lightSwitchApplication.Months,
            value: lightSwitchApplication.Months
        },
        MonthID: {
            _$class: msls.ContentItem,
            _$name: "MonthID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditMonths1,
            data: lightSwitchApplication.Months,
            value: Number
        },
        MonthName: {
            _$class: msls.ContentItem,
            _$name: "MonthName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditMonths1,
            data: lightSwitchApplication.Months,
            value: String
        },
        WeekDays: {
            _$class: msls.ContentItem,
            _$name: "WeekDays",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditMonths1,
            data: lightSwitchApplication.Months,
            value: Number
        },
        WorkingDays: {
            _$class: msls.ContentItem,
            _$name: "WorkingDays",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditMonths1,
            data: lightSwitchApplication.Months,
            value: Number
        },
        Year: {
            _$class: msls.ContentItem,
            _$name: "Year",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditMonths1,
            data: lightSwitchApplication.Months,
            value: Number
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditMonths1,
            data: lightSwitchApplication.Months,
            value: lightSwitchApplication.Months
        },
        NoOfDays: {
            _$class: msls.ContentItem,
            _$name: "NoOfDays",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditMonths1,
            data: lightSwitchApplication.Months,
            value: Number
        },
        Holidays: {
            _$class: msls.ContentItem,
            _$name: "Holidays",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditMonths1,
            data: lightSwitchApplication.Months,
            value: Number
        },
        TotalHours: {
            _$class: msls.ContentItem,
            _$name: "TotalHours",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditMonths1,
            data: lightSwitchApplication.Months,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditMonths1
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditMonths1, {
        /// <field>
        /// Called when a new AddEditMonths1 screen is created.
        /// <br/>created(msls.application.AddEditMonths1 screen)
        /// </field>
        created: [lightSwitchApplication.AddEditMonths1],
        /// <field>
        /// Called before changes on an active AddEditMonths1 screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditMonths1 screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditMonths1],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonths1().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonths1().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonths1().findContentItem("left"); }],
        /// <field>
        /// Called after the MonthID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthID_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonths1().findContentItem("MonthID"); }],
        /// <field>
        /// Called after the MonthName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthName_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonths1().findContentItem("MonthName"); }],
        /// <field>
        /// Called after the WeekDays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WeekDays_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonths1().findContentItem("WeekDays"); }],
        /// <field>
        /// Called after the WorkingDays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkingDays_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonths1().findContentItem("WorkingDays"); }],
        /// <field>
        /// Called after the Year content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Year_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonths1().findContentItem("Year"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonths1().findContentItem("right"); }],
        /// <field>
        /// Called after the NoOfDays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NoOfDays_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonths1().findContentItem("NoOfDays"); }],
        /// <field>
        /// Called after the Holidays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Holidays_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonths1().findContentItem("Holidays"); }],
        /// <field>
        /// Called after the TotalHours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TotalHours_postRender: [$element, function () { return new lightSwitchApplication.AddEditMonths1().findContentItem("TotalHours"); }]
    });

    lightSwitchApplication.BrowseMonths.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMonths
        },
        MonthsList: {
            _$class: msls.ContentItem,
            _$name: "MonthsList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseMonths,
            data: lightSwitchApplication.BrowseMonths,
            value: lightSwitchApplication.BrowseMonths
        },
        Back: {
            _$class: msls.ContentItem,
            _$name: "Back",
            _$parentName: "MonthsList",
            screen: lightSwitchApplication.BrowseMonths
        },
        Months: {
            _$class: msls.ContentItem,
            _$name: "Months",
            _$parentName: "MonthsList",
            screen: lightSwitchApplication.BrowseMonths,
            data: lightSwitchApplication.BrowseMonths,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseMonths,
                _$entry: {
                    elementType: lightSwitchApplication.Months
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Months",
            screen: lightSwitchApplication.BrowseMonths,
            data: lightSwitchApplication.Months,
            value: lightSwitchApplication.Months
        },
        Year: {
            _$class: msls.ContentItem,
            _$name: "Year",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseMonths,
            data: lightSwitchApplication.Months,
            value: Number
        },
        MonthName: {
            _$class: msls.ContentItem,
            _$name: "MonthName",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseMonths,
            data: lightSwitchApplication.Months,
            value: String
        },
        MonthID: {
            _$class: msls.ContentItem,
            _$name: "MonthID",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseMonths,
            data: lightSwitchApplication.Months,
            value: Number
        },
        NoOfDays: {
            _$class: msls.ContentItem,
            _$name: "NoOfDays",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseMonths,
            data: lightSwitchApplication.Months,
            value: Number
        },
        WeekDays: {
            _$class: msls.ContentItem,
            _$name: "WeekDays",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseMonths,
            data: lightSwitchApplication.Months,
            value: Number
        },
        Holidays: {
            _$class: msls.ContentItem,
            _$name: "Holidays",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseMonths,
            data: lightSwitchApplication.Months,
            value: Number
        },
        TotalHours: {
            _$class: msls.ContentItem,
            _$name: "TotalHours",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseMonths,
            data: lightSwitchApplication.Months,
            value: Number
        },
        WorkingDays: {
            _$class: msls.ContentItem,
            _$name: "WorkingDays",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseMonths,
            data: lightSwitchApplication.Months,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseMonths
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseMonths, {
        /// <field>
        /// Called when a new BrowseMonths screen is created.
        /// <br/>created(msls.application.BrowseMonths screen)
        /// </field>
        created: [lightSwitchApplication.BrowseMonths],
        /// <field>
        /// Called before changes on an active BrowseMonths screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseMonths screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseMonths],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.BrowseMonths screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.BrowseMonths],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.BrowseMonths screen)
        /// </field>
        Back_execute: [lightSwitchApplication.BrowseMonths],
        /// <field>
        /// Called after the MonthsList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthsList_postRender: [$element, function () { return new lightSwitchApplication.BrowseMonths().findContentItem("MonthsList"); }],
        /// <field>
        /// Called after the Back content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Back_postRender: [$element, function () { return new lightSwitchApplication.BrowseMonths().findContentItem("Back"); }],
        /// <field>
        /// Called after the Months content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Months_postRender: [$element, function () { return new lightSwitchApplication.BrowseMonths().findContentItem("Months"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseMonths().findContentItem("rows"); }],
        /// <field>
        /// Called after the Year content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Year_postRender: [$element, function () { return new lightSwitchApplication.BrowseMonths().findContentItem("Year"); }],
        /// <field>
        /// Called after the MonthName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthName_postRender: [$element, function () { return new lightSwitchApplication.BrowseMonths().findContentItem("MonthName"); }],
        /// <field>
        /// Called after the MonthID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthID_postRender: [$element, function () { return new lightSwitchApplication.BrowseMonths().findContentItem("MonthID"); }],
        /// <field>
        /// Called after the NoOfDays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NoOfDays_postRender: [$element, function () { return new lightSwitchApplication.BrowseMonths().findContentItem("NoOfDays"); }],
        /// <field>
        /// Called after the WeekDays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WeekDays_postRender: [$element, function () { return new lightSwitchApplication.BrowseMonths().findContentItem("WeekDays"); }],
        /// <field>
        /// Called after the Holidays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Holidays_postRender: [$element, function () { return new lightSwitchApplication.BrowseMonths().findContentItem("Holidays"); }],
        /// <field>
        /// Called after the TotalHours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TotalHours_postRender: [$element, function () { return new lightSwitchApplication.BrowseMonths().findContentItem("TotalHours"); }],
        /// <field>
        /// Called after the WorkingDays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkingDays_postRender: [$element, function () { return new lightSwitchApplication.BrowseMonths().findContentItem("WorkingDays"); }]
    });

    lightSwitchApplication.ViewMonths.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewMonths
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewMonths,
            data: lightSwitchApplication.ViewMonths,
            value: lightSwitchApplication.ViewMonths
        },
        Back: {
            _$class: msls.ContentItem,
            _$name: "Back",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewMonths
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewMonths,
            data: lightSwitchApplication.ViewMonths,
            value: lightSwitchApplication.Months
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewMonths,
            data: lightSwitchApplication.Months,
            value: lightSwitchApplication.Months
        },
        MonthID: {
            _$class: msls.ContentItem,
            _$name: "MonthID",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewMonths,
            data: lightSwitchApplication.Months,
            value: Number
        },
        MonthName: {
            _$class: msls.ContentItem,
            _$name: "MonthName",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewMonths,
            data: lightSwitchApplication.Months,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewMonths,
            data: lightSwitchApplication.Months,
            value: lightSwitchApplication.Months
        },
        NoOfDays: {
            _$class: msls.ContentItem,
            _$name: "NoOfDays",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewMonths,
            data: lightSwitchApplication.Months,
            value: Number
        },
        WeekDays: {
            _$class: msls.ContentItem,
            _$name: "WeekDays",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewMonths,
            data: lightSwitchApplication.Months,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewMonths
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewMonths, {
        /// <field>
        /// Called when a new ViewMonths screen is created.
        /// <br/>created(msls.application.ViewMonths screen)
        /// </field>
        created: [lightSwitchApplication.ViewMonths],
        /// <field>
        /// Called before changes on an active ViewMonths screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewMonths screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewMonths],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.ViewMonths screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.ViewMonths],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.ViewMonths screen)
        /// </field>
        Back_execute: [lightSwitchApplication.ViewMonths],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewMonths().findContentItem("Details"); }],
        /// <field>
        /// Called after the Back content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Back_postRender: [$element, function () { return new lightSwitchApplication.ViewMonths().findContentItem("Back"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewMonths().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewMonths().findContentItem("left"); }],
        /// <field>
        /// Called after the MonthID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthID_postRender: [$element, function () { return new lightSwitchApplication.ViewMonths().findContentItem("MonthID"); }],
        /// <field>
        /// Called after the MonthName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthName_postRender: [$element, function () { return new lightSwitchApplication.ViewMonths().findContentItem("MonthName"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewMonths().findContentItem("right"); }],
        /// <field>
        /// Called after the NoOfDays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NoOfDays_postRender: [$element, function () { return new lightSwitchApplication.ViewMonths().findContentItem("NoOfDays"); }],
        /// <field>
        /// Called after the WeekDays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WeekDays_postRender: [$element, function () { return new lightSwitchApplication.ViewMonths().findContentItem("WeekDays"); }]
    });

    lightSwitchApplication.AddEditParametersSearchItem.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditParametersSearchItem
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditParametersSearchItem,
            data: lightSwitchApplication.AddEditParametersSearchItem,
            value: lightSwitchApplication.AddEditParametersSearchItem
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditParametersSearchItem,
            data: lightSwitchApplication.AddEditParametersSearchItem,
            value: lightSwitchApplication.EmployeeProject
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditParametersSearchItem,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.EmployeeProject
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditParametersSearchItem,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        ProjectID: {
            _$class: msls.ContentItem,
            _$name: "ProjectID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditParametersSearchItem,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        TaskID: {
            _$class: msls.ContentItem,
            _$name: "TaskID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditParametersSearchItem,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        SubProject: {
            _$class: msls.ContentItem,
            _$name: "SubProject",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditParametersSearchItem,
            data: lightSwitchApplication.EmployeeProject,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditParametersSearchItem,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.EmployeeProject
        },
        c_Date: {
            _$class: msls.ContentItem,
            _$name: "c_Date",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditParametersSearchItem,
            data: lightSwitchApplication.EmployeeProject,
            value: Date
        },
        Hours: {
            _$class: msls.ContentItem,
            _$name: "Hours",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditParametersSearchItem,
            data: lightSwitchApplication.EmployeeProject,
            value: String
        },
        Months: {
            _$class: msls.ContentItem,
            _$name: "Months",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditParametersSearchItem,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.Months
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Months",
            screen: lightSwitchApplication.AddEditParametersSearchItem,
            data: lightSwitchApplication.Months,
            value: lightSwitchApplication.Months
        },
        ProjectDetail: {
            _$class: msls.ContentItem,
            _$name: "ProjectDetail",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditParametersSearchItem,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.ProjectDetail
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "ProjectDetail",
            screen: lightSwitchApplication.AddEditParametersSearchItem,
            data: lightSwitchApplication.ProjectDetail,
            value: lightSwitchApplication.ProjectDetail
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditParametersSearchItem
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditParametersSearchItem, {
        /// <field>
        /// Called when a new AddEditParametersSearchItem screen is created.
        /// <br/>created(msls.application.AddEditParametersSearchItem screen)
        /// </field>
        created: [lightSwitchApplication.AddEditParametersSearchItem],
        /// <field>
        /// Called before changes on an active AddEditParametersSearchItem screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditParametersSearchItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditParametersSearchItem],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditParametersSearchItem().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditParametersSearchItem().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditParametersSearchItem().findContentItem("left"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.AddEditParametersSearchItem().findContentItem("EmpID"); }],
        /// <field>
        /// Called after the ProjectID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectID_postRender: [$element, function () { return new lightSwitchApplication.AddEditParametersSearchItem().findContentItem("ProjectID"); }],
        /// <field>
        /// Called after the TaskID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TaskID_postRender: [$element, function () { return new lightSwitchApplication.AddEditParametersSearchItem().findContentItem("TaskID"); }],
        /// <field>
        /// Called after the SubProject content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SubProject_postRender: [$element, function () { return new lightSwitchApplication.AddEditParametersSearchItem().findContentItem("SubProject"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditParametersSearchItem().findContentItem("right"); }],
        /// <field>
        /// Called after the c_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        c_Date_postRender: [$element, function () { return new lightSwitchApplication.AddEditParametersSearchItem().findContentItem("c_Date"); }],
        /// <field>
        /// Called after the Hours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hours_postRender: [$element, function () { return new lightSwitchApplication.AddEditParametersSearchItem().findContentItem("Hours"); }],
        /// <field>
        /// Called after the Months content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Months_postRender: [$element, function () { return new lightSwitchApplication.AddEditParametersSearchItem().findContentItem("Months"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditParametersSearchItem().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the ProjectDetail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectDetail_postRender: [$element, function () { return new lightSwitchApplication.AddEditParametersSearchItem().findContentItem("ProjectDetail"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditParametersSearchItem().findContentItem("RowTemplate1"); }]
    });

    lightSwitchApplication.BrowseParametersSearch.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseParametersSearch
        },
        ParametersSearchItemList: {
            _$class: msls.ContentItem,
            _$name: "ParametersSearchItemList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseParametersSearch,
            data: lightSwitchApplication.BrowseParametersSearch,
            value: lightSwitchApplication.BrowseParametersSearch
        },
        Property1: {
            _$class: msls.ContentItem,
            _$name: "Property1",
            _$parentName: "ParametersSearchItemList",
            screen: lightSwitchApplication.BrowseParametersSearch,
            data: lightSwitchApplication.BrowseParametersSearch,
            value: lightSwitchApplication.Months
        },
        Property1Template: {
            _$class: msls.ContentItem,
            _$name: "Property1Template",
            _$parentName: "Property1",
            screen: lightSwitchApplication.BrowseParametersSearch,
            data: lightSwitchApplication.Months,
            value: lightSwitchApplication.Months
        },
        Parameters: {
            _$class: msls.ContentItem,
            _$name: "Parameters",
            _$parentName: "ParametersSearchItemList",
            screen: lightSwitchApplication.BrowseParametersSearch,
            data: lightSwitchApplication.BrowseParametersSearch,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseParametersSearch,
                _$entry: {
                    elementType: lightSwitchApplication.EmployeeProject
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Parameters",
            screen: lightSwitchApplication.BrowseParametersSearch,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.EmployeeProject
        },
        ProjectDetail: {
            _$class: msls.ContentItem,
            _$name: "ProjectDetail",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseParametersSearch,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.ProjectDetail
        },
        SubProject: {
            _$class: msls.ContentItem,
            _$name: "SubProject",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseParametersSearch,
            data: lightSwitchApplication.EmployeeProject,
            value: String
        },
        Months1: {
            _$class: msls.ContentItem,
            _$name: "Months1",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseParametersSearch,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.Months
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseParametersSearch,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        c_Date: {
            _$class: msls.ContentItem,
            _$name: "c_Date",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseParametersSearch,
            data: lightSwitchApplication.EmployeeProject,
            value: Date
        },
        Hours: {
            _$class: msls.ContentItem,
            _$name: "Hours",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseParametersSearch,
            data: lightSwitchApplication.EmployeeProject,
            value: String
        },
        ProjectID: {
            _$class: msls.ContentItem,
            _$name: "ProjectID",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseParametersSearch,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseParametersSearch
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseParametersSearch, {
        /// <field>
        /// Called when a new BrowseParametersSearch screen is created.
        /// <br/>created(msls.application.BrowseParametersSearch screen)
        /// </field>
        created: [lightSwitchApplication.BrowseParametersSearch],
        /// <field>
        /// Called before changes on an active BrowseParametersSearch screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseParametersSearch screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseParametersSearch],
        /// <field>
        /// Called after the ParametersSearchItemList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ParametersSearchItemList_postRender: [$element, function () { return new lightSwitchApplication.BrowseParametersSearch().findContentItem("ParametersSearchItemList"); }],
        /// <field>
        /// Called after the Property1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Property1_postRender: [$element, function () { return new lightSwitchApplication.BrowseParametersSearch().findContentItem("Property1"); }],
        /// <field>
        /// Called after the Property1Template content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Property1Template_postRender: [$element, function () { return new lightSwitchApplication.BrowseParametersSearch().findContentItem("Property1Template"); }],
        /// <field>
        /// Called after the Parameters content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Parameters_postRender: [$element, function () { return new lightSwitchApplication.BrowseParametersSearch().findContentItem("Parameters"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseParametersSearch().findContentItem("rows"); }],
        /// <field>
        /// Called after the ProjectDetail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectDetail_postRender: [$element, function () { return new lightSwitchApplication.BrowseParametersSearch().findContentItem("ProjectDetail"); }],
        /// <field>
        /// Called after the SubProject content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SubProject_postRender: [$element, function () { return new lightSwitchApplication.BrowseParametersSearch().findContentItem("SubProject"); }],
        /// <field>
        /// Called after the Months1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Months1_postRender: [$element, function () { return new lightSwitchApplication.BrowseParametersSearch().findContentItem("Months1"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.BrowseParametersSearch().findContentItem("EmpID"); }],
        /// <field>
        /// Called after the c_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        c_Date_postRender: [$element, function () { return new lightSwitchApplication.BrowseParametersSearch().findContentItem("c_Date"); }],
        /// <field>
        /// Called after the Hours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hours_postRender: [$element, function () { return new lightSwitchApplication.BrowseParametersSearch().findContentItem("Hours"); }],
        /// <field>
        /// Called after the ProjectID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectID_postRender: [$element, function () { return new lightSwitchApplication.BrowseParametersSearch().findContentItem("ProjectID"); }]
    });

    lightSwitchApplication.ViewParametersSearchItem.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewParametersSearchItem
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewParametersSearchItem,
            data: lightSwitchApplication.ViewParametersSearchItem,
            value: lightSwitchApplication.ViewParametersSearchItem
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewParametersSearchItem,
            data: lightSwitchApplication.ViewParametersSearchItem,
            value: lightSwitchApplication.EmployeeProject
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewParametersSearchItem,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.EmployeeProject
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewParametersSearchItem,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        ProjectID: {
            _$class: msls.ContentItem,
            _$name: "ProjectID",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewParametersSearchItem,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        TaskID: {
            _$class: msls.ContentItem,
            _$name: "TaskID",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewParametersSearchItem,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        SubProject: {
            _$class: msls.ContentItem,
            _$name: "SubProject",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewParametersSearchItem,
            data: lightSwitchApplication.EmployeeProject,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewParametersSearchItem,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.EmployeeProject
        },
        c_Date: {
            _$class: msls.ContentItem,
            _$name: "c_Date",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewParametersSearchItem,
            data: lightSwitchApplication.EmployeeProject,
            value: Date
        },
        Hours: {
            _$class: msls.ContentItem,
            _$name: "Hours",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewParametersSearchItem,
            data: lightSwitchApplication.EmployeeProject,
            value: String
        },
        Months: {
            _$class: msls.ContentItem,
            _$name: "Months",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewParametersSearchItem,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.Months
        },
        ProjectDetail: {
            _$class: msls.ContentItem,
            _$name: "ProjectDetail",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewParametersSearchItem,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.ProjectDetail
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewParametersSearchItem
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewParametersSearchItem, {
        /// <field>
        /// Called when a new ViewParametersSearchItem screen is created.
        /// <br/>created(msls.application.ViewParametersSearchItem screen)
        /// </field>
        created: [lightSwitchApplication.ViewParametersSearchItem],
        /// <field>
        /// Called before changes on an active ViewParametersSearchItem screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewParametersSearchItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewParametersSearchItem],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewParametersSearchItem().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewParametersSearchItem().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewParametersSearchItem().findContentItem("left"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.ViewParametersSearchItem().findContentItem("EmpID"); }],
        /// <field>
        /// Called after the ProjectID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectID_postRender: [$element, function () { return new lightSwitchApplication.ViewParametersSearchItem().findContentItem("ProjectID"); }],
        /// <field>
        /// Called after the TaskID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TaskID_postRender: [$element, function () { return new lightSwitchApplication.ViewParametersSearchItem().findContentItem("TaskID"); }],
        /// <field>
        /// Called after the SubProject content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SubProject_postRender: [$element, function () { return new lightSwitchApplication.ViewParametersSearchItem().findContentItem("SubProject"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewParametersSearchItem().findContentItem("right"); }],
        /// <field>
        /// Called after the c_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        c_Date_postRender: [$element, function () { return new lightSwitchApplication.ViewParametersSearchItem().findContentItem("c_Date"); }],
        /// <field>
        /// Called after the Hours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hours_postRender: [$element, function () { return new lightSwitchApplication.ViewParametersSearchItem().findContentItem("Hours"); }],
        /// <field>
        /// Called after the Months content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Months_postRender: [$element, function () { return new lightSwitchApplication.ViewParametersSearchItem().findContentItem("Months"); }],
        /// <field>
        /// Called after the ProjectDetail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectDetail_postRender: [$element, function () { return new lightSwitchApplication.ViewParametersSearchItem().findContentItem("ProjectDetail"); }]
    });

    lightSwitchApplication.AddEditProjectDetail.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProjectDetail
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProjectDetail,
            data: lightSwitchApplication.AddEditProjectDetail,
            value: lightSwitchApplication.AddEditProjectDetail
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditProjectDetail,
            data: lightSwitchApplication.AddEditProjectDetail,
            value: lightSwitchApplication.ProjectDetail
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProjectDetail,
            data: lightSwitchApplication.ProjectDetail,
            value: lightSwitchApplication.ProjectDetail
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProjectDetail,
            data: lightSwitchApplication.ProjectDetail,
            value: Number
        },
        ProjectID: {
            _$class: msls.ContentItem,
            _$name: "ProjectID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProjectDetail,
            data: lightSwitchApplication.ProjectDetail,
            value: Number
        },
        ProjectsInCompany: {
            _$class: msls.ContentItem,
            _$name: "ProjectsInCompany",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProjectDetail,
            data: lightSwitchApplication.ProjectDetail,
            value: lightSwitchApplication.ProjectsInCompany
        },
        ProjectsInCompany1: {
            _$class: msls.ContentItem,
            _$name: "ProjectsInCompany1",
            _$parentName: "ProjectsInCompany",
            screen: lightSwitchApplication.AddEditProjectDetail,
            data: lightSwitchApplication.ProjectsInCompany,
            value: lightSwitchApplication.ProjectsInCompany
        },
        ProjectType: {
            _$class: msls.ContentItem,
            _$name: "ProjectType",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProjectDetail,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        ComplexityDifficultyLevel: {
            _$class: msls.ContentItem,
            _$name: "ComplexityDifficultyLevel",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProjectDetail,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        ComplexityAvg: {
            _$class: msls.ContentItem,
            _$name: "ComplexityAvg",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProjectDetail,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        QualityPMRating: {
            _$class: msls.ContentItem,
            _$name: "QualityPMRating",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProjectDetail,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        QualityProjectDuration: {
            _$class: msls.ContentItem,
            _$name: "QualityProjectDuration",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProjectDetail,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        EndDate: {
            _$class: msls.ContentItem,
            _$name: "EndDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProjectDetail,
            data: lightSwitchApplication.ProjectDetail,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProjectDetail,
            data: lightSwitchApplication.ProjectDetail,
            value: lightSwitchApplication.ProjectDetail
        },
        Add: {
            _$class: msls.ContentItem,
            _$name: "Add",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProjectDetail
        },
        ProjectName: {
            _$class: msls.ContentItem,
            _$name: "ProjectName",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProjectDetail,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        ProjectStatus: {
            _$class: msls.ContentItem,
            _$name: "ProjectStatus",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProjectDetail,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        ComplexityScope: {
            _$class: msls.ContentItem,
            _$name: "ComplexityScope",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProjectDetail,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        QualityPeerReview: {
            _$class: msls.ContentItem,
            _$name: "QualityPeerReview",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProjectDetail,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        StartDate: {
            _$class: msls.ContentItem,
            _$name: "StartDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProjectDetail,
            data: lightSwitchApplication.ProjectDetail,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProjectDetail
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditProjectDetail, {
        /// <field>
        /// Called when a new AddEditProjectDetail screen is created.
        /// <br/>created(msls.application.AddEditProjectDetail screen)
        /// </field>
        created: [lightSwitchApplication.AddEditProjectDetail],
        /// <field>
        /// Called before changes on an active AddEditProjectDetail screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditProjectDetail screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditProjectDetail],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.AddEditProjectDetail screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.AddEditProjectDetail],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.AddEditProjectDetail screen)
        /// </field>
        Back_execute: [lightSwitchApplication.AddEditProjectDetail],
        /// <field>
        /// Called to determine if the Method method can be executed.
        /// <br/>canExecute(msls.application.AddEditProjectDetail screen)
        /// </field>
        Method_canExecute: [lightSwitchApplication.AddEditProjectDetail],
        /// <field>
        /// Called to execute the Method method.
        /// <br/>execute(msls.application.AddEditProjectDetail screen)
        /// </field>
        Method_execute: [lightSwitchApplication.AddEditProjectDetail],
        /// <field>
        /// Called to determine if the Add method can be executed.
        /// <br/>canExecute(msls.application.AddEditProjectDetail screen)
        /// </field>
        Add_canExecute: [lightSwitchApplication.AddEditProjectDetail],
        /// <field>
        /// Called to execute the Add method.
        /// <br/>execute(msls.application.AddEditProjectDetail screen)
        /// </field>
        Add_execute: [lightSwitchApplication.AddEditProjectDetail],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail().findContentItem("left"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail().findContentItem("EmpID"); }],
        /// <field>
        /// Called after the ProjectID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectID_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail().findContentItem("ProjectID"); }],
        /// <field>
        /// Called after the ProjectsInCompany content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectsInCompany_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail().findContentItem("ProjectsInCompany"); }],
        /// <field>
        /// Called after the ProjectsInCompany1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectsInCompany1_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail().findContentItem("ProjectsInCompany1"); }],
        /// <field>
        /// Called after the ProjectType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectType_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail().findContentItem("ProjectType"); }],
        /// <field>
        /// Called after the ComplexityDifficultyLevel content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ComplexityDifficultyLevel_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail().findContentItem("ComplexityDifficultyLevel"); }],
        /// <field>
        /// Called after the ComplexityAvg content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ComplexityAvg_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail().findContentItem("ComplexityAvg"); }],
        /// <field>
        /// Called after the QualityPMRating content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QualityPMRating_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail().findContentItem("QualityPMRating"); }],
        /// <field>
        /// Called after the QualityProjectDuration content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QualityProjectDuration_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail().findContentItem("QualityProjectDuration"); }],
        /// <field>
        /// Called after the EndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail().findContentItem("EndDate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail().findContentItem("right"); }],
        /// <field>
        /// Called after the Add content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Add_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail().findContentItem("Add"); }],
        /// <field>
        /// Called after the ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail().findContentItem("ProjectName"); }],
        /// <field>
        /// Called after the ProjectStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectStatus_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail().findContentItem("ProjectStatus"); }],
        /// <field>
        /// Called after the ComplexityScope content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ComplexityScope_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail().findContentItem("ComplexityScope"); }],
        /// <field>
        /// Called after the QualityPeerReview content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QualityPeerReview_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail().findContentItem("QualityPeerReview"); }],
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail().findContentItem("StartDate"); }]
    });

    lightSwitchApplication.AddEditProjectDetail1.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProjectDetail1
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProjectDetail1,
            data: lightSwitchApplication.AddEditProjectDetail1,
            value: lightSwitchApplication.AddEditProjectDetail1
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditProjectDetail1,
            data: lightSwitchApplication.AddEditProjectDetail1,
            value: lightSwitchApplication.ProjectDetail
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProjectDetail1,
            data: lightSwitchApplication.ProjectDetail,
            value: lightSwitchApplication.ProjectDetail
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProjectDetail1,
            data: lightSwitchApplication.ProjectDetail,
            value: Number
        },
        ProjectID: {
            _$class: msls.ContentItem,
            _$name: "ProjectID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProjectDetail1,
            data: lightSwitchApplication.ProjectDetail,
            value: Number
        },
        ProjectName: {
            _$class: msls.ContentItem,
            _$name: "ProjectName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProjectDetail1,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        ProjectStatus: {
            _$class: msls.ContentItem,
            _$name: "ProjectStatus",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProjectDetail1,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        EndDate: {
            _$class: msls.ContentItem,
            _$name: "EndDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditProjectDetail1,
            data: lightSwitchApplication.ProjectDetail,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditProjectDetail1,
            data: lightSwitchApplication.ProjectDetail,
            value: lightSwitchApplication.ProjectDetail
        },
        ProjectType: {
            _$class: msls.ContentItem,
            _$name: "ProjectType",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProjectDetail1,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        StartDate: {
            _$class: msls.ContentItem,
            _$name: "StartDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProjectDetail1,
            data: lightSwitchApplication.ProjectDetail,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProjectDetail1
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditProjectDetail1, {
        /// <field>
        /// Called when a new AddEditProjectDetail1 screen is created.
        /// <br/>created(msls.application.AddEditProjectDetail1 screen)
        /// </field>
        created: [lightSwitchApplication.AddEditProjectDetail1],
        /// <field>
        /// Called before changes on an active AddEditProjectDetail1 screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditProjectDetail1 screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditProjectDetail1],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail1().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail1().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail1().findContentItem("left"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail1().findContentItem("EmpID"); }],
        /// <field>
        /// Called after the ProjectID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectID_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail1().findContentItem("ProjectID"); }],
        /// <field>
        /// Called after the ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail1().findContentItem("ProjectName"); }],
        /// <field>
        /// Called after the ProjectStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectStatus_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail1().findContentItem("ProjectStatus"); }],
        /// <field>
        /// Called after the EndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail1().findContentItem("EndDate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail1().findContentItem("right"); }],
        /// <field>
        /// Called after the ProjectType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectType_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail1().findContentItem("ProjectType"); }],
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectDetail1().findContentItem("StartDate"); }]
    });

    lightSwitchApplication.BrowseProjectDetails.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProjectDetails
        },
        ProjectDetailList: {
            _$class: msls.ContentItem,
            _$name: "ProjectDetailList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseProjectDetails,
            data: lightSwitchApplication.BrowseProjectDetails,
            value: lightSwitchApplication.BrowseProjectDetails
        },
        Back: {
            _$class: msls.ContentItem,
            _$name: "Back",
            _$parentName: "ProjectDetailList",
            screen: lightSwitchApplication.BrowseProjectDetails
        },
        CandidateProject: {
            _$class: msls.ContentItem,
            _$name: "CandidateProject",
            _$parentName: "ProjectDetailList",
            screen: lightSwitchApplication.BrowseProjectDetails,
            data: lightSwitchApplication.BrowseProjectDetails,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseProjectDetails,
                _$entry: {
                    elementType: lightSwitchApplication.ProjectDetail
                }
            }
        },
        CandidateProjectTemplate: {
            _$class: msls.ContentItem,
            _$name: "CandidateProjectTemplate",
            _$parentName: "CandidateProject",
            screen: lightSwitchApplication.BrowseProjectDetails,
            data: lightSwitchApplication.ProjectDetail,
            value: lightSwitchApplication.ProjectDetail
        },
        ProjectName1: {
            _$class: msls.ContentItem,
            _$name: "ProjectName1",
            _$parentName: "CandidateProjectTemplate",
            screen: lightSwitchApplication.BrowseProjectDetails,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        EmpID1: {
            _$class: msls.ContentItem,
            _$name: "EmpID1",
            _$parentName: "CandidateProjectTemplate",
            screen: lightSwitchApplication.BrowseProjectDetails,
            data: lightSwitchApplication.ProjectDetail,
            value: Number
        },
        ProjectID1: {
            _$class: msls.ContentItem,
            _$name: "ProjectID1",
            _$parentName: "CandidateProjectTemplate",
            screen: lightSwitchApplication.BrowseProjectDetails,
            data: lightSwitchApplication.ProjectDetail,
            value: Number
        },
        ProjectType1: {
            _$class: msls.ContentItem,
            _$name: "ProjectType1",
            _$parentName: "CandidateProjectTemplate",
            screen: lightSwitchApplication.BrowseProjectDetails,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        ComplexityAvg: {
            _$class: msls.ContentItem,
            _$name: "ComplexityAvg",
            _$parentName: "CandidateProjectTemplate",
            screen: lightSwitchApplication.BrowseProjectDetails,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        QualityPMRating: {
            _$class: msls.ContentItem,
            _$name: "QualityPMRating",
            _$parentName: "CandidateProjectTemplate",
            screen: lightSwitchApplication.BrowseProjectDetails,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        QualityPeerReview: {
            _$class: msls.ContentItem,
            _$name: "QualityPeerReview",
            _$parentName: "CandidateProjectTemplate",
            screen: lightSwitchApplication.BrowseProjectDetails,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        QualityProjectDuration: {
            _$class: msls.ContentItem,
            _$name: "QualityProjectDuration",
            _$parentName: "CandidateProjectTemplate",
            screen: lightSwitchApplication.BrowseProjectDetails,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        QualityAverage: {
            _$class: msls.ContentItem,
            _$name: "QualityAverage",
            _$parentName: "CandidateProjectTemplate",
            screen: lightSwitchApplication.BrowseProjectDetails,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        ProjectStatus1: {
            _$class: msls.ContentItem,
            _$name: "ProjectStatus1",
            _$parentName: "CandidateProjectTemplate",
            screen: lightSwitchApplication.BrowseProjectDetails,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        StartDate1: {
            _$class: msls.ContentItem,
            _$name: "StartDate1",
            _$parentName: "CandidateProjectTemplate",
            screen: lightSwitchApplication.BrowseProjectDetails,
            data: lightSwitchApplication.ProjectDetail,
            value: Date
        },
        EndDate1: {
            _$class: msls.ContentItem,
            _$name: "EndDate1",
            _$parentName: "CandidateProjectTemplate",
            screen: lightSwitchApplication.BrowseProjectDetails,
            data: lightSwitchApplication.ProjectDetail,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProjectDetails
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseProjectDetails, {
        /// <field>
        /// Called when a new BrowseProjectDetails screen is created.
        /// <br/>created(msls.application.BrowseProjectDetails screen)
        /// </field>
        created: [lightSwitchApplication.BrowseProjectDetails],
        /// <field>
        /// Called before changes on an active BrowseProjectDetails screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseProjectDetails screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseProjectDetails],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.BrowseProjectDetails screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.BrowseProjectDetails],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.BrowseProjectDetails screen)
        /// </field>
        Back_execute: [lightSwitchApplication.BrowseProjectDetails],
        /// <field>
        /// Called to determine if the ViewTeam method can be executed.
        /// <br/>canExecute(msls.application.BrowseProjectDetails screen)
        /// </field>
        ViewTeam_canExecute: [lightSwitchApplication.BrowseProjectDetails],
        /// <field>
        /// Called to execute the ViewTeam method.
        /// <br/>execute(msls.application.BrowseProjectDetails screen)
        /// </field>
        ViewTeam_execute: [lightSwitchApplication.BrowseProjectDetails],
        /// <field>
        /// Called after the ProjectDetailList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectDetailList_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails().findContentItem("ProjectDetailList"); }],
        /// <field>
        /// Called after the Back content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Back_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails().findContentItem("Back"); }],
        /// <field>
        /// Called after the CandidateProject content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CandidateProject_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails().findContentItem("CandidateProject"); }],
        /// <field>
        /// Called after the CandidateProjectTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CandidateProjectTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails().findContentItem("CandidateProjectTemplate"); }],
        /// <field>
        /// Called after the ProjectName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName1_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails().findContentItem("ProjectName1"); }],
        /// <field>
        /// Called after the EmpID1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID1_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails().findContentItem("EmpID1"); }],
        /// <field>
        /// Called after the ProjectID1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectID1_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails().findContentItem("ProjectID1"); }],
        /// <field>
        /// Called after the ProjectType1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectType1_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails().findContentItem("ProjectType1"); }],
        /// <field>
        /// Called after the ComplexityAvg content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ComplexityAvg_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails().findContentItem("ComplexityAvg"); }],
        /// <field>
        /// Called after the QualityPMRating content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QualityPMRating_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails().findContentItem("QualityPMRating"); }],
        /// <field>
        /// Called after the QualityPeerReview content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QualityPeerReview_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails().findContentItem("QualityPeerReview"); }],
        /// <field>
        /// Called after the QualityProjectDuration content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QualityProjectDuration_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails().findContentItem("QualityProjectDuration"); }],
        /// <field>
        /// Called after the QualityAverage content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QualityAverage_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails().findContentItem("QualityAverage"); }],
        /// <field>
        /// Called after the ProjectStatus1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectStatus1_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails().findContentItem("ProjectStatus1"); }],
        /// <field>
        /// Called after the StartDate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate1_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails().findContentItem("StartDate1"); }],
        /// <field>
        /// Called after the EndDate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndDate1_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails().findContentItem("EndDate1"); }]
    });

    lightSwitchApplication.BrowseProjectDetails1.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProjectDetails1
        },
        ProjectDetailList: {
            _$class: msls.ContentItem,
            _$name: "ProjectDetailList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseProjectDetails1,
            data: lightSwitchApplication.BrowseProjectDetails1,
            value: lightSwitchApplication.BrowseProjectDetails1
        },
        Back: {
            _$class: msls.ContentItem,
            _$name: "Back",
            _$parentName: "ProjectDetailList",
            screen: lightSwitchApplication.BrowseProjectDetails1
        },
        Property1: {
            _$class: msls.ContentItem,
            _$name: "Property1",
            _$parentName: "ProjectDetailList",
            screen: lightSwitchApplication.BrowseProjectDetails1,
            data: lightSwitchApplication.BrowseProjectDetails1,
            value: lightSwitchApplication.ProjectDetail
        },
        Property1Template: {
            _$class: msls.ContentItem,
            _$name: "Property1Template",
            _$parentName: "Property1",
            screen: lightSwitchApplication.BrowseProjectDetails1,
            data: lightSwitchApplication.ProjectDetail,
            value: lightSwitchApplication.ProjectDetail
        },
        ProjectDetails: {
            _$class: msls.ContentItem,
            _$name: "ProjectDetails",
            _$parentName: "ProjectDetailList",
            screen: lightSwitchApplication.BrowseProjectDetails1,
            data: lightSwitchApplication.BrowseProjectDetails1,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseProjectDetails1,
                _$entry: {
                    elementType: lightSwitchApplication.ProjectDetail
                }
            }
        },
        ProjectDetailsTemplate: {
            _$class: msls.ContentItem,
            _$name: "ProjectDetailsTemplate",
            _$parentName: "ProjectDetails",
            screen: lightSwitchApplication.BrowseProjectDetails1,
            data: lightSwitchApplication.ProjectDetail,
            value: lightSwitchApplication.ProjectDetail
        },
        CandidateProject: {
            _$class: msls.ContentItem,
            _$name: "CandidateProject",
            _$parentName: "ProjectDetailList",
            screen: lightSwitchApplication.BrowseProjectDetails1,
            data: lightSwitchApplication.BrowseProjectDetails1,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseProjectDetails1,
                _$entry: {
                    elementType: lightSwitchApplication.ProjectDetail
                }
            }
        },
        CandidateProjectTemplate: {
            _$class: msls.ContentItem,
            _$name: "CandidateProjectTemplate",
            _$parentName: "CandidateProject",
            screen: lightSwitchApplication.BrowseProjectDetails1,
            data: lightSwitchApplication.ProjectDetail,
            value: lightSwitchApplication.ProjectDetail
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "CandidateProjectTemplate",
            screen: lightSwitchApplication.BrowseProjectDetails1,
            data: lightSwitchApplication.ProjectDetail,
            value: Number
        },
        ProjectID: {
            _$class: msls.ContentItem,
            _$name: "ProjectID",
            _$parentName: "CandidateProjectTemplate",
            screen: lightSwitchApplication.BrowseProjectDetails1,
            data: lightSwitchApplication.ProjectDetail,
            value: Number
        },
        ProjectName: {
            _$class: msls.ContentItem,
            _$name: "ProjectName",
            _$parentName: "CandidateProjectTemplate",
            screen: lightSwitchApplication.BrowseProjectDetails1,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        ProjectType: {
            _$class: msls.ContentItem,
            _$name: "ProjectType",
            _$parentName: "CandidateProjectTemplate",
            screen: lightSwitchApplication.BrowseProjectDetails1,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        ProjectStatus: {
            _$class: msls.ContentItem,
            _$name: "ProjectStatus",
            _$parentName: "CandidateProjectTemplate",
            screen: lightSwitchApplication.BrowseProjectDetails1,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        StartDate: {
            _$class: msls.ContentItem,
            _$name: "StartDate",
            _$parentName: "CandidateProjectTemplate",
            screen: lightSwitchApplication.BrowseProjectDetails1,
            data: lightSwitchApplication.ProjectDetail,
            value: Date
        },
        EndDate: {
            _$class: msls.ContentItem,
            _$name: "EndDate",
            _$parentName: "CandidateProjectTemplate",
            screen: lightSwitchApplication.BrowseProjectDetails1,
            data: lightSwitchApplication.ProjectDetail,
            value: Date
        },
        View: {
            _$class: msls.ContentItem,
            _$name: "View",
            _$parentName: "CandidateProjectTemplate",
            screen: lightSwitchApplication.BrowseProjectDetails1
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProjectDetails1
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseProjectDetails1, {
        /// <field>
        /// Called when a new BrowseProjectDetails1 screen is created.
        /// <br/>created(msls.application.BrowseProjectDetails1 screen)
        /// </field>
        created: [lightSwitchApplication.BrowseProjectDetails1],
        /// <field>
        /// Called before changes on an active BrowseProjectDetails1 screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseProjectDetails1 screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseProjectDetails1],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.BrowseProjectDetails1 screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.BrowseProjectDetails1],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.BrowseProjectDetails1 screen)
        /// </field>
        Back_execute: [lightSwitchApplication.BrowseProjectDetails1],
        /// <field>
        /// Called to determine if the View method can be executed.
        /// <br/>canExecute(msls.application.BrowseProjectDetails1 screen)
        /// </field>
        View_canExecute: [lightSwitchApplication.BrowseProjectDetails1],
        /// <field>
        /// Called to execute the View method.
        /// <br/>execute(msls.application.BrowseProjectDetails1 screen)
        /// </field>
        View_execute: [lightSwitchApplication.BrowseProjectDetails1],
        /// <field>
        /// Called after the ProjectDetailList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectDetailList_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails1().findContentItem("ProjectDetailList"); }],
        /// <field>
        /// Called after the Back content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Back_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails1().findContentItem("Back"); }],
        /// <field>
        /// Called after the Property1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Property1_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails1().findContentItem("Property1"); }],
        /// <field>
        /// Called after the Property1Template content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Property1Template_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails1().findContentItem("Property1Template"); }],
        /// <field>
        /// Called after the ProjectDetails content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectDetails_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails1().findContentItem("ProjectDetails"); }],
        /// <field>
        /// Called after the ProjectDetailsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectDetailsTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails1().findContentItem("ProjectDetailsTemplate"); }],
        /// <field>
        /// Called after the CandidateProject content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CandidateProject_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails1().findContentItem("CandidateProject"); }],
        /// <field>
        /// Called after the CandidateProjectTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CandidateProjectTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails1().findContentItem("CandidateProjectTemplate"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails1().findContentItem("EmpID"); }],
        /// <field>
        /// Called after the ProjectID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectID_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails1().findContentItem("ProjectID"); }],
        /// <field>
        /// Called after the ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails1().findContentItem("ProjectName"); }],
        /// <field>
        /// Called after the ProjectType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectType_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails1().findContentItem("ProjectType"); }],
        /// <field>
        /// Called after the ProjectStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectStatus_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails1().findContentItem("ProjectStatus"); }],
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails1().findContentItem("StartDate"); }],
        /// <field>
        /// Called after the EndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails1().findContentItem("EndDate"); }],
        /// <field>
        /// Called after the View content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        View_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectDetails1().findContentItem("View"); }]
    });

    lightSwitchApplication.ViewProjectDetail.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewProjectDetail
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewProjectDetail,
            data: lightSwitchApplication.ViewProjectDetail,
            value: lightSwitchApplication.ViewProjectDetail
        },
        Back: {
            _$class: msls.ContentItem,
            _$name: "Back",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewProjectDetail
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewProjectDetail,
            data: lightSwitchApplication.ViewProjectDetail,
            value: lightSwitchApplication.ProjectDetail
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewProjectDetail,
            data: lightSwitchApplication.ProjectDetail,
            value: lightSwitchApplication.ProjectDetail
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewProjectDetail,
            data: lightSwitchApplication.ProjectDetail,
            value: Number
        },
        ProjectID: {
            _$class: msls.ContentItem,
            _$name: "ProjectID",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewProjectDetail,
            data: lightSwitchApplication.ProjectDetail,
            value: Number
        },
        ProjectName: {
            _$class: msls.ContentItem,
            _$name: "ProjectName",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewProjectDetail,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewProjectDetail,
            data: lightSwitchApplication.ProjectDetail,
            value: lightSwitchApplication.ProjectDetail
        },
        ProjectType: {
            _$class: msls.ContentItem,
            _$name: "ProjectType",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewProjectDetail,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        ProjectStatus: {
            _$class: msls.ContentItem,
            _$name: "ProjectStatus",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewProjectDetail,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        StartDate: {
            _$class: msls.ContentItem,
            _$name: "StartDate",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewProjectDetail,
            data: lightSwitchApplication.ProjectDetail,
            value: Date
        },
        EndDate: {
            _$class: msls.ContentItem,
            _$name: "EndDate",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewProjectDetail,
            data: lightSwitchApplication.ProjectDetail,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewProjectDetail
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewProjectDetail, {
        /// <field>
        /// Called when a new ViewProjectDetail screen is created.
        /// <br/>created(msls.application.ViewProjectDetail screen)
        /// </field>
        created: [lightSwitchApplication.ViewProjectDetail],
        /// <field>
        /// Called before changes on an active ViewProjectDetail screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewProjectDetail screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewProjectDetail],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.ViewProjectDetail screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.ViewProjectDetail],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.ViewProjectDetail screen)
        /// </field>
        Back_execute: [lightSwitchApplication.ViewProjectDetail],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectDetail().findContentItem("Details"); }],
        /// <field>
        /// Called after the Back content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Back_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectDetail().findContentItem("Back"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectDetail().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectDetail().findContentItem("left"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectDetail().findContentItem("EmpID"); }],
        /// <field>
        /// Called after the ProjectID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectID_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectDetail().findContentItem("ProjectID"); }],
        /// <field>
        /// Called after the ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectDetail().findContentItem("ProjectName"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectDetail().findContentItem("right"); }],
        /// <field>
        /// Called after the ProjectType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectType_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectDetail().findContentItem("ProjectType"); }],
        /// <field>
        /// Called after the ProjectStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectStatus_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectDetail().findContentItem("ProjectStatus"); }],
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectDetail().findContentItem("StartDate"); }],
        /// <field>
        /// Called after the EndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndDate_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectDetail().findContentItem("EndDate"); }]
    });

    lightSwitchApplication.ViewProjectDetail1.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewProjectDetail1
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewProjectDetail1,
            data: lightSwitchApplication.ViewProjectDetail1,
            value: lightSwitchApplication.ViewProjectDetail1
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewProjectDetail1,
            data: lightSwitchApplication.ViewProjectDetail1,
            value: lightSwitchApplication.ProjectDetail
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewProjectDetail1,
            data: lightSwitchApplication.ProjectDetail,
            value: lightSwitchApplication.ProjectDetail
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewProjectDetail1,
            data: lightSwitchApplication.ProjectDetail,
            value: Number
        },
        ProjectID: {
            _$class: msls.ContentItem,
            _$name: "ProjectID",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewProjectDetail1,
            data: lightSwitchApplication.ProjectDetail,
            value: Number
        },
        ProjectName: {
            _$class: msls.ContentItem,
            _$name: "ProjectName",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewProjectDetail1,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewProjectDetail1,
            data: lightSwitchApplication.ProjectDetail,
            value: lightSwitchApplication.ProjectDetail
        },
        ProjectType: {
            _$class: msls.ContentItem,
            _$name: "ProjectType",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewProjectDetail1,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        ProjectStatus: {
            _$class: msls.ContentItem,
            _$name: "ProjectStatus",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewProjectDetail1,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        StartDate: {
            _$class: msls.ContentItem,
            _$name: "StartDate",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewProjectDetail1,
            data: lightSwitchApplication.ProjectDetail,
            value: Date
        },
        EndDate: {
            _$class: msls.ContentItem,
            _$name: "EndDate",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewProjectDetail1,
            data: lightSwitchApplication.ProjectDetail,
            value: Date
        },
        EmployeeProjects: {
            _$class: msls.ContentItem,
            _$name: "EmployeeProjects",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewProjectDetail1,
            data: lightSwitchApplication.ViewProjectDetail1,
            value: lightSwitchApplication.ViewProjectDetail1
        },
        EmployeeProjects1: {
            _$class: msls.ContentItem,
            _$name: "EmployeeProjects1",
            _$parentName: "EmployeeProjects",
            screen: lightSwitchApplication.ViewProjectDetail1,
            data: lightSwitchApplication.ViewProjectDetail1,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewProjectDetail1,
                _$entry: {
                    elementType: lightSwitchApplication.EmployeeProject
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "EmployeeProjects1",
            screen: lightSwitchApplication.ViewProjectDetail1,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.EmployeeProject
        },
        SubProject: {
            _$class: msls.ContentItem,
            _$name: "SubProject",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewProjectDetail1,
            data: lightSwitchApplication.EmployeeProject,
            value: String
        },
        EmpID1: {
            _$class: msls.ContentItem,
            _$name: "EmpID1",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewProjectDetail1,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        ProjectID1: {
            _$class: msls.ContentItem,
            _$name: "ProjectID1",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewProjectDetail1,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewProjectDetail1
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewProjectDetail1, {
        /// <field>
        /// Called when a new ViewProjectDetail1 screen is created.
        /// <br/>created(msls.application.ViewProjectDetail1 screen)
        /// </field>
        created: [lightSwitchApplication.ViewProjectDetail1],
        /// <field>
        /// Called before changes on an active ViewProjectDetail1 screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewProjectDetail1 screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewProjectDetail1],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectDetail1().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectDetail1().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectDetail1().findContentItem("left"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectDetail1().findContentItem("EmpID"); }],
        /// <field>
        /// Called after the ProjectID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectID_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectDetail1().findContentItem("ProjectID"); }],
        /// <field>
        /// Called after the ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectDetail1().findContentItem("ProjectName"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectDetail1().findContentItem("right"); }],
        /// <field>
        /// Called after the ProjectType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectType_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectDetail1().findContentItem("ProjectType"); }],
        /// <field>
        /// Called after the ProjectStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectStatus_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectDetail1().findContentItem("ProjectStatus"); }],
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectDetail1().findContentItem("StartDate"); }],
        /// <field>
        /// Called after the EndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndDate_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectDetail1().findContentItem("EndDate"); }],
        /// <field>
        /// Called after the EmployeeProjects content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeProjects_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectDetail1().findContentItem("EmployeeProjects"); }],
        /// <field>
        /// Called after the EmployeeProjects1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeProjects1_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectDetail1().findContentItem("EmployeeProjects1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectDetail1().findContentItem("rows"); }],
        /// <field>
        /// Called after the SubProject content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SubProject_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectDetail1().findContentItem("SubProject"); }],
        /// <field>
        /// Called after the EmpID1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID1_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectDetail1().findContentItem("EmpID1"); }],
        /// <field>
        /// Called after the ProjectID1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectID1_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectDetail1().findContentItem("ProjectID1"); }]
    });

    lightSwitchApplication.BrowseProjectReports.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProjectReports
        },
        ProjectReportList: {
            _$class: msls.ContentItem,
            _$name: "ProjectReportList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseProjectReports,
            data: lightSwitchApplication.BrowseProjectReports,
            value: lightSwitchApplication.BrowseProjectReports
        },
        Back: {
            _$class: msls.ContentItem,
            _$name: "Back",
            _$parentName: "ProjectReportList",
            screen: lightSwitchApplication.BrowseProjectReports
        },
        ProjectReportsforUser: {
            _$class: msls.ContentItem,
            _$name: "ProjectReportsforUser",
            _$parentName: "ProjectReportList",
            screen: lightSwitchApplication.BrowseProjectReports,
            data: lightSwitchApplication.BrowseProjectReports,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseProjectReports,
                _$entry: {
                    elementType: lightSwitchApplication.ProjectReport
                }
            }
        },
        ProjectReportsforUserTemplate: {
            _$class: msls.ContentItem,
            _$name: "ProjectReportsforUserTemplate",
            _$parentName: "ProjectReportsforUser",
            screen: lightSwitchApplication.BrowseProjectReports,
            data: lightSwitchApplication.ProjectReport,
            value: lightSwitchApplication.ProjectReport
        },
        EmpID1: {
            _$class: msls.ContentItem,
            _$name: "EmpID1",
            _$parentName: "ProjectReportsforUserTemplate",
            screen: lightSwitchApplication.BrowseProjectReports,
            data: lightSwitchApplication.ProjectReport,
            value: Number
        },
        ProjectName1: {
            _$class: msls.ContentItem,
            _$name: "ProjectName1",
            _$parentName: "ProjectReportsforUserTemplate",
            screen: lightSwitchApplication.BrowseProjectReports,
            data: lightSwitchApplication.ProjectReport,
            value: String
        },
        MonthName1: {
            _$class: msls.ContentItem,
            _$name: "MonthName1",
            _$parentName: "ProjectReportsforUserTemplate",
            screen: lightSwitchApplication.BrowseProjectReports,
            data: lightSwitchApplication.ProjectReport,
            value: String
        },
        TotalWorkedHours2: {
            _$class: msls.ContentItem,
            _$name: "TotalWorkedHours2",
            _$parentName: "ProjectReportsforUserTemplate",
            screen: lightSwitchApplication.BrowseProjectReports,
            data: lightSwitchApplication.ProjectReport,
            value: String
        },
        View: {
            _$class: msls.ContentItem,
            _$name: "View",
            _$parentName: "ProjectReportsforUserTemplate",
            screen: lightSwitchApplication.BrowseProjectReports
        },
        ProjectReports: {
            _$class: msls.ContentItem,
            _$name: "ProjectReports",
            _$parentName: "ProjectReportList",
            screen: lightSwitchApplication.BrowseProjectReports,
            data: lightSwitchApplication.BrowseProjectReports,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseProjectReports,
                _$entry: {
                    elementType: lightSwitchApplication.ProjectReport
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "ProjectReports",
            screen: lightSwitchApplication.BrowseProjectReports,
            data: lightSwitchApplication.ProjectReport,
            value: lightSwitchApplication.ProjectReport
        },
        ProjectName: {
            _$class: msls.ContentItem,
            _$name: "ProjectName",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseProjectReports,
            data: lightSwitchApplication.ProjectReport,
            value: String
        },
        MonthName: {
            _$class: msls.ContentItem,
            _$name: "MonthName",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseProjectReports,
            data: lightSwitchApplication.ProjectReport,
            value: String
        },
        TotalWorkedHours: {
            _$class: msls.ContentItem,
            _$name: "TotalWorkedHours",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseProjectReports,
            data: lightSwitchApplication.ProjectReport,
            value: String
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseProjectReports,
            data: lightSwitchApplication.ProjectReport,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProjectReports
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseProjectReports, {
        /// <field>
        /// Called when a new BrowseProjectReports screen is created.
        /// <br/>created(msls.application.BrowseProjectReports screen)
        /// </field>
        created: [lightSwitchApplication.BrowseProjectReports],
        /// <field>
        /// Called before changes on an active BrowseProjectReports screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseProjectReports screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseProjectReports],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.BrowseProjectReports screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.BrowseProjectReports],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.BrowseProjectReports screen)
        /// </field>
        Back_execute: [lightSwitchApplication.BrowseProjectReports],
        /// <field>
        /// Called to determine if the View method can be executed.
        /// <br/>canExecute(msls.application.BrowseProjectReports screen)
        /// </field>
        View_canExecute: [lightSwitchApplication.BrowseProjectReports],
        /// <field>
        /// Called to execute the View method.
        /// <br/>execute(msls.application.BrowseProjectReports screen)
        /// </field>
        View_execute: [lightSwitchApplication.BrowseProjectReports],
        /// <field>
        /// Called after the ProjectReportList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectReportList_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectReports().findContentItem("ProjectReportList"); }],
        /// <field>
        /// Called after the Back content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Back_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectReports().findContentItem("Back"); }],
        /// <field>
        /// Called after the ProjectReportsforUser content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectReportsforUser_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectReports().findContentItem("ProjectReportsforUser"); }],
        /// <field>
        /// Called after the ProjectReportsforUserTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectReportsforUserTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectReports().findContentItem("ProjectReportsforUserTemplate"); }],
        /// <field>
        /// Called after the EmpID1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID1_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectReports().findContentItem("EmpID1"); }],
        /// <field>
        /// Called after the ProjectName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName1_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectReports().findContentItem("ProjectName1"); }],
        /// <field>
        /// Called after the MonthName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthName1_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectReports().findContentItem("MonthName1"); }],
        /// <field>
        /// Called after the TotalWorkedHours2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TotalWorkedHours2_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectReports().findContentItem("TotalWorkedHours2"); }],
        /// <field>
        /// Called after the View content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        View_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectReports().findContentItem("View"); }],
        /// <field>
        /// Called after the ProjectReports content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectReports_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectReports().findContentItem("ProjectReports"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectReports().findContentItem("rows"); }],
        /// <field>
        /// Called after the ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectReports().findContentItem("ProjectName"); }],
        /// <field>
        /// Called after the MonthName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthName_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectReports().findContentItem("MonthName"); }],
        /// <field>
        /// Called after the TotalWorkedHours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TotalWorkedHours_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectReports().findContentItem("TotalWorkedHours"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectReports().findContentItem("EmpID"); }]
    });

    lightSwitchApplication.ViewProjectReport.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewProjectReport
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewProjectReport,
            data: lightSwitchApplication.ViewProjectReport,
            value: lightSwitchApplication.ViewProjectReport
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewProjectReport,
            data: lightSwitchApplication.ViewProjectReport,
            value: lightSwitchApplication.ProjectReport
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewProjectReport,
            data: lightSwitchApplication.ProjectReport,
            value: lightSwitchApplication.ProjectReport
        },
        TotalWorkedHours: {
            _$class: msls.ContentItem,
            _$name: "TotalWorkedHours",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewProjectReport,
            data: lightSwitchApplication.ProjectReport,
            value: String
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewProjectReport,
            data: lightSwitchApplication.ProjectReport,
            value: Number
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewProjectReport,
            data: lightSwitchApplication.ProjectReport,
            value: lightSwitchApplication.ProjectReport
        },
        ProjectName: {
            _$class: msls.ContentItem,
            _$name: "ProjectName",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewProjectReport,
            data: lightSwitchApplication.ProjectReport,
            value: String
        },
        MonthName: {
            _$class: msls.ContentItem,
            _$name: "MonthName",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewProjectReport,
            data: lightSwitchApplication.ProjectReport,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewProjectReport
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewProjectReport, {
        /// <field>
        /// Called when a new ViewProjectReport screen is created.
        /// <br/>created(msls.application.ViewProjectReport screen)
        /// </field>
        created: [lightSwitchApplication.ViewProjectReport],
        /// <field>
        /// Called before changes on an active ViewProjectReport screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewProjectReport screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewProjectReport],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectReport().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectReport().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectReport().findContentItem("left"); }],
        /// <field>
        /// Called after the TotalWorkedHours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TotalWorkedHours_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectReport().findContentItem("TotalWorkedHours"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectReport().findContentItem("EmpID"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectReport().findContentItem("right"); }],
        /// <field>
        /// Called after the ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectReport().findContentItem("ProjectName"); }],
        /// <field>
        /// Called after the MonthName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthName_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectReport().findContentItem("MonthName"); }]
    });

    lightSwitchApplication.AddEditProjectsInCompany.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProjectsInCompany
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditProjectsInCompany,
            data: lightSwitchApplication.AddEditProjectsInCompany,
            value: lightSwitchApplication.AddEditProjectsInCompany
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditProjectsInCompany,
            data: lightSwitchApplication.AddEditProjectsInCompany,
            value: lightSwitchApplication.AddEditProjectsInCompany
        },
        ProjectName: {
            _$class: msls.ContentItem,
            _$name: "ProjectName",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProjectsInCompany,
            data: lightSwitchApplication.AddEditProjectsInCompany,
            value: String
        },
        ProjectType: {
            _$class: msls.ContentItem,
            _$name: "ProjectType",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProjectsInCompany,
            data: lightSwitchApplication.AddEditProjectsInCompany,
            value: String
        },
        ProjectsInCompany_StartDate: {
            _$class: msls.ContentItem,
            _$name: "ProjectsInCompany_StartDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProjectsInCompany,
            data: lightSwitchApplication.AddEditProjectsInCompany,
            value: Date
        },
        ProjectsInCompany_EndDate: {
            _$class: msls.ContentItem,
            _$name: "ProjectsInCompany_EndDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditProjectsInCompany,
            data: lightSwitchApplication.AddEditProjectsInCompany,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditProjectsInCompany
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditProjectsInCompany, {
        /// <field>
        /// Called when a new AddEditProjectsInCompany screen is created.
        /// <br/>created(msls.application.AddEditProjectsInCompany screen)
        /// </field>
        created: [lightSwitchApplication.AddEditProjectsInCompany],
        /// <field>
        /// Called before changes on an active AddEditProjectsInCompany screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditProjectsInCompany screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditProjectsInCompany],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectsInCompany().findContentItem("Details"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectsInCompany().findContentItem("right"); }],
        /// <field>
        /// Called after the ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectsInCompany().findContentItem("ProjectName"); }],
        /// <field>
        /// Called after the ProjectType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectType_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectsInCompany().findContentItem("ProjectType"); }],
        /// <field>
        /// Called after the ProjectsInCompany_StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectsInCompany_StartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectsInCompany().findContentItem("ProjectsInCompany_StartDate"); }],
        /// <field>
        /// Called after the ProjectsInCompany_EndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectsInCompany_EndDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditProjectsInCompany().findContentItem("ProjectsInCompany_EndDate"); }]
    });

    lightSwitchApplication.BrowseProjectsInCompanies.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProjectsInCompanies
        },
        ProjectsInCompanyList: {
            _$class: msls.ContentItem,
            _$name: "ProjectsInCompanyList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseProjectsInCompanies,
            data: lightSwitchApplication.BrowseProjectsInCompanies,
            value: lightSwitchApplication.BrowseProjectsInCompanies
        },
        Back: {
            _$class: msls.ContentItem,
            _$name: "Back",
            _$parentName: "ProjectsInCompanyList",
            screen: lightSwitchApplication.BrowseProjectsInCompanies
        },
        ProjectsInCompanies: {
            _$class: msls.ContentItem,
            _$name: "ProjectsInCompanies",
            _$parentName: "ProjectsInCompanyList",
            screen: lightSwitchApplication.BrowseProjectsInCompanies,
            data: lightSwitchApplication.BrowseProjectsInCompanies,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseProjectsInCompanies,
                _$entry: {
                    elementType: lightSwitchApplication.ProjectsInCompany
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "ProjectsInCompanies",
            screen: lightSwitchApplication.BrowseProjectsInCompanies,
            data: lightSwitchApplication.ProjectsInCompany,
            value: lightSwitchApplication.ProjectsInCompany
        },
        ProjectName: {
            _$class: msls.ContentItem,
            _$name: "ProjectName",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseProjectsInCompanies,
            data: lightSwitchApplication.ProjectsInCompany,
            value: String
        },
        ProjectType: {
            _$class: msls.ContentItem,
            _$name: "ProjectType",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseProjectsInCompanies,
            data: lightSwitchApplication.ProjectsInCompany,
            value: String
        },
        StartDate: {
            _$class: msls.ContentItem,
            _$name: "StartDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseProjectsInCompanies,
            data: lightSwitchApplication.ProjectsInCompany,
            value: Date
        },
        EndDate: {
            _$class: msls.ContentItem,
            _$name: "EndDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseProjectsInCompanies,
            data: lightSwitchApplication.ProjectsInCompany,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProjectsInCompanies
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseProjectsInCompanies, {
        /// <field>
        /// Called when a new BrowseProjectsInCompanies screen is created.
        /// <br/>created(msls.application.BrowseProjectsInCompanies screen)
        /// </field>
        created: [lightSwitchApplication.BrowseProjectsInCompanies],
        /// <field>
        /// Called before changes on an active BrowseProjectsInCompanies screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseProjectsInCompanies screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseProjectsInCompanies],
        /// <field>
        /// Called to determine if the AssignEmployeestoProject method can be executed.
        /// <br/>canExecute(msls.application.BrowseProjectsInCompanies screen)
        /// </field>
        AssignEmployeestoProject_canExecute: [lightSwitchApplication.BrowseProjectsInCompanies],
        /// <field>
        /// Called to execute the AssignEmployeestoProject method.
        /// <br/>execute(msls.application.BrowseProjectsInCompanies screen)
        /// </field>
        AssignEmployeestoProject_execute: [lightSwitchApplication.BrowseProjectsInCompanies],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.BrowseProjectsInCompanies screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.BrowseProjectsInCompanies],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.BrowseProjectsInCompanies screen)
        /// </field>
        Back_execute: [lightSwitchApplication.BrowseProjectsInCompanies],
        /// <field>
        /// Called after the ProjectsInCompanyList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectsInCompanyList_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectsInCompanies().findContentItem("ProjectsInCompanyList"); }],
        /// <field>
        /// Called after the Back content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Back_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectsInCompanies().findContentItem("Back"); }],
        /// <field>
        /// Called after the ProjectsInCompanies content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectsInCompanies_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectsInCompanies().findContentItem("ProjectsInCompanies"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectsInCompanies().findContentItem("rows"); }],
        /// <field>
        /// Called after the ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectsInCompanies().findContentItem("ProjectName"); }],
        /// <field>
        /// Called after the ProjectType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectType_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectsInCompanies().findContentItem("ProjectType"); }],
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectsInCompanies().findContentItem("StartDate"); }],
        /// <field>
        /// Called after the EndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectsInCompanies().findContentItem("EndDate"); }]
    });

    lightSwitchApplication.ViewProjectsInCompany.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewProjectsInCompany
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewProjectsInCompany,
            data: lightSwitchApplication.ViewProjectsInCompany,
            value: lightSwitchApplication.ViewProjectsInCompany
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewProjectsInCompany,
            data: lightSwitchApplication.ViewProjectsInCompany,
            value: lightSwitchApplication.ProjectsInCompany
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewProjectsInCompany,
            data: lightSwitchApplication.ProjectsInCompany,
            value: lightSwitchApplication.ProjectsInCompany
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewProjectsInCompany,
            data: lightSwitchApplication.ProjectsInCompany,
            value: lightSwitchApplication.ProjectsInCompany
        },
        ProjectType: {
            _$class: msls.ContentItem,
            _$name: "ProjectType",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewProjectsInCompany,
            data: lightSwitchApplication.ProjectsInCompany,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewProjectsInCompany
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewProjectsInCompany, {
        /// <field>
        /// Called when a new ViewProjectsInCompany screen is created.
        /// <br/>created(msls.application.ViewProjectsInCompany screen)
        /// </field>
        created: [lightSwitchApplication.ViewProjectsInCompany],
        /// <field>
        /// Called before changes on an active ViewProjectsInCompany screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewProjectsInCompany screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewProjectsInCompany],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectsInCompany().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectsInCompany().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectsInCompany().findContentItem("left"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectsInCompany().findContentItem("right"); }],
        /// <field>
        /// Called after the ProjectType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectType_postRender: [$element, function () { return new lightSwitchApplication.ViewProjectsInCompany().findContentItem("ProjectType"); }]
    });

    lightSwitchApplication.BrowseTotalHoursProjectWise.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTotalHoursProjectWise
        },
        TotalHoursProjectWiseItemList: {
            _$class: msls.ContentItem,
            _$name: "TotalHoursProjectWiseItemList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseTotalHoursProjectWise,
            data: lightSwitchApplication.BrowseTotalHoursProjectWise,
            value: lightSwitchApplication.BrowseTotalHoursProjectWise
        },
        Back: {
            _$class: msls.ContentItem,
            _$name: "Back",
            _$parentName: "TotalHoursProjectWiseItemList",
            screen: lightSwitchApplication.BrowseTotalHoursProjectWise
        },
        Property1: {
            _$class: msls.ContentItem,
            _$name: "Property1",
            _$parentName: "TotalHoursProjectWiseItemList",
            screen: lightSwitchApplication.BrowseTotalHoursProjectWise,
            data: lightSwitchApplication.BrowseTotalHoursProjectWise,
            value: lightSwitchApplication.ProjectDetail
        },
        Property1Template: {
            _$class: msls.ContentItem,
            _$name: "Property1Template",
            _$parentName: "Property1",
            screen: lightSwitchApplication.BrowseTotalHoursProjectWise,
            data: lightSwitchApplication.ProjectDetail,
            value: lightSwitchApplication.ProjectDetail
        },
        GetSelfProjects: {
            _$class: msls.ContentItem,
            _$name: "GetSelfProjects",
            _$parentName: "TotalHoursProjectWiseItemList",
            screen: lightSwitchApplication.BrowseTotalHoursProjectWise,
            data: lightSwitchApplication.BrowseTotalHoursProjectWise,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseTotalHoursProjectWise,
                _$entry: {
                    elementType: lightSwitchApplication.ProjectDetail
                }
            }
        },
        GetSelfProjectsTemplate: {
            _$class: msls.ContentItem,
            _$name: "GetSelfProjectsTemplate",
            _$parentName: "GetSelfProjects",
            screen: lightSwitchApplication.BrowseTotalHoursProjectWise,
            data: lightSwitchApplication.ProjectDetail,
            value: lightSwitchApplication.ProjectDetail
        },
        TotalHoursProjectWise: {
            _$class: msls.ContentItem,
            _$name: "TotalHoursProjectWise",
            _$parentName: "TotalHoursProjectWiseItemList",
            screen: lightSwitchApplication.BrowseTotalHoursProjectWise,
            data: lightSwitchApplication.BrowseTotalHoursProjectWise,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseTotalHoursProjectWise,
                _$entry: {
                    elementType: lightSwitchApplication.TotalHoursProjectwiseforMonth
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "TotalHoursProjectWise",
            screen: lightSwitchApplication.BrowseTotalHoursProjectWise,
            data: lightSwitchApplication.TotalHoursProjectwiseforMonth,
            value: lightSwitchApplication.TotalHoursProjectwiseforMonth
        },
        ProjectName: {
            _$class: msls.ContentItem,
            _$name: "ProjectName",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTotalHoursProjectWise,
            data: lightSwitchApplication.TotalHoursProjectwiseforMonth,
            value: String
        },
        MonthName: {
            _$class: msls.ContentItem,
            _$name: "MonthName",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTotalHoursProjectWise,
            data: lightSwitchApplication.TotalHoursProjectwiseforMonth,
            value: String
        },
        Total_Hours: {
            _$class: msls.ContentItem,
            _$name: "Total_Hours",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTotalHoursProjectWise,
            data: lightSwitchApplication.TotalHoursProjectwiseforMonth,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTotalHoursProjectWise
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseTotalHoursProjectWise, {
        /// <field>
        /// Called when a new BrowseTotalHoursProjectWise screen is created.
        /// <br/>created(msls.application.BrowseTotalHoursProjectWise screen)
        /// </field>
        created: [lightSwitchApplication.BrowseTotalHoursProjectWise],
        /// <field>
        /// Called before changes on an active BrowseTotalHoursProjectWise screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseTotalHoursProjectWise screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseTotalHoursProjectWise],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.BrowseTotalHoursProjectWise screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.BrowseTotalHoursProjectWise],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.BrowseTotalHoursProjectWise screen)
        /// </field>
        Back_execute: [lightSwitchApplication.BrowseTotalHoursProjectWise],
        /// <field>
        /// Called after the TotalHoursProjectWiseItemList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TotalHoursProjectWiseItemList_postRender: [$element, function () { return new lightSwitchApplication.BrowseTotalHoursProjectWise().findContentItem("TotalHoursProjectWiseItemList"); }],
        /// <field>
        /// Called after the Back content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Back_postRender: [$element, function () { return new lightSwitchApplication.BrowseTotalHoursProjectWise().findContentItem("Back"); }],
        /// <field>
        /// Called after the Property1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Property1_postRender: [$element, function () { return new lightSwitchApplication.BrowseTotalHoursProjectWise().findContentItem("Property1"); }],
        /// <field>
        /// Called after the Property1Template content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Property1Template_postRender: [$element, function () { return new lightSwitchApplication.BrowseTotalHoursProjectWise().findContentItem("Property1Template"); }],
        /// <field>
        /// Called after the GetSelfProjects content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GetSelfProjects_postRender: [$element, function () { return new lightSwitchApplication.BrowseTotalHoursProjectWise().findContentItem("GetSelfProjects"); }],
        /// <field>
        /// Called after the GetSelfProjectsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GetSelfProjectsTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseTotalHoursProjectWise().findContentItem("GetSelfProjectsTemplate"); }],
        /// <field>
        /// Called after the TotalHoursProjectWise content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TotalHoursProjectWise_postRender: [$element, function () { return new lightSwitchApplication.BrowseTotalHoursProjectWise().findContentItem("TotalHoursProjectWise"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseTotalHoursProjectWise().findContentItem("rows"); }],
        /// <field>
        /// Called after the ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName_postRender: [$element, function () { return new lightSwitchApplication.BrowseTotalHoursProjectWise().findContentItem("ProjectName"); }],
        /// <field>
        /// Called after the MonthName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthName_postRender: [$element, function () { return new lightSwitchApplication.BrowseTotalHoursProjectWise().findContentItem("MonthName"); }],
        /// <field>
        /// Called after the Total_Hours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Total_Hours_postRender: [$element, function () { return new lightSwitchApplication.BrowseTotalHoursProjectWise().findContentItem("Total_Hours"); }]
    });

    lightSwitchApplication.ViewTotalHoursProjectWiseItem.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewTotalHoursProjectWiseItem
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewTotalHoursProjectWiseItem,
            data: lightSwitchApplication.ViewTotalHoursProjectWiseItem,
            value: lightSwitchApplication.ViewTotalHoursProjectWiseItem
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewTotalHoursProjectWiseItem,
            data: lightSwitchApplication.ViewTotalHoursProjectWiseItem,
            value: lightSwitchApplication.TotalHoursProjectwiseforMonth
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewTotalHoursProjectWiseItem,
            data: lightSwitchApplication.TotalHoursProjectwiseforMonth,
            value: lightSwitchApplication.TotalHoursProjectwiseforMonth
        },
        Total_Hours: {
            _$class: msls.ContentItem,
            _$name: "Total_Hours",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTotalHoursProjectWiseItem,
            data: lightSwitchApplication.TotalHoursProjectwiseforMonth,
            value: String
        },
        MonthName: {
            _$class: msls.ContentItem,
            _$name: "MonthName",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTotalHoursProjectWiseItem,
            data: lightSwitchApplication.TotalHoursProjectwiseforMonth,
            value: String
        },
        ProjectName: {
            _$class: msls.ContentItem,
            _$name: "ProjectName",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewTotalHoursProjectWiseItem,
            data: lightSwitchApplication.TotalHoursProjectwiseforMonth,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewTotalHoursProjectWiseItem,
            data: lightSwitchApplication.TotalHoursProjectwiseforMonth,
            value: lightSwitchApplication.TotalHoursProjectwiseforMonth
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewTotalHoursProjectWiseItem,
            data: lightSwitchApplication.TotalHoursProjectwiseforMonth,
            value: Number
        },
        ProjectID: {
            _$class: msls.ContentItem,
            _$name: "ProjectID",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewTotalHoursProjectWiseItem,
            data: lightSwitchApplication.TotalHoursProjectwiseforMonth,
            value: Number
        },
        MonthID: {
            _$class: msls.ContentItem,
            _$name: "MonthID",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewTotalHoursProjectWiseItem,
            data: lightSwitchApplication.TotalHoursProjectwiseforMonth,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewTotalHoursProjectWiseItem
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewTotalHoursProjectWiseItem, {
        /// <field>
        /// Called when a new ViewTotalHoursProjectWiseItem screen is created.
        /// <br/>created(msls.application.ViewTotalHoursProjectWiseItem screen)
        /// </field>
        created: [lightSwitchApplication.ViewTotalHoursProjectWiseItem],
        /// <field>
        /// Called before changes on an active ViewTotalHoursProjectWiseItem screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewTotalHoursProjectWiseItem screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewTotalHoursProjectWiseItem],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewTotalHoursProjectWiseItem().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewTotalHoursProjectWiseItem().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewTotalHoursProjectWiseItem().findContentItem("left"); }],
        /// <field>
        /// Called after the Total_Hours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Total_Hours_postRender: [$element, function () { return new lightSwitchApplication.ViewTotalHoursProjectWiseItem().findContentItem("Total_Hours"); }],
        /// <field>
        /// Called after the MonthName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthName_postRender: [$element, function () { return new lightSwitchApplication.ViewTotalHoursProjectWiseItem().findContentItem("MonthName"); }],
        /// <field>
        /// Called after the ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName_postRender: [$element, function () { return new lightSwitchApplication.ViewTotalHoursProjectWiseItem().findContentItem("ProjectName"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewTotalHoursProjectWiseItem().findContentItem("right"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.ViewTotalHoursProjectWiseItem().findContentItem("EmpID"); }],
        /// <field>
        /// Called after the ProjectID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectID_postRender: [$element, function () { return new lightSwitchApplication.ViewTotalHoursProjectWiseItem().findContentItem("ProjectID"); }],
        /// <field>
        /// Called after the MonthID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthID_postRender: [$element, function () { return new lightSwitchApplication.ViewTotalHoursProjectWiseItem().findContentItem("MonthID"); }]
    });

    lightSwitchApplication.AddEditViewReportee.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditViewReportee
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditViewReportee,
            data: lightSwitchApplication.AddEditViewReportee,
            value: lightSwitchApplication.AddEditViewReportee
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditViewReportee,
            data: lightSwitchApplication.AddEditViewReportee,
            value: lightSwitchApplication.EmployeeDetail
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditViewReportee,
            data: lightSwitchApplication.EmployeeDetail,
            value: lightSwitchApplication.EmployeeDetail
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditViewReportee,
            data: lightSwitchApplication.EmployeeDetail,
            value: Number
        },
        EmpName: {
            _$class: msls.ContentItem,
            _$name: "EmpName",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditViewReportee,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        Designation: {
            _$class: msls.ContentItem,
            _$name: "Designation",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditViewReportee,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditViewReportee,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditViewReportee,
            data: lightSwitchApplication.EmployeeDetail,
            value: lightSwitchApplication.EmployeeDetail
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditViewReportee,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        EmployeeDetail1: {
            _$class: msls.ContentItem,
            _$name: "EmployeeDetail1",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditViewReportee,
            data: lightSwitchApplication.EmployeeDetail,
            value: lightSwitchApplication.EmployeeDetail
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "EmployeeDetail1",
            screen: lightSwitchApplication.AddEditViewReportee,
            data: lightSwitchApplication.EmployeeDetail,
            value: lightSwitchApplication.EmployeeDetail
        },
        Role: {
            _$class: msls.ContentItem,
            _$name: "Role",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditViewReportee,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditViewReportee
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditViewReportee, {
        /// <field>
        /// Called when a new AddEditViewReportee screen is created.
        /// <br/>created(msls.application.AddEditViewReportee screen)
        /// </field>
        created: [lightSwitchApplication.AddEditViewReportee],
        /// <field>
        /// Called before changes on an active AddEditViewReportee screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditViewReportee screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditViewReportee],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.AddEditViewReportee screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.AddEditViewReportee],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.AddEditViewReportee screen)
        /// </field>
        Back_execute: [lightSwitchApplication.AddEditViewReportee],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditViewReportee().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditViewReportee().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditViewReportee().findContentItem("left"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.AddEditViewReportee().findContentItem("EmpID"); }],
        /// <field>
        /// Called after the EmpName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpName_postRender: [$element, function () { return new lightSwitchApplication.AddEditViewReportee().findContentItem("EmpName"); }],
        /// <field>
        /// Called after the Designation content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Designation_postRender: [$element, function () { return new lightSwitchApplication.AddEditViewReportee().findContentItem("Designation"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.AddEditViewReportee().findContentItem("Email"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditViewReportee().findContentItem("right"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.AddEditViewReportee().findContentItem("UserName"); }],
        /// <field>
        /// Called after the EmployeeDetail1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeDetail1_postRender: [$element, function () { return new lightSwitchApplication.AddEditViewReportee().findContentItem("EmployeeDetail1"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditViewReportee().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Role content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Role_postRender: [$element, function () { return new lightSwitchApplication.AddEditViewReportee().findContentItem("Role"); }]
    });

    lightSwitchApplication.BrowseViewReportees.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseViewReportees
        },
        ViewReporteeList: {
            _$class: msls.ContentItem,
            _$name: "ViewReporteeList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseViewReportees,
            data: lightSwitchApplication.BrowseViewReportees,
            value: lightSwitchApplication.BrowseViewReportees
        },
        Back: {
            _$class: msls.ContentItem,
            _$name: "Back",
            _$parentName: "ViewReporteeList",
            screen: lightSwitchApplication.BrowseViewReportees
        },
        ViewReportees: {
            _$class: msls.ContentItem,
            _$name: "ViewReportees",
            _$parentName: "ViewReporteeList",
            screen: lightSwitchApplication.BrowseViewReportees,
            data: lightSwitchApplication.BrowseViewReportees,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseViewReportees,
                _$entry: {
                    elementType: lightSwitchApplication.EmployeeDetail
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "ViewReportees",
            screen: lightSwitchApplication.BrowseViewReportees,
            data: lightSwitchApplication.EmployeeDetail,
            value: lightSwitchApplication.EmployeeDetail
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseViewReportees,
            data: lightSwitchApplication.EmployeeDetail,
            value: Number
        },
        EmpName: {
            _$class: msls.ContentItem,
            _$name: "EmpName",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseViewReportees,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        Designation: {
            _$class: msls.ContentItem,
            _$name: "Designation",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseViewReportees,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseViewReportees,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseViewReportees,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        Role: {
            _$class: msls.ContentItem,
            _$name: "Role",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseViewReportees,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        EmployeeDetail1: {
            _$class: msls.ContentItem,
            _$name: "EmployeeDetail1",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseViewReportees,
            data: lightSwitchApplication.EmployeeDetail,
            value: lightSwitchApplication.EmployeeDetail
        },
        View: {
            _$class: msls.ContentItem,
            _$name: "View",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseViewReportees
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseViewReportees
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseViewReportees, {
        /// <field>
        /// Called when a new BrowseViewReportees screen is created.
        /// <br/>created(msls.application.BrowseViewReportees screen)
        /// </field>
        created: [lightSwitchApplication.BrowseViewReportees],
        /// <field>
        /// Called before changes on an active BrowseViewReportees screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseViewReportees screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseViewReportees],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.BrowseViewReportees screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.BrowseViewReportees],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.BrowseViewReportees screen)
        /// </field>
        Back_execute: [lightSwitchApplication.BrowseViewReportees],
        /// <field>
        /// Called to determine if the View method can be executed.
        /// <br/>canExecute(msls.application.BrowseViewReportees screen)
        /// </field>
        View_canExecute: [lightSwitchApplication.BrowseViewReportees],
        /// <field>
        /// Called to execute the View method.
        /// <br/>execute(msls.application.BrowseViewReportees screen)
        /// </field>
        View_execute: [lightSwitchApplication.BrowseViewReportees],
        /// <field>
        /// Called after the ViewReporteeList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ViewReporteeList_postRender: [$element, function () { return new lightSwitchApplication.BrowseViewReportees().findContentItem("ViewReporteeList"); }],
        /// <field>
        /// Called after the Back content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Back_postRender: [$element, function () { return new lightSwitchApplication.BrowseViewReportees().findContentItem("Back"); }],
        /// <field>
        /// Called after the ViewReportees content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ViewReportees_postRender: [$element, function () { return new lightSwitchApplication.BrowseViewReportees().findContentItem("ViewReportees"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseViewReportees().findContentItem("rows"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.BrowseViewReportees().findContentItem("EmpID"); }],
        /// <field>
        /// Called after the EmpName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpName_postRender: [$element, function () { return new lightSwitchApplication.BrowseViewReportees().findContentItem("EmpName"); }],
        /// <field>
        /// Called after the Designation content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Designation_postRender: [$element, function () { return new lightSwitchApplication.BrowseViewReportees().findContentItem("Designation"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.BrowseViewReportees().findContentItem("Email"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.BrowseViewReportees().findContentItem("UserName"); }],
        /// <field>
        /// Called after the Role content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Role_postRender: [$element, function () { return new lightSwitchApplication.BrowseViewReportees().findContentItem("Role"); }],
        /// <field>
        /// Called after the EmployeeDetail1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeDetail1_postRender: [$element, function () { return new lightSwitchApplication.BrowseViewReportees().findContentItem("EmployeeDetail1"); }],
        /// <field>
        /// Called after the View content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        View_postRender: [$element, function () { return new lightSwitchApplication.BrowseViewReportees().findContentItem("View"); }]
    });

    lightSwitchApplication.ViewViewReportee.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewViewReportee
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewViewReportee,
            data: lightSwitchApplication.ViewViewReportee,
            value: lightSwitchApplication.ViewViewReportee
        },
        Back: {
            _$class: msls.ContentItem,
            _$name: "Back",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewViewReportee
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.ViewViewReportee,
            data: lightSwitchApplication.ViewViewReportee,
            value: lightSwitchApplication.EmployeeDetail
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewViewReportee,
            data: lightSwitchApplication.EmployeeDetail,
            value: lightSwitchApplication.EmployeeDetail
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewViewReportee,
            data: lightSwitchApplication.EmployeeDetail,
            value: Number
        },
        EmpName: {
            _$class: msls.ContentItem,
            _$name: "EmpName",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewViewReportee,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        Designation: {
            _$class: msls.ContentItem,
            _$name: "Designation",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewViewReportee,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "left",
            screen: lightSwitchApplication.ViewViewReportee,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.ViewViewReportee,
            data: lightSwitchApplication.EmployeeDetail,
            value: lightSwitchApplication.EmployeeDetail
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewViewReportee,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        EmployeeDetail1: {
            _$class: msls.ContentItem,
            _$name: "EmployeeDetail1",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewViewReportee,
            data: lightSwitchApplication.EmployeeDetail,
            value: lightSwitchApplication.EmployeeDetail
        },
        Role: {
            _$class: msls.ContentItem,
            _$name: "Role",
            _$parentName: "right",
            screen: lightSwitchApplication.ViewViewReportee,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewViewReportee
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewViewReportee, {
        /// <field>
        /// Called when a new ViewViewReportee screen is created.
        /// <br/>created(msls.application.ViewViewReportee screen)
        /// </field>
        created: [lightSwitchApplication.ViewViewReportee],
        /// <field>
        /// Called before changes on an active ViewViewReportee screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewViewReportee screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewViewReportee],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.ViewViewReportee screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.ViewViewReportee],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.ViewViewReportee screen)
        /// </field>
        Back_execute: [lightSwitchApplication.ViewViewReportee],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.ViewViewReportee().findContentItem("Details"); }],
        /// <field>
        /// Called after the Back content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Back_postRender: [$element, function () { return new lightSwitchApplication.ViewViewReportee().findContentItem("Back"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.ViewViewReportee().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.ViewViewReportee().findContentItem("left"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.ViewViewReportee().findContentItem("EmpID"); }],
        /// <field>
        /// Called after the EmpName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpName_postRender: [$element, function () { return new lightSwitchApplication.ViewViewReportee().findContentItem("EmpName"); }],
        /// <field>
        /// Called after the Designation content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Designation_postRender: [$element, function () { return new lightSwitchApplication.ViewViewReportee().findContentItem("Designation"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.ViewViewReportee().findContentItem("Email"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.ViewViewReportee().findContentItem("right"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.ViewViewReportee().findContentItem("UserName"); }],
        /// <field>
        /// Called after the EmployeeDetail1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeDetail1_postRender: [$element, function () { return new lightSwitchApplication.ViewViewReportee().findContentItem("EmployeeDetail1"); }],
        /// <field>
        /// Called after the Role content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Role_postRender: [$element, function () { return new lightSwitchApplication.ViewViewReportee().findContentItem("Role"); }]
    });

    lightSwitchApplication.BrowseCompanySelfProjects.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseCompanySelfProjects
        },
        CompanyProjectList: {
            _$class: msls.ContentItem,
            _$name: "CompanyProjectList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseCompanySelfProjects,
            data: lightSwitchApplication.BrowseCompanySelfProjects,
            value: lightSwitchApplication.BrowseCompanySelfProjects
        },
        Back: {
            _$class: msls.ContentItem,
            _$name: "Back",
            _$parentName: "CompanyProjectList",
            screen: lightSwitchApplication.BrowseCompanySelfProjects
        },
        CompanySelfProjects: {
            _$class: msls.ContentItem,
            _$name: "CompanySelfProjects",
            _$parentName: "CompanyProjectList",
            screen: lightSwitchApplication.BrowseCompanySelfProjects,
            data: lightSwitchApplication.BrowseCompanySelfProjects,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseCompanySelfProjects,
                _$entry: {
                    elementType: lightSwitchApplication.CompanyProject
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "CompanySelfProjects",
            screen: lightSwitchApplication.BrowseCompanySelfProjects,
            data: lightSwitchApplication.CompanyProject,
            value: lightSwitchApplication.CompanyProject
        },
        ProjectName: {
            _$class: msls.ContentItem,
            _$name: "ProjectName",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseCompanySelfProjects,
            data: lightSwitchApplication.CompanyProject,
            value: String
        },
        ProjectType: {
            _$class: msls.ContentItem,
            _$name: "ProjectType",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseCompanySelfProjects,
            data: lightSwitchApplication.CompanyProject,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseCompanySelfProjects
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseCompanySelfProjects, {
        /// <field>
        /// Called when a new BrowseCompanySelfProjects screen is created.
        /// <br/>created(msls.application.BrowseCompanySelfProjects screen)
        /// </field>
        created: [lightSwitchApplication.BrowseCompanySelfProjects],
        /// <field>
        /// Called before changes on an active BrowseCompanySelfProjects screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseCompanySelfProjects screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseCompanySelfProjects],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.BrowseCompanySelfProjects screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.BrowseCompanySelfProjects],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.BrowseCompanySelfProjects screen)
        /// </field>
        Back_execute: [lightSwitchApplication.BrowseCompanySelfProjects],
        /// <field>
        /// Called after the CompanyProjectList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CompanyProjectList_postRender: [$element, function () { return new lightSwitchApplication.BrowseCompanySelfProjects().findContentItem("CompanyProjectList"); }],
        /// <field>
        /// Called after the Back content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Back_postRender: [$element, function () { return new lightSwitchApplication.BrowseCompanySelfProjects().findContentItem("Back"); }],
        /// <field>
        /// Called after the CompanySelfProjects content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CompanySelfProjects_postRender: [$element, function () { return new lightSwitchApplication.BrowseCompanySelfProjects().findContentItem("CompanySelfProjects"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseCompanySelfProjects().findContentItem("rows"); }],
        /// <field>
        /// Called after the ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName_postRender: [$element, function () { return new lightSwitchApplication.BrowseCompanySelfProjects().findContentItem("ProjectName"); }],
        /// <field>
        /// Called after the ProjectType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectType_postRender: [$element, function () { return new lightSwitchApplication.BrowseCompanySelfProjects().findContentItem("ProjectType"); }]
    });

    lightSwitchApplication.BrowseCompanyTeamMembers.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseCompanyTeamMembers
        },
        ProjectDetailList: {
            _$class: msls.ContentItem,
            _$name: "ProjectDetailList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseCompanyTeamMembers,
            data: lightSwitchApplication.BrowseCompanyTeamMembers,
            value: lightSwitchApplication.BrowseCompanyTeamMembers
        },
        Back: {
            _$class: msls.ContentItem,
            _$name: "Back",
            _$parentName: "ProjectDetailList",
            screen: lightSwitchApplication.BrowseCompanyTeamMembers
        },
        CompanyTeamProjects: {
            _$class: msls.ContentItem,
            _$name: "CompanyTeamProjects",
            _$parentName: "ProjectDetailList",
            screen: lightSwitchApplication.BrowseCompanyTeamMembers,
            data: lightSwitchApplication.BrowseCompanyTeamMembers,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseCompanyTeamMembers,
                _$entry: {
                    elementType: lightSwitchApplication.CompanyTeamProject
                }
            }
        },
        CompanyTeamProjectsTemplate: {
            _$class: msls.ContentItem,
            _$name: "CompanyTeamProjectsTemplate",
            _$parentName: "CompanyTeamProjects",
            screen: lightSwitchApplication.BrowseCompanyTeamMembers,
            data: lightSwitchApplication.CompanyTeamProject,
            value: lightSwitchApplication.CompanyTeamProject
        },
        EmpName: {
            _$class: msls.ContentItem,
            _$name: "EmpName",
            _$parentName: "CompanyTeamProjectsTemplate",
            screen: lightSwitchApplication.BrowseCompanyTeamMembers,
            data: lightSwitchApplication.CompanyTeamProject,
            value: String
        },
        ProjectName: {
            _$class: msls.ContentItem,
            _$name: "ProjectName",
            _$parentName: "CompanyTeamProjectsTemplate",
            screen: lightSwitchApplication.BrowseCompanyTeamMembers,
            data: lightSwitchApplication.CompanyTeamProject,
            value: String
        },
        ProjectType: {
            _$class: msls.ContentItem,
            _$name: "ProjectType",
            _$parentName: "CompanyTeamProjectsTemplate",
            screen: lightSwitchApplication.BrowseCompanyTeamMembers,
            data: lightSwitchApplication.CompanyTeamProject,
            value: String
        },
        ProjectID: {
            _$class: msls.ContentItem,
            _$name: "ProjectID",
            _$parentName: "CompanyTeamProjectsTemplate",
            screen: lightSwitchApplication.BrowseCompanyTeamMembers,
            data: lightSwitchApplication.CompanyTeamProject,
            value: Number
        },
        ComplexityDifficultyLevel: {
            _$class: msls.ContentItem,
            _$name: "ComplexityDifficultyLevel",
            _$parentName: "CompanyTeamProjectsTemplate",
            screen: lightSwitchApplication.BrowseCompanyTeamMembers,
            data: lightSwitchApplication.CompanyTeamProject,
            value: String
        },
        ComplexityScope: {
            _$class: msls.ContentItem,
            _$name: "ComplexityScope",
            _$parentName: "CompanyTeamProjectsTemplate",
            screen: lightSwitchApplication.BrowseCompanyTeamMembers,
            data: lightSwitchApplication.CompanyTeamProject,
            value: String
        },
        ProjectStatus: {
            _$class: msls.ContentItem,
            _$name: "ProjectStatus",
            _$parentName: "CompanyTeamProjectsTemplate",
            screen: lightSwitchApplication.BrowseCompanyTeamMembers,
            data: lightSwitchApplication.CompanyTeamProject,
            value: String
        },
        StartDate: {
            _$class: msls.ContentItem,
            _$name: "StartDate",
            _$parentName: "CompanyTeamProjectsTemplate",
            screen: lightSwitchApplication.BrowseCompanyTeamMembers,
            data: lightSwitchApplication.CompanyTeamProject,
            value: Date
        },
        EndDate: {
            _$class: msls.ContentItem,
            _$name: "EndDate",
            _$parentName: "CompanyTeamProjectsTemplate",
            screen: lightSwitchApplication.BrowseCompanyTeamMembers,
            data: lightSwitchApplication.CompanyTeamProject,
            value: Date
        },
        ComplexityAvg: {
            _$class: msls.ContentItem,
            _$name: "ComplexityAvg",
            _$parentName: "CompanyTeamProjectsTemplate",
            screen: lightSwitchApplication.BrowseCompanyTeamMembers,
            data: lightSwitchApplication.CompanyTeamProject,
            value: String
        },
        QualityPMRating: {
            _$class: msls.ContentItem,
            _$name: "QualityPMRating",
            _$parentName: "CompanyTeamProjectsTemplate",
            screen: lightSwitchApplication.BrowseCompanyTeamMembers,
            data: lightSwitchApplication.CompanyTeamProject,
            value: String
        },
        QualityPeerReview: {
            _$class: msls.ContentItem,
            _$name: "QualityPeerReview",
            _$parentName: "CompanyTeamProjectsTemplate",
            screen: lightSwitchApplication.BrowseCompanyTeamMembers,
            data: lightSwitchApplication.CompanyTeamProject,
            value: String
        },
        QualityProjectDuration: {
            _$class: msls.ContentItem,
            _$name: "QualityProjectDuration",
            _$parentName: "CompanyTeamProjectsTemplate",
            screen: lightSwitchApplication.BrowseCompanyTeamMembers,
            data: lightSwitchApplication.CompanyTeamProject,
            value: String
        },
        QualityAverage: {
            _$class: msls.ContentItem,
            _$name: "QualityAverage",
            _$parentName: "CompanyTeamProjectsTemplate",
            screen: lightSwitchApplication.BrowseCompanyTeamMembers,
            data: lightSwitchApplication.CompanyTeamProject,
            value: String
        },
        AssignProjectID: {
            _$class: msls.ContentItem,
            _$name: "AssignProjectID",
            _$parentName: "CompanyTeamProjectsTemplate",
            screen: lightSwitchApplication.BrowseCompanyTeamMembers,
            data: lightSwitchApplication.CompanyTeamProject,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseCompanyTeamMembers
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseCompanyTeamMembers, {
        /// <field>
        /// Called when a new BrowseCompanyTeamMembers screen is created.
        /// <br/>created(msls.application.BrowseCompanyTeamMembers screen)
        /// </field>
        created: [lightSwitchApplication.BrowseCompanyTeamMembers],
        /// <field>
        /// Called before changes on an active BrowseCompanyTeamMembers screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseCompanyTeamMembers screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseCompanyTeamMembers],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.BrowseCompanyTeamMembers screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.BrowseCompanyTeamMembers],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.BrowseCompanyTeamMembers screen)
        /// </field>
        Back_execute: [lightSwitchApplication.BrowseCompanyTeamMembers],
        /// <field>
        /// Called after the ProjectDetailList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectDetailList_postRender: [$element, function () { return new lightSwitchApplication.BrowseCompanyTeamMembers().findContentItem("ProjectDetailList"); }],
        /// <field>
        /// Called after the Back content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Back_postRender: [$element, function () { return new lightSwitchApplication.BrowseCompanyTeamMembers().findContentItem("Back"); }],
        /// <field>
        /// Called after the CompanyTeamProjects content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CompanyTeamProjects_postRender: [$element, function () { return new lightSwitchApplication.BrowseCompanyTeamMembers().findContentItem("CompanyTeamProjects"); }],
        /// <field>
        /// Called after the CompanyTeamProjectsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CompanyTeamProjectsTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseCompanyTeamMembers().findContentItem("CompanyTeamProjectsTemplate"); }],
        /// <field>
        /// Called after the EmpName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpName_postRender: [$element, function () { return new lightSwitchApplication.BrowseCompanyTeamMembers().findContentItem("EmpName"); }],
        /// <field>
        /// Called after the ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName_postRender: [$element, function () { return new lightSwitchApplication.BrowseCompanyTeamMembers().findContentItem("ProjectName"); }],
        /// <field>
        /// Called after the ProjectType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectType_postRender: [$element, function () { return new lightSwitchApplication.BrowseCompanyTeamMembers().findContentItem("ProjectType"); }],
        /// <field>
        /// Called after the ProjectID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectID_postRender: [$element, function () { return new lightSwitchApplication.BrowseCompanyTeamMembers().findContentItem("ProjectID"); }],
        /// <field>
        /// Called after the ComplexityDifficultyLevel content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ComplexityDifficultyLevel_postRender: [$element, function () { return new lightSwitchApplication.BrowseCompanyTeamMembers().findContentItem("ComplexityDifficultyLevel"); }],
        /// <field>
        /// Called after the ComplexityScope content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ComplexityScope_postRender: [$element, function () { return new lightSwitchApplication.BrowseCompanyTeamMembers().findContentItem("ComplexityScope"); }],
        /// <field>
        /// Called after the ProjectStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectStatus_postRender: [$element, function () { return new lightSwitchApplication.BrowseCompanyTeamMembers().findContentItem("ProjectStatus"); }],
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseCompanyTeamMembers().findContentItem("StartDate"); }],
        /// <field>
        /// Called after the EndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseCompanyTeamMembers().findContentItem("EndDate"); }],
        /// <field>
        /// Called after the ComplexityAvg content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ComplexityAvg_postRender: [$element, function () { return new lightSwitchApplication.BrowseCompanyTeamMembers().findContentItem("ComplexityAvg"); }],
        /// <field>
        /// Called after the QualityPMRating content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QualityPMRating_postRender: [$element, function () { return new lightSwitchApplication.BrowseCompanyTeamMembers().findContentItem("QualityPMRating"); }],
        /// <field>
        /// Called after the QualityPeerReview content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QualityPeerReview_postRender: [$element, function () { return new lightSwitchApplication.BrowseCompanyTeamMembers().findContentItem("QualityPeerReview"); }],
        /// <field>
        /// Called after the QualityProjectDuration content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QualityProjectDuration_postRender: [$element, function () { return new lightSwitchApplication.BrowseCompanyTeamMembers().findContentItem("QualityProjectDuration"); }],
        /// <field>
        /// Called after the QualityAverage content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QualityAverage_postRender: [$element, function () { return new lightSwitchApplication.BrowseCompanyTeamMembers().findContentItem("QualityAverage"); }],
        /// <field>
        /// Called after the AssignProjectID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AssignProjectID_postRender: [$element, function () { return new lightSwitchApplication.BrowseCompanyTeamMembers().findContentItem("AssignProjectID"); }]
    });

    lightSwitchApplication.BrowseEmployeeProjectHours.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployeeProjectHours
        },
        EmployeeProjectHourList: {
            _$class: msls.ContentItem,
            _$name: "EmployeeProjectHourList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseEmployeeProjectHours,
            data: lightSwitchApplication.BrowseEmployeeProjectHours,
            value: lightSwitchApplication.BrowseEmployeeProjectHours
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "EmployeeProjectHourList",
            screen: lightSwitchApplication.BrowseEmployeeProjectHours,
            data: lightSwitchApplication.BrowseEmployeeProjectHours,
            value: lightSwitchApplication.BrowseEmployeeProjectHours
        },
        Property2: {
            _$class: msls.ContentItem,
            _$name: "Property2",
            _$parentName: "Group1",
            screen: lightSwitchApplication.BrowseEmployeeProjectHours,
            data: lightSwitchApplication.BrowseEmployeeProjectHours,
            value: Date
        },
        Property3: {
            _$class: msls.ContentItem,
            _$name: "Property3",
            _$parentName: "Group1",
            screen: lightSwitchApplication.BrowseEmployeeProjectHours,
            data: lightSwitchApplication.BrowseEmployeeProjectHours,
            value: Date
        },
        Back: {
            _$class: msls.ContentItem,
            _$name: "Back",
            _$parentName: "EmployeeProjectHourList",
            screen: lightSwitchApplication.BrowseEmployeeProjectHours
        },
        EmployeeProjectHours: {
            _$class: msls.ContentItem,
            _$name: "EmployeeProjectHours",
            _$parentName: "EmployeeProjectHourList",
            screen: lightSwitchApplication.BrowseEmployeeProjectHours,
            data: lightSwitchApplication.BrowseEmployeeProjectHours,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseEmployeeProjectHours,
                _$entry: {
                    elementType: lightSwitchApplication.EmployeeProjectHour
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "EmployeeProjectHours",
            screen: lightSwitchApplication.BrowseEmployeeProjectHours,
            data: lightSwitchApplication.EmployeeProjectHour,
            value: lightSwitchApplication.EmployeeProjectHour
        },
        ProjectName: {
            _$class: msls.ContentItem,
            _$name: "ProjectName",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseEmployeeProjectHours,
            data: lightSwitchApplication.EmployeeProjectHour,
            value: String
        },
        SubProject: {
            _$class: msls.ContentItem,
            _$name: "SubProject",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseEmployeeProjectHours,
            data: lightSwitchApplication.EmployeeProjectHour,
            value: String
        },
        c_Date: {
            _$class: msls.ContentItem,
            _$name: "c_Date",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseEmployeeProjectHours,
            data: lightSwitchApplication.EmployeeProjectHour,
            value: Date
        },
        Hours: {
            _$class: msls.ContentItem,
            _$name: "Hours",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseEmployeeProjectHours,
            data: lightSwitchApplication.EmployeeProjectHour,
            value: String
        },
        MonthName: {
            _$class: msls.ContentItem,
            _$name: "MonthName",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseEmployeeProjectHours,
            data: lightSwitchApplication.EmployeeProjectHour,
            value: String
        },
        ProjectID: {
            _$class: msls.ContentItem,
            _$name: "ProjectID",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseEmployeeProjectHours,
            data: lightSwitchApplication.EmployeeProjectHour,
            value: Number
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "EmployeeProjectHourList",
            screen: lightSwitchApplication.BrowseEmployeeProjectHours,
            data: lightSwitchApplication.BrowseEmployeeProjectHours,
            value: lightSwitchApplication.BrowseEmployeeProjectHours
        },
        ProjectManagerViewTeamHours: {
            _$class: msls.ContentItem,
            _$name: "ProjectManagerViewTeamHours",
            _$parentName: "Group",
            screen: lightSwitchApplication.BrowseEmployeeProjectHours,
            data: lightSwitchApplication.BrowseEmployeeProjectHours,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseEmployeeProjectHours,
                _$entry: {
                    elementType: lightSwitchApplication.ProjectManagerViewTeamHour
                }
            }
        },
        ProjectManagerViewTeamHoursTemplate: {
            _$class: msls.ContentItem,
            _$name: "ProjectManagerViewTeamHoursTemplate",
            _$parentName: "ProjectManagerViewTeamHours",
            screen: lightSwitchApplication.BrowseEmployeeProjectHours,
            data: lightSwitchApplication.ProjectManagerViewTeamHour,
            value: lightSwitchApplication.ProjectManagerViewTeamHour
        },
        EmpName: {
            _$class: msls.ContentItem,
            _$name: "EmpName",
            _$parentName: "ProjectManagerViewTeamHoursTemplate",
            screen: lightSwitchApplication.BrowseEmployeeProjectHours,
            data: lightSwitchApplication.ProjectManagerViewTeamHour,
            value: String
        },
        ProjectID1: {
            _$class: msls.ContentItem,
            _$name: "ProjectID1",
            _$parentName: "ProjectManagerViewTeamHoursTemplate",
            screen: lightSwitchApplication.BrowseEmployeeProjectHours,
            data: lightSwitchApplication.ProjectManagerViewTeamHour,
            value: Number
        },
        ProjectName1: {
            _$class: msls.ContentItem,
            _$name: "ProjectName1",
            _$parentName: "ProjectManagerViewTeamHoursTemplate",
            screen: lightSwitchApplication.BrowseEmployeeProjectHours,
            data: lightSwitchApplication.ProjectManagerViewTeamHour,
            value: String
        },
        Expr1: {
            _$class: msls.ContentItem,
            _$name: "Expr1",
            _$parentName: "ProjectManagerViewTeamHoursTemplate",
            screen: lightSwitchApplication.BrowseEmployeeProjectHours,
            data: lightSwitchApplication.ProjectManagerViewTeamHour,
            value: String
        },
        TotalHoursTeamMonthwises: {
            _$class: msls.ContentItem,
            _$name: "TotalHoursTeamMonthwises",
            _$parentName: "Group",
            screen: lightSwitchApplication.BrowseEmployeeProjectHours,
            data: lightSwitchApplication.BrowseEmployeeProjectHours,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseEmployeeProjectHours,
                _$entry: {
                    elementType: lightSwitchApplication.TotalHoursTeamMonthwise
                }
            }
        },
        TotalHoursTeamMonthwisesTemplate: {
            _$class: msls.ContentItem,
            _$name: "TotalHoursTeamMonthwisesTemplate",
            _$parentName: "TotalHoursTeamMonthwises",
            screen: lightSwitchApplication.BrowseEmployeeProjectHours,
            data: lightSwitchApplication.TotalHoursTeamMonthwise,
            value: lightSwitchApplication.TotalHoursTeamMonthwise
        },
        EmpName1: {
            _$class: msls.ContentItem,
            _$name: "EmpName1",
            _$parentName: "TotalHoursTeamMonthwisesTemplate",
            screen: lightSwitchApplication.BrowseEmployeeProjectHours,
            data: lightSwitchApplication.TotalHoursTeamMonthwise,
            value: String
        },
        ProjectID2: {
            _$class: msls.ContentItem,
            _$name: "ProjectID2",
            _$parentName: "TotalHoursTeamMonthwisesTemplate",
            screen: lightSwitchApplication.BrowseEmployeeProjectHours,
            data: lightSwitchApplication.TotalHoursTeamMonthwise,
            value: Number
        },
        ProjectName2: {
            _$class: msls.ContentItem,
            _$name: "ProjectName2",
            _$parentName: "TotalHoursTeamMonthwisesTemplate",
            screen: lightSwitchApplication.BrowseEmployeeProjectHours,
            data: lightSwitchApplication.TotalHoursTeamMonthwise,
            value: String
        },
        MonthID: {
            _$class: msls.ContentItem,
            _$name: "MonthID",
            _$parentName: "TotalHoursTeamMonthwisesTemplate",
            screen: lightSwitchApplication.BrowseEmployeeProjectHours,
            data: lightSwitchApplication.TotalHoursTeamMonthwise,
            value: Number
        },
        MonthName1: {
            _$class: msls.ContentItem,
            _$name: "MonthName1",
            _$parentName: "TotalHoursTeamMonthwisesTemplate",
            screen: lightSwitchApplication.BrowseEmployeeProjectHours,
            data: lightSwitchApplication.TotalHoursTeamMonthwise,
            value: String
        },
        Expr11: {
            _$class: msls.ContentItem,
            _$name: "Expr11",
            _$parentName: "TotalHoursTeamMonthwisesTemplate",
            screen: lightSwitchApplication.BrowseEmployeeProjectHours,
            data: lightSwitchApplication.TotalHoursTeamMonthwise,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseEmployeeProjectHours
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseEmployeeProjectHours, {
        /// <field>
        /// Called when a new BrowseEmployeeProjectHours screen is created.
        /// <br/>created(msls.application.BrowseEmployeeProjectHours screen)
        /// </field>
        created: [lightSwitchApplication.BrowseEmployeeProjectHours],
        /// <field>
        /// Called before changes on an active BrowseEmployeeProjectHours screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseEmployeeProjectHours screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseEmployeeProjectHours],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.BrowseEmployeeProjectHours screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.BrowseEmployeeProjectHours],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.BrowseEmployeeProjectHours screen)
        /// </field>
        Back_execute: [lightSwitchApplication.BrowseEmployeeProjectHours],
        /// <field>
        /// Called after the EmployeeProjectHourList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeProjectHourList_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjectHours().findContentItem("EmployeeProjectHourList"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjectHours().findContentItem("Group1"); }],
        /// <field>
        /// Called after the Property2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Property2_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjectHours().findContentItem("Property2"); }],
        /// <field>
        /// Called after the Property3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Property3_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjectHours().findContentItem("Property3"); }],
        /// <field>
        /// Called after the Back content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Back_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjectHours().findContentItem("Back"); }],
        /// <field>
        /// Called after the EmployeeProjectHours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeProjectHours_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjectHours().findContentItem("EmployeeProjectHours"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjectHours().findContentItem("rows"); }],
        /// <field>
        /// Called after the ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjectHours().findContentItem("ProjectName"); }],
        /// <field>
        /// Called after the SubProject content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SubProject_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjectHours().findContentItem("SubProject"); }],
        /// <field>
        /// Called after the c_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        c_Date_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjectHours().findContentItem("c_Date"); }],
        /// <field>
        /// Called after the Hours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hours_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjectHours().findContentItem("Hours"); }],
        /// <field>
        /// Called after the MonthName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjectHours().findContentItem("MonthName"); }],
        /// <field>
        /// Called after the ProjectID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectID_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjectHours().findContentItem("ProjectID"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjectHours().findContentItem("Group"); }],
        /// <field>
        /// Called after the ProjectManagerViewTeamHours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectManagerViewTeamHours_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjectHours().findContentItem("ProjectManagerViewTeamHours"); }],
        /// <field>
        /// Called after the ProjectManagerViewTeamHoursTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectManagerViewTeamHoursTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjectHours().findContentItem("ProjectManagerViewTeamHoursTemplate"); }],
        /// <field>
        /// Called after the EmpName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpName_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjectHours().findContentItem("EmpName"); }],
        /// <field>
        /// Called after the ProjectID1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectID1_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjectHours().findContentItem("ProjectID1"); }],
        /// <field>
        /// Called after the ProjectName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName1_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjectHours().findContentItem("ProjectName1"); }],
        /// <field>
        /// Called after the Expr1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Expr1_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjectHours().findContentItem("Expr1"); }],
        /// <field>
        /// Called after the TotalHoursTeamMonthwises content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TotalHoursTeamMonthwises_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjectHours().findContentItem("TotalHoursTeamMonthwises"); }],
        /// <field>
        /// Called after the TotalHoursTeamMonthwisesTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TotalHoursTeamMonthwisesTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjectHours().findContentItem("TotalHoursTeamMonthwisesTemplate"); }],
        /// <field>
        /// Called after the EmpName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpName1_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjectHours().findContentItem("EmpName1"); }],
        /// <field>
        /// Called after the ProjectID2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectID2_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjectHours().findContentItem("ProjectID2"); }],
        /// <field>
        /// Called after the ProjectName2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName2_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjectHours().findContentItem("ProjectName2"); }],
        /// <field>
        /// Called after the MonthID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthID_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjectHours().findContentItem("MonthID"); }],
        /// <field>
        /// Called after the MonthName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthName1_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjectHours().findContentItem("MonthName1"); }],
        /// <field>
        /// Called after the Expr11 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Expr11_postRender: [$element, function () { return new lightSwitchApplication.BrowseEmployeeProjectHours().findContentItem("Expr11"); }]
    });

    lightSwitchApplication.BrowseHoursPerDays.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseHoursPerDays
        },
        HoursPerDayList: {
            _$class: msls.ContentItem,
            _$name: "HoursPerDayList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseHoursPerDays,
            data: lightSwitchApplication.BrowseHoursPerDays,
            value: lightSwitchApplication.BrowseHoursPerDays
        },
        Back: {
            _$class: msls.ContentItem,
            _$name: "Back",
            _$parentName: "HoursPerDayList",
            screen: lightSwitchApplication.BrowseHoursPerDays
        },
        Property1: {
            _$class: msls.ContentItem,
            _$name: "Property1",
            _$parentName: "HoursPerDayList",
            screen: lightSwitchApplication.BrowseHoursPerDays,
            data: lightSwitchApplication.BrowseHoursPerDays,
            value: lightSwitchApplication.Months
        },
        Property1Template: {
            _$class: msls.ContentItem,
            _$name: "Property1Template",
            _$parentName: "Property1",
            screen: lightSwitchApplication.BrowseHoursPerDays,
            data: lightSwitchApplication.Months,
            value: lightSwitchApplication.Months
        },
        NoOfHoursPerDay: {
            _$class: msls.ContentItem,
            _$name: "NoOfHoursPerDay",
            _$parentName: "HoursPerDayList",
            screen: lightSwitchApplication.BrowseHoursPerDays,
            data: lightSwitchApplication.BrowseHoursPerDays,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseHoursPerDays,
                _$entry: {
                    elementType: lightSwitchApplication.HoursPerDay
                }
            }
        },
        NoOfHoursPerDayTemplate: {
            _$class: msls.ContentItem,
            _$name: "NoOfHoursPerDayTemplate",
            _$parentName: "NoOfHoursPerDay",
            screen: lightSwitchApplication.BrowseHoursPerDays,
            data: lightSwitchApplication.HoursPerDay,
            value: lightSwitchApplication.HoursPerDay
        },
        MonthName1: {
            _$class: msls.ContentItem,
            _$name: "MonthName1",
            _$parentName: "NoOfHoursPerDayTemplate",
            screen: lightSwitchApplication.BrowseHoursPerDays,
            data: lightSwitchApplication.HoursPerDay,
            value: String
        },
        c_Date1: {
            _$class: msls.ContentItem,
            _$name: "c_Date1",
            _$parentName: "NoOfHoursPerDayTemplate",
            screen: lightSwitchApplication.BrowseHoursPerDays,
            data: lightSwitchApplication.HoursPerDay,
            value: Date
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "NoOfHoursPerDayTemplate",
            screen: lightSwitchApplication.BrowseHoursPerDays,
            data: lightSwitchApplication.HoursPerDay,
            value: Number
        },
        Expr1: {
            _$class: msls.ContentItem,
            _$name: "Expr1",
            _$parentName: "NoOfHoursPerDayTemplate",
            screen: lightSwitchApplication.BrowseHoursPerDays,
            data: lightSwitchApplication.HoursPerDay,
            value: String
        },
        View: {
            _$class: msls.ContentItem,
            _$name: "View",
            _$parentName: "NoOfHoursPerDayTemplate",
            screen: lightSwitchApplication.BrowseHoursPerDays
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseHoursPerDays
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseHoursPerDays, {
        /// <field>
        /// Called when a new BrowseHoursPerDays screen is created.
        /// <br/>created(msls.application.BrowseHoursPerDays screen)
        /// </field>
        created: [lightSwitchApplication.BrowseHoursPerDays],
        /// <field>
        /// Called before changes on an active BrowseHoursPerDays screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseHoursPerDays screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseHoursPerDays],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.BrowseHoursPerDays screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.BrowseHoursPerDays],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.BrowseHoursPerDays screen)
        /// </field>
        Back_execute: [lightSwitchApplication.BrowseHoursPerDays],
        /// <field>
        /// Called to determine if the View method can be executed.
        /// <br/>canExecute(msls.application.BrowseHoursPerDays screen)
        /// </field>
        View_canExecute: [lightSwitchApplication.BrowseHoursPerDays],
        /// <field>
        /// Called to execute the View method.
        /// <br/>execute(msls.application.BrowseHoursPerDays screen)
        /// </field>
        View_execute: [lightSwitchApplication.BrowseHoursPerDays],
        /// <field>
        /// Called after the HoursPerDayList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HoursPerDayList_postRender: [$element, function () { return new lightSwitchApplication.BrowseHoursPerDays().findContentItem("HoursPerDayList"); }],
        /// <field>
        /// Called after the Back content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Back_postRender: [$element, function () { return new lightSwitchApplication.BrowseHoursPerDays().findContentItem("Back"); }],
        /// <field>
        /// Called after the Property1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Property1_postRender: [$element, function () { return new lightSwitchApplication.BrowseHoursPerDays().findContentItem("Property1"); }],
        /// <field>
        /// Called after the Property1Template content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Property1Template_postRender: [$element, function () { return new lightSwitchApplication.BrowseHoursPerDays().findContentItem("Property1Template"); }],
        /// <field>
        /// Called after the NoOfHoursPerDay content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NoOfHoursPerDay_postRender: [$element, function () { return new lightSwitchApplication.BrowseHoursPerDays().findContentItem("NoOfHoursPerDay"); }],
        /// <field>
        /// Called after the NoOfHoursPerDayTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NoOfHoursPerDayTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseHoursPerDays().findContentItem("NoOfHoursPerDayTemplate"); }],
        /// <field>
        /// Called after the MonthName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthName1_postRender: [$element, function () { return new lightSwitchApplication.BrowseHoursPerDays().findContentItem("MonthName1"); }],
        /// <field>
        /// Called after the c_Date1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        c_Date1_postRender: [$element, function () { return new lightSwitchApplication.BrowseHoursPerDays().findContentItem("c_Date1"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.BrowseHoursPerDays().findContentItem("EmpID"); }],
        /// <field>
        /// Called after the Expr1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Expr1_postRender: [$element, function () { return new lightSwitchApplication.BrowseHoursPerDays().findContentItem("Expr1"); }],
        /// <field>
        /// Called after the View content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        View_postRender: [$element, function () { return new lightSwitchApplication.BrowseHoursPerDays().findContentItem("View"); }]
    });

    lightSwitchApplication.BrowseProjectsInDays.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProjectsInDays
        },
        ProjectsInDayList: {
            _$class: msls.ContentItem,
            _$name: "ProjectsInDayList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseProjectsInDays,
            data: lightSwitchApplication.BrowseProjectsInDays,
            value: lightSwitchApplication.BrowseProjectsInDays
        },
        Back: {
            _$class: msls.ContentItem,
            _$name: "Back",
            _$parentName: "ProjectsInDayList",
            screen: lightSwitchApplication.BrowseProjectsInDays
        },
        ProjectsInDays: {
            _$class: msls.ContentItem,
            _$name: "ProjectsInDays",
            _$parentName: "ProjectsInDayList",
            screen: lightSwitchApplication.BrowseProjectsInDays,
            data: lightSwitchApplication.BrowseProjectsInDays,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseProjectsInDays,
                _$entry: {
                    elementType: lightSwitchApplication.ProjectsInDay
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "ProjectsInDays",
            screen: lightSwitchApplication.BrowseProjectsInDays,
            data: lightSwitchApplication.ProjectsInDay,
            value: lightSwitchApplication.ProjectsInDay
        },
        ProjectName: {
            _$class: msls.ContentItem,
            _$name: "ProjectName",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseProjectsInDays,
            data: lightSwitchApplication.ProjectsInDay,
            value: String
        },
        SubProject: {
            _$class: msls.ContentItem,
            _$name: "SubProject",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseProjectsInDays,
            data: lightSwitchApplication.ProjectsInDay,
            value: String
        },
        Date: {
            _$class: msls.ContentItem,
            _$name: "Date",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseProjectsInDays,
            data: lightSwitchApplication.ProjectsInDay,
            value: Date
        },
        Hours: {
            _$class: msls.ContentItem,
            _$name: "Hours",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseProjectsInDays,
            data: lightSwitchApplication.ProjectsInDay,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseProjectsInDays
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Popups",
            screen: lightSwitchApplication.BrowseProjectsInDays,
            data: lightSwitchApplication.BrowseProjectsInDays,
            value: lightSwitchApplication.BrowseProjectsInDays
        },
        ProjectsInDays_selectedItem_ProjectName: {
            _$class: msls.ContentItem,
            _$name: "ProjectsInDays_selectedItem_ProjectName",
            _$parentName: "Group",
            screen: lightSwitchApplication.BrowseProjectsInDays,
            data: lightSwitchApplication.BrowseProjectsInDays,
            value: String
        },
        ProjectsInDays_selectedItem_SubProject: {
            _$class: msls.ContentItem,
            _$name: "ProjectsInDays_selectedItem_SubProject",
            _$parentName: "Group",
            screen: lightSwitchApplication.BrowseProjectsInDays,
            data: lightSwitchApplication.BrowseProjectsInDays,
            value: String
        },
        ProjectsInDays_selectedItem_c_Date: {
            _$class: msls.ContentItem,
            _$name: "ProjectsInDays_selectedItem_c_Date",
            _$parentName: "Group",
            screen: lightSwitchApplication.BrowseProjectsInDays,
            data: lightSwitchApplication.BrowseProjectsInDays,
            value: Date
        },
        ProjectsInDays_selectedItem_Hours: {
            _$class: msls.ContentItem,
            _$name: "ProjectsInDays_selectedItem_Hours",
            _$parentName: "Group",
            screen: lightSwitchApplication.BrowseProjectsInDays,
            data: lightSwitchApplication.BrowseProjectsInDays,
            value: String
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseProjectsInDays, {
        /// <field>
        /// Called when a new BrowseProjectsInDays screen is created.
        /// <br/>created(msls.application.BrowseProjectsInDays screen)
        /// </field>
        created: [lightSwitchApplication.BrowseProjectsInDays],
        /// <field>
        /// Called before changes on an active BrowseProjectsInDays screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseProjectsInDays screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseProjectsInDays],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.BrowseProjectsInDays screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.BrowseProjectsInDays],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.BrowseProjectsInDays screen)
        /// </field>
        Back_execute: [lightSwitchApplication.BrowseProjectsInDays],
        /// <field>
        /// Called after the ProjectsInDayList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectsInDayList_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectsInDays().findContentItem("ProjectsInDayList"); }],
        /// <field>
        /// Called after the Back content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Back_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectsInDays().findContentItem("Back"); }],
        /// <field>
        /// Called after the ProjectsInDays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectsInDays_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectsInDays().findContentItem("ProjectsInDays"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectsInDays().findContentItem("rows"); }],
        /// <field>
        /// Called after the ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectsInDays().findContentItem("ProjectName"); }],
        /// <field>
        /// Called after the SubProject content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SubProject_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectsInDays().findContentItem("SubProject"); }],
        /// <field>
        /// Called after the Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Date_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectsInDays().findContentItem("Date"); }],
        /// <field>
        /// Called after the Hours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hours_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectsInDays().findContentItem("Hours"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectsInDays().findContentItem("Group"); }],
        /// <field>
        /// Called after the ProjectsInDays_selectedItem_ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectsInDays_selectedItem_ProjectName_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectsInDays().findContentItem("ProjectsInDays_selectedItem_ProjectName"); }],
        /// <field>
        /// Called after the ProjectsInDays_selectedItem_SubProject content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectsInDays_selectedItem_SubProject_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectsInDays().findContentItem("ProjectsInDays_selectedItem_SubProject"); }],
        /// <field>
        /// Called after the ProjectsInDays_selectedItem_c_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectsInDays_selectedItem_c_Date_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectsInDays().findContentItem("ProjectsInDays_selectedItem_c_Date"); }],
        /// <field>
        /// Called after the ProjectsInDays_selectedItem_Hours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectsInDays_selectedItem_Hours_postRender: [$element, function () { return new lightSwitchApplication.BrowseProjectsInDays().findContentItem("ProjectsInDays_selectedItem_Hours"); }]
    });

    lightSwitchApplication.BrowseTracker.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTracker
        },
        EmployeeProjectList: {
            _$class: msls.ContentItem,
            _$name: "EmployeeProjectList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseTracker,
            data: lightSwitchApplication.BrowseTracker,
            value: lightSwitchApplication.BrowseTracker
        },
        Back: {
            _$class: msls.ContentItem,
            _$name: "Back",
            _$parentName: "EmployeeProjectList",
            screen: lightSwitchApplication.BrowseTracker
        },
        Tracker: {
            _$class: msls.ContentItem,
            _$name: "Tracker",
            _$parentName: "EmployeeProjectList",
            screen: lightSwitchApplication.BrowseTracker,
            data: lightSwitchApplication.BrowseTracker,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseTracker,
                _$entry: {
                    elementType: lightSwitchApplication.EmployeeProject
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Tracker",
            screen: lightSwitchApplication.BrowseTracker,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.EmployeeProject
        },
        ProjectDetail: {
            _$class: msls.ContentItem,
            _$name: "ProjectDetail",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTracker,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.ProjectDetail
        },
        Months: {
            _$class: msls.ContentItem,
            _$name: "Months",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTracker,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.Months
        },
        SubProject1: {
            _$class: msls.ContentItem,
            _$name: "SubProject1",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTracker,
            data: lightSwitchApplication.EmployeeProject,
            value: String
        },
        c_Date: {
            _$class: msls.ContentItem,
            _$name: "c_Date",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTracker,
            data: lightSwitchApplication.EmployeeProject,
            value: Date
        },
        Hours: {
            _$class: msls.ContentItem,
            _$name: "Hours",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTracker,
            data: lightSwitchApplication.EmployeeProject,
            value: String
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTracker,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        ProjectID: {
            _$class: msls.ContentItem,
            _$name: "ProjectID",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTracker,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTracker
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseTracker, {
        /// <field>
        /// Called when a new BrowseTracker screen is created.
        /// <br/>created(msls.application.BrowseTracker screen)
        /// </field>
        created: [lightSwitchApplication.BrowseTracker],
        /// <field>
        /// Called before changes on an active BrowseTracker screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseTracker screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseTracker],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.BrowseTracker screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.BrowseTracker],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.BrowseTracker screen)
        /// </field>
        Back_execute: [lightSwitchApplication.BrowseTracker],
        /// <field>
        /// Called after the EmployeeProjectList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeProjectList_postRender: [$element, function () { return new lightSwitchApplication.BrowseTracker().findContentItem("EmployeeProjectList"); }],
        /// <field>
        /// Called after the Back content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Back_postRender: [$element, function () { return new lightSwitchApplication.BrowseTracker().findContentItem("Back"); }],
        /// <field>
        /// Called after the Tracker content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tracker_postRender: [$element, function () { return new lightSwitchApplication.BrowseTracker().findContentItem("Tracker"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseTracker().findContentItem("rows"); }],
        /// <field>
        /// Called after the ProjectDetail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectDetail_postRender: [$element, function () { return new lightSwitchApplication.BrowseTracker().findContentItem("ProjectDetail"); }],
        /// <field>
        /// Called after the Months content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Months_postRender: [$element, function () { return new lightSwitchApplication.BrowseTracker().findContentItem("Months"); }],
        /// <field>
        /// Called after the SubProject1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SubProject1_postRender: [$element, function () { return new lightSwitchApplication.BrowseTracker().findContentItem("SubProject1"); }],
        /// <field>
        /// Called after the c_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        c_Date_postRender: [$element, function () { return new lightSwitchApplication.BrowseTracker().findContentItem("c_Date"); }],
        /// <field>
        /// Called after the Hours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hours_postRender: [$element, function () { return new lightSwitchApplication.BrowseTracker().findContentItem("Hours"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.BrowseTracker().findContentItem("EmpID"); }],
        /// <field>
        /// Called after the ProjectID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectID_postRender: [$element, function () { return new lightSwitchApplication.BrowseTracker().findContentItem("ProjectID"); }]
    });

    lightSwitchApplication.BrowseUtilization.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseUtilization
        },
        UtilizationCalculationList: {
            _$class: msls.ContentItem,
            _$name: "UtilizationCalculationList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.BrowseUtilization,
            value: lightSwitchApplication.BrowseUtilization
        },
        Back: {
            _$class: msls.ContentItem,
            _$name: "Back",
            _$parentName: "UtilizationCalculationList",
            screen: lightSwitchApplication.BrowseUtilization
        },
        GetSelfProjects: {
            _$class: msls.ContentItem,
            _$name: "GetSelfProjects",
            _$parentName: "UtilizationCalculationList",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.BrowseUtilization,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseUtilization,
                _$entry: {
                    elementType: lightSwitchApplication.ProjectDetail
                }
            }
        },
        GetSelfProjectsTemplate: {
            _$class: msls.ContentItem,
            _$name: "GetSelfProjectsTemplate",
            _$parentName: "GetSelfProjects",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.ProjectDetail,
            value: lightSwitchApplication.ProjectDetail
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "UtilizationCalculationList",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.BrowseUtilization,
            value: lightSwitchApplication.BrowseUtilization
        },
        FromDate: {
            _$class: msls.ContentItem,
            _$name: "FromDate",
            _$parentName: "Group",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.BrowseUtilization,
            value: Date
        },
        ToDate: {
            _$class: msls.ContentItem,
            _$name: "ToDate",
            _$parentName: "Group",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.BrowseUtilization,
            value: Date
        },
        Property2: {
            _$class: msls.ContentItem,
            _$name: "Property2",
            _$parentName: "Group",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.BrowseUtilization,
            value: lightSwitchApplication.ProjectDetail
        },
        Property2Template: {
            _$class: msls.ContentItem,
            _$name: "Property2Template",
            _$parentName: "Property2",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.ProjectDetail,
            value: lightSwitchApplication.ProjectDetail
        },
        Property1: {
            _$class: msls.ContentItem,
            _$name: "Property1",
            _$parentName: "Group",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.BrowseUtilization,
            value: lightSwitchApplication.Months
        },
        Property1Template: {
            _$class: msls.ContentItem,
            _$name: "Property1Template",
            _$parentName: "Property1",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.Months,
            value: lightSwitchApplication.Months
        },
        Parameters: {
            _$class: msls.ContentItem,
            _$name: "Parameters",
            _$parentName: "UtilizationCalculationList",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.BrowseUtilization,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseUtilization,
                _$entry: {
                    elementType: lightSwitchApplication.EmployeeProject
                }
            }
        },
        ParametersTemplate: {
            _$class: msls.ContentItem,
            _$name: "ParametersTemplate",
            _$parentName: "Parameters",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.EmployeeProject
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "ParametersTemplate",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        ProjectID: {
            _$class: msls.ContentItem,
            _$name: "ProjectID",
            _$parentName: "ParametersTemplate",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        TaskID: {
            _$class: msls.ContentItem,
            _$name: "TaskID",
            _$parentName: "ParametersTemplate",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        ProjectDetail: {
            _$class: msls.ContentItem,
            _$name: "ProjectDetail",
            _$parentName: "ParametersTemplate",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.ProjectDetail
        },
        SubProject: {
            _$class: msls.ContentItem,
            _$name: "SubProject",
            _$parentName: "ParametersTemplate",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.EmployeeProject,
            value: String
        },
        Months: {
            _$class: msls.ContentItem,
            _$name: "Months",
            _$parentName: "ParametersTemplate",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.Months
        },
        c_Date: {
            _$class: msls.ContentItem,
            _$name: "c_Date",
            _$parentName: "ParametersTemplate",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.EmployeeProject,
            value: Date
        },
        Hours: {
            _$class: msls.ContentItem,
            _$name: "Hours",
            _$parentName: "ParametersTemplate",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.EmployeeProject,
            value: String
        },
        Utilization: {
            _$class: msls.ContentItem,
            _$name: "Utilization",
            _$parentName: "UtilizationCalculationList",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.BrowseUtilization,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseUtilization,
                _$entry: {
                    elementType: lightSwitchApplication.UtilizationCalculation
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Utilization",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.UtilizationCalculation,
            value: lightSwitchApplication.UtilizationCalculation
        },
        MonthName: {
            _$class: msls.ContentItem,
            _$name: "MonthName",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.UtilizationCalculation,
            value: String
        },
        WeekDays: {
            _$class: msls.ContentItem,
            _$name: "WeekDays",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.UtilizationCalculation,
            value: Number
        },
        WorkingDays: {
            _$class: msls.ContentItem,
            _$name: "WorkingDays",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.UtilizationCalculation,
            value: Number
        },
        Holidays: {
            _$class: msls.ContentItem,
            _$name: "Holidays",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.UtilizationCalculation,
            value: Number
        },
        WorkedHours: {
            _$class: msls.ContentItem,
            _$name: "WorkedHours",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.UtilizationCalculation,
            value: String
        },
        UtilizationPercentage: {
            _$class: msls.ContentItem,
            _$name: "UtilizationPercentage",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.UtilizationCalculation,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseUtilization
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Popups",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.BrowseUtilization,
            value: lightSwitchApplication.BrowseUtilization
        },
        dropdown: {
            _$class: msls.ContentItem,
            _$name: "dropdown",
            _$parentName: "Group1",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.BrowseUtilization,
            value: lightSwitchApplication.EmailDropdown
        },
        dropdownTemplate: {
            _$class: msls.ContentItem,
            _$name: "dropdownTemplate",
            _$parentName: "dropdown",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.EmailDropdown,
            value: lightSwitchApplication.EmailDropdown
        },
        PMTeamProject: {
            _$class: msls.ContentItem,
            _$name: "PMTeamProject",
            _$parentName: "Group1",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.BrowseUtilization,
            value: lightSwitchApplication.PMTeamProject
        },
        PMTeamProject1: {
            _$class: msls.ContentItem,
            _$name: "PMTeamProject1",
            _$parentName: "PMTeamProject",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.PMTeamProject,
            value: lightSwitchApplication.PMTeamProject
        },
        ManagerName1: {
            _$class: msls.ContentItem,
            _$name: "ManagerName1",
            _$parentName: "PMTeamProject1",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.PMTeamProject,
            value: String
        },
        ProjectName1: {
            _$class: msls.ContentItem,
            _$name: "ProjectName1",
            _$parentName: "PMTeamProject1",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.PMTeamProject,
            value: String
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "Group1",
            screen: lightSwitchApplication.BrowseUtilization,
            data: lightSwitchApplication.BrowseUtilization,
            value: lightSwitchApplication.BrowseUtilization
        },
        OK: {
            _$class: msls.ContentItem,
            _$name: "OK",
            _$parentName: "Group2",
            screen: lightSwitchApplication.BrowseUtilization
        },
        Close: {
            _$class: msls.ContentItem,
            _$name: "Close",
            _$parentName: "Group2",
            screen: lightSwitchApplication.BrowseUtilization
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseUtilization, {
        /// <field>
        /// Called when a new BrowseUtilization screen is created.
        /// <br/>created(msls.application.BrowseUtilization screen)
        /// </field>
        created: [lightSwitchApplication.BrowseUtilization],
        /// <field>
        /// Called before changes on an active BrowseUtilization screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseUtilization screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseUtilization],
        /// <field>
        /// Called to determine if the Add method can be executed.
        /// <br/>canExecute(msls.application.BrowseUtilization screen)
        /// </field>
        Add_canExecute: [lightSwitchApplication.BrowseUtilization],
        /// <field>
        /// Called to execute the Add method.
        /// <br/>execute(msls.application.BrowseUtilization screen)
        /// </field>
        Add_execute: [lightSwitchApplication.BrowseUtilization],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.BrowseUtilization screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.BrowseUtilization],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.BrowseUtilization screen)
        /// </field>
        Back_execute: [lightSwitchApplication.BrowseUtilization],
        /// <field>
        /// Called to determine if the WeeklyUT method can be executed.
        /// <br/>canExecute(msls.application.BrowseUtilization screen)
        /// </field>
        WeeklyUT_canExecute: [lightSwitchApplication.BrowseUtilization],
        /// <field>
        /// Called to execute the WeeklyUT method.
        /// <br/>execute(msls.application.BrowseUtilization screen)
        /// </field>
        WeeklyUT_execute: [lightSwitchApplication.BrowseUtilization],
        /// <field>
        /// Called to determine if the SendEmail method can be executed.
        /// <br/>canExecute(msls.application.BrowseUtilization screen)
        /// </field>
        SendEmail_canExecute: [lightSwitchApplication.BrowseUtilization],
        /// <field>
        /// Called to execute the SendEmail method.
        /// <br/>execute(msls.application.BrowseUtilization screen)
        /// </field>
        SendEmail_execute: [lightSwitchApplication.BrowseUtilization],
        /// <field>
        /// Called to determine if the OK method can be executed.
        /// <br/>canExecute(msls.application.BrowseUtilization screen)
        /// </field>
        OK_canExecute: [lightSwitchApplication.BrowseUtilization],
        /// <field>
        /// Called to execute the OK method.
        /// <br/>execute(msls.application.BrowseUtilization screen)
        /// </field>
        OK_execute: [lightSwitchApplication.BrowseUtilization],
        /// <field>
        /// Called to determine if the Close method can be executed.
        /// <br/>canExecute(msls.application.BrowseUtilization screen)
        /// </field>
        Close_canExecute: [lightSwitchApplication.BrowseUtilization],
        /// <field>
        /// Called to execute the Close method.
        /// <br/>execute(msls.application.BrowseUtilization screen)
        /// </field>
        Close_execute: [lightSwitchApplication.BrowseUtilization],
        /// <field>
        /// Called after the UtilizationCalculationList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UtilizationCalculationList_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("UtilizationCalculationList"); }],
        /// <field>
        /// Called after the Back content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Back_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("Back"); }],
        /// <field>
        /// Called after the GetSelfProjects content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GetSelfProjects_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("GetSelfProjects"); }],
        /// <field>
        /// Called after the GetSelfProjectsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GetSelfProjectsTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("GetSelfProjectsTemplate"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("Group"); }],
        /// <field>
        /// Called after the FromDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FromDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("FromDate"); }],
        /// <field>
        /// Called after the ToDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ToDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("ToDate"); }],
        /// <field>
        /// Called after the Property2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Property2_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("Property2"); }],
        /// <field>
        /// Called after the Property2Template content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Property2Template_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("Property2Template"); }],
        /// <field>
        /// Called after the Property1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Property1_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("Property1"); }],
        /// <field>
        /// Called after the Property1Template content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Property1Template_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("Property1Template"); }],
        /// <field>
        /// Called after the Parameters content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Parameters_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("Parameters"); }],
        /// <field>
        /// Called after the ParametersTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ParametersTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("ParametersTemplate"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("EmpID"); }],
        /// <field>
        /// Called after the ProjectID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectID_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("ProjectID"); }],
        /// <field>
        /// Called after the TaskID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TaskID_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("TaskID"); }],
        /// <field>
        /// Called after the ProjectDetail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectDetail_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("ProjectDetail"); }],
        /// <field>
        /// Called after the SubProject content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SubProject_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("SubProject"); }],
        /// <field>
        /// Called after the Months content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Months_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("Months"); }],
        /// <field>
        /// Called after the c_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        c_Date_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("c_Date"); }],
        /// <field>
        /// Called after the Hours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hours_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("Hours"); }],
        /// <field>
        /// Called after the Utilization content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Utilization_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("Utilization"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("rows"); }],
        /// <field>
        /// Called after the MonthName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthName_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("MonthName"); }],
        /// <field>
        /// Called after the WeekDays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WeekDays_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("WeekDays"); }],
        /// <field>
        /// Called after the WorkingDays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkingDays_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("WorkingDays"); }],
        /// <field>
        /// Called after the Holidays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Holidays_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("Holidays"); }],
        /// <field>
        /// Called after the WorkedHours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkedHours_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("WorkedHours"); }],
        /// <field>
        /// Called after the UtilizationPercentage content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UtilizationPercentage_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("UtilizationPercentage"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("Group1"); }],
        /// <field>
        /// Called after the dropdown content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        dropdown_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("dropdown"); }],
        /// <field>
        /// Called after the dropdownTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        dropdownTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("dropdownTemplate"); }],
        /// <field>
        /// Called after the PMTeamProject content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PMTeamProject_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("PMTeamProject"); }],
        /// <field>
        /// Called after the PMTeamProject1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PMTeamProject1_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("PMTeamProject1"); }],
        /// <field>
        /// Called after the ManagerName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ManagerName1_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("ManagerName1"); }],
        /// <field>
        /// Called after the ProjectName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName1_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("ProjectName1"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("Group2"); }],
        /// <field>
        /// Called after the OK content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OK_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("OK"); }],
        /// <field>
        /// Called after the Close content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Close_postRender: [$element, function () { return new lightSwitchApplication.BrowseUtilization().findContentItem("Close"); }]
    });

    lightSwitchApplication.DetailsforProjectScore.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.DetailsforProjectScore
        },
        ProjectDetailList: {
            _$class: msls.ContentItem,
            _$name: "ProjectDetailList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.DetailsforProjectScore,
            data: lightSwitchApplication.DetailsforProjectScore,
            value: lightSwitchApplication.DetailsforProjectScore
        },
        GetSelfProjects: {
            _$class: msls.ContentItem,
            _$name: "GetSelfProjects",
            _$parentName: "ProjectDetailList",
            screen: lightSwitchApplication.DetailsforProjectScore,
            data: lightSwitchApplication.DetailsforProjectScore,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.DetailsforProjectScore,
                _$entry: {
                    elementType: lightSwitchApplication.ProjectDetail
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "GetSelfProjects",
            screen: lightSwitchApplication.DetailsforProjectScore,
            data: lightSwitchApplication.ProjectDetail,
            value: lightSwitchApplication.ProjectDetail
        },
        ProjectName: {
            _$class: msls.ContentItem,
            _$name: "ProjectName",
            _$parentName: "rows",
            screen: lightSwitchApplication.DetailsforProjectScore,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        ProjectType: {
            _$class: msls.ContentItem,
            _$name: "ProjectType",
            _$parentName: "rows",
            screen: lightSwitchApplication.DetailsforProjectScore,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        ComplexityDifficultyLevel: {
            _$class: msls.ContentItem,
            _$name: "ComplexityDifficultyLevel",
            _$parentName: "rows",
            screen: lightSwitchApplication.DetailsforProjectScore,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        ComplexityScope: {
            _$class: msls.ContentItem,
            _$name: "ComplexityScope",
            _$parentName: "rows",
            screen: lightSwitchApplication.DetailsforProjectScore,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        ComplexityAvg: {
            _$class: msls.ContentItem,
            _$name: "ComplexityAvg",
            _$parentName: "rows",
            screen: lightSwitchApplication.DetailsforProjectScore,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        QualityPMRating: {
            _$class: msls.ContentItem,
            _$name: "QualityPMRating",
            _$parentName: "rows",
            screen: lightSwitchApplication.DetailsforProjectScore,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        QualityPeerReview: {
            _$class: msls.ContentItem,
            _$name: "QualityPeerReview",
            _$parentName: "rows",
            screen: lightSwitchApplication.DetailsforProjectScore,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        QualityProjectDuration: {
            _$class: msls.ContentItem,
            _$name: "QualityProjectDuration",
            _$parentName: "rows",
            screen: lightSwitchApplication.DetailsforProjectScore,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        QualityAverage: {
            _$class: msls.ContentItem,
            _$name: "QualityAverage",
            _$parentName: "rows",
            screen: lightSwitchApplication.DetailsforProjectScore,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        ProjectStatus: {
            _$class: msls.ContentItem,
            _$name: "ProjectStatus",
            _$parentName: "rows",
            screen: lightSwitchApplication.DetailsforProjectScore,
            data: lightSwitchApplication.ProjectDetail,
            value: String
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "rows",
            screen: lightSwitchApplication.DetailsforProjectScore,
            data: lightSwitchApplication.ProjectDetail,
            value: Number
        },
        ProjectID: {
            _$class: msls.ContentItem,
            _$name: "ProjectID",
            _$parentName: "rows",
            screen: lightSwitchApplication.DetailsforProjectScore,
            data: lightSwitchApplication.ProjectDetail,
            value: Number
        },
        StartDate: {
            _$class: msls.ContentItem,
            _$name: "StartDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.DetailsforProjectScore,
            data: lightSwitchApplication.ProjectDetail,
            value: Date
        },
        EndDate: {
            _$class: msls.ContentItem,
            _$name: "EndDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.DetailsforProjectScore,
            data: lightSwitchApplication.ProjectDetail,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.DetailsforProjectScore
        }
    };

    msls._addEntryPoints(lightSwitchApplication.DetailsforProjectScore, {
        /// <field>
        /// Called when a new DetailsforProjectScore screen is created.
        /// <br/>created(msls.application.DetailsforProjectScore screen)
        /// </field>
        created: [lightSwitchApplication.DetailsforProjectScore],
        /// <field>
        /// Called before changes on an active DetailsforProjectScore screen are applied.
        /// <br/>beforeApplyChanges(msls.application.DetailsforProjectScore screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.DetailsforProjectScore],
        /// <field>
        /// Called after the ProjectDetailList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectDetailList_postRender: [$element, function () { return new lightSwitchApplication.DetailsforProjectScore().findContentItem("ProjectDetailList"); }],
        /// <field>
        /// Called after the GetSelfProjects content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GetSelfProjects_postRender: [$element, function () { return new lightSwitchApplication.DetailsforProjectScore().findContentItem("GetSelfProjects"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.DetailsforProjectScore().findContentItem("rows"); }],
        /// <field>
        /// Called after the ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName_postRender: [$element, function () { return new lightSwitchApplication.DetailsforProjectScore().findContentItem("ProjectName"); }],
        /// <field>
        /// Called after the ProjectType content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectType_postRender: [$element, function () { return new lightSwitchApplication.DetailsforProjectScore().findContentItem("ProjectType"); }],
        /// <field>
        /// Called after the ComplexityDifficultyLevel content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ComplexityDifficultyLevel_postRender: [$element, function () { return new lightSwitchApplication.DetailsforProjectScore().findContentItem("ComplexityDifficultyLevel"); }],
        /// <field>
        /// Called after the ComplexityScope content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ComplexityScope_postRender: [$element, function () { return new lightSwitchApplication.DetailsforProjectScore().findContentItem("ComplexityScope"); }],
        /// <field>
        /// Called after the ComplexityAvg content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ComplexityAvg_postRender: [$element, function () { return new lightSwitchApplication.DetailsforProjectScore().findContentItem("ComplexityAvg"); }],
        /// <field>
        /// Called after the QualityPMRating content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QualityPMRating_postRender: [$element, function () { return new lightSwitchApplication.DetailsforProjectScore().findContentItem("QualityPMRating"); }],
        /// <field>
        /// Called after the QualityPeerReview content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QualityPeerReview_postRender: [$element, function () { return new lightSwitchApplication.DetailsforProjectScore().findContentItem("QualityPeerReview"); }],
        /// <field>
        /// Called after the QualityProjectDuration content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QualityProjectDuration_postRender: [$element, function () { return new lightSwitchApplication.DetailsforProjectScore().findContentItem("QualityProjectDuration"); }],
        /// <field>
        /// Called after the QualityAverage content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QualityAverage_postRender: [$element, function () { return new lightSwitchApplication.DetailsforProjectScore().findContentItem("QualityAverage"); }],
        /// <field>
        /// Called after the ProjectStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectStatus_postRender: [$element, function () { return new lightSwitchApplication.DetailsforProjectScore().findContentItem("ProjectStatus"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.DetailsforProjectScore().findContentItem("EmpID"); }],
        /// <field>
        /// Called after the ProjectID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectID_postRender: [$element, function () { return new lightSwitchApplication.DetailsforProjectScore().findContentItem("ProjectID"); }],
        /// <field>
        /// Called after the StartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartDate_postRender: [$element, function () { return new lightSwitchApplication.DetailsforProjectScore().findContentItem("StartDate"); }],
        /// <field>
        /// Called after the EndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EndDate_postRender: [$element, function () { return new lightSwitchApplication.DetailsforProjectScore().findContentItem("EndDate"); }]
    });

    lightSwitchApplication.Home.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        LabText: {
            _$class: msls.ContentItem,
            _$name: "LabText",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: String
        },
        EmailMsg: {
            _$class: msls.ContentItem,
            _$name: "EmailMsg",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: String
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.Home,
                _$entry: {
                    elementType: lightSwitchApplication.EmployeeDetail
                }
            }
        },
        UserNameTemplate: {
            _$class: msls.ContentItem,
            _$name: "UserNameTemplate",
            _$parentName: "UserName",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.EmployeeDetail,
            value: lightSwitchApplication.EmployeeDetail
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "UserNameTemplate",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.EmployeeDetail,
            value: Number
        },
        EmpName: {
            _$class: msls.ContentItem,
            _$name: "EmpName",
            _$parentName: "UserNameTemplate",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        Designation: {
            _$class: msls.ContentItem,
            _$name: "Designation",
            _$parentName: "UserNameTemplate",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        Email: {
            _$class: msls.ContentItem,
            _$name: "Email",
            _$parentName: "UserNameTemplate",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        UserName1: {
            _$class: msls.ContentItem,
            _$name: "UserName1",
            _$parentName: "UserNameTemplate",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.EmployeeDetail,
            value: String
        },
        EmployeeDetail1: {
            _$class: msls.ContentItem,
            _$name: "EmployeeDetail1",
            _$parentName: "UserNameTemplate",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.EmployeeDetail,
            value: lightSwitchApplication.EmployeeDetail
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Home, {
        /// <field>
        /// Called when a new Home screen is created.
        /// <br/>created(msls.application.Home screen)
        /// </field>
        created: [lightSwitchApplication.Home],
        /// <field>
        /// Called before changes on an active Home screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Home screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Home],
        /// <field>
        /// Called to determine if the ViewTracker method can be executed.
        /// <br/>canExecute(msls.application.Home screen)
        /// </field>
        ViewTracker_canExecute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to execute the ViewTracker method.
        /// <br/>execute(msls.application.Home screen)
        /// </field>
        ViewTracker_execute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to determine if the AddEmployee method can be executed.
        /// <br/>canExecute(msls.application.Home screen)
        /// </field>
        AddEmployee_canExecute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to execute the AddEmployee method.
        /// <br/>execute(msls.application.Home screen)
        /// </field>
        AddEmployee_execute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to determine if the SignUp method can be executed.
        /// <br/>canExecute(msls.application.Home screen)
        /// </field>
        SignUp_canExecute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to execute the SignUp method.
        /// <br/>execute(msls.application.Home screen)
        /// </field>
        SignUp_execute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to determine if the ViewReportees method can be executed.
        /// <br/>canExecute(msls.application.Home screen)
        /// </field>
        ViewReportees_canExecute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to execute the ViewReportees method.
        /// <br/>execute(msls.application.Home screen)
        /// </field>
        ViewReportees_execute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to determine if the ProjectDetails method can be executed.
        /// <br/>canExecute(msls.application.Home screen)
        /// </field>
        ProjectDetails_canExecute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to execute the ProjectDetails method.
        /// <br/>execute(msls.application.Home screen)
        /// </field>
        ProjectDetails_execute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to determine if the AddMonth method can be executed.
        /// <br/>canExecute(msls.application.Home screen)
        /// </field>
        AddMonth_canExecute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to execute the AddMonth method.
        /// <br/>execute(msls.application.Home screen)
        /// </field>
        AddMonth_execute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to determine if the EmployeeMonths method can be executed.
        /// <br/>canExecute(msls.application.Home screen)
        /// </field>
        EmployeeMonths_canExecute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to execute the EmployeeMonths method.
        /// <br/>execute(msls.application.Home screen)
        /// </field>
        EmployeeMonths_execute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to determine if the MyHome method can be executed.
        /// <br/>canExecute(msls.application.Home screen)
        /// </field>
        MyHome_canExecute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to execute the MyHome method.
        /// <br/>execute(msls.application.Home screen)
        /// </field>
        MyHome_execute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to determine if the EmplyeeProject method can be executed.
        /// <br/>canExecute(msls.application.Home screen)
        /// </field>
        EmplyeeProject_canExecute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to execute the EmplyeeProject method.
        /// <br/>execute(msls.application.Home screen)
        /// </field>
        EmplyeeProject_execute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to determine if the ViewEmployees method can be executed.
        /// <br/>canExecute(msls.application.Home screen)
        /// </field>
        ViewEmployees_canExecute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to execute the ViewEmployees method.
        /// <br/>execute(msls.application.Home screen)
        /// </field>
        ViewEmployees_execute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to determine if the Report method can be executed.
        /// <br/>canExecute(msls.application.Home screen)
        /// </field>
        Report_canExecute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to execute the Report method.
        /// <br/>execute(msls.application.Home screen)
        /// </field>
        Report_execute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to determine if the AddEditUtilization method can be executed.
        /// <br/>canExecute(msls.application.Home screen)
        /// </field>
        AddEditUtilization_canExecute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to execute the AddEditUtilization method.
        /// <br/>execute(msls.application.Home screen)
        /// </field>
        AddEditUtilization_execute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to determine if the ProjectWiseReport method can be executed.
        /// <br/>canExecute(msls.application.Home screen)
        /// </field>
        ProjectWiseReport_canExecute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to execute the ProjectWiseReport method.
        /// <br/>execute(msls.application.Home screen)
        /// </field>
        ProjectWiseReport_execute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to determine if the ProjectReport method can be executed.
        /// <br/>canExecute(msls.application.Home screen)
        /// </field>
        ProjectReport_canExecute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to execute the ProjectReport method.
        /// <br/>execute(msls.application.Home screen)
        /// </field>
        ProjectReport_execute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to determine if the ProjectMembersReport method can be executed.
        /// <br/>canExecute(msls.application.Home screen)
        /// </field>
        ProjectMembersReport_canExecute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to execute the ProjectMembersReport method.
        /// <br/>execute(msls.application.Home screen)
        /// </field>
        ProjectMembersReport_execute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to determine if the AddProjects method can be executed.
        /// <br/>canExecute(msls.application.Home screen)
        /// </field>
        AddProjects_canExecute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to execute the AddProjects method.
        /// <br/>execute(msls.application.Home screen)
        /// </field>
        AddProjects_execute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to determine if the EmailSave method can be executed.
        /// <br/>canExecute(msls.application.Home screen)
        /// </field>
        EmailSave_canExecute: [lightSwitchApplication.Home],
        /// <field>
        /// Called to execute the EmailSave method.
        /// <br/>execute(msls.application.Home screen)
        /// </field>
        EmailSave_execute: [lightSwitchApplication.Home],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Group"); }],
        /// <field>
        /// Called after the LabText content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LabText_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("LabText"); }],
        /// <field>
        /// Called after the EmailMsg content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmailMsg_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("EmailMsg"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("UserName"); }],
        /// <field>
        /// Called after the UserNameTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserNameTemplate_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("UserNameTemplate"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("EmpID"); }],
        /// <field>
        /// Called after the EmpName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpName_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("EmpName"); }],
        /// <field>
        /// Called after the Designation content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Designation_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Designation"); }],
        /// <field>
        /// Called after the Email content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Email_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Email"); }],
        /// <field>
        /// Called after the UserName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName1_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("UserName1"); }],
        /// <field>
        /// Called after the EmployeeDetail1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeDetail1_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("EmployeeDetail1"); }]
    });

    lightSwitchApplication.ProjectScore.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ProjectScore
        },
        ComplexityandQualityShareList: {
            _$class: msls.ContentItem,
            _$name: "ComplexityandQualityShareList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ProjectScore,
            value: lightSwitchApplication.ProjectScore
        },
        Back: {
            _$class: msls.ContentItem,
            _$name: "Back",
            _$parentName: "ComplexityandQualityShareList",
            screen: lightSwitchApplication.ProjectScore
        },
        ProjectScore1: {
            _$class: msls.ContentItem,
            _$name: "ProjectScore1",
            _$parentName: "ComplexityandQualityShareList",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ProjectScore,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ProjectScore,
                _$entry: {
                    elementType: lightSwitchApplication.ComplexityandQualityShare
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "ProjectScore1",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ComplexityandQualityShare,
            value: lightSwitchApplication.ComplexityandQualityShare
        },
        ProjectName: {
            _$class: msls.ContentItem,
            _$name: "ProjectName",
            _$parentName: "rows",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ComplexityandQualityShare,
            value: String
        },
        ComplexityDifficultyLevel: {
            _$class: msls.ContentItem,
            _$name: "ComplexityDifficultyLevel",
            _$parentName: "rows",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ComplexityandQualityShare,
            value: String
        },
        ComplexityScope: {
            _$class: msls.ContentItem,
            _$name: "ComplexityScope",
            _$parentName: "rows",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ComplexityandQualityShare,
            value: String
        },
        ComplexityAvg: {
            _$class: msls.ContentItem,
            _$name: "ComplexityAvg",
            _$parentName: "rows",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ComplexityandQualityShare,
            value: String
        },
        QualityPMRating: {
            _$class: msls.ContentItem,
            _$name: "QualityPMRating",
            _$parentName: "rows",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ComplexityandQualityShare,
            value: String
        },
        QualityPeerReview: {
            _$class: msls.ContentItem,
            _$name: "QualityPeerReview",
            _$parentName: "rows",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ComplexityandQualityShare,
            value: String
        },
        QualityProjectDuration: {
            _$class: msls.ContentItem,
            _$name: "QualityProjectDuration",
            _$parentName: "rows",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ComplexityandQualityShare,
            value: String
        },
        QualityAverage: {
            _$class: msls.ContentItem,
            _$name: "QualityAverage",
            _$parentName: "rows",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ComplexityandQualityShare,
            value: String
        },
        TotalHours: {
            _$class: msls.ContentItem,
            _$name: "TotalHours",
            _$parentName: "rows",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ComplexityandQualityShare,
            value: String
        },
        ProjectShare: {
            _$class: msls.ContentItem,
            _$name: "ProjectShare",
            _$parentName: "rows",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ComplexityandQualityShare,
            value: String
        },
        ComplexityShare: {
            _$class: msls.ContentItem,
            _$name: "ComplexityShare",
            _$parentName: "rows",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ComplexityandQualityShare,
            value: String
        },
        QualityShare: {
            _$class: msls.ContentItem,
            _$name: "QualityShare",
            _$parentName: "rows",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ComplexityandQualityShare,
            value: String
        },
        ProjectScore: {
            _$class: msls.ContentItem,
            _$name: "ProjectScore",
            _$parentName: "rows",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ComplexityandQualityShare,
            value: String
        },
        CandidateProjectScore: {
            _$class: msls.ContentItem,
            _$name: "CandidateProjectScore",
            _$parentName: "ComplexityandQualityShareList",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ProjectScore,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ProjectScore,
                _$entry: {
                    elementType: lightSwitchApplication.TotalProjectScore
                }
            }
        },
        CandidateProjectScoreTemplate: {
            _$class: msls.ContentItem,
            _$name: "CandidateProjectScoreTemplate",
            _$parentName: "CandidateProjectScore",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.TotalProjectScore,
            value: lightSwitchApplication.TotalProjectScore
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ProjectScore
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Popups",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ProjectScore,
            value: lightSwitchApplication.ProjectScore
        },
        ProjectScore1_selectedItem: {
            _$class: msls.ContentItem,
            _$name: "ProjectScore1_selectedItem",
            _$parentName: "Group",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ProjectScore,
            value: lightSwitchApplication.ComplexityandQualityShare
        },
        ProjectName1: {
            _$class: msls.ContentItem,
            _$name: "ProjectName1",
            _$parentName: "ProjectScore1_selectedItem",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ComplexityandQualityShare,
            value: String
        },
        ComplexityDifficultyLevel1: {
            _$class: msls.ContentItem,
            _$name: "ComplexityDifficultyLevel1",
            _$parentName: "ProjectScore1_selectedItem",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ComplexityandQualityShare,
            value: String
        },
        ComplexityScope1: {
            _$class: msls.ContentItem,
            _$name: "ComplexityScope1",
            _$parentName: "ProjectScore1_selectedItem",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ComplexityandQualityShare,
            value: String
        },
        ComplexityAvg1: {
            _$class: msls.ContentItem,
            _$name: "ComplexityAvg1",
            _$parentName: "ProjectScore1_selectedItem",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ComplexityandQualityShare,
            value: String
        },
        QualityPMRating1: {
            _$class: msls.ContentItem,
            _$name: "QualityPMRating1",
            _$parentName: "ProjectScore1_selectedItem",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ComplexityandQualityShare,
            value: String
        },
        QualityPeerReview1: {
            _$class: msls.ContentItem,
            _$name: "QualityPeerReview1",
            _$parentName: "ProjectScore1_selectedItem",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ComplexityandQualityShare,
            value: String
        },
        QualityProjectDuration1: {
            _$class: msls.ContentItem,
            _$name: "QualityProjectDuration1",
            _$parentName: "ProjectScore1_selectedItem",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ComplexityandQualityShare,
            value: String
        },
        QualityAverage1: {
            _$class: msls.ContentItem,
            _$name: "QualityAverage1",
            _$parentName: "ProjectScore1_selectedItem",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ComplexityandQualityShare,
            value: String
        },
        TotalHours1: {
            _$class: msls.ContentItem,
            _$name: "TotalHours1",
            _$parentName: "ProjectScore1_selectedItem",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ComplexityandQualityShare,
            value: String
        },
        TotalofallProjects: {
            _$class: msls.ContentItem,
            _$name: "TotalofallProjects",
            _$parentName: "ProjectScore1_selectedItem",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ComplexityandQualityShare,
            value: String
        },
        ProjectShare1: {
            _$class: msls.ContentItem,
            _$name: "ProjectShare1",
            _$parentName: "ProjectScore1_selectedItem",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ComplexityandQualityShare,
            value: String
        },
        ComplexityShare1: {
            _$class: msls.ContentItem,
            _$name: "ComplexityShare1",
            _$parentName: "ProjectScore1_selectedItem",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ComplexityandQualityShare,
            value: String
        },
        QualityShare1: {
            _$class: msls.ContentItem,
            _$name: "QualityShare1",
            _$parentName: "ProjectScore1_selectedItem",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ComplexityandQualityShare,
            value: String
        },
        EmpID1: {
            _$class: msls.ContentItem,
            _$name: "EmpID1",
            _$parentName: "ProjectScore1_selectedItem",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ComplexityandQualityShare,
            value: Number
        },
        ProjectScore3: {
            _$class: msls.ContentItem,
            _$name: "ProjectScore3",
            _$parentName: "ProjectScore1_selectedItem",
            screen: lightSwitchApplication.ProjectScore,
            data: lightSwitchApplication.ComplexityandQualityShare,
            value: String
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ProjectScore, {
        /// <field>
        /// Called when a new ProjectScore screen is created.
        /// <br/>created(msls.application.ProjectScore screen)
        /// </field>
        created: [lightSwitchApplication.ProjectScore],
        /// <field>
        /// Called before changes on an active ProjectScore screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ProjectScore screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ProjectScore],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.ProjectScore screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.ProjectScore],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.ProjectScore screen)
        /// </field>
        Back_execute: [lightSwitchApplication.ProjectScore],
        /// <field>
        /// Called after the ComplexityandQualityShareList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ComplexityandQualityShareList_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("ComplexityandQualityShareList"); }],
        /// <field>
        /// Called after the Back content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Back_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("Back"); }],
        /// <field>
        /// Called after the ProjectScore1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectScore1_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("ProjectScore1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("rows"); }],
        /// <field>
        /// Called after the ProjectName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("ProjectName"); }],
        /// <field>
        /// Called after the ComplexityDifficultyLevel content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ComplexityDifficultyLevel_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("ComplexityDifficultyLevel"); }],
        /// <field>
        /// Called after the ComplexityScope content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ComplexityScope_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("ComplexityScope"); }],
        /// <field>
        /// Called after the ComplexityAvg content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ComplexityAvg_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("ComplexityAvg"); }],
        /// <field>
        /// Called after the QualityPMRating content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QualityPMRating_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("QualityPMRating"); }],
        /// <field>
        /// Called after the QualityPeerReview content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QualityPeerReview_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("QualityPeerReview"); }],
        /// <field>
        /// Called after the QualityProjectDuration content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QualityProjectDuration_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("QualityProjectDuration"); }],
        /// <field>
        /// Called after the QualityAverage content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QualityAverage_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("QualityAverage"); }],
        /// <field>
        /// Called after the TotalHours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TotalHours_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("TotalHours"); }],
        /// <field>
        /// Called after the ProjectShare content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectShare_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("ProjectShare"); }],
        /// <field>
        /// Called after the ComplexityShare content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ComplexityShare_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("ComplexityShare"); }],
        /// <field>
        /// Called after the QualityShare content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QualityShare_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("QualityShare"); }],
        /// <field>
        /// Called after the ProjectScore content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectScore_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("ProjectScore"); }],
        /// <field>
        /// Called after the CandidateProjectScore content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CandidateProjectScore_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("CandidateProjectScore"); }],
        /// <field>
        /// Called after the CandidateProjectScoreTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CandidateProjectScoreTemplate_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("CandidateProjectScoreTemplate"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("Group"); }],
        /// <field>
        /// Called after the ProjectScore1_selectedItem content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectScore1_selectedItem_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("ProjectScore1_selectedItem"); }],
        /// <field>
        /// Called after the ProjectName1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectName1_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("ProjectName1"); }],
        /// <field>
        /// Called after the ComplexityDifficultyLevel1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ComplexityDifficultyLevel1_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("ComplexityDifficultyLevel1"); }],
        /// <field>
        /// Called after the ComplexityScope1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ComplexityScope1_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("ComplexityScope1"); }],
        /// <field>
        /// Called after the ComplexityAvg1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ComplexityAvg1_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("ComplexityAvg1"); }],
        /// <field>
        /// Called after the QualityPMRating1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QualityPMRating1_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("QualityPMRating1"); }],
        /// <field>
        /// Called after the QualityPeerReview1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QualityPeerReview1_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("QualityPeerReview1"); }],
        /// <field>
        /// Called after the QualityProjectDuration1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QualityProjectDuration1_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("QualityProjectDuration1"); }],
        /// <field>
        /// Called after the QualityAverage1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QualityAverage1_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("QualityAverage1"); }],
        /// <field>
        /// Called after the TotalHours1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TotalHours1_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("TotalHours1"); }],
        /// <field>
        /// Called after the TotalofallProjects content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TotalofallProjects_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("TotalofallProjects"); }],
        /// <field>
        /// Called after the ProjectShare1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectShare1_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("ProjectShare1"); }],
        /// <field>
        /// Called after the ComplexityShare1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ComplexityShare1_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("ComplexityShare1"); }],
        /// <field>
        /// Called after the QualityShare1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        QualityShare1_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("QualityShare1"); }],
        /// <field>
        /// Called after the EmpID1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID1_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("EmpID1"); }],
        /// <field>
        /// Called after the ProjectScore3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectScore3_postRender: [$element, function () { return new lightSwitchApplication.ProjectScore().findContentItem("ProjectScore3"); }]
    });

    lightSwitchApplication.Reports.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Reports
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Reports,
            data: lightSwitchApplication.Reports,
            value: lightSwitchApplication.Reports
        },
        Back: {
            _$class: msls.ContentItem,
            _$name: "Back",
            _$parentName: "Group",
            screen: lightSwitchApplication.Reports
        },
        UtilizationScore: {
            _$class: msls.ContentItem,
            _$name: "UtilizationScore",
            _$parentName: "Group",
            screen: lightSwitchApplication.Reports
        },
        ProjectScore: {
            _$class: msls.ContentItem,
            _$name: "ProjectScore",
            _$parentName: "Group",
            screen: lightSwitchApplication.Reports
        },
        ProjectWiseReport: {
            _$class: msls.ContentItem,
            _$name: "ProjectWiseReport",
            _$parentName: "Group",
            screen: lightSwitchApplication.Reports
        },
        MonthandDateWiseReport: {
            _$class: msls.ContentItem,
            _$name: "MonthandDateWiseReport",
            _$parentName: "Group",
            screen: lightSwitchApplication.Reports
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Reports
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Reports, {
        /// <field>
        /// Called when a new Reports screen is created.
        /// <br/>created(msls.application.Reports screen)
        /// </field>
        created: [lightSwitchApplication.Reports],
        /// <field>
        /// Called before changes on an active Reports screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Reports screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Reports],
        /// <field>
        /// Called to determine if the ProjectWiseReport method can be executed.
        /// <br/>canExecute(msls.application.Reports screen)
        /// </field>
        ProjectWiseReport_canExecute: [lightSwitchApplication.Reports],
        /// <field>
        /// Called to execute the ProjectWiseReport method.
        /// <br/>execute(msls.application.Reports screen)
        /// </field>
        ProjectWiseReport_execute: [lightSwitchApplication.Reports],
        /// <field>
        /// Called to determine if the MonthandDateWiseReport method can be executed.
        /// <br/>canExecute(msls.application.Reports screen)
        /// </field>
        MonthandDateWiseReport_canExecute: [lightSwitchApplication.Reports],
        /// <field>
        /// Called to execute the MonthandDateWiseReport method.
        /// <br/>execute(msls.application.Reports screen)
        /// </field>
        MonthandDateWiseReport_execute: [lightSwitchApplication.Reports],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.Reports screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.Reports],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.Reports screen)
        /// </field>
        Back_execute: [lightSwitchApplication.Reports],
        /// <field>
        /// Called to determine if the ProjectScore method can be executed.
        /// <br/>canExecute(msls.application.Reports screen)
        /// </field>
        ProjectScore_canExecute: [lightSwitchApplication.Reports],
        /// <field>
        /// Called to execute the ProjectScore method.
        /// <br/>execute(msls.application.Reports screen)
        /// </field>
        ProjectScore_execute: [lightSwitchApplication.Reports],
        /// <field>
        /// Called to determine if the UtilizationScore method can be executed.
        /// <br/>canExecute(msls.application.Reports screen)
        /// </field>
        UtilizationScore_canExecute: [lightSwitchApplication.Reports],
        /// <field>
        /// Called to execute the UtilizationScore method.
        /// <br/>execute(msls.application.Reports screen)
        /// </field>
        UtilizationScore_execute: [lightSwitchApplication.Reports],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Reports().findContentItem("Group"); }],
        /// <field>
        /// Called after the Back content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Back_postRender: [$element, function () { return new lightSwitchApplication.Reports().findContentItem("Back"); }],
        /// <field>
        /// Called after the UtilizationScore content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UtilizationScore_postRender: [$element, function () { return new lightSwitchApplication.Reports().findContentItem("UtilizationScore"); }],
        /// <field>
        /// Called after the ProjectScore content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectScore_postRender: [$element, function () { return new lightSwitchApplication.Reports().findContentItem("ProjectScore"); }],
        /// <field>
        /// Called after the ProjectWiseReport content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectWiseReport_postRender: [$element, function () { return new lightSwitchApplication.Reports().findContentItem("ProjectWiseReport"); }],
        /// <field>
        /// Called after the MonthandDateWiseReport content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthandDateWiseReport_postRender: [$element, function () { return new lightSwitchApplication.Reports().findContentItem("MonthandDateWiseReport"); }]
    });

    lightSwitchApplication.UtilizationScore.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.UtilizationScore
        },
        UtilizationCalculationList: {
            _$class: msls.ContentItem,
            _$name: "UtilizationCalculationList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.UtilizationScore,
            data: lightSwitchApplication.UtilizationScore,
            value: lightSwitchApplication.UtilizationScore
        },
        Back: {
            _$class: msls.ContentItem,
            _$name: "Back",
            _$parentName: "UtilizationCalculationList",
            screen: lightSwitchApplication.UtilizationScore
        },
        Utilization: {
            _$class: msls.ContentItem,
            _$name: "Utilization",
            _$parentName: "UtilizationCalculationList",
            screen: lightSwitchApplication.UtilizationScore,
            data: lightSwitchApplication.UtilizationScore,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.UtilizationScore,
                _$entry: {
                    elementType: lightSwitchApplication.UtilizationCalculation
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Utilization",
            screen: lightSwitchApplication.UtilizationScore,
            data: lightSwitchApplication.UtilizationCalculation,
            value: lightSwitchApplication.UtilizationCalculation
        },
        MonthName: {
            _$class: msls.ContentItem,
            _$name: "MonthName",
            _$parentName: "rows",
            screen: lightSwitchApplication.UtilizationScore,
            data: lightSwitchApplication.UtilizationCalculation,
            value: String
        },
        WeekDays1: {
            _$class: msls.ContentItem,
            _$name: "WeekDays1",
            _$parentName: "rows",
            screen: lightSwitchApplication.UtilizationScore,
            data: lightSwitchApplication.UtilizationCalculation,
            value: Number
        },
        WorkingDays: {
            _$class: msls.ContentItem,
            _$name: "WorkingDays",
            _$parentName: "rows",
            screen: lightSwitchApplication.UtilizationScore,
            data: lightSwitchApplication.UtilizationCalculation,
            value: Number
        },
        Holidays: {
            _$class: msls.ContentItem,
            _$name: "Holidays",
            _$parentName: "rows",
            screen: lightSwitchApplication.UtilizationScore,
            data: lightSwitchApplication.UtilizationCalculation,
            value: Number
        },
        WorkedHours: {
            _$class: msls.ContentItem,
            _$name: "WorkedHours",
            _$parentName: "rows",
            screen: lightSwitchApplication.UtilizationScore,
            data: lightSwitchApplication.UtilizationCalculation,
            value: String
        },
        UtilizationPercentage: {
            _$class: msls.ContentItem,
            _$name: "UtilizationPercentage",
            _$parentName: "rows",
            screen: lightSwitchApplication.UtilizationScore,
            data: lightSwitchApplication.UtilizationCalculation,
            value: String
        },
        AvgUtilization: {
            _$class: msls.ContentItem,
            _$name: "AvgUtilization",
            _$parentName: "UtilizationCalculationList",
            screen: lightSwitchApplication.UtilizationScore,
            data: lightSwitchApplication.UtilizationScore,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.UtilizationScore,
                _$entry: {
                    elementType: lightSwitchApplication.AvgUtilization
                }
            }
        },
        AvgUtilizationTemplate: {
            _$class: msls.ContentItem,
            _$name: "AvgUtilizationTemplate",
            _$parentName: "AvgUtilization",
            screen: lightSwitchApplication.UtilizationScore,
            data: lightSwitchApplication.AvgUtilization,
            value: lightSwitchApplication.AvgUtilization
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.UtilizationScore
        }
    };

    msls._addEntryPoints(lightSwitchApplication.UtilizationScore, {
        /// <field>
        /// Called when a new UtilizationScore screen is created.
        /// <br/>created(msls.application.UtilizationScore screen)
        /// </field>
        created: [lightSwitchApplication.UtilizationScore],
        /// <field>
        /// Called before changes on an active UtilizationScore screen are applied.
        /// <br/>beforeApplyChanges(msls.application.UtilizationScore screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.UtilizationScore],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.UtilizationScore screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.UtilizationScore],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.UtilizationScore screen)
        /// </field>
        Back_execute: [lightSwitchApplication.UtilizationScore],
        /// <field>
        /// Called after the UtilizationCalculationList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UtilizationCalculationList_postRender: [$element, function () { return new lightSwitchApplication.UtilizationScore().findContentItem("UtilizationCalculationList"); }],
        /// <field>
        /// Called after the Back content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Back_postRender: [$element, function () { return new lightSwitchApplication.UtilizationScore().findContentItem("Back"); }],
        /// <field>
        /// Called after the Utilization content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Utilization_postRender: [$element, function () { return new lightSwitchApplication.UtilizationScore().findContentItem("Utilization"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.UtilizationScore().findContentItem("rows"); }],
        /// <field>
        /// Called after the MonthName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthName_postRender: [$element, function () { return new lightSwitchApplication.UtilizationScore().findContentItem("MonthName"); }],
        /// <field>
        /// Called after the WeekDays1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WeekDays1_postRender: [$element, function () { return new lightSwitchApplication.UtilizationScore().findContentItem("WeekDays1"); }],
        /// <field>
        /// Called after the WorkingDays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkingDays_postRender: [$element, function () { return new lightSwitchApplication.UtilizationScore().findContentItem("WorkingDays"); }],
        /// <field>
        /// Called after the Holidays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Holidays_postRender: [$element, function () { return new lightSwitchApplication.UtilizationScore().findContentItem("Holidays"); }],
        /// <field>
        /// Called after the WorkedHours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkedHours_postRender: [$element, function () { return new lightSwitchApplication.UtilizationScore().findContentItem("WorkedHours"); }],
        /// <field>
        /// Called after the UtilizationPercentage content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UtilizationPercentage_postRender: [$element, function () { return new lightSwitchApplication.UtilizationScore().findContentItem("UtilizationPercentage"); }],
        /// <field>
        /// Called after the AvgUtilization content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AvgUtilization_postRender: [$element, function () { return new lightSwitchApplication.UtilizationScore().findContentItem("AvgUtilization"); }],
        /// <field>
        /// Called after the AvgUtilizationTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AvgUtilizationTemplate_postRender: [$element, function () { return new lightSwitchApplication.UtilizationScore().findContentItem("AvgUtilizationTemplate"); }]
    });

    lightSwitchApplication.ViewReporteeDetailsbyManager.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewReporteeDetailsbyManager
        },
        EmployeeProjectList: {
            _$class: msls.ContentItem,
            _$name: "EmployeeProjectList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ViewReporteeDetailsbyManager,
            data: lightSwitchApplication.ViewReporteeDetailsbyManager,
            value: lightSwitchApplication.ViewReporteeDetailsbyManager
        },
        Back: {
            _$class: msls.ContentItem,
            _$name: "Back",
            _$parentName: "EmployeeProjectList",
            screen: lightSwitchApplication.ViewReporteeDetailsbyManager
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "EmployeeProjectList",
            screen: lightSwitchApplication.ViewReporteeDetailsbyManager,
            data: lightSwitchApplication.ViewReporteeDetailsbyManager,
            value: lightSwitchApplication.ViewReporteeDetailsbyManager
        },
        Property2: {
            _$class: msls.ContentItem,
            _$name: "Property2",
            _$parentName: "Group",
            screen: lightSwitchApplication.ViewReporteeDetailsbyManager,
            data: lightSwitchApplication.ViewReporteeDetailsbyManager,
            value: lightSwitchApplication.Months
        },
        Property2Template: {
            _$class: msls.ContentItem,
            _$name: "Property2Template",
            _$parentName: "Property2",
            screen: lightSwitchApplication.ViewReporteeDetailsbyManager,
            data: lightSwitchApplication.Months,
            value: lightSwitchApplication.Months
        },
        Property1: {
            _$class: msls.ContentItem,
            _$name: "Property1",
            _$parentName: "Group",
            screen: lightSwitchApplication.ViewReporteeDetailsbyManager,
            data: lightSwitchApplication.ViewReporteeDetailsbyManager,
            value: lightSwitchApplication.ProjectDetail
        },
        Property1Template: {
            _$class: msls.ContentItem,
            _$name: "Property1Template",
            _$parentName: "Property1",
            screen: lightSwitchApplication.ViewReporteeDetailsbyManager,
            data: lightSwitchApplication.ProjectDetail,
            value: lightSwitchApplication.ProjectDetail
        },
        ViewReporteeProjects: {
            _$class: msls.ContentItem,
            _$name: "ViewReporteeProjects",
            _$parentName: "EmployeeProjectList",
            screen: lightSwitchApplication.ViewReporteeDetailsbyManager,
            data: lightSwitchApplication.ViewReporteeDetailsbyManager,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewReporteeDetailsbyManager,
                _$entry: {
                    elementType: lightSwitchApplication.EmployeeProject
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "ViewReporteeProjects",
            screen: lightSwitchApplication.ViewReporteeDetailsbyManager,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.EmployeeProject
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewReporteeDetailsbyManager,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        ProjectID: {
            _$class: msls.ContentItem,
            _$name: "ProjectID",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewReporteeDetailsbyManager,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        ProjectDetail: {
            _$class: msls.ContentItem,
            _$name: "ProjectDetail",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewReporteeDetailsbyManager,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.ProjectDetail
        },
        SubProject: {
            _$class: msls.ContentItem,
            _$name: "SubProject",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewReporteeDetailsbyManager,
            data: lightSwitchApplication.EmployeeProject,
            value: String
        },
        Months: {
            _$class: msls.ContentItem,
            _$name: "Months",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewReporteeDetailsbyManager,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.Months
        },
        c_Date: {
            _$class: msls.ContentItem,
            _$name: "c_Date",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewReporteeDetailsbyManager,
            data: lightSwitchApplication.EmployeeProject,
            value: Date
        },
        Hours: {
            _$class: msls.ContentItem,
            _$name: "Hours",
            _$parentName: "rows",
            screen: lightSwitchApplication.ViewReporteeDetailsbyManager,
            data: lightSwitchApplication.EmployeeProject,
            value: String
        },
        UtilizationCalculations: {
            _$class: msls.ContentItem,
            _$name: "UtilizationCalculations",
            _$parentName: "EmployeeProjectList",
            screen: lightSwitchApplication.ViewReporteeDetailsbyManager,
            data: lightSwitchApplication.ViewReporteeDetailsbyManager,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ViewReporteeDetailsbyManager,
                _$entry: {
                    elementType: lightSwitchApplication.UtilizationCalculation
                }
            }
        },
        UtilizationCalculationsTemplate: {
            _$class: msls.ContentItem,
            _$name: "UtilizationCalculationsTemplate",
            _$parentName: "UtilizationCalculations",
            screen: lightSwitchApplication.ViewReporteeDetailsbyManager,
            data: lightSwitchApplication.UtilizationCalculation,
            value: lightSwitchApplication.UtilizationCalculation
        },
        MonthName: {
            _$class: msls.ContentItem,
            _$name: "MonthName",
            _$parentName: "UtilizationCalculationsTemplate",
            screen: lightSwitchApplication.ViewReporteeDetailsbyManager,
            data: lightSwitchApplication.UtilizationCalculation,
            value: String
        },
        WeekDays: {
            _$class: msls.ContentItem,
            _$name: "WeekDays",
            _$parentName: "UtilizationCalculationsTemplate",
            screen: lightSwitchApplication.ViewReporteeDetailsbyManager,
            data: lightSwitchApplication.UtilizationCalculation,
            value: Number
        },
        WorkingDays: {
            _$class: msls.ContentItem,
            _$name: "WorkingDays",
            _$parentName: "UtilizationCalculationsTemplate",
            screen: lightSwitchApplication.ViewReporteeDetailsbyManager,
            data: lightSwitchApplication.UtilizationCalculation,
            value: Number
        },
        WorkedHours: {
            _$class: msls.ContentItem,
            _$name: "WorkedHours",
            _$parentName: "UtilizationCalculationsTemplate",
            screen: lightSwitchApplication.ViewReporteeDetailsbyManager,
            data: lightSwitchApplication.UtilizationCalculation,
            value: String
        },
        UtilizationPercentage: {
            _$class: msls.ContentItem,
            _$name: "UtilizationPercentage",
            _$parentName: "UtilizationCalculationsTemplate",
            screen: lightSwitchApplication.ViewReporteeDetailsbyManager,
            data: lightSwitchApplication.UtilizationCalculation,
            value: String
        },
        EmpID1: {
            _$class: msls.ContentItem,
            _$name: "EmpID1",
            _$parentName: "UtilizationCalculationsTemplate",
            screen: lightSwitchApplication.ViewReporteeDetailsbyManager,
            data: lightSwitchApplication.UtilizationCalculation,
            value: Number
        },
        MonthID: {
            _$class: msls.ContentItem,
            _$name: "MonthID",
            _$parentName: "UtilizationCalculationsTemplate",
            screen: lightSwitchApplication.ViewReporteeDetailsbyManager,
            data: lightSwitchApplication.UtilizationCalculation,
            value: Number
        },
        Holidays: {
            _$class: msls.ContentItem,
            _$name: "Holidays",
            _$parentName: "UtilizationCalculationsTemplate",
            screen: lightSwitchApplication.ViewReporteeDetailsbyManager,
            data: lightSwitchApplication.UtilizationCalculation,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ViewReporteeDetailsbyManager
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ViewReporteeDetailsbyManager, {
        /// <field>
        /// Called when a new ViewReporteeDetailsbyManager screen is created.
        /// <br/>created(msls.application.ViewReporteeDetailsbyManager screen)
        /// </field>
        created: [lightSwitchApplication.ViewReporteeDetailsbyManager],
        /// <field>
        /// Called before changes on an active ViewReporteeDetailsbyManager screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ViewReporteeDetailsbyManager screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ViewReporteeDetailsbyManager],
        /// <field>
        /// Called to determine if the Back method can be executed.
        /// <br/>canExecute(msls.application.ViewReporteeDetailsbyManager screen)
        /// </field>
        Back_canExecute: [lightSwitchApplication.ViewReporteeDetailsbyManager],
        /// <field>
        /// Called to execute the Back method.
        /// <br/>execute(msls.application.ViewReporteeDetailsbyManager screen)
        /// </field>
        Back_execute: [lightSwitchApplication.ViewReporteeDetailsbyManager],
        /// <field>
        /// Called after the EmployeeProjectList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeProjectList_postRender: [$element, function () { return new lightSwitchApplication.ViewReporteeDetailsbyManager().findContentItem("EmployeeProjectList"); }],
        /// <field>
        /// Called after the Back content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Back_postRender: [$element, function () { return new lightSwitchApplication.ViewReporteeDetailsbyManager().findContentItem("Back"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.ViewReporteeDetailsbyManager().findContentItem("Group"); }],
        /// <field>
        /// Called after the Property2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Property2_postRender: [$element, function () { return new lightSwitchApplication.ViewReporteeDetailsbyManager().findContentItem("Property2"); }],
        /// <field>
        /// Called after the Property2Template content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Property2Template_postRender: [$element, function () { return new lightSwitchApplication.ViewReporteeDetailsbyManager().findContentItem("Property2Template"); }],
        /// <field>
        /// Called after the Property1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Property1_postRender: [$element, function () { return new lightSwitchApplication.ViewReporteeDetailsbyManager().findContentItem("Property1"); }],
        /// <field>
        /// Called after the Property1Template content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Property1Template_postRender: [$element, function () { return new lightSwitchApplication.ViewReporteeDetailsbyManager().findContentItem("Property1Template"); }],
        /// <field>
        /// Called after the ViewReporteeProjects content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ViewReporteeProjects_postRender: [$element, function () { return new lightSwitchApplication.ViewReporteeDetailsbyManager().findContentItem("ViewReporteeProjects"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.ViewReporteeDetailsbyManager().findContentItem("rows"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.ViewReporteeDetailsbyManager().findContentItem("EmpID"); }],
        /// <field>
        /// Called after the ProjectID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectID_postRender: [$element, function () { return new lightSwitchApplication.ViewReporteeDetailsbyManager().findContentItem("ProjectID"); }],
        /// <field>
        /// Called after the ProjectDetail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectDetail_postRender: [$element, function () { return new lightSwitchApplication.ViewReporteeDetailsbyManager().findContentItem("ProjectDetail"); }],
        /// <field>
        /// Called after the SubProject content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SubProject_postRender: [$element, function () { return new lightSwitchApplication.ViewReporteeDetailsbyManager().findContentItem("SubProject"); }],
        /// <field>
        /// Called after the Months content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Months_postRender: [$element, function () { return new lightSwitchApplication.ViewReporteeDetailsbyManager().findContentItem("Months"); }],
        /// <field>
        /// Called after the c_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        c_Date_postRender: [$element, function () { return new lightSwitchApplication.ViewReporteeDetailsbyManager().findContentItem("c_Date"); }],
        /// <field>
        /// Called after the Hours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hours_postRender: [$element, function () { return new lightSwitchApplication.ViewReporteeDetailsbyManager().findContentItem("Hours"); }],
        /// <field>
        /// Called after the UtilizationCalculations content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UtilizationCalculations_postRender: [$element, function () { return new lightSwitchApplication.ViewReporteeDetailsbyManager().findContentItem("UtilizationCalculations"); }],
        /// <field>
        /// Called after the UtilizationCalculationsTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UtilizationCalculationsTemplate_postRender: [$element, function () { return new lightSwitchApplication.ViewReporteeDetailsbyManager().findContentItem("UtilizationCalculationsTemplate"); }],
        /// <field>
        /// Called after the MonthName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthName_postRender: [$element, function () { return new lightSwitchApplication.ViewReporteeDetailsbyManager().findContentItem("MonthName"); }],
        /// <field>
        /// Called after the WeekDays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WeekDays_postRender: [$element, function () { return new lightSwitchApplication.ViewReporteeDetailsbyManager().findContentItem("WeekDays"); }],
        /// <field>
        /// Called after the WorkingDays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkingDays_postRender: [$element, function () { return new lightSwitchApplication.ViewReporteeDetailsbyManager().findContentItem("WorkingDays"); }],
        /// <field>
        /// Called after the WorkedHours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WorkedHours_postRender: [$element, function () { return new lightSwitchApplication.ViewReporteeDetailsbyManager().findContentItem("WorkedHours"); }],
        /// <field>
        /// Called after the UtilizationPercentage content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UtilizationPercentage_postRender: [$element, function () { return new lightSwitchApplication.ViewReporteeDetailsbyManager().findContentItem("UtilizationPercentage"); }],
        /// <field>
        /// Called after the EmpID1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID1_postRender: [$element, function () { return new lightSwitchApplication.ViewReporteeDetailsbyManager().findContentItem("EmpID1"); }],
        /// <field>
        /// Called after the MonthID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MonthID_postRender: [$element, function () { return new lightSwitchApplication.ViewReporteeDetailsbyManager().findContentItem("MonthID"); }],
        /// <field>
        /// Called after the Holidays content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Holidays_postRender: [$element, function () { return new lightSwitchApplication.ViewReporteeDetailsbyManager().findContentItem("Holidays"); }]
    });

    lightSwitchApplication.WeeklyHours.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.WeeklyHours
        },
        EmployeeProjectList: {
            _$class: msls.ContentItem,
            _$name: "EmployeeProjectList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.WeeklyHours,
            data: lightSwitchApplication.WeeklyHours,
            value: lightSwitchApplication.WeeklyHours
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "EmployeeProjectList",
            screen: lightSwitchApplication.WeeklyHours,
            data: lightSwitchApplication.WeeklyHours,
            value: lightSwitchApplication.WeeklyHours
        },
        FromDate: {
            _$class: msls.ContentItem,
            _$name: "FromDate",
            _$parentName: "Group",
            screen: lightSwitchApplication.WeeklyHours,
            data: lightSwitchApplication.WeeklyHours,
            value: Date
        },
        ToDate: {
            _$class: msls.ContentItem,
            _$name: "ToDate",
            _$parentName: "Group",
            screen: lightSwitchApplication.WeeklyHours,
            data: lightSwitchApplication.WeeklyHours,
            value: Date
        },
        Tracker: {
            _$class: msls.ContentItem,
            _$name: "Tracker",
            _$parentName: "EmployeeProjectList",
            screen: lightSwitchApplication.WeeklyHours,
            data: lightSwitchApplication.WeeklyHours,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.WeeklyHours,
                _$entry: {
                    elementType: lightSwitchApplication.EmployeeProject
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Tracker",
            screen: lightSwitchApplication.WeeklyHours,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.EmployeeProject
        },
        ProjectDetail: {
            _$class: msls.ContentItem,
            _$name: "ProjectDetail",
            _$parentName: "rows",
            screen: lightSwitchApplication.WeeklyHours,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.ProjectDetail
        },
        SubProject: {
            _$class: msls.ContentItem,
            _$name: "SubProject",
            _$parentName: "rows",
            screen: lightSwitchApplication.WeeklyHours,
            data: lightSwitchApplication.EmployeeProject,
            value: String
        },
        Months: {
            _$class: msls.ContentItem,
            _$name: "Months",
            _$parentName: "rows",
            screen: lightSwitchApplication.WeeklyHours,
            data: lightSwitchApplication.EmployeeProject,
            value: lightSwitchApplication.Months
        },
        c_Date: {
            _$class: msls.ContentItem,
            _$name: "c_Date",
            _$parentName: "rows",
            screen: lightSwitchApplication.WeeklyHours,
            data: lightSwitchApplication.EmployeeProject,
            value: Date
        },
        Hours: {
            _$class: msls.ContentItem,
            _$name: "Hours",
            _$parentName: "rows",
            screen: lightSwitchApplication.WeeklyHours,
            data: lightSwitchApplication.EmployeeProject,
            value: String
        },
        EmpID: {
            _$class: msls.ContentItem,
            _$name: "EmpID",
            _$parentName: "rows",
            screen: lightSwitchApplication.WeeklyHours,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        ProjectID: {
            _$class: msls.ContentItem,
            _$name: "ProjectID",
            _$parentName: "rows",
            screen: lightSwitchApplication.WeeklyHours,
            data: lightSwitchApplication.EmployeeProject,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.WeeklyHours
        }
    };

    msls._addEntryPoints(lightSwitchApplication.WeeklyHours, {
        /// <field>
        /// Called when a new WeeklyHours screen is created.
        /// <br/>created(msls.application.WeeklyHours screen)
        /// </field>
        created: [lightSwitchApplication.WeeklyHours],
        /// <field>
        /// Called before changes on an active WeeklyHours screen are applied.
        /// <br/>beforeApplyChanges(msls.application.WeeklyHours screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.WeeklyHours],
        /// <field>
        /// Called to determine if the SendEmail method can be executed.
        /// <br/>canExecute(msls.application.WeeklyHours screen)
        /// </field>
        SendEmail_canExecute: [lightSwitchApplication.WeeklyHours],
        /// <field>
        /// Called to execute the SendEmail method.
        /// <br/>execute(msls.application.WeeklyHours screen)
        /// </field>
        SendEmail_execute: [lightSwitchApplication.WeeklyHours],
        /// <field>
        /// Called after the EmployeeProjectList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmployeeProjectList_postRender: [$element, function () { return new lightSwitchApplication.WeeklyHours().findContentItem("EmployeeProjectList"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.WeeklyHours().findContentItem("Group"); }],
        /// <field>
        /// Called after the FromDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FromDate_postRender: [$element, function () { return new lightSwitchApplication.WeeklyHours().findContentItem("FromDate"); }],
        /// <field>
        /// Called after the ToDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ToDate_postRender: [$element, function () { return new lightSwitchApplication.WeeklyHours().findContentItem("ToDate"); }],
        /// <field>
        /// Called after the Tracker content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Tracker_postRender: [$element, function () { return new lightSwitchApplication.WeeklyHours().findContentItem("Tracker"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.WeeklyHours().findContentItem("rows"); }],
        /// <field>
        /// Called after the ProjectDetail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectDetail_postRender: [$element, function () { return new lightSwitchApplication.WeeklyHours().findContentItem("ProjectDetail"); }],
        /// <field>
        /// Called after the SubProject content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        SubProject_postRender: [$element, function () { return new lightSwitchApplication.WeeklyHours().findContentItem("SubProject"); }],
        /// <field>
        /// Called after the Months content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Months_postRender: [$element, function () { return new lightSwitchApplication.WeeklyHours().findContentItem("Months"); }],
        /// <field>
        /// Called after the c_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        c_Date_postRender: [$element, function () { return new lightSwitchApplication.WeeklyHours().findContentItem("c_Date"); }],
        /// <field>
        /// Called after the Hours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hours_postRender: [$element, function () { return new lightSwitchApplication.WeeklyHours().findContentItem("Hours"); }],
        /// <field>
        /// Called after the EmpID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmpID_postRender: [$element, function () { return new lightSwitchApplication.WeeklyHours().findContentItem("EmpID"); }],
        /// <field>
        /// Called after the ProjectID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ProjectID_postRender: [$element, function () { return new lightSwitchApplication.WeeklyHours().findContentItem("ProjectID"); }]
    });

}(msls.application));