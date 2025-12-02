// Initial vocabulary and idioms data
const INITIAL_DATA = [
    // Vocabulary (with simple meanings)
    { word: "Abundant", type: "vocabulary", meaning: "existing or available in large quantities; plentiful" },
    { word: "Resilient", type: "vocabulary", meaning: "able to recover quickly from difficulties" },
    { word: "Procrastination", type: "vocabulary", meaning: "the action of delaying or postponing something" },
    { word: "Persistence", type: "vocabulary", meaning: "continued effort despite difficulty; determination" },
    { word: "Harmonious", type: "vocabulary", meaning: "forming a pleasing or consistent whole" },
    { word: "Determination", type: "vocabulary", meaning: "firmness of purpose; resolve" },
    { word: "Gratitude", type: "vocabulary", meaning: "the feeling of being grateful or thankful" },
    { word: "Nowhere", type: "vocabulary", meaning: "not in or to any place" },
    { word: "Accountability", type: "vocabulary", meaning: "the requirement to accept responsibility for actions" },
    { word: "Adaptability", type: "vocabulary", meaning: "the ability to adjust to new conditions" },
    { word: "Thrive", type: "vocabulary", meaning: "to grow, develop, or be successful" },
    { word: "Abuse", type: "vocabulary", meaning: "cruel or violent treatment; to treat with cruelty" },
    { word: "Tidy", type: "vocabulary", meaning: "arranged neatly; to arrange in order" },
    { word: "Aggressive", type: "vocabulary", meaning: "ready or likely to attack; hostile in manner" },
    { word: "Regret", type: "vocabulary", meaning: "to feel sorry about something; sorrow or disappointment" },
    { word: "Precise", type: "vocabulary", meaning: "marked by accuracy; exact and clear" },
    { word: "Rigid", type: "vocabulary", meaning: "unable to bend or be flexible; strict" },
    { word: "Stubborn", type: "vocabulary", meaning: "determined not to change opinion; obstinate" },
    { word: "Anxious", type: "vocabulary", meaning: "experiencing worry or fear; nervous" },
    { word: "Ridiculous", type: "vocabulary", meaning: "worthy of or causing laughter; absurd" },
    { word: "Obvious", type: "vocabulary", meaning: "easily noticed or understood; clear" },
    { word: "Despite", type: "vocabulary", meaning: "without being affected by; in spite of" },
    { word: "Obligation", type: "vocabulary", meaning: "a duty or commitment; something owed" },
    { word: "Vulnerabilities", type: "vocabulary", meaning: "qualities that expose one to being hurt or attacked" },
    { word: "Infiltrate", type: "vocabulary", meaning: "to gradually enter or penetrate; to seep in" },
    { word: "Defeated", type: "vocabulary", meaning: "beaten in a contest; overcome" },
    { word: "Conferred", type: "vocabulary", meaning: "discussed something; had a conversation" },
    { word: "Awareness", type: "vocabulary", meaning: "knowledge or perception of a fact; consciousness" },
    { word: "Contrast", type: "vocabulary", meaning: "the state of being strikingly different; to compare" },
    { word: "Comply", type: "vocabulary", meaning: "to act in accordance with a rule or wish" },
    { word: "Attrition", type: "vocabulary", meaning: "reduction in numbers by departure or resignation" },
    { word: "Acquainted", type: "vocabulary", meaning: "familiar with; having knowledge of" },
    { word: "Align", type: "vocabulary", meaning: "to place in a straight line; to agree with" },
    { word: "Insist", type: "vocabulary", meaning: "to demand forcefully; to assert firmly" },
    { word: "Phishing", type: "vocabulary", meaning: "deceptive attempt to get sensitive information online" },
    { word: "Peer", type: "vocabulary", meaning: "a person of equal standing; to look closely" },
    { word: "Worship", type: "vocabulary", meaning: "to show reverence; to honor as divine" },
    { word: "Lasting", type: "vocabulary", meaning: "enduring or able to last; permanent" },
    { word: "Weird", type: "vocabulary", meaning: "strange or unusual; bizarre" },
    { word: "Trait", type: "vocabulary", meaning: "a characteristic feature; a distinguishing quality" },
    { word: "Annoy", type: "vocabulary", meaning: "to irritate or make slightly angry" },
    { word: "Milestone", type: "vocabulary", meaning: "a significant point in development; a landmark" },
    { word: "Critical", type: "vocabulary", meaning: "expressing disapproval; at a crucial point" },
    { word: "Adversity", type: "vocabulary", meaning: "difficult or unfortunate situation; hardship" },
    { word: "Authentic", type: "vocabulary", meaning: "genuine and true; not false or imitation" },
    { word: "Beyond", type: "vocabulary", meaning: "on the far side of; further than" },
    { word: "Firmly", type: "vocabulary", meaning: "in a stable manner; with determination" },
    { word: "Poverty", type: "vocabulary", meaning: "the state of being extremely poor" },
    { word: "Greedy", type: "vocabulary", meaning: "wanting to have excessive wealth; selfish" },
    { word: "Adventure", type: "vocabulary", meaning: "an exciting and daring experience; a journey" },
    { word: "Swarthy", type: "vocabulary", meaning: "dark-skinned; having a dark complexion" },
    { word: "Kindness", type: "vocabulary", meaning: "the quality of being kind; gentleness" },
    { word: "Enduring", type: "vocabulary", meaning: "lasting for a long time; permanent" },
    { word: "Confide", type: "vocabulary", meaning: "to tell someone a secret; to trust with information" },
    { word: "Perhaps", type: "vocabulary", meaning: "possibly; maybe; used to express uncertainty" },
    { word: "Breakthrough", type: "vocabulary", meaning: "a sudden important discovery or development" },
    { word: "Tweak", type: "vocabulary", meaning: "to adjust slightly; a small change" },
    { word: "Arrival", type: "vocabulary", meaning: "the act of arriving; reaching a destination" },
    { word: "Emphasizes", type: "vocabulary", meaning: "gives special importance or prominence to" },
    { word: "Catering", type: "vocabulary", meaning: "providing food and drinks; meeting needs" },
    { word: "Drift", type: "vocabulary", meaning: "to move slowly or be carried along; to wander" },
    { word: "Chubby", type: "vocabulary", meaning: "somewhat fat; plump or round" },
    { word: "Suppressed", type: "vocabulary", meaning: "forcibly prevented from occurring; restrained" },
    { word: "Arrogant", type: "vocabulary", meaning: "excessively proud; overbearingly superior" },
    { word: "Stale", type: "vocabulary", meaning: "no longer fresh; old and not interesting" },
    { word: "Hiking", type: "vocabulary", meaning: "taking a long walk in the countryside" },
    { word: "Departure", type: "vocabulary", meaning: "leaving or going away from a place" },
    { word: "Predominantly", type: "vocabulary", meaning: "mainly; for the most part; largely" },
    { word: "Pop", type: "vocabulary", meaning: "to burst or make a sudden sound; to appear suddenly" },
    { word: "Garrulous", type: "vocabulary", meaning: "talking excessively; talkative" },
    { word: "Spark", type: "vocabulary", meaning: "a small particle of fire; to trigger or inspire" },
    { word: "Yawn", type: "vocabulary", meaning: "to open mouth wide when tired; to be dull" },
    { word: "Pretend", type: "vocabulary", meaning: "to behave as if something is true when it is not" },
    { word: "Indolent", type: "vocabulary", meaning: "lazy; showing lack of effort" },
    { word: "Self-conscious", type: "vocabulary", meaning: "embarrassed about appearance; awkwardly aware" },
    { word: "Meticulous", type: "vocabulary", meaning: "showing great attention to detail; very careful" },
    { word: "Stout", type: "vocabulary", meaning: "strong and thick; fat or bulky" },
    { word: "Lanky", type: "vocabulary", meaning: "ungracefully tall and thin; long-limbed" },
    { word: "Bashful", type: "vocabulary", meaning: "shy and easily embarrassed" },
    { word: "Hefty", type: "vocabulary", meaning: "large and heavy; substantial in amount" },
    { word: "Chicken-hearted", type: "vocabulary", meaning: "cowardly; lacking courage" },
    { word: "Lionhearted", type: "vocabulary", meaning: "brave and courageous; very bold" },
    { word: "Spendthrift", type: "vocabulary", meaning: "a person who spends money excessively" },
    { word: "Potholes", type: "vocabulary", meaning: "holes in roads; dangerous depressions" },
    { word: "Puddles", type: "vocabulary", meaning: "small pools of water on ground" },
    { word: "Candid", type: "vocabulary", meaning: "honest and frank in expression" },
    { word: "Clout", type: "vocabulary", meaning: "power or influence; a heavy blow" },
    { word: "Tattle", type: "vocabulary", meaning: "to gossip or tell tales; to inform on someone" },
    { word: "Affluent", type: "vocabulary", meaning: "having money; wealthy and rich" },
    { word: "Conscious", type: "vocabulary", meaning: "aware of surroundings; intentional" },
    { word: "Frugal", type: "vocabulary", meaning: "economical with money; thrifty" },
    { word: "Dilemma", type: "vocabulary", meaning: "a situation requiring difficult choice; a problem" },
    { word: "Consensus", type: "vocabulary", meaning: "general agreement; common opinion" },
    { word: "Submissive", type: "vocabulary", meaning: "inclined to obey; not resisting authority" },
    { word: "Spooky", type: "vocabulary", meaning: "ghostly or frightening; eerie" },
    { word: "Aloof", type: "vocabulary", meaning: "distant and detached; emotionally distant" },
    { word: "Cacophony", type: "vocabulary", meaning: "harsh and discordant sound; noise" },
    { word: "Amicable", type: "vocabulary", meaning: "peaceful and friendly; without hostility" },
    { word: "Pudgy", type: "vocabulary", meaning: "fat or chubby; having soft roundness" },
    { word: "Ambiguous", type: "vocabulary", meaning: "open to more than one interpretation; unclear" },
    { word: "Docile", type: "vocabulary", meaning: "obedient and easy to teach; gentle" },
    { word: "Extravagant", type: "vocabulary", meaning: "spending much more than necessary; wasteful" },
    { word: "Ample", type: "vocabulary", meaning: "enough or more than enough; plentiful" },
    { word: "Tickle", type: "vocabulary", meaning: "to touch lightly causing laughter; to amuse" },
    { word: "Pandemonium", type: "vocabulary", meaning: "wild chaos and confusion; uproar" },
    { word: "Scribble", type: "vocabulary", meaning: "to write carelessly; rough writing or drawing" },
    { word: "Dentures", type: "vocabulary", meaning: "artificial teeth; false teeth" },
    { word: "Peeped", type: "vocabulary", meaning: "looked quickly or secretly; peered" },
    { word: "Shabby", type: "vocabulary", meaning: "worn and in poor condition; shabby" },
    { word: "Dally", type: "vocabulary", meaning: "to waste time; to flirt or play" },
    { word: "Rot", type: "vocabulary", meaning: "to decay; decaying matter" },
    { word: "Ponder", type: "vocabulary", meaning: "to think carefully about; to consider" },
    { word: "Succumb", type: "vocabulary", meaning: "to give in; to be overcome by" },
    { word: "Engrossed", type: "vocabulary", meaning: "completely fascinated; deeply absorbed" },
    { word: "Leisure", type: "vocabulary", meaning: "free time; time for rest and recreation" },
    { word: "Nudge", type: "vocabulary", meaning: "to push gently; a gentle push" },
    { word: "Stagger", type: "vocabulary", meaning: "to walk unsteadily; to shock or surprise greatly" },
    { word: "Exhausting", type: "vocabulary", meaning: "very tiring; causing complete tiredness" },
    { word: "Embezzle", type: "vocabulary", meaning: "to steal money entrusted to one" },
    { word: "Stingy", type: "vocabulary", meaning: "unwilling to spend; miserly" },
    { word: "Abandon", type: "vocabulary", meaning: "to leave someone; to give up completely" },
    { word: "Abscond", type: "vocabulary", meaning: "to leave secretly; to flee" },
    { word: "Admonish", type: "vocabulary", meaning: "to warn or scold firmly; to reprimand" },
    { word: "Appease", type: "vocabulary", meaning: "to pacify; to satisfy or calm" },
    { word: "Faintest", type: "vocabulary", meaning: "most weak or dim; least distinct" },
    { word: "Endeavour", type: "vocabulary", meaning: "to try hard; an attempt or effort" },
    { word: "Expedite", type: "vocabulary", meaning: "to speed up; to make faster" },
    { word: "Pedestrian", type: "vocabulary", meaning: "a person on foot; ordinary and dull" },
    { word: "Snob", type: "vocabulary", meaning: "a person who despises others; elitist" },
    { word: "Flaunt", type: "vocabulary", meaning: "to display ostentatiously; to show off" },
    { word: "Vice", type: "vocabulary", meaning: "immoral behavior; a bad habit; a clamping tool" },
    { word: "Drool", type: "vocabulary", meaning: "to let saliva flow from mouth; to dribble" },
    { word: "Encore", type: "vocabulary", meaning: "a repeated performance; again or once more" },
    { word: "Imitate", type: "vocabulary", meaning: "to copy; to mimic or reproduce" },
    { word: "Aggravate", type: "vocabulary", meaning: "to make worse; to annoy" },
    { word: "Alms", type: "vocabulary", meaning: "money given to poor people; charity" },
    { word: "Superfluous", type: "vocabulary", meaning: "more than needed; unnecessary" },
    { word: "Opulent", type: "vocabulary", meaning: "rich and luxurious; very expensive" },
    { word: "Explode", type: "vocabulary", meaning: "to burst violently; to increase suddenly" },
    { word: "Penury", type: "vocabulary", meaning: "extreme poverty; lack of money" },
    { word: "Self-esteem", type: "vocabulary", meaning: "confidence in one's own worth; self-respect" },
    { word: "Absorb", type: "vocabulary", meaning: "to take in; to be deeply interested in" },
    { word: "Sycophant", type: "vocabulary", meaning: "a person who flatters insincerely; a flatterer" },
    { word: "Gregarious", type: "vocabulary", meaning: "fond of being with others; social" },
    { word: "Glib", type: "vocabulary", meaning: "fluent but insincere; smooth-talking" },
    { word: "Peek", type: "vocabulary", meaning: "to look quickly; a quick glance" },
    { word: "Eloquent", type: "vocabulary", meaning: "fluent and expressive; well-spoken" },
    { word: "Scrutinize", type: "vocabulary", meaning: "to examine closely; to inspect carefully" },
    { word: "Enhance", type: "vocabulary", meaning: "to improve or increase; to make better" },
    { word: "Protagonist", type: "vocabulary", meaning: "main character; the leading person" },
    { word: "Snore", type: "vocabulary", meaning: "to breathe noisily while sleeping; loud sleep sound" },
    { word: "Conviction", type: "vocabulary", meaning: "firm belief; being found guilty" },
    { word: "Empowerment", type: "vocabulary", meaning: "giving power and confidence; enabling" },
    { word: "Grit", type: "vocabulary", meaning: "courage and resolve; fine particles" },
    { word: "Optimistic", type: "vocabulary", meaning: "hopeful and positive; expecting good outcomes" },
    { word: "Anticipate", type: "vocabulary", meaning: "to expect or predict; to foresee" },
    { word: "Humility", type: "vocabulary", meaning: "humble or modest attitude; absence of pride" },
    { word: "Credibility", type: "vocabulary", meaning: "the quality of being trusted; believability" },
    { word: "Overwhelmed", type: "vocabulary", meaning: "deeply affected or moved; overpowered" },
    { word: "Chore", type: "vocabulary", meaning: "a routine task; boring piece of work" },
    { word: "Obscure", type: "vocabulary", meaning: "unclear; not well-known; to make unclear" },
    { word: "Wandered", type: "vocabulary", meaning: "walked aimlessly; moved without fixed course" },
    { word: "Stormed off", type: "vocabulary", meaning: "left angrily and dramatically" },
    { word: "Perceive", type: "vocabulary", meaning: "to notice; to become aware of" },
    { word: "Impact", type: "vocabulary", meaning: "a strong effect; to hit or collide" },
    { word: "Intention", type: "vocabulary", meaning: "what someone plans to do; purpose or aim" },
    { word: "Open-mindedness", type: "vocabulary", meaning: "willingness to consider new ideas" },
    { word: "Resourcefulness", type: "vocabulary", meaning: "ability to handle difficult situations" },
    { word: "Diligent", type: "vocabulary", meaning: "showing careful effort; very hardworking" },
    { word: "Pacify", type: "vocabulary", meaning: "to calm or soothe; to make peaceful" },
    { word: "Impartial", type: "vocabulary", meaning: "treating all equally; fair and unbiased" },
    { word: "Rebuke", type: "vocabulary", meaning: "to criticize sharply; to scold or reprimand" },
    { word: "Malleable", type: "vocabulary", meaning: "capable of being shaped; flexible" },
    { word: "Obstacles", type: "vocabulary", meaning: "barriers; things blocking the way" },
    { word: "Ingenuous", type: "vocabulary", meaning: "honest and straightforward; naive" },
    { word: "Integrity", type: "vocabulary", meaning: "honesty and moral principles; wholeness" },
    { word: "Charisma", type: "vocabulary", meaning: "compelling attractiveness; charm and appeal" },
    { word: "Mandate", type: "vocabulary", meaning: "authority to act; a command or order" },
    { word: "Dubious", type: "vocabulary", meaning: "questionable; doubtful or suspect" },
    { word: "Eminent", type: "vocabulary", meaning: "respected and prominent; outstanding" },
    { word: "Fade", type: "vocabulary", meaning: "to gradually disappear; to lose color" },
    { word: "Sore", type: "vocabulary", meaning: "painful; angry and annoyed" },
    { word: "Privileged", type: "vocabulary", meaning: "having special advantages; favored" },
    { word: "Allegation", type: "vocabulary", meaning: "a claim or assertion; an accusation" },
    { word: "Skimming", type: "vocabulary", meaning: "reading quickly; removing from surface" },
    { word: "Fragile", type: "vocabulary", meaning: "easily broken; delicate or weak" },
    { word: "Tactfully", type: "vocabulary", meaning: "with sensitivity; diplomatically" },
    { word: "Courtesy", type: "vocabulary", meaning: "politeness and respect; good manners" },
    { word: "Relish", type: "vocabulary", meaning: "to enjoy greatly; a condiment or spice" },
    { word: "Competence", type: "vocabulary", meaning: "ability to do something well; skill" },
    { word: "Rejuvenated", type: "vocabulary", meaning: "given new energy; restored to youth" },
    { word: "Generosity", type: "vocabulary", meaning: "willingness to give; liberal giving" },
    { word: "Craving", type: "vocabulary", meaning: "a strong desire for something; longing" },
    { word: "Aspiration", type: "vocabulary", meaning: "a hope or ambition; a strong desire" },
    { word: "Hunger", type: "vocabulary", meaning: "a strong desire; the need for food" },
    { word: "Awful", type: "vocabulary", meaning: "very bad; causing fear or shock" },
    { word: "Awkward", type: "vocabulary", meaning: "uncomfortable; clumsy or ungraceful" },
    { word: "Embarrassing", type: "vocabulary", meaning: "causing shame or embarrassment; mortifying" },
    { word: "Ace", type: "vocabulary", meaning: "excellent; very skilled person; a playing card" },
    { word: "Criticism", type: "vocabulary", meaning: "expression of disapproval; analysis and judgment" },
    { word: "Protester", type: "vocabulary", meaning: "a person who objects or demonstrates" },
    { word: "Resistance", type: "vocabulary", meaning: "opposition; the refusal to accept something" },
    { word: "Distinguishing", type: "vocabulary", meaning: "serving to make someone famous; characteristic" },
    { word: "Resentment", type: "vocabulary", meaning: "bitter displeasure; anger at perceived harm" },
    { word: "Detached", type: "vocabulary", meaning: "separated; emotionally distant or indifferent" },
    { word: "Sacred", type: "vocabulary", meaning: "holy and worthy of respect; divine" },
    { word: "Isolate", type: "vocabulary", meaning: "to set apart; to place alone" },
    { word: "Striving", type: "vocabulary", meaning: "trying hard; making great effort" },
    { word: "Robbed", type: "vocabulary", meaning: "stolen from; deprived of something" },
    { word: "Misery", type: "vocabulary", meaning: "great suffering; extreme unhappiness" },
    { word: "Steal", type: "vocabulary", meaning: "to take without permission; to move secretly" },
    { word: "Profound", type: "vocabulary", meaning: "very deep; showing great knowledge" },
    { word: "Tragic", type: "vocabulary", meaning: "very sad; causing death or suffering" },
    { word: "Messy", type: "vocabulary", meaning: "dirty and disorganized; complicated" },
    { word: "Reiterate", type: "vocabulary", meaning: "to repeat; to say again for emphasis" },
    { word: "Toxic", type: "vocabulary", meaning: "poisonous; harmful or unpleasant" },
    { word: "Stifling", type: "vocabulary", meaning: "very hot and airless; oppressive" },
    { word: "Clandestine", type: "vocabulary", meaning: "secret; done secretly" },
    { word: "Vicarious", type: "vocabulary", meaning: "experienced through someone else; indirect" },
    { word: "Rebellion", type: "vocabulary", meaning: "resistance to authority; an uprising" },
    { word: "Allegiance", type: "vocabulary", meaning: "loyalty and support; devotion" },
    { word: "Brevity", type: "vocabulary", meaning: "shortness of duration; conciseness" },
    { word: "Cavity", type: "vocabulary", meaning: "a hollow space; a decayed tooth hole" },
    { word: "Disgruntled", type: "vocabulary", meaning: "dissatisfied and annoyed; unhappy" },
    { word: "Crafty", type: "vocabulary", meaning: "clever and cunning; skillful" },
    { word: "Hinders", type: "vocabulary", meaning: "creates problems; obstructs or impedes" },
    { word: "Obstruct", type: "vocabulary", meaning: "to block; to prevent from proceeding" },
    { word: "Wisdom", type: "vocabulary", meaning: "deep understanding; good judgment" },
    { word: "Savvy", type: "vocabulary", meaning: "practical knowledge; shrewd and knowledgeable" },
    { word: "Benchmark", type: "vocabulary", meaning: "a standard for comparison; a measure" },
    { word: "Render", type: "vocabulary", meaning: "to provide; to give or present" },
    { word: "Whisper", type: "vocabulary", meaning: "to speak softly; a soft quiet sound" },
    { word: "Nervous", type: "vocabulary", meaning: "anxious or worried; easily alarmed" },
    { word: "Compassion", type: "vocabulary", meaning: "sympathy; concern for others' suffering" },
    { word: "Fortitude", type: "vocabulary", meaning: "strength and courage; resolute determination" },
    { word: "Gratification", type: "vocabulary", meaning: "pleasure or satisfaction; a reward" },
    { word: "Accelerate", type: "vocabulary", meaning: "to go faster; to increase speed" },
    { word: "Hop", type: "vocabulary", meaning: "to jump on one foot; a quick jump" },
    { word: "Glimpse", type: "vocabulary", meaning: "a brief look; to catch sight of" },
    { word: "Reluctant", type: "vocabulary", meaning: "unwilling; showing dislike or hesitation" },
    { word: "Hover", type: "vocabulary", meaning: "to remain suspended; to linger near" },
    { word: "Substantiate", type: "vocabulary", meaning: "to provide evidence for; to prove" },
    { word: "Articulate", type: "vocabulary", meaning: "clear in speech; to express clearly" },
    { word: "Assess", type: "vocabulary", meaning: "to evaluate or judge; to estimate" },
    { word: "Comprehend", type: "vocabulary", meaning: "to understand; to grasp mentally" },
    { word: "Evolve", type: "vocabulary", meaning: "to develop gradually; to change over time" },
    { word: "Facilitate", type: "vocabulary", meaning: "to make easier; to help progress" },
    { word: "Spirituality", type: "vocabulary", meaning: "religious or spiritual quality; faith" },
    { word: "Incorporate", type: "vocabulary", meaning: "to include as part of; to unite with" },
    { word: "Embark", type: "vocabulary", meaning: "to begin a journey; to start an undertaking" },
    { word: "Frown", type: "vocabulary", meaning: "to furrow brows in disapproval; look displeased" },
    { word: "Envision", type: "vocabulary", meaning: "to imagine or visualize; to picture mentally" },
    { word: "Prowl", type: "vocabulary", meaning: "to move stealthily; to sneak around" },
    { word: "Crawl", type: "vocabulary", meaning: "to move on hands and knees; to move slowly" },
    { word: "Confront", type: "vocabulary", meaning: "to face boldly; to challenge someone" },
    { word: "Inculcate", type: "vocabulary", meaning: "to teach or instill; to impress on mind" },
    { word: "Hesitate", type: "vocabulary", meaning: "to pause uncertainly; to show reluctance" },
    { word: "Adore", type: "vocabulary", meaning: "to love deeply; to worship or revere" },
    { word: "Enlightenment", type: "vocabulary", meaning: "understanding and knowledge; spiritual awakening" },
    { word: "Cling", type: "vocabulary", meaning: "to hold tightly; to stick to" },
    { word: "Tolerate", type: "vocabulary", meaning: "to allow or endure; to accept" },
    { word: "Puzzled", type: "vocabulary", meaning: "confused; unable to understand" },
    { word: "Hitchhike", type: "vocabulary", meaning: "to travel by getting rides from strangers" },
    { word: "Superstition", type: "vocabulary", meaning: "belief in luck or magic; unfounded belief" },
    { word: "Bitter", type: "vocabulary", meaning: "having sharp taste; angry and resentful" },
    { word: "Wrap", type: "vocabulary", meaning: "to cover or enclose; to wind around" },
    { word: "Drown", type: "vocabulary", meaning: "to die in water; to cover with liquid" },
    { word: "Drench", type: "vocabulary", meaning: "to soak thoroughly; to wet completely" },
    { word: "Soak", type: "vocabulary", meaning: "to immerse in liquid; to absorb" },
    { word: "Heal", type: "vocabulary", meaning: "to make healthy; to recover from injury" },
    { word: "Freeze", type: "vocabulary", meaning: "to turn to ice; to become very cold" },
    { word: "Chew", type: "vocabulary", meaning: "to bite and grind with teeth; to masticate" },
    { word: "Swallow", type: "vocabulary", meaning: "to take down throat; a type of bird" },
    { word: "Auspicious", type: "vocabulary", meaning: "favorable; showing signs of success" },
    { word: "Segregate", type: "vocabulary", meaning: "to separate or isolate; to divide" },
    { word: "Earlier", type: "vocabulary", meaning: "at a time before; prior to" },
    { word: "Wound", type: "vocabulary", meaning: "an injury; to injure or hurt" },
    { word: "Wind", type: "vocabulary", meaning: "moving air; to coil or twist" },
    { word: "Disruption", type: "vocabulary", meaning: "disturbance; interruption of normal progress" },
    { word: "Riot", type: "vocabulary", meaning: "violent public disturbance; riotous behavior" },
    { word: "Tantrum", type: "vocabulary", meaning: "an emotional outburst; a fit of anger" },
    
    // Idioms
    { word: "In hot water", type: "idiom", meaning: "in trouble or facing consequences" },
    { word: "On cloud nine", type: "idiom", meaning: "extremely happy; in a state of bliss" },
    { word: "Sit tight", type: "idiom", meaning: "to wait patiently; to remain in place" },
    { word: "Break the ice", type: "idiom", meaning: "to initiate conversation in awkward situation" },
    { word: "Hit the sack", type: "idiom", meaning: "to go to bed; to sleep" },
    { word: "Piece of cake", type: "idiom", meaning: "something very easy to do" },
    { word: "Once in a blue moon", type: "idiom", meaning: "very rarely; almost never" },
    { word: "Hit the books", type: "idiom", meaning: "to study hard; to start studying" },
    { word: "Call it a day", type: "idiom", meaning: "to stop working and go home" },
    { word: "It's not my cup of tea", type: "idiom", meaning: "not something one enjoys or prefers" },
    { word: "Spill the beans", type: "idiom", meaning: "to reveal a secret; to tell the truth" },
    { word: "Pull someone's leg", type: "idiom", meaning: "to tease or joke with someone" },
    { word: "Cold feet", type: "idiom", meaning: "sudden loss of courage; doubt before commitment" },
    { word: "Under the weather", type: "idiom", meaning: "feeling sick or unwell" },
    { word: "Easy as ABC", type: "idiom", meaning: "very simple and easy to do" },
    { word: "Time flies", type: "idiom", meaning: "time passes quickly" },
    { word: "Take it easy", type: "idiom", meaning: "to relax; to not worry" },
    { word: "No pain, no gain", type: "idiom", meaning: "you must work hard to achieve results" },
    { word: "Miss the boat", type: "idiom", meaning: "to lose an opportunity; to be too late" },
    { word: "Burn the midnight oil", type: "idiom", meaning: "to work very late; to study hard" },
    { word: "Back to the drawing board", type: "idiom", meaning: "to start again from beginning" },
    { word: "Cry over spilled milk", type: "idiom", meaning: "to regret something done; pointless worry" },
    { word: "Cut corners", type: "idiom", meaning: "to do something poorly to save time or money" },
    { word: "I am down for that", type: "idiom", meaning: "I agree or willing to participate" },
    { word: "That's so lit", type: "idiom", meaning: "that's so cool or awesome" },
    { word: "In the same boat", type: "idiom", meaning: "facing the same situation or problem" },
    { word: "Jump the gun", type: "idiom", meaning: "to act too soon; to start early" },
    { word: "The ball is in your court", type: "idiom", meaning: "it is your turn to act; your responsibility" },
    { word: "Up in the air", type: "idiom", meaning: "uncertain; still to be decided" },
    { word: "A dime a dozen", type: "idiom", meaning: "very common; not rare or special" },
    { word: "A storm in a teacup", type: "idiom", meaning: "a big fuss over something minor" },
    { word: "All ears", type: "idiom", meaning: "listening attentively; eager to hear" },
    { word: "Throw in the towel", type: "idiom", meaning: "to give up or quit" },
    { word: "Break the bank", type: "idiom", meaning: "to spend a lot of money" },
    { word: "Out of the blue", type: "idiom", meaning: "suddenly; unexpectedly" },
    { word: "Shoot the breeze", type: "idiom", meaning: "to have a casual conversation" },
    { word: "Hang in there", type: "idiom", meaning: "to persevere; to not give up" },
    { word: "Bite your tongue", type: "idiom", meaning: "to keep from speaking; restrain from comment" },
    { word: "Face the music", type: "idiom", meaning: "to accept consequences; to confront situation" },
    { word: "In the blink of an eye", type: "idiom", meaning: "very quickly; instantly" },
    { word: "In a nutshell", type: "idiom", meaning: "in brief; concisely" },
    { word: "Keep your fingers crossed", type: "idiom", meaning: "to hope for good luck" },
    { word: "Under your nose", type: "idiom", meaning: "right in front of you; very obvious" },
    { word: "Out of hand", type: "idiom", meaning: "out of control; no longer manageable" },
    { word: "Cost an arm and a leg", type: "idiom", meaning: "to be very expensive" },
    { word: "Blow off steam", type: "idiom", meaning: "to release stress; to have fun" },
    { word: "Go the extra mile", type: "idiom", meaning: "to make a special effort; do more than expected" },
    { word: "By the book", type: "idiom", meaning: "strictly following rules; as per guidelines" },
    { word: "Out of the woods", type: "idiom", meaning: "out of danger or difficulty" },
    { word: "Let your hair down", type: "idiom", meaning: "to relax; to have fun without worry" },
    { word: "On the same page", type: "idiom", meaning: "sharing the same opinion or understanding" },
    { word: "Break a leg", type: "idiom", meaning: "good luck; do your best" },
    { word: "Have a lot on your plate", type: "idiom", meaning: "to be very busy; to have many responsibilities" },
    { word: "Put all your eggs in one basket", type: "idiom", meaning: "to risk everything on one option" },
    { word: "Kick the bucket", type: "idiom", meaning: "to die" },
    { word: "In hot seat", type: "idiom", meaning: "in trouble; in a difficult position" },
    { word: "Break the news", type: "idiom", meaning: "to tell someone important or bad information" },
    { word: "Hit the nail on the head", type: "idiom", meaning: "to be exactly right; to identify problem correctly" },
    { word: "Keep your chin up", type: "idiom", meaning: "to stay positive; to remain courageous" }
];

