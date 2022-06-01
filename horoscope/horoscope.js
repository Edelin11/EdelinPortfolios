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
var more = document.getElementById("aboutSign");
var cSign = document.getElementById("cSign");

/* EventListeners */
btn2.addEventListener('click', ()=>forChineseYear());
btn2.addEventListener('click', ()=> forAries());
btn2.addEventListener('click', ()=> forTaurus());
btn2.addEventListener('click', ()=> forGemini());
btn2.addEventListener('click', ()=> forCancer());
btn2.addEventListener('click', ()=> forLeo());
btn2.addEventListener('click', ()=> forVirgo());
btn2.addEventListener('click', ()=> forLibra());
btn2.addEventListener('click', ()=> forScorpio());
btn2.addEventListener('click', ()=> forSagittarius());
btn2.addEventListener('click', ()=> forCapricorn());
btn2.addEventListener('click', ()=> forAquarius());
btn2.addEventListener('click', ()=> forPisces());


var fromyear = 1995; // starting year. To compare the equation with. 
var currentSign = "pig";

const forChineseYear =()=>{
    var mySign = (fromyear - getyear.value)%12;

    if(mySign == 12 || (mySign == 0)){  
        cSign.innerHTML = `
        <h4>Your Chinese Zodiac Sign Is The PIG</h4>
        <p>Characteristics of the Pig${'<br>'}
        "Pigs might not stand out in a crowd.
        But they are very realistic. Others may be all talk and no action. Pigs are the opposite.
        Though not wasteful spenders, they will let themselves enjoy life.
        They love entertainment and will occasionally treat themselves. 
        They are a bit materialistic, but this is motivation for them to
        work hard. Being able to hold solid objects in their hands gives them security. 
        In Chinese culture, pigs are the symbol of wealth." ${'<br>'}${'<br>'}
        Read More From Source At ${'<a href="https://chinesenewyear.net/zodiac/pig/">chinesenewyear.net</a>'} ${'<br>'}Chinese New Year, February 1st, 2022</p>`;                         
    }
    else if(mySign == 11 || (mySign == -1)){
        cSign.innerHTML = `
        <hb>Your Chinese Zodiac Sign Is The RAT</hb>
        <p>Characteristics of the RAT${'<br>'}
        "Optimistic and energetic, people born in the Rat year are 
        likable by all. They are sensitive to other’s emotions 
        but are stubborn with your opinion. Their personality is
        kind, but due to weak communication skills, their words 
        may seem impolite and rude." ${'<br>'}${'<br>'}
        Read More From Source At ${'<a href="https://chinesenewyear.net/zodiac/rat/">chinesenewyear.net</a>'}
        ${'<br>'}Chinese New Year, February 1st, 2022 </p>`; 
    }
    else if(mySign == 10 || (mySign == -2)){ 
        cSign.innerHTML = `
        <h4>Your Chinese Zodiac Sign Is The OX</h4>
        <p>Characteristics of the OX${'<br>'}
        "Oxen are honest and earnest.
        They are low key and never look for praise or to be 
        the center of attention. This often hides their talent, 
        but they’ll gain recognition through their hard work.
        They believe that everyone should do what’s asked for 
        them and stay within their bounds. Though they are kind, 
        it’s difficult for them to understand persuasion using pathos. 
        Rarely losing your temper, they think logically and make great leaders."
        ${'<br>'}${'<br>'} Read More From Source At ${'<a href="https://chinesenewyear.net/zodiac/ox/">chinesenewyear.net</a>'}
        ${'<br>'}Chinese New Year, February 1st, 2022 </p>`;
    }
    else if(mySign == 9 || (mySign == -3)){
        cSign.innerHTML = `
        <h4>Your Chinese Zodiac Sign Is The TIGER</h4>
        <p>Characteristics of the Tiger${'<br>'}
        "Tigers are kind and benevolent. Animals, jazz music or
        other things that call for imagination are good for them.
        They rarely feel tired and have rich emotions.
        Sometimes though, they make brash decisions and are hard to control.
        But no matter how many difficulties or obstacles they face, 
        they will never give up. In the end, Tigers live an average 
        life—there are times of joy, sadness and sometimes disappointment."
        ${'<br>'}${'<br>'}Read More From Source At ${'<a href="https://chinesenewyear.net/zodiac/tiger/">chinesenewyear.net</a>'}
        ${'<br>'}Chinese New Year, February 1st, 2022 </p>`;
    }
    else if(mySign == 8 || (mySign == -4)){
        cSign.innerHTML = `
        <h4>Your Chinese Zodiac Sign Is The RABBIT</h4>
        <p>Characteristics of the Rabbit${'<br>'}
        "To outsiders, the Rabbit kindness may make them seem soft 
        and weak. In truth, the Rabbit quiet personality hides 
        their confidence and strength. They are steadily moving towards 
        their goal, no matter what negativity the others give them.
        With their good reasoning skills and attention to detail, 
        they make great scholars. They are socializers with an attractive 
        aura. However, they find it hard to open up to others and often turn 
        to escapism."
        ${'<br>'}${'<br>'}Read More From Source At ${'<a href="https://chinesenewyear.net/zodiac/rabbit/">chinesenewyear.net</a>'}
        ${'<br>'}Chinese New Year, February 1st, 2022 </p>`;
    }
    else if(mySign == 7 || (mySign == -5)){
        cSign.innerHTML = `
        <h4>Your Chinese Zodiac Sign Is The DRAGON</h4>
        <p>Characteristics of the Dragon: ${'<br>'}
        "Dragons are the most revered animal in Chinese culture. 
        They call themselves the descendants of the dragon. 
        In the past, emperors were seen as the reincarnation of dragons."${'<br>'}
        ${'<br>'}Read More From Source At ${'<a href="https://chinesenewyear.net/zodiac/dragon/">chinesenewyear.net</a>'}
        ${'<br>'}Chinese New Year, February 1st, 2022 </p>`;
    }
    else if(mySign == 6 || (mySign == -6)){ 
        cSign.innerHTML = `
        <h4>Your Chinese Zodiac Sign Is ${'<br>'} The SNAKE </h4>${'<hr>'}
        <p>Characteristics of the Snake: ${'<br>'}
        "Snakes are humorous and sophisticated. They don’t like small 
        talk or thinking about small everyday problems.In a chaotic environment, 
        they are the eye of the storm. Snakes are able to hold their 
        ground and calmly think of solutions. They are always making 
        new plans and follow them without relying on others’ input. 
        They’re usually correct, but this also comes from a distrust of others. 
        You cannot judge a Snake by its cover. Their slow and lazy talking
        hides their fast-paced thinking. Behind their calmness, they are alert 
        and observant."${'<br>'}${'<br>'}Read More From Source At ${'<a href="https://chinesenewyear.net/zodiac/snake/">chinesenewyear.net</a>'}
        ${'<br>'}Chinese New Year, February 1st, 2022 </p>`;
    }
    else if(mySign == 5 || (mySign == -7)){ 
        cSign.innerHTML = `
        <h4>Your Chinese Zodiac Sign Is The HORSE</h4>
        <p>Characteristics of the Horse${'<br>'}
        "Horses are full of energy, albeit a bit too much. 
        Both studious and athletic, they are strong believers of 
        chasing after dreams. Rather than wealth and fame, happiness 
        is what motivates them. They expect others to operate at the 
        same speed as them and don’t understand why others can’t.
        Contradicting characteristics come from the fact that they 
        are ever-changing emotions. They have short tempers and become 
        angry quickly. But once it’s over, they forget quickly. 
        They’re biggest fault is that they’re blind to their own faults."
        ${'<br>'}${'<br>'}Read More From source At ${'<a href="https://chinesenewyear.net/zodiac/horse/">chinesenewyear.net</a>'}
        ${'<br>'}Chinese New Year, February 1st, 2022 </p>`;
    }
    else if(mySign == 4 || (mySign == -8)){
        cSign.innerHTML = `
        <h4>Your Chinese Zodiac Sign Is The GOAT</h4>
        <p>Characteristics of the Goat${'<br>'}
        "Goats are able to persevere through any difficulty. 
        This is their most notable trait. They are strong and resilient, 
        though their gentleness might be misleading.
        They have high tolerance and motivation. Quiet observers, 
        Goats consider all aspects of anything before deciding. 
        They never act brashly and are able to complete tasks successfully.
        Goats also love children, animals and nature. They’re very tidy and 
        are often seen organizing the home. They’re also generous with their 
        time and money. No matter what, they put others’ needs above their own. 
        However, their inner stubbornness sometimes makes communication difficult."
        ${'<br>'}${'<br>'}Read More From Source At ${'<a href="https://chinesenewyear.net/zodiac/goat/">chinesenewyear.net</a>'}
        ${'<br>'}Chinese New Year, February 1st, 2022 </p>`;
    }
    else if(mySign == 3 || (mySign == -9)){
        cSign.innerHTML = `
        <h4>Your Chinese Zodiac Sign Is The MONKEY</h4>
        <p>Characteristics of the Monkey${'<br>'}
        "Monkeys’ most defining trait is their intelligence. 
        As children, they win awards and the praises of teachers. 
        As adults, they gain professional recognition and make great leaders.
        Due to this, it’s understandable that they can be arrogant. 
        They’re often disrespectful and self-centered when making decisions. 
        Monkeys become jealous easily, especially when others are doing better 
        than them. They are awfully competitive, which is both positive and negative.
        However, they view everyone as teachers. They’re willing to listen to 
        critique and learn from their mistakes. They are calm and logical thinkers. 
        Monkeys are always able to triumph and be the final winner."
        ${'<br>'}${'<br>'}Read More From Source At ${'<a href="https://chinesenewyear.net/zodiac/monkey/">chinesenewyear.net</a>'}
        ${'<br>'}Chinese New Year, February 1st, 2022 </p>`;
    }
    else if(mySign == 2 || (mySign == -10)){
        cSign.innerHTML = `
        <h4>Your Chinese Zodiac Sign Is The ROOSTER</h4>
        <p>Characteristics of the Rooster${'<br>'}
        "Roosters are serious in their work. They are straightforward and 
        decisive in their actions. They’ll directly criticize what they see 
        unfit and are perfectionists. They are logical and good at managing teams.
        Family is a refuge and paradise for them. They wish for a large family—it 
        means that there are more people to encourage and support them.
        No matter how difficult something is, they won’t give up. But if 
        someone is blocking their path, they will reveal their fierce side."
        ${'<br>'}${'<br>'}Read More From Source At ${'<a href="https://chinesenewyear.net/zodiac/rooster/">chinesenewyear.net</a>'}
        ${'<br>'}Chinese New Year, February 1st, 2022 </p>`;
    }
    else if(mySign == 1 || (mySign == -11)){
        cSign.innerHTML = `
        <h4>Your Chinese Zodiac Sign Is The DOG</h4>
        <p>Characteristics of the Dog${'<br>'}
        "A Dog’s most defining characteristic is their loyalty. 
        They will never abandon their friends, family or work.
        Honest and just, they are popular in social circles. 
        Everyone needs a Dog friend for advice and help. 
        They are also good at helping others find and fix their bad habits.
        Despite how they act, they are worried and anxious inside. 
        However, they will not let this stop them. Once they decide on something,
        no one can persuade them against it."
        ${'<br>'}${'<br>'}Read More From Source At ${'<a href="https://chinesenewyear.net/zodiac/dog/">chinesenewyear.net</a>'}
        ${'<br>'}Chinese New Year, February 1st, 2022 </p>`;
    }
}
/*  * For the western zodiac signs
    * if month is same as month1 and day is more or equal than that day.
    * or if month is same as month2 and day is less or equal than the last day of zodic  
*/

