"use strict";

// Get elements from html page
var container = document.getElementById("the-box"); // container 

var getyear = document.getElementById("theYear"); // enter the year here for chinese sign

var enter = document.getElementById("here2"); // the result is going to be printed here

var btn2 = document.getElementById("zodiac-btn"); // button for western zodiac

var month = document.getElementById("month"); // get month

var day = document.getElementById("day"); // get day

var Byear = document.getElementById("year"); // button for western zodiac, ****** might not need this one

var result = document.getElementById("here"); // print result for zodiac sign here. 

var moreAbout = document.getElementById("about");
var aboutAnimal = document.getElementById("aboutA");
var coll = document.getElementsByClassName("collapsible");
var coll2 = document.getElementsByClassName("collaps2"); // the drop down collapsible that says more about the signs

var more = document.getElementById("aboutSign");
var cSign = document.getElementById("cSign");
/* EventListeners */

btn2.addEventListener('click', function () {
  return forChineseYear();
});
btn2.addEventListener('click', function () {
  return forAries();
});
btn2.addEventListener('click', function () {
  return forTaurus();
});
btn2.addEventListener('click', function () {
  return forGemini();
});
btn2.addEventListener('click', function () {
  return forCancer();
});
btn2.addEventListener('click', function () {
  return forLeo();
});
btn2.addEventListener('click', function () {
  return forVirgo();
});
btn2.addEventListener('click', function () {
  return forLibra();
});
btn2.addEventListener('click', function () {
  return forScorpio();
});
btn2.addEventListener('click', function () {
  return forSagittarius();
});
btn2.addEventListener('click', function () {
  return forCapricorn();
});
btn2.addEventListener('click', function () {
  return forAquarius();
});
btn2.addEventListener('click', function () {
  return forPisces();
});
var fromyear = 1995; // starting year. To compare the equation with. 

var currentSign = "pig";

