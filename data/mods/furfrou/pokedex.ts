export const Pokedex: { [k: string]: ModdedSpeciesData } = {
	eevee: {
		inherit: true,
		evos: ["Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Sylveon", "Aleon"],
	},
	vaporeon: {
		inherit: true,
		otherFormes: ["Vaporeon-Arcane"],
		formeOrder: ["Vaporeon", "Vaporeon-Arcane"],
	},
	vaporeonarcane: {
		name: "Vaporeon-Arcane",
		copyData: "Vaporeon",
		baseSpecies: "Vaporeon",
		forme: "Arcane",
		types: ["Water", "Dragon"],
		abilities: {0: "Multiscale", H: "Water Absorb"},
		movepoolAdditions: ["dragontail", "dragonclaw", "dracometeor", "dragonpulse", "clangingscales", "dragonbreath", "roost"],
		creator: "antyytna",
	},
	jolteon: {
		inherit: true,
		otherFormes: ["Jolteon-Arcane"],
		formeOrder: ["Jolteon", "Jolteon-Arcane"],
	},
	jolteonarcane: {
		name: "Jolteon-Arcane",
		copyData: "Jolteon",
		baseSpecies: "Jolteon",
		forme: "Arcane",
		types: ["Electric", "Dragon"],
		abilities: {0: "Intimidate", H: "Volt Absorb"},
		movepoolAdditions: ["dracometeor", "dragonclaw", "clangingscales", "dragonpulse", "roost"],
		creator: "antyytna",
	},
	flareon: {
		inherit: true,
		otherFormes: ["Flareon-Arcane"],
		formeOrder: ["Flareon", "Flareon-Arcane"],
	},
	flareonarcane: {
		name: "Flareon-Arcane",
		copyData: "Flareon",
		baseSpecies: "Flareon",
		forme: "Arcane",
		types: ["Fire", "Dragon"],
		abilities: {0: "Strong Jaw", H: "Flash Fire"},
		movepoolAdditions: ["outrage", "dracometeor", "clangoroussoul", "dragonclaw", "dragonpulse", "clangingscales"],
		creator: "antyytna",
	},
	espeon: {
		inherit: true,
		otherFormes: ["Espeon-Mystic"],
		formeOrder: ["Espeon", "Espeon-Mystic"],
	},
	espeonmystic: {
		name: "Espeon-Mystic",
		copyData: "Espeon",
		baseSpecies: "Espeon",
		forme: "Mystic",
		types: ["Psychic", "Ghost"],
		abilities: {0: "Prankster", H: "Magic Bounce"},
		movepoolAdditions: ["memento", "destinybond", "focusblast", "mysticalfire", "willowisp", "nastyplot"],
		creator: "antyytna",
	},
	umbreon: {
		inherit: true,
		otherFormes: ["Umbreon-Mystic"],
		formeOrder: ["Umbreon", "Umbreon-Mystic"],
	},
	umbreonmystic: {
		name: "Umbreon-Mystic",
		copyData: "Umbreon",
		baseSpecies: "Umbreon",
		forme: "Mystic",
		types: ["Dark", "Ghost"],
		abilities: {0: "Prankster", H: "Inner Focus"},
		movepoolAdditions: ["memento", "destinybond", "willowisp"],
		movepoolDeletions: ["foulplay", "toxic", "pursuit"],
		creator: "antyytna",
	},
	leafeon: {
		inherit: true,
		otherFormes: ["Leafeon-Proto"],
		formeOrder: ["Leafeon", "Leafeon-Proto"],
	},
	leafeonproto: {
		name: "Leafeon-Proto",
		copyData: "Leafeon",
		baseSpecies: "Leafeon",
		forme: "Proto",
		types: ["Grass", "Steel"],
		abilities: {0: "Stamina", H: "Chlorophyll"},
		movepoolAdditions: ["bodypress", "spikes", "stealthrock", "spikyshield", "ironhead", "voltswitch"],
		movepoolDeletions: ["synthesis", "yawn"],
		creator: "antyytna",
	},
	glaceon: {
		inherit: true,
		otherFormes: ["Glaceon-Proto"],
		formeOrder: ["Glaceon", "Glaceon-Proto"],
	},
	glaceonproto: {
		name: "Glaceon-Proto",
		copyData: "Glaceon",
		baseSpecies: "Glaceon",
		forme: "Proto",
		types: ["Ice", "Electric"],
		abilities: {0: "Quick Feet", H: "Ice Body"},
		movepoolAdditions: ["thunderbolt", "voltswitch", "electroball", "zapcannon", "thunder"],
		creator: "antyytna",
	},
	sylveon: {
		inherit: true,
		otherFormes: ["Sylveon-Compound"],
		formeOrder: ["Sylveon", "Sylveon-Compound"],
	},
	sylveoncompound: {
		name: "Sylveon-Compound",
		copyData: "Sylveon",
		baseSpecies: "Sylveon",
		forme: "Compound",
		types: ["Fairy", "Bug"],
		abilities: {0: "Tinted Lens", H: "Pixilate"},
		movepoolAdditions: ["bugbuzz", "uturn", "stickyweb", "signalbeam"],
		movepoolDeletions: ["moonblast"],
		creator: "antyytna",
	},
	aleon: {
		name: "Aleon",
		copyData: "Eevee",

		baseStats: {hp: 103, atk: 79, def: 53, spa: 89, spd: 67, spe: 134},
		abilities: {0: "Adaptability", H: "Normalize", S: "Beast Boost"},
		movepoolAdditions: [
			"blizzard", "chargebeam", "discharge", "expandingforce", "futuresight", "gigaimpact", "haze", "hyperbeam", "icebeam", "icywind", "magiccoat",
			"naturepower", "psychic", "psyshock", "reflect", "reflecttype", "risingvoltage", "scald", "shockwave", "signalbeam", "skillswap", "snarl", "solarbeam",
			"suckerpunch", "surf", "terrainpulse", "thunder", "thunderbolt", "thunderwave", "trick", "voltswitch", "waterpulse", "wonderroom", "zapcannon",
		],

		prevo: "Eevee",
		evoType: "levelExtra",
		evoCondition: "in Ultra Space",
		creator: "inkbug",
	},
	leavanny: {
		inherit: true,
		baseStats: {hp: 75, atk: 113, def: 80, spa: 70, spd: 80, spe: 112},
		abilities: {0: "Swarm", 1: "Chlorophyll", H: "Technician"},
	},
	brionneviolet: {
		name: "Brionne-Violet",
		baseSpecies: "Brionne",
		copyData: "Primarina",
		
		forme: "Violet",
		baseStats: {hp: 105, atk: 75, def: 57, spa: 105, spd: 60, spe: 123},
		abilities: {0: "Torrent", 1: "Regenerator", H: "Liquid Voice"},
		movepoolAdditions: [
			"taunt", "knockoff", "sludgebomb", "sludgewave", "spikes", "toxicspikes", 
			"clearsmog", "swordsdance", "temperflare", "wavecrash", "meteormash", 
			"meteorbeam", "sweetkiss", "zodiacbreak",
		],
		creator: "Violet",
	},
	brionnevioletswimming: {
		name: "Brionne-Violet-Swimming",
		baseSpecies: "Brionne",	
		copyData: "Primarina",
		
		forme: "Violet-Swimming",
		baseStats: {hp: 105, atk: 40, def: 80, spa: 137, spd: 109, spe: 54},
		abilities: {0: "Torrent", 1: "Regenerator", H: "Liquid Voice"},
		movepoolAdditions: [
			"taunt", "knockoff", "sludgebomb", "sludgewave", "spikes", "toxicspikes", 
			"clearsmog", "swordsdance", "temperflare", "wavecrash", "meteormash", 
			"meteorbeam", "sweetkiss", "zodiacbreak",
		],
		creator: "Violet",
	},
	gardevoir: {
		inherit: true,
		gender: "F", // i'm sorry little one
	},
	gardevoiramelia: {
		name: "Gardevoir-Amelia",
		baseSpecies: "Gardevoir",
		copyData: "Gardevoir-Mega",
		baseStats: {hp: 75, atk: 50, def: 70, spa: 145, spd: 120, spe: 103},
		abilities: {0: "Pixilate"},
		types: ["Ghost", "Fairy"],
		movepoolAdditions: ["psystrike"],
		movepoolDeletions: ["willowisp", "trick", "memento", "storedpower"],
		requiredItem: "Gardevoirite",
		creator: "antyytna",
	},
	mawile: {
		inherit: true,
		gender: "N",
	},
	mawilemegakorra: {
		name: "Mawile-Mega-Korra",
		baseSpecies: "Mawile",
		copyData: "Mawile-Mega",
		baseStats: {hp: 50, atk: 115, def: 135, spa: 25, spd: 115, spe: 40},
		abilities: {0: "Huge Power"},
		movepoolAdditions: ["superpower"],
		movepoolDeletions: ["knockoff", "swordsdance"],
		requiredItem: "Mawilite",
		creator: "viivian",
	},
	
	// Pure customs //
	
	albatross: {
		name: "Albatross",
		types: ["Water", "Steel"],
		baseStats: {hp: 125, atk: 80, def: 100, spa: 100, spd: 80, spe: 100},
		abilities: {0: "Iron Barbs"},
		heightm: 1.3,
		weightkg: 13.0,
		creator: "Albatross",
	},
	fovospartion: {
		name: "Fovospartion",
		types: ["Electric", "Ghost"],
		baseStats: {hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		abilities: {0: "Run Away", H: "Wonder Guard"},
		heightm: 0.1,
		weightkg: 0.1,
		otherFormes: ["Fovospartion-Tyke"],
		formeOrder: ["Fovospartion", "Fovospartion-Tyke"],
		creator: "ausma",
	},
	fovospartiontyke: {
		name: "Fovospartion-Tyke",
		baseForme: "Fovospartion",
		forme: "Tyke",
		types: ["Electric", "Ghost"],
		baseStats: {hp: 5, atk: 25, def: 1, spa: 25, spd: 1, spe: 193},
		abilities: {0: "Flicker"},
		heightm: 1.3,
		weightkg: 0.1,
		changesFrom: "Fovospartion",
		creator: "ausma",
	},
	calico: {
		name: "Calico",
		types: ["Water", "Normal"],
		baseStats: {hp: 140, atk: 70, def: 34, spa: 80, spd: 84, spe: 112},
		abilities: {0: "Minus", 1: "Weak Armor", H: "Innards Out"},
		heightm: 1.0,
		weightkg: 9.0,
		creator: "uppa",
	},
	hope: {
		name: "Hope",
		types: ["Fighting", "Normal"],
		baseStats: {hp: 112, atk: 84, def: 140, spa: 70, spd: 80, spe: 34},
		abilities: {0: "Plus", 1: "Gluttony", H: "Stamina"},
		heightm: 1.0,
		weightkg: 9.0,
		creator: "uppa",
	},
	wickesicott: {
		name: "Wickesicott",
		copyData: "Whimsicott",
		types: ["Ghost", "Fairy"],
		baseStats: {hp: 71, atk: 103, def: 37, spa: 103, spd: 133, spe: 133},
		abilities: {0: "Prankster", 1: "Fluffy", H: "Cute Charm"},
		movepoolAdditions: [
			"afteryou", "aromatherapy", "calmmind", "disable", "drainingkiss", "expandingforce", "gravity",
			"healpulse", "healingwish", "magiccoat", "magicroom", "psychicnoise", "psychicterrain", "psyshock",
			"raindance", "reflect", "silktrap", "storedpower", "teleport", "trick", "wonderroom", "wormholedisruption",
		],
		movepoolDeletions: [
			"absorb", "flash", "gigadrain", "memento", "poisonpowder", "razorleaf", "seedbomb", "shadowball", "stunspore",
			"switcheroo", "thief", "toxic", "worryseed",
		],
		creator: "Maddy",
	},
	
	// Kit changes //

	absol: {
		inherit: true,
		baseStats: {hp: 85, atk: 130, def: 60, spa: 75, spd: 60, spe: 90},
		abilities: {0: "Magic Bounce", 1: "Super Luck", H: "Justified"},
	},
	fennekin: {
		inherit: true,
		abilities: {0: "Blaze", H: "Magic Guard"},
	},
	braixen: {
		inherit: true,
		abilities: {0: "Blaze", H: "Magic Guard"},
	},
	delphox: {
		inherit: true,
		abilities: {0: "Blaze", H: "Magic Guard"},
	},
	furret: {
		inherit: true,
		abilities: {0: "Fluffy", 1: "Keen Eye", H: "Frisk"},
		movepoolAdditions: ["tailslap"],
	},
	slowkinggalar: {
		inherit: true,
		movepoolDeletions: ["chillyreception"],
	},
	ironcrown: {
		inherit: true,
		movepoolAdditions: ["stealthrock"],
		movepoolDeletions: ["storedpower"],
	},
	genesect: {
		inherit: true,
		movepoolDeletions: ["shiftgear", "extremespeed", "flamethrower"],
	},
	pheromosa: {
		inherit: true,
		movepoolDeletions: ["quiverdance"],
	},
	poipole: {
		inherit: true,
		movepoolDeletions: ["nastyplot"],
	},
	naganadel: {
		inherit: true,
		movepoolDeletions: ["nastyplot"],
	},
	magearna: {
		inherit: true,
		movepoolDeletions: ["storedpower"],
	},
};