// the horoscope dates 
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
var pisces = [02, 19, 03, 20];



const forAries =()=>{
    var getMonth = [month.value];
    var getDay = [day.value]; 
    if(getDay <= 31 && getMonth == aries[0] && getDay >= aries[1] || getMonth[0] == aries[2] &&  getDay <= aries[3] ){
        result.innerHTML = `<p style="font-size: 20px;">Aries ${'<br>'} March 21 - April 19</p>`;
        more.innerHTML = `
        <p>Aries is a fire sign. Aries people are outgoing, friendly and popular.${'<br>'}
        </p>`;
    } 
   
} 
const forTaurus =()=>{
    var getMonth = [month.value];
    var getDay = [day.value];
    if(getDay <= 30 && getMonth == taurus[0] && getDay >= taurus[1] || getMonth[0] == taurus[2] && getDay <= taurus[3] ){
        result.innerHTML = `<p style="font-size: 20px;">Taurus ${'<br>'} April 20 - May 20</p>`;
        more.innerHTML = `
        <p>Taurus is an earth sign. Taurus people are very ambitious and sucessfull. 
            ${'<br>'}
        </p>`; 
    }
    
} 
const forGemini =()=>{
    var getMonth = [month.value];
    var getDay = [day.value];
    if(getDay <= 31 && getMonth == gemini[0] && getDay >= gemini[1] || getMonth[0] == gemini[2] && getDay <= gemini[3]){
        result.innerHTML = `<p style="font-size: 20px;">Gemini ${'<br>'} May 21 - June 20</p>`;
        more.innerHTML = `<p>Gemini is an air sign. They have two personalities and are quick-witted.
        ${'<br>'}
        </p>`; 
    }
    
} 
const forCancer =()=>{
    var getMonth = [month.value];
    var getDay = [day.value];
    if(getDay <= 30 && getMonth == cancer[0] && getDay >= cancer[1] || getMonth[0] == cancer[2] && getDay <= cancer[3] ){
        result.innerHTML = `<p style="font-size: 20px;">Cancer ${'<br>'} Jun 21 - Jul 22</p>`;
        more.innerHTML = `<p>Cancer is a water sign. They are also known as Moonchild. Deeply sensitive and emotional.
        ${'<br>'}
        </p>`;  
    }
    
} 
const forLeo =()=>{
    var getMonth = [month.value];
    var getDay = [day.value];
    if(getDay <= 31 && getMonth == leo[0] && getDay >= leo[1] || getMonth[0] == leo[2] && getDay <= leo[3] ){
        result.innerHTML = `<p style="font-size: 20px;">Leo ${'<br>'} Jul 23 - Aug 22</p>`;
        more.innerHTML = `<p>Leo is a fire sign. They love being the center of attention. They're dramatic and dominant but also generous and loyal.
        ${'<br>'}
        </p>`;  
    }
   
} 
const forVirgo =()=>{
    var getMonth = [month.value];
    var getDay = [day.value];
    if(getDay <= 31 && getMonth == virgo[0] && getDay >= virgo[1] || getMonth[0] == virgo[2] && getDay <= 31 && getDay <= virgo[3] ){
        result.innerHTML = `<p style="font-size: 20px;">Virgo ${'<br>'} Aug 23 - Sept 22</p>`;
        more.innerHTML = `<p>Virgo is an earth sign. Virgos are perfectionists, great friends, kind and motherly.
        ${'<br>'}
        </p>`;  
    }
    
} 
const forLibra =()=>{
    var getMonth = [month.value];
    var getDay = [day.value];
    if(getDay <= 30 && getMonth == libra[0] && getDay >= libra[1] || getMonth[0] == libra[2] && getDay <= libra[3] ){
        result.innerHTML = `<p style="font-size: 20px;">Libra ${'<br>'} Sept 23 - Oct 22</p>`;
        more.innerHTML = `<p>Libra is an air sign. They are the balance of the zodiac. They are peaceful and kind.
        ${'<br>'}
        </p>`;    
    }
 
} 
const forScorpio =()=>{
    var getMonth = [month.value];
    var getDay = [day.value];
    if(getDay <= 31 && getMonth ==scorpio[0] && getDay >= scorpio[1] || getMonth[0] == scorpio[2] && getDay <= scorpio[3] ){
        result.innerHTML = `<p style="font-size: 20px;">Scorpio${'<br>'} Oct 23 - Nov 21</p>`;
        more.innerHTML = `<p>Scorpio is a water sign. They are loyal, misterious, kind and strong minded.
        ${'<br>'}
        </p>`;                          
    } 
} 

