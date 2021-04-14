using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaEntidades
{
    public class E_Empleado
    {
        private int _ID;
        private string _NAME;
        private int _RUT;
        private DateTime _DATE_BURN;
        private int _TELPHONE;
        private string _EMAIL;
        private string _PASSWORD;
        private int _STATE;
        private int COMMUNE_ID;
        private int _ROLE_ID;
        private int _SEX_ID;

        public int ID { get => _ID; set => _ID = value; }
        public string NAME { get => _NAME; set => _NAME = value; }
        public int RUT { get => _RUT; set => _RUT = value; }
        public DateTime DATE_BURN { get => _DATE_BURN; set => _DATE_BURN = value; }
        public int TELPHONE { get => _TELPHONE; set => _TELPHONE = value; }
        public string EMAIL { get => _EMAIL; set => _EMAIL = value; }
        public string PASSWORD { get => _PASSWORD; set => _PASSWORD = value; }
        public int STATE { get => _STATE; set => _STATE = value; }
        public int COMMUNE_ID1 { get => COMMUNE_ID; set => COMMUNE_ID = value; }
        public int ROLE_ID { get => _ROLE_ID; set => _ROLE_ID = value; }
        public int SEX_ID { get => _SEX_ID; set => _SEX_ID = value; }
    }
}
