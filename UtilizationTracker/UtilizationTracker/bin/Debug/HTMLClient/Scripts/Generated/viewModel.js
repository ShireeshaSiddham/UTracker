/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditAssignProject(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditAssignProject screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AssignProject" type="msls.application.AssignProject">
        /// Gets or sets the assignProject for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditAssignProject.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditAssignProject", parameters);
    }

    function BrowseAssignProjects(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseAssignProjects screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AssignProjects" type="msls.VisualCollection" elementType="msls.application.AssignProject">
        /// Gets the assignProjects for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseAssignProjects.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseAssignProjects", parameters);
    }

    function ViewAssignProject(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewAssignProject screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="AssignProject" type="msls.application.AssignProject">
        /// Gets or sets the assignProject for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewAssignProject.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewAssignProject", parameters);
    }

    function AddEditEmployeeDetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditEmployeeDetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="EmployeeDetail" type="msls.application.EmployeeDetail">
        /// Gets or sets the employeeDetail for this screen.
        /// </field>
        /// <field name="GetManagers" type="msls.VisualCollection" elementType="msls.application.EmployeeDetail">
        /// Gets the getManagers for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditEmployeeDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditEmployeeDetail", parameters);
    }

    function BrowseEmployeeDetails(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseEmployeeDetails screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="EmployeeDetails" type="msls.VisualCollection" elementType="msls.application.EmployeeDetail">
        /// Gets the employeeDetails for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseEmployeeDetails.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseEmployeeDetails", parameters);
    }

    function ViewEmployeeDetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewEmployeeDetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="EmployeeDetail" type="msls.application.EmployeeDetail">
        /// Gets or sets the employeeDetail for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewEmployeeDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewEmployeeDetail", parameters);
    }

    function AddEditEmployeeMonth(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditEmployeeMonth screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="EmployeeMonth" type="msls.application.EmployeeMonth">
        /// Gets or sets the employeeMonth for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditEmployeeMonth.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditEmployeeMonth", parameters);
    }

    function BrowseEmployeeMonths(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseEmployeeMonths screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="EmployeeMonths" type="msls.VisualCollection" elementType="msls.application.EmployeeMonth">
        /// Gets the employeeMonths for this screen.
        /// </field>
        /// <field name="CandidateMonthDetails" type="msls.VisualCollection" elementType="msls.application.EmployeeMonth">
        /// Gets the candidateMonthDetails for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseEmployeeMonths.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseEmployeeMonths", parameters);
    }

    function ViewEmployeeMonth(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewEmployeeMonth screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="EmployeeMonth" type="msls.application.EmployeeMonth">
        /// Gets or sets the employeeMonth for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewEmployeeMonth.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewEmployeeMonth", parameters);
    }

    function AddEditEmployeeProject(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditEmployeeProject screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="EmployeeProject" type="msls.application.EmployeeProject">
        /// Gets or sets the employeeProject for this screen.
        /// </field>
        /// <field name="GetSelfProjects" type="msls.VisualCollection" elementType="msls.application.ProjectDetail">
        /// Gets the getSelfProjects for this screen.
        /// </field>
        /// <field name="Property1" type="msls.application.Months">
        /// Gets or sets the property1 for this screen.
        /// </field>
        /// <field name="Months" type="msls.VisualCollection" elementType="msls.application.Months">
        /// Gets the months for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditEmployeeProject.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditEmployeeProject", parameters);
    }

    function BrowseEmployeeProjects(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseEmployeeProjects screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="EmployeeProjects" type="msls.VisualCollection" elementType="msls.application.EmployeeProject">
        /// Gets the employeeProjects for this screen.
        /// </field>
        /// <field name="Tracker" type="msls.VisualCollection" elementType="msls.application.EmployeeProject">
        /// Gets the tracker for this screen.
        /// </field>
        /// <field name="UserName" type="msls.VisualCollection" elementType="msls.application.EmployeeDetail">
        /// Gets the userName for this screen.
        /// </field>
        /// <field name="UtilizationPercentage" type="String">
        /// Gets or sets the utilizationPercentage for this screen.
        /// </field>
        /// <field name="TotalWorkedHours" type="String">
        /// Gets or sets the totalWorkedHours for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseEmployeeProjects.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseEmployeeProjects", parameters);
    }

    function ViewEmployeeProject(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewEmployeeProject screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="EmployeeProject" type="msls.application.EmployeeProject">
        /// Gets or sets the employeeProject for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewEmployeeProject.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewEmployeeProject", parameters);
    }

    function AddEditMonths(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditMonths screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Months" type="msls.application.Months">
        /// Gets or sets the months for this screen.
        /// </field>
        /// <field name="WorkingDay" type="String">
        /// Gets or sets the workingDay for this screen.
        /// </field>
        /// <field name="TotalHour" type="String">
        /// Gets or sets the totalHour for this screen.
        /// </field>
        /// <field name="NoOfDay" type="String">
        /// Gets or sets the noOfDay for this screen.
        /// </field>
        /// <field name="WeekDay" type="String">
        /// Gets or sets the weekDay for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditMonths.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditMonths", parameters);
    }

    function AddEditMonths1(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditMonths1 screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Months" type="msls.application.Months">
        /// Gets or sets the months for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditMonths1.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditMonths1", parameters);
    }

    function BrowseMonths(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseMonths screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Months" type="msls.VisualCollection" elementType="msls.application.Months">
        /// Gets the months for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseMonths.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseMonths", parameters);
    }

    function ViewMonths(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewMonths screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Months" type="msls.application.Months">
        /// Gets or sets the months for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewMonths.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewMonths", parameters);
    }

    function AddEditParametersSearchItem(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditParametersSearchItem screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="EmployeeProject" type="msls.application.EmployeeProject">
        /// Gets or sets the employeeProject for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditParametersSearchItem.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditParametersSearchItem", parameters);
    }

    function BrowseParametersSearch(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseParametersSearch screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Parameters" type="msls.VisualCollection" elementType="msls.application.EmployeeProject">
        /// Gets the parameters for this screen.
        /// </field>
        /// <field name="EmployeeProjectMonthName" type="String">
        /// Gets or sets the employeeProjectMonthName for this screen.
        /// </field>
        /// <field name="Property1" type="msls.application.Months">
        /// Gets or sets the property1 for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseParametersSearch.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseParametersSearch", parameters);
    }

    function ViewParametersSearchItem(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewParametersSearchItem screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="EmployeeProject" type="msls.application.EmployeeProject">
        /// Gets or sets the employeeProject for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewParametersSearchItem.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewParametersSearchItem", parameters);
    }

    function AddEditProjectDetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditProjectDetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProjectDetail" type="msls.application.ProjectDetail">
        /// Gets or sets the projectDetail for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditProjectDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditProjectDetail", parameters);
    }

    function AddEditProjectDetail1(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditProjectDetail1 screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProjectDetail" type="msls.application.ProjectDetail">
        /// Gets or sets the projectDetail for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditProjectDetail1.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditProjectDetail1", parameters);
    }

    function BrowseProjectDetails(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseProjectDetails screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProjectDetails" type="msls.VisualCollection" elementType="msls.application.ProjectDetail">
        /// Gets the projectDetails for this screen.
        /// </field>
        /// <field name="CandidateProject" type="msls.VisualCollection" elementType="msls.application.ProjectDetail">
        /// Gets the candidateProject for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseProjectDetails.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseProjectDetails", parameters);
    }

    function BrowseProjectDetails1(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseProjectDetails1 screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProjectDetails" type="msls.VisualCollection" elementType="msls.application.ProjectDetail">
        /// Gets the projectDetails for this screen.
        /// </field>
        /// <field name="CandidateProject" type="msls.VisualCollection" elementType="msls.application.ProjectDetail">
        /// Gets the candidateProject for this screen.
        /// </field>
        /// <field name="Property1" type="msls.application.ProjectDetail">
        /// Gets or sets the property1 for this screen.
        /// </field>
        /// <field name="GetSelfProjects" type="msls.VisualCollection" elementType="msls.application.ProjectDetail">
        /// Gets the getSelfProjects for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseProjectDetails1.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseProjectDetails1", parameters);
    }

    function ViewProjectDetail(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewProjectDetail screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProjectDetail" type="msls.application.ProjectDetail">
        /// Gets or sets the projectDetail for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewProjectDetail.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewProjectDetail", parameters);
    }

    function ViewProjectDetail1(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewProjectDetail1 screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProjectDetail" type="msls.application.ProjectDetail">
        /// Gets or sets the projectDetail for this screen.
        /// </field>
        /// <field name="EmployeeProjects" type="msls.VisualCollection" elementType="msls.application.EmployeeProject">
        /// Gets the employeeProjects for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewProjectDetail1.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewProjectDetail1", parameters);
    }

    function BrowseProjectReports(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseProjectReports screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProjectReports" type="msls.VisualCollection" elementType="msls.application.ProjectReport">
        /// Gets the projectReports for this screen.
        /// </field>
        /// <field name="ProjectName" type="String">
        /// Gets or sets the projectName for this screen.
        /// </field>
        /// <field name="ProjectReportsforUser" type="msls.VisualCollection" elementType="msls.application.ProjectReport">
        /// Gets the projectReportsforUser for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseProjectReports.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseProjectReports", parameters);
    }

    function ViewProjectReport(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewProjectReport screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProjectReport" type="msls.application.ProjectReport">
        /// Gets or sets the projectReport for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewProjectReport.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewProjectReport", parameters);
    }

    function AddEditProjectsInCompany(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditProjectsInCompany screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProjectsInCompany" type="msls.application.ProjectsInCompany">
        /// Gets or sets the projectsInCompany for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditProjectsInCompany.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditProjectsInCompany", parameters);
    }

    function BrowseProjectsInCompanies(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseProjectsInCompanies screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProjectsInCompanies" type="msls.VisualCollection" elementType="msls.application.ProjectsInCompany">
        /// Gets the projectsInCompanies for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseProjectsInCompanies.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseProjectsInCompanies", parameters);
    }

    function ViewProjectsInCompany(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewProjectsInCompany screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProjectsInCompany" type="msls.application.ProjectsInCompany">
        /// Gets or sets the projectsInCompany for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewProjectsInCompany.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewProjectsInCompany", parameters);
    }

    function BrowseTotalHoursProjectWise(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseTotalHoursProjectWise screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TotalHoursProjectWise" type="msls.VisualCollection" elementType="msls.application.TotalHoursProjectwiseforMonth">
        /// Gets the totalHoursProjectWise for this screen.
        /// </field>
        /// <field name="Property1" type="msls.application.ProjectDetail">
        /// Gets or sets the property1 for this screen.
        /// </field>
        /// <field name="GetSelfProjects" type="msls.VisualCollection" elementType="msls.application.ProjectDetail">
        /// Gets the getSelfProjects for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseTotalHoursProjectWise.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseTotalHoursProjectWise", parameters);
    }

    function ViewTotalHoursProjectWiseItem(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewTotalHoursProjectWiseItem screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TotalHoursProjectwiseforMonth" type="msls.application.TotalHoursProjectwiseforMonth">
        /// Gets or sets the totalHoursProjectwiseforMonth for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewTotalHoursProjectWiseItem.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewTotalHoursProjectWiseItem", parameters);
    }

    function AddEditViewReportee(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditViewReportee screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="EmployeeDetail" type="msls.application.EmployeeDetail">
        /// Gets or sets the employeeDetail for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditViewReportee.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditViewReportee", parameters);
    }

    function BrowseViewReportees(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseViewReportees screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ViewReportees" type="msls.VisualCollection" elementType="msls.application.EmployeeDetail">
        /// Gets the viewReportees for this screen.
        /// </field>
        /// <field name="EmpID" type="String">
        /// Gets or sets the empID for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseViewReportees.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseViewReportees", parameters);
    }

    function ViewViewReportee(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewViewReportee screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="EmployeeDetail" type="msls.application.EmployeeDetail">
        /// Gets or sets the employeeDetail for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewViewReportee.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewViewReportee", parameters);
    }

    function BrowseCompanySelfProjects(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseCompanySelfProjects screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="CompanySelfProjects" type="msls.VisualCollection" elementType="msls.application.CompanyProject">
        /// Gets the companySelfProjects for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseCompanySelfProjects.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseCompanySelfProjects", parameters);
    }

    function BrowseCompanyTeamMembers(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseCompanyTeamMembers screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Property1" type="String">
        /// Gets or sets the property1 for this screen.
        /// </field>
        /// <field name="CompanyTeamProjects" type="msls.VisualCollection" elementType="msls.application.CompanyTeamProject">
        /// Gets the companyTeamProjects for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseCompanyTeamMembers.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseCompanyTeamMembers", parameters);
    }

    function BrowseEmployeeProjectHours(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseEmployeeProjectHours screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="EmployeeProjectHours" type="msls.VisualCollection" elementType="msls.application.EmployeeProjectHour">
        /// Gets the employeeProjectHours for this screen.
        /// </field>
        /// <field name="ProjectName" type="String">
        /// Gets or sets the projectName for this screen.
        /// </field>
        /// <field name="EmpName" type="String">
        /// Gets or sets the empName for this screen.
        /// </field>
        /// <field name="ProjectManagerViewTeamHours" type="msls.VisualCollection" elementType="msls.application.ProjectManagerViewTeamHour">
        /// Gets the projectManagerViewTeamHours for this screen.
        /// </field>
        /// <field name="Property1" type="msls.application.Months">
        /// Gets or sets the property1 for this screen.
        /// </field>
        /// <field name="TotalHoursTeamMonthwises" type="msls.VisualCollection" elementType="msls.application.TotalHoursTeamMonthwise">
        /// Gets the totalHoursTeamMonthwises for this screen.
        /// </field>
        /// <field name="Property2" type="Date">
        /// Gets or sets the property2 for this screen.
        /// </field>
        /// <field name="Property3" type="Date">
        /// Gets or sets the property3 for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseEmployeeProjectHours.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseEmployeeProjectHours", parameters);
    }

    function BrowseHoursPerDays(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseHoursPerDays screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Property1" type="msls.application.Months">
        /// Gets or sets the property1 for this screen.
        /// </field>
        /// <field name="NoOfHoursPerDay" type="msls.VisualCollection" elementType="msls.application.HoursPerDay">
        /// Gets the noOfHoursPerDay for this screen.
        /// </field>
        /// <field name="c_Date" type="String">
        /// Gets or sets the c_Date for this screen.
        /// </field>
        /// <field name="EmpID" type="String">
        /// Gets or sets the empID for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseHoursPerDays.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseHoursPerDays", parameters);
    }

    function BrowseProjectsInDays(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseProjectsInDays screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProjectsInDays" type="msls.VisualCollection" elementType="msls.application.ProjectsInDay">
        /// Gets the projectsInDays for this screen.
        /// </field>
        /// <field name="c_Date" type="Date">
        /// Gets or sets the c_Date for this screen.
        /// </field>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseProjectsInDays.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseProjectsInDays", parameters);
    }

    function BrowseTracker(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseTracker screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Tracker" type="msls.VisualCollection" elementType="msls.application.EmployeeProject">
        /// Gets the tracker for this screen.
        /// </field>
        /// <field name="ProjectName" type="String">
        /// Gets or sets the projectName for this screen.
        /// </field>
        /// <field name="MonthName" type="String">
        /// Gets or sets the monthName for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseTracker.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseTracker", parameters);
    }

    function BrowseUtilization(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseUtilization screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Utilization" type="msls.VisualCollection" elementType="msls.application.UtilizationCalculation">
        /// Gets the utilization for this screen.
        /// </field>
        /// <field name="Parameters" type="msls.VisualCollection" elementType="msls.application.EmployeeProject">
        /// Gets the parameters for this screen.
        /// </field>
        /// <field name="Property1" type="msls.application.Months">
        /// Gets or sets the property1 for this screen.
        /// </field>
        /// <field name="Property2" type="msls.application.ProjectDetail">
        /// Gets or sets the property2 for this screen.
        /// </field>
        /// <field name="GetSelfProjects" type="msls.VisualCollection" elementType="msls.application.ProjectDetail">
        /// Gets the getSelfProjects for this screen.
        /// </field>
        /// <field name="FromDate" type="Date">
        /// Gets or sets the fromDate for this screen.
        /// </field>
        /// <field name="ToDate" type="Date">
        /// Gets or sets the toDate for this screen.
        /// </field>
        /// <field name="EmailList" type="msls.VisualCollection" elementType="msls.application.EmailDropdown">
        /// Gets the emailList for this screen.
        /// </field>
        /// <field name="dropdown" type="msls.application.EmailDropdown">
        /// Gets or sets the dropdown for this screen.
        /// </field>
        /// <field name="PMTeamProject" type="msls.application.PMTeamProject">
        /// Gets or sets the pMTeamProject for this screen.
        /// </field>
        /// <field name="PMTeamProjectList" type="msls.VisualCollection" elementType="msls.application.PMTeamProject">
        /// Gets the pMTeamProjectList for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseUtilization.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseUtilization", parameters);
    }

    function DetailsforProjectScore(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the DetailsforProjectScore screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="GetSelfProjects" type="msls.VisualCollection" elementType="msls.application.ProjectDetail">
        /// Gets the getSelfProjects for this screen.
        /// </field>
        /// <field name="ProjectName" type="String">
        /// Gets or sets the projectName for this screen.
        /// </field>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this screen.
        /// </field>
        /// <field name="details" type="msls.application.DetailsforProjectScore.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "DetailsforProjectScore", parameters);
    }

    function Home(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Home screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="LabText" type="String">
        /// Gets or sets the labText for this screen.
        /// </field>
        /// <field name="UserName" type="msls.VisualCollection" elementType="msls.application.EmployeeDetail">
        /// Gets the userName for this screen.
        /// </field>
        /// <field name="EmailMsg" type="String">
        /// Gets or sets the emailMsg for this screen.
        /// </field>
        /// <field name="details" type="msls.application.Home.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Home", parameters);
    }

    function ProjectScore(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ProjectScore screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ProjectScore1" type="msls.VisualCollection" elementType="msls.application.ComplexityandQualityShare">
        /// Gets the projectScore1 for this screen.
        /// </field>
        /// <field name="CandidateProjectScore" type="msls.VisualCollection" elementType="msls.application.TotalProjectScore">
        /// Gets the candidateProjectScore for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ProjectScore.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ProjectScore", parameters);
    }

    function Reports(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Reports screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.Reports.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Reports", parameters);
    }

    function UtilizationScore(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the UtilizationScore screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Utilization" type="msls.VisualCollection" elementType="msls.application.UtilizationCalculation">
        /// Gets the utilization for this screen.
        /// </field>
        /// <field name="AvgUtilization" type="msls.VisualCollection" elementType="msls.application.AvgUtilization">
        /// Gets the avgUtilization for this screen.
        /// </field>
        /// <field name="details" type="msls.application.UtilizationScore.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "UtilizationScore", parameters);
    }

    function ViewReporteeDetailsbyManager(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewReporteeDetailsbyManager screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ViewReporteeProjects" type="msls.VisualCollection" elementType="msls.application.EmployeeProject">
        /// Gets the viewReporteeProjects for this screen.
        /// </field>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this screen.
        /// </field>
        /// <field name="Property1" type="msls.application.ProjectDetail">
        /// Gets or sets the property1 for this screen.
        /// </field>
        /// <field name="ProjectDetails" type="msls.VisualCollection" elementType="msls.application.ProjectDetail">
        /// Gets the projectDetails for this screen.
        /// </field>
        /// <field name="Property2" type="msls.application.Months">
        /// Gets or sets the property2 for this screen.
        /// </field>
        /// <field name="UtilizationCalculations" type="msls.VisualCollection" elementType="msls.application.UtilizationCalculation">
        /// Gets the utilizationCalculations for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewReporteeDetailsbyManager.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewReporteeDetailsbyManager", parameters);
    }

    function WeeklyHours(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the WeeklyHours screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Tracker" type="msls.VisualCollection" elementType="msls.application.EmployeeProject">
        /// Gets the tracker for this screen.
        /// </field>
        /// <field name="ToDate" type="Date">
        /// Gets or sets the toDate for this screen.
        /// </field>
        /// <field name="FromDate" type="Date">
        /// Gets or sets the fromDate for this screen.
        /// </field>
        /// <field name="details" type="msls.application.WeeklyHours.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "WeeklyHours", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditAssignProject: $defineScreen(AddEditAssignProject, [
            { name: "AssignProject", kind: "local", type: lightSwitchApplication.AssignProject }
        ], [
        ]),

        BrowseAssignProjects: $defineScreen(BrowseAssignProjects, [
            {
                name: "AssignProjects", kind: "collection", elementType: lightSwitchApplication.AssignProject,
                createQuery: function () {
                    return this.dataWorkspace.UtilizationTrackerData.AssignProjects.expand("ProjectsInCompany").expand("EmployeeDetail");
                }
            }
        ], [
            { name: "Back" }
        ]),

        ViewAssignProject: $defineScreen(ViewAssignProject, [
            { name: "AssignProject", kind: "local", type: lightSwitchApplication.AssignProject }
        ], [
        ]),

        AddEditEmployeeDetail: $defineScreen(AddEditEmployeeDetail, [
            { name: "EmployeeDetail", kind: "local", type: lightSwitchApplication.EmployeeDetail },
            {
                name: "GetManagers", kind: "collection", elementType: lightSwitchApplication.EmployeeDetail,
                createQuery: function () {
                    return this.dataWorkspace.UtilizationTrackerData.GetManagers();
                }
            }
        ], [
            { name: "Back" }
        ]),

        BrowseEmployeeDetails: $defineScreen(BrowseEmployeeDetails, [
            {
                name: "EmployeeDetails", kind: "collection", elementType: lightSwitchApplication.EmployeeDetail,
                createQuery: function () {
                    return this.dataWorkspace.UtilizationTrackerData.EmployeeDetails.expand("EmployeeDetail1");
                }
            }
        ], [
            { name: "Back" }
        ]),

        ViewEmployeeDetail: $defineScreen(ViewEmployeeDetail, [
            { name: "EmployeeDetail", kind: "local", type: lightSwitchApplication.EmployeeDetail }
        ], [
            { name: "Back" }
        ]),

        AddEditEmployeeMonth: $defineScreen(AddEditEmployeeMonth, [
            { name: "EmployeeMonth", kind: "local", type: lightSwitchApplication.EmployeeMonth }
        ], [
            { name: "Back" }
        ]),

        BrowseEmployeeMonths: $defineScreen(BrowseEmployeeMonths, [
            {
                name: "EmployeeMonths", kind: "collection", elementType: lightSwitchApplication.EmployeeMonth,
                createQuery: function () {
                    return this.dataWorkspace.UtilizationTrackerData.EmployeeMonths;
                }
            },
            {
                name: "CandidateMonthDetails", kind: "collection", elementType: lightSwitchApplication.EmployeeMonth,
                createQuery: function () {
                    return this.dataWorkspace.UtilizationTrackerData.CandidateMonthDetails().expand("Months").expand("EmployeeDetail");
                }
            }
        ], [
            { name: "Back" }
        ]),

        ViewEmployeeMonth: $defineScreen(ViewEmployeeMonth, [
            { name: "EmployeeMonth", kind: "local", type: lightSwitchApplication.EmployeeMonth }
        ], [
            { name: "Back" }
        ]),

        AddEditEmployeeProject: $defineScreen(AddEditEmployeeProject, [
            { name: "EmployeeProject", kind: "local", type: lightSwitchApplication.EmployeeProject },
            {
                name: "GetSelfProjects", kind: "collection", elementType: lightSwitchApplication.ProjectDetail,
                createQuery: function () {
                    return this.dataWorkspace.UtilizationTrackerData.GetSelfProjects();
                }
            },
            { name: "Property1", kind: "local", type: lightSwitchApplication.Months },
            {
                name: "Months", kind: "collection", elementType: lightSwitchApplication.Months,
                createQuery: function () {
                    return this.dataWorkspace.UtilizationTrackerData.Months.filter("MonthName eq 'April'");
                }
            }
        ], [
            { name: "Back" }
        ]),

        BrowseEmployeeProjects: $defineScreen(BrowseEmployeeProjects, [
            {
                name: "EmployeeProjects", kind: "collection", elementType: lightSwitchApplication.EmployeeProject,
                createQuery: function () {
                    return this.dataWorkspace.UtilizationTrackerData.EmployeeProjects;
                }
            },
            {
                name: "Tracker", kind: "collection", elementType: lightSwitchApplication.EmployeeProject,
                createQuery: function () {
                    return this.dataWorkspace.UtilizationTrackerData.Tracker().orderBy("c_Date").expand("ProjectDetail").expand("Months");
                }
            },
            {
                name: "UserName", kind: "collection", elementType: lightSwitchApplication.EmployeeDetail,
                createQuery: function () {
                    return this.dataWorkspace.UtilizationTrackerData.UserName().expand("EmployeeDetail1");
                }
            },
            { name: "UtilizationPercentage", kind: "local", type: String },
            { name: "TotalWorkedHours", kind: "local", type: String }
        ], [
            { name: "Back" },
            { name: "MonthWise" }
        ]),

        ViewEmployeeProject: $defineScreen(ViewEmployeeProject, [
            { name: "EmployeeProject", kind: "local", type: lightSwitchApplication.EmployeeProject }
        ], [
            { name: "Back" }
        ]),

        AddEditMonths: $defineScreen(AddEditMonths, [
            { name: "Months", kind: "local", type: lightSwitchApplication.Months },
            { name: "WorkingDay", kind: "local", type: String },
            { name: "TotalHour", kind: "local", type: String },
            { name: "NoOfDay", kind: "local", type: String },
            { name: "WeekDay", kind: "local", type: String }
        ], [
            { name: "Back" }
        ]),

        AddEditMonths1: $defineScreen(AddEditMonths1, [
            { name: "Months", kind: "local", type: lightSwitchApplication.Months }
        ], [
        ]),

        BrowseMonths: $defineScreen(BrowseMonths, [
            {
                name: "Months", kind: "collection", elementType: lightSwitchApplication.Months,
                createQuery: function () {
                    return this.dataWorkspace.UtilizationTrackerData.Months.orderBy("MonthID");
                }
            }
        ], [
            { name: "Back" }
        ]),

        ViewMonths: $defineScreen(ViewMonths, [
            { name: "Months", kind: "local", type: lightSwitchApplication.Months }
        ], [
            { name: "Back" }
        ]),

        AddEditParametersSearchItem: $defineScreen(AddEditParametersSearchItem, [
            { name: "EmployeeProject", kind: "local", type: lightSwitchApplication.EmployeeProject }
        ], [
        ]),

        BrowseParametersSearch: $defineScreen(BrowseParametersSearch, [
            {
                name: "Parameters", kind: "collection", elementType: lightSwitchApplication.EmployeeProject,
                createQuery: function (MonthName, ProjectName) {
                    return this.dataWorkspace.UtilizationTrackerData.Parameters(MonthName, ProjectName).filter("" + ((MonthName === undefined || MonthName === null) ? "true" : "(Months/MonthName eq " + $toODataString(MonthName, "String?") + ")") + "").expand("ProjectDetail").expand("Months");
                }
            },
            { name: "EmployeeProjectMonthName", kind: "local", type: String },
            { name: "Property1", kind: "local", type: lightSwitchApplication.Months }
        ], [
        ]),

        ViewParametersSearchItem: $defineScreen(ViewParametersSearchItem, [
            { name: "EmployeeProject", kind: "local", type: lightSwitchApplication.EmployeeProject }
        ], [
        ]),

        AddEditProjectDetail: $defineScreen(AddEditProjectDetail, [
            { name: "ProjectDetail", kind: "local", type: lightSwitchApplication.ProjectDetail }
        ], [
            { name: "Back" },
            { name: "Method" },
            { name: "Add" }
        ]),

        AddEditProjectDetail1: $defineScreen(AddEditProjectDetail1, [
            { name: "ProjectDetail", kind: "local", type: lightSwitchApplication.ProjectDetail }
        ], [
        ]),

        BrowseProjectDetails: $defineScreen(BrowseProjectDetails, [
            {
                name: "ProjectDetails", kind: "collection", elementType: lightSwitchApplication.ProjectDetail,
                createQuery: function () {
                    return this.dataWorkspace.UtilizationTrackerData.ProjectDetails;
                }
            },
            {
                name: "CandidateProject", kind: "collection", elementType: lightSwitchApplication.ProjectDetail,
                createQuery: function () {
                    return this.dataWorkspace.UtilizationTrackerData.CandidateProject().orderByDescending("StartDate");
                }
            }
        ], [
            { name: "Back" },
            { name: "ViewTeam" }
        ]),

        BrowseProjectDetails1: $defineScreen(BrowseProjectDetails1, [
            {
                name: "ProjectDetails", kind: "collection", elementType: lightSwitchApplication.ProjectDetail,
                createQuery: function () {
                    return this.dataWorkspace.UtilizationTrackerData.ProjectDetails;
                }
            },
            {
                name: "CandidateProject", kind: "collection", elementType: lightSwitchApplication.ProjectDetail,
                createQuery: function (ProjectName) {
                    return this.dataWorkspace.UtilizationTrackerData.CandidateProject().filter("" + ((ProjectName === undefined || ProjectName === null) ? "true" : "(ProjectName eq " + $toODataString(ProjectName, "String?") + ")") + "").orderByDescending("StartDate");
                }
            },
            { name: "Property1", kind: "local", type: lightSwitchApplication.ProjectDetail },
            {
                name: "GetSelfProjects", kind: "collection", elementType: lightSwitchApplication.ProjectDetail,
                createQuery: function () {
                    return this.dataWorkspace.UtilizationTrackerData.GetSelfProjects();
                }
            }
        ], [
            { name: "Back" },
            { name: "View" }
        ]),

        ViewProjectDetail: $defineScreen(ViewProjectDetail, [
            { name: "ProjectDetail", kind: "local", type: lightSwitchApplication.ProjectDetail }
        ], [
            { name: "Back" }
        ]),

        ViewProjectDetail1: $defineScreen(ViewProjectDetail1, [
            { name: "ProjectDetail", kind: "local", type: lightSwitchApplication.ProjectDetail },
            {
                name: "EmployeeProjects", kind: "collection", elementType: lightSwitchApplication.EmployeeProject,
                getNavigationProperty: function () {
                    if (this.owner.ProjectDetail) {
                        return this.owner.ProjectDetail.details.properties.EmployeeProjects;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        BrowseProjectReports: $defineScreen(BrowseProjectReports, [
            {
                name: "ProjectReports", kind: "collection", elementType: lightSwitchApplication.ProjectReport,
                createQuery: function () {
                    return this.dataWorkspace.UtilizationTrackerData.ProjectReports;
                }
            },
            { name: "ProjectName", kind: "local", type: String },
            {
                name: "ProjectReportsforUser", kind: "collection", elementType: lightSwitchApplication.ProjectReport,
                createQuery: function (ProjectName) {
                    return this.dataWorkspace.UtilizationTrackerData.ProjectReportsforUser().filter("" + ((ProjectName === undefined || ProjectName === null) ? "false" : "(ProjectName eq " + $toODataString(ProjectName, "String?") + ")") + "").orderBy("ProjectName").thenBy("MonthName");
                }
            }
        ], [
            { name: "Back" },
            { name: "View" }
        ]),

        ViewProjectReport: $defineScreen(ViewProjectReport, [
            { name: "ProjectReport", kind: "local", type: lightSwitchApplication.ProjectReport }
        ], [
        ]),

        AddEditProjectsInCompany: $defineScreen(AddEditProjectsInCompany, [
            { name: "ProjectsInCompany", kind: "local", type: lightSwitchApplication.ProjectsInCompany }
        ], [
        ]),

        BrowseProjectsInCompanies: $defineScreen(BrowseProjectsInCompanies, [
            {
                name: "ProjectsInCompanies", kind: "collection", elementType: lightSwitchApplication.ProjectsInCompany,
                createQuery: function () {
                    return this.dataWorkspace.UtilizationTrackerData.ProjectsInCompanies;
                }
            }
        ], [
            { name: "AssignEmployeestoProject" },
            { name: "Back" }
        ]),

        ViewProjectsInCompany: $defineScreen(ViewProjectsInCompany, [
            { name: "ProjectsInCompany", kind: "local", type: lightSwitchApplication.ProjectsInCompany }
        ], [
        ]),

        BrowseTotalHoursProjectWise: $defineScreen(BrowseTotalHoursProjectWise, [
            {
                name: "TotalHoursProjectWise", kind: "collection", elementType: lightSwitchApplication.TotalHoursProjectwiseforMonth,
                createQuery: function (ProjectName) {
                    return this.dataWorkspace.UtilizationTrackerData.TotalHoursProjectWise().filter("" + ((ProjectName === undefined || ProjectName === null) ? "true" : "(ProjectName eq " + $toODataString(ProjectName, "String?") + ")") + "");
                }
            },
            { name: "Property1", kind: "local", type: lightSwitchApplication.ProjectDetail },
            {
                name: "GetSelfProjects", kind: "collection", elementType: lightSwitchApplication.ProjectDetail,
                createQuery: function () {
                    return this.dataWorkspace.UtilizationTrackerData.GetSelfProjects();
                }
            }
        ], [
            { name: "Back" }
        ]),

        ViewTotalHoursProjectWiseItem: $defineScreen(ViewTotalHoursProjectWiseItem, [
            { name: "TotalHoursProjectwiseforMonth", kind: "local", type: lightSwitchApplication.TotalHoursProjectwiseforMonth }
        ], [
        ]),

        AddEditViewReportee: $defineScreen(AddEditViewReportee, [
            { name: "EmployeeDetail", kind: "local", type: lightSwitchApplication.EmployeeDetail }
        ], [
            { name: "Back" }
        ]),

        BrowseViewReportees: $defineScreen(BrowseViewReportees, [
            {
                name: "ViewReportees", kind: "collection", elementType: lightSwitchApplication.EmployeeDetail,
                createQuery: function () {
                    return this.dataWorkspace.UtilizationTrackerData.ViewReportees().expand("EmployeeDetail1");
                }
            },
            { name: "EmpID", kind: "local", type: String }
        ], [
            { name: "Back" },
            { name: "View" }
        ]),

        ViewViewReportee: $defineScreen(ViewViewReportee, [
            { name: "EmployeeDetail", kind: "local", type: lightSwitchApplication.EmployeeDetail }
        ], [
            { name: "Back" }
        ]),

        BrowseCompanySelfProjects: $defineScreen(BrowseCompanySelfProjects, [
            {
                name: "CompanySelfProjects", kind: "collection", elementType: lightSwitchApplication.CompanyProject,
                createQuery: function () {
                    return this.dataWorkspace.UtilizationTrackerData.CompanySelfProjects();
                }
            }
        ], [
            { name: "Back" }
        ]),

        BrowseCompanyTeamMembers: $defineScreen(BrowseCompanyTeamMembers, [
            { name: "Property1", kind: "local", type: String },
            {
                name: "CompanyTeamProjects", kind: "collection", elementType: lightSwitchApplication.CompanyTeamProject,
                createQuery: function (ProjectName) {
                    return this.dataWorkspace.UtilizationTrackerData.CompanyTeamProjects.filter("" + ((ProjectName === undefined || ProjectName === null) ? "false" : "(ProjectName eq " + $toODataString(ProjectName, "String?") + ")") + "");
                }
            }
        ], [
            { name: "Back" }
        ]),

        BrowseEmployeeProjectHours: $defineScreen(BrowseEmployeeProjectHours, [
            {
                name: "EmployeeProjectHours", kind: "collection", elementType: lightSwitchApplication.EmployeeProjectHour,
                createQuery: function (ProjectName, EmpName, c_Date, c_Date1) {
                    return this.dataWorkspace.UtilizationTrackerData.EmployeeProjectHours.filter("(" + ((ProjectName === undefined || ProjectName === null) ? "false" : "(ProjectName eq " + $toODataString(ProjectName, "String?") + ")") + " and " + ((EmpName === undefined || EmpName === null) ? "false" : "(EmpName eq " + $toODataString(EmpName, "String?") + ")") + ") and " + ((c_Date === undefined || c_Date === null) ? "true" : ((c_Date1 === undefined || c_Date1 === null) ? "true" : "((c_Date ge " + $toODataString(c_Date, "DateTime?") + ") and (c_Date le " + $toODataString(c_Date1, "DateTime?") + "))")) + "");
                }
            },
            { name: "ProjectName", kind: "local", type: String },
            { name: "EmpName", kind: "local", type: String },
            {
                name: "ProjectManagerViewTeamHours", kind: "collection", elementType: lightSwitchApplication.ProjectManagerViewTeamHour,
                createQuery: function (EmpName, ProjectName) {
                    return this.dataWorkspace.UtilizationTrackerData.ProjectManagerViewTeamHours.filter("" + ((EmpName === undefined || EmpName === null) ? "false" : "(EmpName eq " + $toODataString(EmpName, "String?") + ")") + " and " + ((ProjectName === undefined || ProjectName === null) ? "false" : "(ProjectName eq " + $toODataString(ProjectName, "String?") + ")") + "");
                }
            },
            { name: "Property1", kind: "local", type: lightSwitchApplication.Months },
            {
                name: "TotalHoursTeamMonthwises", kind: "collection", elementType: lightSwitchApplication.TotalHoursTeamMonthwise,
                createQuery: function (EmpName, ProjectName, MonthName) {
                    return this.dataWorkspace.UtilizationTrackerData.TotalHoursTeamMonthwises.filter("(" + ((EmpName === undefined || EmpName === null) ? "false" : "(EmpName eq " + $toODataString(EmpName, "String?") + ")") + " and " + ((ProjectName === undefined || ProjectName === null) ? "false" : "(ProjectName eq " + $toODataString(ProjectName, "String?") + ")") + ") and " + ((MonthName === undefined || MonthName === null) ? "true" : "(MonthName eq " + $toODataString(MonthName, "String?") + ")") + "");
                }
            },
            { name: "Property2", kind: "local", type: Date },
            { name: "Property3", kind: "local", type: Date }
        ], [
            { name: "Back" }
        ]),

        BrowseHoursPerDays: $defineScreen(BrowseHoursPerDays, [
            { name: "Property1", kind: "local", type: lightSwitchApplication.Months },
            {
                name: "NoOfHoursPerDay", kind: "collection", elementType: lightSwitchApplication.HoursPerDay,
                createQuery: function (MonthName) {
                    return this.dataWorkspace.UtilizationTrackerData.NoOfHoursPerDay().filter("" + ((MonthName === undefined || MonthName === null) ? "true" : "(MonthName eq " + $toODataString(MonthName, "String?") + ")") + "");
                }
            },
            { name: "c_Date", kind: "local", type: String },
            { name: "EmpID", kind: "local", type: String }
        ], [
            { name: "Back" },
            { name: "View" }
        ]),

        BrowseProjectsInDays: $defineScreen(BrowseProjectsInDays, [
            {
                name: "ProjectsInDays", kind: "collection", elementType: lightSwitchApplication.ProjectsInDay,
                createQuery: function (c_Date, EmpID) {
                    return this.dataWorkspace.UtilizationTrackerData.ProjectsInDays.filter("" + ((c_Date === undefined || c_Date === null) ? "false" : "(c_Date eq " + $toODataString(c_Date, "DateTime?") + ")") + " and " + ((EmpID === undefined || EmpID === null) ? "false" : "(EmpID eq " + $toODataString(EmpID, "Int32?") + ")") + "");
                }
            },
            { name: "c_Date", kind: "local", type: Date },
            { name: "EmpID", kind: "local", type: Number }
        ], [
            { name: "Back" }
        ]),

        BrowseTracker: $defineScreen(BrowseTracker, [
            {
                name: "Tracker", kind: "collection", elementType: lightSwitchApplication.EmployeeProject,
                createQuery: function (ProjectName, MonthName) {
                    return this.dataWorkspace.UtilizationTrackerData.Tracker().filter("" + ((ProjectName === undefined || ProjectName === null) ? "false" : "(ProjectDetail/ProjectName eq " + $toODataString(ProjectName, "String?") + ")") + " and " + ((MonthName === undefined || MonthName === null) ? "false" : "(Months/MonthName eq " + $toODataString(MonthName, "String?") + ")") + "").orderBy("ProjectDetail/ProjectName").expand("ProjectDetail").expand("Months");
                }
            },
            { name: "ProjectName", kind: "local", type: String },
            { name: "MonthName", kind: "local", type: String }
        ], [
            { name: "Back" }
        ]),

        BrowseUtilization: $defineScreen(BrowseUtilization, [
            {
                name: "Utilization", kind: "collection", elementType: lightSwitchApplication.UtilizationCalculation,
                createQuery: function (MonthID) {
                    return this.dataWorkspace.UtilizationTrackerData.Utilization().filter("" + ((MonthID === undefined || MonthID === null) ? "true" : "(MonthID eq " + $toODataString(MonthID, "Int32?") + ")") + "");
                }
            },
            {
                name: "Parameters", kind: "collection", elementType: lightSwitchApplication.EmployeeProject,
                createQuery: function (MonthName, ProjectName, c_Date, c_Date1) {
                    return this.dataWorkspace.UtilizationTrackerData.Parameters(MonthName, ProjectName).filter("" + ((c_Date === undefined || c_Date === null) ? "true" : ((c_Date1 === undefined || c_Date1 === null) ? "true" : "((c_Date ge " + $toODataString(c_Date, "DateTime?") + ") and (c_Date le " + $toODataString(c_Date1, "DateTime?") + "))")) + "").orderByDescending("c_Date").expand("ProjectDetail").expand("Months");
                }
            },
            { name: "Property1", kind: "local", type: lightSwitchApplication.Months },
            { name: "Property2", kind: "local", type: lightSwitchApplication.ProjectDetail },
            {
                name: "GetSelfProjects", kind: "collection", elementType: lightSwitchApplication.ProjectDetail,
                createQuery: function () {
                    return this.dataWorkspace.UtilizationTrackerData.GetSelfProjects();
                }
            },
            { name: "FromDate", kind: "local", type: Date },
            { name: "ToDate", kind: "local", type: Date },
            {
                name: "EmailList", kind: "collection", elementType: lightSwitchApplication.EmailDropdown,
                createQuery: function () {
                    return this.dataWorkspace.UtilizationTrackerData.EmailList();
                }
            },
            { name: "dropdown", kind: "local", type: lightSwitchApplication.EmailDropdown },
            { name: "PMTeamProject", kind: "local", type: lightSwitchApplication.PMTeamProject },
            {
                name: "PMTeamProjectList", kind: "collection", elementType: lightSwitchApplication.PMTeamProject,
                createQuery: function () {
                    return this.dataWorkspace.UtilizationTrackerData.PMTeamProjectList();
                }
            }
        ], [
            { name: "Add" },
            { name: "Back" },
            { name: "WeeklyUT" },
            { name: "SendEmail" },
            { name: "OK" },
            { name: "Close" }
        ]),

        DetailsforProjectScore: $defineScreen(DetailsforProjectScore, [
            {
                name: "GetSelfProjects", kind: "collection", elementType: lightSwitchApplication.ProjectDetail,
                createQuery: function (ProjectName, EmpID) {
                    return this.dataWorkspace.UtilizationTrackerData.GetSelfProjects().filter("" + ((ProjectName === undefined || ProjectName === null) ? "false" : "(ProjectName eq " + $toODataString(ProjectName, "String?") + ")") + " and " + ((EmpID === undefined || EmpID === null) ? "false" : "(EmpID eq " + $toODataString(EmpID, "Int32?") + ")") + "");
                }
            },
            { name: "ProjectName", kind: "local", type: String },
            { name: "EmpID", kind: "local", type: Number }
        ], [
        ]),

        Home: $defineScreen(Home, [
            { name: "LabText", kind: "local", type: String },
            {
                name: "UserName", kind: "collection", elementType: lightSwitchApplication.EmployeeDetail,
                createQuery: function () {
                    return this.dataWorkspace.UtilizationTrackerData.UserName().expand("EmployeeDetail1");
                }
            },
            { name: "EmailMsg", kind: "local", type: String }
        ], [
            { name: "ViewTracker" },
            { name: "AddEmployee" },
            { name: "SignUp" },
            { name: "ViewReportees" },
            { name: "ProjectDetails" },
            { name: "AddMonth" },
            { name: "EmployeeMonths" },
            { name: "MyHome" },
            { name: "EmplyeeProject" },
            { name: "ViewEmployees" },
            { name: "Report" },
            { name: "AddEditUtilization" },
            { name: "ProjectWiseReport" },
            { name: "ProjectReport" },
            { name: "ProjectMembersReport" },
            { name: "AddProjects" },
            { name: "EmailSave" }
        ]),

        ProjectScore: $defineScreen(ProjectScore, [
            {
                name: "ProjectScore1", kind: "collection", elementType: lightSwitchApplication.ComplexityandQualityShare,
                createQuery: function () {
                    return this.dataWorkspace.UtilizationTrackerData.ProjectScore();
                }
            },
            {
                name: "CandidateProjectScore", kind: "collection", elementType: lightSwitchApplication.TotalProjectScore,
                createQuery: function () {
                    return this.dataWorkspace.UtilizationTrackerData.CandidateProjectScore();
                }
            }
        ], [
            { name: "Back" }
        ]),

        Reports: $defineScreen(Reports, [
        ], [
            { name: "ProjectWiseReport" },
            { name: "MonthandDateWiseReport" },
            { name: "Back" },
            { name: "ProjectScore" },
            { name: "UtilizationScore" }
        ]),

        UtilizationScore: $defineScreen(UtilizationScore, [
            {
                name: "Utilization", kind: "collection", elementType: lightSwitchApplication.UtilizationCalculation,
                createQuery: function () {
                    return this.dataWorkspace.UtilizationTrackerData.Utilization().orderBy("MonthName");
                }
            },
            {
                name: "AvgUtilization", kind: "collection", elementType: lightSwitchApplication.AvgUtilization,
                createQuery: function () {
                    return this.dataWorkspace.UtilizationTrackerData.AvgUtilization();
                }
            }
        ], [
            { name: "Back" }
        ]),

        ViewReporteeDetailsbyManager: $defineScreen(ViewReporteeDetailsbyManager, [
            {
                name: "ViewReporteeProjects", kind: "collection", elementType: lightSwitchApplication.EmployeeProject,
                createQuery: function (EmpID, ProjectName, MonthName) {
                    return this.dataWorkspace.UtilizationTrackerData.ViewReporteeProjects().filter("(" + ((EmpID === undefined || EmpID === null) ? "false" : "(EmpID eq " + $toODataString(EmpID, "Int32?") + ")") + " and " + ((ProjectName === undefined || ProjectName === null) ? "true" : "(ProjectDetail/ProjectName eq " + $toODataString(ProjectName, "String?") + ")") + ") and " + ((MonthName === undefined || MonthName === null) ? "true" : "(Months/MonthName eq " + $toODataString(MonthName, "String?") + ")") + "").orderByDescending("Months/MonthName").thenByDescending("c_Date").expand("ProjectDetail").expand("Months");
                }
            },
            { name: "EmpID", kind: "local", type: Number },
            { name: "Property1", kind: "local", type: lightSwitchApplication.ProjectDetail },
            {
                name: "ProjectDetails", kind: "collection", elementType: lightSwitchApplication.ProjectDetail,
                createQuery: function (EmpID) {
                    return this.dataWorkspace.UtilizationTrackerData.ProjectDetails.filter("" + ((EmpID === undefined || EmpID === null) ? "false" : "(EmpID eq " + $toODataString(EmpID, "Int32?") + ")") + "");
                }
            },
            { name: "Property2", kind: "local", type: lightSwitchApplication.Months },
            {
                name: "UtilizationCalculations", kind: "collection", elementType: lightSwitchApplication.UtilizationCalculation,
                createQuery: function (MonthName, EmpID) {
                    return this.dataWorkspace.UtilizationTrackerData.UtilizationCalculations.filter("" + ((MonthName === undefined || MonthName === null) ? "true" : "(MonthName eq " + $toODataString(MonthName, "String?") + ")") + " and " + ((EmpID === undefined || EmpID === null) ? "false" : "(EmpID eq " + $toODataString(EmpID, "Int32?") + ")") + "").orderBy("MonthName");
                }
            }
        ], [
            { name: "Back" }
        ]),

        WeeklyHours: $defineScreen(WeeklyHours, [
            {
                name: "Tracker", kind: "collection", elementType: lightSwitchApplication.EmployeeProject,
                createQuery: function (c_Date, c_Date1) {
                    return this.dataWorkspace.UtilizationTrackerData.Tracker().filter("" + ((c_Date === undefined || c_Date === null) ? "false" : ((c_Date1 === undefined || c_Date1 === null) ? "false" : "((c_Date ge " + $toODataString(c_Date, "DateTime?") + ") and (c_Date le " + $toODataString(c_Date1, "DateTime?") + "))")) + "").expand("ProjectDetail").expand("Months");
                }
            },
            { name: "ToDate", kind: "local", type: Date },
            { name: "FromDate", kind: "local", type: Date }
        ], [
            { name: "SendEmail" }
        ]),

        showAddEditAssignProject: $defineShowScreen(function showAddEditAssignProject(AssignProject, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditAssignProject screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditAssignProject", parameters, options);
        }),

        showBrowseAssignProjects: $defineShowScreen(function showBrowseAssignProjects(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseAssignProjects screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseAssignProjects", parameters, options);
        }),

        showViewAssignProject: $defineShowScreen(function showViewAssignProject(AssignProject, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewAssignProject screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewAssignProject", parameters, options);
        }),

        showAddEditEmployeeDetail: $defineShowScreen(function showAddEditEmployeeDetail(EmployeeDetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditEmployeeDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditEmployeeDetail", parameters, options);
        }),

        showBrowseEmployeeDetails: $defineShowScreen(function showBrowseEmployeeDetails(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseEmployeeDetails screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseEmployeeDetails", parameters, options);
        }),

        showViewEmployeeDetail: $defineShowScreen(function showViewEmployeeDetail(EmployeeDetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewEmployeeDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewEmployeeDetail", parameters, options);
        }),

        showAddEditEmployeeMonth: $defineShowScreen(function showAddEditEmployeeMonth(EmployeeMonth, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditEmployeeMonth screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditEmployeeMonth", parameters, options);
        }),

        showBrowseEmployeeMonths: $defineShowScreen(function showBrowseEmployeeMonths(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseEmployeeMonths screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseEmployeeMonths", parameters, options);
        }),

        showViewEmployeeMonth: $defineShowScreen(function showViewEmployeeMonth(EmployeeMonth, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewEmployeeMonth screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewEmployeeMonth", parameters, options);
        }),

        showAddEditEmployeeProject: $defineShowScreen(function showAddEditEmployeeProject(EmployeeProject, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditEmployeeProject screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditEmployeeProject", parameters, options);
        }),

        showBrowseEmployeeProjects: $defineShowScreen(function showBrowseEmployeeProjects(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseEmployeeProjects screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseEmployeeProjects", parameters, options);
        }),

        showViewEmployeeProject: $defineShowScreen(function showViewEmployeeProject(EmployeeProject, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewEmployeeProject screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewEmployeeProject", parameters, options);
        }),

        showAddEditMonths: $defineShowScreen(function showAddEditMonths(Months, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditMonths screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditMonths", parameters, options);
        }),

        showAddEditMonths1: $defineShowScreen(function showAddEditMonths1(Months, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditMonths1 screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditMonths1", parameters, options);
        }),

        showBrowseMonths: $defineShowScreen(function showBrowseMonths(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseMonths screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseMonths", parameters, options);
        }),

        showViewMonths: $defineShowScreen(function showViewMonths(Months, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewMonths screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewMonths", parameters, options);
        }),

        showAddEditParametersSearchItem: $defineShowScreen(function showAddEditParametersSearchItem(EmployeeProject, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditParametersSearchItem screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditParametersSearchItem", parameters, options);
        }),

        showBrowseParametersSearch: $defineShowScreen(function showBrowseParametersSearch(Property1, options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseParametersSearch screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("BrowseParametersSearch", parameters, options);
        }),

        showViewParametersSearchItem: $defineShowScreen(function showViewParametersSearchItem(EmployeeProject, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewParametersSearchItem screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewParametersSearchItem", parameters, options);
        }),

        showAddEditProjectDetail: $defineShowScreen(function showAddEditProjectDetail(ProjectDetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditProjectDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditProjectDetail", parameters, options);
        }),

        showAddEditProjectDetail1: $defineShowScreen(function showAddEditProjectDetail1(ProjectDetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditProjectDetail1 screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditProjectDetail1", parameters, options);
        }),

        showBrowseProjectDetails: $defineShowScreen(function showBrowseProjectDetails(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseProjectDetails screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseProjectDetails", parameters, options);
        }),

        showBrowseProjectDetails1: $defineShowScreen(function showBrowseProjectDetails1(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseProjectDetails1 screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseProjectDetails1", parameters, options);
        }),

        showViewProjectDetail: $defineShowScreen(function showViewProjectDetail(ProjectDetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewProjectDetail screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewProjectDetail", parameters, options);
        }),

        showViewProjectDetail1: $defineShowScreen(function showViewProjectDetail1(ProjectDetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewProjectDetail1 screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewProjectDetail1", parameters, options);
        }),

        showBrowseProjectReports: $defineShowScreen(function showBrowseProjectReports(ProjectName, options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseProjectReports screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("BrowseProjectReports", parameters, options);
        }),

        showViewProjectReport: $defineShowScreen(function showViewProjectReport(ProjectReport, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewProjectReport screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewProjectReport", parameters, options);
        }),

        showAddEditProjectsInCompany: $defineShowScreen(function showAddEditProjectsInCompany(ProjectsInCompany, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditProjectsInCompany screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditProjectsInCompany", parameters, options);
        }),

        showBrowseProjectsInCompanies: $defineShowScreen(function showBrowseProjectsInCompanies(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseProjectsInCompanies screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseProjectsInCompanies", parameters, options);
        }),

        showViewProjectsInCompany: $defineShowScreen(function showViewProjectsInCompany(ProjectsInCompany, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewProjectsInCompany screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewProjectsInCompany", parameters, options);
        }),

        showBrowseTotalHoursProjectWise: $defineShowScreen(function showBrowseTotalHoursProjectWise(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseTotalHoursProjectWise screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseTotalHoursProjectWise", parameters, options);
        }),

        showViewTotalHoursProjectWiseItem: $defineShowScreen(function showViewTotalHoursProjectWiseItem(TotalHoursProjectwiseforMonth, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewTotalHoursProjectWiseItem screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewTotalHoursProjectWiseItem", parameters, options);
        }),

        showAddEditViewReportee: $defineShowScreen(function showAddEditViewReportee(EmployeeDetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditViewReportee screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditViewReportee", parameters, options);
        }),

        showBrowseViewReportees: $defineShowScreen(function showBrowseViewReportees(EmpID, options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseViewReportees screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("BrowseViewReportees", parameters, options);
        }),

        showViewViewReportee: $defineShowScreen(function showViewViewReportee(EmployeeDetail, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewViewReportee screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewViewReportee", parameters, options);
        }),

        showBrowseCompanySelfProjects: $defineShowScreen(function showBrowseCompanySelfProjects(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseCompanySelfProjects screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseCompanySelfProjects", parameters, options);
        }),

        showBrowseCompanyTeamMembers: $defineShowScreen(function showBrowseCompanyTeamMembers(Property1, options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseCompanyTeamMembers screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("BrowseCompanyTeamMembers", parameters, options);
        }),

        showBrowseEmployeeProjectHours: $defineShowScreen(function showBrowseEmployeeProjectHours(ProjectName, EmpName, options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseEmployeeProjectHours screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 2);
            return lightSwitchApplication.showScreen("BrowseEmployeeProjectHours", parameters, options);
        }),

        showBrowseHoursPerDays: $defineShowScreen(function showBrowseHoursPerDays(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseHoursPerDays screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseHoursPerDays", parameters, options);
        }),

        showBrowseProjectsInDays: $defineShowScreen(function showBrowseProjectsInDays(c_Date, EmpID, options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseProjectsInDays screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 2);
            return lightSwitchApplication.showScreen("BrowseProjectsInDays", parameters, options);
        }),

        showBrowseTracker: $defineShowScreen(function showBrowseTracker(ProjectName, MonthName, options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseTracker screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 2);
            return lightSwitchApplication.showScreen("BrowseTracker", parameters, options);
        }),

        showBrowseUtilization: $defineShowScreen(function showBrowseUtilization(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseUtilization screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseUtilization", parameters, options);
        }),

        showDetailsforProjectScore: $defineShowScreen(function showDetailsforProjectScore(ProjectName, EmpID, options) {
            /// <summary>
            /// Asynchronously navigates forward to the DetailsforProjectScore screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 2);
            return lightSwitchApplication.showScreen("DetailsforProjectScore", parameters, options);
        }),

        showHome: $defineShowScreen(function showHome(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Home screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Home", parameters, options);
        }),

        showProjectScore: $defineShowScreen(function showProjectScore(options) {
            /// <summary>
            /// Asynchronously navigates forward to the ProjectScore screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("ProjectScore", parameters, options);
        }),

        showReports: $defineShowScreen(function showReports(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Reports screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Reports", parameters, options);
        }),

        showUtilizationScore: $defineShowScreen(function showUtilizationScore(options) {
            /// <summary>
            /// Asynchronously navigates forward to the UtilizationScore screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("UtilizationScore", parameters, options);
        }),

        showViewReporteeDetailsbyManager: $defineShowScreen(function showViewReporteeDetailsbyManager(EmpID, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewReporteeDetailsbyManager screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewReporteeDetailsbyManager", parameters, options);
        }),

        showWeeklyHours: $defineShowScreen(function showWeeklyHours(ToDate, FromDate, options) {
            /// <summary>
            /// Asynchronously navigates forward to the WeeklyHours screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 2);
            return lightSwitchApplication.showScreen("WeeklyHours", parameters, options);
        })

    });

}(msls.application));
