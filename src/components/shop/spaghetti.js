//Spaghetti with Tommy to make a function that POSTs each item from my external API into my local database
export const Stuffs = () => {
const magicStuffs = [
    {
        slug: "adamantine-armor",
        name: "Adamantine Armor",
        type: "Armor (medium or heavy)",
        desc: "This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you're wearing it, any critical hit against you becomes a normal hit.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "amulet-of-health",
        name: "Amulet of Health",
        type: "Wondrous item",
        desc: "Your Constitution score is 19 while you wear this amulet. It has no effect on you if your Constitution is already 19 or higher.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "amulet-of-proof-against-detection-and-location",
        name: "Amulet of Proof against Detection and Location",
        type: "Wondrous item",
        desc: "While wearing this amulet, you are hidden from divination magic. You can't be targeted by such magic or perceived through magical scrying sensors.",
        rarity: "uncommon",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "amulet-of-the-planes",
        name: "Amulet of the Planes",
        type: "Wondrous item",
        desc: "While wearing this amulet, you can use an action to name a location that you are familiar with on another plane of existence. Then make a DC 15 Intelligence check. On a successful check, you cast the _plane shift_ spell. On a failure, you and each creature and object within 15 feet of you travel to a random destination. Roll a d100. On a 1-60, you travel to a random location on the plane you named. On a 61-100, you travel to a randomly determined plane of existence.",
        rarity: "very rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "animated-shield",
        name: "Animated Shield",
        type: "Armor (shield)",
        desc: "While holding this shield, you can speak its command word as a bonus action to cause it to animate. The shield leaps into the air and hovers in your space to protect you as if you were wielding it, leaving your hands free. The shield remains animated for 1 minute, until you use a bonus action to end this effect, or until you are incapacitated or die, at which point the shield falls to the ground or into your hand if you have one free.",
        rarity: "very rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "apparatus-of-the-crab",
        name: "Apparatus of the Crab",
        type: "Wondrous item",
        desc: "This item first appears to be a Large sealed iron barrel weighing 500 pounds. The barrel has a hidden catch, which can be found with a successful DC 20 Intelligence (Investigation) check. Releasing the catch unlocks a hatch at one end of the barrel, allowing two Medium or smaller creatures to crawl inside. Ten levers are set in a row at the far end, each in a neutral position, able to move either up or down. When certain levers are used, the apparatus transforms to resemble a giant lobster.\n\nThe apparatus of the Crab is a Large object with the following statistics:\n\n**Armor Class:** 20\n\n**Hit Points:** 200\n\n**Speed:** 30 ft., swim 30 ft. (or 0 ft. for both if the legs and tail aren't extended)\n\n**Damage Immunities:** poison, psychic\n\nTo be used as a vehicle, the apparatus requires one pilot. While the apparatus's hatch is closed, the compartment is airtight and watertight. The compartment holds enough air for 10 hours of breathing, divided by the number of breathing creatures inside.\n\nThe apparatus floats on water. It can also go underwater to a depth of 900 feet. Below that, the vehicle takes 2d6 bludgeoning damage per minute from pressure.\n\nA creature in the compartment can use an action to move as many as two of the apparatus's levers up or down. After each use, a lever goes back to its neutral position. Each lever, from left to right, functions as shown in the Apparatus of the Crab Levers table.\n\n**Apparatus of the Crab Levers (table)**\n\n| Lever | Up                                                                                                                               | Down                                                                                                                                        |\n|-------|----------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|\n| 1     | Legs and tail extend, allowing the apparatus to walk and swim.                                                                   | Legs and tail retract, reducing the apparatus's speed to 0 and making it unable to benefit from bonuses to speed.                           |\n| 2     | Forward window shutter opens.                                                                                                    | Forward window shutter closes.                                                                                                              |\n| 3     | Side window shutters open (two per side).                                                                                        | Side window shutters close (two per side).                                                                                                  |\n| 4     | Two claws extend from the front sides of the apparatus.                                                                          | The claws retract.                                                                                                                          |\n| 5     | Each extended claw makes the following melee weapon attack: +8 to hit, reach 5 ft., one target. Hit: 7 (2d6) bludgeoning damage. | Each extended claw makes the following melee weapon attack: +8 to hit, reach 5 ft., one target. Hit: The target is grappled (escape DC 15). |\n| 6     | The apparatus walks or swims forward.                                                                                            | The apparatus walks or swims backward.                                                                                                      |\n| 7     | The apparatus turns 90 degrees left.                                                                                             | The apparatus turns 90 degrees right.                                                                                                       |\n| 8     | Eyelike fixtures emit bright light in a 30-foot radius and dim light for an additional 30 feet.                                  | The light turns off.                                                                                                                        |\n| 9     | The apparatus sinks as much as 20 feet in liquid.                                                                                | The apparatus rises up to 20 feet in liquid.                                                                                                |\n| 10    | The rear hatch unseals and opens.                                                                                                | The rear hatch closes and seals.                                                                                                            |",
        rarity: "legendary",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "armor-of-invulnerability",
        name: "Armor of Invulnerability",
        type: "Armor (plate)",
        desc: "You have resistance to nonmagical damage while you wear this armor. Additionally, you can use an action to make yourself immune to nonmagical damage for 10 minutes or until you are no longer wearing the armor. Once this special action is used, it can't be used again until the next dawn.",
        rarity: "legendary",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "armor-of-resistance",
        name: "Armor of Resistance",
        type: "Armor (light)",
        desc: "You have resistance to one type of damage while you wear this armor. The GM chooses the type or determines it randomly from the options below.\n\n| d10 | Damage Type |\n|-----|-------------|\n| 1   | Acid        |\n| 2   | Cold        |\n| 3   | Fire        |\n| 4   | Force       |\n| 5   | Lightning   |\n| 6   | Necrotic    |\n| 7   | Poison      |\n| 8   | Psychic     |\n| 9   | Radiant     |\n| 10  | Thunder     |",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "armor-of-vulnerability",
        name: "Armor of Vulnerability",
        type: "Armor (plate)",
        desc: "While wearing this armor, you have resistance to one of the following damage types: bludgeoning, piercing, or slashing. The GM chooses the type or determines it randomly.\n\n**_Curse_**. This armor is cursed, a fact that is revealed only when an _identify_ spell is cast on the armor or you attune to it. Attuning to the armor curses you until you are targeted by the _remove curse_ spell or similar magic; removing the armor fails to end the curse. While cursed, you have vulnerability to two of the three damage types associated with the armor (not the one to which it grants resistance).",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "arrow-catching-shield",
        name: "Arrow-Catching Shield",
        type: "Armor (shield)",
        desc: "You gain a +2 bonus to AC against ranged attacks while you wield this shield. This bonus is in addition to the shield's normal bonus to AC. In addition, whenever an attacker makes a ranged attack against a target within 5 feet of you, you can use your reaction to become the target of the attack instead.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "arrow-of-slaying",
        name: "Arrow of Slaying",
        type: "Weapon (arrow)",
        desc: "An _arrow of slaying_ is a magic weapon meant to slay a particular kind of creature. Some are more focused than others; for example, there are both _arrows of dragon slaying_ and _arrows of blue dragon slaying_. If a creature belonging to the type, race, or group associated with an _arrow of slaying_ takes damage from the arrow, the creature must make a DC 17 Constitution saving throw, taking an extra 6d10 piercing damage on a failed save, or half as much extra damage on a successful one.\n\nOnce an _arrow of slaying_ deals its extra damage to a creature, it becomes a nonmagical arrow.\n\nOther types of magic ammunition of this kind exist, such as _bolts of slaying_ meant for a crossbow, though arrows are most common.",
        rarity: "very rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "bag-of-beans",
        name: "Bag of Beans",
        type: "Wondrous item",
        desc: "Inside this heavy cloth bag are 3d4 dry beans. The bag weighs 1/2 pound plus 1/4 pound for each bean it contains.\n\nIf you dump the bag's contents out on the ground, they explode in a 10-foot radius, extending from the beans. Each creature in the area, including you, must make a DC 15 Dexterity saving throw, taking 5d4 fire damage on a failed save, or half as much damage on a successful one. The fire ignites flammable objects in the area that aren't being worn or carried.\n\nIf you remove a bean from the bag, plant it in dirt or sand, and then water it, the bean produces an effect 1 minute later from the ground where it was planted. The GM can choose an effect from the following table, determine it randomly, or create an effect.\n\n| d100  | Effect                                                                                                                                                                                                                                                                                                                                                                |\n|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|\n| 01    | 5d4 toadstools sprout. If a creature eats a toadstool, roll any die. On an odd roll, the eater must succeed on a DC 15 Constitution saving throw or take 5d6 poison damage and become poisoned for 1 hour. On an even roll, the eater gains 5d6 temporary hit points for 1 hour.                                                                                      |\n| 02-10 | A geyser erupts and spouts water, beer, berry juice, tea, vinegar, wine, or oil (GM's choice) 30 feet into the air for 1d12 rounds.                                                                                                                                                                                                                                   |\n| 11-20 | A treant sprouts. There's a 50 percent chance that the treant is chaotic evil and attacks.                                                                                                                                                                                                                                                                            |\n| 21-30 | An animate, immobile stone statue in your likeness rises. It makes verbal threats against you. If you leave it and others come near, it describes you as the most heinous of villains and directs the newcomers to find and attack you. If you are on the same plane of existence as the statue, it knows where you are. The statue becomes inanimate after 24 hours. |\n| 31-40 | A campfire with blue flames springs forth and burns for 24 hours (or until it is extinguished).                                                                                                                                                                                                                                                                       |\n| 41-50 | 1d6 + 6 shriekers sprout                                                                                                                                                                                                                                                                                                                                              |\n| 51-60 | 1d4 + 8 bright pink toads crawl forth. Whenever a toad is touched, it transforms into a Large or smaller monster of the GM's choice. The monster remains for 1 minute, then disappears in a puff of bright pink smoke.                                                                                                                                                |\n| 61-70 | A hungry bulette burrows up and attacks. 71-80 A fruit tree grows. It has 1d10 + 20 fruit, 1d8 of which act as randomly determined magic potions, while one acts as an ingested poison of the GM's choice. The tree vanishes after 1 hour. Picked fruit remains, retaining any magic for 30 days.                                                                     |\n| 81-90 | A nest of 1d4 + 3 eggs springs up. Any creature that eats an egg must make a DC 20 Constitution saving throw. On a successful save, a creature permanently increases its lowest ability score by 1, randomly choosing among equally low scores. On a failed save, the creature takes 10d6 force damage from an internal magical explosion.                            |\n| 91-99 | A pyramid with a 60-foot-square base bursts upward. Inside is a sarcophagus containing a mummy lord. The pyramid is treated as the mummy lord's lair, and its sarcophagus contains treasure of the GM's choice.                                                                                                                                                       |\n| 100   | A giant beanstalk sprouts, growing to a height of the GM's choice. The top leads where the GM chooses, such as to a great view, a cloud giant's castle, or a different plane of existence.                                                                                                                                                                            |",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "bag-of-devouring",
        name: "Bag of Devouring",
        type: "Wondrous item",
        desc: "This bag superficially resembles a _bag of holding_ but is a feeding orifice for a gigantic extradimensional creature. Turning the bag inside out closes the orifice.\n\nThe extradimensional creature attached to the bag can sense whatever is placed inside the bag. Animal or vegetable matter placed wholly in the bag is devoured and lost forever. When part of a living creature is placed in the bag, as happens when someone reaches inside it, there is a 50 percent chance that the creature is pulled inside the bag. A creature inside the bag can use its action to try to escape with a successful DC 15 Strength check. Another creature can use its action to reach into the bag to pull a creature out, doing so with a successful DC 20 Strength check (provided it isn't pulled inside the bag first). Any creature that starts its turn inside the bag is devoured, its body destroyed.\n\nInanimate objects can be stored in the bag, which can hold a cubic foot of such material. However, once each day, the bag swallows any objects inside it and spits them out into another plane of existence. The GM determines the time and plane.\n\nIf the bag is pierced or torn, it is destroyed, and anything contained within it is transported to a random location on the Astral Plane.",
        rarity: "very rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "bag-of-holding",
        name: "Bag of Holding",
        type: "Wondrous item",
        desc: "This bag has an interior space considerably larger than its outside dimensions, roughly 2 feet in diameter at the mouth and 4 feet deep. The bag can hold up to 500 pounds, not exceeding a volume of 64 cubic feet. The bag weighs 15 pounds, regardless of its contents. Retrieving an item from the bag requires an action.\n\nIf the bag is overloaded, pierced, or torn, it ruptures and is destroyed, and its contents are scattered in the Astral Plane. If the bag is turned inside out, its contents spill forth, unharmed, but the bag must be put right before it can be used again. Breathing creatures inside the bag can survive up to a number of minutes equal to 10 divided by the number of creatures (minimum 1 minute), after which time they begin to suffocate.\n\nPlacing a _bag of holding_ inside an extradimensional space created by a _handy haversack_, _portable hole_, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it to a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "bag-of-tricks",
        name: "Bag of Tricks",
        type: "Wondrous item",
        desc: "This ordinary bag, made from gray, rust, or tan cloth, appears empty. Reaching inside the bag, however, reveals the presence of a small, fuzzy object. The bag weighs 1/2 pound.\n\nYou can use an action to pull the fuzzy object from the bag and throw it up to 20 feet. When the object lands, it transforms into a creature you determine by rolling a d8 and consulting the table that corresponds to the bag's color.\n\nThe creature is friendly to you and your companions, and it acts on your turn. You can use a bonus action to command how the creature moves and what action it takes on its next turn, or to give it general orders, such as to attack your enemies. In the absence of such orders, the creature acts in a fashion appropriate to its nature.\n\nOnce three fuzzy objects have been pulled from the bag, the bag can't be used again until the next dawn.\n\n**Gray Bag of Tricks (table)**\n\n| d8 | Creature     |\n|----|--------------|\n| 1  | Weasel       |\n| 2  | Giant rat    |\n| 3  | Badger       |\n| 4  | Boar         |\n| 5  | Panther      |\n| 6  | Giant badger |\n| 7  | Dire wolf    |\n| 8  | Giant elk    |\n\n**Rust Bag of Tricks (table)**\n\n| d8 | Creature   |\n|----|------------|\n| 1  | Rat        |\n| 2  | Owl        |\n| 3  | Mastiff    |\n| 4  | Goat       |\n| 5  | Giant goat |\n| 6  | Giant boar |\n| 7  | Lion       |\n| 8  | Brown bear |\n\n**Tan Bag of Tricks (table)**\n\n| d8 | Creature     |\n|----|--------------|\n| 1  | Jackal       |\n| 2  | Ape          |\n| 3  | Baboon       |\n| 4  | Axe beak     |\n| 5  | Black bear   |\n| 6  | Giant weasel |\n| 7  | Giant hyena  |\n| 8  | Tiger        |",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "bead-of-force",
        name: "Bead of Force",
        type: "Wondrous item",
        desc: "This small black sphere measures 3/4 of an inch in diameter and weighs an ounce. Typically, 1d4 + 4 _beads of force_ are found together.\n\nYou can use an action to throw the bead up to 60 feet. The bead explodes on impact and is destroyed. Each creature within a 10-foot radius of where the bead landed must succeed on a DC 15 Dexterity saving throw or take 5d4 force damage. A sphere of transparent force then encloses the area for 1 minute. Any creature that failed the save and is completely within the area is trapped inside this sphere. Creatures that succeeded on the save, or are partially within the area, are pushed away from the center of the sphere until they are no longer inside it. Only breathable air can pass through the sphere's wall. No attack or other effect can.\n\nAn enclosed creature can use its action to push against the sphere's wall, moving the sphere up to half the creature's walking speed. The sphere can be picked up, and its magic causes it to weigh only 1 pound, regardless of the weight of creatures inside.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "belt-of-dwarvenkind",
        name: "Belt of Dwarvenkind",
        type: "Wondrous item",
        desc: "While wearing this belt, you gain the following benefits:\n\n* Your Constitution score increases by 2, to a maximum of 20.\n* You have advantage on Charisma (Persuasion) checks made to interact with dwarves.\n\nIn addition, while attuned to the belt, you have a 50 percent chance each day at dawn of growing a full beard if you're capable of growing one, or a visibly thicker beard if you already have one.\n\nIf you aren't a dwarf, you gain the following additional benefits while wearing the belt:\n\n* You have advantage on saving throws against poison, and you have resistance against poison damage.\n* You have darkvision out to a range of 60 feet.\n* You can speak, read, and write Dwarvish.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "belt-of-giant-strength",
        name: "Belt of Giant Strength",
        type: "Wondrous item",
        desc: "While wearing this belt, your Strength score changes to a score granted by the belt. If your Strength is already equal to or greater than the belt's score, the item has no effect on you.\n\nSix varieties of this belt exist, corresponding with and having rarity according to the six kinds of true giants. The _belt of stone giant strength_ and the _belt of frost giant strength_ look different, but they have the same effect.\n\n| Type              | Strength | Rarity    |\n|-------------------|----------|-----------|\n| Hill giant        | 21       | Rare      |\n| Stone/frost giant | 23       | Very rare |\n| Fire giant        | 25       | Very rare |\n| Cloud giant       | 27       | Legendary |\n| Storm giant       | 29       | Legendary |",
        rarity: "varies",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "berserker-axe",
        name: "Berserker Axe",
        type: "Weapon (any axe)",
        desc: "You gain a +1 bonus to attack and damage rolls made with this magic weapon. In addition, while you are attuned to this weapon, your hit point maximum increases by 1 for each level you have attained.\n\n**_Curse_**. This axe is cursed, and becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the axe, keeping it within reach at all times. You also have disadvantage on attack rolls with weapons other than this one, unless no foe is within 60 feet of you that you can see or hear.\n\nWhenever a hostile creature damages you while the axe is in your possession, you must succeed on a DC 15 Wisdom saving throw or go berserk. While berserk, you must use your action each round to attack the creature nearest to you with the axe. If you can make extra attacks as part of the Attack action, you use those extra attacks, moving to attack the next nearest creature after you fell your current target. If you have multiple possible targets, you attack one at random. You are berserk until you start your turn with no creatures within 60 feet of you that you can see or hear.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "boots-of-elvenkind",
        name: "Boots of Elvenkind",
        type: "Wondrous item",
        desc: "While you wear these boots, your steps make no sound, regardless of the surface you are moving across. You also have advantage on Dexterity (Stealth) checks that rely on moving silently.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "boots-of-levitation",
        name: "Boots of Levitation",
        type: "Wondrous item",
        desc: "While you wear these boots, you can use an action to cast the _levitate_ spell on yourself at will.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "boots-of-speed",
        name: "Boots of Speed",
        type: "Wondrous item",
        desc: "While you wear these boots, you can use a bonus action and click the boots' heels together. If you do, the boots double your walking speed, and any creature that makes an opportunity attack against you has disadvantage on the attack roll. If you click your heels together again, you end the effect.\n\nWhen the boots' property has been used for a total of 10 minutes, the magic ceases to function until you finish a long rest.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "boots-of-striding-and-springing",
        name: "Boots of Striding and Springing",
        type: "Wondrous item",
        desc: "While you wear these boots, your walking speed becomes 30 feet, unless your walking speed is higher, and your speed isn't reduced if you are encumbered or wearing heavy armor. In addition, you can jump three times the normal distance, though you can't jump farther than your remaining movement would allow.",
        rarity: "uncommon",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "boots-of-the-winterlands",
        name: "Boots of the Winterlands",
        type: "Wondrous item",
        desc: "These furred boots are snug and feel quite warm. While you wear them, you gain the following benefits:\n\n* You have resistance to cold damage.\n* You ignore difficult terrain created by ice or snow.\n* You can tolerate temperatures as low as -50 degrees Fahrenheit without any additional protection. If you wear heavy clothes, you can tolerate temperatures as low as -100 degrees Fahrenheit.",
        rarity: "uncommon",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "bowl-of-commanding-water-elementals",
        name: "Bowl of Commanding Water Elementals",
        type: "Wondrous item",
        desc: "While this bowl is filled with water, you can use an action to speak the bowl's command word and summon a water elemental, as if you had cast the _conjure elemental_ spell. The bowl can't be used this way again until the next dawn.\n\nThe bowl is about 1 foot in diameter and half as deep. It weighs 3 pounds and holds about 3 gallons.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "bracers-of-archery",
        name: "Bracers of Archery",
        type: "Wondrous item",
        desc: "While wearing these bracers, you have proficiency with the longbow and shortbow, and you gain a +2 bonus to damage rolls on ranged attacks made with such weapons.",
        rarity: "uncommon",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "bracers-of-defense",
        name: "Bracers of Defense",
        type: "Wondrous item",
        desc: "While wearing these bracers, you gain a +2 bonus to AC if you are wearing no armor and using no shield.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "brazier-of-commanding-fire-elementals",
        name: "Brazier of Commanding Fire Elementals",
        type: "Wondrous item",
        desc: "While a fire burns in this brass brazier, you can use an action to speak the brazier's command word and summon a fire elemental, as if you had cast the _conjure elemental_ spell. The brazier can't be used this way again until the next dawn.\n\nThe brazier weighs 5 pounds.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "brooch-of-shielding",
        name: "Brooch of Shielding",
        type: "Wondrous item",
        desc: "While wearing this brooch, you have resistance to force damage, and you have immunity to damage from the _magic missile_ spell.",
        rarity: "uncommon",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "broom-of-flying",
        name: "Broom of Flying",
        type: "Wondrous item",
        desc: "This wooden broom, which weighs 3 pounds, functions like a mundane broom until you stand astride it and speak its command word. It then hovers beneath you and can be ridden in the air. It has a flying speed of 50 feet. It can carry up to 400 pounds, but its flying speed becomes 30 feet while carrying over 200 pounds. The broom stops hovering when you land.\n\nYou can send the broom to travel alone to a destination within 1 mile of you if you speak the command word, name the location, and are familiar with that place. The broom comes back to you when you speak another command word, provided that the broom is still within 1 mile of you.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "candle-of-invocation",
        name: "Candle of Invocation",
        type: "Wondrous item",
        desc: "This slender taper is dedicated to a deity and shares that deity's alignment. The candle's alignment can be detected with the _detect evil and good_ spell. The GM chooses the god and associated alignment or determines the alignment randomly.\n\n| d20   | Alignment       |\n|-------|-----------------|\n| 1-2   | Chaotic evil    |\n| 3-4   | Chaotic neutral |\n| 5-7   | Chaotic good    |\n| 8-9   | Neutral evil    |\n| 10-11 | Neutral         |\n| 12-13 | Neutral good    |\n| 14-15 | Lawful evil     |\n| 16-17 | Lawful neutral  |\n| 18-20 | Lawful good     |\n\nThe candle's magic is activated when the candle is lit, which requires an action. After burning for 4 hours, the candle is destroyed. You can snuff it out early for use at a later time. Deduct the time it burned in increments of 1 minute from the candle's total burn time.\n\nWhile lit, the candle sheds dim light in a 30-foot radius. Any creature within that light whose alignment matches that of the candle makes attack rolls, saving throws, and ability checks with advantage. In addition, a cleric or druid in the light whose alignment matches the candle's can cast 1st* level spells he or she has prepared without expending spell slots, though the spell's effect is as if cast with a 1st-level slot.\n\nAlternatively, when you light the candle for the first time, you can cast the _gate_ spell with it. Doing so destroys the candle.",
        rarity: "very rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "cape-of-the-mountebank",
        name: "Cape of the Mountebank",
        type: "Wondrous item",
        desc: "This cape smells faintly of brimstone. While wearing it, you can use it to cast the _dimension door_ spell as an action. This property of the cape can't be used again until the next dawn.\n\nWhen you disappear, you leave behind a cloud of smoke, and you appear in a similar cloud of smoke at your destination. The smoke lightly obscures the space you left and the space you appear in, and it dissipates at the end of your next turn. A light or stronger wind disperses the smoke.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "carpet-of-flying",
        name: "Carpet of Flying",
        type: "Wondrous item",
        desc: "You can speak the carpet's command word as an action to make the carpet hover and fly. It moves according to your spoken directions, provided that you are within 30 feet of it.\n\nFour sizes of _carpet of flying_ exist. The GM chooses the size of a given carpet or determines it randomly.\n\n| d100   | Size          | Capacity | Flying Speed |\n|--------|---------------|----------|--------------|\n| 01-20  | 3 ft. × 5 ft. | 200 lb.  | 80 feet      |\n| 21-55  | 4 ft. × 6 ft. | 400 lb.  | 60 feet      |\n| 56-80  | 5 ft. × 7 ft. | 600 lb.  | 40 feet      |\n| 81-100 | 6 ft. × 9 ft. | 800 lb.  | 30 feet      |\n\nA carpet can carry up to twice the weight shown on the table, but it flies at half speed if it carries more than its normal capacity.",
        rarity: "very rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "censer-of-controlling-air-elementals",
        name: "Censer of Controlling Air Elementals",
        type: "Wondrous item",
        desc: "While incense is burning in this censer, you can use an action to speak the censer's command word and summon an air elemental, as if you had cast the _conjure elemental_ spell. The censer can't be used this way again until the next dawn.\n\nThis 6-inch-wide, 1-foot-high vessel resembles a chalice with a decorated lid. It weighs 1 pound.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "chime-of-opening",
        name: "Chime of Opening",
        type: "Wondrous item",
        desc: "This hollow metal tube measures about 1 foot long and weighs 1 pound. You can strike it as an action, pointing it at an object within 120 feet of you that can be opened, such as a door, lid, or lock. The chime issues a clear tone, and one lock or latch on the object opens unless the sound can't reach the object. If no locks or latches remain, the object itself opens.\n\nThe chime can be used ten times. After the tenth time, it cracks and becomes useless.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "circlet-of-blasting",
        name: "Circlet of Blasting",
        type: "Wondrous item",
        desc: "While wearing this circlet, you can use an action to cast the _scorching ray_ spell with it. When you make the spell's attacks, you do so with an attack bonus of +5. The circlet can't be used this way again until the next dawn.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "cloak-of-arachnida",
        name: "Cloak of Arachnida",
        type: "Wondrous item",
        desc: "This fine garment is made of black silk interwoven with faint silvery threads. While wearing it, you gain the following benefits:\n\n* You have resistance to poison damage.\n* You have a climbing speed equal to your walking speed.\n* You can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free.\n* You can't be caught in webs of any sort and can move through webs as if they were difficult terrain.\n* You can use an action to cast the _web_ spell (save DC 13). The web created by the spell fills twice its normal area. Once used, this property of the cloak can't be used again until the next dawn.",
        rarity: "very rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "cloak-of-displacement",
        name: "Cloak of Displacement",
        type: "Wondrous item",
        desc: "While you wear this cloak, it projects an illusion that makes you appear to be standing in a place near your actual location, causing any creature to have disadvantage on attack rolls against you. If you take damage, the property ceases to function until the start of your next turn. This property is suppressed while you are incapacitated, restrained, or otherwise unable to move.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "cloak-of-elvenkind",
        name: "Cloak of Elvenkind",
        type: "Wondrous item",
        desc: "While you wear this cloak with its hood up, Wisdom (Perception) checks made to see you have disadvantage, and you have advantage on Dexterity (Stealth) checks made to hide, as the cloak's color shifts to camouflage you. Pulling the hood up or down requires an action.",
        rarity: "uncommon",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "cloak-of-protection",
        name: "Cloak of Protection",
        type: "Wondrous item",
        desc: "You gain a +1 bonus to AC and saving throws while you wear this cloak.",
        rarity: "uncommon",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "cloak-of-the-bat",
        name: "Cloak of the Bat",
        type: "Wondrous item",
        desc: "While wearing this cloak, you have advantage on Dexterity (Stealth) checks. In an area of dim light or darkness, you can grip the edges of the cloak with both hands and use it to fly at a speed of 40 feet. If you ever fail to grip the cloak's edges while flying in this way, or if you are no longer in dim light or darkness, you lose this flying speed.\n\nWhile wearing the cloak in an area of dim light or darkness, you can use your action to cast _polymorph_ on yourself, transforming into a bat. While you are in the form of the bat, you retain your Intelligence, Wisdom, and Charisma scores. The cloak can't be used this way again until the next dawn.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "cloak-of-the-manta-ray",
        name: "Cloak of the Manta Ray",
        type: "Wondrous item",
        desc: "While wearing this cloak with its hood up, you can breathe underwater, and you have a swimming speed of 60 feet. Pulling the hood up or down requires an action.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "crystal-ball",
        name: "Crystal Ball",
        type: "Wondrous item",
        desc: "The typical _crystal ball_, a very rare item, is about 6 inches in diameter. While touching it, you can cast the _scrying_ spell (save DC 17) with it.\n\nThe following _crystal ball_ variants are legendary items and have additional properties.\n\n**_Crystal Ball of Mind Reading_**. You can use an action to cast the _detect thoughts_ spell (save DC 17) while you are scrying with the _crystal ball_, targeting creatures you can see within 30 feet of the spell's sensor. You don't need to concentrate on this _detect thoughts_ to maintain it during its duration, but it ends if _scrying_ ends.\n\n**_Crystal Ball of Telepathy_**. While scrying with the crystal ball, you can communicate telepathically with creatures you can see within 30 feet of the spell's sensor. You can also use an action to cast the _suggestion_ spell (save DC 17) through the sensor on one of those creatures. You don't need to concentrate on this _suggestion_ to maintain it during its duration, but it ends if _scrying_ ends. Once used, the _suggestion_ power of the _crystal ball_ can't be used again until the next dawn.\n\n**_Crystal Ball of True Seeing_**. While scrying with the crystal ball, you have truesight with a radius of 120 feet centered on the spell's sensor.",
        rarity: "very rare or legendary",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "cube-of-force",
        name: "Cube of Force",
        type: "Wondrous item",
        desc: "This cube is about an inch across. Each face has a distinct marking on it that can be pressed. The cube starts with 36 charges, and it regains 1d20 expended charges daily at dawn.\n\nYou can use an action to press one of the cube's faces, expending a number of charges based on the chosen face, as shown in the Cube of Force Faces table. Each face has a different effect. If the cube has insufficient charges remaining, nothing happens. Otherwise, a barrier of invisible force springs into existence, forming a cube 15 feet on a side. The barrier is centered on you, moves with you, and lasts for 1 minute, until you use an action to press the cube's sixth face, or the cube runs out of charges. You can change the barrier's effect by pressing a different face of the cube and expending the requisite number of charges, resetting the duration.\n\nIf your movement causes the barrier to come into contact with a solid object that can't pass through the cube, you can't move any closer to that object as long as the barrier remains.\n\n**Cube of Force Faces (table)**\n\n| Face | Charges | Effect                                                                                                            |\n|------|---------|-------------------------------------------------------------------------------------------------------------------|\n| 1    | 1       | Gases, wind, and fog can't pass through the barrier.                                                              |\n| 2    | 2       | Nonliving matter can't pass through the barrier. Walls, floors, and ceilings can pass through at your discretion. |\n| 3    | 3       | Living matter can't pass through the barrier.                                                                     |\n| 4    | 4       | Spell effects can't pass through the barrier.                                                                     |\n| 5    | 5       | Nothing can pass through the barrier. Walls, floors, and ceilings can pass through at your discretion.            |\n| 6    | 0       | The barrier deactivates.                                                                                          |\n\nThe cube loses charges when the barrier is targeted by certain spells or comes into contact with certain spell or magic item effects, as shown in the table below.\n\n| Spell or Item    | Charges Lost |\n|------------------|--------------|\n| Disintegrate     | 1d12         |\n| Horn of blasting | 1d10         |\n| Passwall         | 1d6          |\n| Prismatic spray  | 1d20         |\n| Wall of fire     | 1d4          |",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "cubic-gate",
        name: "Cubic Gate",
        type: "Wondrous item",
        desc: "This cube is 3 inches across and radiates palpable magical energy. The six sides of the cube are each keyed to a different plane of existence, one of which is the Material Plane. The other sides are linked to planes determined by the GM.\n\nYou can use an action to press one side of the cube to cast the _gate_ spell with it, opening a portal to the plane keyed to that side. Alternatively, if you use an action to press one side twice, you can cast the _plane shift_ spell (save DC 17) with the cube and transport the targets to the plane keyed to that side.\n\nThe cube has 3 charges. Each use of the cube expends 1 charge. The cube regains 1d3 expended charges daily at dawn.",
        rarity: "legendary",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "dagger-of-venom",
        name: "Dagger of Venom",
        type: "Weapon (dagger)",
        desc: "You gain a +1 bonus to attack and damage rolls made with this magic weapon.\n\nYou can use an action to cause thick, black poison to coat the blade. The poison remains for 1 minute or until an attack using this weapon hits a creature. That creature must succeed on a DC 15 Constitution saving throw or take 2d10 poison damage and become poisoned for 1 minute. The dagger can't be used this way again until the next dawn.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "dancing-sword",
        name: "Dancing Sword",
        type: "Weapon (any sword)",
        desc: "You can use a bonus action to toss this magic sword into the air and speak the command word. When you do so, the sword begins to hover, flies up to 30 feet, and attacks one creature of your choice within 5 feet of it. The sword uses your attack roll and ability score modifier to damage rolls.\n\nWhile the sword hovers, you can use a bonus action to cause it to fly up to 30 feet to another spot within 30 feet of you. As part of the same bonus action, you can cause the sword to attack one creature within 5 feet of it.\n\nAfter the hovering sword attacks for the fourth time, it flies up to 30 feet and tries to return to your hand. If you have no hand free, it falls to the ground at your feet. If the sword has no unobstructed path to you, it moves as close to you as it can and then falls to the ground. It also ceases to hover if you grasp it or move more than 30 feet away from it.",
        rarity: "very rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "decanter-of-endless-water",
        name: "Decanter of Endless Water",
        type: "Wondrous item",
        desc: "This stoppered flask sloshes when shaken, as if it contains water. The decanter weighs 2 pounds.\n\nYou can use an action to remove the stopper and speak one of three command words, whereupon an amount of fresh water or salt water (your choice) pours out of the flask. The water stops pouring out at the start of your next turn. Choose from the following options:\n\n* \"Stream\" produces 1 gallon of water.\n* \"Fountain\" produces 5 gallons of water.\n* \"Geyser\" produces 30 gallons of water that gushes forth in a geyser 30 feet long and 1 foot wide. As a bonus action while holding the decanter, you can aim the geyser at a creature you can see within 30 feet of you. The target must succeed on a DC 13 Strength saving throw or take 1d4 bludgeoning damage and fall prone. Instead of a creature, you can target an object that isn't being worn or carried and that weighs no more than 200 pounds. The object is either knocked over or pushed up to 15 feet away from you.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "deck-of-illusions",
        name: "Deck of Illusions",
        type: "Wondrous item",
        desc: "This box contains a set of parchment cards. A full deck has 34 cards. A deck found as treasure is usually missing 1d20 - 1 cards.\n\nThe magic of the deck functions only if cards are drawn at random (you can use an altered deck of playing cards to simulate the deck). You can use an action to draw a card at random from the deck and throw it to the ground at a point within 30 feet of you.\n\nAn illusion of one or more creatures forms over the thrown card and remains until dispelled. An illusory creature appears real, of the appropriate size, and behaves as if it were a real creature except that it can do no harm. While you are within 120 feet of the illusory creature and can see it, you can use an action to move it magically anywhere within 30 feet of its card. Any physical interaction with the illusory creature reveals it to be an illusion, because objects pass through it. Someone who uses an action to visually inspect the creature identifies it as illusory with a successful DC 15 Intelligence (Investigation) check. The creature then appears translucent.\n\nThe illusion lasts until its card is moved or the illusion is dispelled. When the illusion ends, the image on its card disappears, and that card can't be used again.\n\n| Playing Card      | Illusion                         |\n|-------------------|----------------------------------|\n| Ace of hearts     | Red dragon                       |\n| King of hearts    | Knight and four guards           |\n| Queen of hearts   | Succubus or incubus              |\n| Jack of hearts    | Druid                            |\n| Ten of hearts     | Cloud giant                      |\n| Nine of hearts    | Ettin                            |\n| Eight of hearts   | Bugbear                          |\n| Two of hearts     | Goblin                           |\n| Ace of diamonds   | Beholder                         |\n| King of diamonds  | Archmage and mage apprentice     |\n| Queen of diamonds | Night hag                        |\n| Jack of diamonds  | Assassin                         |\n| Ten of diamonds   | Fire giant                       |\n| Nine of diamonds  | Ogre mage                        |\n| Eight of diamonds | Gnoll                            |\n| Two of diamonds   | Kobold                           |\n| Ace of spades     | Lich                             |\n| King of spades    | Priest and two acolytes          |\n| Queen of spades   | Medusa                           |\n| Jack of spades    | Veteran                          |\n| Ten of spades     | Frost giant                      |\n| Nine of spades    | Troll                            |\n| Eight of spades   | Hobgoblin                        |\n| Two of spades     | Goblin                           |\n| Ace of clubs      | Iron golem                       |\n| King of clubs     | Bandit captain and three bandits |\n| Queen of clubs    | Erinyes                          |\n| Jack of clubs     | Berserker                        |\n| Ten of clubs      | Hill giant                       |\n| Nine of clubs     | Ogre                             |\n| Eight of clubs    | Orc                              |\n| Two of clubs      | Kobold                           |\n| Jokers (2)        | You (the deck's owner)           |",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "deck-of-many-things",
        name: "Deck of Many Things",
        type: "Wondrous item",
        desc: "Usually found in a box or pouch, this deck contains a number of cards made of ivory or vellum. Most (75 percent) of these decks have only thirteen cards, but the rest have twenty-two.\n\nBefore you draw a card, you must declare how many cards you intend to draw and then draw them randomly (you can use an altered deck of playing cards to simulate the deck). Any cards drawn in excess of this number have no effect. Otherwise, as soon as you draw a card from the deck, its magic takes effect. You must draw each card no more than 1 hour after the previous draw. If you fail to draw the chosen number, the remaining number of cards fly from the deck on their own and take effect all at once.\n\nOnce a card is drawn, it fades from existence. Unless the card is the Fool or the Jester, the card reappears in the deck, making it possible to draw the same card twice.\n\n| Playing Card       | Card        |\n|--------------------|-------------|\n| Ace of diamonds    | Vizier\\*    |\n| King of diamonds   | Sun         |\n| Queen of diamonds  | Moon        |\n| Jack of diamonds   | Star        |\n| Two of diamonds    | Comet\\*     |\n| Ace of hearts      | The Fates\\* |\n| King of hearts     | Throne      |\n| Queen of hearts    | Key         |\n| Jack of hearts     | Knight      |\n| Two of hearts      | Gem\\*       |\n| Ace of clubs       | Talons\\*    |\n| King of clubs      | The Void    |\n| Queen of clubs     | Flames      |\n| Jack of clubs      | Skull       |\n| Two of clubs       | Idiot\\*     |\n| Ace of spades      | Donjon\\*    |\n| King of spades     | Ruin        |\n| Queen of spades    | Euryale     |\n| Jack of spades     | Rogue       |\n| Two of spades      | Balance\\*   |\n| Joker (with TM)    | Fool\\*      |\n| Joker (without TM) | Jester      |\n\n\\*Found only in a deck with twenty-two cards\n\n**_Balance_**. Your mind suffers a wrenching alteration, causing your alignment to change. Lawful becomes chaotic, good becomes evil, and vice versa. If you are true neutral or unaligned, this card has no effect on you.\n\n**_Comet_**. If you single-handedly defeat the next hostile monster or group of monsters you encounter, you gain experience points enough to gain one level. Otherwise, this card has no effect.\n\n**_Donjon_**. You disappear and become entombed in a state of suspended animation in an extradimensional sphere. Everything you were wearing and carrying stays behind in the space you occupied when you disappeared. You remain imprisoned until you are found and removed from the sphere. You can't be located by any divination magic, but a _wish_ spell can reveal the location of your prison. You draw no more cards.\n\n**_Euryale_**. The card's medusa-like visage curses you. You take a -2 penalty on saving throws while cursed in this way. Only a god or the magic of The Fates card can end this curse.\n\n**_The Fates_**. Reality's fabric unravels and spins anew, allowing you to avoid or erase one event as if it never happened. You can use the card's magic as soon as you draw the card or at any other time before you die.\n\n**_Flames_**. A powerful devil becomes your enemy. The devil seeks your ruin and plagues your life, savoring your suffering before attempting to slay you. This enmity lasts until either you or the devil dies.\n\n**_Fool_**. You lose 10,000 XP, discard this card, and draw from the deck again, counting both draws as one of your declared draws. If losing that much XP would cause you to lose a level, you instead lose an amount that leaves you with just enough XP to keep your level.\n\n**_Gem_**. Twenty-five pieces of jewelry worth 2,000 gp each or fifty gems worth 1,000 gp each appear at your feet.\n\n**_Idiot_**. Permanently reduce your Intelligence by 1d4 + 1 (to a minimum score of 1). You can draw one additional card beyond your declared draws.\n\n**_Jester_**. You gain 10,000 XP, or you can draw two additional cards beyond your declared draws.\n\n**_Key_**. A rare or rarer magic weapon with which you are proficient appears in your hands. The GM chooses the weapon.\n\n**_Knight_**. You gain the service of a 4th-level fighter who appears in a space you choose within 30 feet of you. The fighter is of the same race as you and serves you loyally until death, believing the fates have drawn him or her to you. You control this character.\n\n**_Moon_**. You are granted the ability to cast the _wish_ spell 1d3 times.\n\n**_Rogue_**. A nonplayer character of the GM's choice becomes hostile toward you. The identity of your new enemy isn't known until the NPC or someone else reveals it. Nothing less than a _wish_ spell or divine intervention can end the NPC's hostility toward you.\n\n**_Ruin_**. All forms of wealth that you carry or own, other than magic items, are lost to you. Portable property vanishes. Businesses, buildings, and land you own are lost in a way that alters reality the least. Any documentation that proves you should own something lost to this card also disappears.\n\n**_Skull_**. You summon an avatar of death-a ghostly humanoid skeleton clad in a tattered black robe and carrying a spectral scythe. It appears in a space of the GM's choice within 10 feet of you and attacks you, warning all others that you must win the battle alone. The avatar fights until you die or it drops to 0 hit points, whereupon it disappears. If anyone tries to help you, the helper summons its own avatar of death. A creature slain by an avatar of death can't be restored to life.\n\n#",
        rarity: "legendary",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "defender",
        name: "Defender",
        type: "Weapon (any sword)",
        desc: "You gain a +3 bonus to attack and damage rolls made with this magic weapon.\n\nThe first time you attack with the sword on each of your turns, you can transfer some or all of the sword's bonus to your Armor Class, instead of using the bonus on any attacks that turn. For example, you could reduce the bonus to your attack and damage rolls to +1 and gain a +2 bonus to AC. The adjusted bonuses remain in effect until the start of your next turn, although you must hold the sword to gain a bonus to AC from it.",
        rarity: "legendary",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "demon-armor",
        name: "Demon Armor",
        type: "Armor (plate)",
        desc: "While wearing this armor, you gain a +1 bonus to AC, and you can understand and speak Abyssal. In addition, the armor's clawed gauntlets turn unarmed strikes with your hands into magic weapons that deal slashing damage, with a +1 bonus to attack rolls and damage rolls and a damage die of 1d8.\n\n**_Curse_**. Once you don this cursed armor, you can't doff it unless you are targeted by the _remove curse_ spell or similar magic. While wearing the armor, you have disadvantage on attack rolls against demons and on saving throws against their spells and special abilities.",
        rarity: "very rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "dimensional-shackles",
        name: "Dimensional Shackles",
        type: "Wondrous item",
        desc: "You can use an action to place these shackles on an incapacitated creature. The shackles adjust to fit a creature of Small to Large size. In addition to serving as mundane manacles, the shackles prevent a creature bound by them from using any method of extradimensional movement, including teleportation or travel to a different plane of existence. They don't prevent the creature from passing through an interdimensional portal.\n\nYou and any creature you designate when you use the shackles can use an action to remove them. Once every 30 days, the bound creature can make a DC 30 Strength (Athletics) check. On a success, the creature breaks free and destroys the shackles.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "dragon-scale-mail",
        name: "Dragon Scale Mail",
        type: "Armor (scale mail)",
        desc: "Dragon scale mail is made of the scales of one kind of dragon. Sometimes dragons collect their cast-off scales and gift them to humanoids. Other times, hunters carefully skin and preserve the hide of a dead dragon. In either case, dragon scale mail is highly valued.\n\nWhile wearing this armor, you gain a +1 bonus to AC, you have advantage on saving throws against the Frightful Presence and breath weapons of dragons, and you have resistance to one damage type that is determined by the kind of dragon that provided the scales (see the table).\n\nAdditionally, you can focus your senses as an action to magically discern the distance and direction to the closest dragon within 30 miles of you that is of the same type as the armor. This special action can't be used again until the next dawn.\n\n| Dragon | Resistance |\n|--------|------------|\n| Black  | Acid       |\n| Blue   | Lightning  |\n| Brass  | Fire       |\n| Bronze | Lightning  |\n| Copper | Acid       |\n| Gold   | Fire       |\n| Green  | Poison     |\n| Red    | Fire       |\n| Silver | Cold       |\n| White  | Cold       |",
        rarity: "very rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "dragon-slayer",
        name: "Dragon Slayer",
        type: "Weapon (any sword)",
        desc: "You gain a +1 bonus to attack and damage rolls made with this magic weapon.\n\nWhen you hit a dragon with this weapon, the dragon takes an extra 3d6 damage of the weapon's type. For the purpose of this weapon, \"dragon\" refers to any creature with the dragon type, including dragon turtles and wyverns.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "dust-of-disappearance",
        name: "Dust of Disappearance",
        type: "Wondrous item",
        desc: "Found in a small packet, this powder resembles very fine sand. There is enough of it for one use. When you use an action to throw the dust into the air, you and each creature and object within 10 feet of you become invisible for 2d4 minutes. The duration is the same for all subjects, and the dust is consumed when its magic takes effect. If a creature affected by the dust attacks or casts a spell, the invisibility ends for that creature.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "dust-of-dryness",
        name: "Dust of Dryness",
        type: "Wondrous item",
        desc: "This small packet contains 1d6 + 4 pinches of dust. You can use an action to sprinkle a pinch of it over water. The dust turns a cube of water 15 feet on a side into one marble-sized pellet, which floats or rests near where the dust was sprinkled. The pellet's weight is negligible.\n\nSomeone can use an action to smash the pellet against a hard surface, causing the pellet to shatter and release the water the dust absorbed. Doing so ends that pellet's magic.\n\nAn elemental composed mostly of water that is exposed to a pinch of the dust must make a DC 13 Constitution saving throw, taking 10d6 necrotic damage on a failed save, or half as much damage on a successful one.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "dust-of-sneezing-and-choking",
        name: "Dust of Sneezing and Choking",
        type: "Wondrous item",
        desc: "Found in a small container, this powder resembles very fine sand. It appears to be _dust of disappearance_, and an _identify_ spell reveals it to be such. There is enough of it for one use.\n\nWhen you use an action to throw a handful of the dust into the air, you and each creature that needs to breathe within 30 feet of you must succeed on a DC 15 Constitution saving throw or become unable to breathe, while sneezing uncontrollably. A creature affected in this way is incapacitated and suffocating. As long as it is conscious, a creature can repeat the saving throw at the end of each of its turns, ending the effect on it on a success. The _lesser restoration_ spell can also end the effect on a creature.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "dwarven-plate",
        name: "Dwarven Plate",
        type: "Armor (plate)",
        desc: "While wearing this armor, you gain a +2 bonus to AC. In addition, if an effect moves you against your will along the ground, you can use your reaction to reduce the distance you are moved by up to 10 feet.",
        rarity: "very rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "dwarven-thrower",
        name: "Dwarven Thrower",
        type: "Weapon (warhammer)",
        desc: "You gain a +3 bonus to attack and damage rolls made with this magic weapon. It has the thrown property with a normal range of 20 feet and a long range of 60 feet. When you hit with a ranged attack using this weapon, it deals an extra 1d8 damage or, if the target is a giant, 2d8 damage. Immediately after the attack, the weapon flies back to your hand.",
        rarity: "very rare",
        requires_attunement: "requires attunement by a dwarf",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "efficient-quiver",
        name: "Efficient Quiver",
        type: "Wondrous item",
        desc: "Each of the quiver's three compartments connects to an extradimensional space that allows the quiver to hold numerous items while never weighing more than 2 pounds. The shortest compartment can hold up to sixty arrows, bolts, or similar objects. The midsize compartment holds up to eighteen javelins or similar objects. The longest compartment holds up to six long objects, such as bows, quarterstaffs, or spears.\n\nYou can draw any item the quiver contains as if doing so from a regular quiver or scabbard.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "efreeti-bottle",
        name: "Efreeti Bottle",
        type: "Wondrous item",
        desc: "This painted brass bottle weighs 1 pound. When you use an action to remove the stopper, a cloud of thick smoke flows out of the bottle. At the end of your turn, the smoke disappears with a flash of harmless fire, and an efreeti appears in an unoccupied space within 30 feet of you.\n\nThe first time the bottle is opened, the GM rolls to determine what happens.\n\n| d100   | Effect                                                                                                                                                                                                                                                                                                                                                 |\n|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|\n| 01-10  | The efreeti attacks you. After fighting for 5 rounds, the efreeti disappears, and the bottle loses its magic.                                                                                                                                                                                                                                          |\n| 11-90  | The efreeti serves you for 1 hour, doing as you command. Then the efreeti returns to the bottle, and a new stopper contains it. The stopper can't be removed for 24 hours. The next two times the bottle is opened, the same effect occurs. If the bottle is opened a fourth time, the efreeti escapes and disappears, and the bottle loses its magic. |\n| 91-100 | The efreeti can cast the wish spell three times for you. It disappears when it grants the final wish or after 1 hour, and the bottle loses its magic.                                                                                                                                                                                                  |",
        rarity: "very rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "elemental-gem",
        name: "Elemental Gem",
        type: "Wondrous item",
        desc: "This gem contains a mote of elemental energy. When you use an action to break the gem, an elemental is summoned as if you had cast the _conjure elemental_ spell, and the gem's magic is lost. The type of gem determines the elemental summoned by the spell.\n\n| Gem            | Summoned Elemental |\n|----------------|--------------------|\n| Blue sapphire  | Air elemental      |\n| Yellow diamond | Earth elemental    |\n| Red corundum   | Fire elemental     |\n| Emerald        | Water elemental    |",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "elven-chain",
        name: "Elven Chain",
        type: "Armor (chain shirt)",
        desc: "You gain a +1 bonus to AC while you wear this armor. You are considered proficient with this armor even if you lack proficiency with medium armor.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "eversmoking-bottle",
        name: "Eversmoking Bottle",
        type: "Wondrous item",
        desc: "Smoke leaks from the lead-stoppered mouth of this brass bottle, which weighs 1 pound. When you use an action to remove the stopper, a cloud of thick smoke pours out in a 60-foot radius from the bottle. The cloud's area is heavily obscured. Each minute the bottle remains open and within the cloud, the radius increases by 10 feet until it reaches its maximum radius of 120 feet.\n\nThe cloud persists as long as the bottle is open. Closing the bottle requires you to speak its command word as an action. Once the bottle is closed, the cloud disperses after 10 minutes. A moderate wind (11 to 20 miles per hour) can also disperse the smoke after 1 minute, and a strong wind (21 or more miles per hour) can do so after 1 round.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "eyes-of-charming",
        name: "Eyes of Charming",
        type: "Wondrous item",
        desc: "These crystal lenses fit over the eyes. They have 3 charges. While wearing them, you can expend 1 charge as an action to cast the _charm person_ spell (save DC 13) on a humanoid within 30 feet of you, provided that you and the target can see each other. The lenses regain all expended charges daily at dawn.",
        rarity: "uncommon",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "eyes-of-minute-seeing",
        name: "Eyes of Minute Seeing",
        type: "Wondrous item",
        desc: "These crystal lenses fit over the eyes. While wearing them, you can see much better than normal out to a range of 1 foot. You have advantage on Intelligence (Investigation) checks that rely on sight while searching an area or studying an object within that range.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "eyes-of-the-eagle",
        name: "Eyes of the Eagle",
        type: "Wondrous item",
        desc: "These crystal lenses fit over the eyes. While wearing them, you have advantage on Wisdom (Perception) checks that rely on sight. In conditions of clear visibility, you can make out details of even extremely distant creatures and objects as small as 2 feet across.",
        rarity: "uncommon",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "feather-token",
        name: "Feather Token",
        type: "Wondrous item",
        desc: "This tiny object looks like a feather. Different types of feather tokens exist, each with a different single* use effect. The GM chooses the kind of token or determines it randomly.\n\n| d100   | Feather Token |\n|--------|---------------|\n| 01-20  | Anchor        |\n| 21-35  | Bird          |\n| 36-50  | Fan           |\n| 51-65  | Swan boat     |\n| 66-90  | Tree          |\n| 91-100  | Whip          |\n\n**_Anchor_**. You can use an action to touch the token to a boat or ship. For the next 24 hours, the vessel can't be moved by any means. Touching the token to the vessel again ends the effect. When the effect ends, the token disappears.\n\n**_Bird_**. You can use an action to toss the token 5 feet into the air. The token disappears and an enormous, multicolored bird takes its place. The bird has the statistics of a roc, but it obeys your simple commands and can't attack. It can carry up to 500 pounds while flying at its maximum speed (16 miles an hour for a maximum of 144 miles per day, with a one-hour rest for every 3 hours of flying), or 1,000 pounds at half that speed. The bird disappears after flying its maximum distance for a day or if it drops to 0 hit points. You can dismiss the bird as an action.\n\n**_Fan_**. If you are on a boat or ship, you can use an action to toss the token up to 10 feet in the air. The token disappears, and a giant flapping fan takes its place. The fan floats and creates a wind strong enough to fill the sails of one ship, increasing its speed by 5 miles per hour for 8 hours. You can dismiss the fan as an action.\n\n**_Swan Boat_**. You can use an action to touch the token to a body of water at least 60 feet in diameter. The token disappears, and a 50-foot-long, 20-foot* wide boat shaped like a swan takes its place. The boat is self-propelled and moves across water at a speed of 6 miles per hour. You can use an action while on the boat to command it to move or to turn up to 90 degrees. The boat can carry up to thirty-two Medium or smaller creatures. A Large creature counts as four Medium creatures, while a Huge creature counts as nine. The boat remains for 24 hours and then disappears. You can dismiss the boat as an action.\n\n**_Tree_**. You must be outdoors to use this token. You can use an action to touch it to an unoccupied space on the ground. The token disappears, and in its place a nonmagical oak tree springs into existence. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius.\n\n**_Whip_**. You can use an action to throw the token to a point within 10 feet of you. The token disappears, and a floating whip takes its place. You can then use a bonus action to make a melee spell attack against a creature within 10 feet of the whip, with an attack bonus of +9. On a hit, the target takes 1d6 + 5 force damage.\n\nAs a bonus action on your turn, you can direct the whip to fly up to 20 feet and repeat the attack against a creature within 10 feet of it. The whip disappears after 1 hour, when you use an action to dismiss it, or when you are incapacitated or die.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "figurine-of-wondrous-power",
        name: "Figurine of Wondrous Power",
        type: "Wondrous item",
        desc: "A _figurine of wondrous power_ is a statuette of a beast small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n\nThe creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n\nThe creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description.\n\n**_Bronze Griffon (Rare)_**. This bronze statuette is of a griffon rampant. It can become a griffon for up to 6 hours. Once it has been used, it can't be used again until 5 days have passed.\n\n**_Ebony Fly (Rare)_**. This ebony statuette is carved in the likeness of a horsefly. It can become a giant fly for up to 12 hours and can be ridden as a mount. Once it has been used, it can't be used again until 2 days have passed.\n\n> ##### Giant Fly\n> **Armor Class** 11  \n> **Hit Points** 19 (3d10 + 3)  \n> **Speed** 30 ft., fly 60 ft.\n>\n> | STR     | DEX     | CON     | INT    | WIS     | CHA    |\n> |---------|---------|---------|--------|---------|--------|\n> | 14 (+2) | 13 (+1) | 13 (+1) | 2 (-4) | 10 (+0) | 3 (-4) |\n>\n> **Senses** darkvision 60 ft., passive Perception 10  \n> **Languages** -\n\n**_Golden Lions (Rare)_**. These gold statuettes of lions are always created in pairs. You can use one figurine or both simultaneously. Each can become a lion for up to 1 hour. Once a lion has been used, it can't be used again until 7 days have passed.\n\n**_Ivory Goats (Rare)_**. These ivory statuettes of goats are always created in sets of three. Each goat looks unique and functions differently from the others. Their properties are as follows:\n\n* The _goat of traveling_ can become a Large goat with the same statistics as a riding horse. It has 24 charges, and each hour or portion thereof it spends in beast form costs 1 charge. While it has charges, you can use it as often as you wish. When it runs out of charges, it reverts to a figurine and can't be used again until 7 days have passed, when it regains all its charges.\n* The _goat of travail_ becomes a giant goat for up to 3 hours. Once it has been used, it can't be used again until 30 days have passed.\n* The _goat of terror_ becomes a giant goat for up to 3 hours. The goat can't attack, but you can remove its horns and use them as weapons. One horn becomes a _+1 lance_, and the other becomes a _+2 longsword_. Removing a horn requires an action, and the weapons disappear and the horns return when the goat reverts to figurine form. In addition, the goat radiates a 30-foot-radius aura of terror while you are riding it. Any creature hostile to you that starts its turn in the aura must succeed on a DC 15 Wisdom saving throw or be frightened of the goat for 1 minute, or until the goat reverts to figurine form. The frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once it successfully saves against the effect, a creature is immune to the goat's aura for the next 24 hours. Once the figurine has been used, it can't be used again until 15 days have passed.\n\n**_Marble Elephant (Rare)_**. This marble statuette is about 4 inches high and long. It can become an elephant for up to 24 hours. Once it has been used, it can't be used again until 7 days have passed.\n\n**_Obsidian Steed (Very Rare)_**. This polished obsidian horse can become a nightmare for up to 24 hours. The nightmare fights only to defend itself. Once it has been used, it can't be used again until 5 days have passed.\n\nIf you have a good alignment, the figurine has a 10 percent chance each time you use it to ignore your orders, including a command to revert to figurine form. If you mount the nightmare while it is ignoring your orders, you and the nightmare are instantly transported to a random location on the plane of Hades, where the nightmare reverts to figurine form.\n\n**_Onyx Dog (Rare)_**. This onyx statuette of a dog can become a mastiff for up to 6 hours. The mastiff has an Intelligence of 8 and can speak Common. It also has darkvision out to a range of 60 feet and can see invisible creatures and objects within that range. Once it has been used, it can't be used again until 7 days have passed.\n\n**_Serpentine Owl (Rare)_**. This serpentine statuette of an owl can become a giant owl for up to 8 hours. Once it has been used, it can't be used again until 2 days have passed. The owl can telepathically communicate with you at any range if you and it are on the same plane of existence.\n\n**_Silver Raven (Uncommon)_**. This silver statuette of a raven can become a raven for up to 12 hours. Once it has been used, it can't be used again until 2 days have passed. While in raven form, the figurine allows you to cast the _animal messenger_ spell on it at will.",
        rarity: "rarity by figurine",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "flame-tongue",
        name: "Flame Tongue",
        type: "Weapon (any sword)",
        desc: "You can use a bonus action to speak this magic sword's command word, causing flames to erupt from the blade. These flames shed bright light in a 40-foot radius and dim light for an additional 40 feet. While the sword is ablaze, it deals an extra 2d6 fire damage to any target it hits. The flames last until you use a bonus action to speak the command word again or until you drop or sheathe the sword.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "folding-boat",
        name: "Folding Boat",
        type: "Wondrous item",
        desc: "This object appears as a wooden box that measures 12 inches long, 6 inches wide, and 6 inches deep. It weighs 4 pounds and floats. It can be opened to store items inside. This item also has three command words, each requiring you to use an action to speak it.\n\nOne command word causes the box to unfold into a boat 10 feet long, 4 feet wide, and 2 feet deep. The boat has one pair of oars, an anchor, a mast, and a lateen sail. The boat can hold up to four Medium creatures comfortably.\n\nThe second command word causes the box to unfold into a ship 24 feet long, 8 feet wide, and 6 feet deep. The ship has a deck, rowing seats, five sets of oars, a steering oar, an anchor, a deck cabin, and a mast with a square sail. The ship can hold fifteen Medium creatures comfortably.\n\nWhen the box becomes a vessel, its weight becomes that of a normal vessel its size, and anything that was stored in the box remains in the boat.\n\nThe third command word causes the _folding boat_ to fold back into a box, provided that no creatures are aboard. Any objects in the vessel that can't fit inside the box remain outside the box as it folds. Any objects in the vessel that can fit inside the box do so.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "frost-brand",
        name: "Frost Brand",
        type: "Weapon (any sword)",
        desc: "When you hit with an attack using this magic sword, the target takes an extra 1d6 cold damage. In addition, while you hold the sword, you have resistance to fire damage.\n\nIn freezing temperatures, the blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet.\n\nWhen you draw this weapon, you can extinguish all nonmagical flames within 30 feet of you. This property can be used no more than once per hour.",
        rarity: "very rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "gauntlets-of-ogre-power",
        name: "Gauntlets of Ogre Power",
        type: "Wondrous item",
        desc: "Your Strength score is 19 while you wear these gauntlets. They have no effect on you if your Strength is already 19 or higher.",
        rarity: "uncommon",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "gem-of-brightness",
        name: "Gem of Brightness",
        type: "Wondrous item",
        desc: "This prism has 50 charges. While you are holding it, you can use an action to speak one of three command words to cause one of the following effects:\n\n* The first command word causes the gem to shed bright light in a 30-foot radius and dim light for an additional 30 feet. This effect doesn't expend a charge. It lasts until you use a bonus action to repeat the command word or until you use another function of the gem.\n* The second command word expends 1 charge and causes the gem to fire a brilliant beam of light at one creature you can see within 60 feet of you. The creature must succeed on a DC 15 Constitution saving throw or become blinded for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n* The third command word expends 5 charges and causes the gem to flare with blinding light in a 30* foot cone originating from it. Each creature in the cone must make a saving throw as if struck by the beam created with the second command word.\n\nWhen all of the gem's charges are expended, the gem becomes a nonmagical jewel worth 50 gp.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "gem-of-seeing",
        name: "Gem of Seeing",
        type: "Wondrous item",
        desc: "This gem has 3 charges. As an action, you can speak the gem's command word and expend 1 charge. For the next 10 minutes, you have truesight out to 120 feet when you peer through the gem.\n\nThe gem regains 1d3 expended charges daily at dawn.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "giant-slayer",
        name: "Giant Slayer",
        type: "Weapon (any axe or sword)",
        desc: "You gain a +1 bonus to attack and damage rolls made with this magic weapon.\n\nWhen you hit a giant with it, the giant takes an extra 2d6 damage of the weapon's type and must succeed on a DC 15 Strength saving throw or fall prone. For the purpose of this weapon, \"giant\" refers to any creature with the giant type, including ettins and trolls.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "glamoured-studded-leather",
        name: "Glamoured Studded Leather",
        type: "Armor (studded leather)",
        desc: "While wearing this armor, you gain a +1 bonus to AC. You can also use a bonus action to speak the armor's command word and cause the armor to assume the appearance of a normal set of clothing or some other kind of armor. You decide what it looks like, including color, style, and accessories, but the armor retains its normal bulk and weight. The illusory appearance lasts until you use this property again or remove the armor.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "gloves-of-missile-snaring",
        name: "Gloves of Missile Snaring",
        type: "Wondrous item",
        desc: "These gloves seem to almost meld into your hands when you don them. When a ranged weapon attack hits you while you're wearing them, you can use your reaction to reduce the damage by 1d10 + your Dexterity modifier, provided that you have a free hand. If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in that hand.",
        rarity: "uncommon",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "gloves-of-swimming-and-climbing",
        name: "Gloves of Swimming and Climbing",
        type: "Wondrous item",
        desc: "While wearing these gloves, climbing and swimming don't cost you extra movement, and you gain a +5 bonus to Strength (Athletics) checks made to climb or swim.",
        rarity: "uncommon",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "goggles-of-night",
        name: "Goggles of Night",
        type: "Wondrous item",
        desc: "While wearing these dark lenses, you have darkvision out to a range of 60 feet. If you already have darkvision, wearing the goggles increases its range by 60 feet.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "hammer-of-thunderbolts",
        name: "Hammer of Thunderbolts",
        type: "Weapon (maul)",
        desc: "You gain a +1 bonus to attack and damage rolls made with this magic weapon.\n\n**_Giant's Bane (Requires Attunement)_**. You must be wearing a _belt of giant strength_ (any variety) and _gauntlets of ogre power_ to attune to this weapon. The attunement ends if you take off either of those items. While you are attuned to this weapon and holding it, your Strength score increases by 4 and can exceed 20, but not 30. When you roll a 20 on an attack roll made with this weapon against a giant, the giant must succeed on a DC 17 Constitution saving throw or die.\n\nThe hammer also has 5 charges. While attuned to it, you can expend 1 charge and make a ranged weapon attack with the hammer, hurling it as if it had the thrown property with a normal range of 20 feet and a long range of 60 feet. If the attack hits, the hammer unleashes a thunderclap audible out to 300 feet. The target and every creature within 30 feet of it must succeed on a DC 17 Constitution saving throw or be stunned until the end of your next turn. The hammer regains 1d4 + 1 expended charges daily at dawn.",
        rarity: "legendary",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "handy-haversack",
        name: "Handy Haversack",
        type: "Wondrous item",
        desc: "This backpack has a central pouch and two side pouches, each of which is an extradimensional space. Each side pouch can hold up to 20 pounds of material, not exceeding a volume of 2 cubic feet. The large central pouch can hold up to 8 cubic feet or 80 pounds of material. The backpack always weighs 5 pounds, regardless of its contents.\n\nPlacing an object in the haversack follows the normal rules for interacting with objects. Retrieving an item from the haversack requires you to use an action. When you reach into the haversack for a specific item, the item is always magically on top.\n\nThe haversack has a few limitations. If it is overloaded, or if a sharp object pierces it or tears it, the haversack ruptures and is destroyed. If the haversack is destroyed, its contents are lost forever, although an artifact always turns up again somewhere. If the haversack is turned inside out, its contents spill forth, unharmed, and the haversack must be put right before it can be used again. If a breathing creature is placed within the haversack, the creature can survive for up to 10 minutes, after which time it begins to suffocate.\n\nPlacing the haversack inside an extradimensional space created by a _bag of holding_, _portable hole_, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it and deposited in a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "hat-of-disguise",
        name: "Hat of Disguise",
        type: "Wondrous item",
        desc: "While wearing this hat, you can use an action to cast the _disguise self_ spell from it at will. The spell ends if the hat is removed.",
        rarity: "uncommon",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "headband-of-intellect",
        name: "Headband of Intellect",
        type: "Wondrous item",
        desc: "Your Intelligence score is 19 while you wear this headband. It has no effect on you if your Intelligence is already 19 or higher.",
        rarity: "uncommon",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "helm-of-brilliance",
        name: "Helm of Brilliance",
        type: "Wondrous item",
        desc: "This dazzling helm is set with 1d10 diamonds, 2d10 rubies, 3d10 fire opals, and 4d10 opals. Any gem pried from the helm crumbles to dust. When all the gems are removed or destroyed, the helm loses its magic.\n\nYou gain the following benefits while wearing it:\n\n* You can use an action to cast one of the following spells (save DC 18), using one of the helm's gems of the specified type as a component: _daylight_ (opal), _fireball_ (fire opal), _prismatic spray_ (diamond), or _wall of fire_ (ruby). The gem is destroyed when the spell is cast and disappears from the helm.\n* As long as it has at least one diamond, the helm emits dim light in a 30-foot radius when at least one undead is within that area. Any undead that starts its turn in that area takes 1d6 radiant damage.\n* As long as the helm has at least one ruby, you have resistance to fire damage.\n* As long as the helm has at least one fire opal, you can use an action and speak a command word to cause one weapon you are holding to burst into flames. The flames emit bright light in a 10-foot radius and dim light for an additional 10 feet. The flames are harmless to you and the weapon. When you hit with an attack using the blazing weapon, the target takes an extra 1d6 fire damage. The flames last until you use a bonus action to speak the command word again or until you drop or stow the weapon.\n\nRoll a d20 if you are wearing the helm and take fire damage as a result of failing a saving throw against a spell. On a roll of 1, the helm emits beams of light from its remaining gems. Each creature within 60 feet of the helm other than you must succeed on a DC 17 Dexterity saving throw or be struck by a beam, taking radiant damage equal to the number of gems in the helm. The helm and its gems are then destroyed.",
        rarity: "very rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "helm-of-comprehending-languages",
        name: "Helm of Comprehending Languages",
        type: "Wondrous item",
        desc: "While wearing this helm, you can use an action to cast the _comprehend languages_ spell from it at will.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "helm-of-telepathy",
        name: "Helm of Telepathy",
        type: "Wondrous item",
        desc: "While wearing this helm, you can use an action to cast the _detect thoughts_ spell (save DC 13) from it. As long as you maintain concentration on the spell, you can use a bonus action to send a telepathic message to a creature you are focused on. It can reply-using a bonus action to do so-while your focus on it continues.\n\nWhile focusing on a creature with _detect thoughts_, you can use an action to cast the _suggestion_ spell (save DC 13) from the helm on that creature. Once used, the _suggestion_ property can't be used again until the next dawn.",
        rarity: "uncommon",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "helm-of-teleportation",
        name: "Helm of Teleportation",
        type: "Wondrous item",
        desc: "This helm has 3 charges. While wearing it, you can use an action and expend 1 charge to cast the _teleport_ spell from it. The helm regains 1d3\n\nexpended charges daily at dawn.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "holy-avenger",
        name: "Holy Avenger",
        type: "Weapon (any sword)",
        desc: "You gain a +3 bonus to attack and damage rolls made with this magic weapon. When you hit a fiend or an undead with it, that creature takes an extra 2d10 radiant damage.\n\nWhile you hold the drawn sword, it creates an aura in a 10-foot radius around you. You and all creatures friendly to you in the aura have advantage on saving throws against spells and other magical effects. If you have 17 or more levels in the paladin class, the radius of the aura increases to 30 feet.",
        rarity: "legendary",
        requires_attunement: "requires attunement by a paladin",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "horn-of-blasting",
        name: "Horn of Blasting",
        type: "Wondrous item",
        desc: "You can use an action to speak the horn's command word and then blow the horn, which emits a thunderous blast in a 30-foot cone that is audible 600 feet away. Each creature in the cone must make a DC 15 Constitution saving throw. On a failed save, a creature takes 5d6 thunder damage and is deafened for 1 minute. On a successful save, a creature takes half as much damage and isn't deafened. Creatures and objects made of glass or crystal have disadvantage on the saving throw and take 10d6 thunder damage instead of 5d6.\n\nEach use of the horn's magic has a 20 percent chance of causing the horn to explode. The explosion deals 10d6 fire damage to the blower and destroys the horn.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "horn-of-valhalla",
        name: "Horn of Valhalla",
        type: "Wondrous item",
        desc: "You can use an action to blow this horn. In response, warrior spirits from the Valhalla appear within 60 feet of you. They use the statistics of a berserker. They return to Valhalla after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed.\n\nFour types of _horn of Valhalla_ are known to exist, each made of a different metal. The horn's type determines how many berserkers answer its summons, as well as the requirement for its use. The GM chooses the horn's type or determines it randomly.\n\n| d100   | Horn Type | Berserkers Summoned | Requirement                          |\n|--------|-----------|---------------------|--------------------------------------|\n| 01-40  | Silver    | 2d4 + 2             | None                                 |\n| 41-75  | Brass     | 3d4 + 3             | Proficiency with all simple weapons  |\n| 76-90  | Bronze    | 4d4 + 4             | Proficiency with all medium armor    |\n| 91-00  | Iron      | 5d4 + 5             | Proficiency with all martial weapons |\n\nIf you blow the horn without meeting its requirement, the summoned berserkers attack you. If you meet the requirement, they are friendly to you and your companions and follow your commands.",
        rarity: "rare (silver or brass), very rare (bronze) or legendary (iron)",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "horseshoes-of-a-zephyr",
        name: "Horseshoes of a Zephyr",
        type: "Wondrous item",
        desc: "These iron horseshoes come in a set of four. While all four shoes are affixed to the hooves of a horse or similar creature, they allow the creature to move normally while floating 4 inches above the ground. This effect means the creature can cross or stand above nonsolid or unstable surfaces, such as water or lava. The creature leaves no tracks and ignores difficult terrain. In addition, the creature can move at normal speed for up to 12 hours a day without suffering exhaustion from a forced march.",
        rarity: "very rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "horseshoes-of-speed",
        name: "Horseshoes of Speed",
        type: "Wondrous item",
        desc: "These iron horseshoes come in a set of four. While all four shoes are affixed to the hooves of a horse or similar creature, they increase the creature's walking speed by 30 feet.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "immovable-rod",
        name: "Immovable Rod",
        type: "Rod",
        desc: "This flat iron rod has a button on one end. You can use an action to press the button, which causes the rod to become magically fixed in place. Until you or another creature uses an action to push the button again, the rod doesn't move, even if it is defying gravity. The rod can hold up to 8,000 pounds of weight. More weight causes the rod to deactivate and fall. A creature can use an action to make a DC 30 Strength check, moving the fixed rod up to 10 feet on a success.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "instant-fortress",
        name: "Instant Fortress",
        type: "Wondrous item",
        desc: "You can use an action to place this 1-inch metal cube on the ground and speak its command word. The cube rapidly grows into a fortress that remains until you use an action to speak the command word that dismisses it, which works only if the fortress is empty.\n\nThe fortress is a square tower, 20 feet on a side and 30 feet high, with arrow slits on all sides and a battlement atop it. Its interior is divided into two floors, with a ladder running along one wall to connect them. The ladder ends at a trapdoor leading to the roof. When activated, the tower has a small door on the side facing you. The door opens only at your command, which you can speak as a bonus action. It is immune to the _knock_ spell and similar magic, such as that of a _chime of opening_.\n\nEach creature in the area where the fortress appears must make a DC 15 Dexterity saving throw, taking 10d10 bludgeoning damage on a failed save, or half as much damage on a successful one. In either case, the creature is pushed to an unoccupied space outside but next to the fortress. Objects in the area that aren't being worn or carried take this damage and are pushed automatically.\n\nThe tower is made of adamantine, and its magic prevents it from being tipped over. The roof, the door, and the walls each have 100 hit points,\n\nimmunity to damage from nonmagical weapons excluding siege weapons, and resistance to all other damage. Only a _wish_ spell can repair the fortress (this use of the spell counts as replicating a spell of 8th level or lower). Each casting of _wish_ causes the roof, the door, or one wall to regain 50 hit points.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "ioun-stone",
        name: "Ioun Stone",
        type: "Wondrous item",
        desc: "An _Ioun stone_ is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of _Ioun stone_ exist, each type a distinct combination of shape and color.\n\nWhen you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n\nA stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n\n**_Absorption (Very Rare)_**. While this pale lavender ellipsoid orbits your head, you can use your reaction to cancel a spell of 4th level or lower cast by a creature you can see and targeting only you.\n\nOnce the stone has canceled 20 levels of spells, it burns out and turns dull gray, losing its magic. If you are targeted by a spell whose level is higher than the number of spell levels the stone has left, the stone can't cancel it.\n\n**_Agility (Very Rare)_**. Your Dexterity score increases by 2, to a maximum of 20, while this deep red sphere orbits your head.\n\n**_Awareness (Rare)_**. You can't be surprised while this dark blue rhomboid orbits your head.\n\n**_Fortitude (Very Rare)_**. Your Constitution score increases by 2, to a maximum of 20, while this pink rhomboid orbits your head.\n\n**_Greater Absorption (Legendary)_**. While this marbled lavender and green ellipsoid orbits your head, you can use your reaction to cancel a spell of 8th level or lower cast by a creature you can see and targeting only you.\n\nOnce the stone has canceled 50 levels of spells, it burns out and turns dull gray, losing its magic. If you are targeted by a spell whose level is higher than the number of spell levels the stone has left, the stone can't cancel it.\n\n**_Insight (Very Rare)_**. Your Wisdom score increases by 2, to a maximum of 20, while this incandescent blue sphere orbits your head.\n\n**_Intellect (Very Rare)_**. Your Intelligence score increases by 2, to a maximum of 20, while this marbled scarlet and blue sphere orbits your head.\n\n**_Leadership (Very Rare)_**. Your Charisma score increases by 2, to a maximum of 20, while this marbled pink and green sphere orbits your head.\n\n**_Mastery (Legendary)_**. Your proficiency bonus increases by 1 while this pale green prism orbits your head.\n\n**_Protection (Rare)_**. You gain a +1 bonus to AC while this dusty rose prism orbits your head.\n\n**_Regeneration (Legendary)_**. You regain 15 hit points at the end of each hour this pearly white spindle orbits your head, provided that you have at least 1 hit point.\n\n**_Reserve (Rare)_**. This vibrant purple prism stores spells cast into it, holding them until you use them. The stone can store up to 3 levels worth of spells at a time. When found, it contains 1d4 - 1 levels of stored spells chosen by the GM.\n\nAny creature can cast a spell of 1st through 3rd level into the stone by touching it as the spell is cast. The spell has no effect, other than to be stored in the stone. If the stone can't hold the spell, the spell is expended without effect. The level of the slot used to cast the spell determines how much space it uses.\n\nWhile this stone orbits your head, you can cast any spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster, but is otherwise treated as if you cast the spell. The spell cast from the stone is no longer stored in it, freeing up space.\n\n**_Strength (Very Rare)_**. Your Strength score increases by 2, to a maximum of 20, while this pale blue rhomboid orbits your head.\n\n**_Sustenance (Rare)_**. You don't need to eat or drink while this clear spindle orbits your head.",
        rarity: "varies",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "iron-bands-of-binding",
        name: "Iron Bands of Binding",
        type: "Wondrous item",
        desc: "This rusty iron sphere measures 3 inches in diameter and weighs 1 pound. You can use an action to speak the command word and throw the sphere at a Huge or smaller creature you can see within 60 feet of you. As the sphere moves through the air, it opens into a tangle of metal bands.\n\nMake a ranged attack roll with an attack bonus equal to your Dexterity modifier plus your proficiency bonus. On a hit, the target is restrained until you take a bonus action to speak the command word again to release it. Doing so, or missing with the attack, causes the bands to contract and become a sphere once more.\n\nA creature, including the one restrained, can use an action to make a DC 20 Strength check to break the iron bands. On a success, the item is destroyed, and the restrained creature is freed. If the check fails, any further attempts made by that creature automatically fail until 24 hours have elapsed.\n\nOnce the bands are used, they can't be used again until the next dawn.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "iron-flask",
        name: "Iron Flask",
        type: "Wondrous item",
        desc: "This iron bottle has a brass stopper. You can use an action to speak the flask's command word, targeting a creature that you can see within 60 feet of you. If the target is native to a plane of existence other than the one you're on, the target must succeed on a DC 17 Wisdom saving throw or be trapped in the flask. If the target has been trapped by the flask before, it has advantage on the saving throw. Once trapped, a creature remains in the flask until released. The flask can hold only one creature at a time. A creature trapped in the flask doesn't need to breathe, eat, or drink and doesn't age.\n\nYou can use an action to remove the flask's stopper and release the creature the flask contains. The creature is friendly to you and your companions for 1 hour and obeys your commands for that duration. If you give no commands or give it a command that is likely to result in its death, it defends itself but otherwise takes no actions. At the end of the duration, the creature acts in accordance with its normal disposition and alignment.\n\nAn _identify_ spell reveals that a creature is inside the flask, but the only way to determine the type of creature is to open the flask. A newly discovered bottle might already contain a creature chosen by the GM or determined randomly.\n\n| d100  | Contents          |\n|-------|-------------------|\n| 1-50  | Empty             |\n| 51-54 | Demon (type 1)    |\n| 55-58 | Demon (type 2)    |\n| 59-62 | Demon (type 3)    |\n| 63-64 | Demon (type 4)    |\n| 65    | Demon (type 5)    |\n| 66    | Demon (type 6)    |\n| 67    | Deva              |\n| 68-69 | Devil (greater)   |\n| 70-73 | Devil (lesser)    |\n| 74-75 | Djinni            |\n| 76-77 | Efreeti           |\n| 78-83 | Elemental (any)   |\n| 84-86 | Invisible stalker |\n| 87-90 | Night hag         |\n| 91    | Planetar          |\n| 92-95 | Salamander        |\n| 96    | Solar             |\n| 97-99 | Succubus/incubus  |\n| 100   | Xorn              |",
        rarity: "legendary",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "javelin-of-lightning",
        name: "Javelin of Lightning",
        type: "Weapon (javelin)",
        desc: "This javelin is a magic weapon. When you hurl it and speak its command word, it transforms into a bolt of lightning, forming a line 5 feet wide that extends out from you to a target within 120 feet. Each creature in the line excluding you and the target must make a DC 13 Dexterity saving throw, taking 4d6 lightning damage on a failed save, and half as much damage on a successful one. The lightning bolt turns back into a javelin when it reaches the target. Make a ranged weapon attack against the target. On a hit, the target takes damage from the javelin plus 4d6 lightning damage.\n\nThe javelin's property can't be used again until the next dawn. In the meantime, the javelin can still be used as a magic weapon.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "lantern-of-revealing",
        name: "Lantern of Revealing",
        type: "Wondrous item",
        desc: "While lit, this hooded lantern burns for 6 hours on 1 pint of oil, shedding bright light in a 30-foot radius and dim light for an additional 30 feet. Invisible creatures and objects are visible as long as they are in the lantern's bright light. You can use an action to lower the hood, reducing the light to dim light in a 5* foot radius.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "luck-blade",
        name: "Luck Blade",
        type: "Weapon (any sword)",
        desc: "You gain a +1 bonus to attack and damage rolls made with this magic weapon. While the sword is on your person, you also gain a +1 bonus to saving throws.\n\n**_Luck_**. If the sword is on your person, you can call on its luck (no action required) to reroll one attack roll, ability check, or saving throw you dislike. You must use the second roll. This property can't be used again until the next dawn.\n\n**_Wish_**. The sword has 1d4 - 1 charges. While holding it, you can use an action to expend 1 charge and cast the _wish_ spell from it. This property can't be used again until the next dawn. The sword loses this property if it has no charges.",
        rarity: "legendary",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "mace-of-disruption",
        name: "Mace of Disruption",
        type: "Weapon (mace)",
        desc: "When you hit a fiend or an undead with this magic weapon, that creature takes an extra 2d6 radiant damage. If the target has 25 hit points or fewer after taking this damage, it must succeed on a DC 15 Wisdom saving throw or be destroyed. On a successful save, the creature becomes frightened of you until the end of your next turn.\n\nWhile you hold this weapon, it sheds bright light in a 20-foot radius and dim light for an additional 20 feet.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "mace-of-smiting",
        name: "Mace of Smiting",
        type: "Weapon (mace)",
        desc: "You gain a +1 bonus to attack and damage rolls made with this magic weapon. The bonus increases to +3 when you use the mace to attack a construct.\n\nWhen you roll a 20 on an attack roll made with this weapon, the target takes an extra 2d6 bludgeoning damage, or 4d6 bludgeoning damage if it's a construct. If a construct has 25 hit points or fewer after taking this damage, it is destroyed.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "mace-of-terror",
        name: "Mace of Terror",
        type: "Weapon (mace)",
        desc: "This magic weapon has 3 charges. While holding it, you can use an action and expend 1 charge to release a wave of terror. Each creature of your choice in a 30-foot radius extending from you must succeed on a DC 15 Wisdom saving throw or become frightened of you for 1 minute. While it is frightened in this way, a creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If it has nowhere it can move, the creature can use the Dodge action. At the end of each of its turns, a creature can repeat the saving throw, ending the effect on itself on a success.\n\nThe mace regains 1d3 expended charges daily at dawn.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "mantle-of-spell-resistance",
        name: "Mantle of Spell Resistance",
        type: "Wondrous item",
        desc: "You have advantage on saving throws against spells while you wear this cloak.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "manual-of-bodily-health",
        name: "Manual of Bodily Health",
        type: "Wondrous item",
        desc: "This book contains health and diet tips, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Constitution score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.",
        rarity: "very rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "manual-of-gainful-exercise",
        name: "Manual of Gainful Exercise",
        type: "Wondrous item",
        desc: "This book describes fitness exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Strength score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.",
        rarity: "very rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "manual-of-golems",
        name: "Manual of Golems",
        type: "Wondrous item",
        desc: "This tome contains information and incantations necessary to make a particular type of golem. The GM chooses the type or determines it randomly. To decipher and use the manual, you must be a spellcaster with at least two 5th-level spell slots. A creature that can't use a _manual of golems_ and attempts to read it takes 6d6 psychic damage.\n\n| d20   | Golem | Time     | Cost       |\n|-------|-------|----------|------------|\n| 1-5   | Clay  | 30 days  | 65,000 gp  |\n| 6-17  | Flesh | 60 days  | 50,000 gp  |\n| 18    | Iron  | 120 days | 100,000 gp |\n| 19-20 | Stone | 90 days  | 80,000 gp  |\n\nTo create a golem, you must spend the time shown on the table, working without interruption with the manual at hand and resting no more than 8 hours per day. You must also pay the specified cost to purchase supplies.\n\nOnce you finish creating the golem, the book is consumed in eldritch flames. The golem becomes animate when the ashes of the manual are sprinkled on it. It is under your control, and it understands and obeys your spoken commands.",
        rarity: "very rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "manual-of-quickness-of-action",
        name: "Manual of Quickness of Action",
        type: "Wondrous item",
        desc: "This book contains coordination and balance exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Dexterity score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.",
        rarity: "very rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "marvelous-pigments",
        name: "Marvelous Pigments",
        type: "Wondrous item",
        desc: "Typically found in 1d4 pots inside a fine wooden box with a brush (weighing 1 pound in total), these pigments allow you to create three-dimensional objects by painting them in two dimensions. The paint flows from the brush to form the desired object as you concentrate on its image.\n\nEach pot of paint is sufficient to cover 1,000 square feet of a surface, which lets you create inanimate objects or terrain features-such as a door, a pit, flowers, trees, cells, rooms, or weapons- that are up to 10,000 cubic feet. It takes 10 minutes to cover 100 square feet.\n\nWhen you complete the painting, the object or terrain feature depicted becomes a real, nonmagical object. Thus, painting a door on a wall creates an actual door that can be opened to whatever is beyond. Painting a pit on a floor creates a real pit, and its depth counts against the total area of objects you create.\n\nNothing created by the pigments can have a value greater than 25 gp. If you paint an object of greater value (such as a diamond or a pile of gold), the object looks authentic, but close inspection reveals it is made from paste, bone, or some other worthless material.\n\nIf you paint a form of energy such as fire or lightning, the energy appears but dissipates as soon as you complete the painting, doing no harm to anything.",
        rarity: "very rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "medallion-of-thoughts",
        name: "Medallion of Thoughts",
        type: "Wondrous item",
        desc: "The medallion has 3 charges. While wearing it, you can use an action and expend 1 charge to cast the _detect thoughts_ spell (save DC 13) from it. The medallion regains 1d3 expended charges daily at dawn.",
        rarity: "uncommon",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "mirror-of-life-trapping",
        name: "Mirror of Life Trapping",
        type: "Wondrous item",
        desc: "When this 4-foot-tall mirror is viewed indirectly, its surface shows faint images of creatures. The mirror weighs 50 pounds, and it has AC 11, 10 hit points, and vulnerability to bludgeoning damage. It shatters and is destroyed when reduced to 0 hit points.\n\nIf the mirror is hanging on a vertical surface and you are within 5 feet of it, you can use an action to speak its command word and activate it. It remains activated until you use an action to speak the command word again.\n\nAny creature other than you that sees its reflection in the activated mirror while within 30 feet of it must succeed on a DC 15 Charisma saving throw or be trapped, along with anything it is wearing or carrying, in one of the mirror's twelve extradimensional cells. This saving throw is made with advantage if the creature knows the mirror's nature, and constructs succeed on the saving throw automatically.\n\nAn extradimensional cell is an infinite expanse filled with thick fog that reduces visibility to 10 feet. Creatures trapped in the mirror's cells don't age, and they don't need to eat, drink, or sleep. A creature trapped within a cell can escape using magic that permits planar travel. Otherwise, the creature is confined to the cell until freed.\n\nIf the mirror traps a creature but its twelve extradimensional cells are already occupied, the mirror frees one trapped creature at random to accommodate the new prisoner. A freed creature appears in an unoccupied space within sight of the mirror but facing away from it. If the mirror is shattered, all creatures it contains are freed and appear in unoccupied spaces near it.\n\nWhile within 5 feet of the mirror, you can use an action to speak the name of one creature trapped in it or call out a particular cell by number. The creature named or contained in the named cell appears as an image on the mirror's surface. You and the creature can then communicate normally.\n\nIn a similar way, you can use an action to speak a second command word and free one creature trapped in the mirror. The freed creature appears, along with its possessions, in the unoccupied space nearest to the mirror and facing away from it.",
        rarity: "very rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "mithral-armor",
        name: "Mithral Armor",
        type: "Armor (medium or heavy",
        desc: "Mithral is a light, flexible metal. A mithral chain shirt or breastplate can be worn under normal clothes. If the armor normally imposes disadvantage on Dexterity (Stealth) checks or has a Strength requirement, the mithral version of the armor doesn't.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "necklace-of-adaptation",
        name: "Necklace of Adaptation",
        type: "Wondrous item",
        desc: "While wearing this necklace, you can breathe normally in any environment, and you have advantage on saving throws made against harmful gases and vapors (such as _cloudkill_ and _stinking cloud_ effects, inhaled poisons, and the breath weapons of some dragons).",
        rarity: "uncommon",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "necklace-of-fireballs",
        name: "Necklace of Fireballs",
        type: "Wondrous item",
        desc: "This necklace has 1d6 + 3 beads hanging from it. You can use an action to detach a bead and throw it up to 60 feet away. When it reaches the end of its trajectory, the bead detonates as a 3rd-level _fireball_ spell (save DC 15).\n\nYou can hurl multiple beads, or even the whole necklace, as one action. When you do so, increase the level of the _fireball_ by 1 for each bead beyond the first.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "necklace-of-prayer-beads",
        name: "Necklace of Prayer Beads",
        type: "Wondrous item",
        desc: "This necklace has 1d4 + 2 magic beads made from aquamarine, black pearl, or topaz. It also has many nonmagical beads made from stones such as amber, bloodstone, citrine, coral, jade, pearl, or quartz. If a magic bead is removed from the necklace, that bead loses its magic.\n\nSix types of magic beads exist. The GM decides the type of each bead on the necklace or determines it randomly. A necklace can have more than one bead of the same type. To use one, you must be wearing the necklace. Each bead contains a spell that you can cast from it as a bonus action (using your spell save DC if a save is necessary). Once a magic bead's spell is cast, that bead can't be used again until the next dawn.\n\n| d20   | Bead of...   | Spell                                         |\n|-------|--------------|-----------------------------------------------|\n| 1-6   | Blessing     | Bless                                         |\n| 7-12  | Curing       | Cure wounds (2nd level) or lesser restoration |\n| 13-16 | Favor        | Greater restoration                           |\n| 17-18 | Smiting      | Branding smite                                |\n| 19    | Summons      | Planar ally                                   |\n| 20    | Wind walking | Wind walk                                     |",
        rarity: "rare",
        requires_attunement: "requires attunement by a cleric, druid, or paladin",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "nine-lives-stealer",
        name: "Nine Lives Stealer",
        type: "Weapon (any sword)",
        desc: "You gain a +2 bonus to attack and damage rolls made with this magic weapon.\n\nThe sword has 1d8 + 1 charges. If you score a critical hit against a creature that has fewer than 100 hit points, it must succeed on a DC 15 Constitution saving throw or be slain instantly as the sword tears its life force from its body (a construct or an undead is immune). The sword loses 1 charge if the creature is slain. When the sword has no charges remaining, it loses this property.",
        rarity: "very rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "oathbow",
        name: "Oathbow",
        type: "Weapon (longbow)",
        desc: "When you nock an arrow on this bow, it whispers in Elvish, \"Swift defeat to my enemies.\" When you use this weapon to make a ranged attack, you can, as a command phrase, say, \"Swift death to you who have wronged me.\" The target of your attack becomes your sworn enemy until it dies or until dawn seven days later. You can have only one such sworn enemy at a time. When your sworn enemy dies, you can choose a new one after the next dawn.\n\nWhen you make a ranged attack roll with this weapon against your sworn enemy, you have advantage on the roll. In addition, your target gains no benefit from cover, other than total cover, and you suffer no disadvantage due to long range. If the attack hits, your sworn enemy takes an extra 3d6 piercing damage.\n\nWhile your sworn enemy lives, you have disadvantage on attack rolls with all other weapons.",
        rarity: "very rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "oil-of-etherealness",
        name: "Oil of Etherealness",
        type: "Potion",
        desc: "Beads of this cloudy gray oil form on the outside of its container and quickly evaporate. The oil can cover a Medium or smaller creature, along with the equipment it's wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected creature then gains the effect of the _etherealness_ spell for 1 hour.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "oil-of-sharpness",
        name: "Oil of Sharpness",
        type: "Potion",
        desc: "This clear, gelatinous oil sparkles with tiny, ultrathin silver shards. The oil can coat one slashing or piercing weapon or up to 5 pieces of slashing or piercing ammunition. Applying the oil takes 1 minute. For 1 hour, the coated item is magical and has a +3 bonus to attack and damage rolls.",
        rarity: "very rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "oil-of-slipperiness",
        name: "Oil of Slipperiness",
        type: "Potion",
        desc: "This sticky black unguent is thick and heavy in the container, but it flows quickly when poured. The oil can cover a Medium or smaller creature, along with the equipment it's wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected creature then gains the effect of a _freedom of movement_ spell for 8 hours.\n\nAlternatively, the oil can be poured on the ground as an action, where it covers a 10-foot square, duplicating the effect of the _grease_ spell in that area for 8 hours.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "pearl-of-power",
        name: "Pearl of Power",
        type: "Wondrous item",
        desc: "While this pearl is on your person, you can use an action to speak its command word and regain one expended spell slot. If the expended slot was of 4th level or higher, the new slot is 3rd level. Once you use the pearl, it can't be used again until the next dawn.",
        rarity: "uncommon",
        requires_attunement: "requires attunement by a spellcaster",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "periapt-of-health",
        name: "Periapt of Health",
        type: "Wondrous item",
        desc: "You are immune to contracting any disease while you wear this pendant. If you are already infected with a disease, the effects of the disease are suppressed you while you wear the pendant.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "periapt-of-proof-against-poison",
        name: "Periapt of Proof against Poison",
        type: "Wondrous item",
        desc: "This delicate silver chain has a brilliant-cut black gem pendant. While you wear it, poisons have no effect on you. You are immune to the poisoned condition and have immunity to poison damage.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "periapt-of-wound-closure",
        name: "Periapt of Wound Closure",
        type: "Wondrous item",
        desc: "While you wear this pendant, you stabilize whenever you are dying at the start of your turn. In addition, whenever you roll a Hit Die to regain hit points, double the number of hit points it restores.",
        rarity: "uncommon",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "philter-of-love",
        name: "Philter of Love",
        type: "Potion",
        desc: "The next time you see a creature within 10 minutes after drinking this philter, you become charmed by that creature for 1 hour. If the creature is of a species and gender you are normally attracted to, you regard it as your true love while you are charmed. This potion's rose-hued, effervescent liquid contains one easy-to-miss bubble shaped like a heart.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "pipes-of-haunting",
        name: "Pipes of Haunting",
        type: "Wondrous item",
        desc: "You must be proficient with wind instruments to use these pipes. They have 3 charges. You can use an action to play them and expend 1 charge to create an eerie, spellbinding tune. Each creature within 30 feet of you that hears you play must succeed on a DC 15 Wisdom saving throw or become frightened of you for 1 minute. If you wish, all creatures in the area that aren't hostile toward you automatically succeed on the saving throw. A creature that fails the saving throw can repeat it at the end of each of its turns, ending the effect on itself on a success. A creature that succeeds on its saving throw is immune to the effect of these pipes for 24 hours. The pipes regain 1d3 expended charges daily at dawn.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "pipes-of-the-sewers",
        name: "Pipes of the Sewers",
        type: "Wondrous item",
        desc: "You must be proficient with wind instruments to use these pipes. While you are attuned to the pipes, ordinary rats and giant rats are indifferent toward you and will not attack you unless you threaten or harm them.\n\nThe pipes have 3 charges. If you play the pipes as an action, you can use a bonus action to expend 1 to 3 charges, calling forth one swarm of rats with each expended charge, provided that enough rats are within half a mile of you to be called in this fashion (as determined by the GM). If there aren't enough rats to form a swarm, the charge is wasted. Called swarms move toward the music by the shortest available route but aren't under your control otherwise. The pipes regain 1d3 expended charges daily at dawn.\n\nWhenever a swarm of rats that isn't under another creature's control comes within 30 feet of you while you are playing the pipes, you can make a Charisma check contested by the swarm's Wisdom check. If you lose the contest, the swarm behaves as it normally would and can't be swayed by the pipes' music for the next 24 hours. If you win the contest, the swarm is swayed by the pipes' music and becomes friendly to you and your companions for as long as you continue to play the pipes each round as an action. A friendly swarm obeys your commands. If you issue no commands to a friendly swarm, it defends itself but otherwise takes no actions. If a friendly swarm starts its turn and can't hear the pipes' music, your control over that swarm ends, and the swarm behaves as it normally would and can't be swayed by the pipes' music for the next 24 hours.",
        rarity: "uncommon",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "plate-armor-of-etherealness",
        name: "Plate Armor of Etherealness",
        type: "Armor (plate)",
        desc: "While you're wearing this armor, you can speak its command word as an action to gain the effect of the _etherealness_ spell, which last for 10 minutes or until you remove the armor or use an action to speak the command word again. This property of the armor can't be used again until the next dawn.",
        rarity: "legendary",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "portable-hole",
        name: "Portable Hole",
        type: "Wondrous item",
        desc: "This fine black cloth, soft as silk, is folded up to the dimensions of a handkerchief. It unfolds into a circular sheet 6 feet in diameter.\n\nYou can use an action to unfold a _portable hole_ and place it on or against a solid surface, whereupon the _portable hole_ creates an extradimensional hole 10 feet deep. The cylindrical space within the hole exists on a different plane, so it can't be used to create open passages. Any creature inside an open _portable hole_ can exit the hole by climbing out of it.\n\nYou can use an action to close a _portable hole_ by taking hold of the edges of the cloth and folding it up. Folding the cloth closes the hole, and any creatures or objects within remain in the extradimensional space. No matter what's in it, the hole weighs next to nothing.\n\nIf the hole is folded up, a creature within the hole's extradimensional space can use an action to make a DC 10 Strength check. On a successful check, the creature forces its way out and appears within 5 feet of the _portable hole_ or the creature carrying it. A breathing creature within a closed _portable hole_ can survive for up to 10 minutes, after which time it begins to suffocate.\n\nPlacing a _portable hole_ inside an extradimensional space created by a _bag of holding_, _handy haversack_, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it and deposited in a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "potion-of-animal-friendship",
        name: "Potion of Animal Friendship",
        type: "Potion",
        desc: "When you drink this potion, you can cast the _animal friendship_ spell (save DC 13) for 1 hour at will. Agitating this muddy liquid brings little bits into view: a fish scale, a hummingbird tongue, a cat claw, or a squirrel hair.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "potion-of-clairvoyance",
        name: "Potion of Clairvoyance",
        type: "Potion",
        desc: "When you drink this potion, you gain the effect of the _clairvoyance_ spell. An eyeball bobs in this yellowish liquid but vanishes when the potion is opened.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "potion-of-climbing",
        name: "Potion of Climbing",
        type: "Potion",
        desc: "When you drink this potion, you gain a climbing speed equal to your walking speed for 1 hour. During this time, you have advantage on Strength (Athletics) checks you make to climb. The potion is separated into brown, silver, and gray layers resembling bands of stone. Shaking the bottle fails to mix the colors.",
        rarity: "common",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "potion-of-diminution",
        name: "Potion of Diminution",
        type: "Potion",
        desc: "When you drink this potion, you gain the \"reduce\" effect of the _enlarge/reduce_ spell for 1d4 hours (no concentration required). The red in the potion's liquid continuously contracts to a tiny bead and then expands to color the clear liquid around it. Shaking the bottle fails to interrupt this process.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "potion-of-flying",
        name: "Potion of Flying",
        type: "Potion",
        desc: "When you drink this potion, you gain a flying speed equal to your walking speed for 1 hour and can hover. If you're in the air when the potion wears off, you fall unless you have some other means of staying aloft. This potion's clear liquid floats at the top of its container and has cloudy white impurities drifting in it.",
        rarity: "very rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "potion-of-gaseous-form",
        name: "Potion of Gaseous Form",
        type: "Potion",
        desc: "When you drink this potion, you gain the effect of the _gaseous form_ spell for 1 hour (no concentration required) or until you end the effect as a bonus action. This potion's container seems to hold fog that moves and pours like water.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "potion-of-giant-strength",
        name: "Potion of Giant Strength",
        type: "Potion",
        desc: "When you drink this potion, your Strength score changes for 1 hour. The type of giant determines the score (see the table below). The potion has no effect on you if your Strength is equal to or greater than that score.\n\nThis potion's transparent liquid has floating in it a sliver of fingernail from a giant of the appropriate type. The _potion of frost giant strength_ and the _potion of stone giant strength_ have the same effect.\n\n| Type of Giant     | Strength | Rarity    |\n|-------------------|----------|-----------|\n| Hill giant        | 21       | Uncommon  |\n| Frost/stone giant | 23       | Rare      |\n| Fire giant        | 25       | Rare      |\n| Cloud giant       | 27       | Very rare |\n| Storm giant       | 29       | Legendary |",
        rarity: "varies",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "potion-of-growth",
        name: "Potion of Growth",
        type: "Potion",
        desc: "When you drink this potion, you gain the \"enlarge\" effect of the _enlarge/reduce_ spell for 1d4 hours (no concentration required). The red in the potion's liquid continuously expands from a tiny bead to color the clear liquid around it and then contracts. Shaking the bottle fails to interrupt this process.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "potion-of-healing",
        name: "Potion of Healing",
        type: "Potion",
        desc: "You regain hit points when you drink this potion. The number of hit points depends on the potion's rarity, as shown in the Potions of Healing table. Whatever its potency, the potion's red liquid glimmers when agitated.\n\n**Potions of Healing (table)**\n\n| Potion of ...    | Rarity    | HP Regained |\n|------------------|-----------|-------------|\n| Healing          | Common    | 2d4 + 2     |\n| Greater healing  | Uncommon  | 4d4 + 4     |\n| Superior healing | Rare      | 8d4 + 8     |\n| Supreme healing  | Very rare | 10d4 + 20   |",
        rarity: "varies",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "potion-of-heroism",
        name: "Potion of Heroism",
        type: "Potion",
        desc: "For 1 hour after drinking it, you gain 10 temporary hit points that last for 1 hour. For the same duration, you are under the effect of the _bless_ spell (no concentration required). This blue potion bubbles and steams as if boiling.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "potion-of-invisibility",
        name: "Potion of Invisibility",
        type: "Potion",
        desc: "This potion's container looks empty but feels as though it holds liquid. When you drink it, you become invisible for 1 hour. Anything you wear or carry is invisible with you. The effect ends early if you attack or cast a spell.",
        rarity: "very rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "potion-of-mind-reading",
        name: "Potion of Mind Reading",
        type: "Potion",
        desc: "When you drink this potion, you gain the effect of the _detect thoughts_ spell (save DC 13). The potion's dense, purple liquid has an ovoid cloud of pink floating in it.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "potion-of-poison",
        name: "Potion of Poison",
        type: "Potion",
        desc: "This concoction looks, smells, and tastes like a _potion of healing_ or other beneficial potion. However, it is actually poison masked by illusion magic. An _identify_ spell reveals its true nature.\n\nIf you drink it, you take 3d6 poison damage, and you must succeed on a DC 13 Constitution saving throw or be poisoned. At the start of each of your turns while you are poisoned in this way, you take 3d6 poison damage. At the end of each of your turns, you can repeat the saving throw. On a successful save, the poison damage you take on your subsequent turns decreases by 1d6. The poison ends when the damage decreases to 0.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "potion-of-resistance",
        name: "Potion of Resistance",
        type: "Potion",
        desc: "When you drink this potion, you gain resistance to one type of damage for 1 hour. The GM chooses the type or determines it randomly from the options below.\n\n| d10 | Damage Type |\n|-----|-------------|\n| 1   | Acid        |\n| 2   | Cold        |\n| 3   | Fire        |\n| 4   | Force       |\n| 5   | Lightning   |\n| 6   | Necrotic    |\n| 7   | Poison      |\n| 8   | Psychic     |\n| 9   | Radiant     |\n| 10  | Thunder     |",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "potion-of-speed",
        name: "Potion of Speed",
        type: "Potion",
        desc: "When you drink this potion, you gain the effect of the _haste_ spell for 1 minute (no concentration required). The potion's yellow fluid is streaked with black and swirls on its own.",
        rarity: "very rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "potion-of-water-breathing",
        name: "Potion of Water Breathing",
        type: "Potion",
        desc: "You can breathe underwater for 1 hour after drinking this potion. Its cloudy green fluid smells of the sea and has a jellyfish-like bubble floating in it.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "restorative-ointment",
        name: "Restorative Ointment",
        type: "Wondrous item",
        desc: "This glass jar, 3 inches in diameter, contains 1d4 + 1 doses of a thick mixture that smells faintly of aloe. The jar and its contents weigh 1/2 pound.\n\nAs an action, one dose of the ointment can be swallowed or applied to the skin. The creature that receives it regains 2d8 + 2 hit points, ceases to be poisoned, and is cured of any disease.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "ring-of-animal-influence",
        name: "Ring of Animal Influence",
        type: "Ring",
        desc: "This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing the ring, you can use an action to expend 1 of its charges to cast one of the following spells:\n\n* _Animal friendship_ (save DC 13)\n* _Fear_ (save DC 13), targeting only beasts that have an Intelligence of 3 or lower\n* _Speak with animals_",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "ring-of-djinni-summoning",
        name: "Ring of Djinni Summoning",
        type: "Ring",
        desc: "While wearing this ring, you can speak its command word as an action to summon a particular djinni from the Elemental Plane of Air. The djinni appears in an unoccupied space you choose within 120 feet of you. It remains as long as you concentrate (as if concentrating on a spell), to a maximum of 1 hour, or until it drops to 0 hit points. It then returns to its home plane.\n\nWhile summoned, the djinni is friendly to you and your companions. It obeys any commands you give it, no matter what language you use. If you fail to command it, the djinni defends itself against attackers but takes no other actions.\n\nAfter the djinni departs, it can't be summoned again for 24 hours, and the ring becomes nonmagical if the djinni dies.",
        rarity: "legendary",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "ring-of-elemental-command",
        name: "Ring of Elemental Command",
        type: "Ring",
        desc: "This ring is linked to one of the four Elemental Planes. The GM chooses or randomly determines the linked plane.\n\nWhile wearing this ring, you have advantage on attack rolls against elementals from the linked plane, and they have disadvantage on attack rolls against you. In addition, you have access to properties based on the linked plane.\n\nThe ring has 5 charges. It regains 1d4 + 1 expended charges daily at dawn. Spells cast from the ring have a save DC of 17.\n\n**_Ring of Air Elemental Command_**. You can expend 2 of the ring's charges to cast _dominate monster_ on an air elemental. In addition, when you fall, you descend 60 feet per round and take no damage from falling. You can also speak and understand Auran.\n\nIf you help slay an air elemental while attuned to the ring, you gain access to the following additional properties:\n\n* You have resistance to lightning damage.\n* You have a flying speed equal to your walking speed and can hover.\n* You can cast the following spells from the ring, expending the necessary number of charges: _chain lightning_ (3 charges), _gust of wind_ (2 charges), or _wind wall_ (1 charge).\n\n**_Ring of Earth Elemental Command_**. You can expend 2 of the ring's charges to cast _dominate monster_ on an earth elemental. In addition, you can move in difficult terrain that is composed of rubble, rocks, or dirt as if it were normal terrain. You can also speak and understand Terran.\n\nIf you help slay an earth elemental while attuned to the ring, you gain access to the following additional properties:\n\n* You have resistance to acid damage.\n* You can move through solid earth or rock as if those areas were difficult terrain. If you end your turn there, you are shunted out to the nearest unoccupied space you last occupied.\n* You can cast the following spells from the ring, expending the necessary number of charges: _stone shape_ (2 charges), _stoneskin_ (3 charges), or _wall of stone_ (3 charges).\n\n**_Ring of Fire Elemental Command_**. You can expend 2 of the ring's charges to cast _dominate monster_ on a fire elemental. In addition, you have resistance to fire damage. You can also speak and understand Ignan.\n\nIf you help slay a fire elemental while attuned to the ring, you gain access to the following additional properties:\n\n* You are immune to fire damage.\n* You can cast the following spells from the ring, expending the necessary number of charges: _burning hands_ (1 charge), _fireball_ (2 charges), and _wall of fire_ (3 charges).\n\n**_Ring of Water Elemental Command_**. You can expend 2 of the ring's charges to cast _dominate monster_ on a water elemental. In addition, you can stand on and walk across liquid surfaces as if they were solid ground. You can also speak and understand Aquan.\n\nIf you help slay a water elemental while attuned to the ring, you gain access to the following additional properties:\n\n* You can breathe underwater and have a swimming speed equal to your walking speed.\n* You can cast the following spells from the ring, expending the necessary number of charges: _create or destroy water_ (1 charge), _control water_ (3 charges), _ice storm_ (2 charges), or _wall of ice_ (3 charges).",
        rarity: "legendary",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "ring-of-evasion",
        name: "Ring of Evasion",
        type: "Ring",
        desc: "This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. When you fail a Dexterity saving throw while wearing it, you can use your reaction to expend 1 of its charges to succeed on that saving throw instead.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "ring-of-feather-falling",
        name: "Ring of Feather Falling",
        type: "Ring",
        desc: "When you fall while wearing this ring, you descend 60 feet per round and take no damage from falling.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "ring-of-free-action",
        name: "Ring of Free Action",
        type: "Ring",
        desc: "While you wear this ring, difficult terrain doesn't cost you extra movement. In addition, magic can neither reduce your speed nor cause you to be paralyzed or restrained.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "ring-of-invisibility",
        name: "Ring of Invisibility",
        type: "Ring",
        desc: "While wearing this ring, you can turn invisible as an action. Anything you are wearing or carrying is invisible with you. You remain invisible until the ring is removed, until you attack or cast a spell, or until you use a bonus action to become visible again.",
        rarity: "legendary",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "ring-of-jumping",
        name: "Ring of Jumping",
        type: "Ring",
        desc: "While wearing this ring, you can cast the _jump_ spell from it as a bonus action at will, but can target only yourself when you do so.",
        rarity: "uncommon",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "ring-of-mind-shielding",
        name: "Ring of Mind Shielding",
        type: "Ring",
        desc: "While wearing this ring, you are immune to magic that allows other creatures to read your thoughts, determine whether you are lying, know your alignment, or know your creature type. Creatures can telepathically communicate with you only if you allow it.\n\nYou can use an action to cause the ring to become invisible until you use another action to make it visible, until you remove the ring, or until you die.\n\nIf you die while wearing the ring, your soul enters it, unless it already houses a soul. You can remain in the ring or depart for the afterlife. As long as your soul is in the ring, you can telepathically communicate with any creature wearing it. A wearer can't prevent this telepathic communication.",
        rarity: "uncommon",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "ring-of-protection",
        name: "Ring of Protection",
        type: "Ring",
        desc: "You gain a +1 bonus to AC and saving throws while wearing this ring.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "ring-of-regeneration",
        name: "Ring of Regeneration",
        type: "Ring",
        desc: "While wearing this ring, you regain 1d6 hit points every 10 minutes, provided that you have at least 1 hit point. If you lose a body part, the ring causes the missing part to regrow and return to full functionality after 1d6 + 1 days if you have at least 1 hit point the whole time.",
        rarity: "very rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "ring-of-resistance",
        name: "Ring of Resistance",
        type: "Ring",
        desc: "You have resistance to one damage type while wearing this ring. The gem in the ring indicates the type, which the GM chooses or determines randomly.\n\n| d10 | Damage Type | Gem        |\n|-----|-------------|------------|\n| 1   | Acid        | Pearl      |\n| 2   | Cold        | Tourmaline |\n| 3   | Fire        | Garnet     |\n| 4   | Force       | Sapphire   |\n| 5   | Lightning   | Citrine    |\n| 6   | Necrotic    | Jet        |\n| 7   | Poison      | Amethyst   |\n| 8   | Psychic     | Jade       |\n| 9   | Radiant     | Topaz      |\n| 10  | Thunder     | Spinel     |",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "ring-of-shooting-stars",
        name: "Ring of Shooting Stars",
        type: "Ring",
        desc: "While wearing this ring in dim light or darkness, you can cast _dancing lights_ and _light_ from the ring at will. Casting either spell from the ring requires an action.\n\nThe ring has 6 charges for the following other properties. The ring regains 1d6 expended charges daily at dawn.\n\n**_Faerie Fire_**. You can expend 1 charge as an action to cast _faerie fire_ from the ring.\n\n**_Ball Lightning_**. You can expend 2 charges as an action to create one to four 3-foot-diameter spheres of lightning. The more spheres you create, the less powerful each sphere is individually.\n\nEach sphere appears in an unoccupied space you can see within 120 feet of you. The spheres last as long as you concentrate (as if concentrating on a spell), up to 1 minute. Each sphere sheds dim light in a 30-foot radius.\n\nAs a bonus action, you can move each sphere up to 30 feet, but no farther than 120 feet away from you. When a creature other than you comes within 5 feet of a sphere, the sphere discharges lightning at that creature and disappears. That creature must make a DC 15 Dexterity saving throw. On a failed save, the creature takes lightning damage based on the number of spheres you created.\n\n| Spheres | Lightning Damage |\n|---------|------------------|\n| 4       | 2d4              |\n| 3       | 2d6              |\n| 2       | 5d4              |\n| 1       | 4d12             |\n\n**_Shooting Stars_**. You can expend 1 to 3 charges as an action. For every charge you expend, you launch a glowing mote of light from the ring at a point you can see within 60 feet of you. Each creature within a 15-foot cube originating from that point is showered in sparks and must make a DC 15 Dexterity saving throw, taking 5d4 fire damage on a failed save, or half as much damage on a successful one.",
        rarity: "very rare",
        requires_attunement: "requires attunement outdoors at night",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "ring-of-spell-storing",
        name: "Ring of Spell Storing",
        type: "Ring",
        desc: "This ring stores spells cast into it, holding them until the attuned wearer uses them. The ring can store up to 5 levels worth of spells at a time. When found, it contains 1d6 - 1 levels of stored spells chosen by the GM.\n\nAny creature can cast a spell of 1st through 5th level into the ring by touching the ring as the spell is cast. The spell has no effect, other than to be stored in the ring. If the ring can't hold the spell, the spell is expended without effect. The level of the slot used to cast the spell determines how much space it uses.\n\nWhile wearing this ring, you can cast any spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster, but is otherwise treated as if you cast the spell. The spell cast from the ring is no longer stored in it, freeing up space.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "ring-of-spell-turning",
        name: "Ring of Spell Turning",
        type: "Ring",
        desc: "While wearing this ring, you have advantage on saving throws against any spell that targets only you (not in an area of effect). In addition, if you roll a 20 for the save and the spell is 7th level or lower, the spell has no effect on you and instead targets the caster, using the slot level, spell save DC, attack bonus, and spellcasting ability of the caster.",
        rarity: "legendary",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "ring-of-swimming",
        name: "Ring of Swimming",
        type: "Ring",
        desc: "You have a swimming speed of 40 feet while wearing this ring.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "ring-of-telekinesis",
        name: "Ring of Telekinesis",
        type: "Ring",
        desc: "While wearing this ring, you can cast the _telekinesis_ spell at will, but you can target only objects that aren't being worn or carried.",
        rarity: "very rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "ring-of-the-ram",
        name: "Ring of the Ram",
        type: "Ring",
        desc: "This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing the ring, you can use an action to expend 1 to 3 of its charges to attack one creature you can see within 60 feet of you. The ring produces a spectral ram's head and makes its attack roll with a +7 bonus. On a hit, for each charge you spend, the target takes 2d10 force damage and is pushed 5 feet away from you.\n\nAlternatively, you can expend 1 to 3 of the ring's charges as an action to try to break an object you can see within 60 feet of you that isn't being worn or carried. The ring makes a Strength check with a +5 bonus for each charge you spend.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "ring-of-three-wishes",
        name: "Ring of Three Wishes",
        type: "Ring",
        desc: "While wearing this ring, you can use an action to expend 1 of its 3 charges to cast the _wish_ spell from it. The ring becomes nonmagical when you use the last charge.",
        rarity: "legendary",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "ring-of-warmth",
        name: "Ring of Warmth",
        type: "Ring",
        desc: "While wearing this ring, you have resistance to cold damage. In addition, you and everything you wear and carry are unharmed by temperatures as low as -50 degrees Fahrenheit.",
        rarity: "uncommon",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "ring-of-water-walking",
        name: "Ring of Water Walking",
        type: "Ring",
        desc: "While wearing this ring, you can stand on and move across any liquid surface as if it were solid ground.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "ring-of-x-ray-vision",
        name: "Ring of X-ray Vision",
        type: "Ring",
        desc: "While wearing this ring, you can use an action to speak its command word. When you do so, you can see into and through solid matter for 1 minute. This vision has a radius of 30 feet. To you, solid objects within that radius appear transparent and don't prevent light from passing through them. The vision can penetrate 1 foot of stone, 1 inch of common metal, or up to 3 feet of wood or dirt. Thicker substances block the vision, as does a thin sheet of lead.\n\nWhenever you use the ring again before taking a long rest, you must succeed on a DC 15 Constitution saving throw or gain one level of exhaustion.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "robe-of-eyes",
        name: "Robe of Eyes",
        type: "Wondrous item",
        desc: "This robe is adorned with eyelike patterns. While you wear the robe, you gain the following benefits:\n\n* The robe lets you see in all directions, and you have advantage on Wisdom (Perception) checks that rely on sight.\n* You have darkvision out to a range of 120 feet.\n* You can see invisible creatures and objects, as well as see into the Ethereal Plane, out to a range of 120 feet.\n\nThe eyes on the robe can't be closed or averted. Although you can close or avert your own eyes, you are never considered to be doing so while wearing this robe.\n\nA _light_ spell cast on the robe or a _daylight_ spell cast within 5 feet of the robe causes you to be blinded for 1 minute. At the end of each of your turns, you can make a Constitution saving throw (DC 11 for _light_ or DC 15 for _daylight_), ending the blindness on a success.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "robe-of-scintillating-colors",
        name: "Robe of Scintillating Colors",
        type: "Wondrous item",
        desc: "This robe has 3 charges, and it regains 1d3 expended charges daily at dawn. While you wear it, you can use an action and expend 1 charge to cause the garment to display a shifting pattern of dazzling hues until the end of your next turn. During this time, the robe sheds bright light in a 30-foot radius and dim light for an additional 30 feet. Creatures that can see you have disadvantage on attack rolls against you. In addition, any creature in the bright light that can see you when the robe's power is activated must succeed on a DC 15 Wisdom saving throw or become stunned until the effect ends.",
        rarity: "very rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "robe-of-stars",
        name: "Robe of Stars",
        type: "Wondrous item",
        desc: "This black or dark blue robe is embroidered with small white or silver stars. You gain a +1 bonus to saving throws while you wear it.\n\nSix stars, located on the robe's upper front portion, are particularly large. While wearing this robe, you can use an action to pull off one of the stars and use it to cast _magic missile_ as a 5th-level spell. Daily at dusk, 1d6 removed stars reappear on the robe.\n\nWhile you wear the robe, you can use an action to enter the Astral Plane along with everything you are wearing and carrying. You remain there until you use an action to return to the plane you were on. You reappear in the last space you occupied, or if that space is occupied, the nearest unoccupied space.",
        rarity: "very rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "robe-of-the-archmagi",
        name: "Robe of the Archmagi",
        type: "Wondrous item",
        desc: "This elegant garment is made from exquisite cloth of white, gray, or black and adorned with silvery runes. The robe's color corresponds to the alignment for which the item was created. A white robe was made for good, gray for neutral, and black for evil. You can't attune to a _robe of the archmagi_ that doesn't correspond to your alignment.\n\nYou gain these benefits while wearing the robe:\n\n* If you aren't wearing armor, your base Armor Class is 15 + your Dexterity modifier.\n* You have advantage on saving throws against spells and other magical effects.\n* Your spell save DC and spell attack bonus each increase by 2.",
        rarity: "legendary",
        requires_attunement: "requires attunement by a sorcerer, warlock, or wizard",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "robe-of-useful-items",
        name: "Robe of Useful Items",
        type: "Wondrous item",
        desc: "This robe has cloth patches of various shapes and colors covering it. While wearing the robe, you can use an action to detach one of the patches, causing it to become the object or creature it represents. Once the last patch is removed, the robe becomes an ordinary garment.\n\nThe robe has two of each of the following patches:\n\n* Dagger\n* Bullseye lantern (filled and lit)\n* Steel mirror\n* 10-foot pole\n* Hempen rope (50 feet, coiled)\n* Sack\n\nIn addition, the robe has 4d4 other patches. The GM chooses the patches or determines them randomly.\n\n| d100   | Patch                                                                                                                                                                                             |\n|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|\n| 01-08  | Bag of 100 gp                                                                                                                                                                                     |\n| 09-15  | Silver coffer (1 foot long, 6 inches wide and deep) worth 500 gp                                                                                                                                  |\n| 16-22  | Iron door (up to 10 feet wide and 10 feet high, barred on one side of your choice), which you can place in an opening you can reach; it conforms to fit the opening, attaching and hinging itself |\n| 23-30  | 10 gems worth 100 gp each                                                                                                                                                                         |\n| 31-44  | Wooden ladder (24 feet long) 45-51 A riding horse with saddle bags                                                                                                                                |\n| 52-59  | Pit (a cube 10 feet on a side), which you can place on the ground within 10 feet of you                                                                                                           |\n| 60-68  | 4 potions of healing                                                                                                                                                                              |\n| 69-75  | Rowboat (12 feet long)                                                                                                                                                                            |\n| 76-83  | Spell scroll containing one spell of 1st to 3rd level                                                                                                                                             |\n| 84-90  | 2 mastiffs                                                                                                                                                                                        |\n| 91-96  | Window (2 feet by 4 feet, up to 2 feet deep), which you can place on a vertical surface you can reach                                                                                             |\n| 97-100 | Portable ram                                                                                                                                                                                      |",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "rod-of-absorption",
        name: "Rod of Absorption",
        type: "Rod",
        desc: "While holding this rod, you can use your reaction to absorb a spell that is targeting only you and not with an area of effect. The absorbed spell's effect is canceled, and the spell's energy-not the spell itself-is stored in the rod. The energy has the same level as the spell when it was cast. The rod can absorb and store up to 50 levels of energy over the course of its existence. Once the rod absorbs 50 levels of energy, it can't absorb more. If you are targeted by a spell that the rod can't store, the rod has no effect on that spell.\n\nWhen you become attuned to the rod, you know how many levels of energy the rod has absorbed over the course of its existence, and how many levels of spell energy it currently has stored.\n\nIf you are a spellcaster holding the rod, you can convert energy stored in it into spell slots to cast spells you have prepared or know. You can create spell slots only of a level equal to or lower than your own spell slots, up to a maximum of 5th level. You use the stored levels in place of your slots, but otherwise cast the spell as normal. For example, you can use 3 levels stored in the rod as a 3rd-level spell slot.\n\nA newly found rod has 1d10 levels of spell energy stored in it already. A rod that can no longer absorb spell energy and has no energy remaining becomes nonmagical.",
        rarity: "very rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "rod-of-alertness",
        name: "Rod of Alertness",
        type: "Rod",
        desc: "This rod has a flanged head and the following properties.\n\n**_Alertness_**. While holding the rod, you have advantage on Wisdom (Perception) checks and on rolls for initiative.\n\n**_Spells_**. While holding the rod, you can use an action to cast one of the following spells from it: _detect evil and good_, _detect magic_, _detect poison and disease_, or _see invisibility._\n\n**_Protective Aura_**. As an action, you can plant the haft end of the rod in the ground, whereupon the rod's head sheds bright light in a 60-foot radius and dim light for an additional 60 feet. While in that bright light, you and any creature that is friendly to you gain a +1 bonus to AC and saving throws and can sense the location of any invisible hostile creature that is also in the bright light.\n\nThe rod's head stops glowing and the effect ends after 10 minutes, or when a creature uses an action to pull the rod from the ground. This property can't be used again until the next dawn.",
        rarity: "very rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "rod-of-lordly-might",
        name: "Rod of Lordly Might",
        type: "Rod",
        desc: "This rod has a flanged head, and it functions as a magic mace that grants a +3 bonus to attack and damage rolls made with it. The rod has properties associated with six different buttons that are set in a row along the haft. It has three other properties as well, detailed below.\n\n**_Six Buttons_**. You can press one of the rod's six buttons as a bonus action. A button's effect lasts until you push a different button or until you push the same button again, which causes the rod to revert to its normal form.\n\nIf you press **button 1**, the rod becomes a _flame tongue_, as a fiery blade sprouts from the end opposite the rod's flanged head.\n\nIf you press **button 2**, the rod's flanged head folds down and two crescent-shaped blades spring out, transforming the rod into a magic battleaxe that grants a +3 bonus to attack and damage rolls made with it.\n\nIf you press **button 3**, the rod's flanged head folds down, a spear point springs from the rod's tip, and the rod's handle lengthens into a 6-foot haft, transforming the rod into a magic spear that grants a +3 bonus to attack and damage rolls made with it.\n\nIf you press **button 4**, the rod transforms into a climbing pole up to 50 feet long, as you specify. In surfaces as hard as granite, a spike at the bottom and three hooks at the top anchor the pole. Horizontal bars 3 inches long fold out from the sides, 1 foot apart, forming a ladder. The pole can bear up to 4,000 pounds. More weight or lack of solid anchoring causes the rod to revert to its normal form.\n\nIf you press **button 5**, the rod transforms into a handheld battering ram and grants its user a +10 bonus to Strength checks made to break through doors, barricades, and other barriers.\n\nIf you press **button 6**, the rod assumes or remains in its normal form and indicates magnetic north. (Nothing happens if this function of the rod is used in a location that has no magnetic north.) The rod also gives you knowledge of your approximate depth beneath the ground or your height above it.\n\n**_Drain Life_**. When you hit a creature with a melee attack using the rod, you can force the target to make a DC 17 Constitution saving throw. On a failure, the target takes an extra 4d6 necrotic damage, and you regain a number of hit points equal to half that necrotic damage. This property can't be used again until the next dawn.\n\n**_Paralyze_**. When you hit a creature with a melee attack using the rod, you can force the target to make a DC 17 Strength saving throw. On a failure, the target is paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on a success. This property can't be used again until the next dawn.\n\n**_Terrify_**. While holding the rod, you can use an action to force each creature you can see within 30 feet of you to make a DC 17 Wisdom saving throw. On a failure, a target is frightened of you for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. This property can't be used again until the next dawn.",
        rarity: "legendary",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "rod-of-rulership",
        name: "Rod of Rulership",
        type: "Rod",
        desc: "You can use an action to present the rod and command obedience from each creature of your choice that you can see within 120 feet of you. Each target must succeed on a DC 15 Wisdom saving throw or be charmed by you for 8 hours. While charmed in this way, the creature regards you as its trusted leader. If harmed by you or your companions, or commanded to do something contrary to its nature, a target ceases to be charmed in this way. The rod can't be used again until the next dawn.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "rod-of-security",
        name: "Rod of Security",
        type: "Rod",
        desc: "While holding this rod, you can use an action to activate it. The rod then instantly transports you and up to 199 other willing creatures you can see to a paradise that exists in an extraplanar space. You choose the form that the paradise takes. It could be a tranquil garden, lovely glade, cheery tavern, immense palace, tropical island, fantastic carnival, or whatever else you can imagine. Regardless of its nature, the paradise contains enough water and food to sustain its visitors. Everything else that can be interacted with inside the extraplanar space can exist only there. For example, a flower picked from a garden in the paradise disappears if it is taken outside the extraplanar space.\n\nFor each hour spent in the paradise, a visitor regains hit points as if it had spent 1 Hit Die. Also, creatures don't age while in the paradise, although time passes normally. Visitors can remain in the paradise for up to 200 days divided by the number of creatures present (round down).\n\nWhen the time runs out or you use an action to end it, all visitors reappear in the location they occupied when you activated the rod, or an unoccupied space nearest that location. The rod can't be used again until ten days have passed.",
        rarity: "very rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "rope-of-climbing",
        name: "Rope of Climbing",
        type: "Wondrous item",
        desc: "This 60-foot length of silk rope weighs 3 pounds and can hold up to 3,000 pounds. If you hold one end of the rope and use an action to speak the command word, the rope animates. As a bonus action, you can command the other end to move toward a destination you choose. That end moves 10 feet on your turn when you first command it and 10 feet on each of your turns until reaching its destination, up to its maximum length away, or until you tell it to stop. You can also tell the rope to fasten itself securely to an object or to unfasten itself, to knot or unknot itself, or to coil itself for carrying.\n\nIf you tell the rope to knot, large knots appear at 1* foot intervals along the rope. While knotted, the rope shortens to a 50-foot length and grants advantage on checks made to climb it.\n\nThe rope has AC 20 and 20 hit points. It regains 1 hit point every 5 minutes as long as it has at least 1 hit point. If the rope drops to 0 hit points, it is destroyed.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "rope-of-entanglement",
        name: "Rope of Entanglement",
        type: "Wondrous item",
        desc: "This rope is 30 feet long and weighs 3 pounds. If you hold one end of the rope and use an action to speak its command word, the other end darts forward to entangle a creature you can see within 20 feet of you. The target must succeed on a DC 15 Dexterity saving throw or become restrained.\n\nYou can release the creature by using a bonus action to speak a second command word. A target restrained by the rope can use an action to make a DC 15 Strength or Dexterity check (target's choice). On a success, the creature is no longer restrained by the rope.\n\nThe rope has AC 20 and 20 hit points. It regains 1 hit point every 5 minutes as long as it has at least 1 hit point. If the rope drops to 0 hit points, it is destroyed.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "scarab-of-protection",
        name: "Scarab of Protection",
        type: "Wondrous item",
        desc: "If you hold this beetle-shaped medallion in your hand for 1 round, an inscription appears on its surface revealing its magical nature. It provides two benefits while it is on your person:\n\n* You have advantage on saving throws against spells.\n* The scarab has 12 charges. If you fail a saving throw against a necromancy spell or a harmful effect originating from an undead creature, you can use your reaction to expend 1 charge and turn the failed save into a successful one. The scarab crumbles into powder and is destroyed when its last charge is expended.",
        rarity: "legendary",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "scimitar-of-speed",
        name: "Scimitar of Speed",
        type: "Weapon (scimitar)",
        desc: "You gain a +2 bonus to attack and damage rolls made with this magic weapon. In addition, you can make one attack with it as a bonus action on each of your turns.",
        rarity: "very rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "shield-of-missile-attraction",
        name: "Shield of Missile Attraction",
        type: "Armor (shield)",
        desc: "While holding this shield, you have resistance to damage from ranged weapon attacks.\n\n**_Curse_**. This shield is cursed. Attuning to it curses you until you are targeted by the _remove curse_ spell or similar magic. Removing the shield fails to end the curse on you. Whenever a ranged weapon attack is made against a target within 10 feet of you, the curse causes you to become the target instead.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "slippers-of-spider-climbing",
        name: "Slippers of Spider Climbing",
        type: "Wondrous item",
        desc: "While you wear these light shoes, you can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free. You have a climbing speed equal to your walking speed. However, the slippers don't allow you to move this way on a slippery surface, such as one covered by ice or oil.",
        rarity: "uncommon",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "sovereign-glue",
        name: "Sovereign Glue",
        type: "Wondrous item",
        desc: "This viscous, milky-white substance can form a permanent adhesive bond between any two objects. It must be stored in a jar or flask that has been coated inside with _oil of slipperiness._ When found, a container contains 1d6 + 1 ounces.\n\nOne ounce of the glue can cover a 1-foot square surface. The glue takes 1 minute to set. Once it has done so, the bond it creates can be broken only by the application of _universal solvent_ or _oil of etherealness_, or with a _wish_ spell.",
        rarity: "legendary",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "spell-scroll",
        name: "Spell Scroll",
        type: "Scroll",
        desc: "A _spell scroll_ bears the words of a single spell, written in a mystical cipher. If the spell is on your class's spell list, you can use an action to read the scroll and cast its spell without having to provide any of the spell's components. Otherwise, the scroll is unintelligible.\n\nIf the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10 + the spell's level. On a failed check, the spell disappears from the scroll with no other effect. Once the spell is cast, the words on the scroll fade, and the scroll itself crumbles to dust.\n\nThe level of the spell on the scroll determines the spell's saving throw DC and attack bonus, as well as the scroll's rarity, as shown in the Spell Scroll table.\n\n**Spell Scroll (table)**\n\n| Spell Level | Rarity    | Save DC | Attack Bonus |\n|-------------|-----------|---------|--------------|\n| Cantrip     | Common    | 13      | +5           |\n| 1st         | Common    | 13      | +5           |\n| 2nd         | Uncommon  | 13      | +5           |\n| 3rd         | Uncommon  | 15      | +7           |\n| 4th         | Rare      | 15      | +7           |\n| 5th         | Rare      | 17      | +9           |\n| 6th         | Very rare | 17      | +9           |\n| 7th         | Very rare | 18      | +10          |\n| 8th         | Very rare | 18      | +10          |\n| 9th         | Legendary | 19      | +11          |\n\nA wizard spell on a _spell scroll_ can be copied just as spells in spellbooks can be copied. When a spell is copied from a the copier must succeed on an Intelligence (Arcana) check with a DC equal to 10 + the spell's level. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the _spell scroll_ is destroyed.",
        rarity: "varies",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "spellguard-shield",
        name: "Spellguard Shield",
        type: "Armor (shield)",
        desc: "While holding this shield, you have advantage on saving throws against spells and other magical effects, and spell attacks have disadvantage against you.",
        rarity: "very rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "sphere-of-annihilation",
        name: "Sphere of Annihilation",
        type: "Wondrous item",
        desc: "This 2-foot-diameter black sphere is a hole in the multiverse, hovering in space and stabilized by a magical field surrounding it.\n\nThe sphere obliterates all matter it passes through and all matter that passes through it. Artifacts are the exception. Unless an artifact is susceptible to damage from a _sphere of annihilation_, it passes through the sphere unscathed. Anything else that touches the sphere but isn't wholly engulfed and obliterated by it takes 4d10 force damage.\n\nThe sphere is stationary until someone controls it. If you are within 60 feet of an uncontrolled sphere, you can use an action to make a DC 25 Intelligence (Arcana) check. On a success, the sphere levitates in one direction of your choice, up to a number of feet equal to 5 × your Intelligence modifier (minimum 5 feet). On a failure, the sphere moves 10 feet toward you. A creature whose space the sphere enters must succeed on a DC 13 Dexterity saving throw or be touched by it, taking 4d10 force damage.\n\nIf you attempt to control a sphere that is under another creature's control, you make an Intelligence (Arcana) check contested by the other creature's Intelligence (Arcana) check. The winner of the contest gains control of the sphere and can levitate it as normal.\n\nIf the sphere comes into contact with a planar portal, such as that created by the _gate_ spell, or an extradimensional space, such as that within a _portable hole_, the GM determines randomly what happens, using the following table.\n\n| d100   | Result                                                                                                                             |\n|--------|------------------------------------------------------------------------------------------------------------------------------------|\n| 01-50  | The sphere is destroyed.                                                                                                           |\n| 51-85  | The sphere moves through the portal or into the extradimensional space.                                                            |\n| 86-00  | A spatial rift sends each creature and object within 180 feet of the sphere, including the sphere, to a random plane of existence. |",
        rarity: "legendary",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "staff-of-charming",
        name: "Staff of Charming",
        type: "Staff",
        desc: "While holding this staff, you can use an action to expend 1 of its 10 charges to cast _charm person_, _command_, _or comprehend languages_ from it using your spell save DC. The staff can also be used as a magic quarterstaff.\n\nIf you are holding the staff and fail a saving throw against an enchantment spell that targets only you, you can turn your failed save into a successful one. You can't use this property of the staff again until the next dawn. If you succeed on a save against an enchantment spell that targets only you, with or without the staff's intervention, you can use your reaction to expend 1 charge from the staff and turn the spell back on its caster as if you had cast the spell.\n\nThe staff regains 1d8 + 2 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff becomes a nonmagical quarterstaff.",
        rarity: "rare",
        requires_attunement: "requires attunement by a bard, cleric, druid, sorcerer, warlock, or wizard",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "staff-of-fire",
        name: "Staff of Fire",
        type: "Staff",
        desc: "You have resistance to fire damage while you hold this staff.\n\nThe staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC: _burning hands_ (1 charge), _fireball_ (3 charges), or _wall of fire_ (4 charges).\n\nThe staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff blackens, crumbles into cinders, and is destroyed.",
        rarity: "very rare",
        requires_attunement: "requires attunement by a druid, sorcerer, warlock, or wizard",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "staff-of-frost",
        name: "Staff of Frost",
        type: "Staff",
        desc: "You have resistance to cold damage while you hold this staff.\n\nThe staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC: _cone of cold_ (5 charges), _fog cloud_ (1 charge), _ice storm_ (4 charges), or _wall of ice_ (4 charges).\n\nThe staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff turns to water and is destroyed.",
        rarity: "very rare",
        requires_attunement: "requires attunement by a druid, sorcerer, warlock, or wizard",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "staff-of-healing",
        name: "Staff of Healing",
        type: "Staff",
        desc: "This staff has 10 charges. While holding it, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spellcasting ability modifier: _cure wounds_ (1 charge per spell level, up to 4th), _lesser restoration_ (2 charges), or _mass cure wounds_ (5 charges).\n\nThe staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff vanishes in a flash of light, lost forever.",
        rarity: "rare",
        requires_attunement: "requires attunement by a bard, cleric, or druid",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "staff-of-power",
        name: "Staff of Power",
        type: "Staff",
        desc: "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you gain a +2 bonus to Armor Class, saving throws, and spell attack rolls.\n\nThe staff has 20 charges for the following properties. The staff regains 2d8 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff retains its +2 bonus to attack and damage rolls but loses all other properties. On a 20, the staff regains 1d8 + 2 charges.\n\n**_Power Strike_**. When you hit with a melee attack using the staff, you can expend 1 charge to deal an extra 1d6 force damage to the target.\n\n**_Spells_**. While holding this staff, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spell attack bonus: _cone of cold_ (5 charges), _fireball_ (5th-level version, 5 charges), _globe of invulnerability_ (6 charges), _hold monster_ (5 charges), _levitate_ (2 charges), _lightning bolt_ (5th-level version, 5 charges), _magic missile_ (1 charge), _ray of enfeeblement_ (1 charge), or _wall of force_ (5 charges).\n\n**_Retributive Strike_**. You can use an action to break the staff over your knee or against a solid surface, performing a retributive strike. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it.\n\nYou have a 50 percent chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take force damage equal to 16 × the number of charges in the staff. Every other creature in the area must make a DC 17 Dexterity saving throw. On a failed save, a creature takes an amount of damage based on how far away it is from the point of origin, as shown in the following table. On a successful save, a creature takes half as much damage.\n\n| Distance from Origin  | Damage                                 |\n|-----------------------|----------------------------------------|\n| 10 ft. away or closer | 8 × the number of charges in the staff |\n| 11 to 20 ft. away     | 6 × the number of charges in the staff |\n| 21 to 30 ft. away     | 4 × the number of charges in the staff |",
        rarity: "very rare",
        requires_attunement: "requires attunement by a sorcerer, warlock, or wizard",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "staff-of-striking",
        name: "Staff of Striking",
        type: "Staff",
        desc: "This staff can be wielded as a magic quarterstaff that grants a +3 bonus to attack and damage rolls made with it.\n\nThe staff has 10 charges. When you hit with a melee attack using it, you can expend up to 3 of its charges. For each charge you expend, the target takes an extra 1d6 force damage. The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff becomes a nonmagical quarterstaff.",
        rarity: "very rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "staff-of-swarming-insects",
        name: "Staff of Swarming Insects",
        type: "Staff",
        desc: "This staff has 10 charges and regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, a swarm of insects consumes and destroys the staff, then disperses.\n\n**_Spells_**. While holding the staff, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC: _giant insect_ (4 charges) or _insect plague_ (5 charges).\n\n**_Insect Cloud_**. While holding the staff, you can use an action and expend 1 charge to cause a swarm of harmless flying insects to spread out in a 30-foot radius from you. The insects remain for 10 minutes, making the area heavily obscured for creatures other than you. The swarm moves with you, remaining centered on you. A wind of at least 10 miles per hour disperses the swarm and ends the effect.",
        rarity: "very rare",
        requires_attunement: "requires attunement by a bard, cleric, druid, sorcerer, warlock, or wizard",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "staff-of-the-magi",
        name: "Staff of the Magi",
        type: "Staff",
        desc: "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While you hold it, you gain a +2 bonus to spell attack rolls.\n\nThe staff has 50 charges for the following properties. It regains 4d6 + 2 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 20, the staff regains 1d12 + 1 charges.\n\n**_Spell Absorption_**. While holding the staff, you have advantage on saving throws against spells. In addition, you can use your reaction when another creature casts a spell that targets only you. If you do, the staff absorbs the magic of the spell, canceling its effect and gaining a number of charges equal to the absorbed spell's level. However, if doing so brings the staff's total number of charges above 50, the staff explodes as if you activated its retributive strike (see below).\n\n**_Spells_**. While holding the staff, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC and spellcasting ability: _conjure elemental_ (7 charges), _dispel magic_ (3 charges), _fireball_ (7th-level version, 7 charges), _flaming sphere_ (2 charges), _ice storm_ (4 charges), _invisibility_ (2 charges), _knock_ (2 charges), _lightning bolt_ (7th-level version, 7 charges), _passwall_ (5 charges), _plane shift_ (7 charges), _telekinesis_ (5 charges), _wall of fire_ (4 charges), or _web_ (2 charges).\n\nYou can also use an action to cast one of the following spells from the staff without using any charges: _arcane lock_, _detect magic_, _enlarge/reduce_, _light_, _mage hand_, or _protection from evil and good._\n\n**_Retributive Strike_**. You can use an action to break the staff over your knee or against a solid surface, performing a retributive strike. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it.\n\nYou have a 50 percent chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take force damage equal to 16 × the number of charges in the staff. Every other creature in the area must make a DC 17 Dexterity saving throw. On a failed save, a creature takes an amount of damage based on how far away it is from the point of origin, as shown in the following table. On a successful save, a creature takes half as much damage.\n\n| Distance from Origin  | Damage                                 |\n|-----------------------|----------------------------------------|\n| 10 ft. away or closer | 8 × the number of charges in the staff |\n| 11 to 20 ft. away     | 6 × the number of charges in the staff |\n| 21 to 30 ft. away     | 4 × the number of charges in the staff |",
        rarity: "legendary",
        requires_attunement: "requires attunement by a sorcerer, warlock, or wizard",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "staff-of-the-python",
        name: "Staff of the Python",
        type: "Staff",
        desc: "You can use an action to speak this staff's command word and throw the staff on the ground within 10 feet of you. The staff becomes a giant constrictor snake under your control and acts on its own initiative count. By using a bonus action to speak the command word again, you return the staff to its normal form in a space formerly occupied by the snake.\n\nOn your turn, you can mentally command the snake if it is within 60 feet of you and you aren't incapacitated. You decide what action the snake takes and where it moves during its next turn, or you can issue it a general command, such as to attack your enemies or guard a location.\n\nIf the snake is reduced to 0 hit points, it dies and reverts to its staff form. The staff then shatters and is destroyed. If the snake reverts to staff form before losing all its hit points, it regains all of them.",
        rarity: "very rare",
        requires_attunement: "requires attunement by a cleric, druid, or warlock",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "staff-of-the-woodlands",
        name: "Staff of the Woodlands",
        type: "Staff",
        desc: "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you have a +2 bonus to spell attack rolls.\n\nThe staff has 10 charges for the following properties. It regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff loses its properties and becomes a nonmagical quarterstaff.\n\n**_Spells_**. You can use an action to expend 1 or more of the staff's charges to cast one of the following spells from it, using your spell save DC: _animal friendship_ (1 charge), _awaken_ (5 charges), _barkskin_ (2 charges), _locate animals or plants_ (2 charges), _speak with animals_ (1 charge), _speak with plants_ (3 charges), or _wall of thorns_ (6 charges).\n\nYou can also use an action to cast the _pass without trace_ spell from the staff without using any charges. **_Tree Form_**. You can use an action to plant one end of the staff in fertile earth and expend 1 charge to transform the staff into a healthy tree. The tree is 60 feet tall and has a 5-foot-diameter trunk, and its branches at the top spread out in a 20-foot radius.\n\nThe tree appears ordinary but radiates a faint aura of transmutation magic if targeted by _detect magic_. While touching the tree and using another action to speak its command word, you return the staff to its normal form. Any creature in the tree falls when it reverts to a staff.",
        rarity: "rare",
        requires_attunement: "requires attunement by a druid",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "staff-of-thunder-and-lightning",
        name: "Staff of Thunder and Lightning",
        type: "Staff",
        desc: "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. It also has the following additional properties. When one of these properties is used, it can't be used again until the next dawn.\n\n**_Lightning_**. When you hit with a melee attack using the staff, you can cause the target to take an extra 2d6 lightning damage.\n\n**_Thunder_**. When you hit with a melee attack using the staff, you can cause the staff to emit a crack of thunder, audible out to 300 feet. The target you hit must succeed on a DC 17 Constitution saving throw or become stunned until the end of your next turn.\n\n**_Lightning Strike_**. You can use an action to cause a bolt of lightning to leap from the staff's tip in a line that is 5 feet wide and 120 feet long. Each creature in that line must make a DC 17 Dexterity saving throw, taking 9d6 lightning damage on a failed save, or half as much damage on a successful one.\n\n**_Thunderclap_**. You can use an action to cause the staff to issue a deafening thunderclap, audible out to 600 feet. Each creature within 60 feet of you (not including you) must make a DC 17 Constitution saving throw. On a failed save, a creature takes 2d6 thunder damage and becomes deafened for 1 minute. On a successful save, a creature takes half damage and isn't deafened.\n\n**_Thunder and Lightning_**. You can use an action to use the Lightning Strike and Thunderclap properties at the same time. Doing so doesn't expend the daily use of those properties, only the use of this one.",
        rarity: "very rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "staff-of-withering",
        name: "Staff of Withering",
        type: "Staff",
        desc: "This staff has 3 charges and regains 1d3 expended charges daily at dawn.\n\nThe staff can be wielded as a magic quarterstaff. On a hit, it deals damage as a normal quarterstaff, and you can expend 1 charge to deal an extra 2d10 necrotic damage to the target. In addition, the target must succeed on a DC 15 Constitution saving throw or have disadvantage for 1 hour on any ability check or saving throw that uses Strength or Constitution.",
        rarity: "rare",
        requires_attunement: "requires attunement by a cleric, druid, or warlock",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "stone-of-controlling-earth-elementals",
        name: "Stone of Controlling Earth Elementals",
        type: "Wondrous item",
        desc: "If the stone is touching the ground, you can use an action to speak its command word and summon an earth elemental, as if you had cast the _conjure elemental_ spell. The stone can't be used this way again until the next dawn. The stone weighs 5 pounds.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "stone-of-good-luck-luckstone",
        name: "Stone of Good Luck (Luckstone)",
        type: "Wondrous item",
        desc: "While this polished agate is on your person, you gain a +1 bonus to ability checks and saving throws.",
        rarity: "uncommon",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "sun-blade",
        name: "Sun Blade",
        type: "Weapon (longsword)",
        desc: "This item appears to be a longsword hilt. While grasping the hilt, you can use a bonus action to cause a blade of pure radiance to spring into existence, or make the blade disappear. While the blade exists, this magic longsword has the finesse property. If you are proficient with shortswords or longswords, you are proficient with the _sun blade_.\n\nYou gain a +2 bonus to attack and damage rolls made with this weapon, which deals radiant damage instead of slashing damage. When you hit an undead with it, that target takes an extra 1d8 radiant damage.\n\nThe sword's luminous blade emits bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. While the blade persists, you can use an action to expand or reduce its radius of bright and dim light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "sword-of-life-stealing",
        name: "Sword of Life Stealing",
        type: "Weapon (any sword)",
        desc: "When you attack a creature with this magic weapon and roll a 20 on the attack roll, that target takes an extra 3d6 necrotic damage, provided that the target isn't a construct or an undead. You gain temporary hit points equal to the extra damage dealt.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "sword-of-sharpness",
        name: "Sword of Sharpness",
        type: "Weapon (any sword that deals slashing damage)",
        desc: "When you attack an object with this magic sword and hit, maximize your weapon damage dice against the target.\n\nWhen you attack a creature with this weapon and roll a 20 on the attack roll, that target takes an extra 4d6 slashing damage. Then roll another d20. If you roll a 20, you lop off one of the target's limbs, with the effect of such loss determined by the GM. If the creature has no limb to sever, you lop off a portion of its body instead.\n\nIn addition, you can speak the sword's command word to cause the blade to shed bright light in a 10* foot radius and dim light for an additional 10 feet. Speaking the command word again or sheathing the sword puts out the light.",
        rarity: "very rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "sword-of-wounding",
        name: "Sword of Wounding",
        type: "Weapon (any sword)",
        desc: "Hit points lost to this weapon's damage can be regained only through a short or long rest, rather than by regeneration, magic, or any other means.\n\nOnce per turn, when you hit a creature with an attack using this magic weapon, you can wound the target. At the start of each of the wounded creature's turns, it takes 1d4 necrotic damage for each time you've wounded it, and it can then make a DC 15 Constitution saving throw, ending the effect of all such wounds on itself on a success. Alternatively, the wounded creature, or a creature within 5 feet of it, can use an action to make a DC 15 Wisdom (Medicine) check, ending the effect of such wounds on it on a success.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "talisman-of-pure-good",
        name: "Talisman of Pure Good",
        type: "Wondrous item",
        desc: "This talisman is a mighty symbol of goodness. A creature that is neither good nor evil in alignment takes 6d6 radiant damage upon touching the talisman. An evil creature takes 8d6 radiant damage upon touching the talisman. Either sort of creature takes the damage again each time it ends its turn holding or carrying the talisman.\n\nIf you are a good cleric or paladin, you can use the talisman as a holy symbol, and you gain a +2 bonus to spell attack rolls while you wear or hold it.\n\nThe talisman has 7 charges. If you are wearing or holding it, you can use an action to expend 1 charge from it and choose one creature you can see on the ground within 120 feet of you. If the target is of evil alignment, a flaming fissure opens under it. The target must succeed on a DC 20 Dexterity saving throw or fall into the fissure and be destroyed, leaving no remains. The fissure then closes, leaving no trace of its existence. When you expend the last charge, the talisman disperses into motes of golden light and is destroyed.",
        rarity: "legendary",
        requires_attunement: "requires attunement by a creature of good alignment",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "talisman-of-the-sphere",
        name: "Talisman of the Sphere",
        type: "Wondrous item",
        desc: "When you make an Intelligence (Arcana) check to control a _sphere of annihilation_ while you are holding this talisman, you double your proficiency bonus on the check. In addition, when you start your turn with control over a _sphere of annihilation_, you can use an action to levitate it 10 feet plus a number of additional feet equal to 10 × your Intelligence modifier.",
        rarity: "legendary",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "talisman-of-ultimate-evil",
        name: "Talisman of Ultimate Evil",
        type: "Wondrous item",
        desc: "This item symbolizes unrepentant evil. A creature that is neither good nor evil in alignment takes 6d6 necrotic damage upon touching the talisman. A good creature takes 8d6 necrotic damage upon touching the talisman. Either sort of creature takes the damage again each time it ends its turn holding or carrying the talisman.\n\nIf you are an evil cleric or paladin, you can use the talisman as a holy symbol, and you gain a +2 bonus to spell attack rolls while you wear or hold it.\n\nThe talisman has 6 charges. If you are wearing or holding it, you can use an action to expend 1 charge from the talisman and choose one creature you can see on the ground within 120 feet of you. If the target is of good alignment, a flaming fissure opens under it. The target must succeed on a DC 20 Dexterity saving throw or fall into the fissure and be destroyed, leaving no remains. The fissure then closes, leaving no trace of its existence. When you expend the last charge, the talisman dissolves into foul-smelling slime and is destroyed.",
        rarity: "legendary",
        requires_attunement: "requires attunement by a creature of evil alignment",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "tome-of-clear-thought",
        name: "Tome of Clear Thought",
        type: "Wondrous item",
        desc: "This book contains memory and logic exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Intelligence score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.",
        rarity: "very rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "tome-of-leadership-and-influence",
        name: "Tome of Leadership and Influence",
        type: "Wondrous item",
        desc: "This book contains guidelines for influencing and charming others, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Charisma score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.",
        rarity: "very rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "tome-of-understanding",
        name: "Tome of Understanding",
        type: "Wondrous item",
        desc: "This book contains intuition and insight exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Wisdom score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.",
        rarity: "very rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "trident-of-fish-command",
        name: "Trident of Fish Command",
        type: "Weapon (trident)",
        desc: "This trident is a magic weapon. It has 3 charges. While you carry it, you can use an action and expend 1 charge to cast _dominate beast_ (save DC 15) from it on a beast that has an innate swimming speed. The trident regains 1d3 expended charges daily at dawn.",
        rarity: "uncommon",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "universal-solvent",
        name: "Universal Solvent",
        type: "Wondrous item",
        desc: "This tube holds milky liquid with a strong alcohol smell. You can use an action to pour the contents of the tube onto a surface within reach. The liquid instantly dissolves up to 1 square foot of adhesive it touches, including _sovereign glue._",
        rarity: "legendary",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "vicious-weapon",
        name: "Vicious Weapon",
        type: "Weapon (any)",
        desc: "When you roll a 20 on your attack roll with this magic weapon, your critical hit deals an extra 2d6 damage of the weapon's type.",
        rarity: "rare",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "vorpal-sword",
        name: "Vorpal Sword",
        type: "Weapon (any sword that deals slashing damage)",
        desc: "You gain a +3 bonus to attack and damage rolls made with this magic weapon. In addition, the weapon ignores resistance to slashing damage.\n\nWhen you attack a creature that has at least one head with this weapon and roll a 20 on the attack roll, you cut off one of the creature's heads. The creature dies if it can't survive without the lost head. A creature is immune to this effect if it is immune to slashing damage, doesn't have or need a head, has legendary actions, or the GM decides that the creature is too big for its head to be cut off with this weapon. Such a creature instead takes an extra 6d8 slashing damage from the hit.",
        rarity: "legendary",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "wand-of-binding",
        name: "Wand of Binding",
        type: "Wand",
        desc: "This wand has 7 charges for the following properties. It regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.\n\n**_Spells_**. While holding the wand, you can use an action to expend some of its charges to cast one of the following spells (save DC 17): _hold monster_ (5 charges) or _hold person_ (2 charges).\n\n**_Assisted Escape_**. While holding the wand, you can use your reaction to expend 1 charge and gain advantage on a saving throw you make to avoid being paralyzed or restrained, or you can expend 1 charge and gain advantage on any check you make to escape a grapple.",
        rarity: "rare",
        requires_attunement: "requires attunement by a spellcaster",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "wand-of-enemy-detection",
        name: "Wand of Enemy Detection",
        type: "Wand",
        desc: "This wand has 7 charges. While holding it, you can use an action and expend 1 charge to speak its command word. For the next minute, you know the direction of the nearest creature hostile to you within 60 feet, but not its distance from you. The wand can sense the presence of hostile creatures that are ethereal, invisible, disguised, or hidden, as well as those in plain sight. The effect ends if you stop holding the wand.\n\nThe wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "wand-of-fear",
        name: "Wand of Fear",
        type: "Wand",
        desc: "This wand has 7 charges for the following properties. It regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.\n\n**_Command_**. While holding the wand, you can use an action to expend 1 charge and command another creature to flee or grovel, as with the _command_ spell (save DC 15).\n\n**_Cone of Fear_**. While holding the wand, you can use an action to expend 2 charges, causing the wand's tip to emit a 60-foot cone of amber light. Each creature in the cone must succeed on a DC 15 Wisdom saving throw or become frightened of you for 1 minute. While it is frightened in this way, a creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If it has nowhere it can move, the creature can use the Dodge action. At the end of each of its turns, a creature can repeat the saving throw, ending the effect on itself on a success.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "wand-of-fireballs",
        name: "Wand of Fireballs",
        type: "Wand",
        desc: "This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the _fireball_ spell (save DC 15) from it. For 1 charge, you cast the 3rd-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.\n\nThe wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
        rarity: "rare",
        requires_attunement: "requires attunement by a spellcaster",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "wand-of-lightning-bolts",
        name: "Wand of Lightning Bolts",
        type: "Wand",
        desc: "This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the _lightning bolt_ spell (save DC 15) from it. For 1 charge, you cast the 3rd-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.\n\nThe wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
        rarity: "rare",
        requires_attunement: "requires attunement by a spellcaster",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "wand-of-magic-detection",
        name: "Wand of Magic Detection",
        type: "Wand",
        desc: "This wand has 3 charges. While holding it, you can expend 1 charge as an action to cast the _detect magic_ spell from it. The wand regains 1d3 expended charges daily at dawn.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "wand-of-magic-missiles",
        name: "Wand of Magic Missiles",
        type: "Wand",
        desc: "This wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the _magic missile_ spell from it. For 1 charge, you cast the 1st-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.\n\nThe wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "wand-of-paralysis",
        name: "Wand of Paralysis",
        type: "Wand",
        desc: "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cause a thin blue ray to streak from the tip toward a creature you can see within 60 feet of you. The target must succeed on a DC 15 Constitution saving throw or be paralyzed for 1 minute. At the end of each of the target's turns, it can repeat the saving throw, ending the effect on itself on a success.\n\nThe wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
        rarity: "rare",
        requires_attunement: "requires attunement by a spellcaster",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "wand-of-polymorph",
        name: "Wand of Polymorph",
        type: "Wand",
        desc: "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cast the _polymorph_ spell (save DC 15) from it.\n\nThe wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
        rarity: "very rare",
        requires_attunement: "requires attunement by a spellcaster",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "wand-of-secrets",
        name: "Wand of Secrets",
        type: "Wand",
        desc: "The wand has 3 charges. While holding it, you can use an action to expend 1 of its charges, and if a secret door or trap is within 30 feet of you, the wand pulses and points at the one nearest to you. The wand regains 1d3 expended charges daily at dawn.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "wand-of-the-war-mage-1-2-or-3",
        name: "Wand of the War Mage, +1, +2, or +3",
        type: "Wand",
        desc: "While holding this wand, you gain a bonus to spell attack rolls determined by the wand's rarity. In addition, you ignore half cover when making a spell attack.",
        rarity: "uncommon (+1), rare (+2), or very rare (+3)",
        requires_attunement: "requires attunement by a spellcaster",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "wand-of-web",
        name: "Wand of Web",
        type: "Wand",
        desc: "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cast the _web_ spell (save DC 15) from it.\n\nThe wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
        rarity: "uncommon",
        requires_attunement: "requires attunement by a spellcaster",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "wand-of-wonder",
        name: "Wand of Wonder",
        type: "Wand",
        desc: "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges and choose a target within 120 feet of you. The target can be a creature, an object, or a point in space. Roll d100 and consult the following table to discover what happens.\n\nIf the effect causes you to cast a spell from the wand, the spell's save DC is 15. If the spell normally has a range expressed in feet, its range becomes 120 feet if it isn't already.\n\nIf an effect covers an area, you must center the spell on and include the target. If an effect has multiple possible subjects, the GM randomly determines which ones are affected.\n\nThe wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into dust and is destroyed.\n\n| d100   | Effect                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |\n|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|\n| 01-05  | You cast slow. 06-10 You cast faerie fire.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |\n| 11-15  | You are stunned until the start of your next turn, believing something awesome just happened. 16-20 You cast gust of wind.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |\n| 21-25  | You cast detect thoughts on the target you chose. If you didn't target a creature, you instead take 1d6 psychic damage.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |\n| 26-30  | You cast stinking cloud.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |\n| 31-33  | Heavy rain falls in a 60-foot radius centered on the target. The area becomes lightly obscured. The rain falls until the start of your next turn.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |\n| 34-36  | An animal appears in the unoccupied space nearest the target. The animal isn't under your control and acts as it normally would. Roll a d100 to determine which animal appears. On a 01-25, a rhinoceros appears; on a 26-50, an elephant appears; and on a 51-100, a rat appears.                                                                                                                                                                                                                                                                                                                       |\n| 37-46  | You cast lightning bolt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |\n| 47-49  | A cloud of 600 oversized butterflies fills a 30-foot radius centered on the target. The area becomes heavily obscured. The butterflies remain for 10 minutes.                                                                                                                                                                                                                                                                                                                                                                                                                                            |\n| 50-53  | You enlarge the target as if you had cast enlarge/reduce. If the target can't be affected by that spell, or if you didn't target a creature, you become the target.                                                                                                                                                                                                                                                                                                                                                                                                                                      |\n| 54-58  | You cast darkness.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |\n| 59-62  | Grass grows on the ground in a 60-foot radius centered on the target. If grass is already there, it grows to ten times its normal size and remains overgrown for 1 minute.                                                                                                                                                                                                                                                                                                                                                                                                                               |\n| 63-65  | An object of the GM's choice disappears into the Ethereal Plane. The object must be neither worn nor carried, within 120 feet of the target, and no larger than 10 feet in any dimension.                                                                                                                                                                                                                                                                                                                                                                                                                |\n| 66-69  | You shrink yourself as if you had cast enlarge/reduce on yourself.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |\n| 70-79  | You cast fireball.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |\n| 80-84  | You cast invisibility on yourself.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |\n| 85-87  | Leaves grow from the target. If you chose a point in space as the target, leaves sprout from the creature nearest to that point. Unless they are picked off, the leaves turn brown and fall off after 24 hours.                                                                                                                                                                                                                                                                                                                                                                                          |\n| 88-90  | A stream of 1d4 × 10 gems, each worth 1 gp, shoots from the wand's tip in a line 30 feet long and 5 feet wide. Each gem deals 1 bludgeoning damage, and the total damage of the gems is divided equally among all creatures in the line.                                                                                                                                                                                                                                                                                                                                                                 |\n| 91-95  | A burst of colorful shimmering light extends from you in a 30-foot radius. You and each creature in the area that can see must succeed on a DC 15 Constitution saving throw or become blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.                                                                                                                                                                                                                                                                            |\n| 96-97  | The target's skin turns bright blue for 1d10 days. If you chose a point in space, the creature nearest to that point is affected.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |\n| 98-100 | If you targeted a creature, it must make a DC 15 Constitution saving throw. If you didn't target a creature, you become the target and must make the saving throw. If the saving throw fails by 5 or more, the target is instantly petrified. On any other failed save, the target is restrained and begins to turn to stone. While restrained in this way, the target must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the target is freed by the greater restoration spell or similar magic. |",
        rarity: "rare",
        requires_attunement: "requires attunement by a spellcaster",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "weapon-1-2-or-3",
        name: "Weapon, +1, +2, or +3",
        type: "Weapon (any)",
        desc: "You have a bonus to attack and damage rolls made with this magic weapon. The bonus is determined by the weapon's rarity.",
        rarity: "uncommon (+1), rare (+2), or very rare (+3)",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "well-of-many-worlds",
        name: "Well of Many Worlds",
        type: "Wondrous item",
        desc: "This fine black cloth, soft as silk, is folded up to the dimensions of a handkerchief. It unfolds into a circular sheet 6 feet in diameter.\n\nYou can use an action to unfold and place the _well of many worlds_ on a solid surface, whereupon it creates a two-way portal to another world or plane of existence. Each time the item opens a portal, the GM decides where it leads. You can use an action to close an open portal by taking hold of the edges of the cloth and folding it up. Once _well of many worlds_ has opened a portal, it can't do so again for 1d8 hours.",
        rarity: "legendary",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "wind-fan",
        name: "Wind Fan",
        type: "Wondrous item",
        desc: "While holding this fan, you can use an action to cast the _gust of wind_ spell (save DC 13) from it. Once used, the fan shouldn't be used again until the next dawn. Each time it is used again before then, it has a cumulative 20 percent chance of not working and tearing into useless, nonmagical tatters.",
        rarity: "uncommon",
        requires_attunement: "",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "winged-boots",
        name: "Winged Boots",
        type: "Wondrous item",
        desc: "While you wear these boots, you have a flying speed equal to your walking speed. You can use the boots to fly for up to 4 hours, all at once or in several shorter flights, each one using a minimum of 1 minute from the duration. If you are flying when the duration expires, you descend at a rate of 30 feet per round until you land.\n\nThe boots regain 2 hours of flying capability for every 12 hours they aren't in use.",
        rarity: "uncommon",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "wings-of-flying",
        name: "Wings of Flying",
        type: "Wondrous item",
        desc: "While wearing this cloak, you can use an action to speak its command word. This turns the cloak into a pair of bat wings or bird wings on your back for 1 hour or until you repeat the command word as an action. The wings give you a flying speed of 60 feet. When they disappear, you can't use them again for 1d12 hours.\n\n\n\n\n## Sentient Magic Items\n\nSome magic items possess sentience and personality. Such an item might be possessed, haunted by the spirit of a previous owner, or self-aware thanks to the magic used to create it. In any case, the item behaves like a character, complete with personality quirks, ideals, bonds, and sometimes flaws. A sentient item might be a cherished ally to its wielder or a continual thorn in the side.\n\nMost sentient items are weapons. Other kinds of items can manifest sentience, but consumable items such as potions and scrolls are never sentient.\n\nSentient magic items function as NPCs under the GM's control. Any activated property of the item is under the item's control, not its wielder's. As long as the wielder maintains a good relationship with the item, the wielder can access those properties normally. If the relationship is strained, the item can suppress its activated properties or even turn them against the wielder.",
        rarity: "rare",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    },
    {
        slug: "orb-of-dragonkind",
        name: "Orb of Dragonkind",
        type: "Wondrous item",
        desc: "Ages past, elves and humans waged a terrible war against evil dragons. When the world seemed doomed, powerful wizards came together and worked their greatest magic, forging five _Orbs of Dragonkind_ (or _Dragon Orbs_) to help them defeat the dragons. One orb was taken to each of the five wizard towers, and there they were used to speed the war toward a victorious end. The wizards used the orbs to lure dragons to them, then destroyed the dragons with powerful magic.\n\nAs the wizard towers fell in later ages, the orbs were destroyed or faded into legend, and only three are thought to survive. Their magic has been warped and twisted over the centuries, so although their primary purpose of calling dragons still functions, they also allow some measure of control over dragons.\n\nEach orb contains the essence of an evil dragon, a presence that resents any attempt to coax magic from it. Those lacking in force of personality might find themselves enslaved to an orb.\n\nAn orb is an etched crystal globe about 10 inches in diameter. When used, it grows to about 20 inches in diameter, and mist swirls inside it.\n\nWhile attuned to an orb, you can use an action to peer into the orb's depths and speak its command word. You must then make a DC 15 Charisma check. On a successful check, you control the orb for as long as you remain attuned to it. On a failed check, you become charmed by the orb for as long as you remain attuned to it.\n\nWhile you are charmed by the orb, you can't voluntarily end your attunement to it, and the orb casts _suggestion_ on you at will (save DC 18), urging you to work toward the evil ends it desires. The dragon essence within the orb might want many things: the annihilation of a particular people, freedom from the orb, to spread suffering in the world, to advance the worship of Tiamat, or something else the GM decides.\n\n**_Random Properties_**. An _Orb of Dragonkind_ has the following random properties:\n\n* 2 minor beneficial properties\n* 1 minor detrimental property\n* 1 major detrimental property\n\n**_Spells_**. The orb has 7 charges and regains 1d4 + 3 expended charges daily at dawn. If you control the orb, you can use an action and expend 1 or more charges to cast one of the following spells (save DC 18) from it: _cure wounds_ (5th-level version, 3 charges), _daylight_ (1 charge), _death ward_ (2 charges), or _scrying_ (3 charges).\n\nYou can also use an action to cast the _detect magic_ spell from the orb without using any charges.\n\n**_Call Dragons_**. While you control the orb, you can use an action to cause the artifact to issue a telepathic call that extends in all directions for 40 miles. Evil dragons in range feel compelled to come to the orb as soon as possible by the most direct route. Dragon deities such as Tiamat are unaffected by this call. Dragons drawn to the orb might be hostile toward you for compelling them against their will. Once you have used this property, it can't be used again for 1 hour.\n\n**_Destroying an Orb_**. An _Orb of Dragonkind_ appears fragile but is impervious to most damage, including the attacks and breath weapons of dragons. A _disintegrate_ spell or one good hit from a +3 magic weapon is sufficient to destroy an orb, however.",
        rarity: "artifact",
        requires_attunement: "requires attunement",
        document__slug: "wotc-srd",
        document__title: "Systems Reference Document"
    }
]
//magicStuffs is the giant array of magic items from the eternal API

//create a recursive function
const doThething = (int) => {
    let i = 0
    if( int > 0){
        i = int
    }
    return fetch(`http://localhost:8088/magicItems`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
    },
    body: JSON.stringify(magicStuffs[i])
    }).then(r => r.json())
    .then(Item => {
        if(Item.id <= (magicStuffs.length + 1))
        {
            let x = i + 1
            doThething(x)
        }
    })

}
const usableStuffs = magicStuffs

return <></>

}