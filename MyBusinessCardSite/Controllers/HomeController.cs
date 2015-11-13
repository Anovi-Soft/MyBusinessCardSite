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
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        public ViewResult Album()
        {
            return View();
        }

        [HttpGet]
        public ViewResult Contact()
        {
            return View();
        }
        [HttpPost]
        public ViewResult Contact(ContactModel contactModel)
        {
            if (ModelState.IsValid)
                return View("Thanks", contactModel);
            else
                return View();
        }

        public ViewResult Game()
        {
            return View();
        }

        public ViewResult Error404()
        {
            return View();
        }
    }
}