var forChineseYear = function forChineseYear() {
  var mySign = (fromyear - getyear.value) % 12;

  if (mySign == 12 || mySign == 0) {
    animal.innerHTML = "<p>".concat('<em>Chinese Sign<hr></em>', "The PIG...</p>");
    var i;

    for (i = 0; i < coll2.length; i++) {
      coll2[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var contents = this.nextElementSibling;

        if (contents.style.display === "block") {
          contents.style.display = "none";
        } else {
          contents.style.display = "block";
        }
      });
    }

    cSign.innerHTML = "<p>Characteristics of the Pig".concat('<hr>', "\n        \"Pigs might not stand out in a crowd.\n        But they are very realistic. Others may be all talk and no action. Pigs are the opposite.\n        Though not wasteful spenders, they will let themselves enjoy life.\n        They love entertainment and will occasionally treat themselves. \n        They are a bit materialistic, but this is motivation for them to\n        work hard. Being able to hold solid objects in their hands gives them security. \n        In Chinese culture, pigs are the symbol of wealth.\" ", '<br>', '<br>', "\n        Read More From Source At ", '<a href="https://chinesenewyear.net/zodiac/pig/">chinesenewyear.net</a>', " ", '<br>', "Chinese New Year, February 1st, 2022</p>");
  } else if (mySign == 11 || mySign == -1) {
    animal.innerHTML = "<p>".concat('<em>Chinese Sign<hr></em>', " The RAT...</p>");
    var i;

    for (i = 0; i < coll2.length; i++) {
      coll2[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var contents = this.nextElementSibling;

        if (contents.style.display === "block") {
          contents.style.display = "none";
        } else {
          contents.style.display = "block";
        }
      });
    }

    cSign.innerHTML = "<p>Characteristics of the RAT".concat('<hr>', "\n        \"Optimistic and energetic, people born in the Rat year are \n        likable by all. They are sensitive to other\u2019s emotions \n        but are stubborn with your opinion. Their personality is\n        kind, but due to weak communication skills, their words \n        may seem impolite and rude.\" ", '<br>', '<br>', "\n        Read More From Source At ", '<a href="https://chinesenewyear.net/zodiac/rat/">chinesenewyear.net</a>', "\n        ", '<br>', "Chinese New Year, February 1st, 2022 </p>");
  } else if (mySign == 10 || mySign == -2) {
    animal.innerHTML = "<p>".concat('<em>Chinese Sign<hr></em>', " The OX...</p>");
    var i;

    for (i = 0; i < coll2.length; i++) {
      coll2[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var contents = this.nextElementSibling;

        if (contents.style.display === "block") {
          contents.style.display = "none";
        } else {
          contents.style.display = "block";
        }
      });
    }

    cSign.innerHTML = "<p>Characteristics of the OX".concat('<hr>', "\n        \"Oxen are honest and earnest.\n        They are low key and never look for praise or to be \n        the center of attention. This often hides their talent, \n        but they\u2019ll gain recognition through their hard work.\n        They believe that everyone should do what\u2019s asked for \n        them and stay within their bounds. Though they are kind, \n        it\u2019s difficult for them to understand persuasion using pathos. \n        Rarely losing your temper, they think logically and make great leaders.\"\n        ", '<br>', '<br>', " Read More From Source At ", '<a href="https://chinesenewyear.net/zodiac/ox/">chinesenewyear.net</a>', "\n        ", '<br>', "Chinese New Year, February 1st, 2022 </p>");
  } else if (mySign == 9 || mySign == -3) {
    animal.innerHTML = "<p>".concat('<em>Chinese Sign<hr></em>', " The TIGER...</p>");
    var i;

    for (i = 0; i < coll2.length; i++) {
      coll2[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var contents = this.nextElementSibling;

        if (contents.style.display === "block") {
          contents.style.display = "none";
        } else {
          contents.style.display = "block";
        }
      });
    }

    cSign.innerHTML = "<p>Characteristics of the Tiger".concat('<hr>', "\n        \"Tigers are kind and benevolent. Animals, jazz music or\n        other things that call for imagination are good for them.\n        They rarely feel tired and have rich emotions.\n        Sometimes though, they make brash decisions and are hard to control.\n        But no matter how many difficulties or obstacles they face, \n        they will never give up. In the end, Tigers live an average \n        life\u2014there are times of joy, sadness and sometimes disappointment.\"\n        ", '<br>', '<br>', "Read More From Source At ", '<a href="https://chinesenewyear.net/zodiac/tiger/">chinesenewyear.net</a>', "\n        ", '<br>', "Chinese New Year, February 1st, 2022 </p>");
  } else if (mySign == 8 || mySign == -4) {
    animal.innerHTML = "<p>".concat('<em>Chinese Sign<hr></em>', " The RABBIT...</p>");
    var i;

    for (i = 0; i < coll2.length; i++) {
      coll2[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var contents = this.nextElementSibling;

        if (contents.style.display === "block") {
          contents.style.display = "none";
        } else {
          contents.style.display = "block";
        }
      });
    }

    cSign.innerHTML = "<p>Characteristics of the Rabbit".concat('<hr>', "\n        \"To outsiders, the Rabbit\u2019s kindness may make them seem soft \n        and weak. In truth, the Rabbit\u2019s quiet personality hides \n        their confidence and strength. They are steadily moving towards \n        their goal, no matter what negativity the others give them.\n        With their good reasoning skills and attention to detail, \n        they make great scholars. They are socializers with an attractive \n        aura. However, they find it hard to open up to others and often turn \n        to escapism.\"\n        ", '<br>', '<br>', "Read More From Source At ", '<a href="https://chinesenewyear.net/zodiac/rabbit/">chinesenewyear.net</a>', "\n        ", '<br>', "Chinese New Year, February 1st, 2022 </p>");
  } else if (mySign == 7 || mySign == -5) {
    animal.innerHTML = "<p>".concat('<em>Chinese Sign<hr></em>', " The DRAGON...</p>");
    var i;

    for (i = 0; i < coll2.length; i++) {
      coll2[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var contents = this.nextElementSibling;

        if (contents.style.display === "block") {
          contents.style.display = "none";
        } else {
          contents.style.display = "block";
        }
      });
    }

    cSign.innerHTML = "<p>Characteristics of the Dragon".concat('<hr>', "\n        \"Dragons are the most revered animal in Chinese culture. \n        They call themselves the descendants of the dragon. \n        In the past, emperors were seen as the reincarnation of dragons.\"", '<br>', "\n        ", '<br>', "Read More From Source At ", '<a href="https://chinesenewyear.net/zodiac/dragon/">chinesenewyear.net</a>', "\n        ", '<br>', "Chinese New Year, February 1st, 2022 </p>");
  } else if (mySign == 6 || mySign == -6) {
    animal.innerHTML = "<p>".concat('<em>Chinese Sign<hr></em>', " The SNAKE...</p>");
    var i;

    for (i = 0; i < coll2.length; i++) {
      coll2[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var contents = this.nextElementSibling;

        if (contents.style.display === "block") {
          contents.style.display = "none";
        } else {
          contents.style.display = "block";
        }
      });
    }

    cSign.innerHTML = "<p>Characteristics of the Snake".concat('<hr>', "\n        \"Snakes are humorous and sophisticated. They don\u2019t like small \n        talk or thinking about small everyday problems.In a chaotic environment, \n        they are the eye of the storm. Snakes are able to hold their \n        ground and calmly think of solutions. They are always making \n        new plans and follow them without relying on others\u2019 input. \n        They\u2019re usually correct, but this also comes from a distrust of others. \n        You cannot judge a Snake by its cover. Their slow and lazy talking\n        hides their fast-paced thinking. Behind their calmness, they are alert \n        and observant.\"", '<br>', '<br>', "Read More From Source At ", '<a href="https://chinesenewyear.net/zodiac/snake/">chinesenewyear.net</a>', "\n        ", '<br>', "Chinese New Year, February 1st, 2022 </p>");
  } else if (mySign == 5 || mySign == -7) {
    animal.innerHTML = "<p>".concat('<em>Chinese Sign<hr></em>', " The HORSE...</p>");
    var i;

    for (i = 0; i < coll2.length; i++) {
      coll2[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var contents = this.nextElementSibling;

        if (contents.style.display === "block") {
          contents.style.display = "none";
        } else {
          contents.style.display = "block";
        }
      });
    }

    cSign.innerHTML = "<p>Characteristics of the Horse".concat('<hr>', "\n        \"Horses are full of energy, albeit a bit too much. \n        Both studious and athletic, they are strong believers of \n        chasing after dreams. Rather than wealth and fame, happiness \n        is what motivates them. They expect others to operate at the \n        same speed as them and don\u2019t understand why others can\u2019t.\n        Contradicting characteristics come from the fact that they \n        are ever-changing emotions. They have short tempers and become \n        angry quickly. But once it\u2019s over, they forget quickly. \n        They\u2019re biggest fault is that they\u2019re blind to their own faults.\"\n        ", '<br>', '<br>', "Read More From source At ", '<a href="https://chinesenewyear.net/zodiac/horse/">chinesenewyear.net</a>', "\n        ", '<br>', "Chinese New Year, February 1st, 2022 </p>");
  } else if (mySign == 4 || mySign == -8) {
    animal.innerHTML = "<p>".concat('<em>Chinese Sign<hr></em>', " The GOAT...</p>");
    var i;

    for (i = 0; i < coll2.length; i++) {
      coll2[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var contents = this.nextElementSibling;

        if (contents.style.display === "block") {
          contents.style.display = "none";
        } else {
          contents.style.display = "block";
        }
      });
    }

    cSign.innerHTML = "<p>Characteristics of the Goat".concat('<hr>', "\n        \"Goats are able to persevere through any difficulty. \n        This is their most notable trait. They are strong and resilient, \n        though their gentleness might be misleading.\n        They have high tolerance and motivation. Quiet observers, \n        Goats consider all aspects of anything before deciding. \n        They never act brashly and are able to complete tasks successfully.\n        Goats also love children, animals and nature. They\u2019re very tidy and \n        are often seen organizing the home. They\u2019re also generous with their \n        time and money. No matter what, they put others\u2019 needs above their own. \n        However, their inner stubbornness sometimes makes communication difficult.\"\n        ", '<br>', '<br>', "Read More From Source At ", '<a href="https://chinesenewyear.net/zodiac/goat/">chinesenewyear.net</a>', "\n        ", '<br>', "Chinese New Year, February 1st, 2022 </p>");
  } else if (mySign == 3 || mySign == -9) {
    animal.innerHTML = "<p>".concat('<em>Chinese Sign<hr></em>', " The MONKEY...</p>");
    var i;

    for (i = 0; i < coll2.length; i++) {
      coll2[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var contents = this.nextElementSibling;

        if (contents.style.display === "block") {
          contents.style.display = "none";
        } else {
          contents.style.display = "block";
        }
      });
    }

    cSign.innerHTML = "<p>Characteristics of the Monkey".concat('<hr>', "\n        \"Monkeys\u2019 most defining trait is their intelligence. \n        As children, they win awards and the praises of teachers. \n        As adults, they gain professional recognition and make great leaders.\n        Due to this, it\u2019s understandable that they can be arrogant. \n        They\u2019re often disrespectful and self-centered when making decisions. \n        Monkeys become jealous easily, especially when others are doing better \n        than them. They are awfully competitive, which is both positive and negative.\n        However, they view everyone as teachers. They\u2019re willing to listen to \n        critique and learn from their mistakes. They are calm and logical thinkers. \n        Monkeys are always able to triumph and be the final winner.\"\n        ", '<br>', '<br>', "Read More From Source At ", '<a href="https://chinesenewyear.net/zodiac/monkey/">chinesenewyear.net</a>', "\n        ", '<br>', "Chinese New Year, February 1st, 2022 </p>");
  } else if (mySign == 2 || mySign == -10) {
    animal.innerHTML = "<p>".concat('<em>Chinese Sign<hr></em>', " The ROOSTER...</p>");
    var i;

    for (i = 0; i < coll2.length; i++) {
      coll2[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var contents = this.nextElementSibling;

        if (contents.style.display === "block") {
          contents.style.display = "none";
        } else {
          contents.style.display = "block";
        }
      });
    }

    cSign.innerHTML = "<p>Characteristics of the Rooster".concat('<hr>', "\n        \"Roosters are serious in their work. They are straightforward and \n        decisive in their actions. They\u2019ll directly criticize what they see \n        unfit and are perfectionists. They are logical and good at managing teams.\n        Family is a refuge and paradise for them. They wish for a large family\u2014it \n        means that there are more people to encourage and support them.\n        No matter how difficult something is, they won\u2019t give up. But if \n        someone is blocking their path, they will reveal their fierce side.\"\n        ", '<br>', '<br>', "Read More From Source At ", '<a href="https://chinesenewyear.net/zodiac/rooster/">chinesenewyear.net</a>', "\n        ", '<br>', "Chinese New Year, February 1st, 2022 </p>");
  } else if (mySign == 1 || mySign == -11) {
    animal.innerHTML = "<p>".concat('<em>Chinese Sign<hr></em>', " The DOG...</p>");
    var i;

    for (i = 0; i < coll2.length; i++) {
      coll2[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var contents = this.nextElementSibling;

        if (contents.style.display === "block") {
          contents.style.display = "none";
        } else {
          contents.style.display = "block";
        }
      });
    }

    cSign.innerHTML = "<p>Characteristics of the Dog".concat('<hr>', "\n        \"A Dog\u2019s most defining characteristic is their loyalty. \n        They will never abandon their friends, family or work.\n        Honest and just, they are popular in social circles. \n        Everyone needs a Dog friend for advice and help. \n        They are also good at helping others find and fix their bad habits.\n        Despite how they act, they are worried and anxious inside. \n        However, they will not let this stop them. Once they decide on something,\n        no one can persuade them against it.\"\n        ", '<br>', '<br>', "Read More From Source At ", '<a href="https://chinesenewyear.net/zodiac/dog/">chinesenewyear.net</a>', "\n        ", '<br>', "Chinese New Year, February 1st, 2022 </p>");
  }
};
/*  * For the western zodiac signs
    * if month is same as month1 and day is more or equal than that day.
    * or if month is same as month2 and day is less or equal than the last day of zodic  
*/

