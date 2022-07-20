export const Scripts: ModdedBattleScriptsData = {
		teambuilderConfig: {
		// for micrometas to only show custom tiers
		excludeStandardTiers: true,
		// only to specify the order of custom tiers
		customTiers: ['MetaMons'],
		},
		init: function () {
			this.modData("Learnsets", "whimsicott").learnset.bodypress = ["8L1"];
			this.modData("Learnsets", "whimsicott").learnset.synthesis = ["8L1"];
			this.modData("Learnsets", "whimsicott").learnset.reflect = ["8L1"];
			this.modData("Learnsets", "sandslash").learnset.shoreup = ["8L1"];
			this.modData("Learnsets", "sandslash").learnset.spikyshield = ["8L1"];
			this.modData("Learnsets", "bastiodon").learnset.slackoff = ["8L1"];
			this.modData("Learnsets", "bastiodon").learnset.steelbeam = ["8L1"];
			this.modData("Learnsets", "bastiodon").learnset.bodypress = ["8L1"];
			this.modData("Learnsets", "bastiodon").learnset.spikes = ["8L1"];
			this.modData("Learnsets", "bastiodon").learnset.explosion = ["8L1"];
			this.modData("Learnsets", "bastiodon").learnset.meteorbeam = ["8L1"];
			this.modData("Learnsets", "kingler").learnset.waterfall = ["8L1"];
			this.modData("Learnsets", "kingler").learnset.flipturn = ["8L1"];
			this.modData("Learnsets", "kingler").learnset.icepunch = ["8L1"];
			this.modData("Learnsets", "kingler").learnset.freezedry = ["8L1"];
			this.modData("Learnsets", "ariados").learnset.bulkup = ["8L1"];
			this.modData("Learnsets", "ariados").learnset.calmmind = ["8L1"];
			this.modData("Learnsets", "ariados").learnset.dracometeor = ["8L1"];
			this.modData("Learnsets", "ariados").learnset.dragonclaw = ["8L1"];
			this.modData("Learnsets", "ariados").learnset.dragonpulse = ["8L1"];
			this.modData("Learnsets", "ariados").learnset.dragonrush = ["8L1"];
			this.modData("Learnsets", "ariados").learnset.dragontail = ["8L1"];
			this.modData("Learnsets", "ariados").learnset.memento = ["8L1"];
			this.modData("Learnsets", "ariados").learnset.partingshot = ["8L1"];
			this.modData("Learnsets", "ariados").learnset.outrage = ["8L1"];
			this.modData("Learnsets", "ariados").learnset.scaleshot = ["8L1"];
			this.modData("Learnsets", "ariados").learnset.spikes = ["8L1"];
			this.modData("Learnsets", "ariados").learnset.skittersmack = ["8L1"];
			this.modData("Learnsets", "ariados").learnset.taunt = ["8L1"];
			this.modData("Learnsets", "ariados").learnset.uturn = ["8L1"];
			this.modData("Learnsets", "ariados").learnset.megahorn = ["8L1"];
			this.modData("Learnsets", "ariados").learnset.pursuit = ["8L1"];
			this.modData("Learnsets", "ariados").learnset.refresh = ["8L1"];
			this.modData("Learnsets", "salazzle").learnset.acidrain = ["8L1"];
			this.modData("Learnsets", "salazzle").learnset.aerialace = ["8L1"];
			this.modData("Learnsets", "salazzle").learnset.bounce = ["8L1"];
			this.modData("Learnsets", "salazzle").learnset.defog = ["8L1"];
			this.modData("Learnsets", "salazzle").learnset.hurricane = ["8L1"];
			this.modData("Learnsets", "salazzle").learnset.uturn = ["8L1"];
			this.modData("Learnsets", "slowbrogalar").learnset.crabhammer = ["8L1"];
			this.modData("Learnsets", "slowbrogalar").learnset.gunkshot = ["8L1"];
			this.modData("Learnsets", "sableye").learnset.healbell = ["8L1"];
			this.modData("Learnsets", "sableye").learnset.spikes = ["8L1"];
			this.modData("Learnsets", "grapploct").learnset.aquajet = ["8L1"];
			this.modData("Learnsets", "grapploct").learnset.beatup = ["8L1"];
			this.modData("Learnsets", "grapploct").learnset.bite = ["8L1"];
			this.modData("Learnsets", "grapploct").learnset.crunch = ["8L1"];
			this.modData("Learnsets", "grapploct").learnset.darkestlariat = ["8L1"];
			this.modData("Learnsets", "grapploct").learnset.darkpulse = ["8L1"];
			this.modData("Learnsets", "grapploct").learnset.flipturn = ["8L1"];
			this.modData("Learnsets", "grapploct").learnset.knockoff = ["8L1"];
			this.modData("Learnsets", "grapploct").learnset.lifedew = ["8L1"];
			this.modData("Learnsets", "grapploct").learnset.machpunch = ["8L1"];
			this.modData("Learnsets", "grapploct").learnset.scald = ["8L1"];
			this.modData("Learnsets", "grapploct").learnset.swordsdance = ["8L1"];
			this.modData("Learnsets", "arcanine").learnset.stealthrock = ["8L1"];
			this.modData("Learnsets", "arcanine").learnset.earthquake = ["8L1"];
			this.modData("Learnsets", "tauros").learnset.headcharge = ["8L1"];
			this.modData("Learnsets", "eelektross").learnset.zingzap = ["8L1"];
			this.modData("Learnsets", "eelektross").learnset.recover = ["8L1"];
			this.modData("Learnsets", "eelektross").learnset.copycatblast = ["8L1"];
			delete this.modData('Learnsets', 'tauros').learnset.earthquake;
			delete this.modData('Learnsets', 'tauros').learnset.highhorsepower;
			delete this.modData('Learnsets', 'tauros').learnset.closecombat;
			delete this.modData('Learnsets', 'kingler').learnset.rockslide;
			delete this.modData('Learnsets', 'kingler').learnset.rocktomb;
			delete this.modData('Learnsets', 'kingler').learnset.stompingtantrum;
			delete this.modData('Learnsets', 'kingler').learnset.superpower;
			delete this.modData('Learnsets', 'kingler').learnset.rockslide;
			delete this.modData('Learnsets', 'salazzle').learnset.ember;
			delete this.modData('Learnsets', 'salazzle').learnset.fireblast;
			delete this.modData('Learnsets', 'salazzle').learnset.flameburst;
			delete this.modData('Learnsets', 'salazzle').learnset.flamecharge;
			delete this.modData('Learnsets', 'salazzle').learnset.flamethrower;
			delete this.modData('Learnsets', 'salazzle').learnset.flareblitz;
			delete this.modData('Learnsets', 'salazzle').learnset.heatwave;
			delete this.modData('Learnsets', 'salazzle').learnset.incinerate;
			delete this.modData('Learnsets', 'salazzle').learnset.overheat;
			delete this.modData('Learnsets', 'salazzle').learnset.willowisp;
			delete this.modData('Learnsets', 'ariados').learnset.poisonjab;
			delete this.modData('Learnsets', 'ariados').learnset.poisonsting;
			delete this.modData('Learnsets', 'ariados').learnset.sludgebomb;
			delete this.modData('Learnsets', 'ariados').learnset.crosspoison;
			delete this.modData('Learnsets', 'ariados').learnset.venomdrench;
			delete this.modData('Learnsets', 'ariados').learnset.venoshock;
			delete this.modData('Learnsets', 'ariados').learnset.toxicthread;
			},
			
			
			
};