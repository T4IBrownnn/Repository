window.onload = function() {
    // List of image links
    var imageLinks = [
      "https://www.the-sun.com/wp-content/uploads/sites/6/2023/10/KS-crunchy-cat-comp.jpg?w=1280&quality=44", 
  
        "https://i.pinimg.com/474x/d4/ee/92/d4ee92141af53b070c58465156674927.jpg", 
  
        "https://i.pinimg.com/564x/88/2d/de/882ddeebbd336b9c5f084c3eec7572dc.jpg", 
  
        "https://i.pinimg.com/564x/8b/13/8b/8b138bc4aaf3beba650adc8de6db445b.jpg", 
  
        "https://i.pinimg.com/564x/04/75/d1/0475d184b23f711b51bb780bc67335a6.jpg", 
  
        "https://i.pinimg.com/736x/79/65/2c/79652c6eabb41eb0f2c3431e4731f7e9.jpg", 
  
        "https://i.pinimg.com/736x/10/3f/11/103f11fbfacafc55531362804c348ce0.jpg", 
  
        "https://i.pinimg.com/736x/3e/82/90/3e829065968c26575bf7d5ab7ef2a0bf.jpg", 
  
        "https://i.pinimg.com/564x/6b/74/42/6b74429135e551be391429143a69b00a.jpg", 
  
       "https://i.pinimg.com/564x/5d/81/f2/5d81f2539978aa590e535e0c710424fe.jpg", 
  
        "https://i.pinimg.com/736x/32/fe/81/32fe8194c9aa458a7b9fe94dc5312ed4.jpg", 
  
        "https://i.pinimg.com/564x/70/c0/51/70c051fa4423424469d9eebdd3223384.jpg", 
  
        "https://i.pinimg.com/564x/ac/90/1a/ac901a931b0faa1605ca85b906d441e7.jpg", 
  
        "https://i.pinimg.com/564x/0c/78/04/0c78049cacd16b883d975f15cd292918.jpg", 
  
        "https://i.pinimg.com/564x/18/bc/e1/18bce1208ee78f5d34568d8b0a167003.jpg", 
  
        "https://i.pinimg.com/564x/a3/47/49/a347494e9489f41970e8b5feb35bd9bd.jpg", 
  
        "https://media.tenor.com/bWUeVRqW9-IAAAAi/fast-cat-cat-excited.gif",
  
        "https://media1.tenor.com/m/DFv1yGqK_RcAAAAd/good-evening-cat-breakdancing.gif",
  
        "https://i.pinimg.com/564x/f6/d0/0a/f6d00a247fa38686475a7cbf6b1a641d.jpg",
  
        "https://i.pinimg.com/originals/85/e2/14/85e214dec454635c68108ce68d5be6c3.gif",
  
        "https://i.pinimg.com/564x/a8/b8/b5/a8b8b5b3126ce6f91b8609b5b2b2c404.jpg",
  
        "https://i.pinimg.com/564x/66/5f/55/665f5586eb261a41babaf0973b9ce9e4.jpg",
  
        "https://i.pinimg.com/564x/cc/45/da/cc45daca46060a7b8018f3593a0cd31f.jpg",
  
        "https://i.pinimg.com/564x/71/d7/94/71d794e233899607ab35df8fae6fc06d.jpg",
  
        "https://i.pinimg.com/564x/24/ce/b2/24ceb2519957e2ac3b2488716d36fc28.jpg",
  
        "https://i.pinimg.com/564x/eb/35/29/eb3529f66be18cfeb637e07cd2a89933.jpg",
  
        "https://i.pinimg.com/736x/69/f5/d8/69f5d88da12d576e1875109b50d2c6c5.jpg",
  
        "https://i.pinimg.com/736x/1d/6c/fe/1d6cfe44a61dcc66aa3683b25e857339.jpg",
  
        "https://i.pinimg.com/736x/fe/e4/26/fee426c99f35689c894df56494970dfc.jpg",
  
        "https://media1.tenor.com/m/Yn8OFus9tikAAAAd/boomshakalaka.gif",
  
        "https://media1.tenor.com/m/Yn8OFus9tikAAAAd/boomshakalaka.gif",
      
      "https://d2w9rnfcy7mm78.cloudfront.net/27231080/original_ecb172294a5f2378bd636c07e49bfb8c.gif?1711583703?bc=0",
      // Add more image links here
    ];
  
    // Select a random image link and set the src attribute
    function refreshPoster() {
      var randomIndex = Math.floor(Math.random() * imageLinks.length);
      var randomImage = imageLinks[randomIndex];
      var catImage = document.getElementById("catImage");
      catImage.src = randomImage;
    }
  
    // Add event listener to the refresh button
    var refreshButton = document.getElementById("refreshButton");
    refreshButton.addEventListener("click", refreshPoster);
  
    // Initial refresh to show a random image when the page loads
    refreshPoster();
  };
  