/*  * the horoscope dates 
var aries = [03, 21, 04, 19];
var taurus = [04, 20, 05, 20];
var gemini = [05, 21, 06, 20]; 
var cancer = [06, 21, 07, 22];
var leo = [07, 23, 08, 22];
var virgo = [08, 23, 09, 22];
var libra = [09, 23, 10, 22]; 
var scorpio = [10, 23, 11, 21];
var sagittarius = [11, 22, 12, 21];
var capricorn = [12, 22, 01, 19];
var aquarius = [01, 20, 02, 18]; 
var pisces = [02, 19, 03, 20];*/


var forAries = function forAries() {
  var getMonth = [month.value];
  var getDay = [day.value];

  if (getDay <= 31 && getMonth == aries[0] && getDay >= aries[1] || getMonth[0] == aries[2] && getDay <= aries[3]) {
    result.innerHTML = "<p>".concat('<em>Zodiac Sign<hr></em>', "Aries ", '<br>', " March 21 - April 19</p>");
    /* READ MORE PART */

    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;

        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }

    more.innerHTML = "<p>Aries is a fire sign. Aries people are outgoing, friendly and popular.".concat('<br>', "\n    ", '<br>', '<br>', "Read More At\n    ", '<a href="https://www.astrology-zodiac-signs.com/zodiac-signs/aries/">www.astrology-zodiac-signs.com</a>', "\n    </p>");
  }
};

