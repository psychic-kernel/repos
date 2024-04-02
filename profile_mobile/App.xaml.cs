using PortfolioMobile1.ViewModels;
namespace PortfolioMobile1
{
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();

            MainPage = new AppShell();
            BindingContext = new MainPageViewModel();
            BindingContext = new MyStackListViewModel();
        }
    }
}
