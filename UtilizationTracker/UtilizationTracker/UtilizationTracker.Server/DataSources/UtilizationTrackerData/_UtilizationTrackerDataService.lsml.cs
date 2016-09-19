using Microsoft.LightSwitch.Security.Server;
using Microsoft.LightSwitch;
using System.Text;
using System.Linq;
using System.Collections.Generic;
using System;
using System.Linq.Expressions;
using System.Data.SqlClient;
using System.Data;
using System.Net.Mail;

namespace LightSwitchApplication
{
 
    public partial class UtilizationTrackerDataService
    {
        
       
        partial void ProjectDetails_Inserting(ProjectDetail entity)
        {
            
            if (entity.ProjectsInCompany.ToString() != "Others")
            {
                entity.ProjectName = entity.ProjectsInCompany.ToString();
            }
            else
            {
                entity.ProjectName = entity.ProjectName.ToString();
            }
            
                entity.EmpID= Convert.ToInt32(SessionManager.Session["EmpID"].ToString());
            entity.ComplexityAvg = (entity.ComplexityDifficultyLevel+entity.ComplexityScope)/2;

            //This code is used to send an email
            //MailMessage message = new MailMessage();
            //message.Subject = "Project Status";
            //message.Body = "New project is added: " +entity.ProjectName;
           
            //message.IsBodyHtml = true;
            //SmtpClient smtp = new SmtpClient("");
            //message.To.Add("shireesha.siddham@datamigrationresources.com");
            //message.From = new MailAddress("shireesha.siddham@datamigrationresources.com");
            //smtp.Send(message);

            
        }

        partial void EmployeeMonths_Inserting(EmployeeMonth entity)
        {
            //string EmpName = SessionManager.Session["UserName"].ToString();
            //string connString = System.Web.Configuration.WebConfigurationManager.ConnectionStrings["IntrinsicKey"].ConnectionString;
            //SqlConnection conn = new SqlConnection(connString);
            //string sql = "Select EmpID from EmployeeDetails where UserName='" + EmpName + "'";

            //SqlDataAdapter da = new SqlDataAdapter(sql, conn);
            //DataSet ds = new DataSet();
            //da.Fill(ds, "Emp");
            entity.EmpID = Convert.ToInt32(SessionManager.Session["EmpID"].ToString());
        }

        partial void EmployeeProjects_Inserting(EmployeeProject entity)
        {
            //string EmpName = SessionManager.Session["UserName"].ToString();
            //string connString = System.Web.Configuration.WebConfigurationManager.ConnectionStrings["IntrinsicKey"].ConnectionString;     
            //SqlConnection conn = new SqlConnection(connString);
            //string sql = "Select EmpID from EmployeeDetails where UserName='" + EmpName + "'";
            //SqlDataAdapter da = new SqlDataAdapter(sql, conn);
            //DataSet ds = new DataSet();
            //da.Fill(ds, "Emp");
            entity.EmpID = Convert.ToInt32(SessionManager.Session["EmpID"].ToString());
            //entity.EmployeeProject.MonthID = 7;
            //entity.Months.MonthID= 7;
            //entity.Months.MonthName = "July";
            //var s = entity.c_Date;
            ////var Fdate = new Date(s);
            ////var Tmnth = ("0" + (s.getMonth() + 1)).slice(-2)
            ////       Fmnth = ("0" + (Fdate.getMonth() + 1)).slice(-2),
            ////       Fday = ("0" + Fdate.getDate()).slice(-2);
            ////Fyear = Fdate.getFullYear();
            //string month = s.ToString("MMMM");
            ////entity.Months.MonthName = month;
            //// entity.Months.MonthName = s.ToString("MMMM");
            //string connString = System.Web.Configuration.WebConfigurationManager.ConnectionStrings["IntrinsicKey"].ConnectionString;
            //SqlConnection conn = new SqlConnection(connString);
            //string getMonthID = "select MonthID from Month where MonthName='" + month + "'";
            //SqlDataAdapter daM = new SqlDataAdapter(getMonthID, conn);
            //DataSet dsM = new DataSet();
            //daM.Fill(dsM, "Month");
            //if (dsM.Tables["Month"].Rows[0][0].ToString() != "")
            //{
            //entity.Months.MonthName. = 7; 
            //   // entity.Months.MonthID = Convert.ToInt32(dsM.Tables["Month"].Rows[0][0].ToString());
            //    // entity.ProjectDetail.ProjectID = Convert.ToInt32(dsM.Tables["Month"].Rows[0][0].ToString());
            //}

        }