var forTaurus = function forTaurus() {
  var getMonth = [month.value];
  var getDay = [day.value];

  if (getDay <= 30 && getMonth == taurus[0] && getDay >= taurus[1] || getMonth[0] == taurus[2] && getDay <= taurus[3]) {
    result.innerHTML = "<p>".concat('<em>Zodiac Sign<hr></em>', "Taurus ", '<br>', " April 20 - May 20</p>");
    /* READ MORE PART */

    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;

        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }

    more.innerHTML = "<p>Taurus is an earth sign. Taurus people are very ambitious and sucessfull. \n    ".concat('<br>', '<br>', "Read More At\n    ", '<a href="https://www.astrology-zodiac-signs.com/zodiac-signs/taurus/">www.astrology-zodiac-signs.com</a>', "\n    </p>");
  }
};

var forGemini = function forGemini() {
  var getMonth = [month.value];
  var getDay = [day.value];

  if (getDay <= 31 && getMonth == gemini[0] && getDay >= gemini[1] || getMonth[0] == gemini[2] && getDay <= gemini[3]) {
    result.innerHTML = "<p>".concat('<em>Zodiac Sign<hr></em>', "Gemini ", '<br>', " May 21 - June 20</p>");
    /* READ MORE PART */

    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;

        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }

    more.innerHTML = "<p>Gemini is an air sign. They have two personalities and are quick-witted.\n    ".concat('<br>', '<br>', "Read More At\n    ", '<a href="https://www.astrology-zodiac-signs.com/zodiac-signs/gemini/">www.astrology-zodiac-signs.com</a>', "\n    </p>");
  }
};

