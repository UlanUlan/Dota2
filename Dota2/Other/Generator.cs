using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Web;
using System.Web.Services;

namespace Dota2
{
    public class Generator
    {
        public static string pathToGallery = @"C:\Users\Adminushka\source\repos\Dota2\Dota2\Images\Gallery\";
        public static string pathToHeroesIconsGif = @"C:\Users\Adminushka\source\repos\Dota2\Dota2\Images\HeroesIcons\";


        [WebMethod()]
        [System.Web.Script.Services.ScriptMethod()]
        public static bool SendToMail(string sender, string text)
        {
            MailMessage mail = new MailMessage();
            mail.From = new MailAddress("spider-man-shag@mail.ru"); // Адрес отправителя
            mail.To.Add(new MailAddress("real_user@list.ru")); // Адрес получателя
            mail.Subject = "Вопрос с сайта";
            mail.Body = text;
            mail.Attachments.Add(new Attachment("real_user@list.ru"));

            SmtpClient client = new SmtpClient();
            client.Host = "smtp.mail.ru";
            client.Port = 587; // Обратите внимание что порт 587
            client.EnableSsl = true;
            client.Credentials = new NetworkCredential("spider-man-shag@mail.ru", "Qwerty123#"); // Ваши логин и пароль

            try
            {
                client.Send(mail);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public static void getResponse()
        {
            string uri = "https://dota2.ru/";
            StringBuilder sb = new StringBuilder();
            byte[] buf = new byte[8192];
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(uri);
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();
            Stream resStream = response.GetResponseStream();
            int count = 0;
            do
            {
                count = resStream.Read(buf, 0, buf.Length);
                if (count != 0)
                {
                    sb.Append(Encoding.Default.GetString(buf, 0, count));
                }
            }
            while (count > 0);
            StreamWriter file = new StreamWriter(@"C:\\sql\parse.txt");
            file.Write(sb.ToString());
            file.Close();
        }

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

        public static List<string> GetThreeRandom(List<string> list)
        {
            List<string> newList = new List<string>();
            Random random = new Random();
            int n = list.Count;
            newList.Add(list[random.Next(n + 1)]);
            newList.Add(list[random.Next(n + 1)]);
            newList.Add(list[random.Next(n + 1)]);
            return newList;
        }

        public static void Shuffle(List<string> list)
        {
            Random random = new Random();
            int n = list.Count;
            while (n > 1)
            {
                n--;
                int k = random.Next(n + 1);
                string value = list[k];
                list[k] = list[n];
                list[n] = value;
            }
        }

        public static void Shuffle(List<string> list, List<string> list1)
        {
            Random random = new Random();
            int n = list.Count;
            while (n > 1)
            {
                n--;
                int k = random.Next(n + 1);
                string value = list[k];
                string value1 = list1[k];
                list[k] = list[n];
                list1[k] = list1[n];
                list[n] = value;
                list1[n] = value1;
            }
        }

        public static void TakeItEasy()
        {
            string path = HttpContext.Current.Server.MapPath("~/Images/Gallery");

            string[] imgsPaths = Directory.GetFiles(path);

            for (int i = 0; i < imgsPaths.Length; i++)
            {

                string format = "." + imgsPaths[i].Split('.').Last();
                string Old = pathToGallery + imgsPaths[i].Split('\\').Last();
                string New = pathToGallery + i + format;
                string Gif = pathToGallery + i + ".gif"; 
                string Jpg = pathToGallery + i + ".jpg";
                string Png = pathToGallery + i + ".png";
                if (!System.IO.File.Exists(Gif)&& !System.IO.File.Exists(Jpg) && !System.IO.File.Exists(Png))
                {
                    System.IO.File.Move(Old, New);
                }
            }
        }
    }
}