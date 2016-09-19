using System;
using System.Collections.Generic;
using System.Linq;


namespace LightSwitchApplication
{
    public static class SessionManager
    {
        private static Dictionary<string, object> session = new Dictionary<string, object>();

        public static Dictionary<string, object> Session
        {
            get { return SessionManager.session; }
            set { SessionManager.session = value; }
        }
    }
}