var forCancer = function forCancer() {
  var getMonth = [month.value];
  var getDay = [day.value];

  if (getDay <= 30 && getMonth == cancer[0] && getDay >= cancer[1] || getMonth[0] == cancer[2] && getDay <= cancer[3]) {
    result.innerHTML = "<p>".concat('<em>Zodiac Sign<hr></em>', "Cancer ", '<br>', " Jun 21 - Jul 22</p>");
    /* READ MORE PART */

    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;

        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }

    more.innerHTML = "<p>Cancer is a water sign. They are also known as Moonchild. Deeply sensitive and emotional.\n    ".concat('<br>', '<br>', "Read More At\n    ", '<a href="https://www.astrology-zodiac-signs.com/zodiac-signs/cancer/">www.astrology-zodiac-signs.com</a>', "\n    </p>");
  }
};

var forLeo = function forLeo() {
  var getMonth = [month.value];
  var getDay = [day.value];

  if (getDay <= 31 && getMonth == leo[0] && getDay >= leo[1] || getMonth[0] == leo[2] && getDay <= leo[3]) {
    result.innerHTML = "<p>".concat('<em>Zodiac Sign<hr></em>', "Leo ", '<br>', " Jul 23 - Aug 22</p>");
    /* READ MORE PART */

    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;

        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }

    more.innerHTML = "<p>Leo is a fire sign. They love being the center of attention. They're dramatic and dominant but also generous and loyal.\n   ".concat('<br>', '<br>', "Read More At\n    ", '<a href="https://www.astrology-zodiac-signs.com/zodiac-signs/leo/">www.astrology-zodiac-signs.com</a>', "\n   </p>");
  }
};

