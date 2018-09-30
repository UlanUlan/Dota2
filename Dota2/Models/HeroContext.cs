using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Dota2.Models
{
    public class HeroContext : DbContext
    {
        public DbSet<Hero> Heroes { get; set; }
    }
}