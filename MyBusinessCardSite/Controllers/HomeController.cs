using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MyBusinessCardSite.Models;

namespace MyBusinessCardSite.Controllers
{
    public class HomeController : Controller
    {
        public bool IsBadBrowser()
        {
            try
            {
                return false;
                //return 
                //    new [] { "internetexplorer", "internet explorer", "ie" }.Contains(Request.Browser.Browser.ToLower()) &&
                //    int.Parse(Request.Browser.Version.Split('.').First()) < 10;
            }
            catch (Exception)
            {
                return false;
            }
        }
        
        // GET: Home
        public ActionResult Index()
        {
            if (IsBadBrowser()) return View("BadBrowser");
            return View();
        }
        public ViewResult Album()
        {
            if (IsBadBrowser()) return View("BadBrowser");
            return View();
        }

        [HttpGet]
        public ViewResult Contact()
        {
            if (IsBadBrowser()) return View("BadBrowser");
            return View();
        }
        [HttpPost]
        public ViewResult Contact(ContactModel contactModel)
        {
            if (IsBadBrowser()) return View("BadBrowser");
            if (ModelState.IsValid)
                return View("Thanks", contactModel);
            else
                return View();
        }

        public ViewResult Game()
        {
            if (IsBadBrowser()) return View("BadBrowser");
            return View();
        }

        public ViewResult Error404()
        {
            if (IsBadBrowser()) return View("BadBrowser");
            return View();
        }
    }
}