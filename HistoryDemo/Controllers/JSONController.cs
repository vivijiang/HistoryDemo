using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HistoryDemo.Controllers
{
    public class JSONController : Controller
    {
        //private class Area
        //{
        //    public int AreaId { get; set; }
        //    public string AreaName { get; set; }

        //}

        //
        // GET: /JSON/
        public ActionResult Products()
        {
            return View();
        }

        public JsonResult Areas(int product)
        {
            var obj = new[] { new { AreaName = "", AreaId = 0 } };
            if (product == 1)
            {
                obj = new[] 
            { 
                new { AreaName = "Area1", AreaId = 1 },
                new { AreaName = "Area2", AreaId = 2 },
                new { AreaName = "Area3", AreaId = 3 }
            };
            }
            else {
                obj = new[] 
            { 
                new { AreaName = "AreaTest1", AreaId = 1 },
                new { AreaName = "AreaTest2", AreaId = 2 },
                new { AreaName = "AreaTest3", AreaId = 3 }
            };
            }
            return Json(obj, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Blurbs(int product, int area)
        {
            var obj = new[] { new { BlurbName = "", BlurbId = 0 } };
            if (area == 1) {
                obj = new[] 
            { 
                new { BlurbName = "Blurbtest1", BlurbId = 1 },
                new { BlurbName = "Blurbtest2", BlurbId = 2 },
                new { BlurbName = "Blurbtest3", BlurbId = 3 }
            };
            }
            else if (area == 2)
            {
                obj = new[] 
            { 
                new { BlurbName = "Blurbyo1", BlurbId = 1 },
                new { BlurbName = "Blurbyo2", BlurbId = 2 },
                new { BlurbName = "Blurbyo3", BlurbId = 3 }
            };
            }
             

            return Json(obj, JsonRequestBehavior.AllowGet);
        }
    }
}