using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace PortfolioMobile1.ViewModels
{
    public class MyStackListViewModel  : INotifyPropertyChanged
    {

       

        // This method is called by the Set accessor of each property.  
        // The CallerMemberName attribute that is applied to the optional propertyName  
        // parameter causes the property name of the caller to be substituted as an argument.  
        private void NotifyPropertyChanged([CallerMemberName] String propertyName = "")
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
        public event PropertyChangedEventHandler? PropertyChanged;

        private ArrayList _MyStackList = new ArrayList
        {
            "JavaScript",
            "Python",
            "C#",
            "MongoDB",
            "SQL",
            "React",
            "Bootstrap 5",
            "ASP.NET MVC",
            ".NET MAUI MVVM"
        };
        public ArrayList MyStackList
        {
            get => _MyStackList;
            set
            {
                if (_MyStackList != value)
                {
                    _MyStackList = value;
                    

                }
                
            }
        }

        
        public MyStackListViewModel()
        {
            _MyStackList[0] = new ArrayList()
            {
               "AJAX",
               "JQuery",
               "NodeJS",
               "TypeScript"
            };
        }

       

    }
}
