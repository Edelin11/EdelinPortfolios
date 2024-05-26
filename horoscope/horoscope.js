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
    if(mySign == 3 && getyear.value == 0){
        console.log('is', 'Tiger');
        cSign.innerHTML = `
        <h3>2023 Chinese zodiac year is The Water Rabit</h3>${'<br>'}
        <h6 style="font-weight: bold; font-style: italic;">Enter your born year to know your Chinese sign</h6>
        <p> 
        "These Rabbits had financial hardships during youth, 
        but are able to turn unfortunate events around. 
        During the elderly years, money must be spent to preserve longevity."
        "With their good reasoning skills and attention to detail, they make great scholars. 
        They are socializers with an attractive aura. However, 
        they find it hard to open up to others and often turn to escapism." 
        "To outsiders, the Rabbit's kindness may make them seem soft and weak. 
        In truth, the Rabbit's quiet personality hides their confidence and strength. 
        They are steadily moving towards their goal, no matter what negativity the others give them."
        ${'<br>'}${'<br>'}Read More From Source At ${'<a href="https://chinesenewyear.net/zodiac/rabbit/">chinesenewyear.net</a>'} 
        ${'<br>'}Chinese New Year: January 22, 2023 - February 9, 2024${'<br>'}${'<br>'}
       </p>`;
    }else
    if(mySign == 12 || (mySign == 0)){  
        cSign.innerHTML = `
        <h3 style="font-weight: bold">Your Chinese zodiac sign is The PIG</h3>${'<br>'}
        <h5 style="font-weight: bold; font-style: italic;">Characteristics of the Pig</h5>
        <p>"Pigs might not stand out in a crowd.
        But they are very realistic. Others may be all talk and no action. Pigs are the opposite.
        Though not wasteful spenders, they will let themselves enjoy life.
        They love entertainment and will occasionally treat themselves. 
        They are a bit materialistic, but this is motivation for them to
        work hard. Being able to hold solid objects in their hands gives them security. 
        In Chinese culture, pigs are the symbol of wealth." ${'<br>'}${'<br>'}
        Read More From Source At ${'<a href="https://chinesenewyear.net/zodiac/pig/">chinesenewyear.net</a>'} 
        ${'<br>'}Chinese New Year: January 22, 2023 - February 9, 2024</p>`;                         
    }
    else if(mySign == 11 || (mySign == -1)){
        cSign.innerHTML = `
        <h3 style="font-weight: bold">Your Chinese zodiac sign is The RAT</h3>${'<br>'}
        <h5 style="font-weight: bold; font-style: italic;">Characteristics of the RAT</h5>
        <p>
        "Optimistic and energetic, people born in the Rat year are 
        likable by all. They are sensitive to other's emotions 
        but are stubborn with your opinion. Their personality is
        kind, but due to weak communication skills, their words 
        may seem impolite and rude." ${'<br>'}${'<br>'}
        Read More From Source At ${'<a href="https://chinesenewyear.net/zodiac/rat/">chinesenewyear.net</a>'}
        ${'<br>'}Chinese New Year: January 22, 2023 - February 9, 2024</p>`; 
    }
    else if(mySign == 10 || (mySign == -2)){ 
        cSign.innerHTML = `
        <h3 style="font-weight: bold">Your Chinese zodiac sign is The OX</h3>${'<br>'}
        <h5 style="font-weight: bold; font-style: italic;">Characteristics of the OX</h5>
        
       <p> "Oxen are honest and earnest.
        They are low key and never look for praise or to be 
        the center of attention. This often hides their talent, 
        but they'll gain recognition through their hard work.
        They believe that everyone should do what's asked for 
        them and stay within their bounds. Though they are kind, 
        it's difficult for them to understand persuasion using pathos. 
        Rarely losing your temper, they think logically and make great leaders."
        ${'<br>'}${'<br>'} Read More From Source At ${'<a href="https://chinesenewyear.net/zodiac/ox/">chinesenewyear.net</a>'}
        ${'<br>'}Chinese New Year: January 22, 2023 - February 9, 2024</p>`;
    }
    else if(mySign == 9 || (mySign == -3)){
        cSign.innerHTML = `
        <h3 style="font-weight: bold">Your Chinese zodiac sign is The TIGER</h3>${'<br>'}
        <h5 style="font-weight: bold; font-style: italic;">Characteristics of the TIGER</h5>
      
        <p>"Tigers are kind and benevolent. Animals, jazz music or
        other things that call for imagination are good for them.
        They rarely feel tired and have rich emotions.
        Sometimes though, they make brash decisions and are hard to control.
        But no matter how many difficulties or obstacles they face, 
        they will never give up. In the end, Tigers live an average 
        life—there are times of joy, sadness and sometimes disappointment."
        ${'<br>'}${'<br>'}Read More From Source At ${'<a href="https://chinesenewyear.net/zodiac/tiger/">chinesenewyear.net</a>'}
        ${'<br>'}Chinese New Year: January 22, 2023 - February 9, 2024</p>`;
    }
    else if(mySign == 8 || (mySign == -4)){
        cSign.innerHTML = `
        <h3 style="font-weight: bold">Your Chinese zodiac sign is The RABBIT</h3>${'<br>'}
        <h5 style="font-weight: bold; font-style: italic;">Characteristics of the RABBIT</h5>
       
        <p>"To outsiders, the Rabbit kindness may make them seem soft 
        and weak. In truth, the Rabbit quiet personality hides 
        their confidence and strength. They are steadily moving towards 
        their goal, no matter what negativity the others give them.
        With their good reasoning skills and attention to detail, 
        they make great scholars. They are socializers with an attractive 
        aura. However, they find it hard to open up to others and often turn 
        to escapism."
        ${'<br>'}${'<br>'}Read More From Source At ${'<a href="https://chinesenewyear.net/zodiac/rabbit/">chinesenewyear.net</a>'}
        ${'<br>'}Chinese New Year: January 22, 2023 - February 9, 2024 </p>`;
    }
    else if(mySign == 7 || (mySign == -5)){
        cSign.innerHTML = `
        <h3 style="font-weight: bold">Your Chinese zodiac sign is The DRAGON</h3>${'<br>'}
        <h5 style="font-weight: bold; font-style: italic;">Characteristics of the DRAGON</h5>
     
        <p>"Dragons are the most revered animal in Chinese culture. 
        They call themselves the descendants of the dragon. 
        In the past, emperors were seen as the reincarnation of dragons."${'<br>'}
        ${'<br>'}Read More From Source At ${'<a href="https://chinesenewyear.net/zodiac/dragon/">chinesenewyear.net</a>'}
        ${'<br>'}Chinese New Year: January 22, 2023 - February 9, 2024</p>`;
    }
    else if(mySign == 6 || (mySign == -6)){ 
        cSign.innerHTML = `
        <h3 style="font-weight: bold">Your Chinese zodiac sign is The SNAKE</h3>${'<br>'}
        <h5 style="font-weight: bold; font-style: italic;">Characteristics of the SNAKE</h5>
     
        <p>"Snakes are humorous and sophisticated. They don't like small 
        talk or thinking about small everyday problems.In a chaotic environment, 
        they are the eye of the storm. Snakes are able to hold their 
        ground and calmly think of solutions. They are always making 
        new plans and follow them without relying on others' input. 
        They’re usually correct, but this also comes from a distrust of others. 
        You cannot judge a Snake by its cover. Their slow and lazy talking
        hides their fast-paced thinking. Behind their calmness, they are alert 
        and observant."${'<br>'}${'<br>'}Read More From Source At ${'<a href="https://chinesenewyear.net/zodiac/snake/">chinesenewyear.net</a>'}
        ${'<br>'}Chinese New Year: January 22, 2023 - February 9, 2024 </p>`;
    }
    else if(mySign == 5 || (mySign == -7)){ 
        cSign.innerHTML = `
        <h3 style="font-weight: bold">Your Chinese zodiac sign is The HORSE</h3>${'<br>'}
        <h5 style="font-weight: bold; font-style: italic;">Characteristics of the HORSE</h5>
        
        <p>"Horses are full of energy, albeit a bit too much. 
        Both studious and athletic, they are strong believers of 
        chasing after dreams. Rather than wealth and fame, happiness 
        is what motivates them. They expect others to operate at the 
        same speed as them and don't understand why others can't.
        Contradicting characteristics come from the fact that they 
        are ever-changing emotions. They have short tempers and become 
        angry quickly. But once it's over, they forget quickly. 
        They're biggest fault is that they're blind to their own faults."
        ${'<br>'}${'<br>'}Read More From source At ${'<a href="https://chinesenewyear.net/zodiac/horse/">chinesenewyear.net</a>'}
        ${'<br>'}Chinese New Year: January 22, 2023 - February 9, 2024 </p>`;
    }
    else if(mySign == 4 || (mySign == -8)){
        cSign.innerHTML = `
        <h3 style="font-weight: bold">Your Chinese zodiac sign is The GOAT</h3>${'<br>'}
        <h5 style="font-weight: bold; font-style: italic;">Characteristics of the GOAT</h5>
       
        <p>"Goats are able to persevere through any difficulty. 
        This is their most notable trait. They are strong and resilient, 
        though their gentleness might be misleading.
        They have high tolerance and motivation. Quiet observers, 
        Goats consider all aspects of anything before deciding. 
        They never act brashly and are able to complete tasks successfully.
        Goats also love children, animals and nature. They're very tidy and 
        are often seen organizing the home. They're also generous with their 
        time and money. No matter what, they put others' needs above their own. 
        However, their inner stubbornness sometimes makes communication difficult."
        ${'<br>'}${'<br>'}Read More From Source At ${'<a href="https://chinesenewyear.net/zodiac/goat/">chinesenewyear.net</a>'}
        ${'<br>'}Chinese New Year: January 22, 2023 - February 9, 2024 </p>`;
    }
    else if(mySign == 3 || (mySign == -9)){
        cSign.innerHTML = `
        <h3 style="font-weight: bold">Your Chinese zodiac sign is The MONKEY</h3>${'<br>'}
        <h5 style="font-weight: bold; font-style: italic;">Characteristics of the MONKEY</h5>
   
        <p>"Monkeys' most defining trait is their intelligence. 
        As children, they win awards and the praises of teachers. 
        As adults, they gain professional recognition and make great leaders.
        Due to this, it's understandable that they can be arrogant. 
        They're often disrespectful and self-centered when making decisions. 
        Monkeys become jealous easily, especially when others are doing better 
        than them. They are awfully competitive, which is both positive and negative.
        However, they view everyone as teachers. They're willing to listen to 
        critique and learn from their mistakes. They are calm and logical thinkers. 
        Monkeys are always able to triumph and be the final winner."
        ${'<br>'}${'<br>'}Read More From Source At ${'<a href="https://chinesenewyear.net/zodiac/monkey/">chinesenewyear.net</a>'}
        ${'<br>'}Chinese New Year: January 22, 2023 - February 9, 2024 </p>`;
    }
    else if(mySign == 2 || (mySign == -10)){
        cSign.innerHTML = `
        <h3 style="font-weight: bold">Your Chinese zodiac sign is The ROOSTER</h3>${'<br>'}
        <h5 style="font-weight: bold; font-style: italic;">Characteristics of the ROOSTER</h5>
       
        <p>"Roosters are serious in their work. They are straightforward and 
        decisive in their actions. They'll directly criticize what they see 
        unfit and are perfectionists. They are logical and good at managing teams.
        Family is a refuge and paradise for them. They wish for a large family—it 
        means that there are more people to encourage and support them.
        No matter how difficult something is, they won't give up. But if 
        someone is blocking their path, they will reveal their fierce side."
        ${'<br>'}${'<br>'}Read More From Source At ${'<a href="https://chinesenewyear.net/zodiac/rooster/">chinesenewyear.net</a>'}
        ${'<br>'}Chinese New Year: January 22, 2023 - February 9, 2024 </p>`;
    }
    else if(mySign == 1 || (mySign == -11)){
        cSign.innerHTML = `
        <h3 style="font-weight: bold">Your Chinese zodiac sign is The DOG</h3>${'<br>'}
        <h5 style="font-weight: bold; font-style: italic;">Characteristics of the DOG</h5>
        
        <p>"A Dog's most defining characteristic is their loyalty. 
        They will never abandon their friends, family or work.
        Honest and just, they are popular in social circles. 
        Everyone needs a Dog friend for advice and help. 
        They are also good at helping others find and fix their bad habits.
        Despite how they act, they are worried and anxious inside. 
        However, they will not let this stop them. Once they decide on something,
        no one can persuade them against it."
        ${'<br>'}${'<br>'}Read More From Source At ${'<a href="https://chinesenewyear.net/zodiac/dog/">chinesenewyear.net</a>'}
        ${'<br>'}Chinese New Year: January 22, 2023 - February 9, 2024 </p>`;
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
        result.innerHTML = `<div style="max-width: 750px;">
        <p style="font-size: 20px; font-weight: bold; text-align: center;">Aries ${'<br>'} March 21 - April 19</p></div>`;
        more.innerHTML = `
        <p>Aries is the first astrological sign in the zodiac. 
        It's a Fire element sign and ruled by Mars and it is represented by the color red. 
        Their zodiac symbol is the Ram. A sheep with curved horns that represents fertility, 
        springtime and the will to win a fight with courage and determination.

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">Personality Traits:</h5>
        They are determined, powerful, charismatic, enthusiastic, 
        passionate, friendly, outgoing. They can be the soul of the party. They make a lot of friends. 
        People are drawn to them because of their friendly and charismatic personality. They have the fire, 
        power and energy to fight for what they believe in, and to fight for what is right.

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">Negative Traits:</h5>
        Short-tempered, aggressive, stubborn, impatient. 
        They don't loose an argument and because they are a fire sign they have the fire, 
        energy and power to keep an argument until they win it.

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">In Love:</h5>
        They are very passionate, attentive, energetic and always there for you, 
        they shower their love interest with a lot of affection, attention, gifts. 
        They tend to forget about themselves when they're in love. They have a great 
        compatibility with all the zodiac signs including Aries with Aries 
        which could be a very fiery and passionate relationship.
        
        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">In the Tarot:</h5>
        Aries is The Emperor. An authority figure, wise and powerful. 
        The Emperor sits in a throne and is a leader. Like The Emperor, Aries are 
        business oriented people who can achieve anything they want with perseverance and self-control 
        in all areas. The Emperor attracts money and abundance into your life. 
        Their focus on obtaining material success can make them forget about love and about 
        their emotions sometimes. 
        </p>`;
    } 
   
} 
const forTaurus =()=>{
    var getMonth = [month.value];
    var getDay = [day.value];
    if(getDay <= 30 && getMonth == taurus[0] && getDay >= taurus[1] || getMonth[0] == taurus[2] && getDay <= taurus[3] ){
        result.innerHTML = `<p style="font-size: 20px; font-weight: bold; text-align: center;">Taurus ${'<br>'} April 20 - May 20</p>`;
        more.innerHTML = `
        <p>Taurus is the second sign of the zodiac. Is an Earth element sign ruled by 
        Venus the planet of love and attraction. It is represented by the color green. 
        Their zodiac symbol is a bull which represents strength, power, determination, perseverance. 
        They are bull-headed and won't stop until they achieve their goals. Their nature is to produce, 
        create things and enjoy a laid-back luxurious life. 
        
        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">Personality Traits:</h5>
        Some of their positive traits are: Responsible, reliable, calm, hard-working, 
        knowledgable, practical, patient, kind, grounded. They are very hard working, 
        entrepreneurs, social and they like luxury and everything that shines and it's beautiful, 
        so they work hard to obtain all of that. They are very sensual and attractive. 
        This is one of the most reliable signs in the zodiac. They want to make a name for 
        themselves and succeed in life. They are very grounded and see life from a realistic 
        perspective. Their driving force is their will to succeed and find security.

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">Negative Traits:</h5>
        Easy to anger, stubbornness, possessiveness, 
        negative thoughts, self doubts. They can be very fiery when provoked. 
        They tend to focus on the negatives too often. They can be possessives of their partner 
        and jealousy can be a problem in their relationships. They tend to self sabotage themselves 
        with negative thinking.

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">In Love:</h5>
        This is a very passionate sign specially because it's rulled by Venus the planet of love. 
        They are stable, passionate, loyal, committed and always there for you. 
        They are not very expressive they show their love in their own way. Taurus wants a partner for life. 
        They give their all if the other person is fully committed to the relatioship. 
        Expect a lot of passion and love from this sign.

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">In the Tarot:</h5>
        Taurus is The Hierophant. This is a positive 
        card that represents a wise, mature person. It represents a stable situation that can be resolve.
        </p>`; 
    }
    
} 
const forGemini =()=>{
    var getMonth = [month.value];
    var getDay = [day.value];
    if(getDay <= 31 && getMonth == gemini[0] && getDay >= gemini[1] || getMonth[0] == gemini[2] && getDay <= gemini[3]){
        result.innerHTML = `<p style="font-size: 20px; font-weight: bold; text-align: center;">Gemini ${'<br>'} May 21 - June 20</p>`;
        more.innerHTML = `
        <p>The Twins, Gemini is an Air sign. Ruled by the planet Mercury which is all about curiousty, communication, and adaptability 
        but also about indecisiveness. It is represented by the color yellow which represents a very optimistic and happy personality.
        Their quality is Mutable which means they are ready for change and something new.
        They have two personalities and are quick-witted.
        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">Personality Traits:</h5>
        Gemini is very gentle and expressive with an ability to adapt really fast to any new environment or situation. 
        They are charismatic and friendly but because they are represented by two personalities you'll never know which one you're facing.
        They like to have fun, they are curious people amd always ready for adventure. They are good with communication, writing 
        and constant movement.

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">Negative Traits:</h5>
        They are indecisive people, they tend to get nervous in any situation. Gemini takes too long to make a decision, 
        they never know what they want.
        They can get bored pretty easily if there is not constant change or innovation. They hate being alone and being stuck 
        in the same routine.

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">In Love:</h5>
        Gemini is known to fall in love fast but they can also fall out of love as quickly. 
        They are all about enjoying the present moment with their love interest and showing them a new experince anytime they can.
        they have a curoius and flirty nature, their partner won't get easily bored because Gemini is always up to new excitements. 
        They are good at communicating their feelings and emotions to their partner and are very romantic with words more than actions.
        
        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">In the Tarot:</h5>
        Gemini is The Lovers card in the tarot. The lovers card is about having two strong options. Facing a crossroad. 
        Facing two different path in life, career, love. Having two options or being confused about what they want.
        </p>`; 
    }
    
} 
const forCancer =()=>{
    var getMonth = [month.value];
    var getDay = [day.value];
    if(getDay <= 30 && getMonth == cancer[0] && getDay >= cancer[1] || getMonth[0] == cancer[2] && getDay <= cancer[3] ){
        result.innerHTML = `<p style="font-size: 20px; font-weight: bold; text-align: center;">Cancer ${'<br>'} Jun 21 - Jul 22</p>`;
        more.innerHTML = `
        <p>The Crab, Cancer is a Water sign. Ruled by the Moon which is about deep emotions. Cancer color is white which means they are optimistic, 
        minimalists and pure, but they can get easily overwhelmed in chaotic situations. Their quality is Cardinal which represents new beginnings.
        They are also known as Moonchild. Deeply sensitive and emotional.

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">Personality Traits:</h5>
        They are friendly, love helping others, they are very emotional, sentimental and intuitive. They put all their heart into everything they do. 
        They are homebodies but they also do well in any social environment.
        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">Negative Traits:</h5>
        They can be moody, pessimistic and insecure. They need to be shown a lot of love. They can have a lot of self-doubts and self-pity.
        
        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">In Love:</h5>
        Cancer is a romantic, they fall in love easy. They give their all in a relatioship. 
        They put their partners first which can make them forget about themself sometimes. 
        Cancer falls in love so deep to the point where they don't see anything other than their partner. 
        They tend to be very jealous and possessive because they are deeply emotional. And sometimes they think they don't deserve to be loved,
         so Cancer needs to be shown a lot of love and affetion.
        
        ${'<br>'}${'<br>'}
        <h5 style="font-weight: bold; font-style: italic; text-align: center;">In the Tarot:</h5>
        cancer is The chariot card in the tarot. It means Change, moving fordward, new beginnings. Going in the direction your intuition is guiding you towards.
         Constant movement and new beginnings.
        </p>`;  
    }
    
} 
const forLeo =()=>{
    var getMonth = [month.value];
    var getDay = [day.value];
    if(getDay <= 31 && getMonth == leo[0] && getDay >= leo[1] || getMonth[0] == leo[2] && getDay <= leo[3] ){
        result.innerHTML = `<p style="font-size: 20px; font-weight: bold; text-align: center;">Leo ${'<br>'} Jul 23 - Aug 22</p>`;
        more.innerHTML = `
        <p>The Lion, Leo is a Fire sign. Ruled by the Sun they love being the center of attention, they have a lot of creativity, positivity and vitality.
         Their color is gold which represents loyalty, success, luxury, generosity and compassion. 
         Leo's quality is Fixed which means that they don't like change and prefer stability. They're dramatic and dominant but also generous and loyal.

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">Personality Traits:</h5>
        They are very creative, fun, friendly, cheerful. They love attention so they tend go for acting careers. They have a lot of self-confidence.
         They are not scare to show who they are. They are loyal and always there for you when you need them. Leos are charismatic people with a captivating 
         personality. They love expensive things, being admired and have fun with friends.

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">Negative Traits:</h5>
        They can be arrogant, self-absorve, dramatic and have a big ego. 

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">In Love:</h5>
        Leo is very passionate, romantic and fiery. They show their feelings a lot and can be very generous and loyal towards their partner. They require a lot of attention 
        but they also shower their partner with a lot of love, gifts and affetion.

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">In the Tarot:</h5>
        Leo is The Strengh card in the tarot. It means they are strong enough to tamed even a lion. It means being powerful enough to overcome any situation 
        and any difficulties in life.
        </p>`;  
    }
   
} 
const forVirgo =()=>{
    var getMonth = [month.value];
    var getDay = [day.value];
    if(getDay <= 31 && getMonth == virgo[0] && getDay >= virgo[1] || getMonth[0] == virgo[2] && getDay <= 31 && getDay <= virgo[3] ){
        result.innerHTML = `<p style="font-size: 20px; font-weight: bold; text-align: center;">Virgo ${'<br>'} Aug 23 - Sept 22</p>`;
        more.innerHTML = `
        <p>The Maiden, Virgo is an Earth sign. Ruled by Mercury they are very detail-oriented and good at communicating.  
        Their color is navy blue which represents stability, royalty, and trust. Their quality is Mutable which means that they 
        don't like being in the same routine everyday and need constant change. Virgos are perfectionists, great friends, kind and motherly.

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">Personality Traits:</h5>
        Virgos are hardworking, problem solving and perfectionists. They are loyal, friendly, analytical. They think very carefully about everything. 
        They are highly independent.
        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">Negative Traits:</h5>
        They can be very harsh with themselves and self-critical. They can be judgmental of others and themselves as well. They are not good at asking for help.
        
        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">In Love:</h5>
        Virgo needs to feel save with their partner and they prefer a more stable relationship. They tend to follow the lead of their partner. 
        They are romantic but they will adapt to their partner's personality.

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">In the Tarot:</h5>
        Virgo is The Hermit card. A figure who prefers to be alone until they find the answers they're looking for. This card means having a lot of wisdom 
        gained by being in solitary confinement.
        </p>`;  
    }
    
} 
const forLibra =()=>{
    var getMonth = [month.value];
    var getDay = [day.value];
    if(getDay <= 30 && getMonth == libra[0] && getDay >= libra[1] || getMonth[0] == libra[2] && getDay <= libra[3] ){
        result.innerHTML = `<p style="font-size: 20px; font-weight: bold; text-align: center;">Libra ${'<br>'} Sept 23 - Oct 22</p>`;
        more.innerHTML = `
        <p>The Scales, Libra is an Air sign. Ruled by Venus the planet of love. Their color is green and light blue which represents a perfectionist, analytical and calm personality.
         Their quality is Cardinal which means leadership and new beginnings. 
         They are the balance of the zodiac. 

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">Personality Traits:</h5>
        Libra has a calm personality. They are the advocates of peace and balance. They are fair-minded, diplomatic and social. They tend to be perfectionist 
        and are really good artist. They don't mind taking the leadership. They are peaceful and kind.

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">Negative Traits:</h5>
        They can be judgmental and they think they're always right. 
        They can also have a lot of self-pity and can hold grudges for a long time if you wrong them. 
        They are good companions and loyal friends.

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">In Love:</h5>
        Maintaining peace and harmony in a romantic relatioship is their top priority. They are romantics and will always be there 
        for their partner because they take their relationship very serious. A love partner is their biggest inspiration and muse. 
        They are sweet, affectionate, and attentive with their partner.

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">In the Tarot:</h5>
        Libra is the Justice card in the tarot. It represents balance, justice, karma, what goes around comes around. 
        It means that justice will prevail no matter what.
        </p>`;    
    }
 
} 
const forScorpio =()=>{
    var getMonth = [month.value];
    var getDay = [day.value];
    if(getDay <= 31 && getMonth ==scorpio[0] && getDay >= scorpio[1] || getMonth[0] == scorpio[2] && getDay <= scorpio[3] ){
        result.innerHTML = `<p style="font-size: 20px; font-weight: bold; text-align: center;">Scorpio${'<br>'} Oct 23 - Nov 21</p>`;
        more.innerHTML = `
        <p>The Scorpion, Scorpio is a Water sign. Ruled by Pluto and Mars these two plantes urges Scorpios to learn more, to crave for self-growth and transformation.
         Their color is scarlet and red which symbolizes being bold, strong, full of confidence and determination. Their quality is Fixed, Scorpio thrives for change and rebirth 
         and yet they need stability in the world around them and within.
         They are loyal, misterious, kind and strong minded.

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">Personality Traits:</h5>
        Scorpios are loyals and true friends. They are passionate, deeply emotional, kind, mysterious, powerful and brave. 
        Scorpio will always be there for you but if you lie to them then everything is over. They tend to keep to themself and love being secretive.
         This is a misunderstood sign because they are quiet and mysterious but they have a big heart.

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">Negative Traits:</h5>
        Jealousy, possessiveness and manipulative. They can be very stubborn and they have trust issues.

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">In Love:</h5>
        Scorpios are passionate and will pursue their love interest with a lot of intensity. They hate showing emotions but love deeply. 
        Scorpios will find out every little secret about their love interest. They are very intense in all aspects and will expect their partner to meet their 
        expectations. They are possessives of their partner but can fall out of love very quickly if they are wronged. They seek a deep spiritual connection more than anything.

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">In the Tarot:</h5>
        Scorpio is The Death card. This card represents new beginnings, rebirth and transformation. Traditionally, there's a sun rising on the horizon in The Death card 
        which means that this end is bringing a positive new beginning.
        </p>`;                          
    } 
} 

