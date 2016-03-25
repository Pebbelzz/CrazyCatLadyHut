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
    }
  ];


});
