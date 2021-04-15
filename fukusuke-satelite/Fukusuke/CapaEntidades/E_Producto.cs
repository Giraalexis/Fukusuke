using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CapaEntidades
{
    public class E_Producto
    {
        private int _ID;
        private string _NAME;
        private string _DESCRIPTION;
        private int _PROMOTION;
        private int _STOCK;
        private int _PRICE;
        private int _STATE;
        private string _IMAGE;

        public int ID { get => _ID; set => _ID = value; }
        public string NAME { get => _NAME; set => _NAME = value; }
        public string DESCRIPTION { get => _DESCRIPTION; set => _DESCRIPTION = value; }
        public int PROMOTION { get => _PROMOTION; set => _PROMOTION = value; }
        public int STOCK { get => _STOCK; set => _STOCK = value; }
        public int PRICE { get => _PRICE; set => _PRICE = value; }
        public int STATE { get => _STATE; set => _STATE = value; }
        public string IMAGE { get => _IMAGE; set => _IMAGE = value; }
    }
}