        partial void UserName_PreprocessQuery(ref IQueryable<EmployeeDetail> query)
        {
            string str = SessionManager.Session["EmpName"].ToString();
            //query = from EmployeeDetail
            //        in query                       
            //        where EmployeeDetail.EmpName == SessionManager.Session["EmpName"].ToString()
            //        select EmployeeDetail;
            query = query.Where(x => x.EmpName == str);

            //Calculated total hours
            int EmpID = Convert.ToInt32(SessionManager.Session["EmpID"].ToString());
            string connString = System.Web.Configuration.WebConfigurationManager.ConnectionStrings["IntrinsicKey"].ConnectionString;
            SqlConnection conn = new SqlConnection(connString);
            string getTotalHoursWorked = "select Sum(Hours) as TotalHours from EmployeeProject where EmpID='" + EmpID + "'";
            SqlDataAdapter daH = new SqlDataAdapter(getTotalHoursWorked, conn);
            DataSet dsH = new DataSet();
            daH.Fill(dsH, "TotalHours");
            if (dsH.Tables["TotalHours"].Rows[0][0].ToString() != "")
            {
                decimal TotalHours = Convert.ToDecimal(dsH.Tables["TotalHours"].Rows[0][0]);
                
                SessionManager.Session["TotalWorkedHours"] = TotalHours;
            }
            else
            { SessionManager.Session["TotalWorkedHours"] = 0; }
        }

        partial void Tracker_PreprocessQuery(ref IQueryable<EmployeeProject> query)
        {
            //string EmpName = SessionManager.Session["EmpName"].ToString();
            //string connString = System.Web.Configuration.WebConfigurationManager.ConnectionStrings["IntrinsicKey"].ConnectionString;
            //SqlConnection conn = new SqlConnection(connString);
            //string sql = "Select EmpID from EmployeeDetails where EmpName='" + EmpName + "'";

            //SqlDataAdapter da = new SqlDataAdapter(sql, conn);
            //DataSet ds = new DataSet();
            //da.Fill(ds, "Emp");
            //int EmpID = Convert.ToInt32(ds.Tables["Emp"].Rows[0][0]);
            int EmpID = Convert.ToInt32(SessionManager.Session["EmpID"].ToString());
            query = query.Where(x => x.EmpID == EmpID);
        }

        partial void CandidateProject_PreprocessQuery(ref IQueryable<ProjectDetail> query)
        {
            //string EmpName = SessionManager.Session["EmpName"].ToString();
            //string connString = System.Web.Configuration.WebConfigurationManager.ConnectionStrings["IntrinsicKey"].ConnectionString;
            //SqlConnection conn = new SqlConnection(connString);
            //string sql = "Select EmpID from EmployeeDetails where EmpName='" + EmpName + "'";

            //SqlDataAdapter da = new SqlDataAdapter(sql, conn);
            //DataSet ds = new DataSet();
            //da.Fill(ds, "Emp");
            //int EmpID = Convert.ToInt32(ds.Tables["Emp"].Rows[0][0]);
            int EmpID = Convert.ToInt32(SessionManager.Session["EmpID"].ToString());
            query = query.Where(x => x.EmpID == EmpID);
        }


        partial void CandidateMonthDetails_PreprocessQuery(ref IQueryable<EmployeeMonth> query)
        {
            //string EmpName = SessionManager.Session["EmpName"].ToString();
            //string connString = System.Web.Configuration.WebConfigurationManager.ConnectionStrings["IntrinsicKey"].ConnectionString;
            //SqlConnection conn = new SqlConnection(connString);
            //string sql = "Select EmpID from EmployeeDetails where EmpName='" + EmpName + "'";

            //SqlDataAdapter da = new SqlDataAdapter(sql, conn);
            //DataSet ds = new DataSet();
            //da.Fill(ds, "Emp");
            //int EmpID = Convert.ToInt32(ds.Tables["Emp"].Rows[0][0]);
            int EmpID = Convert.ToInt32(SessionManager.Session["EmpID"].ToString());
            query = query.Where(x => x.EmpID == EmpID);
        }

