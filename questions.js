const questions = {
    A: [
        {
            q: "True or False. Divers expect a PADI Divemaster to show professionalism by having role-model dive skills, rescue skills and knowledge about dive management.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Boom! 💥 Divemasters are the ultimate role models. Professionalism is the name of the game!"
        },
        {
            q: "Certified divers can dive unsupervised within the limits of their training. Why would they choose to dive with a PADI Divemaster?",
            options: [
                "A divemaster can handle dive logistics, and make diving more convenient and fun.",
                "Boat dives are only possible with a divemaster.",
                "Divemasters take care of every detail of individual divers' plans.",
                "All of the above."
            ],
            answer: 0,
            feedback: "We make the magic happen! 🪄 Divemasters take the hassle out of diving so the guests can just focus on the fun."
        },
        {
            q: "Acting as a good role model:",
            options: [
                "provides divers with a behavior pattern of responsible dive practices and habits to follow.",
                "helps student divers learn by watching.",
                "gives you credibility and encourages divers to consider your suggestions.",
                "All of the above."
            ],
            answer: 3,
            feedback: "Spot on! Monkey see, monkey do 🐒. Good habits are contagious!"
        },
        {
            q: "The ________ PADI Membership Commitment found in your PADI Instructor Manual, explains the professional and ethical behavior expected of you as a PADI Member.",
            options: ["License Agreement", "Liability Release", "Code of Practice", "Active Status"],
            answer: 2,
            feedback: "It's the Code! 📜 This is your professional diving bible."
        },
        {
            q: "True or False. As a PADI Divemaster, you earn a credential that allows you to potentially work as a dive professional by assisting with PADI diver courses or conducting some PADI programs independently.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Time to get to work! 💼 You are officially a dive pro with real responsibilities."
        },
        {
            q: "True or False. Experts more easily solve problems than nonexperts because they have a large knowledge and experience base to draw on.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Brain power! 🧠 More experience means you can see problems coming from a mile away."
        },
        {
            q: "Your role in dive planning for a group of certified divers is to:",
            options: [
                "relieve everyone in the group of all responsibility for dive planning.",
                "assess the equipment needs for each individual in the group.",
                "provide broad planning information that divers use to plan their individual dives.",
                "All of the above."
            ],
            answer: 2,
            feedback: "You are the guide, not their babysitter! 🗺️ Give them the info, but they plan their own dives."
        },
        {
            q: "General factors to consider when evaluating dive conditions include:",
            options: [
                "weather-wind, rain and temperature.",
                "tides and currents.",
                "visibility.",
                "All of the above."
            ],
            answer: 3,
            feedback: "Look at the whole picture! 🌊 Mother nature throws a lot of variables at you."
        },
        {
            q: "One effective way to plan a dive is to:",
            options: [
                "ask an instructor to provide dive details.",
                "think through the dive from start to finish.",
                "always follow the same dive plan for every dive.",
                "None of the above."
            ],
            answer: 1,
            feedback: "Mental rehearsal! 🧘‍♂️ Visualize the dive before you even get your fins wet."
        },
        {
            q: "A diver who takes a really long time to prepare personal equipment for a dive might be:",
            options: [
                "excited about the dive.",
                "busy taking care of equipment for a buddy or other divers.",
                "stressed or have concerns about the dive.",
                "tired or too hot."
            ],
            answer: 2,
            feedback: "Keep an eye out! 👀 Fumbling gear is a classic sign of pre-dive stress or anxiety."
        },
        {
            q: "True or False. If a diver has concerns about a dive, make it clear that if the diver doesn't feel up to the dive for any reason, it's okay not to dive.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Safety first! 🛟 No diver should ever feel forced to go. A 'no dive' call is always a good call."
        },
        {
            q: "What is an advantage of inwater supervision?",
            options: [
                "You are closer to divers to respond to problems.",
                "It's an effective way to supervise multiple groups at once.",
                "Buddy teams have more individual options in where they dive.",
                "You are closer to emergency related equipment."
            ],
            answer: 0,
            feedback: "Front row seats! 🍿 Being in the water means you can react instantly to any fishy business."
        },
        {
            q: "What is a disadvantage of out of water supervision?",
            options: [
                "You can't remind divers to follow appropriate dive procedures.",
                "You are closer to emergency-related equipment.",
                "Buddy teams have fewer individual options.",
                "You can only watch one group."
            ],
            answer: 0,
            feedback: "Out of sight, (partially) out of control! 🔭 It's harder to correct mistakes from the boat."
        },
        {
            q: "The primary purpose of diver accounting procedures is to:",
            options: [
                "obtain information needed to plan repetitive dives.",
                "track divers in and out of the water - making sure all divers have returned after a dive.",
                "make certain that all divers have a buddy.",
                "check whether each diver has the proper equipment for a dive."
            ],
            answer: 1,
            feedback: "1, 2, 3... 4? 🧐 Always count your chickens (or divers) before leaving the site!"
        },
        {
            q: "What individual differences in divers do you need to recognize and accommodate?",
            options: [
                "Skill level and physical abilities",
                "Learning challenges and responsible behavior",
                "Equipment style and color.",
                "Both a and b."
            ],
            answer: 3,
            feedback: "Everyone is a unique snowflake! ❄️ (Or a unique nudibranch). Tailor your approach to the diver."
        },
        {
            q: "You need to apply your judgment to which elements of dive supervision?",
            options: [
                "Evaluating whether dive conditions are acceptable.",
                "Choosing which dive techniques to recommend.",
                "Picking a vantage point for supervising dive activities.",
                "All of the above."
            ],
            answer: 3,
            feedback: "You're the CEO of the dive! 💼 Your judgment keeps the operation running smooth."
        },
        {
            q: "In the event of a dive accident when supervising certified divers, usually your expected role is to:",
            options: [
                "assist the boat captain in managing the accident.",
                "manage the accident if you are the most qualified person present.",
                "delegate management to a rescue diver so you can focus on the safety of uninvolved divers.",
                "None of the above."
            ],
            answer: 1,
            feedback: "Captain of Crisis! ⚓ If you're the pro, you're the lead until someone more senior takes over."
        },
        {
            q: "Choosing a vantage point may be a compromise between the best place to ________ and the best place to ________.",
            options: [
                "enter the water / assess the environment.",
                "lend assistance / enter the water.",
                "watch divers / enter the water.",
                "watch divers / lend assistance."
            ],
            answer: 3,
            feedback: "Balance is key! ⚖️ You need to see them, but also be ready to jump in and help."
        },
        {
            q: "True or False. You only need to include an environmental orientation in your dive briefing if there are certified divers who have little or no experience in the local area.",
            options: ["True", "False"],
            answer: 1,
            feedback: "False! 🌊 Even locals need to know if the current has shifted or if the vis is low today."
        },
        {
            q: "Your primary role in an instructional setting is to:",
            options: [
                "focus on teaching.",
                "prepare for emergencies.",
                "gain experience with teaching skills.",
                "assist the instructor including handling logistics and helping with student diver supervision."
            ],
            answer: 3,
            feedback: "Sidekick power! 🦸‍♂️ You handle the chaos so the instructor can teach the skills."
        },
        {
            q: "In your relationship with student divers, your primary role is to be:",
            options: [
                "a link between them and the instructor.",
                "a counselor to the instructor.",
                "a first aid expert.",
                "an authority."
            ],
            answer: 0,
            feedback: "The Bridge! 🌉 You're the friendly face students talk to when they're too nervous to ask the instructor."
        },
        {
            q: "When assisting an instructor with student divers in the water, a good position for you is one that allows:",
            options: [
                "you to see the entire group and the instructor.",
                "you to respond quickly to problems.",
                "student divers to alert you easily.",
                "All of the above."
            ],
            answer: 3,
            feedback: "360-degree vision! 🦉 If you can't see them, you can't save them."
        },
        {
            q: "True or False. Positioning student divers in a line or semicircle with the instructor in front and you behind them at the center has the advantage of allowing the entire group to see you.",
            options: ["True", "False"],
            answer: 0,
            feedback: "The 'V' Formation! 🛡️ You're the sweeper, keeping the flock together."
        },
        {
            q: "When is it appropriate to make direct contact with a student diver?",
            options: [
                "To provide reassurance and help a student diver calm down.",
                "To prevent a buoyancy problem or an inappropriate response, such as bolting to the surface.",
                "To control a student diver's rate of an ascent or descent.",
                "All of the above."
            ],
            answer: 3,
            feedback: "Hands on! 🤝 Sometimes a firm grip or a gentle touch is the best safety tool you have."
        },
        {
            q: "You are assisting an instructor in open water with a class of four Open Water Diver students. The instructor conducts an ascent skill with one student. Your likely function is to:",
            options: [
                "make the ascent with the instructor for added control.",
                "stay with and supervise the remaining student divers.",
                "wait one minute then ascend with the remaining student divers.",
                "take the remaining student divers on a short tour."
            ],
            answer: 1,
            feedback: "The Babysitter! 🍼 Keep the others safe and bubbly while the instructor is busy."
        },
        {
            q: "While practicing the regulator recovery skill, a student diver is having difficulty with balance due to mild surge. To provide assistance, you could steady the diver by holding:",
            options: [
                "on to the diver's right arm.",
                "on to the lower left corner of the diver's BCD.",
                "the diver's fins on the bottom.",
                "the right shoulder of the diver's BCD."
            ],
            answer: 1,
            feedback: "Steady as she goes! 🚢 A light hand on the BCD keeps them level without being intrusive."
        },
        {
            q: "True or False. One reason you may demonstrate a skill is to assist a student diver with a problem learning the skill.",
            options: ["True", "False"],
            answer: 0,
            feedback: "The Model! 🎭 Show them how it's done—smoothly, slowly, and perfectly."
        },
        {
            q: "What characteristics does a demonstration quality skill performance have?",
            options: [
                "The skill is performed slowly with the critical attributes emphasized in the proper sequence.",
                "The skill is performed quickly, yet smoothly.",
                "The skill is always repeated at least four times and shown from more than one angle.",
                "Potential problems should be included as part of the demonstration."
            ],
            answer: 0,
            feedback: "Slow Motion! 📽️ If they can see every finger movement, they can mirror it."
        },
        {
            q: "When helping a student diver who is having difficulty learning a skill:",
            options: [
                "progress slowly so the student diver enjoys success while learning the skill.",
                "avoid repeating demonstrations, which waste time and confuse student divers.",
                "keep in mind that sequence errors are usually not important.",
                "All of the above."
            ],
            answer: 0,
            feedback: "Baby steps! 👣 Small wins lead to big confidence underwater."
        },
        {
            q: "True or False. When helping a student diver overcome difficulty learning a skill, once the student diver performs the skill adequately for you, the student diver may resume training with no further evaluation.",
            options: ["True", "False"],
            answer: 1,
            feedback: "Not so fast! 🛑 The instructor is the final judge. You assist, but they certify."
        },
        {
            q: "True or False. When a student diver who has a physical impairment is having difficulty learning a skill, you should focus on what the diver can do and look for a way to accomplish the skill using the diver's abilities.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Adaptive Thinking! 🧠 It's about the goal, not just the 'standard' way to get there."
        },
        {
            q: "When supervising and teaching children, you are placed under a higher duty of care and should be familiar with the requirements outlined in the ________ found in your PADI Instructor Manual.",
            options: ["PADI Seal Team standards", "Bubblemaker program", "Youth Leader's Commitment", "Key Standards Summary"],
            answer: 2,
            feedback: "Kids are precious cargo! 🧒 The Youth Leader's Commitment is your guiding star."
        },
        {
            q: "True or False. Striving to keep divers safe by preventing problems and avoiding situations where divers could be hurt is the primary and most important goal of risk management.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Pre-hab is better than Rehab! 🛡️ Stopping trouble before it starts is the DM way."
        },
        {
            q: "True or False. You need to adhere to the PADI Standards listed in your PADI Instructor Manual because they exist for diver safety, provide educational validity and a basis for legal protection when conducting PADI programs.",
            options: ["True", "False"],
            answer: 0,
            feedback: "The Rulebook! 📚 Standards are your safety net and your shield."
        },
        {
            q: "To be a good role model and better manage risks, follow which of these recommendations?",
            options: [
                "Stay physically fit by exercising regularly, getting adequate rest and eating properly.",
                "Plan your dives carefully, stay well within the no decompression limits and make a safety stop at the end of all dives.",
                "Continue your dive education and professional training.",
                "All of the above."
            ],
            answer: 3,
            feedback: "The Triple Threat! 🏋️‍♂️ Fitness, Planning, and Education make a top-tier DM."
        },
        {
            q: "What is the primary reason you have divers complete administrative paperwork when enrolling in a PADI course or program?",
            options: [
                "To make sure you have their addresses and phone numbers for your records.",
                "To inform divers of the risks of diving, help assure they are medically fit to participate and to remind them of the importance of following safe diving practices.",
                "To give divers the option to not accept responsibility for participating in a dive program.",
                "All of the above."
            ],
            answer: 1,
            feedback: "Informed Consent! 📝 Knowing the risks makes for safer choices."
        },
        {
            q: "True or False. You don't need to carry professional liability insurance if you are only assisting an instructor, because the instructor's insurance covers you.",
            options: ["True", "False"],
            answer: 1,
            feedback: "Watch your back! 🕵️‍♂️ Always have your own insurance. Assisting doesn't mean you're immune."
        },
        {
            q: "True or False. Always start by looking in the General Standards and Procedures Guide of your PADI Instructor Manual for overall standards when preparing to conduct a PADI program, then refer to the individual guide for requirements specific to the program.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Zoom In! 🔍 Standards first, specifics second. It's the logical flow."
        },
        {
            q: "Certified divers who want an orientation and underwater guided tour of a new dive site or unfamiliar aquatic conditions, should:",
            options: [
                "dive off a local charter boat.",
                "participate in a PADI Discover Local Diving program.",
                "visit a dive center to get a dive site map.",
                "review the appropriate PADI Specialty Diver video before attempting a dive."
            ],
            answer: 1,
            feedback: "Discover Local! 📍 A pro guide is the best way to see the best spots safely."
        },
        {
            q: "True or False. You decide how many divers you take in the water for a Discover Local Diving experience based on factors including diver comfort, experience, age, environmental conditions and logistics.",
            options: ["True", "False"],
            answer: 0,
            feedback: "It's your call! 📞 Ratio management is a critical DM skill."
        },
        {
            q: "Which program has an open water dive ratio of 10 participants to one divemaster (10:1)?",
            options: ["Discover Scuba Diving", "Scuba Review", "PADI Skin Diver course", "Discover Local Diving"],
            answer: 2,
            feedback: "Skin Divers! 🤿 They're at the surface, so you can manage more of them at once."
        },
        {
            q: "Who may want to take a PADI Skin Diver course?",
            options: [
                "A child who is too young for a scuba course, but wants to gain comfort in the water and also earn a PADI certification.",
                "An individual who wants to learn basic skin diving skills to explore the underwater world.",
                "A certified diver who wants to improve skin diving skills while increasing stamina and physical fitness in the water.",
                "All of the above."
            ],
            answer: 3,
            feedback: "Everyone! 🐬 Snorkeling is the gateway drug to diving."
        },
        {
            q: "What is the minimum age to participate in a Scuba Review program?",
            options: ["10", "15", "18", "There is no minimum age."],
            answer: 3,
            feedback: "If you can dive, you can review! 🎈 There's no age limit on refreshing your skills."
        },
        {
            q: "True or False. If a diver can't read, or the Scuba Tune-up Guidebook is not available in a language the diver understands, the diver may not participate in Scuba Review.",
            options: ["True", "False"],
            answer: 1,
            feedback: "Adapt and Overcome! 🗣️ You can conduct reviews orally or with visual aids."
        },
        {
            q: "The first open water scuba dive in the Discover Scuba Diving program:",
            options: [
                "may be conducted by a certified assistant at a ratio of 2:1.",
                "must be conducted by a PADI Instructor.",
                "may have a ratio of 12:1 if three certified assistants participate.",
                "None of the above."
            ],
            answer: 1,
            feedback: "Instructors Only! 👨‍🏫 DSD Dive 1 is a heavy lift that needs the top pro."
        },
        {
            q: "True or False. You may take Discover Scuba Diving participants on an additional open water dive at a ratio of 4:1.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Dive 2 and Beyond! 🐠 Once the skills are done, DMs can lead the fun at 4:1."
        },
        {
            q: "When supervising Discover Scuba Diving participants on an open water dive, you should:",
            options: [
                "take photos or video of them to make the experience more enjoyable.",
                "position yourself so that you can make immediate physical contact with, adjust buoyancy for, and render assistance to, participants.",
                "let participants lead while you follow and observe them.",
                "descend or ascend with only one participant at a time while the others wait."
            ],
            answer: 1,
            feedback: "Arm's Length! 🦑 You are their underwater shadow, ready to pounce on any problem."
        },
        {
            q: "True or False. After certification as a PADI Divemaster, you qualify as a DSD Leader by completing an internship that includes conducting four separate DSD programs in confined water under the direct supervision of a PADI Instructor.",
            options: ["True", "False"],
            answer: 0,
            feedback: "DSD Leader Status! 🎖️ This is a huge milestone for any Divemaster."
        },
        {
            q: "True or False. When towing a delayed surface marker buoy (DSMB), you clip the line to your gear to keep your hands free.",
            options: ["True", "False"],
            answer: 1,
            feedback: "Never Clip! 🪓 If that buoy gets caught on a boat, you don't want to go with it."
        },
        {
            q: "What do you need to consider when setting a dive float?",
            options: [
                "Finding insensitive bottom for anchoring along with an area for descending divers to land without harming any aquatic life.",
                "How current, waves and the tide may affect the float and line.",
                "Plan for retrieving the float at the end of the dive day.",
                "All of the above."
            ],
            answer: 3,
            feedback: "Float Logic! 🎈 Location, conditions, and retrieval are all part of the plan."
        },
        {
            q: "If you need to conduct an underwater search, you should consider which of the following to determine what type of search pattern to use?",
            options: [
                "Water conditions and visibility.",
                "Bottom topography and size of the search area.",
                "Size of the object and equipment available.",
                "All of the above."
            ],
            answer: 3,
            feedback: "Search & Recovery! 🔎 Every variable dictates the pattern—don't just swim in circles!"
        },
        {
            q: "What do you need to consider when deciding how best to supervise a deep dive?",
            options: [
                "Diver experience, comfort, skill and attitude.",
                "Where the boat captain will be during the dive.",
                "The type of help divers may need with cameras or lights at depth.",
                "Distance to the nearest recompression chamber."
            ],
            answer: 0,
            feedback: "Diver First! 👤 Deep dives test a diver's calm more than their equipment."
        },
        {
            q: "True or False. When supervising a boat dive, you should conduct a final visual roll call and make sure that you actually see each diver before the boat leaves the dive site.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Eyes on! 👁️ Don't just tick a box—see a face!"
        },
        {
            q: "True or False. For a night dive, each diver should have at least one dive light, with a backup light recommended.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Light it up! 🔦 Dark is fun until your only light dies."
        },
        {
            q: "If supervising a drift dive, it's a good idea to have each diver carry:",
            options: [
                "a surface signal device.",
                "a dive light.",
                "an adjustable depth gauge.",
                "a slate and pencil."
            ],
            answer: 0,
            feedback: "Lost at Sea? 🚩 An SMB or signal mirror is your lifeline in a current."
        },
        {
            q: "True or False. When supervising technical divers, do not touch any equipment unless asked by the diver.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Respect the Rig! 🏗️ Tech divers have complex setups—don't knock a valve!"
        },
        {
            q: "Divers expect that, as a dive professional, you're knowledgeable about diving, and they will look to you for advice regarding:",
            options: [
                "dive education and equipment.",
                "local diving opportunities and dive travel.",
                "caring for the local dive environment as well as the aquatic realm in general.",
                "All of the above."
            ],
            answer: 3,
            feedback: "The Oracle! 🔮 You're the one they trust for all things underwater."
        },
        {
            q: "Qualification to service or repair ________ can make you more valuable as an employee at a dive resort.",
            options: ["computers", "radar", "swimming pools", "boat engines"],
            answer: 3,
            feedback: "Mr. Fix-it! 🛠️ A DM who can fix an outboard engine is worth their weight in gold."
        },
        {
            q: "True or False. A customer-centric approach leads to success because when customers know you have their best interests in mind, they choose to do business with you over the long term.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Customer is King! 👑 Build trust, build a business."
        },
        {
            q: "To remain a PADI Divemaster in Active status, you must renew your membership:",
            options: ["every two years.", "every year.", "every six months.", "Renewal is not required."],
            answer: 1,
            feedback: "Stay Active! ⚡ Yearly renewal keeps you in the pro loop."
        },
        {
            q: "True or False. Your understanding of the aquatic realm is important for assessing dive conditions and emergency planning, as well as explaining to divers how they can interact responsibly with the local environment.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Expert Guide! 🗺️ Knowledge of the world beneath makes you a better leader."
        },
        {
            q: "What is the ocean's major source of productivity and the base of the marine food chain?",
            options: ["Krill", "Seagrass", "Coral", "Phytoplankton"],
            answer: 3,
            feedback: "Tiny but Mighty! 🌱 Phytoplankton are the engine room of the planet."
        },
        {
            q: "True or False. Natural processes, such as earthquakes and storms, are much more of a severe threat to coral reefs and wetlands than human-induced threats, such as pollution.",
            options: ["True", "False"],
            answer: 1,
            feedback: "Human Impact! 🏭 Sadly, our footprints are much deeper and more lasting than nature's storms."
        },
        {
            q: "True or False. When an alien (invasive) species is introduced into an ecosystem, it may have no natural enemies, which allows it to quickly multiply and possibly overtake and kill off native species.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Invaders! 👽 Think Lionfish in the Caribbean—without predators, they rule the roost."
        },
        {
            q: "A ________ exists when relatively warm, low-density surface water is separated from cool, high-density deep water.",
            options: ["freshwater layer", "thermocline", "downwelling", "rip current"],
            answer: 1,
            feedback: "The Shiver Zone! 🧊 You know that sudden drop in temp? That's the thermocline."
        },
        {
            q: "If you stand on a beach and watch water generally moving down the coast, pushed by waves approaching the shore at an angle and assisted by the prevailing wind, you are looking at a ________ current.",
            options: ["rip", "tidal", "longshore", "upwelling"],
            answer: 2,
            feedback: "The Sideways Slide! 🏖️ Longshore currents are why you drift away from your towel."
        },
        {
            q: "A day after strong winds drive surface waters offshore, you notice that water conditions become clear and cool. This is likely due to:",
            options: ["downwelling.", "extreme tides.", "a longshore current.", "upwelling."],
            answer: 3,
            feedback: "Deep Refresh! 🌬️ Upwelling brings up cold, nutrient-rich water from the depths."
        },
        {
            q: "Gravitational interaction between the sun, moon and earth cause ________ while wind is the most common disturbing force that causes ________.",
            options: ["tides / waves", "surge / currents", "rip currents / ocean swells", "waves / tides"],
            answer: 0,
            feedback: "Cosmic Pull! 🌑 Gravity makes the tides, wind makes the rides (waves)."
        },
        {
            q: "True or False. As a wave moves toward shore, its energy is affected by the bottom causing the wave height to rise, eventually becoming unstable and spilling its energy as surf.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Wipeout! 🏄‍♂️ The seafloor friction is what turns a swell into a breaker."
        },
        {
            q: "Ways that you can encourage divers to protect the underwater world include:",
            options: [
                "be a role model for other divers, dive carefully and be aware of equipment placement when diving.",
                "respect underwater cultural heritage and maritime history.",
                "report environmental disturbances or destruction and get involved in local environmental activities and issues.",
                "All of the above."
            ],
            answer: 3,
            feedback: "Eco-Warrior! 🧜‍♂️ Every dive is an opportunity to be a guardian of the sea."
        },
        {
            q: "While outside, at a very cold temperature, you fill a balloon with air. What will happen when you take the balloon inside and place it near a heater?",
            options: [
                "The density in the balloon will remain unchanged.",
                "The volume of the balloon will decrease.",
                "The pressure in the balloon will increase.",
                "The volume of the balloon will increase."
            ],
            answer: 3,
            feedback: "Charles's Law! 🔥 Heat makes molecules dance further apart, growing the balloon."
        },
        {
            q: "Approximately how much denser is the air you breathe at a depth of 30 metres/99 feet as compared to the surface?",
            options: ["It is equal to the surface density.", "Two times as dense", "Three times as dense", "Four times as dense"],
            answer: 3,
            feedback: "Pressure Math! 🎈 At 30m, you're at 4 atm (1 surface + 3 water), so it's 4x as dense."
        },
        {
            q: "If a balloon is filled to 1 litre at 40 metres/132 feet and then released, assuming it does not explode, what will its volume be upon reaching the surface?",
            options: ["5 litres", "4 litres", "2 litres", "1 litre"],
            answer: 0,
            feedback: "The Big Expansion! 📈 40m = 5 atm. At surface (1 atm), it grows 5 fold."
        },
        {
            q: "If a diver breathes from a cylinder that contains .05% carbon monoxide at a pressure of three atmospheres, it will have the same physical effect as if the diver were breathing ________ % carbon monoxide at one atmosphere.",
            options: ["1.5", "0.15", ".02", "0.2"],
            answer: 1,
            feedback: "Dalton's Law! 🧪 0.05% at 3 atm = 0.15% at 1 atm. Depth makes toxins deadlier!"
        },
        {
            q: "Scuba divers who ascend to altitude soon after completing a dive increase their risk of decompression sickness because:",
            options: [
                "altitude sickness can contribute to the formation of nitrogen bubbles in the blood stream.",
                "the partial pressure of inhaled oxygen is greater than the partial pressure of nitrogen in the tissues.",
                "dive tables and computers are based on surfacing at sea level, thus exposure to lower pressure increases the tissue pressure gradient and may increase bubble formation.",
                "the surrounding pressure is greater, thus exposure to higher pressure may increase bubble formation."
            ],
            answer: 2,
            feedback: "Thin Air! 🏔️ Less pressure outside means bubbles want to pop out faster!"
        },
        {
            q: "If an object is neutrally buoyant in fresh water, what will happen to the object when it's placed in salt water?",
            options: ["The answer cannot be determined from the information given.", "It will sink.", "It will float.", "It will remain neutrally buoyant."],
            answer: 2,
            feedback: "The Salty Lift! 🧂 Salt water is denser, so it pushes up harder on the object."
        },
        {
            q: "The absolute pressure at 20 metres/66 feet of salt water is:",
            options: ["3 bar/ata", "2 bar/ata", "4 bar/ata", "1.5 bar/ata"],
            answer: 0,
            feedback: "Atmosphere Logic! 🌬️ 1 atm (surface) + 2 atm (20m water) = 3 atm absolute."
        },
        {
            q: "If an air mixture contains 80% nitrogen and 20% oxygen at sea level, what will the partial pressure of nitrogen be if its taken to 20 metres/66 feet in sea water?",
            options: ["1.6 bar/ata", "0.8 bar/ata", "2.4 bar/ata", "2 bar/ata"],
            answer: 2,
            feedback: "Dalton's Math! 🧮 20m = 3 atm. 3 atm * 0.8 N2 = 2.4 atm Nitrogen."
        },
        {
            q: "Sound travels approximately ________ times faster in water than in air, which is why divers have difficulty determining the ________ of sound underwater.",
            options: ["20 / direction", "four / direction", "two /volume", "four / volume"],
            answer: 1,
            feedback: "Speedy Waves! 🔊 It gets to both ears so fast your brain can't tell which side started it."
        },
        {
            q: "If a glass of water is placed in a recompression chamber and the pressure surrounding the water is increased:",
            options: [
                "the amount of gas dissolved in the water will remain unchanged.",
                "gas will come out of solution, most likely in the form of bubbles.",
                "the amount of gas dissolved in the water will increase.",
                "the volume of air in the glass will decrease."
            ],
            answer: 2,
            feedback: "Henry's Law! 🥤 Increased pressure forces more gas into the liquid. Fizz on!"
        },
        {
            q: "Water conducts heat away from the body more than ________ times faster than air.",
            options: ["4", "10", "20", "3200"],
            answer: 2,
            feedback: "Cold Snap! 🥶 Stay insulated—water steals your heat 20x faster than air."
        },
        {
            q: "What causes an object to appear larger and closer than actual when viewed underwater?",
            options: ["Refraction of light", "Absorption of colors", "Diffusion of light", "Reflection of light"],
            answer: 0,
            feedback: "The Magnifier! 🔍 Transitioning from water to the air in your mask bends the light."
        },
        {
            q: "If a diver complains of a headache and nausea, and the diver's lips are redder than normal after a dive, ________ is a likely cause.",
            options: ["carbon monoxide poisoning", "nitrogen narcosis", "decompression sickness", "oxygen toxicity"],
            answer: 0,
            feedback: "Cherry Red Alert! 🍒 CO poisoning replaces oxygen and mimics a healthy glow—dangerously."
        },
        {
            q: "Voluntary hyperventilation is a means of increasing breathhold time by decreasing the amount of ________ in the lungs.",
            options: ["oxygen", "nitrogen", "carbon dioxide", "dead air space"],
            answer: 2,
            feedback: "CO2 Trickery! 🌬️ Your body breathes because of CO2 buildup. Lower it, and you 'forget' to breathe until it's too late."
        },
        {
            q: "True or False. You can compensate for the increased dead-air space resulting from breathing through a snorkel or regulator by breathing quickly and shallowly.",
            options: ["True", "False"],
            answer: 1,
            feedback: "Deep and Slow! 🧘‍♀️ Shallow breaths just move the same stale air back and forth."
        },
        {
            q: "If a diver begins to feel light-headed because of a tight neck seal, the cause may be?",
            options: ["Carotid sinus reflex", "Blocked jugular venous return", "Shallow water blackout", "Either a or b."],
            answer: 3,
            feedback: "Neck Check! 👔 A tight seal can trick your brain's blood pressure sensors or block flow."
        },
        {
            q: "Arteries carry blood ________ the heart and veins carry blood ________ the heart.",
            options: ["toward / away from", "hemoglobin to / plasma through", "away from / toward", "red in color to / blue in color from"],
            answer: 2,
            feedback: "A is for Away! 💓 Arteries = Away. Veins = Visit (back) to the heart."
        },
        {
            q: "Blowing long and forcefully against a pinched nose while having difficulty equalizing your ears may result in a(n) ________.",
            options: ["sinus squeeze.", "eustachian tube rupture.", "round window rupture.", "oval window rupture."],
            answer: 2,
            feedback: "Gentle Please! 👂 Forceful Valsalva can blow a hole in your inner ear's round window."
        },
        {
            q: "An hour after surfacing from a deep dive, a diver complains of fatigue and numbness in one shoulder. This diver should seek medical attention because the diver may have:",
            options: ["carried equipment that was too heavy.", "decompression illness.", "contaminated air poisoning.", "overexertion."],
            answer: 1,
            feedback: "Post-Dive Pain! 🚑 Don't dismiss it as 'heavy gear'. If it's after a dive, treat for DCI."
        },
        {
            q: "Because certain factors may increase the risk of decompression sickness, divers should avoid:",
            options: ["diving soon after an illness or injury.", "strenuous exercise right after a dive.", "dehydration.", "All of the above."],
            answer: 3,
            feedback: "Risk Factors! 📉 Health, hydration, and effort all play a role in your nitrogen load."
        },
        {
            q: "Which part of the ear is most affected by a squeeze while descending?",
            options: ["Inner ear", "Middle ear", "Outer ear canal", "Oval window, ossicles and round window"],
            answer: 1,
            feedback: "Middle Ground! 🔉 That airspace behind the drum is what needs equalizing."
        },
        {
            q: "The symptoms of a lung-expansion injury tend to appear ________ while the symptoms of decompression sickness tend to appear ________.",
            options: [
                "immediately after the dive/more slowly",
                "slowly over an extended time/immediately upon surfacing",
                "within the first 24 hours/within minutes after the dive",
                "only after surfacing/usually at depth"
            ],
            answer: 0,
            feedback: "Fast vs Slow! ⏱️ Lung tears happen instantly. Nitrogen bubbles take time to grow."
        },
        {
            q: "What is the most serious lung overexpansion injury?",
            options: ["Mediastinal emphysema", "Air embolism", "Pneumothorax", "Carotid sinus reflex"],
            answer: 1,
            feedback: "AGE! 🛑 Air Gas Embolism is the most life-threatening as it blocks blood to the brain."
        },
        {
            q: "What is the most serious sign of Central Nervous System (CNS) toxicity?",
            options: ["Convulsion", "Difficulty breathing", "Vertigo", "Nausea"],
            answer: 0,
            feedback: "VENTID Mask! 🎭 Convulsions are the most dramatic and dangerous sign of O2 toxicity."
        },
        {
            q: "True or False. A near drowning patient may seem fully recovered, however, the patient should seek medical care, because in nearly all cases, water enters the patient's lungs.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Secondary Drowning! 🫁 Even if they feel fine now, fluid in the lungs can cause issues hours later."
        },
        {
            q: "A diver suffering from hypothermia may have which of these signs and symptoms?",
            options: ["Uncontrollable shivering", "Slowed mental processes", "Appear drowsy, uncoordinated and forgetful", "All of the above."],
            answer: 3,
            feedback: "Deep Freeze! 🌡️ Shivering is just the first sign of your body losing the battle."
        },
        {
            q: "The signs and symptoms of gas narcosis include:",
            options: ["a mild sense of euphoria and false sense of security.", "displays of foolish behavior.", "slowed thinking.", "All of the above."],
            answer: 3,
            feedback: "Martini Effect! 🍸 Narcosis makes you feel invincible, which is its biggest danger."
        },
        {
            q: "How would you most efficiently provide oxygen to a breathing, injured diver?",
            options: [
                "With a nonresuscitator demand valve system.",
                "Use a continuous flow with nonrebreather mask system.",
                "With a positive pressure resuscitator system.",
                "Through a pocket mask with free flow oxygen system."
            ],
            answer: 0,
            feedback: "100% Pure! 💨 Demand valves ensure they only get O2, with zero dilution."
        },
        {
            q: "Which type of cylinder valve allows the regulator to screw into the valve?",
            options: ["DIN", "J-valve", "K-valve", "Yoke screw"],
            answer: 0,
            feedback: "Screw It! 🔩 DIN (Deutsche Industrie Norm) is the threaded connection."
        },
        {
            q: "A regulator's first stage reduces ________ pressure from the cylinder to intermediate pressure and the second stage delivers air to the diver at ________ pressure.",
            options: ["high / ambient", "air / ambient", "ambient / high", "air / low"],
            answer: 0,
            feedback: "Step Down! 📉 Cylinder (High) -> Hose (Intermediate) -> Mouth (Ambient)."
        },
        {
            q: "What is the environmental seal on a regulator's first stage designed to do?",
            options: [
                "Increase the ease of breathing even in turbid water.",
                "Keep water from entering the first stage when not connected to a cylinder.",
                "Help prevent it from freezing up in extremely cold water.",
                "All of the above."
            ],
            answer: 2,
            feedback: "Anti-Freeze! ❄️ Sealing the internals from the wet keeps ice from forming."
        },
        {
            q: "A regulator malfunctions and starts to free flow. This is due to its ________ design.",
            options: ["fail safe (down stream)", "demand valve", "balanced piston", "open circuit"],
            answer: 0,
            feedback: "Safe Fail! 🌬️ If it fails, it gives you ALL the air, not NONE of it."
        },
        {
            q: "True or False. The most common problem with an SPG is having the dangling gauge snag or continually bang into things underwater, which destroys the hose and damages the gauge.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Don't Dangle! 🪝 Keep your gear tucked to save your hose and the reef."
        },
        {
            q: "True or False. Regular visual inspections of a scuba cylinder are important, because internal corrosion can cause debris that clogs the valve or regulator, potentially causing significant damage.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Visuals Matter! 👁️ Rust on the inside is a silent regulator killer."
        },
        {
            q: "How do you identify the hydrostatic test date on a scuba cylinder?",
            options: [
                "Decal with the day, month and year.",
                "Green and yellow cylinder band with the test date printed on it.",
                "Month and year stamped on the cylinder neck.",
                "Day, month and year stamped on the cylinder base."
            ],
            answer: 2,
            feedback: "Stamp of Approval! 🔨 Check the neck for the month/year of the last hydro."
        },
        {
            q: "A diver complains of a 'wet' breathing regulator. What might be causing the problem?",
            options: ["An exhaust valve that doesn't seal.", "A small tear in the mouthpiece.", "An open downstream valve.", "Either a or b."],
            answer: 3,
            feedback: "Gurgle Gurgle! 🌊 Holes or bad seals let water join the air stream."
        },
        {
            q: "What are the recommended procedures for using dive computers while diving?",
            options: [
                "A buddy team may dive with only one computer if the divers remain side-by-side throughout the dive.",
                "If one diver's computers fails during the dive, the diver may continue diving using a buddy's computer.",
                "Each buddy must have a computer and the buddy team should follow the most conservative computer.",
                "Both a and b."
            ],
            answer: 2,
            feedback: "One per Diver! ⌚ Computers only track the person wearing them."
        },
        {
            q: "True or False. Before using enriched air cylinders, divers must watch the divemaster analyze the contents to confirm the percentage of oxygen, so they can set their enriched air dive computers properly.",
            options: ["True", "False"],
            answer: 0,
            feedback: "EANx Check! 🧪 Knowing your O2 mix is the #1 rule of Nitrox."
        },
        {
            q: "True or False. The Haldanean decompression model is based on the concept that decompression sickness can be avoided by keeping the pressure gradient between dissolved nitrogen in the tissues and the surrounding pressure within acceptable limits.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Gradient Theory! 📉 It's all about the 'M-Value' or do-not-cross line."
        },
        {
            q: "Using the RDP above ________ requires the use of special procedures.",
            options: ["300 metres or 1000 feet", "500 metres or 1500 feet", "2400 metres or 8000 feet", "3000 metres or 10,000 feet"],
            answer: 0,
            feedback: "Altitude Diving! 🏔️ Above 300m, normal tables are too risky."
        },
        {
            q: "Flying after diving recommendations suggest that divers wait ________ hours after completing a single dive and ________ hours after completing multiple dives for several days before flying in a commercial jet airliner.",
            options: ["12 / 24", "4/ an extended period beyond 12", "12 / 18", "24 / an extended period beyond 24"],
            answer: 2,
            feedback: "No Fly Zone! ✈️ 12 hours for one dive, 18 hours for multiples. Safe and simple."
        },
        {
            q: "If a diver exits the water in pressure group N, what would the diver's new pressure group be after a 45 minute surface interval?",
            options: ["H", "J", "I", "G"],
            answer: 1,
            feedback: "Table Time! 📊 Consult your RDP—45 mins on the surface drops you from N to J."
        },
        {
            q: "A diver completes a 28 minute dive to 24 metres/79 feet and after waiting for 39 minutes on the surface makes a second dive to 18 metres/59 feet for 25 minutes. What is the diver's pressure group after the second dive?",
            options: ["S", "T", "U", "P"],
            answer: 1,
            feedback: "Double Dip! 🌊 Calculation: Dive 1 (24m/28min) -> Group O. SIT 39m -> Group G. Dive 2 (18m/25min) -> Final Group T."
        },
        {
            q: "True or False. For the diver in the previous question, a safety stop would be required on both dives.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Always 5m! 🛟 If you hit M or later groups, stops are mandatory, but always recommended."
        },
        {
            q: "What is the ending pressure group for the following three dive profile? Dive 1 - 24 m/82 ft for 20 minutes (SI - 44 mins). Dive 2 - 16 m/49 ft for 33 minutes (SI - 37 mins). Dive 3 - 11 m/38 ft for 61 minutes.",
            options: ["T", "K", "V", "W"],
            answer: 3,
            feedback: "The Marathon! 🏊‍♂️ Dive 1 -> P. SIT -> H. Dive 2 -> S. SIT -> L. Dive 3 -> Final Group W."
        },
        {
            q: "True or False. If the diver in the previous question wanted to do a fourth dive, the diver must have a minimum surface interval of at least one hour.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Hour Rule! ⏳ 3+ dives or group W/X need a full hour to off-gas safely."
        },
        {
            q: "What is the no decompression limit for a dive to 19 m/ 62 ft?",
            options: ["40", "45", "50", "56"],
            answer: 1,
            feedback: "Table Check! 📋 At 20m (round up), the limit is 45 minutes."
        },
        {
            q: "Divers on a live-aboard boat complete the following three dives in one day. What is their pressure group after the third dive? Dive 1 - 29 m/99 ft for 16 minutes (SI - 1h 15m). Dive 2 - 17 m/54 ft for 30 minutes (SI - 2h). Dive 3 - 12 m/39 ft for 55 minutes.",
            options: ["K", "B", "Q", "M"],
            answer: 2,
            feedback: "Live-aboard Logic! 🚢 Dive 1 -> L. SIT -> C. Dive 2 -> O. SIT -> G. Dive 3 -> Final Group Q."
        },
        {
            q: "In the previous question, how many times did 'Safety Stop 3 min - See Rule 2' appear on your eRDPML?",
            options: ["0", "1", "2", "3"],
            answer: 3,
            feedback: "Stop Everything! 🛑 Rules 1 and 2 of the RDP are your best friends."
        },
        {
            q: "For this multilevel dive, what is the maximum allowable time for the third level of the dive? Level 1 - 34 m/115 ft for 8 minutes. Level 2 - 19 m/55 ft for 12 minutes. Level 3 - 12 m/40 ft for ________.",
            options: ["25", "47", "79", "87"],
            answer: 2,
            feedback: "Level Up! 🎮 Using the eRDPML, your remaining allowance at 12m is 79 minutes."
        }
    ],
    B: [
        {
            q: "True or False. Because divers vary in their skill level, physical abilities and behavior, you need to recognize and accommodate individual differences and adapt your approach to meet each diver's needs.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Adaptive Leadership! 👤 Every diver is different, and a good DM knows how to flex."
        },
        {
            q: "What is an advantage of out of water supervision?",
            options: [
                "It's an effective way to supervise multiple groups at once.",
                "You are closer to divers to respond to problems.",
                "Buddy teams have fewer individual options for their dive plans.",
                "You can easily remind divers to follow appropriate dive procedures."
            ],
            answer: 0,
            feedback: "The Big Picture! 🔭 From the boat, you can see everyone at once."
        },
        {
            q: "What is a disadvantage of inwater supervision?",
            options: [
                "You can only watch one group.",
                "You can't remind divers to follow appropriate dive procedures.",
                "You are closer to emergency-related equipment.",
                "Buddy teams have more individual options to explore independently."
            ],
            answer: 0,
            feedback: "Tunnel Vision! 🚇 Once you're down there, you're locked into that one group."
        },
        {
            q: "What is an indirect technique to estimate a diver's skill level during predive interactions?",
            options: [
                "Ask the diver's buddy to assess the diver's skill level.",
                "Look at the diver's equipment, assessing condition, configuration and age.",
                "Have the diver use the RDP table to find a minimum surface interval between two dives.",
                "All of the above."
            ],
            answer: 1,
            feedback: "Gear Talk! ⚙️ Rusty regs or pristine gear tells a story before they even jump in."
        },
        {
            q: "Signs and symptoms of psychological stress include:",
            options: ["being withdrawn or very talkative.", "appearing distracted or having a very narrow focus.", "expressing concern about the dive.", "All of the above."],
            answer: 3,
            feedback: "Stress Signals! 🚩 Whether they're silent or a chatterbox, watch for changes in behavior."
        },
        {
            q: "You need to apply your judgment to which elements of dive supervision?",
            options: [
                "Picking a vantage point for supervising dive activities.",
                "Evaluating whether dive conditions are acceptable.",
                "Choosing which dive techniques to recommend.",
                "All of the above."
            ],
            answer: 3,
            feedback: "The DM Mindset! 🧠 Rules are the foundation, but your judgment is the structure."
        },
        {
            q: "You're supervising a group certified divers and a diver surfaces calling for help. Your likely role is to:",
            options: [
                "ask a rescue diver to handle the situation so you can focus on the uninvolved divers.",
                "manage the accident if you are the most qualified person present.",
                "assist the boat captain in managing the accident.",
                "None of the above."
            ],
            answer: 1,
            feedback: "Command & Control! ⚓ Incident management flows from the highest qualified person on site."
        },
        {
            q: "What suggestions can you provide to help divers interact responsibly with the environment?",
            options: [
                "Dive carefully to protect the ecosystem.",
                "Respect underwater life.",
                "Secure gauges or alternate air sources so they don’t drag and damage aquatic life.",
                "All of the above."
            ],
            answer: 3,
            feedback: "Eco-Logic! 🌊 Help them realize that their drag is the reef's drag."
        },
        {
            q: "True or False. You only need to include an environmental orientation in your dive briefing if the divers ask you to include information about local aquatic life.",
            options: ["True", "False"],
            answer: 1,
            feedback: "Mandatory Briefing! 🗣️ Local info is key for safety and enjoyment, whether they ask or not."
        },
        {
            q: "In your role as an instructional assistant, you should ________ what the instructor requires to meet student diver needs.",
            options: ["always ask", "delegate", "authorize", "anticipate"],
            answer: 3,
            feedback: "Be the Mind Reader! 🔮 A great assistant has the tool ready before the instructor asks for it."
        },
        {
            q: "As the link between student divers and the instructor, it's important that student divers feel you are:",
            options: ["approachable and will listen to their concerns.", "a counselor to the instructor.", "a first aid expert.", "the ultimate authority."],
            answer: 0,
            feedback: "The Friendly Pro! 👋 You're the buffer that keeps students comfortable and learning."
        },
        {
            q: "A good position for you when assisting an instructor with student divers in the water, is one that allows:",
            options: [
                "student divers to quickly alert you, if necessary.",
                "you to see the entire group and the instructor.",
                "you to respond quickly to problems.",
                "All of the above."
            ],
            answer: 3,
            feedback: "Golden Triangle! 📐 Position yourself to see them all and be seen by them."
        },
        {
            q: "True or False. On a silty bottom, it's always best to position student divers in a line with you at one end and the instructor at the other, and have them swim to the end of the line after completing a skill.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Visibility first! 🌫️ Proper geometry prevents the dreaded silt-out."
        },
        {
            q: "It's appropriate to make direct contact with a student diver in which of the following situations?",
            options: [
                "To prevent a buoyancy problem or an inappropriate response, such as bolting to the surface.",
                "To provide reassurance and help a student diver calm down.",
                "To steady a diver while practicing a skill with some water motion present.",
                "All of the above."
            ],
            answer: 3,
            feedback: "The Human Connection! 🤝 Sometimes a hand on a shoulder is worth a thousand words."
        },
        {
            q: "How could you steady a student diver who is having difficulty with balance while practicing mask clearing?",
            options: [
                "Hold on to the diver's right arm.",
                "Hold on to the diver's BCD.",
                "Hold the diver's fins on the bottom.",
                "Hold the diver's SPG hose."
            ],
            answer: 1,
            feedback: "Rock Solid! 🪨 A firm but gentle grip on the BCD provides the anchor they need."
        },
        {
            q: "You are assisting an instructor who is conducting an open water dive from shore with a class of four Open Water Diver students. When the student divers arrive at the dive site, your likely function is to:",
            options: [
                "unload everyone's equipment for them from their vehicles.",
                "show the student divers where to place their equipment and let them know when they can start setting up their equipment.",
                "wait for the instructor to assign you a task.",
                "entertain the divers until the instructor shows up."
            ],
            answer: 1,
            feedback: "Logistics Lead! 📋 You're the master of the base camp."
        },
        {
            q: "True or False. One reason you may demonstrate a skill is to assist with a two-person demonstration for skills such as alternate air source use.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Dynamic Duo! 🦸‍♀️🦸‍♂️ DMs are essential for showing complex group skills."
        },
        {
            q: "The best way to continue improving the quality of your skill demonstrations is to:",
            options: [
                "get in the water and practice.",
                "watch PADI videos.",
                "observe other divers performing skills.",
                "consult the performance requirements for each skill in your PADI Instructor Manual."
            ],
            answer: 0,
            feedback: "Wet Practice! 🏊‍♂️ Reading about it is good, but doing it is where mastery lives."
        },
        {
            q: "When helping a student diver who is having difficulty learning a skill,:",
            options: [
                "progress slowly so the student diver enjoys success while learning the skill.",
                "keep in mind that sequence errors are usually not important.",
                "avoid repeating demonstrations, which waste time and confuse student divers.",
                "All of the above."
            ],
            answer: 0,
            feedback: "Momentum! 🌊 Build their confidence with small, successful steps."
        },
        {
            q: "True or False. A demonstration-quality skill performance is performed quickly so it looks easy.",
            options: ["True", "False"],
            answer: 1,
            feedback: "Slow is Smooth! 📽️ If it's too fast, they can't see the 'how'. Slow it down to make it clear."
        },
        {
            q: "True or False. When supervising and teaching children, you are placed under a higher duty of care and should be familiar with the requirements outlined in the Youth Leader’s Commitment found in your PADI Instructor Manual.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Safe Haven! 👶 Protecting the next generation is our highest calling."
        },
        {
            q: "You are working with a student diver who has a physical impairment and is having difficulty mastering a skill. What should you do?",
            options: [
                "Require the diver to do the skill exactly like the other student divers.",
                "Allow the diver to skip the skill and move on to another skill.",
                "Focus on what the diver can do and look for ways to accomplish the skill within the diver's abilities.",
                "Ask the instructor to reevaluate the diver."
            ],
            answer: 2,
            feedback: "Adaptive Mindset! 🦾 It's not about the disability, it's about the ability."
        },
        {
            q: "True or False. Adhering to PADI Standards as listed in your PADI Instructor Manual is important because they exist for diver safety, provide educational validity and a basis for legal protection when conducting PADI programs.",
            options: ["True", "False"],
            answer: 0,
            feedback: "The Foundation! 🧱 Standards are what separate a 'diver' from a 'PADI Pro'."
        },
        {
            q: "True or False. Striving to prevent problems and avoid situations where divers could be hurt is the primary and most important goal of risk management.",
            options: ["True", "False"],
            answer: 0,
            feedback: "The Best Rescue... is the one you never have to do! 🛡️"
        },
        {
            q: "To be a good role model and better manage risks, follow which of these recommendations?",
            options: [
                "Stay physically fit by exercising regularly, getting adequate rest and eating properly.",
                "When ill or injured, moderate your dive activities accordingly.",
                "Continue your dive education and professional training.",
                "All of the above."
            ],
            answer: 3,
            feedback: "The Pro Lifecycle! 🔄 Keep yourself sharp so you can keep them safe."
        },
        {
            q: "What can help you manage your own risk?",
            options: [
                "Always follow local protocols even if they conflict with PADI Standards.",
                "Use common sense, caution and good judgment, and know your limitations as a dive leader.",
                "Make sure divers take complete responsibility for their dive activities and relieve you of any duty.",
                "All of the above."
            ],
            answer: 1,
            feedback: "Self-Awareness! 🧠 A DM who knows their limits is a safe DM."
        },
        {
            q: "True or False. You only need to refer to the individual guide in your PADI Instructor Manual for overall standards when preparing to conduct a PADI program.",
            options: ["True", "False"],
            answer: 1,
            feedback: "Full Context! 📖 You need the General Standards AND the program specific guide."
        },
        {
            q: "True or False. You should carry professional liability insurance even if you are only assisting an instructor, because the instructor's insurance does not cover you.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Liability Shield! 🛡️ Protect your career and your future—always have your own policy."
        },
        {
            q: "Why is it important to have divers complete administrative paperwork when enrolling in a PADI course or program?",
            options: [
                "To give divers the option to not accept responsibility for participating in a dive program.",
                "To inform divers of the risks of diving, help assure they are medically fit to participate and to remind them of the importance of following safe diving practices.",
                "To make sure you have their addresses and phone numbers for your records.",
                "All of the above."
            ],
            answer: 1,
            feedback: "Paperwork saves lives! 📝 It's the first step in the safety chain."
        },
        {
            q: "True or False. Certified divers who want an orientation and underwater guided tour of a new dive site or unfamiliar aquatic conditions, should participate in a PADI Discover Local Diving program.",
            options: ["True", "False"],
            answer: 0,
            feedback: "The Local Advantage! 🗺️ DLD is the professional way to explore a new spot."
        },
        {
            q: "How many divers can you take in the water for a Discover Local Diving experience?",
            options: [
                "8",
                "All the divers that enroll for the dive.",
                "You use your judgment to decide how many based on factors including diver comfort, experience, age, environmental conditions and logistics.",
                "12, with the assistance of another divemaster."
            ],
            answer: 2,
            feedback: "Safety Ratio! ⚖️ It's all about the environment and the divers' comfort."
        },
        {
            q: "Which program has a confined water ratio of 10 participants to one divemaster (10:1)?",
            options: ["Discover Scuba Diving", "PADI Skin Diver course", "Discover Local Diving", "Scuba Review"],
            answer: 1,
            feedback: "Surfacing Safety! 🤿 Skin divers are at the top, so you can manage more."
        },
        {
            q: "The minimum age to participate in a Scuba Review program is:",
            options: ["10.", "12.", "15.", "18."],
            answer: 0,
            feedback: "Junior Pros! 🎒 If they're 10 and certified, they can refresh."
        },
        {
            q: "True or False. The PADI Skin Diver course consists of knowledge development, confined water training and a required open water dive.",
            options: ["True", "False"],
            answer: 0,
            feedback: "The Snorkel Journey! 🐬 Knowledge, pool, and then the blue."
        },
        {
            q: "The minimum age to participate in a PADI Skin Diver course is:",
            options: ["No minimum age.", "8.", "10.", "12."],
            answer: 1,
            feedback: "Start Young! 🏊‍♂️ 8 is the magic number for the skin diver course."
        },
        {
            q: "True or False. You may take Discover Scuba Diving participants on their first open water dive at a ratio of 2:1.",
            options: ["True", "False"],
            answer: 1,
            feedback: "Instructors Only! 👨‍🏫 DMs can only handle Dive 2 and beyond or assist."
        },
        {
            q: "After certification as a PADI Divemaster, you can qualify as a DSD Leader by completing an internship that includes:",
            options: [
                "observing four DSD programs that include open water dives.",
                "conducting four separate DSD programs in confined water under the direct supervision of a PADI Instructor.",
                "assisting an instructor with eight DSD experiences.",
                "conducting the additional dives for at least eight DSD participants."
            ],
            answer: 1,
            feedback: "Leadership Path! 🎖️ The internship turns a DM into a DSD Leader."
        },
        {
            q: "True or False. When supervising Discover Scuba Diving participants on an open water dive, you should position yourself so that you can make immediate physical contact with, adjust buoyancy for, and render assistance to, participants.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Arms Reach! 🦑 The 1-arm-length rule is your best friend here."
        },
        {
            q: "True or False. As a PADI Divemaster, you can qualify to teach only one PADI Specialty Diver course – Emergency Oxygen Provider.",
            options: ["True", "False"],
            answer: 0,
            feedback: "O2 Pro! 💨 You can teach Oxygen Provider once you're a DM and certified specialty instructor."
        },
        {
            q: "What general procedures do you follow when launching a delayed surface marker buoy (DSMB)?",
            options: [
                "Before launching, always check for objects or divers above you.",
                "Keep the line away from your equipment and then inflate the buoy carefully.",
                "Once the buoy is on the surface, keep the line taut to keep the buoy upright.",
                "All of the above."
            ],
            answer: 3,
            feedback: "The Rocket! 🚀 Safety, space, and a tight line ensure they find you."
        },
        {
            q: "What do you need to consider when setting a dive float?",
            options: [
                "Plan for retrieving the float at the end of the dive day.",
                "Finding an insensitive bottom for anchoring along with an area for descending divers to land without harming any aquatic life.",
                "How current, waves and the tide may affect the float and line.",
                "All of the above."
            ],
            answer: 3,
            feedback: "Surface Support! 🎈 The float is your beacon—treat it with respect."
        },
        {
            q: "If you need to conduct an underwater search, you might consider using a circular or semicircular rope pattern when you're looking for a:",
            options: [
                "small object on an unobstructed bottom.",
                "large object on a severe slope.",
                "small object in a kelp forest.",
                "medium to large object dropped off a boat."
            ],
            answer: 0,
            feedback: "Geometry at work! 📏 Circular is the most thorough for small stuff on clear sand."
        },
        {
            q: "True or False. For deep dives, you need to consider the divers' experience, comfort and skill-level, as well as their attitudes, when deciding how best to supervise the dive.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Attitude Matters! 🧠 A diver's mindset is as important as their depth gauge."
        },
        {
            q: "True or False. When supervising a boat dive, you should conduct a final visual roll call and make sure that you actually see each diver before the boat leaves the dive site.",
            options: ["True", "False"],
            answer: 0,
            feedback: "No one left behind! 🚤 A visual check is the DM's holy grail."
        },
        {
            q: "What is the minimum number of dive lights each diver should have on a night dive?",
            options: ["One, with a backup recommended.", "Two", "One main light and two backups.", "One light for each buddy team."],
            answer: 0,
            feedback: "Light is Life! 🔦 One is good, but a backup is better in the dark."
        },
        {
            q: "True or False. If supervising a drift dive, it's a good idea to have each diver carry a surface signal device.",
            options: ["True", "False"],
            answer: 0,
            feedback: "SMB Alert! 🚩 In a current, you're only as visible as your signal."
        },
        {
            q: "The four Es of diving that describe the support and structure everyone needs to enjoy the dive adventure are – Education, Equipment, ________ and Environment.",
            options: ["Entertainment", "Excitement", "Expertise", "Experiences"],
            answer: 3,
            feedback: "The 4 Pillars! 🏛️ We teach, we sell gear, we provide spots, and we protect the sea."
        },
        {
            q: "Divers expect that, as a dive professional, you’re knowledgeable about diving, and they will look to you for advice regarding:",
            options: [
                "caring for the local dive environment as well as the aquatic realm in general.",
                "dive education and equipment.",
                "local diving opportunities and dive travel.",
                "All of the above."
            ],
            answer: 3,
            feedback: "The Guide! 🧙‍♂️ You ARE the fountain of knowledge for your guests."
        },
        {
            q: "True or False. To remain a PADI Divemaster in Active status, you must renew your membership every year.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Keep it Current! ⚡ Your status is tied to that yearly renewal."
        },
        {
            q: "As a PADI Divemaster, you are in the ________ business.",
            options: ["entertainment", "transformation", "travel", "sales"],
            answer: 1,
            feedback: "Changing Lives! ✨ We don't just dive—we transform landlubbers into ocean keepers."
        },
        {
            q: "True or False. As a dive professional, it’s important for you to be knowledgeable about the aquatic realm not just to satisfy your own curiosity, but because other divers may come to you with questions about what they’ve seen.",
            options: ["True", "False"],
            answer: 0,
            feedback: "The Ocean's Voice! 🐋 If you don't know what that fish is, who will?"
        },
        {
            q: "Water covers about ________ of the Earth's surface.",
            options: ["90%", "81%", "75%", "71%"],
            answer: 3,
            feedback: "Planet Ocean! 🌍 71% and counting. We're the lucky ones who get to see it."
        },
        {
            q: "True or False. Coral reefs thrive within a wide tolerance range with respect to light, temperature and nutrition, thus changes in ocean temperature and acidity, whether from natural causes or human-induced, do not harm a reef’s health.",
            options: ["True", "False"],
            answer: 1,
            feedback: "Bleaching Alert! 🌡️ Corals are incredibly sensitive. Even 1 degree can spell disaster."
        },
        {
            q: "True or False. Coastal wetlands, such as mangrove forests, salt marshes and estuaries, are crucial habitats for marine species because this is where many fish species lay their eggs.",
            options: ["True", "False"],
            answer: 0,
            feedback: "The Nursery! 🤱 Mangroves are the cradle of the ocean."
        },
        {
            q: "If you stand on a beach and watch a line of turbid, foamy water moving away from shore, disrupting the waves where it rushes out to sea, you are looking at a ________ current.",
            options: ["upwelling", "rip", "tidal", "longshore"],
            answer: 1,
            feedback: "Rip City! 🌊 Don't swim against it—swim parallel!"
        },
        {
            q: "When relatively warm, low-density surface water is separated from cool, high-density deep water, this is called:",
            options: ["a freshwater layer.", "downwelling.", "a thermocline.", "a rip current."],
            answer: 2,
            feedback: "The Shiver Line! 🧊 You know that sudden drop in temp? That's the thermocline."
        },
        {
            q: "Wind is the most common disturbing force that causes ________, while the gravitational interaction between the sun, moon and earth cause ________.",
            options: ["tides / waves", "surge / currents", "rip currents / ocean swells", "waves / tides"],
            answer: 3,
            feedback: "Cosmic Flow! 🌑 Wind makes the surface move, gravity moves the whole ocean."
        },
        {
            q: "In general, it’s best to dive at the high tide or the slack period between high and low tides, because:",
            options: [
                "the visibility is likely better due to clearer water coming in from the sea.",
                "the current is at its strongest.",
                "the water offshore is deeper.",
                "All of the above."
            ],
            answer: 0,
            feedback: "Clear Water! 💎 Incoming tide brings in the clean, blue ocean water."
        },
        {
            q: "True or False. When the water depth is 1.3 times the wave height, the wave becomes unstable and will break.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Wave Math! 🏄‍♂️ 1.3 is the magic ratio for a break."
        },
        {
            q: "Ways that you can encourage divers to protect the underwater world include:",
            options: [
                "report environmental disturbances or destruction and get involved in local environmental activities and issues.",
                "be a role-model for other divers, dive carefully and be aware of equipment placement when diving.",
                "respect underwater cultural heritage and maritime history.",
                "All of the above."
            ],
            answer: 3,
            feedback: "Ocean Guardian! 🔱 Your leadership creates new protectors of the sea."
        },
        {
            q: "The unprotected human body loses heat approximately ________ times faster in water than in air.",
            options: ["8", "10", "16", "20"],
            answer: 3,
            feedback: "Cold Snap! 🥶 Wear that wetsuit—water steals heat 20x faster."
        },
        {
            q: "At a depth of 30 metres/99 feet, the air you breathe is approximately ________ as compared to the surface.",
            options: ["the same density", "two times as dense", "three times as dense", "four times as dense"],
            answer: 3,
            feedback: "Math check! 🧮 1 atm (surface) + 3 atm (water) = 4 atm absolute density."
        },
        {
            q: "If a balloon is filled to 2 litres at 40 metres/132 feet and then released, assuming it does not explode, what will its volume be upon reaching the surface?",
            options: ["10 litres", "8 litres", "6 litres", "2 litres"],
            answer: 0,
            feedback: "The Big Expansion! 🎈 40m (5 atm) to 0m (1 atm) means 2L becomes 10L."
        },
        {
            q: "A diver breathes from a cylinder that contains .04% carbon monoxide at a depth of 20 metres/60 feet. This will have the same physical effect as if the diver were breathing ________ % carbon monoxide at the surface.",
            options: ["1.2", "0.12", ".04", "0.4"],
            answer: 1,
            feedback: "Dalton's Warning! 🧪 .04% at 3 atm (20m) = .12% at the surface. Toxic!"
        },
        {
            q: "An object is neutrally buoyant in salt water. What will happen to the object when it's placed in fresh water?",
            options: ["The answer cannot be determined.", "It will float.", "It will sink.", "It will remain neutrally buoyant."],
            answer: 2,
            feedback: "Sink Like a Stone! ⚓ Fresh water is less dense, so it provides less lift."
        },
        {
            q: "Divers have difficulty determining the ________ of sound underwater, because sound travels approximately ________ times faster in water than in air.",
            options: ["direction / 20", "volume /two", "direction / four", "origin / 10"],
            answer: 2,
            feedback: "Sonic Speed! 🔊 It hits both ears so fast your brain gets confused about the source."
        },
        {
            q: "If a full scuba cylinder is placed outside in the sunlight on a hot, tropical day, the:",
            options: [
                "pressure inside will increase.",
                "pressure inside will decrease.",
                "volume of the cylinder will most likely decrease.",
                "cylinder's pressure and volume will remain unchanged."
            ],
            answer: 0,
            feedback: "Gay-Lussac's Law! 🔥 Heat equals pressure. Keep those tanks cool!"
        },
        {
            q: "The absolute pressure at 30 metres/99 feet of salt water is:",
            options: ["2 bar/ata", "3 bar/ata", "4 bar/ata", "5 bar/ata"],
            answer: 2,
            feedback: "Pressure Check! 📊 1 atm + 3 atm of water = 4 atm total."
        },
        {
            q: "If a gas mixture contains 80% nitrogen and 20% oxygen at sea level, what will the partial pressure of oxygen be if its taken to 20 metres/66 feet in sea water?",
            options: ["0.4 bar/ata", "0.6 bar/ata", "0.8 bar/ata", "1.2 bar/ata"],
            answer: 1,
            feedback: "Oxygen Math! 🧪 3 atm total * 0.20 O2 = 0.6 atm Partial Pressure."
        },
        {
            q: "If a glass of water is placed in a recompression chamber and the pressure surrounding the water is decreased, the amount of gas dissolved in the water will:",
            options: ["remain unchanged.", "increase.", "decrease.", "None of the above."],
            answer: 2,
            feedback: "The Fizz! 🥤 Less pressure means gas escapes. That's why bubbles form in DCS."
        },
        {
            q: "Objects often appear larger and closer than actual when viewed underwater. What causes this?",
            options: ["Absorption of colors", "Diffusion of light", "Refraction of light", "Reflection of light"],
            answer: 2,
            feedback: "Glass Lens! 🔍 Light bending as it goes from water to air is the culprit."
        },
        {
            q: "If a full cylinder of air will last you 80 minutes at the surface. All else being the same, how long would you expect it to last at 30 metres/99 feet?",
            options: ["20 minutes", "30 minutes", "40 minutes", "60 minutes"],
            answer: 0,
            feedback: "Air Math! 💨 At 4 atm (30m), you breathe 4x as much. 80 / 4 = 20."
        },
        {
            q: "How do you avoid problems caused by dead air space?",
            options: [
                "Breathe slowly and deeply.",
                "Ascend to a shallow depth.",
                "Streamline your equipment.",
                "All of the above."
            ],
            answer: 0,
            feedback: "Deep Breaths! 🌬️ Slow and deep ensures you move fresh air past the snorkel/reg."
        },
        {
            q: "While skin diving, breathhold time can be increased using voluntary hyperventilation, which decreases the amount of ________ in the lungs.",
            options: ["oxygen", "nitrogen", "carbon dioxide", "dead air space"],
            answer: 2,
            feedback: "The CO2 Trick! 🌬️ Lowering CO2 delays your 'must breathe' signal—dangerously."
        },
        {
            q: "True or False. A diver who complains of a headache and has lips that are redder than normal after a dive is likely suffering from oxygen toxicity.",
            options: ["True", "False"],
            answer: 1,
            feedback: "Carbon Monoxide Alert! 🍒 Red lips are the classic (and deadly) sign of CO poisoning."
        },
        {
            q: "Arteries carry blood ________ the heart and veins carry blood ________ the heart.",
            options: ["toward / away from", "red in color to / blue in color from", "hemoglobin to / plasma through", "away from / toward"],
            answer: 3,
            feedback: "A for Away! 💓 Arteries flow away from the heart."
        },
        {
            q: "A diver who is having difficulty with ear equalization blows long and forcefully against a pinched nose. This could cause:",
            options: ["a sinus squeeze.", "an eustachian tube rupture.", "a round window rupture.", "an oval window rupture."],
            answer: 2,
            feedback: "Gentle Please! 👂 Force can blow out the delicate round window membrane."
        },
        {
            q: "Most divers begin to feel the effects of gas narcosis at about ________, though this varies from person to person.",
            options: ["10 m/30 ft", "20 m/60 ft", "30 m/100 ft", "a depth beyond the recreational diving limit."],
            answer: 2,
            feedback: "The Martini Zone! 🍸 30 meters is where the fuzzy feelings usually start."
        },
        {
            q: "Dry suit and mask squeezes occur most commonly during a very ________.",
            options: ["slow descent", "rapid descent", "slow ascent", "rapid ascent"],
            answer: 1,
            feedback: "Pressure Spike! 📉 Dropping fast means you have less time to add air."
        },
        {
            q: "What is the likely cause if a diver begins to feel light-headed because of a tight neck seal?",
            options: ["Carotid sinus reflex", "Blocked jugular venous return", "Shallow water blackout", "Either a or b"],
            answer: 3,
            feedback: "Neck Check! 👔 A tight seal can trick your brain's sensors or block flow."
        },
        {
            q: "The ________ ear is most affected if a squeeze occurs while descending.",
            options: ["inner", "middle", "outer", "All of the above are equally affected."],
            answer: 1,
            feedback: "The Equalizer! 🔉 The middle ear space is what we're always popping."
        },
        {
            q: "The symptoms of decompression sickness tend to appear ________, while symptoms of a lung-expansion injury tend to appear ________.",
            options: [
                "more slowly/immediately after the dive",
                "immediately upon surfacing/ slowly over an extended period",
                "within the first few minutes/delayed",
                "at depth/only after surfacing"
            ],
            answer: 0,
            feedback: "Fast vs Slow! ⏱️ Lung tears are instant; bubbles take time to grow."
        },
        {
            q: "________ is the most serious sign of Central Nervous System (CNS) toxicity.",
            options: ["Difficulty breathing", "Convulsion", "Vertigo", "Nausea"],
            answer: 1,
            feedback: "Danger Zone! 🛑 O2 convulsions underwater are life-threatening."
        },
        {
            q: "The serious lung injury that occurs when air from a rupture collects between the lung and chest wall, causing the lung to collapse is called:",
            options: ["pneumothorax.", "mediastinal emphysema.", "air embolism.", "carotid sinus reflex."],
            answer: 0,
            feedback: "Collapsed! 🫁 Pneumothorax is when the space around the lung fills with air."
        },
        {
            q: "True or False. A near drowning patient should seek medical care, even when appearing recovered, because in nearly all cases, water enters the patient’s lungs.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Secondary Hazard! 🫁 Lung complications can arise hours later."
        },
        {
            q: "What is the first aid for a lung overexpansion injury?",
            options: [
                "Give oxygen – preferably 100 percent.",
                "Keep a breathing patient lying level and advise not to sit up, even if feeling better.",
                "Monitor the patient's airway, breathing and circulation, and contact emergency medical services.",
                "All of the above."
            ],
            answer: 3,
            feedback: "Standard Care! 🚑 O2, keep them level, and call for the pros."
        },
        {
            q: "On a hot day, a diver in a full wet suit is sweating, has cool and clammy skin and is complaining of nausea and weakness. The diver is likely suffering from:",
            options: ["heat stroke", "hypothermia", "carbon monoxide contamination", "heat exhaustion"],
            answer: 3,
            feedback: "Cool Down! 🧥 Clammy skin is the body's last attempts to cool via sweating—heat exhaustion."
        },
        {
            q: "How can you provide oxygen to a nonbreathing, injured diver?",
            options: [
                "Through a pocket mask attached to a free flow oxygen system while providing rescue breaths.",
                "With a nonresuscitator demand valve system.",
                "Use a continuous oxygen flow with a nonrebreather mask system.",
                "None of the above."
            ],
            answer: 0,
            feedback: "Rescue Ready! 💨 The pocket mask ensures you get O2 and air into their lungs."
        },
        {
            q: "A visual inspection of a scuba cylinder should occur:",
            options: [
                "anytime the cylinder seems heavier than it should be, because it could have water in it.",
                "at least every three years.",
                "only when a hydrostatic test is required.",
                "after 100 air fills."
            ],
            answer: 0,
            feedback: "V.I.P.! 👁️ If it sounds like a cocktail shaker or feels heavy, look inside!"
        },
        {
            q: "________ pressure gas from a scuba cylinder is reduced by a regulator's first stage to intermediate pressure and the second stage delivers air to the diver at ________ pressure.",
            options: ["High / ambient", "Low / ambient", "Ambient / high", "Partial / low"],
            answer: 0,
            feedback: "Reduction! 📉 3000psi -> 140psi -> Your air pressure."
        },
        {
            q: "If a regulator’s second stage valve malfunctions, it will ________ due to its ________ design.",
            options: ["breath hard / cautious", "stop providing air / fail safe (down stream)", "free flow / fail safe (down stream)", "breath normally / perfect"],
            answer: 2,
            feedback: "Waterfall! 🌬️ Better a face full of air than none at all."
        },
        {
            q: "Most functional problems with a regulator occur due to ________.",
            options: ["poor maintenance or servicing", "an improper mouthpiece", "lack of diver experience", "the environmental seal"],
            answer: 0,
            feedback: "Lube it up! 🧴 Clean, serviced gear rarely fails on you."
        },
        {
            q: "True or False. The purpose of a regulator environmental seal is to help keep the regulator from freezing in cold water.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Anti-Freeze! ❄️ Sealing the internals from the wet keeps ice from forming."
        },
        {
            q: "True or False. A scuba cylinder’s initial hydrostatic test date will usually appear as a month and year stamped in the last row of information on the cylinder.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Stamp of Truth! 🔨 The neck stamps tell the whole history."
        },
        {
            q: "What is the most common cylinder valve problem?",
            options: ["Internal corrosion.", "A missing burst disk.", "A worn or missing o-ring.", "A missing dust cap."],
            answer: 2,
            feedback: "The 50-cent Fix! ⭕ O-rings are the #1 cause of 'scuba sizzle'."
        },
        {
            q: "What are the recommended procedures for using dive computers while diving?",
            options: [
                "Follow the most conservative computer within a buddy team.",
                "Watch your SPG because often air supply limits the dive – not the time allowed by a dive computer.",
                "Divers shouldn’t share a computer – each diver needs an individual computer.",
                "All of the above."
            ],
            answer: 3,
            feedback: "Digital Safety! ⌚ One per diver, stay tucked, and keep your eye on the air."
        },
        {
            q: "Before using an enriched air cylinder, each diver must analyze the contents to confirm the ________, so they can set their enriched air dive computers properly.",
            options: ["percentage of nitrogen", "cylinder pressure", "percentage of oxygen", "cylinder capacity"],
            answer: 2,
            feedback: "Nitrox Rule #1! 🧪 Analyze your own tank, every time."
        },
        {
            q: "True or False. If a dive computer fails between dives, the diver may continue diving if the diver can borrow a computer from a buddy.",
            options: ["True", "False"],
            answer: 1,
            feedback: "Computer Locked! 🔒 That second computer has no idea what you did on Dive 1."
        },
        {
            q: "True or False. The Haldanean decompression model is based on the concept that decompression sickness can be avoided by keeping the pressure gradient between dissolved nitrogen in the tissues and the surrounding pressure within acceptable limits.",
            options: ["True", "False"],
            answer: 0,
            feedback: "M-Values! 📉 Stay under the limit and stay bubbly-free."
        },
        {
            q: "Altitude diving procedures apply if using the RDP above ________.",
            options: ["300 metres or 1000 feet", "500 metres or 1500 feet", "2400 metres or 8000 feet", "3000 metres or 10,000 feet"],
            answer: 0,
            feedback: "Thin Air! 🏔️ Above 300m, everything changes."
        },
        {
            q: "After completing a single dive, flying after diving recommendations suggest that divers wait ________ hours before flying in a commercial jet airliner.",
            options: ["6", "10", "12", "24"],
            answer: 2,
            feedback: "Fly Safe! ✈️ 12 hours for a single, 18 for multiples."
        },
        {
            q: "If a diver exits the water in pressure group N, what would the diver's new pressure group be after a 45 minute surface interval?",
            options: ["D", "E", "F", "G"],
            answer: 1,
            feedback: "Wait & Watch! 📊 45 mins drops you from N to E."
        },
        {
            q: "A diver completes a 26 minute dive to 24 metres/80 feet and after waiting for 40 minutes on the surface makes a second dive to 17 metres/54 feet for 29 minutes. What is the diver’s pressure group after the second dive?",
            options: ["G", "U", "T", "L"],
            answer: 2,
            feedback: "Double Trouble! 🌊 Final Group T after the two dives and interval."
        },
        {
            q: "True or False. For the diver in the previous question, a safety stop would be required on both dives.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Stop Mandatory! 🛟 Deep and repetitive dives demand that stop."
        },
        {
            q: "What is the ending pressure group for the following three dive profile? Dive 1 – 22 m/74 ft for 23 minutes (SI – 41 minutes). Dive 2 – 15 m/46 ft for 35 minutes (SI – 34 minutes). Dive 3 – 12 m/39 ft for 62 minutes.",
            options: ["O", "K", "V", "W"],
            answer: 3,
            feedback: "The Grind! 🏊‍♂️ Results in Group W."
        },
        {
            q: "True or False. If the diver in the previous question wanted to do a fourth dive, the diver must have a minimum surface interval of at least one hour.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Clock Out! ⏳ 3+ dives or Group W means 1 hour SI min."
        },
        {
            q: "What is the no decompression limit for a dive to 20 m/62 ft?",
            options: ["40", "45", "50", "56"],
            answer: 1,
            feedback: "Table Limit! 📋 45 minutes is the max for 20m."
        },
        {
            q: "Divers on a live-aboard boat complete the following three dives in one day. What is their pressure group after the third dive? Dive 1 – 28 m/92 ft for 22 minutes (SI – 1 hour and 15 minutes). Dive 2 – 16 m/52 ft for 33 minutes (SI – 1 hour and 22 minutes). Dive 3 – 11 m/37 ft for 65 minutes.",
            options: ["R", "D", "T", "P"],
            answer: 1,
            feedback: "Ship Life! 🚢 Final group is D."
        },
        {
            q: "In the previous question, how many times did 'Safety Stop 3 min - See Rule 2' appear on your eRDPML?",
            options: ["0", "1", "2", "3"],
            answer: 3,
            feedback: "Rule Rule Rule! 🛑 Three rules, three stops."
        },
        {
            q: "For this multilevel dive, what is the maximum allowable time for the third level of the dive? Level 1 – 35 m/118 ft for 7 minutes. Level 2 – 17 m/55 ft for 15 minutes. Level 3 – 12 m/39 ft for ________.",
            options: ["25", "47", "79", "87"],
            answer: 2,
            feedback: "Allowance! 🎮 79 minutes left for that 12m leg."
        }
    ],
    Equipment: [
        {
            q: "What is the primary difference in base shape between a steel and an aluminum cylinder?",
            options: ["Steel is flat, Aluminum is round.", "Steel is round, Aluminum is flat/square.", "Both are flat.", "Both are round."],
            answer: 1,
            feedback: "Base Fact! 🏗️ Aluminum needs a flat base to stand, while steel is traditionally round-bottomed and uses a boot."
        },
        {
            q: "Which type of cylinder corrosion produces a 'white powder' (aluminum oxide) that is generally easier to clean?",
            options: ["Steel", "Aluminum", "Carbon Fiber", "Titanium"],
            answer: 1,
            feedback: "Powder Power! ⚪ Aluminum oxide is that white dust you see; steel gives you the much tougher red rust."
        },
        {
            q: "As an aluminum cylinder drops in pressure (gets emptier), what happens to its buoyancy?",
            options: ["It becomes less buoyant.", "It becomes more buoyant (floatier).", "Buoyancy remains unchanged.", "It sinks faster."],
            answer: 1,
            feedback: "The Floaty Finish! 🎈 Aluminum tanks get noticeably lighter and floatier as you breathe them down—plan your weights for this!"
        },
        {
            q: "Regarding cylinder markings, what does the acronym 'P.C.D.' stand for in a pre-fill check?",
            options: ["Pressure, Capacity, Date", "Piston, Cylinder, Diaphragm", "Point, Click, Done", "Partial, Constant, Density"],
            answer: 0,
            feedback: "Check your Stamps! 🔨 Pressure rating, internal Capacity, and the Hydro Date are the big three."
        },
        {
            q: "According to international practice, a Visual Inspection (VIP) of a scuba cylinder is required:",
            options: ["Every 5 years", "Every 2 years", "Once a year", "Only when the tank looks dirty"],
            answer: 2,
            feedback: "Yearly Eye-Ball! 👁️ A VIP must be done annually to catch internal corrosion before it's too late."
        },
        {
            q: "The primary goal of a Visual Inspection (VIP) is to check for:",
            options: ["External paint scratches", "Internal corrosion and thread damage", "The color of the O-ring", "The flexibility of the tank boot"],
            answer: 1,
            feedback: "Inside Story! 🕵️‍♂️ It's what's on the inside that counts—rust or thread cracks can be deadly."
        },
        {
            q: "What is the function of the regulator's first stage?",
            options: ["It reduces high tank pressure to intermediate pressure.", "It delivers air at ambient pressure to your mouth.", "It shows you the remaining air in the tank.", "It provides bubbles for better visibility."],
            answer: 0,
            feedback: "The Reducer! 📉 The 1st stage takes that 200+ bar and steps it down to a manageable 9-12 bar."
        },
        {
            q: "What is the typical 'Intermediate Pressure' delivered by a first stage to the hoses?",
            options: ["1-2 Bar", "9-12 Bar", "50-60 Bar", "200 Bar"],
            answer: 1,
            feedback: "Middle Ground! ↔️ 9 to 12 bar above ambient is the standard range for your hoses."
        },
        {
            q: "A 'Balanced' regulator design ensures that:",
            options: ["The regulator weighs the same on both sides.", "Breathing is consistent regardless of tank pressure or depth.", "The diver doesn't tip over underwater.", "Air only flows when you're upside down."],
            answer: 1,
            feedback: "Consistent Comfort! ⚖️ Balanced regs breathe just as easily at 10 bar as they do at 200 bar."
        },
        {
            q: "What is the purpose of an 'Environmental Seal' on a first stage?",
            options: ["To prevent fish from entering the regulator.", "To stop the regulator from freezing in very cold water.", "To make the regulator look more professional.", "To keep the tank from rusting."],
            answer: 1,
            feedback: "Anti-Freeze! ❄️ By sealing the internals with oil or silicone, we keep freezing water from jamming the valves."
        },
        {
            q: "In an 'Open Circuit' breathing system (standard recreational scuba):",
            options: ["100% of the gas is recycled.", "Exhaled bubbles are released into the water.", "CO2 is removed chemically.", "No bubbles are produced."],
            answer: 1,
            feedback: "Bubble Maker! 🫧 Open circuit means you breathe it once and let it go—0% recycled."
        },
        {
            q: "A 'Closed Circuit Rebreather' (CCR) is characterized by:",
            options: ["100% recycling of gas and zero bubbles.", "Needing a very large tank.", "Being much cheaper than open circuit.", "Only working in shallow water."],
            answer: 0,
            feedback: "The Stealth Rig! 🥷 CCR recycles everything and produces no bubbles, making you the ultimate underwater observer."
        },
        {
            q: "In a rebreather, what is the role of the 'Scrubber'?",
            options: ["To clean the outside of the unit.", "To chemically remove Carbon Dioxide (CO2) from the breathing loop.", "To add oxygen to the mix.", "To cool down the breathing gas."],
            answer: 1,
            feedback: "CO2 Filter! 🧪 The scrubber uses chemical granules to eat the CO2 you exhale."
        },
        {
            q: "Which depth gauge operates based on Boyle's Law and uses a simple clear tube?",
            options: ["Digital Transducer", "Capillary Gauge", "Bourdon Tube", "Diaphragm Gauge"],
            answer: 1,
            feedback: "Old School! 📏 Capillary gauges are simple and great for altitude, but hard to read deep."
        },
        {
            q: "A 'Bourdon Tube' gauge works by utilizing:",
            options: ["A battery-powered sensor.", "A spiral tube that straightens under pressure.", "A chemical reaction.", "A glass block that magnifies the needle."],
            answer: 1,
            feedback: "Curve to Straight! ➰ Pressure forces the curved tube to straighten, moving the needle."
        },
        {
            q: "Which gauge technology is a standard in modern dive computers and offers the highest accuracy?",
            options: ["Capillary", "Oil-filled Bourdon", "Digital Transducer", "Diaphragm"],
            answer: 2,
            feedback: "The Pro Choice! 💻 Transducers convert pressure to electricity for pinpoint accuracy."
        },
        {
            q: "What is the 'Golden Rule' of Enriched Air (Nitrox)?",
            options: ["Always dive as deep as possible.", "The Divemaster must analyze everyone's tank.", "Every diver must personally analyze their own cylinder's oxygen content.", "Only dive Nitrox on Tuesdays."],
            answer: 2,
            feedback: "Personal Duty! 🧪 You dive it, YOU analyze it. No exceptions!"
        },
        {
            q: "What is a major risk of a 'Bourdon Tube' gauge compared to an oil-filled one?",
            options: ["It's too heavy.", "It can clog because water enters the tube directly.", "The glass always breaks.", "It doesn't work in salt water."],
            answer: 1,
            feedback: "Clog Alert! ⚠️ Because water goes inside the tube, debris can jam the mechanism."
        },
        {
            q: "A regulator that free-flows when it malfunctions is using a ________ design.",
            options: ["Upstream", "Downstream / Fail-safe", "Manual override", "Closed circuit"],
            answer: 1,
            feedback: "Safe Fail! 🌬️ If the high-pressure seat fails, the valve is pushed OPEN, giving you air rather than cutting it off."
        },
        {
            q: "The 'Hydrostatic Test' measures a cylinder's ________ under pressure.",
            options: ["Color", "Weight", "Structural integrity and expansion", "Internal humidity"],
            answer: 2,
            feedback: "The Big Squeeze! 🥤 Hydro tests confirm the tank can handle the pressure without permanently stretching."
        },
        {
            q: "What type of regulator valve allows you to screw the first stage directly into the cylinder valve?",
            options: ["Yoke", "DIN", "K-valve", "J-valve"],
            answer: 1,
            feedback: "Screw It! 🔩 DIN (Deutsche Industrie Norm) is the threaded, high-pressure connection."
        },
        {
            q: "True or False. A near-drowning patient who seems recovered should still seek medical care because water in the lungs can cause issues hours later.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Stay Vigilant! 🚑 Secondary drowning is a real and dangerous threat."
        },
        {
            q: "Environmental seals on regulators are usually packed with:",
            options: ["Fresh water", "Sand", "Silicone grease or oil", "Compressed air"],
            answer: 2,
            feedback: "Liquid Shield! 🧴 Oil doesn't freeze and perfectly transmits outside pressure to the internals."
        },
        {
            q: "A 'Diaphragm' depth gauge works by:",
            options: ["Using air bubbles in a tube.", "Using a flexible plate connected to levers and gears.", "Analyzing light refraction.", "Measuring water conductivity."],
            answer: 1,
            feedback: "Mechanical Flex! ⚙️ The water pushes on a diaphragm, which moves the needle via a series of gears."
        },
        {
            q: "What does the 'Maximum Working Pressure' on a tank marking indicate?",
            options: ["The pressure at which the tank explodes.", "The maximum pressure the tank is rated to be filled to.", "The pressure at 40 meters depth.", "The pressure in the diver's lungs."],
            answer: 1,
            feedback: "Know the Limit! 🛑 Never overfill—respect the stamped working pressure."
        },
        {
            q: "The second stage of a regulator delivers air to the diver at:",
            options: ["Intermediate pressure", "Ambient (Absolute) pressure", "High pressure", "Zero pressure"],
            answer: 1,
            feedback: "Just Right! 👌 The second stage gives you air at exactly the pressure of the water around you."
        },
        {
            q: "Why should you analyze Nitrox before every dive?",
            options: ["To confirm the O2 percentage to set your computer correctly.", "To check for carbon monoxide.", "To see if the air smells good.", "To know how much nitrogen is in the tank."],
            answer: 0,
            feedback: "Precision! 🎯 Your computer needs the exact O2 mix to keep your decompression profile safe."
        },
        {
            q: "True or False. An unbalanced regulator becomes harder to breathe as tank pressure drops.",
            options: ["True", "False"],
            answer: 0,
            feedback: "Deep Breaths! 🌬️ As the 'oomph' from the tank drops, an unbalanced reg can't help as much, making pulls harder."
        },
        {
            q: "What is the recommended service interval for most modern regulators?",
            options: ["Every month", "Once a year or according to manufacturer specs", "Only when they stop working", "Once every 10 years"],
            answer: 1,
            feedback: "Service is Life! 🛠️ Don't skip the annual check-up to keep your lifeline in peak condition."
        },
        {
            q: "A 'Yoke' valve regulator is characterized by:",
            options: ["Being screwed into the tank.", "Being clamped onto the tank valve.", "Having 10 stages.", "Only working with Nitrox."],
            answer: 1,
            feedback: "The Clamp! 🗜️ Yoke is the classic recreational bridge-style connection."
        }
    ]
};
