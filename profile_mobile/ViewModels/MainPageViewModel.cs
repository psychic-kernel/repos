using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using CommunityToolkit;
using CommunityToolkit.Mvvm.ComponentModel;
namespace PortfolioMobile1.ViewModels
{
    public class MainPageViewModel : ObservableObject
    {
        /*public event PropertyChangedEventHandler? PropertyChanged;

        // This method is called by the Set accessor of each property.  
        // The CallerMemberName attribute that is applied to the optional propertyName  
        // parameter causes the property name of the caller to be substituted as an argument.  
        private void OnPropertyChanged([CallerMemberName] String propertyName = "")
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }

        string text;
        public string Text
        {
            get => text;
            set
            {
                if(text != value)
                {
                    text = value;
                    OnPropertyChanged();
                    
                } 
            }
        }*/
        [ObservableProperty]
        string text;

        
        public string FullName { get; set; } = "Michael A. Robins";

        
       
    }
}
