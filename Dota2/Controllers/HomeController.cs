using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Dota2.Models;

namespace Dota2.Controllers
{
    public class HomeController : Controller
    {
        HeroContext db = new HeroContext();

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult Heroes()
        {
            return View();
        }
        
        public ActionResult Hero()
        {
           
            return View(db.Heroes);
        }

        public ActionResult Stream()
        {
            return View();
        }

       public ActionResult Contacts()
        {
            return View();
        }
    }
}