        partial void ViewReportees_PreprocessQuery(ref IQueryable<EmployeeDetail> query)
        {
            //string EmpName = SessionManager.Session["EmpName"].ToString();
            //string connString = System.Web.Configuration.WebConfigurationManager.ConnectionStrings["IntrinsicKey"].ConnectionString;
            //SqlConnection conn = new SqlConnection(connString);
            //string sql = "Select EmpID from EmployeeDetails where EmpName='" + EmpName + "'";

            //SqlDataAdapter da = new SqlDataAdapter(sql, conn);
            //DataSet ds = new DataSet();
            //da.Fill(ds, "Emp");
            ////if(ds.Tables["Emp"].Rows.Count>0)
            //int EmpID = Convert.ToInt32(ds.Tables["Emp"].Rows[0][0]);
            int EmpID = Convert.ToInt32(SessionManager.Session["EmpID"].ToString());
            query = query.Where(x => x.EmployeeDetail1.EmpID == EmpID);
            
            //string ManagerID = "Select EmpID from EmployeeDetails where ManagerID='" + EmpID + "'";
            //SqlDataAdapter dam = new SqlDataAdapter(ManagerID, conn);
            //DataSet dsm = new DataSet();
            //dam.Fill(dsm, "Manager");
           
            //if (dsm.Tables["Manager"].Rows.Count > 0)
            //{
              
            //    for (int i = 0; i < dsm.Tables["Manager"].Rows.Count; i++)
            //    {
            //        int p = Convert.ToInt32(dsm.Tables["Manager"].Rows[i][0]);
            //        query = query.Where(x => x.EmpID == p);
                   
                    
            //    }
                
            //}
           
        }

        partial void GetSelfProjects_PreprocessQuery(ref IQueryable<ProjectDetail> query)
        {
            //string EmpName = SessionManager.Session["EmpName"].ToString();
            //string connString = System.Web.Configuration.WebConfigurationManager.ConnectionStrings["IntrinsicKey"].ConnectionString;
            //SqlConnection conn = new SqlConnection(connString);
            //string sql = "Select EmpID from EmployeeDetails where EmpName='" + EmpName + "'";

            //SqlDataAdapter da = new SqlDataAdapter(sql, conn);
            //DataSet ds = new DataSet();
            //da.Fill(ds, "Emp");
            ////if(ds.Tables["Emp"].Rows.Count>0)
            //int EmpID = Convert.ToInt32(ds.Tables["Emp"].Rows[0][0]);
            int EmpID = Convert.ToInt32(SessionManager.Session["EmpID"].ToString());
            query = query.Where(x => x.EmpID == EmpID);
        }

        partial void SaveChanges_Executed()
        {
            //Calculated total hours
            int EmpID = Convert.ToInt32(SessionManager.Session["EmpID"].ToString());
            string connString = System.Web.Configuration.WebConfigurationManager.ConnectionStrings["IntrinsicKey"].ConnectionString;
            SqlConnection conn = new SqlConnection(connString);
            string getTotalHoursWorked = "select Sum(Hours) as TotalHours from EmployeeProject where EmpID='" + EmpID + "'";
            SqlDataAdapter dai = new SqlDataAdapter(getTotalHoursWorked, conn);
            DataSet dsi = new DataSet();
            dai.Fill(dsi, "TotalHours");
            if (dsi.Tables["TotalHours"].Rows[0][0].ToString() != "")
            {
                decimal TotalHours = Convert.ToDecimal(dsi.Tables["TotalHours"].Rows[0][0]);
                SessionManager.Session["TotalWorkedHours"] = TotalHours;
            }
            else
            { SessionManager.Session["TotalWorkedHours"] = 0; }
            
        }

        partial void Parameters_PreprocessQuery(string MonthName, string ProjectName, ref IQueryable<EmployeeProject> query)
        {
            int EmpID = Convert.ToInt32(SessionManager.Session["EmpID"].ToString());
            query = query.Where(x => x.EmpID == EmpID);

        }

        partial void Months_Inserting(Months entity)
        {
            entity.WorkingDays = entity.WeekDays - entity.Holidays;
            entity.TotalHours = entity.WorkingDays * 8;
        }

