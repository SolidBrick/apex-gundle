// SOME OF THE KEYS OF THE GUN DATA ARE NOT STRINGS WHILE OTHERS ARE BC OF PRETTIER EXTENSION

import { ReactComponent as RepeaterIcon } from "./apex_icons/30-30_Repeater_Icon.svg";
import { ReactComponent as AlternatorIcon } from "./apex_icons/Alternator_SMG_Icon.svg";
import { ReactComponent as BocekIcon } from "./apex_icons/Bocek_Compound_Bow_Icon.svg";
import { ReactComponent as CARIcon } from "./apex_icons/C.A.R._SMG_Icon.svg";
import { ReactComponent as ChargeIcon } from "./apex_icons/Charge_Rifle_Icon.svg";
import { ReactComponent as DevotionIcon } from "./apex_icons/Devotion_LMG_Icon.svg";
import { ReactComponent as EVAIcon } from "./apex_icons/EVA-8_Auto_Icon.svg";
import { ReactComponent as ScoutIcon } from "./apex_icons/G7_Scout_Icon.svg";
import { ReactComponent as HAVOCIcon } from "./apex_icons/HAVOC_Rifle_Icon.svg";
import { ReactComponent as HemlokIcon } from "./apex_icons/Hemlok_Burst_AR_Icon.svg";
import { ReactComponent as KraberIcon } from "./apex_icons/Kraber_.50-Cal_Sniper_Icon.svg";
import { ReactComponent as LSTARIcon } from "./apex_icons/L-STAR_EMG_Icon.svg";
import { ReactComponent as LongbowIcon } from "./apex_icons/Longbow_DMR_Icon.svg";
import { ReactComponent as SpitfireIcon } from "./apex_icons/M600_Spitfire_Icon.svg";
import { ReactComponent as MastiffIcon } from "./apex_icons/Mastiff_Shotgun_Icon.svg";
import { ReactComponent as MozambiqueIcon } from "./apex_icons/Mozambique_Shotgun_Icon.svg";
import { ReactComponent as NemesisIcon } from "./apex_icons/Nemesis_Burst_AR_Icon.svg";
import { ReactComponent as P2020Icon } from "./apex_icons/P2020_Icon.svg";
import { ReactComponent as PeacekeeperIcon } from "./apex_icons/Peacekeeper_Icon.svg";
import { ReactComponent as ProwlerIcon } from "./apex_icons/Prowler_Burst_PDW_Icon.svg";
import { ReactComponent as R99Icon } from "./apex_icons/R-99_SMG_Icon.svg";
import { ReactComponent as R301Icon } from "./apex_icons/R-301_Carbine_Icon.svg";
import { ReactComponent as RampageIcon } from "./apex_icons/Rampage_LMG_Icon.svg";
import { ReactComponent as Re45Icon } from "./apex_icons/Re-45_Auto_Icon.svg";
import { ReactComponent as SentinelIcon } from "./apex_icons/Sentinel_Icon.svg";
import { ReactComponent as Tripe_TakeIcon } from "./apex_icons/Triple_Take_Icon.svg";
import { ReactComponent as FlatlineIcon } from "./apex_icons/VK-47_Flatline_Icon.svg";
import { ReactComponent as VoltIcon } from "./apex_icons/Volt_SMG_Icon.svg";
import { ReactComponent as WingmanIcon } from "./apex_icons/Wingman_Icon.svg";

export const NAMEDATA = [
  "30-30 Repeater",
  "Alternator SMG",
  "Bocek Compound Bow",
  "C.A.R. SMG",
  "Charge Rifle",
  "Devotion LMG",
  "EVA-8 Auto",
  "G7 Scout",
  "Havoc Rifle",
  "Hemlok Burst AR",
  "Kraber .50-Cal Sniper",
  "L-Star EMG",
  "Longbow DMR",
  "M600 Spitfire",
  "Mastiff Shotgun",
  "Mozambique Shotgun",
  "Nemesis Burst AR",
  "P2020",
  "Peacekeeper",
  "Prowler Burst PDW",
  "R-301 Carbine",
  "R-99 SMG",
  "Rampage LMG",
  "RE-45 Auto",
  "Sentinel",
  "Triple Take",
  //"Throwing Knife",
  "VK-47 Flatline",
  "Volt SMG",
  "Wingman",
];