var forVirgo = function forVirgo() {
  var getMonth = [month.value];
  var getDay = [day.value];

  if (getDay <= 31 && getMonth == virgo[0] && getDay >= virgo[1] || getMonth[0] == virgo[2] && getDay <= 31 && getDay <= virgo[3]) {
    result.innerHTML = "<p>".concat('<em>Zodiac Sign<hr></em>', "Virgo ", '<br>', " Aug 23 - Sept 22</p>");
    /* READ MORE PART */

    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;

        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }

    more.innerHTML = "<p>Virgo is an earth sign. Virgos are perfectionists, great friends, kind and motherly.\n    ".concat('<br>', '<br>', "Read More At\n    ", '<a href="https://www.astrology-zodiac-signs.com/zodiac-signs/virgo/">www.astrology-zodiac-signs.com</a>', "\n    </p>");
  }
};

var forLibra = function forLibra() {
  var getMonth = [month.value];
  var getDay = [day.value];

  if (getDay <= 30 && getMonth == libra[0] && getDay >= libra[1] || getMonth[0] == libra[2] && getDay <= libra[3]) {
    result.innerHTML = "<p>".concat('<em>Zodiac Sign<hr></em>', "Libra ", '<br>', " Sept 23 - Oct 22</p>");
    /* READ MORE PART */

    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;

        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }

    more.innerHTML = "<p>Libra is an air sign. They are the balance of the zodiac. They are peaceful and kind.\n    ".concat('<br>', '<br>', "Read More At\n    ", '<a href="https://www.astrology-zodiac-signs.com/zodiac-signs/libra/">www.astrology-zodiac-signs.com</a>', "\n    </p>");
  }
};

var forScorpio = function forScorpio() {
  var getMonth = [month.value];
  var getDay = [day.value];

  if (getDay <= 31 && getMonth == scorpio[0] && getDay >= scorpio[1] || getMonth[0] == scorpio[2] && getDay <= scorpio[3]) {
    console.log("scorpio");
    result.innerHTML = "<p>".concat('<em>Zodiac Sign<hr></em>', "Scorpio", '<br>', " Oct 23 - Nov 21</p>");
    /* READ MORE PART */

    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;

        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }

    more.innerHTML = "<p>Scorpio is a water sign. They are loyal, misterious, kind and strong minded.\n    ".concat('<br>', '<br>', "Read More At\n    ", '<a href="https://www.astrology-zodiac-signs.com/zodiac-signs/scorpio/">www.astrology-zodiac-signs.com</a>', "\n    </p>");
  }
};

