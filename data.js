const texts = {
	"a2": {
		"next": "b4", 
		"text": "Don’t be silly! Here at Doshi Nyu-Kai Cori Mi (DNKCM) School for Young Women, we celebrate the bodacious bodies of women. Only sexy women, though. Obesity gets you expelled. You are making history as the first boy to be enrolled in our school! Congrats! Let me show you around.",
		"speaker": "ellie_flirty",
		"options": []
	},
	"a3" : {
		"next": "b4", 
		"text": "Nice to meet you too. You are making history as the first boy ever to be enrolled in our school, Doshi Nyu-Kai Cori Mi (DNKCM) School for Young Women! It’s a huge honor!  Let me introduce you to some of the other sexys that live on this floor.",
		"speaker": "ellie_flirty",
		"options": []
	},
	"b4" : {
		"next": "b5", 
		"text": "Ellie! Ellie! Someone stole all my clothes! I was in the shower and now they are gone.",
		"speaker": "polly",
		"options": []
	},
	"b5" : {
		"next": "b6", 
		"text": "This is Polly. She lives in the room across from you. Anyways, let’s walk this way...",
		"speaker": "ellie",
		"options": []
	},
	"b6" : {
		"next": "", 
		"text": "Wait! Aren't you going to help me?",
		"speaker": "polly_angry",
		"options": [{"text": "<i>Help Polly</i>" , "next": "b7"}, {"text": "<i>Continue following Ellie</i>", "next": "b8"}]
	},
	"b7" : {
		"next": "", 
		"text": "Thanks for your help! I’m a super big livestreamer by the name of Pug-Go-Baes. I’d be more than happy to give you a shoutout on social media. ",
		"speaker": "polly",
		"options": [{"text": "How did you come up with such a unique gamer tag?" , "next": "b9"}, {"text": "Thanks, but I’m not that big into social media.", "next": "b10"}]
	},
	"b9": {
		"next": "b11", 
		"text": "Pug-go-baes? Originally, it was Pon-Pon-Shit, but that account got banned when I accidentally flashed all 500 of my viewers. ",
		"speaker": "polly",
		"options": []
	},
	"b11": {
		"next": "b12", 
		"text": "You know what? I think I know the bitch who stole my clothes. It was probably that girl, Savannah or Tundra or whatever her name is. We were going at it all night.",
		"speaker": "polly_angry",
		"options": []
	},
	"b12": {
		"next": "", 
		"text": "Hey step-brother! Guess what, I also enrolled in this school. Because what? I’m a genius. How do you feel that your younger sissy is going to be in the same class as you?",
		"speaker": "lulu",
		"options": [{"text": "What! Lulu, does daddy and father know? You’re too young! You’re going to ruin DNKCM for me!" , "next": "c13"},{"text": "Shut the fuck up Lulu and get in my room." , "next": "c13"}]
	},
	"b10": {
		"next": "b12", 
		"text": "What the fuck? Are you some kind of loser or something? Get lost, bitch!",
		"speaker": "polly_angry",
		"options": []
	},
	"b8": {
		"next": "b12", 
		"text": "Are you still following me? Come on! This way.",
		"speaker": "ellie",
		"options": []
	},
	"c13": {
		"next": "c14", 
		"text": "The very next day at the school yard...",
		"speaker": "nully",
		"options": []
	},
	"c14": {
		"next": "", 
		"text": "Excuse me, bitch. My name is Clarissa. Do you have an extra tampon? It's almost first period.",
		"speaker": "clarissa",
		"options": [{"text": "No, why would you ask a young strapping alpha male like me that?" , "next": "c15"},{"text": "Get away from me! " , "next": "c15"}, {"text": "No baby girl, but I have a straw though. Maybe, I can suck that thing dry." , "next": "c15"}]
	},
	"c15": {
		"next": "c16", 
		"text": "What! You are an asshole! I am telling everyone that you are a loser.",
		"speaker": "clarissa_shocked",
		"options":[]
	},
	"c16": {
		"next": "", 
		"text": "Hey, hey, hey! What’s going on here! You must be the new kid. I am the new class president, Kaci. All problems shall go through me. All penises shall go through me. And all bitches shall go through me!",
		"speaker": "kaci",
		"options":[{"text": "Nothing, why don’t you get your Kaci Dink and your Kaci Ink and get the fuck out of here." , "next": "c17"},{"text": "This bitch right here fault. <i> Points to Clarissa </i>" , "next": "c17"}]
	},
	"c17": {
		"next": "", 
		"text": "Bitch, you don’t know me! I’m from The fucking Bay. Not San Francisco Bay. I'm talking about Guantanamo Bay. As in the detention camp. Do you even know what that is, beeyotch? Don't mess with me, chiquita.",
		"speaker": "clarissa_shocked",
		"options":[{"text": "I love it when bitches be thinking they hard." , "next": "c18"},{"text": "Please help me Kaci. Let’s jump this hoe." , "next": "c18"}]
	},
	"c18": {
		"next": "c19", 
		"text": " Aye, ain’t nobody fighting nobody in this bitch. Not when I’m around.",
		"speaker": "kaci_angry",
		"options":[]
	},
	"c19": {
		"next": "", 
		"text": "Hey ladies and gentle-MAN, what's going on?",
		"speaker": "ellie_school",
		"options":[{"text": "This bitch right here trying to try me!" , "next": "c20"},{"text": "This hoe got me fucked up." , "next": "c20"}]
	},
	"c20": {
		"next": "c21", 
		"text": "Oh, ok. Aight, let's just skip class and head to the beach beach, let's get away, okay? We're not going to miss anything on the first day anyways.",
		"speaker": "ellie_joy",
		"options":[]
	},
	"c21": {
		"next": "c22", 
		"text": "No, Ellie! I'll tell Principal Juttings on you. Hmm, skipping class... is that an hour of detention? Or is it corporal punishment instead? ",
		"speaker": "kaci",
		"options":[]
	},
	"c22": {
		"next": "c23", 
		"text": "Kaci, why don't you just kiss me, bruh? In fact, let's round robin kiss each other. Oh! How about all at the same time, a 4-way!",
		"speaker": "ellie_school",
		"options":[]
	},
	"c23": {
		"next": "", 
		"text": "I'm not kissing no bitch. I ain't eating no puss puss. I'm strictly dick-ly.",
		"speaker": "clarissa",
		"options":[{"text": "Damn bitch, I can make you go lesbian at the beach." , "next": "c24"}, {"text": "Just ignore these fools, Ellie. Let's go to the beach." , "next": "c24"}]
	},
	"c24": {
		"next": "c25", 
		"text": "That sounds boom boom-tastic! Breasts in bikinis bouncing around like beach volleyballs is how I like it. ",
		"speaker": "ellie_joy",
		"options":[]
	},
	"c25": {
		"next": "", 
		"text": "I'm going to tell! I'm going to tell on you two big time!",
		"speaker": "kaci_angry",
		"options":[{"text": "<i> Slaps Kaci in the breasts. </i>" , "next": "c26"}, {"text": "Damn bitch, get off my dick. This ain't your business." , "next": "c26"}]
	},
	"c26": {
		"next": "c27", 
		"text": "You know what they say... snitches get bitches! Off to the beach! Fuck you Kaci!",
		"speaker": "ellie_joy",
		"options":[]
	},
	"c27": {
		"next": "", 
		"text": "What did you say bitch? I'll kick your ass, you dirty hoe!",
		"speaker": "kaci_angry",
		"options":[{"text": "Whatever bitch! I'll pull your pussy lips until they rip." , "next": "d28"}, {"text": "We are sorry, Kaci." , "next": "d28"}]
	},
	"d28" : {
		"next": "d29", 
		"text": "You and Ellie skipped the first day of classes and went to the beach...",
		"speaker": "nully",
		"options":[]
	},
	"d29" : {
		"next": "", 
		"text": "Isn’t the weather so ghetto-tastic? It makes us feel like... like... It's hard to describe. Like we just survived a drive-by.",
		"speaker": "ellie_school",
		"options":[{"text": "Why are you talking like that? You some anime bitch. You ain’t ‘bout that life, hoe." , "next": "d30"}, {"text": "<i>Reach over and attempt to undress Ellie out of her school girl uniform.</i>" , "next": "d30"}]
	},
	"d30" : {
		"next": "", 
		"text": "That’s not how you treat a fine bitch like me on a first date!",
		"speaker": "ellie_angry",
		"options":[{"text": "Date? Who said this was a date?" , "next": "d31"}, {"text": "Listen, we go to a school full of anime bitches. You ain't nothing. I can get mad puss." , "next": "d31"}, {"text": "Take off your clothes now or I'll bitch-slap you with my cock!" , "next": "d31"}]
	},
	"d31" : {
		"next": "", 
		"text": "You can't talk to me like that! I am your Resident Advisor!",
		"speaker": "ellie_angry",
		"options":[{"text": "<i> Back hand Ellie across the face. </i>" , "next": "a32"}, {"text": "<i>Kick Ellie in the vagina.</i>" , "next": "a32"}]
	},
	"a32" : {
		"next": "a33", 
		"text": "You run back to your bedroom in the dormitory.",
		"speaker": "nully",
		"options":[]
	},
	"a33" : {
		"next": "", 
		"text": "Help, step-bro! It’s only our first day yet I feel so overwhelmed. It’s like I’m stuck in some toaster oven or something.",
		"speaker": "lulu",
		"options":[{"text": "Bitch, what you be saying?" , "next": "a34"}, {"text": "Oh silly, Lulu. Don't you mean 'stuck in a washing machine'?" , "next": "a34"}]
	},
	"a34" : {
		"next": "", 
		"text": "I'm so glad I have you with me to go through this experience. It's so intimidating, you know?",
		"speaker": "lulu",
		"options":[{"text": "<i> Lift up Lulu's school girl skirt from behind. </i>" , "next": "a35"}, {"text": "<i> Unzip pants and steal kiss from Lulu. </i>" , "next": "a35"}]
	},
	"a35" : {
		"next": "", 
		"text": "What are you doing, step-bro? This is wrong! We swore that we'd never do this again.",
		"speaker": "lulu",
		"options":[{"text": "Naw bruh, a bad bitch like you need to be plowed." , "next": "a36"}, {"text": "No no! with abortions so accessible here in Clippyland, it's no problem." , "next": "a36"}]
	},
	"a36" : {
		"next": "", 
		"text": "Stop! Stop! Heehee~ Oh, not there. Oh stop it, heehee, big bro!",
		"speaker": "lulu",
		"options":[{"text": "This is good practice when I bang few of the other girls later. " , "next": "a37"}, {"text": "Oh yeah? Do you like it when step-bro does this? " , "next": "a37"}]
	},
	"a37" : {
		"next": "", 
		"text": "What is going on in here?! What the fuck?",
		"speaker": "clarissa_shocked",
		"options":[{"text": "Clarissa! What are you doing here? Shouldn’t you be in class?" , "next": "a38"}, {"text": "Hey, want to join us, Clarissa? I was just showing her where the clit is." , "next": "a38"}]
	},
	"a38" : {
		"next": "", 
		"text": "I was thinking a lot about what you said earlier. Something something, dirty bitch... I want to be your bitch. Can you show me where my clit is too?",
		"speaker": "clarissa",
		"options":[{"text": "Clarissa, you seriously don't know where it is? What a fucking joke!" , "next": "a39"}, {"text": "Sure, but first, I want to see you two scissor." , "next": "a39"}]
	},
	"a39" : {
		"next": "", 
		"text": "Excuse me? I'm a classy bitch. You can't talk to me like that!",
		"speaker": "clarissa_shocked",
		"options":[{"text": "Shut your bitch mouth before I stick my cock in it!" , "next": "a40"}, {"text": "Take off your fucking clothes and jam clam shells with my step-sis, bitch." , "next": "a40"}]
	},
	"a40" : {
		"next": "a41", 
		"text": "Hey Clit-rissa, is it? Since you don't know where yours is, I'll show you mine.",
		"speaker": "lulu",
		"options":[]
	},
	"a41" : {
		"next": "", 
		"text": "My clit is 5 inches long. I probably have some world record or something! Big brother over here use to suck it like it's laffy-taffy. Then I'd butt fuck him with it.",
		"speaker": "lulu",
		"options":[{"text": "Oh yeah? You give it to me all night long?" , "next": "a42"}, {"text": "Shut your bitch hole up, Lulu!" , "next": "a42"}]
	},
	"a42" : {
		"next": "a43", 
		"text": "This is so gross. I need to tell someone about this. I need to call the police!",
		"speaker": "clarissa",
		"options":[]
	},
	"a43" : {
		"next": "", 
		"text": "Hey, have any of you seen my clothes?",
		"speaker": "polly",
		"options":[{"text": "Oh hey, Polly. We just fucking." , "next": "a44"}, {"text": "Get lost, social media bitch!" , "next": "a44"}]
	},
	"a44" : {
		"next": "", 
		"text": "Wait, what the fuck? Isn't that your sister? OH FUCK!",
		"speaker": "polly_angry",
		"options":[{"text": "No! She's not my sis." , "next": "a45"}, {"text": "Please don't tell anyone, Polly!" , "next": "a45"}]
	},
	"a45" : {
		"next": "f46", 
		"text": "Polly, I'm not part of this. I'm not a freak. I'm just on my way outta here.",
		"speaker": "clarissa_shocked",
		"options":[]
	},
	"f46" : {
		"next": "", 
		"text": "That's him right there! **You've been expelled from DNKCM School for Young Women.**",
		"speaker": "ellie_angry",
		"options":[]
	},
}; 