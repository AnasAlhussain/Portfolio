export const projects = [
  
    // To use your own project photo, just place it in /public/assets and write the link as I did: eg: /assets/my_image.jpg
    // Of course it's best to convert your image file type to webp for better performance on the web!
    // Or just use a cloud image hosting platform like cloudinary and use the image url from there.
    
  

   {
    //  ImageURL: "/Portfolio/assets/hqdefault.jpg",
     ImageURL: `${import.meta.env.BASE_URL}assets/hqdefault.webp`,
    Title: "Budget-Tracker",
    Description:
      "A full-stack Budget-Tracker app for tracking your expenses and income.",
    Technologies: [
      "C#",
      "Entity Framework",
      "Bootstrap",
      "ASP.NET Core",
      "responsive",
      "SQL Server",
      "Azure",
      "AspNet Identity",
      "MVC",
      "Syncfusion",
      "AutoMapper",
      "FluentValidation",
    ],
    Source: "https://github.com/AnasAlhussain/Budget-Tracker.git",
    Demo: "",
  },
   {
    // ImageURL: "/Portfolio/assets/67b77cdc2de40.image.jpg",
    ImageURL: `${import.meta.env.BASE_URL}assets/67b77cdc2de40.image.jpg`,
    Title: "WebShop-Candy",
    Description:
      "A full-stack WebShop app for  buying candies online.",
    Technologies: [
      "C#",
      "Entity Framework",
      "Bootstrap",
      "ASP.NET Core",
      "responsive",
      "SQL Server",
      "Azure",
      "AspNet Identity",
      "MVC",
      
    ],
    Source: "https://github.com/AnasAlhussain/SUT23-MinmalAPI_MVCUI.git",
    Demo: "",
  },
  {
    // ImageURL: "/Portfolio/assets/Banner-–-1-scaled.jpg",
    ImageURL: `${import.meta.env.BASE_URL}assets/Banner-–-1-scaled.webp`,
    Title: "MinmalAPI_MVC UI",
    Description:
      "A full-stack MinmalAPI_MVC UI for managing products and categories.",
    Technologies: [
      "C#",
      "Entity Framework",
      "Bootstrap",
      "ASP.NET Core",
      "responsive",
      "SQL Server",
      "Azure",
      "AspNet Identity",
      "MVC",
      "MinmalAPI",
      "AutoMapper",
      "Migration",
      "Microservices",
      
    ],
    Source: "https://github.com/AnasAlhussain/WebShop-Candy.git",
    Demo: "",
  },

   {
    // ImageURL: "/Portfolio/assets/hq720.jpg",
        ImageURL: `${import.meta.env.BASE_URL}assets/hq720.webp`,

    Title: "Amaing Teknik",
    Description:
      "A Rest API Amaing Teknik for managing products, orders and customers.",
    Technologies: [
      "C#",
      "Entity Framework",
      "ASP.NET Core",
      "Rest API",
      "SQL Server",
      "Azure",
      "AutoMapper",
      "Migration",
      
    ],
    Source: "https://github.com/AnasAlhussain/SUT22-AmaingTeknik.git",
    Demo: "",
  },

  
];
