export const Pokedex: import('../../../sim/dex-species').ModdedSpeciesDataTable = {
	samurott: {
		inherit: true,
		otherFormes: ["Samurott-Hisui", "Samurott-Hisui-Tera"],
		formeOrder: ["Samurott", "Samurott-Hisui", "Samurott-Hisui-Tera"],
	},
	skeledirge: {
		inherit: true,
		otherFormes: ["Skeledirge-Tera"],
		formeOrder: ["Skeledirge", "Skeledirge-Tera"],
		forceTeraType: "Grass",
	},
	skeledirgetera: {
		num: 911,
		name: "Skeledirge-Tera",
		baseSpecies: "Skeledirge",
		forme: "Tera",
		types: ["Fire", "Ghost"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 104, atk: 75, def: 135, spa: 120, spd: 80, spe: 66},
		abilities: {0: "Soulful Noise"},
		heightm: 1.6,
		weightkg: 326.5,
		eggGroups: ["Field"],
		requiredItem: "Tera Shard",
		battleOnly: "Skeledirge",
		forceTeraType: "Grass",
	},
	samurotthisui: {
		inherit: true,
		forceTeraType: "Fire",
	},
	samurotthisuitera: {
		num: 503,
		name: "Samurott-Hisui-Tera",
		baseSpecies: "Samurott",
		forme: "Hisui-Tera",
		types: ["Water", "Dark"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 90, atk: 113, def: 80, spa: 100, spd: 70, spe: 125},
		abilities: {0: "Defiant"},
		heightm: 1.5,
		weightkg: 58.2,
		eggGroups: ["Field"],
		requiredItem: "Tera Shard",
		battleOnly: "Samurott-Hisui",
		forceTeraType: "Fire",
	},
	tinkaton: {
		inherit: true,
		otherFormes: ["Tinkaton-Tera"],
		formeOrder: ["Tinkaton", "Tinkaton-Tera"],
		forceTeraType: "Water",
	},
	tinkatontera: {
		num: 959,
		name: "Tinkaton-Tera",
		baseSpecies: "Tinkaton",
		forme: "Tera",
		types: ["Fairy", "Steel"],
		gender: "F",
		baseStats: {hp: 85, atk: 85, def: 105, spa: 82, spd: 105, spe: 94},
		abilities: {0: "Uptime"},
		heightm: 0.7,
		weightkg: 112.8,
		eggGroups: ["Fairy"],
		requiredItem: "Tera Shard",
		battleOnly: "Tinkaton",
		forceTeraType: "Water",
	},
	blissey: {
		inherit: true,
		otherFormes: ["Blissey-Tera"],
		formeOrder: ["Blissey", "Blissey-Tera"],
		forceTeraType: "Fairy",
	},
	blisseytera: {
		num: 242,
		name: "Blissey-Tera",
		baseSpecies: "Blissey",
		forme: "Tera",
		types: ["Normal", "Fairy"],
		gender: "F",
		baseStats: {hp: 255, atk: 10, def: 10, spa: 95, spd: 135, spe: 75},
		abilities: {0: "Serene Grace"},
		heightm: 1.5,
		weightkg: 46.8,
		eggGroups: ["Fairy"],
		requiredItem: "Tera Shard",
		battleOnly: "Blissey",
		forceTeraType: "Fairy",
	},
	pincurchin: {
		inherit: true,
		otherFormes: ["Pincurchin-Tera"],
		formeOrder: ["Pincurchin", "Pincurchin-Tera"],
		forceTeraType: "Dragon",
	},
	pincurchintera: {
		num: 871,
		name: "Pincurchin-Tera",
		baseSpecies: "Pincurchin",
		forme: "Tera",
		types: ["Electric"],
		baseStats: {hp: 63, atk: 91, def: 95, spa: 91, spd: 85, spe: 60},
		abilities: {0: "Surge Surfer"},
		heightm: 0.3,
		weightkg: 1,
		eggGroups: ["Water 1", "Amorphous"],
		requiredItem: "Tera Shard",
		battleOnly: "Pincurchin",
		forceTeraType: "Dragon",
	},
	metagross: {
		inherit: true,
		otherFormes: ["Metagross-Mega", "Metagross-Tera"],
		formeOrder: ["Metagross", "Metagross-Mega", "Metagross-Tera"],
		forceTeraType: "Steel",
	},
	metagrosstera: {
		num: 376,
		name: "Metagross-Tera",
		baseSpecies: "Metagross",
		forme: "Tera",
		types: ["Steel", "Psychic"],
		gender: "N",
		baseStats: {hp: 80, atk: 150, def: 150, spa: 110, spd: 90, spe: 70},
		abilities: {0: "Technician"},
		heightm: 2.5,
		weightkg: 942.9,
		eggGroups: ["Mineral"],
		requiredItem: "Tera Shard",
		battleOnly: "Metagross",
		forceTeraType: "Steel",
	},
	pawmot: {
		inherit: true,
		otherFormes: ["Pawmot-Tera"],
		formeOrder: ["Pawmot", "Pawmot-Tera"],
		forceTeraType: "Electric",
	},
	pawmottera: {
		num: 923,
		name: "Pawmot-Tera",
		baseSpecies: "Pawmot",
		forme: "Tera",
		types: ["Electric", "Fighting"],
		baseStats: {hp: 90, atk: 140, def: 70, spa: 60, spd: 60, spe: 120},
		abilities: {0: "Energizer"},
		heightm: 0.9,
		weightkg: 41,
		eggGroups: ["Field"],
		requiredItem: "Tera Shard",
		battleOnly: "Pawmot",
		forceTeraType: "Electric",
	},
	hydrapple: {
		inherit: true,
		otherFormes: ["Hydrapple-Tera"],
		formeOrder: ["Hydrapple", "Hydrapple-Tera"],
		forceTeraType: "Poison",
	},
	hydrappletera: {
		num: 1019,
		name: "Hydrapple-Tera",
		baseSpecies: "Hydrapple",
		forme: "Tera",
		types: ["Grass", "Dragon"],
		baseStats: {hp: 106, atk: 80, def: 120, spa: 144, spd: 80, spe: 60},
		abilities: {0: "Toxic Chain"},
		heightm: 1.8,
		weightkg: 93,
		eggGroups: ["Grass", "Dragon"],
		requiredItem: "Tera Shard",
		battleOnly: "Hydrapple",
		forceTeraType: "Poison",
	},
	mabosstiff: {
		inherit: true,
		otherFormes: ["Mabosstiff-Tera"],
		formeOrder: ["Mabosstiff", "Mabosstiff-Tera"],
		forceTeraType: "Poison",
	},
	mabosstifftera: {
		num: 943,
		name: "Mabosstiff-Tera",
		baseSpecies: "Mabosstiff",
		forme: "Tera",
		types: ["Dark"],
		baseStats: {hp: 80, atk: 145, def: 100, spa: 60, spd: 85, spe: 85},
		abilities: {0: "Sink or Swim"},
		heightm: 1.1,
		weightkg: 61,
		eggGroups: ["Field"],
		requiredItem: "Tera Shard",
		battleOnly: "Mabosstiff",
		forceTeraType: "Poison",
	},
	clodsire: {
		inherit: true,
		otherFormes: ["Clodsire-Tera"],
		formeOrder: ["Clodsire", "Clodsire-Tera"],
		forceTeraType: "Dark",
	},
	clodsiretera: {
		num: 980,
		name: "Clodsire-Tera",
		baseSpecies: "Clodsire",
		forme: "Tera",
		types: ["Poison", "Ground"],
		baseStats: {hp: 130, atk: 85, def: 100, spa: 45, spd: 100, spe: 20},
		abilities: {0: "Unaware"},
		heightm: 1.8,
		weightkg: 223,
		eggGroups: ["Water 1", "Field"],
		requiredItem: "Tera Shard",
		battleOnly: "Clodsire",
		forceTeraType: "Dark",
	},
	ironleaves: {
		inherit: true,
		otherFormes: ["Iron Leaves-Tera"],
		formeOrder: ["Iron Leaves", "Iron Leaves-Tera"],
		forceTeraType: "Fighting",
	},
	ironleavestera: {
		num: 1010,
		name: "Iron Leaves-Tera",
		baseSpecies: "Iron Leaves",
		forme: "Tera",
		types: ["Grass", "Psychic"],
		gender: "N",
		baseStats: {hp: 110, atk: 140, def: 88, spa: 70, spd: 108, spe: 124},
		abilities: {0: "Slicer Drive"},
		heightm: 1.5,
		weightkg: 125,
		tags: ["Paradox"],
		eggGroups: ["Undiscovered"],
		requiredItem: "Tera Shard",
		battleOnly: "Iron Leaves",
		forceTeraType: "Fighting",
	},
	flygon: {
		inherit: true,
		otherFormes: ["Flygon-Tera"],
		formeOrder: ["Flygon", "Flygon-Tera"],
		forceTeraType: "Psychic",
	},
	flygontera: {
		num: 330,
		name: "Flygon-Tera",
		baseSpecies: "Flygon",
		forme: "Tera",
		types: ["Ground", "Dragon"],
		baseStats: {hp: 80, atk: 100, def: 80, spa: 106, spd: 80, spe: 124},
		abilities: {0: "Shattering Scream"},
		heightm: 2,
		weightkg: 82,
		eggGroups: ["Bug", "Dragon"],
		requiredItem: "Tera Shard",
		battleOnly: "Flygon",
		forceTeraType: "Psychic",
	},
	meowscarada: {
		inherit: true,
		otherFormes: ["Meowscarada-Tera"],
		formeOrder: ["Meowscarada", "Meowscarada-Tera"],
		forceTeraType: "Ice",
	},
	meowscaradatera: {
		num: 908,
		name: "Meowscarada-Tera",
		baseSpecies: "Meowscarada",
		forme: "Tera",
		types: ["Grass", "Dark"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 76, atk: 133, def: 87, spa: 81, spd: 70, spe: 133},
		abilities: {0: "Trace"},
		heightm: 1.5,
		weightkg: 31.2,
		eggGroups: ["Field", "Grass"],
		requiredItem: "Tera Shard",
		battleOnly: "Meowscarada",
		forceTeraType: "Ice",
	},
	weezing: {
		inherit: true,
		otherFormes: ["Weezing-Galar", "Weezing-Galar-Tera"],
		formeOrder: ["Weezing", "Weezing-Galar", "Weezing-Galar-Tera"],
	},
	weezinggalar: {
		inherit: true,
		forceTeraType: "Electric",
	},
	weezinggalartera: {
		num: 110,
		name: "Weezing-Galar-Tera",
		baseSpecies: "Weezing",
		forme: "Galar-Tera",
		types: ["Poison", "Fairy"],
		baseStats: {hp: 65, atk: 90, def: 140, spa: 125, spd: 70, spe: 50},
		abilities: {0: "Levitate"},
		heightm: 3,
		weightkg: 16,
		eggGroups: ["Amorphous"],
		requiredItem: "Tera Shard",
		battleOnly: "Weezing-Galar",
		forceTeraType: "Electric",
	},
	volcanion: {
		inherit: true,
		otherFormes: ["Volcanion-Tera"],
		formeOrder: ["Volcanion", "Volcanion-Tera"],
		forceTeraType: "Ground",
	},
	volcaniontera: {
		num: 721,
		name: "Volcanion-Tera",
		baseSpecies: "Volcanion",
		forme: "Tera",
		types: ["Fire", "Water"],
		gender: "N",
		baseStats: {hp: 80, atk: 110, def: 120, spa: 150, spd: 120, spe: 70},
		abilities: {0: "Neutralizing Gas"},
		heightm: 1.7,
		weightkg: 195,
		eggGroups: ["Undiscovered"],
		requiredItem: "Tera Shard",
		battleOnly: "Volcanion",
		forceTeraType: "Ground",
	},
	okidogi: {
		inherit: true,
		otherFormes: ["Okidogi-Tera"],
		formeOrder: ["Okidogi", "Okidogi-Tera"],
		forceTeraType: "Dark",
	},
	okidogitera: {
		num: 1014,
		name: "Okidogi-Tera",
		baseSpecies: "Okidogi",
		forme: "Tera",
		types: ["Poison", "Fighting"],
		gender: "M",
		baseStats: {hp: 88, atk: 138, def: 115, spa: 58, spd: 106, spe: 90},
		abilities: {0: "Merciless"},
		heightm: 1.8,
		weightkg: 92,
		eggGroups: ["Undiscovered"],
		requiredItem: "Tera Shard",
		battleOnly: "Okidogi",
		forceTeraType: "Dark",
	},
	munkidori: {
		inherit: true,
		otherFormes: ["Munkidori-Tera"],
		formeOrder: ["Munkidori", "Munkidori-Tera"],
		forceTeraType: "Fire",
	},
	munkidoritera: {
		num: 1015,
		name: "Munkidori-Tera",
		baseSpecies: "Munkidori",
		forme: "Tera",
		types: ["Poison", "Psychic"],
		gender: "M",
		baseStats: {hp: 88, atk: 90, def: 81, spa: 130, spd: 110, spe: 106},
		abilities: {0: "Distorted Aspect"},
		heightm: 1,
		weightkg: 12.2,
		eggGroups: ["Undiscovered"],
		requiredItem: "Tera Shard",
		battleOnly: "Munkidori",
		forceTeraType: "Fire",
	},
	fezandipiti: {
		inherit: true,
		otherFormes: ["Fezandipiti-Tera"],
		formeOrder: ["Fezandipiti", "Fezandipiti-Tera"],
		forceTeraType: "Water",
	},
	fezandipititera: {
		num: 1016,
		name: "Fezandipiti-Tera",
		baseSpecies: "Fezandipiti",
		forme: "Tera",
		types: ["Poison", "Fairy"],
		gender: "M",
		baseStats: {hp: 88, atk: 106, def: 92, spa: 70, spd: 125, spe: 114},
		abilities: {0: "Technician"},
		heightm: 1.4,
		weightkg: 30.1,
		eggGroups: ["Undiscovered"],
		requiredItem: "Tera Shard",
		battleOnly: "Fezandipiti",
		forceTeraType: "Water",
	},
	diancie: {
		inherit: true,
		otherFormes: ["Diancie-Mega", "Diancie-Tera"],
		formeOrder: ["Diancie", "Diancie-Mega", "Diancie-Tera"],
		forceTeraType: "Rock",
	},
	diancietera: {
		num: 719,
		name: "Diancie-Tera",
		baseSpecies: "Diancie",
		forme: "Tera",
		types: ["Rock", "Fairy"],
		gender: "N",
		baseStats: {hp: 50, atk: 125, def: 150, spa: 125, spd: 150, spe: 50},
		abilities: {0: "Analytic"},
		heightm: 0.7,
		weightkg: 8.8,
		eggGroups: ["Undiscovered"],
		requiredItem: "Tera Shard",
		battleOnly: "Diancie",
		forceTeraType: "Rock",
	},
	basculegion: {
		inherit: true,
		otherFormes: ["Basculegion-F", "Basculegion-F-Tera"],
		formeOrder: ["Basculegion", "Basculegion-F", "Basculegion-F-Tera"],
	},
	basculegionf: {
		inherit: true,
		forceTeraType: "Poison",
	},
	basculegionftera: {
		num: 902,
		name: "Basculegion-F-Tera",
		baseSpecies: "Basculegion",
		forme: "F-Tera",
		types: ["Water", "Ghost"],
		gender: "F",
		baseStats: {hp: 120, atk: 92, def: 80, spa: 120, spd: 90, spe: 78},
		abilities: {0: "Swift Swim"},
		heightm: 3,
		weightkg: 110,
		eggGroups: ["Water 2"],
		requiredItem: "Tera Shard",
		battleOnly: "Basculegion-F",
		forceTeraType: "Poison",
	},
	kleavor: {
		inherit: true,
		otherFormes: ["Kleavor-Tera"],
		formeOrder: ["Kleavor", "Kleavor-Tera"],
		forceTeraType: "Ghost",
	},
	kleavortera: {
		num: 900,
		name: "Kleavor-Tera",
		baseSpecies: "Kleavor",
		forme: "Tera",
		types: ["Bug", "Rock"],
		baseStats: {hp: 80, atk: 145, def: 125, spa: 45, spd: 70, spe: 85},
		abilities: {0: "Sharpness"},
		heightm: 1.8,
		weightkg: 89,
		eggGroups: ["Bug"],
		requiredItem: "Tera Shard",
		battleOnly: "Kleavor",
		forceTeraType: "Ghost",
	},
};
