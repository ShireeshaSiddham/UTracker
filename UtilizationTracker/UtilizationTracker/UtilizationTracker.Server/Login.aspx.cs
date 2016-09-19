using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Configuration;
using System.Web.Security;
using System.Data.Sql;
using System.Data;


namespace LightSwitchApplication
{
    public partial class Login : System.Web.UI.Page
    {
        //string str;
        protected void Page_Load(object sender, EventArgs e)
        {
            
            if (!Page.IsPostBack)
            { 
                //CheckBox cek = (CheckBox)Login1.FindControl("RememberMe");

                //if (Request.Cookies["username"] == null || Request.Cookies["username"].Value.ToString().Trim() == "")
                //{
                //    cek.Checked = false;
                //}
                //else
                //{

                //    Login1.UserName = Request.Cookies["username"].Value.ToString();
                //}
            }
        }

     
        protected void LoginButton_Click1(object sender, EventArgs e)
        {
            SessionManager.Session["UserName"] = Login1.UserName;
            SessionManager.Session["Password"] = Login1.Password;
            Session["UserName"] = Login1.UserName;
            string connString = System.Web.Configuration.WebConfigurationManager.ConnectionStrings["IntrinsicKey"].ConnectionString;
            SqlConnection conn = new SqlConnection(connString);
            string EmpName = SessionManager.Session["UserName"].ToString();
            //string connString = System.Web.Configuration.WebConfigurationManager.ConnectionStrings["IntrinsicKey"].ConnectionString;
            //SqlConnection conn = new SqlConnection(connString);
            string Emp = "Select EmpID from EmployeeDetails where UserName='" + EmpName + "'";
            SqlDataAdapter dae = new SqlDataAdapter(Emp, conn);
            DataSet dse = new DataSet();
            dae.Fill(dse, "Emp");
            if (dse.Tables["Emp"].Rows.Count > 0)
            {
                SessionManager.Session["EmpID"] = dse.Tables["Emp"].Rows[0][0];

                //entity.EmpID = Convert.ToInt32(ds.Tables["Emp"].Rows[0][0]);


                // string sql = "Select EmpName,Role from EmployeeDetails where UserName='" + Login1.UserName + "'";
                string sql = "select e.EmpName, e.[Role], e.Email, e1.Email as ManagerMail,e1.EmpName as ManagerName, e.ManagerID from EmployeeDetails e inner join EmployeeDetails e1 On e.ManagerID = e1.EmpID where e.UserName = '" + Login1.UserName + "'";

            SqlDataAdapter da = new SqlDataAdapter(sql, conn);
            DataSet ds = new DataSet();
            da.Fill(ds, "Details");
            if (ds.Tables["Details"].Rows.Count > 0)
            {
                SessionManager.Session["EmpName"] = ds.Tables["Details"].Rows[0][0].ToString();
                SessionManager.Session["Role"] = ds.Tables["Details"].Rows[0][1].ToString();
                    SessionManager.Session["Email"] = ds.Tables["Details"].Rows[0][2].ToString();
                    SessionManager.Session["ManagerMail"] = ds.Tables["Details"].Rows[0][3].ToString();
                }
            else {
                Response.Redirect("Login.aspx");                
            }

            string ProjectRole = "Select EmpRole from AssignProjects where EmpID='" + SessionManager.Session["EmpID"] + "'";
            SqlDataAdapter dap = new SqlDataAdapter(ProjectRole, conn);
            DataSet dsp = new DataSet();
            dap.Fill(dsp, "ProjectRole");
            if (dsp.Tables["ProjectRole"].Rows.Count > 0)
            {
                SessionManager.Session["ProjectRole"] = dsp.Tables["ProjectRole"].Rows[0][0].ToString();
            }
            else {
                SessionManager.Session["ProjectRole"] = null;
            }

            //CheckBox cek = (CheckBox)Login1.FindControl("RememberMe");
            //if (cek.Checked == true)
            //{
            //    HttpCookie cookie = new HttpCookie("username");
            //    cookie.Value = Login1.UserName;

            //    cookie.Expires = DateTime.Now.AddDays(1);//cookie Expires
            //    HttpContext.Current.Response.AppendCookie(cookie);
            //}
            //else {
            //    HttpContext.Current.Response.Cookies.Remove("username");
            //}
           // cek.Checked = false;

            }
            else
            {

            }
        }
    }

}