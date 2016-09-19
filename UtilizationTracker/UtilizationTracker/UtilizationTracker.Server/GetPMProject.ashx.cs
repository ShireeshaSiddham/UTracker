using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Data;

namespace LightSwitchApplication
{
    /// <summary>
    /// Summary description for GetPMProject
    /// </summary>
    public class GetPMProject : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            string SendEmailTo = context.Request.Form["SendEmailTo"];
            DataTable dt = new DataTable();
            string connString = System.Web.Configuration.WebConfigurationManager.ConnectionStrings["IntrinsicKey"].ConnectionString;
            SqlConnection conn = new SqlConnection(connString);
            var EmpName = SessionManager.Session["EmpName"];
            //string GetEmpID = "select EmpID from EmployeeDetails where EmpName='" + SendEmailTo + "'";
            //SqlDataAdapter da = new SqlDataAdapter(GetEmpID, conn);
            //da.Fill(dt);

            //   string EmpID = dt.Rows[0][0].ToString();

            //DataTable dt3 = new DataTable();
            string CheckRole = "select ProjectName from PMTeamProjects where ManagerName='" + SendEmailTo + "' and EmpName='" + EmpName + "' ";
            SqlDataAdapter da = new SqlDataAdapter(CheckRole, conn);
            da.Fill(dt);
            if (dt.Rows.Count > 0)
            {
               
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    var Pname = dt.Rows[i][0];
                    context.Response.Write(Pname);
                }
            }
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}