const forSagittarius =()=>{
    var getMonth = [month.value];
    var getDay = [day.value];
    if(getDay <= 30 && getMonth == sagittarius[0] && getDay >= sagittarius[1] || getMonth[0] == sagittarius[2] && getDay <= sagittarius[3] ){
        result.innerHTML = `<p style="font-size: 20px; font-weight: bold; text-align: center;">Sagittarius${'<br>'} Nov 22 - Dec 21</p>`; 
        more.innerHTML = `
        <p>The Archer, Sgittarius is a Fire sign. Ruled by Jupiter which for Sagittarians means travel, movement and change. 
        Their color is purple which represents individualism, spirituality and luxury. 
        Their quality is Mutable which means that they get bored easily and need constant change. 
        They are the soul of the party. They are friendly, kind and optimistics.

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">Personality Traits:</h5>
        They are adventurous, spontaneous and optimistic. They are very social and fun, they're always up for new adventure and learning new skills. 
        They are outgoing and talkative with a big sense of humor. 

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">Negative Traits:</h5>
        They tend to be sarcastic, they talk too much and are really stubborn. They won't stop until they get their way. 

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">In Love:</h5>
        They like to have fun so they are always looking for new ways to have fun with their partner. They are very expressive, passionate, and romantic. 
        They prefer partners who share the same ideas as them. 
        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">In the Tarot:</h5>
        Sagittarius is the Temperance card. This card is always looking for enlightenment and being in balance with their emotions and body. 
        This card means you have reach a perfect balance and patience.
        </p>`;  
    }
  
} 
const forCapricorn =()=>{
    var getMonth = [month.value];
    var getDay = [day.value];
    if(getDay <= 31 && getMonth == capricorn[0] && getDay >= capricorn[1] || getMonth[0] == capricorn[2] && getDay <= capricorn[3] ){
        result.innerHTML = `<p style="font-size: 20px; font-weight: bold; text-align: center;">Capricorn${'<br>'} Dec 22 - Jan 19</p>`; 
        more.innerHTML = `
        <p>The Goat, Capricorn is an Earth sign. Ruled by Saturn, it represents commitment, responsibility, and boundaries. 
        Their color is brown which symbolizes reliability, resilience and sometimes dependability. Their quality is Cardinal which means they are natural leaders 
        who are open for the unexpected and welcome change. They are responsible, highly discipline and generous.

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">Personality Traits:</h5>
        Capricorns are diciplined, responsible and have a lot of self-control. They are natural leaders and they enjoy making plans and following a good  business strategy  
        for everything. They learn rely a lot on their experience for any decision making. They're mostly focused on their career and financial success. 
        They highly value family, status, and self-respect.

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">Negative Traits:</h5>
        Capricorns are cold, distant and unforgiving. It will take them a while to warm up to people because they are reserved individuals who need to know if they can 
        trust you first. Sometimes they are hard to please and difficult to understand. They tend to be pessimists and they also tend to have a condescending personality.
        They need to learn to forgive in order to make their own life lighter and more positive.

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">In Love:</h5>
        Capricorn is hard to get and they seem to be cold but that's because they have a wall protecting them. Once their walls breaks they are warm, romantics, and 
        loyal. They want a deep connection and someone who will stay for life with them. They are committed and responsible towards their partner. They're not really 
        expressive, they show love with actions and by providing security for their partners.

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">In the Tarot:</h5>
        Capricorn is The Devil card. This card symbolizes being restricted by your own expectations, by self-restricting thoughts and by doubts. It is also a card 
        that encourages you to break free from these restrictions and see your full potential. 
        </p>`;  
    } 
} 
const forAquarius =()=>{
    var getMonth = [month.value];
    var getDay = [day.value];
    if(getDay <= 31 && getMonth == aquarius[0] && getDay >= aquarius[1] || getMonth[0] == aquarius[2] && getDay <= aquarius[3] ){
        result.innerHTML = `<p style="font-size: 20px; font-weight: bold; text-align: center;">Aquarius${'<br>'} Jan 20 - Feb 18</p>`; 
        more.innerHTML = `
        <p>The Water Bearer, Aquarius is an Air sign. Ruled by Uranus and Saturn, they are different, eccentric, and have a big sense of responsibility.
         Their color is silver and blue meaning their are trustworthy, reliable, gentle, and have strong morals and values. Their quality is Fixed, meaning they 
         don't particularly like change and prefer to stick to tradition. They are friendly and kind.

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">Personality Traits:</h5>
        Aquarians are independent people who like to take charge of their life. They are good friends, reliable people, humanitarians and hard-working individuals. 
        They are always looking for improvement, therefore, they tend to be excellent students and really good at their job. Aquarians are also unique in their own way 
        and are always there for their friends and family.

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">Negative Traits:</h5>
        They can be a bit temperamental and stubborn. They are shy and quiet sometimes and they are bad at compromising. They tend to get moody easily. 

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">In Love:</h5>
        Aquarians are romantics, always on the clouds daydreaming about romance. They yearn for deep conversations and are essentially attracted to intelligence. 
        They are good at communicating their feelings and are open about their emotions. They're very independent so they need to have a sense of freedom in the relationship. 
        
        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">In the Tarot:</h5>
        Aquarius is The Star card. This is a very positive card that symbolizes intuition, hope, dreams come true and new beginnings.
        </p>`;     
    }
   
} 
const forPisces =()=>{
    var getMonth = [month.value];
    var getDay = [day.value];
    if(getDay <= 29 && getMonth == pisces[0] && getDay >= pisces[1] || getMonth[0] == pisces[2] && getDay <= pisces[3] ){
        result.innerHTML = `<p style="font-size: 20px; font-weight: bold; text-align: center;">Pisces${'<br>'} Feb 19 - Mar 20</p>`; 
        more.innerHTML = `
        <p>The Fishes, Pisces is a Water sign. Ruled by Neptune and Jupiter, they are highly intuitive and have a big imagination.
         Their color is turquoise which radiates calmness, friendliness, and cheerfulness. Their quality is Mutable which means that they get bored easily and 
         and need constant change and new adventures to help them keep their imagination alive. They are highly sensitive and intelligent.

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">Personality Traits:</h5>
        They are highly sensitive, emotional, compassionate, very artistic and spiritual. They love spending time alone listening to music and doing arts stuff. 
        They tend to analyze every little detail and work until they reach perfection. 

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">Negative Traits:</h5>
        Pisces can be cruel sometimes, they tend to be sarcastic, and hate being criticized. They really think they know it all and the opinions of others sometimes 
        don't matter to them. They are shy and quiet and they keep to themself. They are overly sensitive and will get angry or sad very easily.

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">In Love:</h5>
        Pisces is a romantic, they show their love by cooking for their partner or with lots of gifts. They are generous and very thoughtful of their partner. They 
        need someone to connect with emotionally and spiritually. 

        ${'<br>'}${'<br>'}<h5 style="font-weight: bold; font-style: italic; text-align: center;">In the Tarot:</h5>
        Pisces is The Moon card. This card is about confusion and illusion. And it's also about following your intuition and your instincts. 
        It encourages Pisces to follow the flow instead of going against it.
        </p>`;  
    }
} 



/* 
Twelve chinese signs
Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Sheep, Monkey, Rooster, Dog, Pig
*/