export const GUNDATA = {
  "30-30 Repeater": {
    ammoType: ["Heavy"],
    weaponClass: "Marksman",
    releaseDate: 8,
    attachments: ["Extended Magazine", "Sniper Stock"],
    damagePerSecond: 90,
    firingMode: ["Single"],
  },
  "Alternator SMG": {
    ammoType: ["Light"],
    weaponClass: "SMG",
    releaseDate: 0,
    attachments: [
      "Laser Sight",
      "Extended Magazine",
      "Standard Stock",
      "Hop-up",
    ],
    damagePerSecond: 160,
    firingMode: ["Auto"],
  },
  "Bocek Compound Bow": {
    ammoType: ["Arrow"],
    weaponClass: "Marksman",
    releaseDate: 9,
    attachments: [],
    damagePerSecond: 125,
    firingMode: ["Single"],
  },
  "C.A.R. SMG": {
    ammoType: ["Heavy", "Light"],
    weaponClass: "SMG",
    releaseDate: 11,
    attachments: ["Extended Magazine", "Standard Stock"],
    damagePerSecond: 186,
    firingMode: ["Auto"],
  },
  "Charge Rifle": {
    ammoType: ["Sniper"],
    weaponClass: "Sniper",
    releaseDate: 3,
    attachments: ["Extended Magazine", "Sniper Stock"],
    damagePerSecond: 48,
    firingMode: ["Single"],
  },
  "Devotion LMG": {
    ammoType: ["Energy"],
    weaponClass: "LMG",
    releaseDate: 0,
    attachments: [],
    damagePerSecond: 240,
    firingMode: ["Auto"],
  },
  "EVA-8 Auto": {
    ammoType: ["Shotgun"],
    weaponClass: "Shotgun",
    releaseDate: 0,
    attachments: [],
    damagePerSecond: 144,
    firingMode: ["Auto"],
  },
  "G7 Scout": {
    ammoType: ["Light"],
    weaponClass: "Marksman",
    releaseDate: 0,
    attachments: ["Barrel Stabilizer", "Extended Magazine", "Sniper Stock"],
    damagePerSecond: 139,
    firingMode: ["Single"],
  },
  "Havoc Rifle": {
    ammoType: ["Energy"],
    weaponClass: "Assault Rifle",
    releaseDate: 1,
    attachments: ["Extended Magazine", "Standard Stock", "Hop-up"],
    damagePerSecond: 202,
    firingMode: ["Auto"],
  },
  "Hemlok Burst AR": {
    ammoType: ["Heavy"],
    weaponClass: "Assault Rifle",
    releaseDate: 0,
    attachments: ["Barrel Stabilizer", "Extended Magazine", "Standard Stock"],
    damagePerSecond: 127,
    firingMode: ["Burst", "Single"],
  },
  "Kraber .50-Cal Sniper": {
    ammoType: ["Sniper"],
    weaponClass: "Sniper",
    releaseDate: 0,
    attachments: [],
    damagePerSecond: 58,
    firingMode: ["Single"],
  },
  "L-Star EMG": {
    ammoType: ["Energy"],
    weaponClass: "LMG",
    releaseDate: 2,
    attachments: ["Extended Magazine", "Standard Stock"],
    damagePerSecond: 170,
    firingMode: ["Auto"],
  },
  "Longbow DMR": {
    ammoType: ["Sniper"],
    weaponClass: "Sniper",
    releaseDate: 0,
    attachments: ["Barrel Stabilizer", "Extended Magazine", "Sniper Stock"],
    damagePerSecond: 72,
    firingMode: ["Single"],
  },
  "M600 Spitfire": {
    ammoType: ["Light"],
    weaponClass: "LMG",
    releaseDate: 0,
    attachments: ["Barrel Stabilizer", "Extended Magazine", "Standard Stock"],
    damagePerSecond: 162,
    firingMode: ["Auto"],
  },
  "Mastiff Shotgun": {
    ammoType: ["Shotgun"],
    weaponClass: "Shotgun",
    releaseDate: 0,
    attachments: ["Shotgun Bolt", "Standard Stock"],
    damagePerSecond: 97,
    firingMode: ["Single"],
  },
  "Mozambique Shotgun": {
    ammoType: ["Shotgun"],
    weaponClass: "Shotgun",
    releaseDate: 0,
    attachments: ["Shotgun Bolt", "Hop-up"],
    damagePerSecond: 99,
    firingMode: ["Auto"],
  },
  "Nemesis Burst AR": {
    ammoType: ["Energy"],
    weaponClass: "Assault Rifle",
    releaseDate: 16,
    attachments: ["Barrel Stabilizer", "Extended Magazine", "Standard Stock"],
    damagePerSecond: 155,
    firingMode: ["Burst"],
  },
  P2020: {
    ammoType: ["Light"],
    weaponClass: "Pistol",
    releaseDate: 0,
    attachments: [
      "Laser Sight",
      "Extended Magazine",
      "Standard Stock",
      "Hop-up",
    ],
    damagePerSecond: 126,
    firingMode: ["Single"],
  },
  Peacekeeper: {
    ammoType: ["Shotgun"],
    weaponClass: "Shotgun",
    releaseDate: 0,
    attachments: ["Shotgun Bolt", "Standard Stock", "Hop-up"],
    damagePerSecond: 73,
    firingMode: ["Single"],
  },
  "Prowler Burst PDW": {
    ammoType: ["Heavy"],
    weaponClass: "SMG",
    releaseDate: 0,
    attachments: ["Laser Sight", "Extended Magazine", "Standard Stock"],
    damagePerSecond: 145,
    firingMode: ["Burst"],
  },
  "R-301 Carbine": {
    ammoType: ["Light"],
    weaponClass: "Assault Rifle",
    releaseDate: 0,
    attachments: ["Barrel Stabilizer", "Extended Magazine", "Standard Stock"],
    damagePerSecond: 176,
    firingMode: ["Auto", "Single"],
  },
  "R-99 SMG": {
    ammoType: ["Light"],
    weaponClass: "SMG",
    releaseDate: 0,
    attachments: ["Laser Sight", "Extended Magazine", "Standard Stock"],
    damagePerSecond: 198,
    firingMode: ["Auto"],
  },
  "Rampage LMG": {
    ammoType: ["Heavy"],
    weaponClass: "LMG",
    releaseDate: 10,
    attachments: ["Barrel Stabilizer", "Extended Magazine", "Standard Stock"],
    damagePerSecond: 130,
    firingMode: ["Auto"],
  },
  "RE-45 Auto": {
    ammoType: ["Light"],
    weaponClass: "Pistol",
    releaseDate: 0,
    attachments: [
      "Laser Sight",
      "Extended Magazine",
      "Standard Stock",
      "Hop-up",
    ],
    damagePerSecond: 156,
    firingMode: ["Auto"],
  },
  Sentinel: {
    ammoType: ["Sniper"],
    weaponClass: "Sniper",
    releaseDate: 4,
    attachments: ["Extended Magazine", "Sniper Stock"],
    damagePerSecond: 45,
    firingMode: ["Single"],
  },
  "Triple Take": {
    ammoType: ["Energy"],
    weaponClass: "Marksman",
    releaseDate: 0,
    attachments: ["Extended Magazine", "Sniper Stock", "Hop-up"],
    damagePerSecond: 85,
    firingMode: ["Single"],
  },
  /*"Throwing Knife" : {
    ammoType: "Knife",
    weaponClass: "Knife",
    releaseDate: 14,
    attachments: [],
    damagePerSecond: 72,
    firingMode: ["Single"]
  }, */
  "VK-47 Flatline": {
    ammoType: ["Heavy"],
    weaponClass: "Assault Rifle",
    releaseDate: 0,
    attachments: ["Extended Magazine", "Standard Stock"],
    damagePerSecond: 180,
    firingMode: ["Auto", "Single"],
  },
  "Volt SMG": {
    ammoType: ["Energy"],
    weaponClass: "SMG",
    releaseDate: 6,
    attachments: ["Laser Sight", "Extended Magazine", "Standard Stock"],
    damagePerSecond: 180,
    firingMode: ["Auto"],
  },
  Wingman: {
    ammoType: ["Sniper"],
    weaponClass: "Pistol",
    releaseDate: 0,
    attachments: ["Hop-up"],
    damagePerSecond: 117,
    firingMode: ["Single"],
  },
};
