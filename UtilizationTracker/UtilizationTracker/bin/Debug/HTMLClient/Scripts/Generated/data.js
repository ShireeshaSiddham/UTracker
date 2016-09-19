/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function AssignProject(entitySet) {
        /// <summary>
        /// Represents the AssignProject entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this assignProject.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this assignProject.
        /// </field>
        /// <field name="EmpRole" type="String">
        /// Gets or sets the empRole for this assignProject.
        /// </field>
        /// <field name="EmployeeDetail" type="msls.application.EmployeeDetail">
        /// Gets or sets the employeeDetail for this assignProject.
        /// </field>
        /// <field name="ProjectsInCompany" type="msls.application.ProjectsInCompany">
        /// Gets or sets the projectsInCompany for this assignProject.
        /// </field>
        /// <field name="ProjectType" type="String">
        /// Gets or sets the projectType for this assignProject.
        /// </field>
        /// <field name="details" type="msls.application.AssignProject.Details">
        /// Gets the details for this assignProject.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function AvgUtilization(entitySet) {
        /// <summary>
        /// Represents the AvgUtilization entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this avgUtilization.
        /// </param>
        /// <field name="AvgUtilization1" type="String">
        /// Gets or sets the avgUtilization1 for this avgUtilization.
        /// </field>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this avgUtilization.
        /// </field>
        /// <field name="details" type="msls.application.AvgUtilization.Details">
        /// Gets the details for this avgUtilization.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function CompanyProject(entitySet) {
        /// <summary>
        /// Represents the CompanyProject entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this companyProject.
        /// </param>
        /// <field name="ProjectName" type="String">
        /// Gets or sets the projectName for this companyProject.
        /// </field>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this companyProject.
        /// </field>
        /// <field name="EmpRole" type="String">
        /// Gets or sets the empRole for this companyProject.
        /// </field>
        /// <field name="ProjectType" type="String">
        /// Gets or sets the projectType for this companyProject.
        /// </field>
        /// <field name="ProjectID" type="Number">
        /// Gets or sets the projectID for this companyProject.
        /// </field>
        /// <field name="Expr1" type="Number">
        /// Gets or sets the expr1 for this companyProject.
        /// </field>
        /// <field name="details" type="msls.application.CompanyProject.Details">
        /// Gets the details for this companyProject.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function CompanyTeamProject(entitySet) {
        /// <summary>
        /// Represents the CompanyTeamProject entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this companyTeamProject.
        /// </param>
        /// <field name="EmpName" type="String">
        /// Gets or sets the empName for this companyTeamProject.
        /// </field>
        /// <field name="ProjectID" type="Number">
        /// Gets or sets the projectID for this companyTeamProject.
        /// </field>
        /// <field name="ProjectName" type="String">
        /// Gets or sets the projectName for this companyTeamProject.
        /// </field>
        /// <field name="ComplexityDifficultyLevel" type="String">
        /// Gets or sets the complexityDifficultyLevel for this companyTeamProject.
        /// </field>
        /// <field name="ComplexityScope" type="String">
        /// Gets or sets the complexityScope for this companyTeamProject.
        /// </field>
        /// <field name="ProjectType" type="String">
        /// Gets or sets the projectType for this companyTeamProject.
        /// </field>
        /// <field name="ProjectStatus" type="String">
        /// Gets or sets the projectStatus for this companyTeamProject.
        /// </field>
        /// <field name="StartDate" type="Date">
        /// Gets or sets the startDate for this companyTeamProject.
        /// </field>
        /// <field name="EndDate" type="Date">
        /// Gets or sets the endDate for this companyTeamProject.
        /// </field>
        /// <field name="ComplexityAvg" type="String">
        /// Gets or sets the complexityAvg for this companyTeamProject.
        /// </field>
        /// <field name="QualityPMRating" type="String">
        /// Gets or sets the qualityPMRating for this companyTeamProject.
        /// </field>
        /// <field name="QualityPeerReview" type="String">
        /// Gets or sets the qualityPeerReview for this companyTeamProject.
        /// </field>
        /// <field name="QualityProjectDuration" type="String">
        /// Gets or sets the qualityProjectDuration for this companyTeamProject.
        /// </field>
        /// <field name="QualityAverage" type="String">
        /// Gets or sets the qualityAverage for this companyTeamProject.
        /// </field>
        /// <field name="AssignProjectID" type="Number">
        /// Gets or sets the assignProjectID for this companyTeamProject.
        /// </field>
        /// <field name="details" type="msls.application.CompanyTeamProject.Details">
        /// Gets the details for this companyTeamProject.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ComplexityandQualityShare(entitySet) {
        /// <summary>
        /// Represents the ComplexityandQualityShare entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this complexityandQualityShare.
        /// </param>
        /// <field name="ProjectName" type="String">
        /// Gets or sets the projectName for this complexityandQualityShare.
        /// </field>
        /// <field name="TotalHours" type="String">
        /// Gets or sets the totalHours for this complexityandQualityShare.
        /// </field>
        /// <field name="ProjectShare" type="String">
        /// Gets or sets the projectShare for this complexityandQualityShare.
        /// </field>
        /// <field name="ComplexityShare" type="String">
        /// Gets or sets the complexityShare for this complexityandQualityShare.
        /// </field>
        /// <field name="QualityShare" type="String">
        /// Gets or sets the qualityShare for this complexityandQualityShare.
        /// </field>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this complexityandQualityShare.
        /// </field>
        /// <field name="ProjectScore" type="String">
        /// Gets or sets the projectScore for this complexityandQualityShare.
        /// </field>
        /// <field name="ComplexityAvg" type="String">
        /// Gets or sets the complexityAvg for this complexityandQualityShare.
        /// </field>
        /// <field name="QualityAverage" type="String">
        /// Gets or sets the qualityAverage for this complexityandQualityShare.
        /// </field>
        /// <field name="ComplexityDifficultyLevel" type="String">
        /// Gets or sets the complexityDifficultyLevel for this complexityandQualityShare.
        /// </field>
        /// <field name="ComplexityScope" type="String">
        /// Gets or sets the complexityScope for this complexityandQualityShare.
        /// </field>
        /// <field name="QualityPMRating" type="String">
        /// Gets or sets the qualityPMRating for this complexityandQualityShare.
        /// </field>
        /// <field name="QualityPeerReview" type="String">
        /// Gets or sets the qualityPeerReview for this complexityandQualityShare.
        /// </field>
        /// <field name="QualityProjectDuration" type="String">
        /// Gets or sets the qualityProjectDuration for this complexityandQualityShare.
        /// </field>
        /// <field name="TotalofallProjects" type="String">
        /// Gets or sets the totalofallProjects for this complexityandQualityShare.
        /// </field>
        /// <field name="details" type="msls.application.ComplexityandQualityShare.Details">
        /// Gets the details for this complexityandQualityShare.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function DistinctProject(entitySet) {
        /// <summary>
        /// Represents the DistinctProject entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this distinctProject.
        /// </param>
        /// <field name="ProjectName" type="String">
        /// Gets or sets the projectName for this distinctProject.
        /// </field>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this distinctProject.
        /// </field>
        /// <field name="ProjectID" type="Number">
        /// Gets or sets the projectID for this distinctProject.
        /// </field>
        /// <field name="ProjectManagerID" type="Number">
        /// Gets or sets the projectManagerID for this distinctProject.
        /// </field>
        /// <field name="Expr1" type="String">
        /// Gets or sets the expr1 for this distinctProject.
        /// </field>
        /// <field name="Expr2" type="Number">
        /// Gets or sets the expr2 for this distinctProject.
        /// </field>
        /// <field name="Expr3" type="Number">
        /// Gets or sets the expr3 for this distinctProject.
        /// </field>
        /// <field name="ComplexityDifficultyLevel" type="String">
        /// Gets or sets the complexityDifficultyLevel for this distinctProject.
        /// </field>
        /// <field name="ComplexityScope" type="String">
        /// Gets or sets the complexityScope for this distinctProject.
        /// </field>
        /// <field name="ProjectType" type="String">
        /// Gets or sets the projectType for this distinctProject.
        /// </field>
        /// <field name="ProjectStatus" type="String">
        /// Gets or sets the projectStatus for this distinctProject.
        /// </field>
        /// <field name="StartDate" type="Date">
        /// Gets or sets the startDate for this distinctProject.
        /// </field>
        /// <field name="EndDate" type="Date">
        /// Gets or sets the endDate for this distinctProject.
        /// </field>
        /// <field name="ComplexityAvg" type="String">
        /// Gets or sets the complexityAvg for this distinctProject.
        /// </field>
        /// <field name="QualityPMRating" type="String">
        /// Gets or sets the qualityPMRating for this distinctProject.
        /// </field>
        /// <field name="QualityPeerReview" type="String">
        /// Gets or sets the qualityPeerReview for this distinctProject.
        /// </field>
        /// <field name="QualityProjectDuration" type="String">
        /// Gets or sets the qualityProjectDuration for this distinctProject.
        /// </field>
        /// <field name="QualityAverage" type="String">
        /// Gets or sets the qualityAverage for this distinctProject.
        /// </field>
        /// <field name="EmpName" type="String">
        /// Gets or sets the empName for this distinctProject.
        /// </field>
        /// <field name="details" type="msls.application.DistinctProject.Details">
        /// Gets the details for this distinctProject.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function EmailDropdown(entitySet) {
        /// <summary>
        /// Represents the EmailDropdown entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this emailDropdown.
        /// </param>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this emailDropdown.
        /// </field>
        /// <field name="ManagerID" type="Number">
        /// Gets or sets the managerID for this emailDropdown.
        /// </field>
        /// <field name="ManagerName" type="String">
        /// Gets or sets the managerName for this emailDropdown.
        /// </field>
        /// <field name="EmpName" type="String">
        /// Gets or sets the empName for this emailDropdown.
        /// </field>
        /// <field name="details" type="msls.application.EmailDropdown.Details">
        /// Gets the details for this emailDropdown.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function EmployeeDetail(entitySet) {
        /// <summary>
        /// Represents the EmployeeDetail entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this employeeDetail.
        /// </param>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this employeeDetail.
        /// </field>
        /// <field name="EmpName" type="String">
        /// Gets or sets the empName for this employeeDetail.
        /// </field>
        /// <field name="Designation" type="String">
        /// Gets or sets the designation for this employeeDetail.
        /// </field>
        /// <field name="Email" type="String">
        /// Gets or sets the email for this employeeDetail.
        /// </field>
        /// <field name="UserName" type="String">
        /// Gets or sets the userName for this employeeDetail.
        /// </field>
        /// <field name="EmployeeDetails" type="msls.EntityCollection" elementType="msls.application.EmployeeDetail">
        /// Gets the employeeDetails for this employeeDetail.
        /// </field>
        /// <field name="EmployeeDetail1" type="msls.application.EmployeeDetail">
        /// Gets or sets the employeeDetail1 for this employeeDetail.
        /// </field>
        /// <field name="EmployeeMonths" type="msls.EntityCollection" elementType="msls.application.EmployeeMonth">
        /// Gets the employeeMonths for this employeeDetail.
        /// </field>
        /// <field name="Role" type="String">
        /// Gets or sets the role for this employeeDetail.
        /// </field>
        /// <field name="AssignProjects" type="msls.EntityCollection" elementType="msls.application.AssignProject">
        /// Gets the assignProjects for this employeeDetail.
        /// </field>
        /// <field name="details" type="msls.application.EmployeeDetail.Details">
        /// Gets the details for this employeeDetail.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function EmployeeMonth(entitySet) {
        /// <summary>
        /// Represents the EmployeeMonth entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this employeeMonth.
        /// </param>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this employeeMonth.
        /// </field>
        /// <field name="MonthID" type="Number">
        /// Gets or sets the monthID for this employeeMonth.
        /// </field>
        /// <field name="NoOfLeaves" type="Number">
        /// Gets or sets the noOfLeaves for this employeeMonth.
        /// </field>
        /// <field name="EmployeeDetail" type="msls.application.EmployeeDetail">
        /// Gets or sets the employeeDetail for this employeeMonth.
        /// </field>
        /// <field name="Months" type="msls.application.Months">
        /// Gets or sets the months for this employeeMonth.
        /// </field>
        /// <field name="details" type="msls.application.EmployeeMonth.Details">
        /// Gets the details for this employeeMonth.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function EmployeeProjectHour(entitySet) {
        /// <summary>
        /// Represents the EmployeeProjectHour entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this employeeProjectHour.
        /// </param>
        /// <field name="ProjectName" type="String">
        /// Gets or sets the projectName for this employeeProjectHour.
        /// </field>
        /// <field name="SubProject" type="String">
        /// Gets or sets the subProject for this employeeProjectHour.
        /// </field>
        /// <field name="ProjectID" type="Number">
        /// Gets or sets the projectID for this employeeProjectHour.
        /// </field>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this employeeProjectHour.
        /// </field>
        /// <field name="TaskID" type="Number">
        /// Gets or sets the taskID for this employeeProjectHour.
        /// </field>
        /// <field name="c_Date" type="Date">
        /// Gets or sets the c_Date for this employeeProjectHour.
        /// </field>
        /// <field name="Hours" type="String">
        /// Gets or sets the hours for this employeeProjectHour.
        /// </field>
        /// <field name="MonthName" type="String">
        /// Gets or sets the monthName for this employeeProjectHour.
        /// </field>
        /// <field name="EmpName" type="String">
        /// Gets or sets the empName for this employeeProjectHour.
        /// </field>
        /// <field name="details" type="msls.application.EmployeeProjectHour.Details">
        /// Gets the details for this employeeProjectHour.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function EmployeeProject(entitySet) {
        /// <summary>
        /// Represents the EmployeeProject entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this employeeProject.
        /// </param>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this employeeProject.
        /// </field>
        /// <field name="ProjectID" type="Number">
        /// Gets or sets the projectID for this employeeProject.
        /// </field>
        /// <field name="TaskID" type="Number">
        /// Gets or sets the taskID for this employeeProject.
        /// </field>
        /// <field name="SubProject" type="String">
        /// Gets or sets the subProject for this employeeProject.
        /// </field>
        /// <field name="c_Date" type="Date">
        /// Gets or sets the c_Date for this employeeProject.
        /// </field>
        /// <field name="Hours" type="String">
        /// Gets or sets the hours for this employeeProject.
        /// </field>
        /// <field name="Months" type="msls.application.Months">
        /// Gets or sets the months for this employeeProject.
        /// </field>
        /// <field name="ProjectDetail" type="msls.application.ProjectDetail">
        /// Gets or sets the projectDetail for this employeeProject.
        /// </field>
        /// <field name="details" type="msls.application.EmployeeProject.Details">
        /// Gets the details for this employeeProject.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function GetDateParameter(entitySet) {
        /// <summary>
        /// Represents the GetDateParameter entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this getDateParameter.
        /// </param>
        /// <field name="c_Date" type="Date">
        /// Gets or sets the c_Date for this getDateParameter.
        /// </field>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this getDateParameter.
        /// </field>
        /// <field name="details" type="msls.application.GetDateParameter.Details">
        /// Gets the details for this getDateParameter.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function HoursPerDay(entitySet) {
        /// <summary>
        /// Represents the HoursPerDay entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this hoursPerDay.
        /// </param>
        /// <field name="c_Date" type="Date">
        /// Gets or sets the c_Date for this hoursPerDay.
        /// </field>
        /// <field name="MonthName" type="String">
        /// Gets or sets the monthName for this hoursPerDay.
        /// </field>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this hoursPerDay.
        /// </field>
        /// <field name="Expr1" type="String">
        /// Gets or sets the expr1 for this hoursPerDay.
        /// </field>
        /// <field name="details" type="msls.application.HoursPerDay.Details">
        /// Gets the details for this hoursPerDay.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Months(entitySet) {
        /// <summary>
        /// Represents the Months entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this months.
        /// </param>
        /// <field name="MonthID" type="Number">
        /// Gets or sets the monthID for this months.
        /// </field>
        /// <field name="MonthName" type="String">
        /// Gets or sets the monthName for this months.
        /// </field>
        /// <field name="NoOfDays" type="Number">
        /// Gets or sets the noOfDays for this months.
        /// </field>
        /// <field name="WeekDays" type="Number">
        /// Gets or sets the weekDays for this months.
        /// </field>
        /// <field name="EmployeeMonths" type="msls.EntityCollection" elementType="msls.application.EmployeeMonth">
        /// Gets the employeeMonths for this months.
        /// </field>
        /// <field name="EmployeeProjects" type="msls.EntityCollection" elementType="msls.application.EmployeeProject">
        /// Gets the employeeProjects for this months.
        /// </field>
        /// <field name="Holidays" type="Number">
        /// Gets or sets the holidays for this months.
        /// </field>
        /// <field name="TotalHours" type="Number">
        /// Gets or sets the totalHours for this months.
        /// </field>
        /// <field name="WorkingDays" type="Number">
        /// Gets or sets the workingDays for this months.
        /// </field>
        /// <field name="Year" type="Number">
        /// Gets or sets the year for this months.
        /// </field>
        /// <field name="details" type="msls.application.Months.Details">
        /// Gets the details for this months.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function PMTeamProject(entitySet) {
        /// <summary>
        /// Represents the PMTeamProject entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this pMTeamProject.
        /// </param>
        /// <field name="ManagerName" type="String">
        /// Gets or sets the managerName for this pMTeamProject.
        /// </field>
        /// <field name="ProjectName" type="String">
        /// Gets or sets the projectName for this pMTeamProject.
        /// </field>
        /// <field name="EmpName" type="String">
        /// Gets or sets the empName for this pMTeamProject.
        /// </field>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this pMTeamProject.
        /// </field>
        /// <field name="ManagerID" type="Number">
        /// Gets or sets the managerID for this pMTeamProject.
        /// </field>
        /// <field name="ProjectID" type="Number">
        /// Gets or sets the projectID for this pMTeamProject.
        /// </field>
        /// <field name="KeyField" type="String">
        /// Gets or sets the keyField for this pMTeamProject.
        /// </field>
        /// <field name="details" type="msls.application.PMTeamProject.Details">
        /// Gets the details for this pMTeamProject.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ProjectDetail(entitySet) {
        /// <summary>
        /// Represents the ProjectDetail entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this projectDetail.
        /// </param>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this projectDetail.
        /// </field>
        /// <field name="ProjectID" type="Number">
        /// Gets or sets the projectID for this projectDetail.
        /// </field>
        /// <field name="ProjectName" type="String">
        /// Gets or sets the projectName for this projectDetail.
        /// </field>
        /// <field name="ProjectType" type="String">
        /// Gets or sets the projectType for this projectDetail.
        /// </field>
        /// <field name="ProjectStatus" type="String">
        /// Gets or sets the projectStatus for this projectDetail.
        /// </field>
        /// <field name="StartDate" type="Date">
        /// Gets or sets the startDate for this projectDetail.
        /// </field>
        /// <field name="EndDate" type="Date">
        /// Gets or sets the endDate for this projectDetail.
        /// </field>
        /// <field name="EmployeeProjects" type="msls.EntityCollection" elementType="msls.application.EmployeeProject">
        /// Gets the employeeProjects for this projectDetail.
        /// </field>
        /// <field name="ComplexityDifficultyLevel" type="String">
        /// Gets or sets the complexityDifficultyLevel for this projectDetail.
        /// </field>
        /// <field name="ComplexityScope" type="String">
        /// Gets or sets the complexityScope for this projectDetail.
        /// </field>
        /// <field name="ComplexityAvg" type="String">
        /// Gets or sets the complexityAvg for this projectDetail.
        /// </field>
        /// <field name="QualityPMRating" type="String">
        /// Gets or sets the qualityPMRating for this projectDetail.
        /// </field>
        /// <field name="QualityPeerReview" type="String">
        /// Gets or sets the qualityPeerReview for this projectDetail.
        /// </field>
        /// <field name="QualityProjectDuration" type="String">
        /// Gets or sets the qualityProjectDuration for this projectDetail.
        /// </field>
        /// <field name="QualityAverage" type="String">
        /// Gets or sets the qualityAverage for this projectDetail.
        /// </field>
        /// <field name="ProjectsInCompany" type="msls.application.ProjectsInCompany">
        /// Gets or sets the projectsInCompany for this projectDetail.
        /// </field>
        /// <field name="details" type="msls.application.ProjectDetail.Details">
        /// Gets the details for this projectDetail.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ProjectManagerViewTeamHour(entitySet) {
        /// <summary>
        /// Represents the ProjectManagerViewTeamHour entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this projectManagerViewTeamHour.
        /// </param>
        /// <field name="EmpName" type="String">
        /// Gets or sets the empName for this projectManagerViewTeamHour.
        /// </field>
        /// <field name="ProjectID" type="Number">
        /// Gets or sets the projectID for this projectManagerViewTeamHour.
        /// </field>
        /// <field name="ProjectName" type="String">
        /// Gets or sets the projectName for this projectManagerViewTeamHour.
        /// </field>
        /// <field name="Expr1" type="String">
        /// Gets or sets the expr1 for this projectManagerViewTeamHour.
        /// </field>
        /// <field name="details" type="msls.application.ProjectManagerViewTeamHour.Details">
        /// Gets the details for this projectManagerViewTeamHour.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ProjectReport(entitySet) {
        /// <summary>
        /// Represents the ProjectReport entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this projectReport.
        /// </param>
        /// <field name="TotalWorkedHours" type="String">
        /// Gets or sets the totalWorkedHours for this projectReport.
        /// </field>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this projectReport.
        /// </field>
        /// <field name="ProjectName" type="String">
        /// Gets or sets the projectName for this projectReport.
        /// </field>
        /// <field name="MonthName" type="String">
        /// Gets or sets the monthName for this projectReport.
        /// </field>
        /// <field name="details" type="msls.application.ProjectReport.Details">
        /// Gets the details for this projectReport.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Project(entitySet) {
        /// <summary>
        /// Represents the Project entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this project.
        /// </param>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this project.
        /// </field>
        /// <field name="ProjectName" type="String">
        /// Gets or sets the projectName for this project.
        /// </field>
        /// <field name="MgrID" type="Number">
        /// Gets or sets the mgrID for this project.
        /// </field>
        /// <field name="ProjectID" type="Number">
        /// Gets or sets the projectID for this project.
        /// </field>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this project.
        /// </field>
        /// <field name="details" type="msls.application.Project.Details">
        /// Gets the details for this project.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ProjectsInCompany(entitySet) {
        /// <summary>
        /// Represents the ProjectsInCompany entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this projectsInCompany.
        /// </param>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this projectsInCompany.
        /// </field>
        /// <field name="ProjectName" type="String">
        /// Gets or sets the projectName for this projectsInCompany.
        /// </field>
        /// <field name="ProjectType" type="String">
        /// Gets or sets the projectType for this projectsInCompany.
        /// </field>
        /// <field name="AssignProject" type="msls.EntityCollection" elementType="msls.application.AssignProject">
        /// Gets the assignProject for this projectsInCompany.
        /// </field>
        /// <field name="ProjectDetails" type="msls.EntityCollection" elementType="msls.application.ProjectDetail">
        /// Gets the projectDetails for this projectsInCompany.
        /// </field>
        /// <field name="StartDate" type="Date">
        /// Gets or sets the startDate for this projectsInCompany.
        /// </field>
        /// <field name="EndDate" type="Date">
        /// Gets or sets the endDate for this projectsInCompany.
        /// </field>
        /// <field name="details" type="msls.application.ProjectsInCompany.Details">
        /// Gets the details for this projectsInCompany.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ProjectsInDay(entitySet) {
        /// <summary>
        /// Represents the ProjectsInDay entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this projectsInDay.
        /// </param>
        /// <field name="c_Date" type="Date">
        /// Gets or sets the c_Date for this projectsInDay.
        /// </field>
        /// <field name="Hours" type="String">
        /// Gets or sets the hours for this projectsInDay.
        /// </field>
        /// <field name="SubProject" type="String">
        /// Gets or sets the subProject for this projectsInDay.
        /// </field>
        /// <field name="ProjectName" type="String">
        /// Gets or sets the projectName for this projectsInDay.
        /// </field>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this projectsInDay.
        /// </field>
        /// <field name="details" type="msls.application.ProjectsInDay.Details">
        /// Gets the details for this projectsInDay.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function TeamProject(entitySet) {
        /// <summary>
        /// Represents the TeamProject entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this teamProject.
        /// </param>
        /// <field name="ManagerID" type="Number">
        /// Gets or sets the managerID for this teamProject.
        /// </field>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this teamProject.
        /// </field>
        /// <field name="emprole1" type="String">
        /// Gets or sets the emprole1 for this teamProject.
        /// </field>
        /// <field name="emprole2" type="String">
        /// Gets or sets the emprole2 for this teamProject.
        /// </field>
        /// <field name="ID" type="Number">
        /// Gets or sets the iD for this teamProject.
        /// </field>
        /// <field name="ProjectID" type="Number">
        /// Gets or sets the projectID for this teamProject.
        /// </field>
        /// <field name="Expr1" type="Number">
        /// Gets or sets the expr1 for this teamProject.
        /// </field>
        /// <field name="details" type="msls.application.TeamProject.Details">
        /// Gets the details for this teamProject.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function TeamProjectsList(entitySet) {
        /// <summary>
        /// Represents the TeamProjectsList entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this teamProjectsList.
        /// </param>
        /// <field name="Expr1" type="Number">
        /// Gets or sets the expr1 for this teamProjectsList.
        /// </field>
        /// <field name="ProjectName" type="String">
        /// Gets or sets the projectName for this teamProjectsList.
        /// </field>
        /// <field name="ManagerName" type="String">
        /// Gets or sets the managerName for this teamProjectsList.
        /// </field>
        /// <field name="EmpName" type="String">
        /// Gets or sets the empName for this teamProjectsList.
        /// </field>
        /// <field name="ManagerID" type="Number">
        /// Gets or sets the managerID for this teamProjectsList.
        /// </field>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this teamProjectsList.
        /// </field>
        /// <field name="ProjectID" type="Number">
        /// Gets or sets the projectID for this teamProjectsList.
        /// </field>
        /// <field name="KeyField" type="String">
        /// Gets or sets the keyField for this teamProjectsList.
        /// </field>
        /// <field name="details" type="msls.application.TeamProjectsList.Details">
        /// Gets the details for this teamProjectsList.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function TotalHour(entitySet) {
        /// <summary>
        /// Represents the TotalHour entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this totalHour.
        /// </param>
        /// <field name="TotalHours" type="String">
        /// Gets or sets the totalHours for this totalHour.
        /// </field>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this totalHour.
        /// </field>
        /// <field name="details" type="msls.application.TotalHour.Details">
        /// Gets the details for this totalHour.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function TotalHoursAllMonthsForProject(entitySet) {
        /// <summary>
        /// Represents the TotalHoursAllMonthsForProject entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this totalHoursAllMonthsForProject.
        /// </param>
        /// <field name="TotalHours" type="String">
        /// Gets or sets the totalHours for this totalHoursAllMonthsForProject.
        /// </field>
        /// <field name="ProjectName" type="String">
        /// Gets or sets the projectName for this totalHoursAllMonthsForProject.
        /// </field>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this totalHoursAllMonthsForProject.
        /// </field>
        /// <field name="details" type="msls.application.TotalHoursAllMonthsForProject.Details">
        /// Gets the details for this totalHoursAllMonthsForProject.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function TotalHoursandProjectShare(entitySet) {
        /// <summary>
        /// Represents the TotalHoursandProjectShare entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this totalHoursandProjectShare.
        /// </param>
        /// <field name="ProjectShare" type="String">
        /// Gets or sets the projectShare for this totalHoursandProjectShare.
        /// </field>
        /// <field name="TotalHours" type="String">
        /// Gets or sets the totalHours for this totalHoursandProjectShare.
        /// </field>
        /// <field name="ProjectName" type="String">
        /// Gets or sets the projectName for this totalHoursandProjectShare.
        /// </field>
        /// <field name="TotalofallProjects" type="String">
        /// Gets or sets the totalofallProjects for this totalHoursandProjectShare.
        /// </field>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this totalHoursandProjectShare.
        /// </field>
        /// <field name="ComplexityAvg" type="String">
        /// Gets or sets the complexityAvg for this totalHoursandProjectShare.
        /// </field>
        /// <field name="QualityAverage" type="String">
        /// Gets or sets the qualityAverage for this totalHoursandProjectShare.
        /// </field>
        /// <field name="ComplexityDifficultyLevel" type="String">
        /// Gets or sets the complexityDifficultyLevel for this totalHoursandProjectShare.
        /// </field>
        /// <field name="ComplexityScope" type="String">
        /// Gets or sets the complexityScope for this totalHoursandProjectShare.
        /// </field>
        /// <field name="QualityPMRating" type="String">
        /// Gets or sets the qualityPMRating for this totalHoursandProjectShare.
        /// </field>
        /// <field name="QualityPeerReview" type="String">
        /// Gets or sets the qualityPeerReview for this totalHoursandProjectShare.
        /// </field>
        /// <field name="QualityProjectDuration" type="String">
        /// Gets or sets the qualityProjectDuration for this totalHoursandProjectShare.
        /// </field>
        /// <field name="details" type="msls.application.TotalHoursandProjectShare.Details">
        /// Gets the details for this totalHoursandProjectShare.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function TotalHoursofAllProject(entitySet) {
        /// <summary>
        /// Represents the TotalHoursofAllProject entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this totalHoursofAllProject.
        /// </param>
        /// <field name="TotalofallProjects" type="String">
        /// Gets or sets the totalofallProjects for this totalHoursofAllProject.
        /// </field>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this totalHoursofAllProject.
        /// </field>
        /// <field name="details" type="msls.application.TotalHoursofAllProject.Details">
        /// Gets the details for this totalHoursofAllProject.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function TotalHoursProjectwiseforMonth(entitySet) {
        /// <summary>
        /// Represents the TotalHoursProjectwiseforMonth entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this totalHoursProjectwiseforMonth.
        /// </param>
        /// <field name="Total_Hours" type="String">
        /// Gets or sets the total_Hours for this totalHoursProjectwiseforMonth.
        /// </field>
        /// <field name="MonthName" type="String">
        /// Gets or sets the monthName for this totalHoursProjectwiseforMonth.
        /// </field>
        /// <field name="ProjectName" type="String">
        /// Gets or sets the projectName for this totalHoursProjectwiseforMonth.
        /// </field>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this totalHoursProjectwiseforMonth.
        /// </field>
        /// <field name="ProjectID" type="Number">
        /// Gets or sets the projectID for this totalHoursProjectwiseforMonth.
        /// </field>
        /// <field name="MonthID" type="Number">
        /// Gets or sets the monthID for this totalHoursProjectwiseforMonth.
        /// </field>
        /// <field name="details" type="msls.application.TotalHoursProjectwiseforMonth.Details">
        /// Gets the details for this totalHoursProjectwiseforMonth.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function TotalHoursTeamMonthwise(entitySet) {
        /// <summary>
        /// Represents the TotalHoursTeamMonthwise entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this totalHoursTeamMonthwise.
        /// </param>
        /// <field name="EmpName" type="String">
        /// Gets or sets the empName for this totalHoursTeamMonthwise.
        /// </field>
        /// <field name="ProjectID" type="Number">
        /// Gets or sets the projectID for this totalHoursTeamMonthwise.
        /// </field>
        /// <field name="ProjectName" type="String">
        /// Gets or sets the projectName for this totalHoursTeamMonthwise.
        /// </field>
        /// <field name="Expr1" type="String">
        /// Gets or sets the expr1 for this totalHoursTeamMonthwise.
        /// </field>
        /// <field name="MonthID" type="Number">
        /// Gets or sets the monthID for this totalHoursTeamMonthwise.
        /// </field>
        /// <field name="MonthName" type="String">
        /// Gets or sets the monthName for this totalHoursTeamMonthwise.
        /// </field>
        /// <field name="details" type="msls.application.TotalHoursTeamMonthwise.Details">
        /// Gets the details for this totalHoursTeamMonthwise.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function TotalProjectScore(entitySet) {
        /// <summary>
        /// Represents the TotalProjectScore entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this totalProjectScore.
        /// </param>
        /// <field name="ProjectScore" type="String">
        /// Gets or sets the projectScore for this totalProjectScore.
        /// </field>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this totalProjectScore.
        /// </field>
        /// <field name="details" type="msls.application.TotalProjectScore.Details">
        /// Gets the details for this totalProjectScore.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function UtilizationCalculation(entitySet) {
        /// <summary>
        /// Represents the UtilizationCalculation entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this utilizationCalculation.
        /// </param>
        /// <field name="UtilizationPercentage" type="String">
        /// Gets or sets the utilizationPercentage for this utilizationCalculation.
        /// </field>
        /// <field name="WeekDays" type="Number">
        /// Gets or sets the weekDays for this utilizationCalculation.
        /// </field>
        /// <field name="WorkingDays" type="Number">
        /// Gets or sets the workingDays for this utilizationCalculation.
        /// </field>
        /// <field name="WorkedHours" type="String">
        /// Gets or sets the workedHours for this utilizationCalculation.
        /// </field>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this utilizationCalculation.
        /// </field>
        /// <field name="MonthID" type="Number">
        /// Gets or sets the monthID for this utilizationCalculation.
        /// </field>
        /// <field name="MonthName" type="String">
        /// Gets or sets the monthName for this utilizationCalculation.
        /// </field>
        /// <field name="Holidays" type="Number">
        /// Gets or sets the holidays for this utilizationCalculation.
        /// </field>
        /// <field name="details" type="msls.application.UtilizationCalculation.Details">
        /// Gets the details for this utilizationCalculation.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function UtilizationTracker(entitySet) {
        /// <summary>
        /// Represents the UtilizationTracker entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this utilizationTracker.
        /// </param>
        /// <field name="WorkedHours" type="String">
        /// Gets or sets the workedHours for this utilizationTracker.
        /// </field>
        /// <field name="EmpID" type="Number">
        /// Gets or sets the empID for this utilizationTracker.
        /// </field>
        /// <field name="MonthID" type="Number">
        /// Gets or sets the monthID for this utilizationTracker.
        /// </field>
        /// <field name="TotalHours" type="Number">
        /// Gets or sets the totalHours for this utilizationTracker.
        /// </field>
        /// <field name="WeekDays" type="Number">
        /// Gets or sets the weekDays for this utilizationTracker.
        /// </field>
        /// <field name="WorkingDays" type="Number">
        /// Gets or sets the workingDays for this utilizationTracker.
        /// </field>
        /// <field name="MonthName" type="String">
        /// Gets or sets the monthName for this utilizationTracker.
        /// </field>
        /// <field name="Holidays" type="Number">
        /// Gets or sets the holidays for this utilizationTracker.
        /// </field>
        /// <field name="details" type="msls.application.UtilizationTracker.Details">
        /// Gets the details for this utilizationTracker.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function UtilizationTrackerData(dataWorkspace) {
        /// <summary>
        /// Represents the UtilizationTrackerData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="AssignProjects" type="msls.EntitySet">
        /// Gets the AssignProjects entity set.
        /// </field>
        /// <field name="AvgUtilizations" type="msls.EntitySet">
        /// Gets the AvgUtilizations entity set.
        /// </field>
        /// <field name="CompanyProjects" type="msls.EntitySet">
        /// Gets the CompanyProjects entity set.
        /// </field>
        /// <field name="CompanyTeamProjects" type="msls.EntitySet">
        /// Gets the CompanyTeamProjects entity set.
        /// </field>
        /// <field name="ComplexityandQualityShares" type="msls.EntitySet">
        /// Gets the ComplexityandQualityShares entity set.
        /// </field>
        /// <field name="DistinctProjects" type="msls.EntitySet">
        /// Gets the DistinctProjects entity set.
        /// </field>
        /// <field name="EmailDropdowns" type="msls.EntitySet">
        /// Gets the EmailDropdowns entity set.
        /// </field>
        /// <field name="EmployeeDetails" type="msls.EntitySet">
        /// Gets the EmployeeDetails entity set.
        /// </field>
        /// <field name="EmployeeMonths" type="msls.EntitySet">
        /// Gets the EmployeeMonths entity set.
        /// </field>
        /// <field name="EmployeeProjectHours" type="msls.EntitySet">
        /// Gets the EmployeeProjectHours entity set.
        /// </field>
        /// <field name="EmployeeProjects" type="msls.EntitySet">
        /// Gets the EmployeeProjects entity set.
        /// </field>
        /// <field name="GetDateParameters" type="msls.EntitySet">
        /// Gets the GetDateParameters entity set.
        /// </field>
        /// <field name="HoursPerDays" type="msls.EntitySet">
        /// Gets the HoursPerDays entity set.
        /// </field>
        /// <field name="Months" type="msls.EntitySet">
        /// Gets the Months entity set.
        /// </field>
        /// <field name="PMTeamProjects" type="msls.EntitySet">
        /// Gets the PMTeamProjects entity set.
        /// </field>
        /// <field name="ProjectDetails" type="msls.EntitySet">
        /// Gets the ProjectDetails entity set.
        /// </field>
        /// <field name="ProjectManagerViewTeamHours" type="msls.EntitySet">
        /// Gets the ProjectManagerViewTeamHours entity set.
        /// </field>
        /// <field name="ProjectReports" type="msls.EntitySet">
        /// Gets the ProjectReports entity set.
        /// </field>
        /// <field name="Projects" type="msls.EntitySet">
        /// Gets the Projects entity set.
        /// </field>
        /// <field name="ProjectsInCompanies" type="msls.EntitySet">
        /// Gets the ProjectsInCompanies entity set.
        /// </field>
        /// <field name="ProjectsInDays" type="msls.EntitySet">
        /// Gets the ProjectsInDays entity set.
        /// </field>
        /// <field name="TeamProjects" type="msls.EntitySet">
        /// Gets the TeamProjects entity set.
        /// </field>
        /// <field name="TeamProjectsLists" type="msls.EntitySet">
        /// Gets the TeamProjectsLists entity set.
        /// </field>
        /// <field name="TotalHours" type="msls.EntitySet">
        /// Gets the TotalHours entity set.
        /// </field>
        /// <field name="TotalHoursAllMonthsForProjects" type="msls.EntitySet">
        /// Gets the TotalHoursAllMonthsForProjects entity set.
        /// </field>
        /// <field name="TotalHoursandProjectShares" type="msls.EntitySet">
        /// Gets the TotalHoursandProjectShares entity set.
        /// </field>
        /// <field name="TotalHoursofAllProjects" type="msls.EntitySet">
        /// Gets the TotalHoursofAllProjects entity set.
        /// </field>
        /// <field name="TotalHoursProjectwiseforMonths" type="msls.EntitySet">
        /// Gets the TotalHoursProjectwiseforMonths entity set.
        /// </field>
        /// <field name="TotalHoursTeamMonthwises" type="msls.EntitySet">
        /// Gets the TotalHoursTeamMonthwises entity set.
        /// </field>
        /// <field name="TotalProjectScores" type="msls.EntitySet">
        /// Gets the TotalProjectScores entity set.
        /// </field>
        /// <field name="UtilizationCalculations" type="msls.EntitySet">
        /// Gets the UtilizationCalculations entity set.
        /// </field>
        /// <field name="UtilizationTrackers" type="msls.EntitySet">
        /// Gets the UtilizationTrackers entity set.
        /// </field>
        /// <field name="details" type="msls.application.UtilizationTrackerData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="UtilizationTrackerData" type="msls.application.UtilizationTrackerData">
        /// Gets the UtilizationTrackerData data service.
        /// </field>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        AssignProject: $defineEntity(AssignProject, [
            { name: "ID", type: Number, isReadOnly: true },
            { name: "EmpRole", type: String },
            { name: "EmployeeDetail", kind: "reference", type: EmployeeDetail },
            { name: "ProjectsInCompany", kind: "reference", type: ProjectsInCompany },
            { name: "ProjectType", type: String }
        ]),

        AvgUtilization: $defineEntity(AvgUtilization, [
            { name: "AvgUtilization1", type: String },
            { name: "EmpID", type: Number }
        ]),

        CompanyProject: $defineEntity(CompanyProject, [
            { name: "ProjectName", type: String },
            { name: "EmpID", type: Number },
            { name: "EmpRole", type: String },
            { name: "ProjectType", type: String },
            { name: "ProjectID", type: Number },
            { name: "Expr1", type: Number }
        ]),

        CompanyTeamProject: $defineEntity(CompanyTeamProject, [
            { name: "EmpName", type: String },
            { name: "ProjectID", type: Number },
            { name: "ProjectName", type: String },
            { name: "ComplexityDifficultyLevel", type: String },
            { name: "ComplexityScope", type: String },
            { name: "ProjectType", type: String },
            { name: "ProjectStatus", type: String },
            { name: "StartDate", type: Date },
            { name: "EndDate", type: Date },
            { name: "ComplexityAvg", type: String },
            { name: "QualityPMRating", type: String },
            { name: "QualityPeerReview", type: String },
            { name: "QualityProjectDuration", type: String },
            { name: "QualityAverage", type: String },
            { name: "AssignProjectID", type: Number }
        ]),

        ComplexityandQualityShare: $defineEntity(ComplexityandQualityShare, [
            { name: "ProjectName", type: String },
            { name: "TotalHours", type: String },
            { name: "ProjectShare", type: String },
            { name: "ComplexityShare", type: String },
            { name: "QualityShare", type: String },
            { name: "EmpID", type: Number },
            { name: "ProjectScore", type: String },
            { name: "ComplexityAvg", type: String },
            { name: "QualityAverage", type: String },
            { name: "ComplexityDifficultyLevel", type: String },
            { name: "ComplexityScope", type: String },
            { name: "QualityPMRating", type: String },
            { name: "QualityPeerReview", type: String },
            { name: "QualityProjectDuration", type: String },
            { name: "TotalofallProjects", type: String }
        ]),

        DistinctProject: $defineEntity(DistinctProject, [
            { name: "ProjectName", type: String },
            { name: "EmpID", type: Number },
            { name: "ProjectID", type: Number, isReadOnly: true },
            { name: "ProjectManagerID", type: Number },
            { name: "Expr1", type: String },
            { name: "Expr2", type: Number },
            { name: "Expr3", type: Number },
            { name: "ComplexityDifficultyLevel", type: String },
            { name: "ComplexityScope", type: String },
            { name: "ProjectType", type: String },
            { name: "ProjectStatus", type: String },
            { name: "StartDate", type: Date },
            { name: "EndDate", type: Date },
            { name: "ComplexityAvg", type: String },
            { name: "QualityPMRating", type: String },
            { name: "QualityPeerReview", type: String },
            { name: "QualityProjectDuration", type: String },
            { name: "QualityAverage", type: String },
            { name: "EmpName", type: String }
        ]),

        EmailDropdown: $defineEntity(EmailDropdown, [
            { name: "EmpID", type: Number },
            { name: "ManagerID", type: Number },
            { name: "ManagerName", type: String },
            { name: "EmpName", type: String }
        ]),

        EmployeeDetail: $defineEntity(EmployeeDetail, [
            { name: "EmpID", type: Number },
            { name: "EmpName", type: String },
            { name: "Designation", type: String },
            { name: "Email", type: String },
            { name: "UserName", type: String },
            { name: "EmployeeDetails", kind: "collection", elementType: EmployeeDetail },
            { name: "EmployeeDetail1", kind: "reference", type: EmployeeDetail },
            { name: "EmployeeMonths", kind: "collection", elementType: EmployeeMonth },
            { name: "Role", type: String },
            { name: "AssignProjects", kind: "collection", elementType: AssignProject }
        ]),

        EmployeeMonth: $defineEntity(EmployeeMonth, [
            { name: "EmpID", type: Number },
            { name: "MonthID", type: Number },
            { name: "NoOfLeaves", type: Number },
            { name: "EmployeeDetail", kind: "reference", type: EmployeeDetail },
            { name: "Months", kind: "reference", type: Months }
        ]),

        EmployeeProjectHour: $defineEntity(EmployeeProjectHour, [
            { name: "ProjectName", type: String },
            { name: "SubProject", type: String },
            { name: "ProjectID", type: Number },
            { name: "EmpID", type: Number },
            { name: "TaskID", type: Number },
            { name: "c_Date", type: Date },
            { name: "Hours", type: String },
            { name: "MonthName", type: String },
            { name: "EmpName", type: String }
        ]),

        EmployeeProject: $defineEntity(EmployeeProject, [
            { name: "EmpID", type: Number },
            { name: "ProjectID", type: Number },
            { name: "TaskID", type: Number },
            { name: "SubProject", type: String },
            { name: "c_Date", type: Date },
            { name: "Hours", type: String },
            { name: "Months", kind: "reference", type: Months },
            { name: "ProjectDetail", kind: "reference", type: ProjectDetail }
        ]),

        GetDateParameter: $defineEntity(GetDateParameter, [
            { name: "c_Date", type: Date },
            { name: "EmpID", type: Number }
        ]),

        HoursPerDay: $defineEntity(HoursPerDay, [
            { name: "c_Date", type: Date },
            { name: "MonthName", type: String },
            { name: "EmpID", type: Number },
            { name: "Expr1", type: String }
        ]),

        Months: $defineEntity(Months, [
            { name: "MonthID", type: Number },
            { name: "MonthName", type: String },
            { name: "NoOfDays", type: Number },
            { name: "WeekDays", type: Number },
            { name: "EmployeeMonths", kind: "collection", elementType: EmployeeMonth },
            { name: "EmployeeProjects", kind: "collection", elementType: EmployeeProject },
            { name: "Holidays", type: Number },
            { name: "TotalHours", type: Number },
            { name: "WorkingDays", type: Number },
            { name: "Year", type: Number }
        ]),

        PMTeamProject: $defineEntity(PMTeamProject, [
            { name: "ManagerName", type: String },
            { name: "ProjectName", type: String },
            { name: "EmpName", type: String },
            { name: "EmpID", type: Number },
            { name: "ManagerID", type: Number },
            { name: "ProjectID", type: Number },
            { name: "KeyField", type: String }
        ]),

        ProjectDetail: $defineEntity(ProjectDetail, [
            { name: "EmpID", type: Number },
            { name: "ProjectID", type: Number },
            { name: "ProjectName", type: String },
            { name: "ProjectType", type: String },
            { name: "ProjectStatus", type: String },
            { name: "StartDate", type: Date },
            { name: "EndDate", type: Date },
            { name: "EmployeeProjects", kind: "collection", elementType: EmployeeProject },
            { name: "ComplexityDifficultyLevel", type: String },
            { name: "ComplexityScope", type: String },
            { name: "ComplexityAvg", type: String },
            { name: "QualityPMRating", type: String },
            { name: "QualityPeerReview", type: String },
            { name: "QualityProjectDuration", type: String },
            { name: "QualityAverage", type: String },
            { name: "ProjectsInCompany", kind: "reference", type: ProjectsInCompany }
        ]),

        ProjectManagerViewTeamHour: $defineEntity(ProjectManagerViewTeamHour, [
            { name: "EmpName", type: String },
            { name: "ProjectID", type: Number },
            { name: "ProjectName", type: String },
            { name: "Expr1", type: String }
        ]),

        ProjectReport: $defineEntity(ProjectReport, [
            { name: "TotalWorkedHours", type: String },
            { name: "EmpID", type: Number },
            { name: "ProjectName", type: String },
            { name: "MonthName", type: String }
        ]),

        Project: $defineEntity(Project, [
            { name: "EmpID", type: Number },
            { name: "ProjectName", type: String },
            { name: "MgrID", type: Number },
            { name: "ProjectID", type: Number },
            { name: "ID", type: Number }
        ]),

        ProjectsInCompany: $defineEntity(ProjectsInCompany, [
            { name: "ID", type: Number, isReadOnly: true },
            { name: "ProjectName", type: String },
            { name: "ProjectType", type: String },
            { name: "AssignProject", kind: "collection", elementType: AssignProject },
            { name: "ProjectDetails", kind: "collection", elementType: ProjectDetail },
            { name: "StartDate", type: Date },
            { name: "EndDate", type: Date }
        ]),

        ProjectsInDay: $defineEntity(ProjectsInDay, [
            { name: "c_Date", type: Date },
            { name: "Hours", type: String },
            { name: "SubProject", type: String },
            { name: "ProjectName", type: String },
            { name: "EmpID", type: Number }
        ]),

        TeamProject: $defineEntity(TeamProject, [
            { name: "ManagerID", type: Number },
            { name: "EmpID", type: Number },
            { name: "emprole1", type: String },
            { name: "emprole2", type: String },
            { name: "ID", type: Number },
            { name: "ProjectID", type: Number },
            { name: "Expr1", type: Number }
        ]),

        TeamProjectsList: $defineEntity(TeamProjectsList, [
            { name: "Expr1", type: Number },
            { name: "ProjectName", type: String },
            { name: "ManagerName", type: String },
            { name: "EmpName", type: String },
            { name: "ManagerID", type: Number },
            { name: "EmpID", type: Number },
            { name: "ProjectID", type: Number },
            { name: "KeyField", type: String }
        ]),

        TotalHour: $defineEntity(TotalHour, [
            { name: "TotalHours", type: String },
            { name: "EmpID", type: Number }
        ]),

        TotalHoursAllMonthsForProject: $defineEntity(TotalHoursAllMonthsForProject, [
            { name: "TotalHours", type: String },
            { name: "ProjectName", type: String },
            { name: "EmpID", type: Number }
        ]),

        TotalHoursandProjectShare: $defineEntity(TotalHoursandProjectShare, [
            { name: "ProjectShare", type: String },
            { name: "TotalHours", type: String },
            { name: "ProjectName", type: String },
            { name: "TotalofallProjects", type: String },
            { name: "EmpID", type: Number },
            { name: "ComplexityAvg", type: String },
            { name: "QualityAverage", type: String },
            { name: "ComplexityDifficultyLevel", type: String },
            { name: "ComplexityScope", type: String },
            { name: "QualityPMRating", type: String },
            { name: "QualityPeerReview", type: String },
            { name: "QualityProjectDuration", type: String }
        ]),

        TotalHoursofAllProject: $defineEntity(TotalHoursofAllProject, [
            { name: "TotalofallProjects", type: String },
            { name: "EmpID", type: Number }
        ]),

        TotalHoursProjectwiseforMonth: $defineEntity(TotalHoursProjectwiseforMonth, [
            { name: "Total_Hours", type: String },
            { name: "MonthName", type: String },
            { name: "ProjectName", type: String },
            { name: "EmpID", type: Number },
            { name: "ProjectID", type: Number },
            { name: "MonthID", type: Number }
        ]),

        TotalHoursTeamMonthwise: $defineEntity(TotalHoursTeamMonthwise, [
            { name: "EmpName", type: String },
            { name: "ProjectID", type: Number },
            { name: "ProjectName", type: String },
            { name: "Expr1", type: String },
            { name: "MonthID", type: Number },
            { name: "MonthName", type: String }
        ]),

        TotalProjectScore: $defineEntity(TotalProjectScore, [
            { name: "ProjectScore", type: String },
            { name: "EmpID", type: Number }
        ]),

        UtilizationCalculation: $defineEntity(UtilizationCalculation, [
            { name: "UtilizationPercentage", type: String },
            { name: "WeekDays", type: Number },
            { name: "WorkingDays", type: Number },
            { name: "WorkedHours", type: String },
            { name: "EmpID", type: Number },
            { name: "MonthID", type: Number },
            { name: "MonthName", type: String },
            { name: "Holidays", type: Number }
        ]),

        UtilizationTracker: $defineEntity(UtilizationTracker, [
            { name: "WorkedHours", type: String },
            { name: "EmpID", type: Number },
            { name: "MonthID", type: Number },
            { name: "TotalHours", type: Number },
            { name: "WeekDays", type: Number },
            { name: "WorkingDays", type: Number },
            { name: "MonthName", type: String },
            { name: "Holidays", type: Number }
        ]),

        UtilizationTrackerData: $defineDataService(UtilizationTrackerData, lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc", [
            { name: "AssignProjects", elementType: AssignProject },
            { name: "AvgUtilizations", elementType: AvgUtilization },
            { name: "CompanyProjects", elementType: CompanyProject },
            { name: "CompanyTeamProjects", elementType: CompanyTeamProject },
            { name: "ComplexityandQualityShares", elementType: ComplexityandQualityShare },
            { name: "DistinctProjects", elementType: DistinctProject },
            { name: "EmailDropdowns", elementType: EmailDropdown },
            { name: "EmployeeDetails", elementType: EmployeeDetail },
            { name: "EmployeeMonths", elementType: EmployeeMonth },
            { name: "EmployeeProjectHours", elementType: EmployeeProjectHour },
            { name: "EmployeeProjects", elementType: EmployeeProject },
            { name: "GetDateParameters", elementType: GetDateParameter },
            { name: "HoursPerDays", elementType: HoursPerDay },
            { name: "Months", elementType: Months },
            { name: "PMTeamProjects", elementType: PMTeamProject },
            { name: "ProjectDetails", elementType: ProjectDetail },
            { name: "ProjectManagerViewTeamHours", elementType: ProjectManagerViewTeamHour },
            { name: "ProjectReports", elementType: ProjectReport },
            { name: "Projects", elementType: Project },
            { name: "ProjectsInCompanies", elementType: ProjectsInCompany },
            { name: "ProjectsInDays", elementType: ProjectsInDay },
            { name: "TeamProjects", elementType: TeamProject },
            { name: "TeamProjectsLists", elementType: TeamProjectsList },
            { name: "TotalHours", elementType: TotalHour },
            { name: "TotalHoursAllMonthsForProjects", elementType: TotalHoursAllMonthsForProject },
            { name: "TotalHoursandProjectShares", elementType: TotalHoursandProjectShare },
            { name: "TotalHoursofAllProjects", elementType: TotalHoursofAllProject },
            { name: "TotalHoursProjectwiseforMonths", elementType: TotalHoursProjectwiseforMonth },
            { name: "TotalHoursTeamMonthwises", elementType: TotalHoursTeamMonthwise },
            { name: "TotalProjectScores", elementType: TotalProjectScore },
            { name: "UtilizationCalculations", elementType: UtilizationCalculation },
            { name: "UtilizationTrackers", elementType: UtilizationTracker }
        ], [
            {
                name: "AssignProjects_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.AssignProjects },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/AssignProjects(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "AvgUtilizations_SingleOrDefault", value: function (EmpID) {
                    return new $DataServiceQuery({ _entitySet: this.AvgUtilizations },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/AvgUtilizations(" + "EmpID=" + $toODataString(EmpID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "AvgUtilization", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.AvgUtilizations },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/AvgUtilization()",
                        {
                        });
                }
            },
            {
                name: "CompanyProjects_SingleOrDefault", value: function (ProjectName, ProjectType, Expr1) {
                    return new $DataServiceQuery({ _entitySet: this.CompanyProjects },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/CompanyProjects(" + "ProjectName=" + $toODataString(ProjectName, "String?") + "," + "ProjectType=" + $toODataString(ProjectType, "String?") + "," + "Expr1=" + $toODataString(Expr1, "Int32?") + ")"
                    );
                }
            },
            {
                name: "CompanySelfProjects", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.CompanyProjects },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/CompanySelfProjects()",
                        {
                        });
                }
            },
            {
                name: "CompanyTeamProjects_SingleOrDefault", value: function (EmpName, ProjectID, ProjectName, ComplexityDifficultyLevel, ComplexityScope, ProjectType, ProjectStatus, StartDate) {
                    return new $DataServiceQuery({ _entitySet: this.CompanyTeamProjects },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/CompanyTeamProjects(" + "EmpName=" + $toODataString(EmpName, "String?") + "," + "ProjectID=" + $toODataString(ProjectID, "Int32?") + "," + "ProjectName=" + $toODataString(ProjectName, "String?") + "," + "ComplexityDifficultyLevel=" + $toODataString(ComplexityDifficultyLevel, "Decimal?") + "," + "ComplexityScope=" + $toODataString(ComplexityScope, "Decimal?") + "," + "ProjectType=" + $toODataString(ProjectType, "String?") + "," + "ProjectStatus=" + $toODataString(ProjectStatus, "String?") + "," + "StartDate=" + $toODataString(StartDate, "DateTime?") + ")"
                    );
                }
            },
            {
                name: "ComplexityandQualityShares_SingleOrDefault", value: function (ProjectName, EmpID, ComplexityDifficultyLevel, ComplexityScope) {
                    return new $DataServiceQuery({ _entitySet: this.ComplexityandQualityShares },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/ComplexityandQualityShares(" + "ProjectName=" + $toODataString(ProjectName, "String?") + "," + "EmpID=" + $toODataString(EmpID, "Int32?") + "," + "ComplexityDifficultyLevel=" + $toODataString(ComplexityDifficultyLevel, "Decimal?") + "," + "ComplexityScope=" + $toODataString(ComplexityScope, "Decimal?") + ")"
                    );
                }
            },
            {
                name: "ProjectScore", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.ComplexityandQualityShares },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/ProjectScore()",
                        {
                        });
                }
            },
            {
                name: "DistinctProjects_SingleOrDefault", value: function (ProjectName, EmpID, ProjectID, Expr1, Expr2, Expr3, ComplexityDifficultyLevel, ComplexityScope, ProjectType, ProjectStatus, StartDate, EmpName) {
                    return new $DataServiceQuery({ _entitySet: this.DistinctProjects },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/DistinctProjects(" + "ProjectName=" + $toODataString(ProjectName, "String?") + "," + "EmpID=" + $toODataString(EmpID, "Int32?") + "," + "ProjectID=" + $toODataString(ProjectID, "Int32?") + "," + "Expr1=" + $toODataString(Expr1, "String?") + "," + "Expr2=" + $toODataString(Expr2, "Int32?") + "," + "Expr3=" + $toODataString(Expr3, "Int32?") + "," + "ComplexityDifficultyLevel=" + $toODataString(ComplexityDifficultyLevel, "Decimal?") + "," + "ComplexityScope=" + $toODataString(ComplexityScope, "Decimal?") + "," + "ProjectType=" + $toODataString(ProjectType, "String?") + "," + "ProjectStatus=" + $toODataString(ProjectStatus, "String?") + "," + "StartDate=" + $toODataString(StartDate, "DateTime?") + "," + "EmpName=" + $toODataString(EmpName, "String?") + ")"
                    );
                }
            },
            {
                name: "DistinctProjectList", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.DistinctProjects },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/DistinctProjectList()",
                        {
                        });
                }
            },
            {
                name: "EmailDropdowns_SingleOrDefault", value: function (ManagerName, EmpName) {
                    return new $DataServiceQuery({ _entitySet: this.EmailDropdowns },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/EmailDropdowns(" + "ManagerName=" + $toODataString(ManagerName, "String?") + "," + "EmpName=" + $toODataString(EmpName, "String?") + ")"
                    );
                }
            },
            {
                name: "EmailList", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.EmailDropdowns },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/EmailList()",
                        {
                        });
                }
            },
            {
                name: "EmployeeDetails_SingleOrDefault", value: function (EmpID) {
                    return new $DataServiceQuery({ _entitySet: this.EmployeeDetails },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/EmployeeDetails(" + "EmpID=" + $toODataString(EmpID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "GetManagers", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.EmployeeDetails },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/GetManagers()",
                        {
                        });
                }
            },
            {
                name: "UserName", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.EmployeeDetails },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/UserName()",
                        {
                        });
                }
            },
            {
                name: "ViewReportees", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.EmployeeDetails },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/ViewReportees()",
                        {
                        });
                }
            },
            {
                name: "EmployeeMonths_SingleOrDefault", value: function (EmpID, MonthID) {
                    return new $DataServiceQuery({ _entitySet: this.EmployeeMonths },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/EmployeeMonths(" + "EmpID=" + $toODataString(EmpID, "Int32?") + "," + "MonthID=" + $toODataString(MonthID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "CandidateMonthDetails", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.EmployeeMonths },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/CandidateMonthDetails()",
                        {
                        });
                }
            },
            {
                name: "EmployeeProjectHours_SingleOrDefault", value: function (ProjectName, SubProject, ProjectID, EmpID, TaskID, c_Date, Hours, MonthName, EmpName) {
                    return new $DataServiceQuery({ _entitySet: this.EmployeeProjectHours },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/EmployeeProjectHours(" + "ProjectName=" + $toODataString(ProjectName, "String?") + "," + "SubProject=" + $toODataString(SubProject, "String?") + "," + "ProjectID=" + $toODataString(ProjectID, "Int32?") + "," + "EmpID=" + $toODataString(EmpID, "Int32?") + "," + "TaskID=" + $toODataString(TaskID, "Int32?") + "," + "c_Date=" + $toODataString(c_Date, "DateTime?") + "," + "Hours=" + $toODataString(Hours, "Decimal?") + "," + "MonthName=" + $toODataString(MonthName, "String?") + "," + "EmpName=" + $toODataString(EmpName, "String?") + ")"
                    );
                }
            },
            {
                name: "EmployeeProjects_SingleOrDefault", value: function (EmpID, ProjectID, TaskID) {
                    return new $DataServiceQuery({ _entitySet: this.EmployeeProjects },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/EmployeeProjects(" + "EmpID=" + $toODataString(EmpID, "Int32?") + "," + "ProjectID=" + $toODataString(ProjectID, "Int32?") + "," + "TaskID=" + $toODataString(TaskID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Parameters", value: function (MonthName, ProjectName) {
                    return new $DataServiceQuery({ _entitySet: this.EmployeeProjects },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/Parameters()",
                        {
                            MonthName: $toODataString(MonthName, "String?"),
                            ProjectName: $toODataString(ProjectName, "String?")
                        });
                }
            },
            {
                name: "Tracker", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.EmployeeProjects },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/Tracker()",
                        {
                        });
                }
            },
            {
                name: "ViewReporteeProjects", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.EmployeeProjects },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/ViewReporteeProjects()",
                        {
                        });
                }
            },
            {
                name: "GetDateParameters_SingleOrDefault", value: function (c_Date, EmpID) {
                    return new $DataServiceQuery({ _entitySet: this.GetDateParameters },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/GetDateParameters(" + "c_Date=" + $toODataString(c_Date, "DateTime?") + "," + "EmpID=" + $toODataString(EmpID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "HoursPerDays_SingleOrDefault", value: function (c_Date, MonthName, EmpID) {
                    return new $DataServiceQuery({ _entitySet: this.HoursPerDays },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/HoursPerDays(" + "c_Date=" + $toODataString(c_Date, "DateTime?") + "," + "MonthName=" + $toODataString(MonthName, "String?") + "," + "EmpID=" + $toODataString(EmpID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "NoOfHoursPerDay", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.HoursPerDays },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/NoOfHoursPerDay()",
                        {
                        });
                }
            },
            {
                name: "Months_SingleOrDefault", value: function (MonthID) {
                    return new $DataServiceQuery({ _entitySet: this.Months },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/Months(" + "MonthID=" + $toODataString(MonthID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "PMTeamProjects_SingleOrDefault", value: function (ManagerName, EmpName, KeyField) {
                    return new $DataServiceQuery({ _entitySet: this.PMTeamProjects },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/PMTeamProjects(" + "ManagerName=" + $toODataString(ManagerName, "String?") + "," + "EmpName=" + $toODataString(EmpName, "String?") + "," + "KeyField=" + $toODataString(KeyField, "String?") + ")"
                    );
                }
            },
            {
                name: "ProjectDetails_SingleOrDefault", value: function (EmpID, ProjectID) {
                    return new $DataServiceQuery({ _entitySet: this.ProjectDetails },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/ProjectDetails(" + "EmpID=" + $toODataString(EmpID, "Int32?") + "," + "ProjectID=" + $toODataString(ProjectID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "CandidateProject", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.ProjectDetails },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/CandidateProject()",
                        {
                        });
                }
            },
            {
                name: "GetSelfProjects", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.ProjectDetails },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/GetSelfProjects()",
                        {
                        });
                }
            },
            {
                name: "ProjectManagerViewTeamHours_SingleOrDefault", value: function (EmpName, ProjectID, ProjectName) {
                    return new $DataServiceQuery({ _entitySet: this.ProjectManagerViewTeamHours },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/ProjectManagerViewTeamHours(" + "EmpName=" + $toODataString(EmpName, "String?") + "," + "ProjectID=" + $toODataString(ProjectID, "Int32?") + "," + "ProjectName=" + $toODataString(ProjectName, "String?") + ")"
                    );
                }
            },
            {
                name: "ProjectReports_SingleOrDefault", value: function (EmpID, ProjectName, MonthName) {
                    return new $DataServiceQuery({ _entitySet: this.ProjectReports },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/ProjectReports(" + "EmpID=" + $toODataString(EmpID, "Int32?") + "," + "ProjectName=" + $toODataString(ProjectName, "String?") + "," + "MonthName=" + $toODataString(MonthName, "String?") + ")"
                    );
                }
            },
            {
                name: "ProjectReportsforUser", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.ProjectReports },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/ProjectReportsforUser()",
                        {
                        });
                }
            },
            {
                name: "Projects_SingleOrDefault", value: function (ProjectName, ID) {
                    return new $DataServiceQuery({ _entitySet: this.Projects },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/Projects(" + "ProjectName=" + $toODataString(ProjectName, "String?") + "," + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ProjectsInCompanies_SingleOrDefault", value: function (ID) {
                    return new $DataServiceQuery({ _entitySet: this.ProjectsInCompanies },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/ProjectsInCompanies(" + "ID=" + $toODataString(ID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ProjectsInDays_SingleOrDefault", value: function (c_Date, Hours, SubProject, ProjectName, EmpID) {
                    return new $DataServiceQuery({ _entitySet: this.ProjectsInDays },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/ProjectsInDays(" + "c_Date=" + $toODataString(c_Date, "DateTime?") + "," + "Hours=" + $toODataString(Hours, "Decimal?") + "," + "SubProject=" + $toODataString(SubProject, "String?") + "," + "ProjectName=" + $toODataString(ProjectName, "String?") + "," + "EmpID=" + $toODataString(EmpID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "TeamProjects_SingleOrDefault", value: function (ID, Expr1) {
                    return new $DataServiceQuery({ _entitySet: this.TeamProjects },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/TeamProjects(" + "ID=" + $toODataString(ID, "Int32?") + "," + "Expr1=" + $toODataString(Expr1, "Int32?") + ")"
                    );
                }
            },
            {
                name: "TeamProjectsLists_SingleOrDefault", value: function (ManagerName, EmpName, KeyField) {
                    return new $DataServiceQuery({ _entitySet: this.TeamProjectsLists },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/TeamProjectsLists(" + "ManagerName=" + $toODataString(ManagerName, "String?") + "," + "EmpName=" + $toODataString(EmpName, "String?") + "," + "KeyField=" + $toODataString(KeyField, "String?") + ")"
                    );
                }
            },
            {
                name: "TotalHours_SingleOrDefault", value: function (EmpID) {
                    return new $DataServiceQuery({ _entitySet: this.TotalHours },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/TotalHours(" + "EmpID=" + $toODataString(EmpID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "TotalWorkedHours", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.TotalHours },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/TotalWorkedHours()",
                        {
                        });
                }
            },
            {
                name: "TotalHoursAllMonthsForProjects_SingleOrDefault", value: function (ProjectName, EmpID) {
                    return new $DataServiceQuery({ _entitySet: this.TotalHoursAllMonthsForProjects },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/TotalHoursAllMonthsForProjects(" + "ProjectName=" + $toODataString(ProjectName, "String?") + "," + "EmpID=" + $toODataString(EmpID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "TotalHoursForaProject", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.TotalHoursAllMonthsForProjects },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/TotalHoursForaProject()",
                        {
                        });
                }
            },
            {
                name: "TotalHoursandProjectShares_SingleOrDefault", value: function (ProjectName, EmpID, ComplexityDifficultyLevel, ComplexityScope) {
                    return new $DataServiceQuery({ _entitySet: this.TotalHoursandProjectShares },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/TotalHoursandProjectShares(" + "ProjectName=" + $toODataString(ProjectName, "String?") + "," + "EmpID=" + $toODataString(EmpID, "Int32?") + "," + "ComplexityDifficultyLevel=" + $toODataString(ComplexityDifficultyLevel, "Decimal?") + "," + "ComplexityScope=" + $toODataString(ComplexityScope, "Decimal?") + ")"
                    );
                }
            },
            {
                name: "TotalHoursofAllProjects_SingleOrDefault", value: function (EmpID) {
                    return new $DataServiceQuery({ _entitySet: this.TotalHoursofAllProjects },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/TotalHoursofAllProjects(" + "EmpID=" + $toODataString(EmpID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "TotalHoursProjectwiseforMonths_SingleOrDefault", value: function (MonthName, ProjectName, EmpID, ProjectID, MonthID) {
                    return new $DataServiceQuery({ _entitySet: this.TotalHoursProjectwiseforMonths },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/TotalHoursProjectwiseforMonths(" + "MonthName=" + $toODataString(MonthName, "String?") + "," + "ProjectName=" + $toODataString(ProjectName, "String?") + "," + "EmpID=" + $toODataString(EmpID, "Int32?") + "," + "ProjectID=" + $toODataString(ProjectID, "Int32?") + "," + "MonthID=" + $toODataString(MonthID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "TotalHoursProjectWise", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.TotalHoursProjectwiseforMonths },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/TotalHoursProjectWise()",
                        {
                        });
                }
            },
            {
                name: "TotalHoursTeamMonthwises_SingleOrDefault", value: function (EmpName, ProjectID, ProjectName, MonthID, MonthName) {
                    return new $DataServiceQuery({ _entitySet: this.TotalHoursTeamMonthwises },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/TotalHoursTeamMonthwises(" + "EmpName=" + $toODataString(EmpName, "String?") + "," + "ProjectID=" + $toODataString(ProjectID, "Int32?") + "," + "ProjectName=" + $toODataString(ProjectName, "String?") + "," + "MonthID=" + $toODataString(MonthID, "Int32?") + "," + "MonthName=" + $toODataString(MonthName, "String?") + ")"
                    );
                }
            },
            {
                name: "TotalProjectScores_SingleOrDefault", value: function (EmpID) {
                    return new $DataServiceQuery({ _entitySet: this.TotalProjectScores },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/TotalProjectScores(" + "EmpID=" + $toODataString(EmpID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "CandidateProjectScore", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.TotalProjectScores },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/CandidateProjectScore()",
                        {
                        });
                }
            },
            {
                name: "UtilizationCalculations_SingleOrDefault", value: function (WeekDays, EmpID, MonthID, MonthName, Holidays) {
                    return new $DataServiceQuery({ _entitySet: this.UtilizationCalculations },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/UtilizationCalculations(" + "WeekDays=" + $toODataString(WeekDays, "Int32?") + "," + "EmpID=" + $toODataString(EmpID, "Int32?") + "," + "MonthID=" + $toODataString(MonthID, "Int32?") + "," + "MonthName=" + $toODataString(MonthName, "String?") + "," + "Holidays=" + $toODataString(Holidays, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Utilization", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.UtilizationCalculations },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/Utilization()",
                        {
                        });
                }
            },
            {
                name: "UtilizationTrackers_SingleOrDefault", value: function (EmpID, MonthID, WeekDays, MonthName, Holidays) {
                    return new $DataServiceQuery({ _entitySet: this.UtilizationTrackers },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/UtilizationTrackers(" + "EmpID=" + $toODataString(EmpID, "Int32?") + "," + "MonthID=" + $toODataString(MonthID, "Int32?") + "," + "WeekDays=" + $toODataString(WeekDays, "Int32?") + "," + "MonthName=" + $toODataString(MonthName, "String?") + "," + "Holidays=" + $toODataString(Holidays, "Int32?") + ")"
                    );
                }
            },
            {
                name: "PMTeamProjectList", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.PMTeamProjects },
                        lightSwitchApplication.rootUri + "/UtilizationTrackerData.svc" + "/PMTeamProjectList()",
                        {
                        });
                }
            }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
        ], [
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "UtilizationTrackerData", type: UtilizationTrackerData },
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));
