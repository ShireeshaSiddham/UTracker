using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Data;

namespace LightSwitchApplication
{
    /// <summary>
    /// Summary description for ProjectType
    /// </summary>
    public class ProjectType : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            DataTable dt = new DataTable();
            string ProjectName = context.Request.Form["sdd"];
            string connString = System.Web.Configuration.WebConfigurationManager.ConnectionStrings["IntrinsicKey"].ConnectionString;
            SqlConnection conn = new SqlConnection(connString);
            string getProjectType = "select ProjectType from ProjectsInCompany where ProjectName='" + ProjectName + "'";
            SqlDataAdapter da = new SqlDataAdapter(getProjectType, conn);
            da.Fill(dt);
            if (dt.Rows.Count > 0)
            {
                string ProjectType = dt.Rows[0][0].ToString();
                context.Response.ContentType = "text/plain";
                context.Response.Write(ProjectType);
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