var forSagittarius = function forSagittarius() {
  var getMonth = [month.value];
  var getDay = [day.value];

  if (getDay <= 30 && getMonth == sagittarius[0] && getDay >= sagittarius[1] || getMonth[0] == sagittarius[2] && getDay <= sagittarius[3]) {
    result.innerHTML = "<p>".concat('<em>Zodiac Sign<hr></em>', "Sagittarius", '<br>', " Nov 22 - Dec 21</p>");
    /* READ MORE PART */

    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;

        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }

    more.innerHTML = "<p>Sgittarius is a fire sign. They are the soul of the party. They are friendly, kind and optimistics.\n    ".concat('<br>', '<br>', "Read More At\n    ", '<a href="https://www.astrology-zodiac-signs.com/zodiac-signs/sagittarius/">www.astrology-zodiac-signs.com</a>', "\n    </p>");
  }
};

var forCapricorn = function forCapricorn() {
  var getMonth = [month.value];
  var getDay = [day.value];

  if (getDay <= 31 && getMonth == capricorn[0] && getDay >= capricorn[1] || getMonth[0] == capricorn[2] && getDay <= capricorn[3]) {
    result.innerHTML = "<p>".concat('<em>Zodiac Sign<hr></em>', "Capricorn", '<br>', " Dec 22 - Jan 19</p>");
    /* READ MORE PART */

    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;

        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }

    more.innerHTML = "<p>Capricorn is an earth sign. They are responsible, highly discipline and generous.\n   ".concat('<br>', '<br>', "Read More At\n    ", '<a href="https://www.astrology-zodiac-signs.com/zodiac-signs/capricorn/">www.astrology-zodiac-signs.com</a>', "\n   </p>");
  }
};

var forAquarius = function forAquarius() {
  var getMonth = [month.value];
  var getDay = [day.value];

  if (getDay <= 31 && getMonth == aquarius[0] && getDay >= aquarius[1] || getMonth[0] == aquarius[2] && getDay <= aquarius[3]) {
    result.innerHTML = "<p>".concat('<em>Zodiac Sign<hr></em>', "Aquarius", '<br>', " Jan 20 - Feb 18</p>");
    /* READ MORE PART */

    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;

        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }

    more.innerHTML = "<p>Aquarius is an air sign. They are different, eccentric, friendly and kind.\n   ".concat('<br>', '<br>', "Read More At\n    ", '<a href="https://www.astrology-zodiac-signs.com/zodiac-signs/aquarius/">www.astrology-zodiac-signs.com</a>', "\n   </p>");
  }
};

var forPisces = function forPisces() {
  var getMonth = [month.value];
  var getDay = [day.value];

  if (getDay <= 29 && getMonth == pisces[0] && getDay >= pisces[1] || getMonth[0] == pisces[2] && getDay <= pisces[3]) {
    result.innerHTML = "<p>".concat('<em>Zodiac Sign<hr></em>', "Pisces", '<br>', " Feb 19 - Mar 20</p>");
    /* READ MORE PART */

    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;

        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }

    more.innerHTML = "<p>Pisces is a water sign. They are highly sensitive, emotional and intelligent.\n    ".concat('<br>', '<br>', "Read More At\n    ", '<a href="https://www.astrology-zodiac-signs.com/zodiac-signs/pisces/">www.astrology-zodiac-signs.com</a>', "\n    </p>");
  }
};
/* 
Twelve chinese signs
Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Sheep, Monkey, Rooster, Dog, Pig
*/