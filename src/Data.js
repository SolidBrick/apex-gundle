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
import { ReactComponent as RE45Icon } from "./apex_icons/RE-45_Auto_Icon.svg";
import { ReactComponent as SentinelIcon } from "./apex_icons/Sentinel_Icon.svg";
import { ReactComponent as Triple_TakeIcon } from "./apex_icons/Triple_Take_Icon.svg";
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
    icon: <RepeaterIcon style={{ width: "100%", height: "100%" }} />,
  },
  "Alternator SMG": {
    ammoType: ["Light"],
    weaponClass: "SMG",
    releaseDate: 0,
    attachments: ["Laser Sight", "Extended Magazine", "Standard Stock"],
    damagePerSecond: 160,
    firingMode: ["Auto"],
    icon: <AlternatorIcon style={{ width: "100%", height: "100%" }} />,
  },
  "Bocek Compound Bow": {
    ammoType: ["Arrow"],
    weaponClass: "Marksman",
    releaseDate: 9,
    attachments: [],
    damagePerSecond: 125,
    firingMode: ["Single"],
    icon: <BocekIcon style={{ width: "100%", height: "100%" }} />,
  },
  "C.A.R. SMG": {
    ammoType: ["Heavy", "Light"],
    weaponClass: "SMG",
    releaseDate: 11,
    attachments: ["Extended Magazine", "Standard Stock"],
    damagePerSecond: 186,
    firingMode: ["Auto"],
    icon: <CARIcon style={{ width: "100%", height: "100%" }} />,
  },
  "Charge Rifle": {
    ammoType: ["Sniper"],
    weaponClass: "Sniper",
    releaseDate: 3,
    attachments: ["Extended Magazine", "Sniper Stock"],
    damagePerSecond: 48,
    firingMode: ["Single"],
    icon: <ChargeIcon style={{ width: "100%", height: "100%" }} />,
  },
  "Devotion LMG": {
    ammoType: ["Energy"],
    weaponClass: "LMG",
    releaseDate: 0,
    attachments: [],
    damagePerSecond: 240,
    firingMode: ["Auto"],
    icon: <DevotionIcon style={{ width: "100%", height: "100%" }} />,
  },
  "EVA-8 Auto": {
    ammoType: ["Shotgun"],
    weaponClass: "Shotgun",
    releaseDate: 0,
    attachments: ["Shotgun Bolt", "Standard Stock", "Hop-up"],
    damagePerSecond: 146,
    firingMode: ["Auto"],
    icon: <EVAIcon style={{ width: "100%", height: "100%" }} />,
  },
  "G7 Scout": {
    ammoType: ["Light"],
    weaponClass: "Marksman",
    releaseDate: 0,
    attachments: ["Barrel Stabilizer", "Extended Magazine", "Sniper Stock"],
    damagePerSecond: 139,
    firingMode: ["Single"],
    icon: <ScoutIcon style={{ width: "100%", height: "100%" }} />,
  },
  "Havoc Rifle": {
    ammoType: ["Energy"],
    weaponClass: "Assault Rifle",
    releaseDate: 1,
    attachments: ["Extended Magazine", "Standard Stock", "Hop-up"],
    damagePerSecond: 202,
    firingMode: ["Auto"],
    icon: <HAVOCIcon style={{ width: "100%", height: "100%" }} />,
  },
  "Hemlok Burst AR": {
    ammoType: ["Heavy"],
    weaponClass: "Assault Rifle",
    releaseDate: 0,
    attachments: ["Barrel Stabilizer", "Extended Magazine", "Standard Stock"],
    damagePerSecond: 116,
    firingMode: ["Burst", "Single"],
    icon: <HemlokIcon style={{ width: "100%", height: "100%" }} />,
  },
  "Kraber .50-Cal Sniper": {
    ammoType: ["Sniper"],
    weaponClass: "Sniper",
    releaseDate: 0,
    attachments: [],
    damagePerSecond: 58,
    firingMode: ["Single"],
    icon: <KraberIcon style={{ width: "100%", height: "100%" }} />,
  },
  "L-Star EMG": {
    ammoType: ["Energy"],
    weaponClass: "LMG",
    releaseDate: 2,
    attachments: ["Extended Magazine", "Standard Stock", "Hop-up"],
    damagePerSecond: 170,
    firingMode: ["Auto"],
    icon: <LSTARIcon style={{ width: "100%", height: "100%" }} />,
  },
  "Longbow DMR": {
    ammoType: ["Sniper"],
    weaponClass: "Sniper",
    releaseDate: 0,
    attachments: ["Extended Magazine", "Sniper Stock"],
    damagePerSecond: 72,
    firingMode: ["Single"],
    icon: <LongbowIcon style={{ width: "100%", height: "100%" }} />,
  },
  "M600 Spitfire": {
    ammoType: ["Light"],
    weaponClass: "LMG",
    releaseDate: 0,
    attachments: [
      "Barrel Stabilizer",
      "Extended Magazine",
      "Standard Stock",
      "Hop-up",
    ],
    damagePerSecond: 162,
    firingMode: ["Auto"],
    icon: <SpitfireIcon style={{ width: "100%", height: "100%" }} />,
  },
  "Mastiff Shotgun": {
    ammoType: ["Shotgun"],
    weaponClass: "Shotgun",
    releaseDate: 0,
    attachments: ["Shotgun Bolt", "Standard Stock"],
    damagePerSecond: 99,
    firingMode: ["Single"],
    icon: <MastiffIcon style={{ width: "100%", height: "100%" }} />,
  },
  "Mozambique Shotgun": {
    ammoType: ["Shotgun"],
    weaponClass: "Shotgun",
    releaseDate: 0,
    attachments: ["Shotgun Bolt", "Hop-up"],
    damagePerSecond: 126,
    firingMode: ["Auto"],
    icon: <MozambiqueIcon style={{ width: "100%", height: "100%" }} />,
  },
  "Nemesis Burst AR": {
    ammoType: ["Energy"],
    weaponClass: "Assault Rifle",
    releaseDate: 16,
    attachments: ["Barrel Stabilizer", "Extended Magazine", "Standard Stock"],
    damagePerSecond: 155,
    firingMode: ["Burst"],
    icon: <NemesisIcon style={{ width: "100%", height: "100%" }} />,
  },
  P2020: {
    ammoType: ["Light"],
    weaponClass: "Pistol",
    releaseDate: 0,
    attachments: ["Laser Sight", "Extended Magazine", "Hop-up"],
    damagePerSecond: 147,
    firingMode: ["Single"],
    icon: <P2020Icon style={{ width: "100%", height: "100%" }} />,
  },
  Peacekeeper: {
    ammoType: ["Shotgun"],
    weaponClass: "Shotgun",
    releaseDate: 0,
    attachments: ["Shotgun Bolt", "Standard Stock"],
    damagePerSecond: 73,
    firingMode: ["Single"],
    icon: <PeacekeeperIcon style={{ width: "100%", height: "100%" }} />,
  },
  "Prowler Burst PDW": {
    ammoType: ["Heavy"],
    weaponClass: "SMG",
    releaseDate: 0,
    attachments: ["Laser Sight", "Extended Magazine", "Standard Stock"],
    damagePerSecond: 145,
    firingMode: ["Burst"],
    icon: <ProwlerIcon style={{ width: "100%", height: "100%" }} />,
  },
  "R-301 Carbine": {
    ammoType: ["Light"],
    weaponClass: "Assault Rifle",
    releaseDate: 0,
    attachments: ["Barrel Stabilizer", "Extended Magazine", "Standard Stock"],
    damagePerSecond: 176,
    firingMode: ["Auto", "Single"],
    icon: <R301Icon style={{ width: "100%", height: "100%" }} />,
  },
  "R-99 SMG": {
    ammoType: ["Light"],
    weaponClass: "SMG",
    releaseDate: 0,
    attachments: [],
    damagePerSecond: 252,
    firingMode: ["Auto"],
    icon: <R99Icon style={{ width: "100%", height: "100%" }} />,
  },
  "Rampage LMG": {
    ammoType: ["Heavy"],
    weaponClass: "LMG",
    releaseDate: 10,
    attachments: [
      "Barrel Stabilizer",
      "Extended Magazine",
      "Standard Stock",
      "Hop-up",
    ],
    damagePerSecond: 130,
    firingMode: ["Auto"],
    icon: <RampageIcon style={{ width: "100%", height: "100%" }} />,
  },
  "RE-45 Auto": {
    ammoType: ["Light"],
    weaponClass: "Pistol",
    releaseDate: 0,
    attachments: ["Laser Sight", "Extended Magazine", "Hop-up"],
    damagePerSecond: 156,
    firingMode: ["Auto"],
    icon: <RE45Icon style={{ width: "100%", height: "100%" }} />,
  },
  Sentinel: {
    ammoType: ["Sniper"],
    weaponClass: "Sniper",
    releaseDate: 4,
    attachments: ["Extended Magazine", "Sniper Stock"],
    damagePerSecond: 45,
    firingMode: ["Single"],
    icon: <SentinelIcon style={{ width: "100%", height: "100%" }} />,
  },
  "Triple Take": {
    ammoType: ["Energy"],
    weaponClass: "Marksman",
    releaseDate: 0,
    attachments: ["Extended Magazine", "Sniper Stock", "Hop-up"],
    damagePerSecond: 85,
    firingMode: ["Single"],
    icon: <Triple_TakeIcon style={{ width: "100%", height: "100%" }} />,
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
    icon: <FlatlineIcon style={{ width: "100%", height: "100%" }} />,
  },
  "Volt SMG": {
    ammoType: ["Energy"],
    weaponClass: "SMG",
    releaseDate: 6,
    attachments: ["Laser Sight", "Extended Magazine", "Standard Stock"],
    damagePerSecond: 180,
    firingMode: ["Auto"],
    icon: <VoltIcon style={{ width: "100%", height: "100%" }} />,
  },
  Wingman: {
    ammoType: ["Sniper"],
    weaponClass: "Pistol",
    releaseDate: 0,
    attachments: ["Hop-up"],
    damagePerSecond: 117,
    firingMode: ["Single"],
    icon: <WingmanIcon style={{ width: "100%", height: "100%" }} />,
  },
};