        partial void Utilization_PreprocessQuery(ref IQueryable<UtilizationCalculation> query)
        {
            int EmpID = Convert.ToInt32(SessionManager.Session["EmpID"].ToString());
            query = query.Where(x => x.EmpID == EmpID);
        }

        partial void TotalHoursProjectWise_PreprocessQuery(ref IQueryable<TotalHoursProjectwiseforMonth> query)
        {
            int EmpID = Convert.ToInt32(SessionManager.Session["EmpID"].ToString());
            query = query.Where(x => x.EmpID == EmpID);
        }

        partial void ProjectReportsforUser_PreprocessQuery(ref IQueryable<ProjectReport> query)
        {
            int EmpID = Convert.ToInt32(SessionManager.Session["EmpID"].ToString());
            query = query.Where(x => x.EmpID == EmpID);
        }

        partial void NoOfHoursPerDay_PreprocessQuery(ref IQueryable<HoursPerDay> query)
        {
            int EmpID = Convert.ToInt32(SessionManager.Session["EmpID"].ToString());
            query = query.Where(x => x.EmpID == EmpID);
        }

        partial void ProjectDetails_Updating(ProjectDetail entity)
        {
            //entity.EmpID = Convert.ToInt32(SessionManager.Session["EmpID"].ToString());
            entity.ComplexityAvg = (entity.ComplexityDifficultyLevel + entity.ComplexityScope) / 2;
        }

        partial void Months_Updating(Months entity)
        {
            entity.WorkingDays = entity.WeekDays - entity.Holidays;
            entity.TotalHours = entity.WorkingDays * 8;
        }

        partial void TotalHoursForaProject_PreprocessQuery(ref IQueryable<TotalHoursAllMonthsForProject> query)
        {
            int EmpID = Convert.ToInt32(SessionManager.Session["EmpID"].ToString());
            query = query.Where(x => x.EmpID == EmpID);
        }

        partial void ProjectScore_PreprocessQuery(ref IQueryable<ComplexityandQualityShare> query)
        {
            int EmpID = Convert.ToInt32(SessionManager.Session["EmpID"].ToString());
            query = query.Where(x => x.EmpID == EmpID);
        }

        partial void CandidateProjectScore_PreprocessQuery(ref IQueryable<TotalProjectScore> query)
        {
            int EmpID = Convert.ToInt32(SessionManager.Session["EmpID"].ToString());
            query = query.Where(x => x.EmpID == EmpID);
        }


       

        partial void DistinctProjectList_PreprocessQuery(ref IQueryable<DistinctProject> query)
        {
            int EmpID = Convert.ToInt32(SessionManager.Session["EmpID"].ToString());
            query = query.Where(x => x.ProjectManagerID== EmpID);
           
        }

        partial void CompanySelfProjects_PreprocessQuery(ref IQueryable<CompanyProject> query)
        {
            int EmpID = Convert.ToInt32(SessionManager.Session["EmpID"].ToString());
            query = query.Where(x => x.EmpID == EmpID);
        }

        partial void EmailList_PreprocessQuery(ref IQueryable<EmailDropdown> query)
        {

            int EmpID = Convert.ToInt32(SessionManager.Session["EmpID"].ToString());
            query = query.Where(x => x.EmpID == EmpID);
        }

        partial void AvgUtilization_PreprocessQuery(ref IQueryable<AvgUtilization> query)
        {
            int EmpID = Convert.ToInt32(SessionManager.Session["EmpID"].ToString());
            query = query.Where(x => x.EmpID == EmpID);
        }

      

        partial void PMTeamProjectList_PreprocessQuery(ref IQueryable<PMTeamProject> query)
        {
            int EmpID = Convert.ToInt32(SessionManager.Session["EmpID"].ToString());
            query = query.Where(x => x.EmpID == EmpID);
        }




        //partial void CompanyProjects_Inserting(CompanyProject entity)
        //{
        //    string connString = System.Web.Configuration.WebConfigurationManager.ConnectionStrings["IntrinsicKey"].ConnectionString;
        //    SqlConnection conn = new SqlConnection(connString);
        //    SqlCommand cmd = new SqlCommand();