// Grammar rules and lists used across validation functions
const GRAMMAR = {
    uncountableNouns: new Set([
        'knowledge','advice','money','information','furniture','equipment','research','happiness','love','bread','water','rice','luggage','traffic','homework','work'
    ]),
    adjectives: new Set(['abundant','resilient','grateful','aware','tough','hard','difficult','strong','weak','critical','fragile','meticulous']),
    collocations: [
        { pattern: /\bstart\s+business\b/i, suggestion: 'start a business' },
        { pattern: /\bto\s+start\s+business\b/i, suggestion: 'to start a business' }
    ]
};

// Main Application
const app = {
    currentTab: 'meaning-practice',
    stats: {
        correct: 0,
        incorrect: 0
    },
    vocab: [],
    currentIndexes: {
        meaning: 0,
        guess: 0,
        sentence: 0
    },
    filterType: 'all',

    // Initialize the app
    init() {
        this.loadFromStorage();
        this.setupEventListeners();
        this.updateStats();
        this.loadMeaning();
        this.loadGuess();
        this.loadSentence();
        this.displayVocabList();
    },

    // Setup tab navigation
    setupEventListeners() {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });
    },

    // Switch between tabs
    switchTab(tabName) {
        // Hide all tabs
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });

        // Deactivate all buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // Show selected tab
        document.getElementById(tabName).classList.add('active');

        // Activate selected button
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        this.currentTab = tabName;
    },

    // Load data from localStorage
    loadFromStorage() {
        const stored = localStorage.getItem('vocab-app-data');
        const storedStats = localStorage.getItem('vocab-app-stats');

        if (stored) {
            this.vocab = JSON.parse(stored);
        } else {
            // First time - load initial data
            this.vocab = INITIAL_DATA.map((item, index) => ({
                ...item,
                id: Date.now() + index
            }));
            this.saveToStorage();
        }

        if (storedStats) {
            this.stats = JSON.parse(storedStats);
        }
    },

    // Save data to localStorage
    saveToStorage() {
        localStorage.setItem('vocab-app-data', JSON.stringify(this.vocab));
        localStorage.setItem('vocab-app-stats', JSON.stringify(this.stats));
    },

    // Update statistics display
    updateStats() {
        document.getElementById('correctCount').textContent = this.stats.correct;
        document.getElementById('incorrectCount').textContent = this.stats.incorrect;
    },

    // ==================== MODE 1: MEANING PRACTICE ====================
    loadMeaning() {
        if (this.vocab.length === 0) {
            document.getElementById('meaningWord').textContent = 'No words loaded';
            return;
        }

        const word = this.vocab[this.currentIndexes.meaning];
        document.getElementById('meaningWord').textContent = word.word;
        document.getElementById('meaningInput').value = '';
        document.getElementById('meaningFeedback').textContent = '';
        document.getElementById('meaningFeedback').classList.remove('show', 'correct', 'incorrect');
        document.getElementById('meaningProgress').textContent = `Word ${this.currentIndexes.meaning + 1} of ${this.vocab.length}`;
    },

    checkMeaning() {
        const userMeaning = document.getElementById('meaningInput').value.trim().toLowerCase();
        const feedback = document.getElementById('meaningFeedback');
        const word = this.vocab[this.currentIndexes.meaning];

        if (!userMeaning) {
            feedback.innerHTML = '⚠ Please enter a meaning';
            feedback.classList.add('show', 'incorrect');
            return;
        }

        // Check if user entered a sentence instead of a meaning
        if (userMeaning.includes(' ' + word.word.toLowerCase()) || 
            userMeaning.includes(word.word.toLowerCase() + ' ')) {
            // User likely entered a sentence, not a meaning definition
            let errorMessage = `⚠ <strong>Please enter a MEANING, not a sentence.</strong><br><br>`;
            
            // Check for specific grammar errors
            if (userMeaning.includes('an ' + word.word.toLowerCase())) {
                errorMessage += `<strong>Grammar error found:</strong> Don't use "an" before "${word.word}" - it's an adjective, not a countable noun.<br><br>`;
                errorMessage += `Quick rule:<br>`;
                errorMessage += `• Use "an" with countable nouns: an idea, an apple<br>`;
                errorMessage += `• Don't use it with uncountable nouns: knowledge, advice, money<br><br>`;
            }
            
            errorMessage += `For example, enter a MEANING like:<br>• "plentiful"<br>• "existing in large quantities"<br>• "available in abundance"<br><br>`;
            errorMessage += `<strong>Correct meaning:</strong> ${word.meaning}`;
            
            feedback.innerHTML = errorMessage;
            feedback.classList.add('show', 'incorrect');
            this.stats.incorrect++;
            this.updateStats();
            this.saveToStorage();
            return;
        }

        // Check if user's meaning contains key words from actual meaning
        const actualMeaning = word.meaning.toLowerCase();
        const userWords = userMeaning.split(/\s+/);
        const actualWords = actualMeaning.split(/\s+/);

        // Filter out common words that don't add meaning
        const commonWords = ['the', 'a', 'an', 'and', 'or', 'is', 'are', 'be', 'to', 'of', 'in', 'on', 'at', 'for', 'with', 'from'];
        const userKeyWords = userWords.filter(w => !commonWords.includes(w) && w.length > 2);
        const actualKeyWords = actualWords.filter(w => !commonWords.includes(w) && w.length > 2);

        // Calculate match percentage based on key words
        const matchedWords = userKeyWords.filter(w => 
            actualKeyWords.some(aw => aw.includes(w) || w.includes(aw) || this.calculateSimilarity(aw, w) > 0.7)
        );
        
        const matchPercentage = userKeyWords.length > 0 ? matchedWords.length / userKeyWords.length : 0;

        if (matchPercentage >= 0.5 || actualMeaning.includes(userMeaning.replace(/\s+/g, ''))) {
            feedback.innerHTML = `✔ <strong>Correct!</strong> Your meaning is right.<br><br><strong>Official meaning:</strong> ${word.meaning}`;
            feedback.classList.add('show', 'correct');
            this.stats.correct++;
        } else {
            // Show partial match feedback
            if (matchPercentage > 0.2) {
                feedback.innerHTML = `⚠ <strong>Partially correct, but incomplete.</strong><br><br>Your answer has some correct elements, but it's missing key parts of the meaning.<br><br><strong>Correct meaning:</strong> ${word.meaning}`;
                feedback.classList.add('show', 'incorrect');
            } else {
                feedback.innerHTML = `✖ <strong>Incorrect.</strong><br><br><strong>Correct meaning:</strong> ${word.meaning}`;
                feedback.classList.add('show', 'incorrect');
            }
            this.stats.incorrect++;
        }

        this.updateStats();
        this.saveToStorage();
    },

    nextMeaning() {
        this.currentIndexes.meaning = (this.currentIndexes.meaning + 1) % this.vocab.length;
        this.loadMeaning();
    },

    // ==================== MODE 2: GUESS THE WORD ====================
    loadGuess() {
        if (this.vocab.length === 0) {
            document.getElementById('guessMeaning').textContent = 'No words loaded';
            return;
        }

        const word = this.vocab[this.currentIndexes.guess];
        document.getElementById('guessMeaning').textContent = word.meaning;
        document.getElementById('guessInput').value = '';
        document.getElementById('guessFeedback').textContent = '';
        document.getElementById('guessFeedback').classList.remove('show', 'correct', 'incorrect');
        document.getElementById('guessProgress').textContent = `Word ${this.currentIndexes.guess + 1} of ${this.vocab.length}`;
    },

    checkGuess() {
        const raw = document.getElementById('guessInput').value.trim();
        const userGuess = raw.toLowerCase();
        const feedback = document.getElementById('guessFeedback');
        const word = this.vocab[this.currentIndexes.guess];

        if (!userGuess) {
            feedback.innerHTML = '⚠ Please enter a word';
            feedback.classList.add('show', 'incorrect');
            return;
        }

        // If the user typed a phrase or sentence, run sentence-style checks
        if (userGuess.split(/\s+/).length > 1) {
            const match = this.findWordInSentence(userGuess, word.word.toLowerCase());
            const issues = this.detectSentenceIssues(raw, word.word);

            let out = `<strong>Input detected as sentence.</strong><br><br>`;
            out += `<strong>Your input:</strong><br>"${raw}"<br><br>`;

            if (!match.found) {
                out += `<strong>2) Mistake:</strong> The target word "${word.word}" was not found in your sentence.<br><br>`;
                out += `<strong>Correct word:</strong> ${word.word}<br><strong>Meaning:</strong> ${word.meaning}`;
                feedback.classList.add('show', 'incorrect');
                this.stats.incorrect++;
            } else if (issues.length > 0) {
                out += `<strong>2) Mistake(s):</strong><br>`;
                issues.forEach(i => out += `• ${i}<br>`);
                const corrected = this.correctSentence(raw, issues, match, word.word);
                out += `<br><strong>3) Corrected sentence:</strong><br>"${corrected}"`;
                feedback.classList.add('show', 'incorrect');
                this.stats.incorrect++;
            } else {
                out += `✔ <strong>Correct! The word is used properly.</strong><br><br><strong>Word:</strong> ${word.word}<br><strong>Meaning:</strong> ${word.meaning}`;
                feedback.classList.add('show', 'correct');
                this.stats.correct++;
            }

            feedback.innerHTML = out;
            this.updateStats();
            this.saveToStorage();
            return;
        }

        // Single token guess: exact or fuzzy match
        if (userGuess === word.word.toLowerCase()) {
            feedback.innerHTML = `✔ <strong>Correct!</strong><br><br><strong>Word:</strong> ${word.word}<br><strong>Meaning:</strong> ${word.meaning}`;
            feedback.classList.add('show', 'correct');
            this.stats.correct++;
        } else {
            // allow fuzzy match suggestions
            const sim = this.calculateSimilarity(userGuess, word.word.toLowerCase());
            if (sim > 0.7) {
                feedback.innerHTML = `⚠ <strong>Almost correct.</strong><br>You entered "${raw}" which looks like "${word.word}".<br><br><strong>Word:</strong> ${word.word}<br><strong>Meaning:</strong> ${word.meaning}`;
                feedback.classList.add('show', 'incorrect');
                this.stats.incorrect++;
            } else {
                feedback.innerHTML = `✖ <strong>Incorrect.</strong><br><br><strong>Correct word:</strong> ${word.word}<br><strong>Meaning:</strong> ${word.meaning}`;
                feedback.classList.add('show', 'incorrect');
                this.stats.incorrect++;
            }
        }

        this.updateStats();
        this.saveToStorage();
    },

    showGuessAnswer() {
        const word = this.vocab[this.currentIndexes.guess];
        const feedback = document.getElementById('guessFeedback');
        feedback.innerHTML = `<strong>Answer:</strong> ${word.word}`;
        feedback.classList.add('show');
    },

    nextGuess() {
        this.currentIndexes.guess = (this.currentIndexes.guess + 1) % this.vocab.length;
        this.loadGuess();
    },

    // ==================== MODE 3: SENTENCE PRACTICE ====================
    loadSentence() {
        if (this.vocab.length === 0) {
            document.getElementById('sentenceWord').textContent = 'No words loaded';
            return;
        }

        const word = this.vocab[this.currentIndexes.sentence];
        document.getElementById('sentenceWord').textContent = word.word;
        document.getElementById('sentenceInput').value = '';
        document.getElementById('sentenceFeedback').textContent = '';
        document.getElementById('sentenceFeedback').classList.remove('show', 'correct', 'incorrect');
        document.getElementById('sentenceProgress').textContent = `Word ${this.currentIndexes.sentence + 1} of ${this.vocab.length}`;
    },

    checkSentence() {
        const userSentence = document.getElementById('sentenceInput').value.trim();
        const feedback = document.getElementById('sentenceFeedback');
        const word = this.vocab[this.currentIndexes.sentence];

        if (!userSentence) {
            feedback.innerHTML = '⚠ Please write a sentence';
            feedback.classList.add('show', 'incorrect');
            return;
        }

        const wordLower = word.word.toLowerCase();
        const sentenceLower = userSentence.toLowerCase();

        // Check if word/idiom is found in the sentence (with fuzzy matching for typos)
        const match = this.findWordInSentence(sentenceLower, wordLower); // returns {found, matchedWord, similarity, index}

        // Check for basic grammar/spelling issues
        const issues = this.detectSentenceIssues(userSentence, word.word);

        // Augment issues with fuzzy-match results (catch misspellings like "bundatnt")
        if (match && match.found && match.similarity < 1) {
            // add typo issue if not already present
            const typoMsg = `"${match.matchedWord}" appears to be a typo. Did you mean "${word.word}"?`;
            if (!issues.includes(typoMsg)) issues.unshift(typoMsg);

            // check for article misuse before the matched token (e.g., "an bundatnt knowledge")
            const sentenceWords = sentenceLower.split(/\s+/);
            const prev = (match.index > 0) ? sentenceWords[match.index - 1].replace(/[.,!?;:]/g, '') : '';
            const adjList = ['abundant','resilient','grateful','aware','tough','hard','difficult','strong','weak'];
            if (prev === 'an' && adjList.includes(wordLower)) {
                const artMsg = `Article error: Don't use "an" before "${word.word}"; it's an adjective, not a countable noun.`;
                if (!issues.includes(artMsg)) issues.splice(1, 0, artMsg);
            }
        }

        let output = `<strong>1) My sentence:</strong><br>"${userSentence}"<br><br>`;

        if (!match || !match.found) {
            // Word not used in sentence
            output += `<strong>2) Mistake:</strong> The word "${word.word}" is not properly used in the sentence.<br><br>`;
            output += `<strong>3) Corrected sentence example:</strong><br>`;
            if (word.example) {
                output += `"${word.example}"`;
            } else {
                output += `Try using "${word.word}" naturally in a sentence that shows its meaning.`;
            }
            feedback.classList.add('show', 'incorrect');
            this.stats.incorrect++;
        } else if (issues.length > 0) {
            // Word is used but has grammar/spelling mistakes
            output += `<strong>2) Mistake:</strong><br>`;
            issues.forEach(issue => {
                output += `• ${issue}<br>`;
            });
            
            const corrected = this.correctSentence(userSentence, issues, match, word.word);
            output += `<br><strong>Why?</strong><br>`;
            
            // Provide explanation for the error
            if (issues[0].includes('incomplete') || issues[0].includes('in tough')) {
                output += `Because "${issues[0].split(':')[0]}" is incomplete. Adjectives like "tough" need a noun after them.<br><br>`;
            } else if (issues[0].includes('Article')) {
                output += `Because of incorrect article usage.<br><br>`;
            } else if (issues[0].includes('punctuation')) {
                output += `Because the sentence is missing proper ending punctuation.<br><br>`;
            } else if (issues[0].includes('capitalized')) {
                output += `Because the first letter should be capitalized.<br><br>`;
            }
            
            output += `<strong>3) Corrected sentence:</strong><br>`;
            output += `"${corrected}"<br><br>`;
            
            // Provide alternative suggestions
            const alternatives = this.generateAlternativeSentences(userSentence, word.word);
            if (alternatives.length > 0) {
                output += `<strong>Some natural alternatives:</strong><br>`;
                alternatives.forEach(alt => {
                    output += `✓ ${alt}<br>`;
                });
            }
            
            feedback.classList.add('show', 'incorrect');
            this.stats.incorrect++;
        } else {
            // Perfect sentence
            output += `<strong>2) Mistake:</strong> No mistake.<br><br>`;
            
            // Provide natural alternatives similar to ChatGPT
            const alternatives = this.generateAlternativeSentences(userSentence, word.word);
            if (alternatives.length > 0) {
                output += `<strong>Some natural alternatives:</strong><br>`;
                alternatives.forEach(alt => {
                    output += `✓ ${alt}<br>`;
                });
            } else {
                output += `<strong>Your sentence is perfect!</strong> You can also try to enhance it further.`;
            }
            
            feedback.classList.add('show', 'correct');
            this.stats.correct++;
        }

        feedback.innerHTML = output;
        feedback.classList.add('show');
        this.updateStats();
        this.saveToStorage();
    },

    generateAlternativeSentences(sentence, targetWord) {
        const alternatives = [];
        const targetLower = targetWord.toLowerCase();
        
        // Dictionary of word forms and alternative sentence patterns
        const alternativePatterns = {
            'resilient': [
                'We should be resilient in tough times.',
                'We should be resilient in tough situations.',
                'We should be resilient during tough phases.',
                'We should remain resilient in difficult circumstances.'
            ],
            'abundant': [
                'He has abundant knowledge about technology.',
                'The region has abundant resources.',
                'She possessed abundant experience in the field.'
            ],
            'gratitude': [
                'I express gratitude for your help.',
                'With gratitude, I accept your kindness.',
                'We should show gratitude for what we have.'
            ],
            'persistence': [
                'His persistence paid off in the end.',
                'With persistence, you can achieve anything.',
                'Persistence is key to success.'
            ],
            'determination': [
                'Her determination helped her succeed.',
                'With determination, she overcame the challenge.',
                'His determination was admirable.'
            ]
        };
        
        // Return alternatives if available for this word
        if (alternativePatterns[targetLower]) {
            return alternativePatterns[targetLower];
        }
        
        return alternatives;
    },

    findWordInSentence(sentenceLower, wordLower) {
        // Return an object with match details so caller can decide how to handle typos
        const result = { found: false, matchedWord: null, similarity: 0, index: -1 };

        // Direct exact match
        if (sentenceLower.includes(wordLower)) {
            // find index of occurrence
            const sentenceWords = sentenceLower.split(/\s+/);
            for (let i = 0; i < sentenceWords.length; i++) {
                const cleanWord = sentenceWords[i].replace(/[.,!?;:]/g, '');
                if (cleanWord === wordLower || cleanWord.includes(wordLower) || wordLower.includes(cleanWord)) {
                    result.found = true;
                    result.matchedWord = cleanWord;
                    result.similarity = (cleanWord === wordLower) ? 1 : this.calculateSimilarity(cleanWord, wordLower);
                    result.index = i;
                    return result;
                }
            }
        }

        // Fuzzy search: look for the closest similar token in the sentence
        const sentenceWords = sentenceLower.split(/\s+/);
        let bestSim = 0;
        let bestWord = null;
        let bestIndex = -1;
        for (let i = 0; i < sentenceWords.length; i++) {
            const cleanWord = sentenceWords[i].replace(/[.,!?;:]/g, '');
            if (!cleanWord) continue;
            const sim = this.calculateSimilarity(cleanWord, wordLower);
            // prefer tokens that contain the target or vice versa
            if (cleanWord.includes(wordLower) || wordLower.includes(cleanWord)) {
                result.found = true;
                result.matchedWord = cleanWord;
                result.similarity = Math.max(sim, 0.8);
                result.index = i;
                return result;
            }
            if (sim > bestSim) {
                bestSim = sim;
                bestWord = cleanWord;
                bestIndex = i;
            }
        }

        // Accept moderately similar matches (lower threshold to catch misspellings)
        if (bestSim >= 0.55) {
            result.found = true;
            result.matchedWord = bestWord;
            result.similarity = bestSim;
            result.index = bestIndex;
        }

        return result;
    },

    calculateSimilarity(str1, str2) {
        const longer = str1.length > str2.length ? str1 : str2;
        const shorter = str1.length > str2.length ? str2 : str1;
        
        if (longer.length === 0) return 1.0;
        
        const editDistance = this.getEditDistance(longer, shorter);
        return (longer.length - editDistance) / longer.length;
    },

    getEditDistance(s1, s2) {
        const costs = [];
        for (let i = 0; i <= s1.length; i++) {
            let lastValue = i;
            for (let j = 0; j <= s2.length; j++) {
                if (i === 0) {
                    costs[j] = j;
                } else if (j > 0) {
                    let newValue = costs[j - 1];
                    if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
                        newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                    }
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
            if (i > 0) costs[s2.length] = lastValue;
        }
        return costs[s2.length];
    },

    detectSentenceIssues(sentence, targetWord) {
        const issues = [];

        // Check for basic capitalization (sentence should start with capital)
        if (sentence.length > 0 && sentence[0] !== sentence[0].toUpperCase()) {
            issues.push('First letter should be capitalized');
        }

        // Check for period/punctuation at end
        if (sentence.length > 0 && !/[.!?]$/.test(sentence)) {
            issues.push('Sentence should end with proper punctuation (. ! ?)');
        }

        // Check for double spaces
        if (/  +/.test(sentence)) {
            issues.push('Remove extra spaces between words');
        }

        // Check for common typos in target word (only if similarity is very high)
        const sentenceLower = sentence.toLowerCase();
        const targetLower = targetWord.toLowerCase();
        const words = sentenceLower.split(/\s+/);

        for (let word of words) {
            const cleanWord = word.replace(/[.,!?;:]/g, '');
            
            // Only flag as typo if similarity is > 0.75 and length difference is small
            const similarity = this.calculateSimilarity(cleanWord, targetLower);
            const lengthDiff = Math.abs(cleanWord.length - targetLower.length);
            
            if (cleanWord !== targetLower && similarity > 0.75 && similarity < 1 && lengthDiff <= 2) {
                issues.push(`"${cleanWord}" appears to be a typo. Did you mean "${targetWord}"?`);
            }
        }

        // Check for article errors (a/an usage)
        const articleIssues = this.checkArticleErrors(sentence, targetWord);
        issues.push(...articleIssues);

        // Check for subject-verb agreement
        const svIssues = this.checkSubjectVerbAgreement(sentence);
        issues.push(...svIssues);

        // Check for word form appropriateness
        const wordFormIssues = this.checkWordFormUsage(sentence, targetWord);
        issues.push(...wordFormIssues);

        // Check for incomplete phrases
        const incompleteIssues = this.checkIncompletePhrase(sentence);
        issues.push(...incompleteIssues);

        // Check for collocation problems (e.g., "start business")
        const collocationIssues = this.checkCollocations(sentence);
        issues.push(...collocationIssues);

        // Remove duplicate issues
        return [...new Set(issues)];
    },

    checkIncompletePhrase(sentence) {
        const issues = [];
        const sentenceLower = sentence.toLowerCase();

        // Check for prepositions without proper objects
        const prepositions = ['in', 'on', 'at', 'by', 'to', 'for', 'from', 'with', 'about', 'of', 'as'];
        
        for (let prep of prepositions) {
            const regex = new RegExp(`\\b${prep}\\s+(\\w+)(?:\\s|$|[.,!?;:])`);
            const match = regex.exec(sentenceLower);
            
            if (match) {
                const nextWord = match[1];
                
                // Check if it's an incomplete phrase like "in tough" (adjective without noun)
                const adjectives = ['tough', 'hard', 'difficult', 'easy', 'good', 'bad', 'strong', 'weak'];
                
                if (adjectives.includes(nextWord)) {
                    // Check if there's a noun after the adjective
                    const afterAdjIndex = match.index + match[0].length;
                    const remainingText = sentenceLower.slice(afterAdjIndex).trim();
                    
                    if (!remainingText || remainingText[0] === '.' || remainingText[0] === '!') {
                        issues.push(`Incomplete phrase: "${prep} ${nextWord}" needs a noun. Use "${prep} ${nextWord} times/situations/phases" instead.`);
                    }
                }
            }
        }

        return issues;
    },

    checkCollocations(sentence) {
        const issues = [];
        if (!sentence) return issues;
        for (let c of GRAMMAR.collocations) {
            if (c.pattern.test(sentence)) {
                issues.push(`Collocation issue: consider using "${c.suggestion}" instead of the phrase found.`);
            }
        }
        return issues;
    },

    checkArticleErrors(sentence, targetWord) {
        const issues = [];
        const vowels = 'aeiou';
        const words = sentence.toLowerCase().split(/\s+/);

        // Check for 'a' or 'an' before target word
        for (let i = 0; i < words.length - 1; i++) {
            const cleanWord = words[i + 1].replace(/[.,!?;:]/g, '');
            const article = words[i].replace(/[.,!?;:]/g, '').toLowerCase();

            if (cleanWord === targetWord.toLowerCase()) {
                const firstChar = cleanWord[0].toLowerCase();
                const hasVowelSound = vowels.includes(firstChar);
                
                // Check if using wrong article
                if (article === 'a' && hasVowelSound && !['u', 'ū'].includes(firstChar)) {
                    issues.push(`Article error: Use "an" before "${cleanWord}" (not "a"), as it starts with a vowel sound.`);
                } else if (article === 'an' && !hasVowelSound) {
                    issues.push(`Article error: Use "a" before "${cleanWord}" (not "an"), as it starts with a consonant sound.`);
                }
            }
        }

        // Check for article before adjective + uncountable noun (e.g., "an abundant knowledge")
        for (let i = 0; i < words.length - 2; i++) {
            const art = words[i].replace(/[.,!?;:]/g, '').toLowerCase();
            const maybeAdj = words[i + 1].replace(/[.,!?;:]/g, '').toLowerCase();
            const maybeNoun = words[i + 2].replace(/[.,!?;:]/g, '').toLowerCase();

            if ((art === 'a' || art === 'an') && GRAMMAR.adjectives.has(maybeAdj) && GRAMMAR.uncountableNouns.has(maybeNoun)) {
                issues.push(`Grammar error: "${maybeAdj} ${maybeNoun}" - do not use "${art}" before this phrase. Use "${maybeAdj} ${maybeNoun}" or rephrase, e.g., "abundant knowledge" without "an".`);
            }
        }

        return issues;
    },

    checkSubjectVerbAgreement(sentence) {
        const issues = [];
        const sentenceLower = sentence.toLowerCase();
        
        // Check: "He/She have" (should be "has")
        if (/\b(he|she|it)\s+have\b/gi.test(sentenceLower)) {
            issues.push('Subject-verb agreement: Use "has" with "he/she/it", not "have"');
        }

        // Check: "I/You/We/They has" (should be "have")
        if (/\b(I|you|we|they)\s+has\b/gi.test(sentenceLower)) {
            issues.push('Subject-verb agreement: Use "have" with "I/you/we/they", not "has"');
        }

        // Check: "I goes/goes" (should be "go")
        if (/\bI\s+goes\b/gi.test(sentenceLower)) {
            issues.push('Subject-verb agreement: Use "go" with "I", not "goes"');
        }

        return issues;
    },

    checkWordFormUsage(sentence, targetWord) {
        const issues = [];
        const sentenceLower = sentence.toLowerCase();
        const targetLower = targetWord.toLowerCase();

        // Check if target word is used with wrong article when it's an adjective
        if (sentenceLower.includes('an ' + targetLower) || sentenceLower.includes('a ' + targetLower)) {
            // Check if word is being used as a countable noun (wrong usage for most vocabulary words)
            const adjacentWords = this.getAdjacentWords(sentenceLower, targetLower);
            
            if (targetLower === 'abundant') {
                if (adjacentWords.before.includes('an') || adjacentWords.before.includes('a')) {
                    issues.push(`Grammar error: "${targetWord}" is an adjective, not a noun. Don't use "an/a" before it. Correct: "I have abundant knowledge" not "I have an abundant knowledge"`);
                }
            } else if (targetLower === 'resilient') {
                if (adjacentWords.before.includes('an') || adjacentWords.before.includes('a')) {
                    issues.push(`Grammar error: "${targetWord}" is an adjective. Don't use "an/a" before it.`);
                }
            } else if (targetLower === 'grateful') {
                if (adjacentWords.before.includes('a') || adjacentWords.before.includes('an')) {
                    issues.push(`Grammar error: "${targetWord}" is an adjective. Use it to describe a noun, not as a noun itself.`);
                }
            }
        }

        return issues;
    },

    getAdjacentWords(sentenceLower, targetWord) {
        const words = sentenceLower.split(/\s+/);
        const result = { before: '', after: '' };

        for (let i = 0; i < words.length; i++) {
            const cleanWord = words[i].replace(/[.,!?;:]/g, '');
            if (cleanWord === targetWord) {
                if (i > 0) result.before = words[i - 1].replace(/[.,!?;:]/g, '');
                if (i < words.length - 1) result.after = words[i + 1].replace(/[.,!?;:]/g, '');
                break;
            }
        }

        return result;
    },

    correctSentence(sentence, issues, match, targetWord) {
        let corrected = sentence;

        // Capitalize first letter
        if (corrected.length > 0) {
            corrected = corrected[0].toUpperCase() + corrected.slice(1);
        }

        // Add period if missing
        if (!/[.!?]$/.test(corrected)) {
            corrected += '.';
        }

        // Remove extra spaces
        corrected = corrected.replace(/  +/g, ' ');

        // Fix article errors (a/an)
        corrected = corrected.replace(/\ba\s+([aeiou])/gi, 'an $1');
        corrected = corrected.replace(/\ban\s+([^aeiou])/gi, 'a $1');

        // Fix subject-verb agreement
        corrected = corrected.replace(/\b(he|she|it)\s+have\b/gi, '$1 has');
        corrected = corrected.replace(/\b(I|you|we|they)\s+has\b/gi, '$1 have');
        corrected = corrected.replace(/\bI\s+goes\b/gi, 'I go');
        corrected = corrected.replace(/\b(he|she|it)\s+go\b(?!es)/gi, '$1 goes');

        // Fix incomplete phrases - add context-appropriate nouns
        corrected = corrected.replace(/\bin\s+tough(?:\s|$)/gi, 'in tough times');
        corrected = corrected.replace(/\bin\s+difficult(?:\s|$)/gi, 'in difficult situations');
        corrected = corrected.replace(/\bin\s+hard(?:\s|$)/gi, 'in hard times');

        // If a fuzzy match was found (typo), replace the misspelled token with the target word
        if (match && match.found && match.matchedWord && match.similarity < 1 && targetWord) {
            // Replace the matched token (case-insensitive) with the correct target word
            const re = new RegExp(`\\b${match.matchedWord}\\b`, 'gi');
            corrected = corrected.replace(re, targetWord);

            // If there is an incorrect article like "an" before an adjective (e.g., "an abundant"), remove it
            const adjList = ['abundant','resilient','grateful','aware','tough','hard','difficult','strong','weak'];
            if (adjList.includes(targetWord.toLowerCase())) {
                corrected = corrected.replace(new RegExp(`\\ban\\s+${targetWord}\\b`, 'gi'), targetWord);
                corrected = corrected.replace(new RegExp(`\\ba\\s+${targetWord}\\b`, 'gi'), targetWord);
            }
        }

        return corrected;
    },

    nextSentence() {
        this.currentIndexes.sentence = (this.currentIndexes.sentence + 1) % this.vocab.length;
        this.loadSentence();
    },

    // ==================== MODE 4: MANAGE VOCABULARY ====================
    saveVocab(event) {
        event.preventDefault();

        let word = document.getElementById('formWord').value.trim();
        const type = document.getElementById('formType').value;
        let meaning = document.getElementById('formMeaning').value.trim();
        let example = document.getElementById('formExample').value.trim();

        if (!word || !meaning) {
            alert('Word and Meaning are required!');
            return;
        }

        // Check if editing or adding new
        const formBtn = event.target.querySelector('button[type="submit"]');
        const editId = formBtn.dataset.editId;

        // Normalize example: ensure capitalization and ending punctuation
        if (example) {
            example = example[0].toUpperCase() + example.slice(1);
            if (!/[.!?]$/.test(example)) example += '.';
        }

        if (editId) {
            // Edit existing
            const item = this.vocab.find(v => v.id == editId);
            if (item) {
                item.word = word;
                item.type = type;
                item.meaning = meaning;
                item.example = example;
            }
            this.clearForm();
        } else {
            // Add new
            const newItem = {
                id: Date.now(),
                word,
                type,
                meaning,
                example
            };
            this.vocab.push(newItem);
            this.clearForm();
        }

        this.saveToStorage();
        this.displayVocabList();
    },

    clearForm() {
        document.getElementById('vocabForm').reset();
        document.getElementById('formWord').focus();
        const formBtn = document.querySelector('#vocabForm button[type="submit"]');
        formBtn.removeAttribute('data-editId');
        formBtn.textContent = 'Save';
    },

    editVocab(id) {
        const item = this.vocab.find(v => v.id == id);
        if (!item) return;

        document.getElementById('formWord').value = item.word;
        document.getElementById('formType').value = item.type;
        document.getElementById('formMeaning').value = item.meaning;
        document.getElementById('formExample').value = item.example;

        const formBtn = document.querySelector('#vocabForm button[type="submit"]');
        formBtn.setAttribute('data-editId', id);
        formBtn.textContent = 'Update';

        document.getElementById('formWord').focus();
    },

    deleteVocab(id) {
        if (confirm('Are you sure you want to delete this item?')) {
            this.vocab = this.vocab.filter(v => v.id != id);
            this.saveToStorage();
            this.displayVocabList();
        }
    },

    filterVocab(type) {
        this.filterType = type;
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector(`.filter-btn[onclick="app.filterVocab('${type}')"]`).classList.add('active');
        this.displayVocabList();
    },

    displayVocabList() {
        const list = document.getElementById('vocabList');
        const count = document.getElementById('vocabCount');

        let filtered = this.vocab;
        if (this.filterType !== 'all') {
            filtered = this.vocab.filter(v => v.type === this.filterType);
        }

        count.textContent = filtered.length;

        if (filtered.length === 0) {
            list.innerHTML = '<p>No items match the selected filter.</p>';
            return;
        }

        list.innerHTML = filtered.map(item => `
            <div class="vocab-item">
                <div class="vocab-item-header">
                    <div class="vocab-item-title">
                        <h4>${item.word}</h4>
                        <span class="vocab-item-type ${item.type}">${item.type.charAt(0).toUpperCase() + item.type.slice(1)}</span>
                    </div>
                    <div class="vocab-item-buttons">
                        <button class="btn btn-edit" onclick="app.editVocab(${item.id})">Edit</button>
                        <button class="btn btn-delete" onclick="app.deleteVocab(${item.id})">Delete</button>
                    </div>
                </div>
                <div class="vocab-item-content">
                    <p><strong>Meaning:</strong> ${item.meaning}</p>
                    ${item.example ? `<p><strong>Example:</strong> ${item.example}</p>` : ''}
                </div>
            </div>
        `).join('');
    }
};

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
