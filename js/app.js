var app = angular.module('app', []);

app.controller('catTrees', function($scope){
  $scope.catTowers = [
    {
      link: "http://www.shareasale.com/r.cfm?u=96241&b=5997&m=2072&afftrack=&urllink=www%2Ecatsplay%2Ecom%2Fcat%2Dresort%2Dluxury%2Dcat%2Dtree",
      title: "Luxury Cat Tree",
      image: "images/luxury-cat-tree.jpg",
      description: "Cat Resort is a beautifully designed replica tree that will bring fun, exercise, relaxation and comfort to your indoor cat."
    },
    {
      link: "http://www.shareasale.com/r.cfm?u=96241&b=5997&m=2072&afftrack=&urllink=www%2Ecatsplay%2Ecom%2Fsilk%2Dplants%2Ddirect%2Dmulti%2Dlevel%2Dbirch%2Dcat%2Dtree%2Dhouse%2Dand%2Dpost",
      title: "Multi-Level Birch Cat Tree House & Post",
      image: "images/silk-multi-level.jpg",
      description: "Multi-Level Birch Cat Tree House and Post encourages your"+
      " feline friends to indulge in their natural instincts while accenting " +
      "your interior space. Birch Cat Tree House and Post is a unique creation " +
      "that is hand-crafted in the U.S.A. and arrives fully assembled.",
    },
    {
      link: "http://www.shareasale.com/r.cfm?u=96241&b=5997&m=2072&afftrack=&urllink=www%2Ecatsplay%2Ecom%2Fpurple%2Dpasison%2Dcat%2Dtree",
      title: "Purple Passion Cat Tree",
      image: "images/purple-passion.jpg",
      description: "unique color and many features make it the center of " +
      "conversation in any room. At the top of this Cat Tree is a large " +
      "flower designed platform that is fully padded for extra comfort. " +
      "The trunk has three holes that will surely tweak your cat's curiosity." +
      " And the two large sculptured leaves are constructed with heat " +
      "retention liners that provide added comfort for the sleeping or " +
      "relaxing cat."
    },
    {
      link: "http://www.shareasale.com/m-pr.cfm?merchantID=2072&userID=96241&productID=467116357",
      title: "Sprout Lifelike Cat Tree",
      image: "images/sprout-lifelike.jpg",
      description: "A Pet Tree House ® is a unique hand crafted pet home." +
      " Every home is designed and built to provide years of enjoyment for " +
      "your dearest pets. From a small house up to the largest tree, " +
      "each home is crafted of the highest quality. Materials are blended " +
      "together to create a very attractive and durable home your pets " +
      "will love."
    },
    {
      link: "http://www.shareasale.com/r.cfm?u=96241&b=5997&m=2072&afftrack=&urllink=www%2Ecatsplay%2Ecom%2Flifelike%2Dmature%2Dlarge%2Dcat%2Dtree%2Dhouses",
      image: "images/large-cat-tree-house.jpg",
      title: "Mature Large Cat Tree Houses",
      description: "he trees are real, and the branches are skillfully" +
      " decorated with silk leaves. This provides a natural scratching " +
      "post for your pet."
    }
  ];

  $scope.catShelfs = [
    {
      link: "http://www.shareasale.com/r.cfm?u=96241&b=5997&m=2072&afftrack=&urllink=www%2Ecatsplay%2Ecom%2F3%2Dlevel%2Dcat%2Dwall%2Dbunker",
      title: "Three Level Cat Wall Shelf",
      image: "images/cat-shelf-bunker.jpg",
      description:"This triple level cat bunker has everything a cat would " +
      "need in any emergency situation. The top shelf is equipped with a " +
      "plush chaise lounge and the bottom has a built in dining area. " +
      "They can also quickly escape unexpected danger by jumping thru " +
      "holes cut out on each level."
    },
    {
      link: "http://www.shareasale.com/r.cfm?u=96241&b=5997&m=2072&afftrack=&urllink=www%2Ecatsplay%2Ecom%2Froman%2Dcat%2Dwall%2Dfort",
      title: "Roman Cat Wall Fort",
      image: "images/cat-wall-fort-shelf.jpg",
      description: "The Roman Fort is the perfect full setup." +
      "Having the hammocks attached to the bottom of the sisal poles "+
      "allow cats to stretch and claw the poles from the bottom. "
    },
    {
      link: "http://www.shareasale.com/r.cfm?u=96241&b=5997&m=2072&afftrack=&urllink=www%2Ecatsplay%2Ecom%2Fwall%2Dmounted%2Dmario%2Dcat%2Dcomplex",
      title: "Mounted Mario Cat Complex",
      image: "images/mario-cat-wallshelf.jpg",
      description: "The Mario 2.0 is a hollow complex with " +
      "sisal-lined portals to allow cats to jump into one " +
      "and back out the other. It's a great hiding place for shy cats."
    },
    {
      link: "http://www.shareasale.com/r.cfm?u=96241&b=5997&m=2072&afftrack=&urllink=www%2Ecatsplay%2Ecom%2Ftree%2Dclimber%2Dwall%2Dmounted%2Dcat%2Dtree",
      title: "Cat Wall Mounted Cat Tree",
      image: "images/wall-mounted-cat-tree.jpg",
      description: "This artisan-crafted cat furniture is vertically oriented" +
      "offering your cat lots of climbing opportunities nd chances to" +
      "perch high above it all and observe."
    }
  ];

  $scope.catCondos = [
    {
      link: "http://www.shareasale.com/r.cfm?u=96241&b=5997&m=2072&afftrack=&urllink=www%2Ecatsplay%2Ecom%2Flittlefield%2Dcuddly%2Dcat%2Dcave",
      title: "Littlefield Cuddly Cat Cave",
      image: "images/cat-mouse-house.jpg",
      description: "Littlefield Cuddly Cat Cave is sure to trigger the ultimate " +
      "game of cat and mouse while providing endless opportunities for" +
      "cats to play, explore, scratch or just relax."
    },
    {
      link: "http://www.shareasale.com/r.cfm?u=96241&b=5997&m=2072&afftrack=&urllink=www%2Ecatsplay%2Ecom%2Fso%2Ddarling%2Dcats%2Dcastle",
      title: "Cat Castle",
      image: "images/cat-castle.jpg",
      description: "The So Darling Cat Castle would make an ideal addition " +
      "to any feline kingdom."
    },
    {
      link:"http://www.shareasale.com/r.cfm?u=96241&b=5997&m=2072&afftrack=&urllink=www%2Ecatsplay%2Ecom%2Flighthouse%2Dkitty%2Dtower",
      title: "Lighthouse Cat Tower",
      image: "images/lighthouse-cat-tower.jpg",
      description: "At just over 6' tall, this beautiful lighthouse tower has 4 " +
      "levels and a lookout area at its top. Each ceiling has an opening so " +
      "that your cats can move up and down the tower. They can even sit inside " +
      "the top level and look out the windows! A wide base prevents the unit " +
      "from toppling. It is available in your choice of carpet colors"
    },
    {
      link: "http://www.shareasale.com/r.cfm?u=96241&b=5997&m=2072&afftrack=&urllink=www%2Ecatsplay%2Ecom%2Fhickory%2Ddickory%2Dcat%2Dtower",
      title: "Hickory Dickory Cat Tower",
      image: "images/cat-clock-tower.jpg",
      description: "The decorative base houses a recess for a replaceable " +
      "cardboard scratch pad (included), and the carpeted pendulum serves " +
      "as a climbing post from the top down.  Angled, carpeted steps make " +
      "ascent quick and easy for your cat, with top perch where kitty can " +
      "stand guard for any rodents during the night."
    }
  ];

  $scope.grumpyCats = [
    {
      link: "http://www.shareasale.com/m-pr.cfm?merchantID=26254&userID=96241&productID=557700517",
      title: 'Grumpy Cat This Sinks Candle',
      image: "images/grumpy-candle.jpg",
      description: 'Vanilla Candle is still not good enough for Grumpy ' +
      'Cat! She proclaims This Stinks!'
    },
    {
      link: "http://www.shareasale.com/m-pr.cfm?merchantID=26254&userID=96241&productID=555026261",
      title: "Grumpy Cat Hat",
      image: "http://www.stupid.com/assets/images/grumpy_cat_laplander_1_thumbnail.jpg",
      description: ""
    },
    {
      link: "http://www.shareasale.com/m-pr.cfm?merchantID=17483&userID=96241&productID=575756027",
      title: "Grumpy Cat Calendar",
      image: "http://www.calendars.com/img/p/135/201600002625.jpg",
      description: "Celebrate (or wallow in) a year of grumpiness with Grumpy Cat's grouchy " +
      "commentary and signature frown with Grumpy Cat 2016 Wall Calendar. "
    },
    {
      link: "http://www.shareasale.com/m-pr.cfm?merchantID=26254&userID=96241&productID=549988162",
      title: "Grumpy Cat Space Leggings",
      image: "http://www.stupid.com/assets/images/grumpy-cat-space-leggings--small_thumbnail.jpg",
      description: "These awesome Grumpy Cat Space Leggings are out of this world! Yet she is still not impressed with the wonders of space."
    },
    {
      link: "http://www.shareasale.com/m-pr.cfm?merchantID=26254&userID=96241&productID=551869432",
      title: "Grumpy Cat No! Socks",
      image: "http://www.stupid.com/assets/images/grumpy_cat_no_socks_1_thumbnail.jpg",
      description: "Lil' Grumpy Cat will be with you all day, pretty much telling everyone to BACK OFF when you wear these Socks"
    },
    {
      link: "http://www.shareasale.com/m-pr.cfm?merchantID=26254&userID=96241&productID=553535037",
      title: "Grumpy Cat Paper Dolls",
      image: "http://www.stupid.com/assets/images/grumpy_cat_paper_dolls_1_thumbnail.jpg",
      description: "Everyone knows Grumpy Cat and they know she hates just about everything. " +
      "So when we saw these Paper Dolls featuring her and her sidekick, Pokey we knew the " +
      " great clouds above her had just quadrupled. You can dress these two up in dozens " +
      " of accessories, outfits, wigs, glasses, and so much more. "
    },
    {
      link: "http://www.shareasale.com/m-pr.cfm?merchantID=26254&userID=96241&productID=525054932",
      title: "Grumpy Cat Xmas Gift T-Shirt",
      image: "http://www.stupid.com/assets/images/grumpy_cat_christmas_shirt_1_thumbnail.jpg",
      description: "Grumpy Cat Christmas T-Shirt - Your gift is in the Litter Box "
    },
    {
      link: "http://www.shareasale.com/m-pr.cfm?merchantID=26254&userID=96241&productID=620326030",
      title: "Grumpy Cat Babydoll Shirt",
      image: "http://www.stupid.com/assets/images/grumpy_kitty_babydoll_tshirt_1_thumbnail.jpg",
      description: "Grumpy Cat's version of Soft Kitty for you to wear"
    }
  ];

  $scope.helloKittys = [
    {
      link: "http://www.shareasale.com/m-pr.cfm?merchantID=26254&userID=96241&productID=550918069",
      title: "POP! Hello Kitty / KISS Starchild",
      image: "http://www.stupid.com/assets/images/pop_vinyl_figure_starchild_1_thumbnail.jpg",
      description: "Hello Kitty Pop! Vinyl version of the Rock superhero"
    },
    {
      link: "http://www.shareasale.com/m-pr.cfm?merchantID=26254&userID=96241&productID=550918076",
      title: "POP! Hello Kitty / KISS Catman",
      image: "http://www.stupid.com/assets/images/pop_vinyl_figure_catman_1_thumbnail.jpg",
      description: "Catman from KISS in Hello Kitty, Pop! Vinyl Figure"
    },
    {
      link: "http://www.shareasale.com/m-pr.cfm?merchantID=26254&userID=96241&productID=536370842",
      title: "Hello Kitty Ceramic Salt and Pepper Shaker Set",
      image: "http://www.stupid.com/assets/images/hello_kitty_salt_and_pepper_shakers_1_thumbnail.jpg",
      description: "Each hand painted Shaker is 3.25 x 2.75 x 2.75 and the perfect addition to any and every kitchen"
    },
    {
      link: "http://www.shareasale.com/m-pr.cfm?merchantID=17483&userID=96241&productID=624924170",
      title: "Hello Kitty Headphones",
      image: "http://www.calendars.com/img/p/135/201500023146.jpg",
      description: "Hello Kitty Headphones perfect for Hello Kitty fans. Compatible" +
      "with all iPod, iPhone, MP3/MP4 players, audio/video devices and game systems."
    },
    {
      link:"http://www.shareasale.com/m-pr.cfm?merchantID=17483&userID=96241&productID=598935584",
      title: "Hello Kitty Shopper Tote",
      image: "http://www.calendars.com/img/p/135/201600027549.jpg",
      description: "Hello Kitty shopper tote is packable to save space. It " +
      " folds and unfolds in seconds! The bag is made from 25% recycled " +
      " materials. Wipes clean with a damp cloth."
    }
  ];

  $scope.catNecklaces = [
    {
      link: "http://www.shareasale.com/m-pr.cfm?merchantID=10669&userID=96241&productID=555268439",
      title: "Sterling Silver Cat Pendant with Purple Cubic Zircon",
      image: "images/purple-cat-necklace.jpg",
      description: "Purple Cat Pendant and Sterling Silver Necklace"
    },
    {
      link: "http://www.shareasale.com/m-pr.cfm?merchantID=10669&userID=96241&productID=551302157",
      title: "18K White Gold Cat with Scarf Diamond Pendant Necklace ",
      image: "images/diamond-cat.jpg",
      description: ""
    },
    {
      link: "http://www.shareasale.com/m-pr.cfm?merchantID=26388&userID=96241&productID=587251502",
      title: "Black Diamond Cat Necklace in Rhodium Plated Sterling Silver",
      image: "images/black-diamond-cat.jpg",
      description: "This black cat necklace features an aloof back-facing cat " +
      " fashioned from tarnish resistant rhodium plated sterling silver " +
      " and black heat-treated diamonds"
    },
    {
      link: "http://www.shareasale.com/m-pr.cfm?merchantID=46484&userID=96241&productID=509908388",
      title: "Sterling Silver Dangling Edward Gorey Cat Necklace",
      image: "http://feeds2.yourstorewizards.com/2012/images/100x500/n4483.jpg",
      description: "This whimsical cat has been adapted from Edward Gorey's cover illustrations for AMPHIGOREY."
    },
    {
      link: "http://www.shareasale.com/m-pr.cfm?merchantID=46484&userID=96241&productID=509908992",
      title: "Sterling Silver Faceted Black Onyx Cat Necklace",
      image: "http://feeds2.yourstorewizards.com/2012/images/100x500/349ic21n.jpg",
      description: "Feline lovers will adore this faceted Black Onyx cat pendant and cable chain necklace in sterling silver."
    },
    {
      link: "http://www.shareasale.com/m-pr.cfm?merchantID=4349&userID=96241&productID=551941433",
      title: "Glamour Puss Crystal Pendant Necklace",
      image: "http://www.modernartisans.com/images/Product/icon/1035.jpg" ,
      description: "Graced with an array of Swarovski crystals in bewitching " +
      " blue, aqua, and green alongside rows of tiny turquoise gemstones, " +
      " this glistening cat is the perfect mix of glee and glamour"
    },
    {
      link: "http://www.shareasale.com/m-pr.cfm?merchantID=10669&userID=96241&productID=525700080",
      title: "Sterling Silver Cat Pendant with White Cubic Zirconia and Necklace",
      image: "http://aff.ysi.bz/assets/87/860/p0027586087.jpg",
      description: ""
    },
    {
      link: "http://www.shareasale.com/m-pr.cfm?merchantID=10669&userID=96241&productID=572780276",
      title: "Sterling Silver Cat Pendant with Black Cubic Zircon and Necklace",
      image: "http://aff.ysi.bz/assets/59/965/p0040496559.jpg",
      description: ""
    },
    {
      link: "http://www.shareasale.com/m-pr.cfm?merchantID=10669&userID=96241&productID=572787278",
      title: "Sterling Silver Cat Pendant with Pink Crystal and Cubic Zircon and Necklace",
      image: "http://aff.ysi.bz/assets/84/687/p0040268784.jpg",
      description: ""
    },
    {
      link: "http://www.shareasale.com/m-pr.cfm?merchantID=10669&userID=96241&productID=555269854",
      title: "Sterling Silver Rose Gold Colored Cat Pendant and Necklace",
      image: "http://aff.ysi.bz/assets/51/685/p0034868551.jpg",
      description: ""
    },
    {
      link: "http://www.shareasale.com/m-pr.cfm?merchantID=10669&userID=96241&productID=555275286",
      title: "Sterling Silver Cat Pendant and Necklace",
      image: "images/sterling-silver-cat-necklace.jpg",
      description: ""
    },
    {
      link: "http://www.shareasale.com/m-pr.cfm?merchantID=10669&userID=96241&productID=555278112",
      title: "Sterling Silver Cat Outline with Whiskers Pendant and Necklace",
      image: "images/cat-outline-necklace.jpg",
      description: ""
    }
  ];

  $scope.catBracelets = [
    {
      link: "http://www.shareasale.com/m-pr.cfm?merchantID=4349&userID=96241&productID=551941434",
      title: "Glamour Puss Crystal Bracelet",
      image: "images/glamour-cat-bracelet.jpg",
      description: "Graced with an array of Swarovski crystals in bewitching " +
      " blue and green alongside turquoise and green opal gemstones, this " +
      " glistening cat is the perfect mix of glee and glamour"
    },
    {
      link: "http://www.shareasale.com/m-pr.cfm?merchantID=10669&userID=96241&productID=623682111",
      title: "Cat Paradise Bracelet",
      image: "images/cat-paradise.jpg",
      description: ""
    },
    {
      link: "http://www.shareasale.com/m-pr.cfm?merchantID=10669&userID=96241&productID=533499740",
      title: "MIPENNA - Kitty Bracelet",
      image: "http://aff.ysi.bz/assets/67/581/p0028758167.jpg",
      description: "MIPENNA's surrealist accessories boast bright colors, " +
      " animal charms and whimsical designs that tell a detailed story, " +
      " and give each piece a fanciful, unexpected finish"
    }
  ];
});
