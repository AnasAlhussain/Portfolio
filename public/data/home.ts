import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";

export const homeData = {
  // To use your own photo, just place it in /public/assets and write the link as I did: eg: /assets/my_image.jpg
  // Of course it's best to convert your image file type to webp for better performance on the web!
  // The links are optional
  myImage: "Portfolio/assets/profile-pic(2).png",
  // new URL("./assets/profile-pic(2).png", import.meta.url).href,
  contactInfo: [
    {
      Icon: IoMdMail,
      Label: "anasalhussain.sweeden@hotmail.com",
      Link: "/contact", // This refers to the Contact page in the website, you can change it to whatever you like
    },
    {
      Icon: FaLocationDot,
      Label: "Borås, Sweden",
      Link: "https://www.google.se/maps/search/%7B%7Badress%7D%7D+Bor%C3%A5s/@57.724586,12.7623652,11z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D", // This is just a simple location of my city
    },
    {
      Icon: FaPhoneAlt,
      Label: "+46 736 38 3599",
      Link: "tel:+46736383599",
    },
  ],
  education: [
    {
      Icon: FaUniversity,
      Label: "Medieinstitutet",
      Link: "https://medieinstitutet.se/",
    },
    {
      Icon: FaGraduationCap,
      Label: "Artificial intelligence/machine learning",
      Link: "https://medieinstitutet.se/utbildningar/artificiell-intelligens-maskininlarning/",
    },
    {
      Icon: FaUniversity,
      Label: "IT-Högskolan",
      Link: "https://www.iths.se/",
    },
    {
      Icon: FaGraduationCap,
      Label: "CLoud Computing and DevOps Azure",
      Link: "https://www.iths.se/",
    },
     {
      Icon: FaUniversity,
      Label: "Utbildning Nord",
      Link: "https://utbnord.se/vara-utbildningar",
    },
    {
      Icon: FaGraduationCap,
      Label: "Programmer and System Developer",
      Link: "https://medieinstitutet.se/utbildningar/artificiell-intelligens-maskininlarning/",
    },
    {
      Icon: FaUniversity,
      Label: "Al-Furat University",
      Link: "https://alfuratuniv.edu.sy/",
    },
    {
      Icon: FaGraduationCap,
      Label: "Economics degree / projects management",
      Link: "https://cis.asu.edu.eg/",
    },
     {
      Icon: FaUniversity,
      Label: "Damascus University",
      Link: "https://www.damascusuniversity.edu.sy/index.php?lang=2",
    },
    {
      Icon: FaGraduationCap,
      Label: "Bank and Trade Institute",
      Link: "https://www.damascusuniversity.edu.sy/index.php?lang=2",
    },
  ],
  social: [
    {
      Icon: FaGithub,
      Label: "GitHub",
      Link: "https://github.com/AnasAlhussain",
    },
    {
      Icon: FaLinkedin,
      Label: "LinkedIn",
      Link: "https://www.linkedin.com/in/anas-alhussain-25978b160/",
    },
   
  ],
};
