using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Dota2
{
    public class Generator
    {
        
        public static double GetRandomNumber(double minimum, double maximum)
        {
            Random random = new Random();
            return Math.Round((random.NextDouble() * (maximum - minimum) + minimum), 2);
        }

        public static int GetRandomNumber(int minimum, int maximum)
        {
            Random random = new Random();
            return random.Next(minimum, maximum);
        }
    }
}