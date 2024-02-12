document.write(`
<!-- required meta -->
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="shortcut icon" href="assets/images/favicon.png" type="image/x-icon">
   <title>Code Digi Lab</title>
   <meta name="keywords" content="Artificial, Ai, Network, Html">
   <meta name="description" content="Artificial Neural Network AI HTML Template">
   <link rel="stylesheet" href="assets/vendor/bootstrap/css/bootstrap.min.css">
   <link rel="stylesheet" href="assets/vendor/bootstrap-icons/bootstrap-icons.min.css">
   <link rel="stylesheet" href="assets/vendor/material-icons/css/materialicons.css">
   <link rel="stylesheet" href="assets/vendor/font-awesome/css/all.css">
   <link rel="stylesheet" href="assets/vendor/magnific-popup/css/magnific-popup.css">
   <link rel="stylesheet" href="assets/vendor/jquery-ui/css/jquery-ui.min.css">
   <link rel="stylesheet" href="assets/vendor/slick/css/slick.css">
   <link rel="stylesheet" href="assets/vendor/odometer/css/odometer.css">
   <link rel="stylesheet" href="assets/css/main.css">
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

   <script>
      function myFunction() {
         var dots = document.getElementById("dots");
         var moreText = document.getElementById("more");
         var dots1 = document.getElementById("dots1");
         var moreText1 = document.getElementById("more1");
         var btnText = document.getElementById("myBtn");
         var btnText1 = document.getElementById("myBtn1");

         var dots2 = document.getElementById("dots2");
         var moreText2 = document.getElementById("more2");
         var btnText2 = document.getElementById("myBtn2");

         var dots3 = document.getElementById("dots3");
         var moreText3 = document.getElementById("more3");
         var btnText3 = document.getElementById("myBtn3");


         if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
         } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
         }

         if (dots1.style.display === "none") {
            dots1.style.display = "inline";
            btnText1.innerHTML = "Read more";
            moreText1.style.display = "none";
         } else {
            dots1.style.display = "none";
            btnText1.innerHTML = "Read less";
            moreText1.style.display = "inline";
         }
         if (dots2.style.display === "none") {
            dots2.style.display = "inline";
            btnText2.innerHTML = "Read more";
            moreText2.style.display = "none";
         } else {
            dots2.style.display = "none";
            btnText2.innerHTML = "Read less";
            moreText2.style.display = "inline";
         }

         if (dots3.style.display === "none") {
            dots3.style.display = "inline";
            btnText3.innerHTML = "Read more";
            moreText3.style.display = "none";
         } else {
            dots3.style.display = "none";
            btnText3.innerHTML = "Read less";
            moreText3.style.display = "inline";
         }
      }
   </script>
   <style>
      #more {
         display: none;
      }

      #more1 {
         display: none;
      }

      #more2 {
         display: none;
      }

      #more3 {
         display: none;
      }

      .whats-app {
         position: fixed;
         width: 60px;
         height: 60px;
         bottom: 40px;
         text-align: center;
         font-size: 70px;
         z-index: 100;
         right: 20px;
         color:#075E54;
      }

      .my-float {
         margin-bottom: 80vh;
      }
   </style>

`);