const forSagittarius =()=>{
    var getMonth = [month.value];
    var getDay = [day.value];
    if(getDay <= 30 && getMonth == sagittarius[0] && getDay >= sagittarius[1] || getMonth[0] == sagittarius[2] && getDay <= sagittarius[3] ){
        result.innerHTML = `<p style="font-size: 20px;">Sagittarius${'<br>'} Nov 22 - Dec 21</p>`; 
        more.innerHTML = `<p>Sgittarius is a fire sign. They are the soul of the party. They are friendly, kind and optimistics.
        ${'<br>'}
        </p>`;  
    }
  
} 
const forCapricorn =()=>{
    var getMonth = [month.value];
    var getDay = [day.value];
    if(getDay <= 31 && getMonth == capricorn[0] && getDay >= capricorn[1] || getMonth[0] == capricorn[2] && getDay <= capricorn[3] ){
        result.innerHTML = `<p style="font-size: 20px;">Capricorn${'<br>'} Dec 22 - Jan 19</p>`; 
        more.innerHTML = `<p>Capricorn is an earth sign. They are responsible, highly discipline and generous.
        ${'<br>'}
        </p>`;  
    } 
} 
const forAquarius =()=>{
    var getMonth = [month.value];
    var getDay = [day.value];
    if(getDay <= 31 && getMonth == aquarius[0] && getDay >= aquarius[1] || getMonth[0] == aquarius[2] && getDay <= aquarius[3] ){
        result.innerHTML = `<p style="font-size: 20px;">Aquarius${'<br>'} Jan 20 - Feb 18</p>`; 
        more.innerHTML = `<p>Aquarius is an air sign. They are different, eccentric, friendly and kind.
        ${'<br>'}
        </p>`;     
    }
   
} 
const forPisces =()=>{
    var getMonth = [month.value];
    var getDay = [day.value];
    if(getDay <= 29 && getMonth == pisces[0] && getDay >= pisces[1] || getMonth[0] == pisces[2] && getDay <= pisces[3] ){
        result.innerHTML = `<p style="font-size: 20px;">Pisces${'<br>'} Feb 19 - Mar 20</p>`; 
        more.innerHTML = `<p>Pisces is a water sign. They are highly sensitive, emotional and intelligent.
        ${'<br>'}
        </p>`;  
    }
} 



/* 
Twelve chinese signs
Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Sheep, Monkey, Rooster, Dog, Pig
*/


