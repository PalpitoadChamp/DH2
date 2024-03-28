export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	venusaur: {
		inherit: true,
		baseStats: {hp: 80, atk: 91, def: 103, spa: 111, spd: 110, spe: 80},
		abilities: {0: "Thick Fat"},
	},
	machamp: {
		inherit: true,
		baseStats: {hp: 100, atk: 130, def: 70, spa: 65, spd: 120, spe: 45},
		abilities: {0: "Inner Focus", H: "Brazen Brawn"},
	},
	gengar: {
		inherit: true,
		baseStats: {hp: 85, atk: 65, def: 60, spa: 130, spd: 130, spe: 110},
		abilities: {0: "Neutralizing Gas"},
		prevo: null,
	},
	starmie: {
		inherit: true,
		baseStats: {hp: 60, atk: 75, def: 95, spa: 110, spd: 95, spe: 115},
		abilities: {0: "Natural Cure", 1: "Analytic", H: "Chromatophore"},
	},
	dragonite: {
		inherit: true,
		types: ["Dragon", "Normal"],
		baseStats: {hp: 91, atk: 104, def: 95, spa: 120, spd: 100, spe: 90},
		abilities: {0: "Inner Focus"},
	},
	magneton: {
		inherit: true,
		baseStats: {hp: 75, atk: 60, def: 85, spa: 105, spd: 85, spe: 135},
		abilities: {0: "Analytic"},
		evos: null,
	},
	hypno: {
		inherit: true,
		types: ["Psychic", "Poison"],
		baseStats: {hp: 100, atk: 73, def: 70, spa: 93, spd: 125, spe: 67},
		abilities: {0: "Insomnia", H: "Immunity"},
	},
	gastly: {
		inherit: true,
		types: ["Ghost", "Dark"],
		baseStats: {hp: 80, atk: 65, def: 60, spa: 120, spd: 90, spe: 110},
		evos: null,
	},
	rapidash: {
		inherit: true,
		baseStats: {hp: 90, atk: 110, def: 90, spa: 120, spd: 85, spe: 105},
		abilities: {0: "Daymare", H: "Flash Fire"},
	},
	mewtwo: {
		inherit: true,
		types: ["Psychic", "Fighting"],
		baseStats: {hp: 86, atk: 115, def: 100, spa: 64, spd: 95, spe: 100},
		abilities: {0: "Steadfast"},
	},
	lanturn: {
		inherit: true,
		baseStats: {hp: 125, atk: 58, def: 63, spa: 86, spd: 86, spe: 67},
		abilities: {0: "Compound Eyes", 1: "Volt Absorb", H: "Water Absorb"},
		prevo: null,
	},
	quagsire: {
		inherit: true,
		baseStats: {hp: 105, atk: 105, def: 85, spa: 65, spd: 85, spe: 35},
		abilities: {0: "Water Absorb"},
		prevo: null,
	},
	ursaring: {
		inherit: true,
		types: ["Normal", "Fairy"],
		baseStats: {hp: 90, atk: 120, def: 105, spa: 70, spd: 90, spe: 55},
		abilities: {0: "Guts"},
		//evos: null,
	},
	donphan: {
		inherit: true,
		abilities: {0: "Sturdy", H: "Regenerator"},
	},
	hitmontop: {
		inherit: true,
		types: ["Fighting", "Steel"],
		baseStats: {hp: 80, atk: 115, def: 100, spa: 40, spd: 110, spe: 60},
		abilities: {0: "Intimidate", H: "Technician"},
	},
	raikou: {
		inherit: true,
		baseStats: {hp: 80, atk: 85, def: 80, spa: 115, spd: 100, spe: 110},
		abilities: {0: "Legendary Beast"},
	},
	hooh: {
		inherit: true,
		baseStats: {hp: 96, atk: 100, def: 95, spa: 80, spd: 104, spe: 75},
		abilities: {0: "Regenerator"},
	},
	gardevoir: {
		inherit: true,
		baseStats: {hp: 88, atk: 65, def: 65, spa: 125, spd: 115, spe: 100},
		abilities: {0: "Pixelgreat", H: "Trace"},
		prevo: null,
	},
	cacturne: {
		inherit: true,
		baseStats: {hp: 75, atk: 120, def: 85, spa: 115, spd: 80, spe: 90},
		abilities: {0: "Water Absorb", H: "Rough Skin"},
	},
	solrock: {
		inherit: true,
		types: ["Rock", "Fairy"],
		baseStats: {hp: 90, atk: 135, def: 125, spa: 55, spd: 75, spe: 70},
		abilities: {0: "Levitate"},
	},
	absol: {
		inherit: true,
		types: ["Dark"],
		baseStats: {hp: 70, atk: 130, def: 60, spa: 115, spd: 60, spe: 115},
		abilities: {0: "Justified", H: "Magic Bounce"},
	},
	glalie: {
		inherit: true,
		baseStats: {hp: 80, atk: 130, def: 80, spa: 80, spd: 80, spe: 100},
		abilities: {0: "Refrigerate", H: "Moody"},
	},
	regirock: {
		inherit: true,
		types: ["Rock", "Flying"],
		baseStats: {hp: 80, atk: 105, def: 200, spa: 50, spd: 100, spe: 45},
		abilities: {0: "Accretion", H: "Rock Head"},
	},
	latias: {
		inherit: true,
		types: ["Dragon"],
		baseStats: {hp: 80, atk: 80, def: 85, spa: 100, spd: 100, spe: 110},
	},
	luxray: {
		inherit: true,
		types: ["Electric", "Ground"],
		baseStats: {hp: 80, atk: 110, def: 70, spa: 95, spd: 70, spe: 106},
		abilities: {0: "Intimidate", 1: "Volt Absorb", H: "Lion's Pride"},
		prevo: null,
	},
	floatzel: {
		inherit: true,
		baseStats: {hp: 85, atk: 105, def: 65, spa: 85, spd: 60, spe: 120},
	},
	garchomp: {
		inherit: true,
		baseStats: {hp: 98, atk: 110, def: 105, spa: 88, spd: 85, spe: 114},
		abilities: {0: "Rough Skin", H: "Sand Force"},
		prevo: null,
	},
	drapion: {
		inherit: true,
		baseStats: {hp: 70, atk: 110, def: 110, spa: 60, spd: 75, spe: 95},
		abilities: {0: "Battle Armor", 1: "Sniper", H: "Vessel of Ruin"},
	},
	electivire: {
		inherit: true,
		types: ["Electric", "Fighting"],
		baseStats: {hp: 85, atk: 110, def: 70, spa: 105, spd: 70, spe: 90},
		abilities: {0: "Motor Drive", 1: "Iron Fist", H: "Neuroforce"},
	},
	yanmega: {
		inherit: true,
		baseStats: {hp: 96, atk: 76, def: 96, spa: 126, spd: 66, spe: 95},
		abilities: {0: "Speed Boost", H: "Tinted Lens"},
	},
	heatran: {
		inherit: true,
		baseStats: {hp: 86, atk: 110, def: 101, spa: 125, spd: 101, spe: 77},
		abilities: {0: "Divine Idol", 1: "Flash Fire", H: "Flame Body"},
	},
	serperior: {
		inherit: true,
		prevo: null,
	},
	whimsicott: {
		inherit: true,
		baseStats: {hp: 70, atk: 67, def: 85, spa: 110, spd: 75, spe: 116},
		abilities: {0: "Chlorophyll", H: "Prankster"},
		prevo: null,
	},
	sigilyph: {
		inherit: true,
		baseStats: {hp: 87, atk: 58, def: 90, spa: 103, spd: 90, spe: 97},
		abilities: {0: "Wonder Skin", H: "Magic Guard"},
	},
	cofagrigus: {
		inherit: true,
		baseStats: {hp: 58, atk: 50, def: 155, spa: 105, spd: 85, spe: 30},
		abilities: {0: "Mummy", H: "Sticky Hold"},
	},
	vanilluxe: {
		inherit: true,
		baseStats: {hp: 71, atk: 70, def: 85, spa: 125, spd: 95, spe: 89},
		abilities: {0: "Cold Sweat"},
	},
	volcarona: {
		inherit: true,
		prevo: null,
	},
	diggersby: {
		inherit: true,
		baseStats: {hp: 87, atk: 56, def: 97, spa: 50, spd: 87, spe: 78},
		abilities: {0: "Pickup", H: "Huge Power"},
	},
	pancham: {
		inherit: true,
		types: ["Fighting", "Dark"],
		baseStats: {hp: 90, atk: 100, def: 70, spa: 55, spd: 70, spe: 72},
	},
	aegislash: {
		inherit: true,
		baseStats: {hp: 60, atk: 40, def: 140, spa: 40, spd: 140, spe: 60},
		prevo: null,
	},
	aegislashblade: {
		inherit: true,
		baseStats: {hp: 60, atk: 130, def: 50, spa: 130, spd: 50, spe: 60},
		prevo: null,
	},
	dragalge: {
		inherit: true,
		baseStats: {hp: 79, atk: 75, def: 90, spa: 97, spd: 123, spe: 44},
	},
	sylveon: {
		inherit: true,
		abilities: {0: "Cute Charm", H: "Pixelgreat"},
	},
	goodra: {
		inherit: true,
		baseStats: {hp: 90, atk: 105, def: 70, spa: 115, spd: 140, spe: 80},
		abilities: {0: "Sap Sipper", 1: "Gooey", H: "Neuroforce"},
	},
	volcanion: {
		inherit: true,
		baseStats: {hp: 85, atk: 70, def: 100, spa: 110, spd: 90, spe: 80},
	},
};