        //    string CheckEmp = "select EmpName from CompanyProjects where ProjectName='" + entity.ProjectName + "'";
        //    SqlDataAdapter daH = new SqlDataAdapter(CheckEmp, conn);
        //    DataSet dsH = new DataSet();
        //    daH.Fill(dsH, "ChkEmp");
        //    if (dsH.Tables["ChkEmp"].Rows[0][0].ToString() != "")
        //    {
        //        string insert = "update CompanyProjects set EmpName='" + entity.EmpName + "',EmpRole='" + entity.EmpRole + "' where ProjectName='" + entity.ProjectName + "' and ProjectType='"+entity.ProjectType+"'";
        //        cmd = new SqlCommand(insert, conn);
        //        cmd.ExecuteNonQuery();
        //    }
        //    else {
        //        string insert = "INSERT into CompanyProjects (ProjectName,ProjectType,EmpName,EmpRole) " + " VALUES ('" + entity.ProjectName + "', '" + entity.ProjectType + "', '"+entity.EmpName+"','"+entity.EmpRole+"');";
        //        cmd = new SqlCommand(insert, conn);
        //        cmd.ExecuteNonQuery();
        //    }
        //}



        //partial void EmployeeProjects_Inserted(EmployeeProject entity)
        //{
        //    //Calculated total hours
        //    int EmpID = Convert.ToInt32(SessionManager.Session["EmpID"].ToString());
        //    string connString = System.Web.Configuration.WebConfigurationManager.ConnectionStrings["IntrinsicKey"].ConnectionString;
        //    SqlConnection conn = new SqlConnection(connString);
        //    string getTotalHoursWorked = "select Sum(Hours) as TotalHours from EmployeeProject where EmpID='" + EmpID + "'";
        //    SqlDataAdapter dai = new SqlDataAdapter(getTotalHoursWorked, conn);
        //    DataSet dsi = new DataSet();
        //    dai.Fill(dsi, "TotalHours");
        //    if (dsi.Tables["TotalHours"].Rows[0][0].ToString() != "")
        //    {
        //        int TotalHours = Convert.ToInt32(dsi.Tables["TotalHours"].Rows[0][0]);
        //        SessionManager.Session["TotalWorkedHours"] = TotalHours;
        //    }
        //    else
        //    { SessionManager.Session["TotalWorkedHours"] = 0; }
        //}

        //partial void EmployeeDetails_Inserting(EmployeeDetail entity)
        //{
        //    //String query = "INSERT INTO dbo.SMS_PW (id,username,password,email) VALUES(@id,@username,@password, @email)";

        //    string connString = System.Web.Configuration.WebConfigurationManager.ConnectionStrings["IntrinsicKey"].ConnectionString;
        //    SqlConnection conn = new SqlConnection(connString);
        //    string sql = "INSERT into EmployeeDetails where EmpName='" + EmpName + "'";
        //    command.Parameters.Add("@id", "abc");
        //    command.Parameters.Add("@username", "abc");
        //    command.Parameters.Add("@password", "abc");
        //    command.Parameters.Add("@email", "abc");

        //    command.ExecuteNonQuery();
        //}


        //partial void GetManagers_PreprocessQuery(ref IQueryable<EmployeeDetail> query)
        //{
        //    query = query.Where(x => x.Role== "Manager");
        //}


        //partial void UserName_CanExecute(ref bool result)
        //{
        //    string siri = SessionManager.Session["UserName"].ToString();

        //}

        //partial void CanAddEmployees_CanExecute(ref bool result)
        //{
        //    string EmpName = SessionManager.Session["UserName"].ToString();
        //    string connString = System.Web.Configuration.WebConfigurationManager.ConnectionStrings["IntrinsicKey"].ConnectionString;
        //    SqlConnection conn = new SqlConnection(connString);
        //    string sql = "Select Designation from EmployeeDetails where UserName='" + EmpName + "'";
        //    SqlDataAdapter da = new SqlDataAdapter(sql, conn);
        //    DataSet ds = new DataSet();
        //    da.Fill(ds, "Emp");
        //    string Designation = ds.Tables["Emp"].Rows[0][0].ToString();
        //    if (Designation == "Data Analyst")
        //    {

        //        result = Application.User.HasPermission(Permissions.Month);
        //    }
        //}
    }
}