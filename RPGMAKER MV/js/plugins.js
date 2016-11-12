// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.38a Have more control over the flow of the battle system\r\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.1","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"0","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"Graphics.boxWidth - 216 + index * 32","Home Position Y":"Graphics.boxHeight - 344 + index * 48","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.5","Default Y Anchor":"1.0","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_X_AnimatedSVEnemies","status":true,"description":"v1.12 (Requires YEP_BattleEngineCore.js) This plugin lets\nyou use Animated Sideview Actors for enemies!","parameters":{"---General---":"","Anchor X":"0.5","Anchor Y":"1","Sprite Smoothing":"true","Sprite Width":"auto","Sprite Height":"auto","Collapse":"false","Frame Speed":"12","Show State Overlay":"true","---Shadows---":"","Show Shadow":"false","Shadow Scale X":"auto","Shadow Scale Y":"auto","---Breathing---":"","Enable Breathing":"1","Breathing Speed":"20","Breathing X Rate":"0.001","Breathing Y Rate":"0.02","HP Link Breathing":"false","---Floating---":"","Floating Speed":"20","Floating Rate":"0.3","Floating Height":"50","---Motions---":"","Attack Motion":"thrust","Weapon Image Index":"0","Idle Motion":"walk","Damage Motion":"damage","Evade Motion":"evade","Escape Motion":"escape","Guard Motion":"guard","Abnormal Motion":"abnormal","Sleep Motion":"sleep","Dying Motion":"dying","Dead Motion":"dead","---Weapons---":"","Weapon 1 Motion":"swing","Weapon 1 Animation":"6","Weapon 2 Motion":"swing","Weapon 2 Animation":"6","Weapon 3 Motion":"swing","Weapon 3 Animation":"1","Weapon 4 Motion":"swing","Weapon 4 Animation":"6","Weapon 5 Motion":"swing","Weapon 5 Animation":"6","Weapon 6 Motion":"swing","Weapon 6 Animation":"1","Weapon 7 Motion":"missile","Weapon 7 Animation":"11","Weapon 8 Motion":"missile","Weapon 8 Animation":"11","Weapon 9 Motion":"missile","Weapon 9 Animation":"111","Weapon 10 Motion":"thrust","Weapon 10 Animation":"16","Weapon 11 Motion":"thrust","Weapon 11 Animation":"1","Weapon 12 Motion":"thrust","Weapon 12 Animation":"11","Weapon 13 Motion":"swing","Weapon 13 Animation":"1","Weapon 14 Motion":"swing","Weapon 14 Animation":"1","Weapon 15 Motion":"swing","Weapon 15 Animation":"1","Weapon 16 Motion":"swing","Weapon 16 Animation":"6","Weapon 17 Motion":"swing","Weapon 17 Animation":"7","Weapon 18 Motion":"swing","Weapon 18 Animation":"1","Weapon 19 Motion":"missile","Weapon 19 Animation":"11","Weapon 20 Motion":"missile","Weapon 20 Animation":"111","Weapon 21 Motion":"missile","Weapon 21 Animation":"111","Weapon 22 Motion":"thrust","Weapon 22 Animation":"7","Weapon 23 Motion":"missile","Weapon 23 Animation":"15","Weapon 24 Motion":"thrust","Weapon 24 Animation":"15","Weapon 25 Motion":"swing","Weapon 25 Animation":"1","Weapon 26 Motion":"thrust","Weapon 26 Animation":"1","Weapon 27 Motion":"thrust","Weapon 27 Animation":"1","Weapon 28 Motion":"thrust","Weapon 28 Animation":"1","Weapon 29 Motion":"thrust","Weapon 29 Animation":"1","Weapon 30 Motion":"thrust","Weapon 30 Animation":"1"}},
{"name":"YEP_VictoryAftermath","status":true,"description":"v1.00 Display an informative window after a battle is over\ninstead of message box text stating what the party earned.","parameters":{"---General---":"","Victory Order":"exp custom drops","---BGM---":"","Victory BGM":"Ship3","BGM Volume":"90","BGM Pitch":"100","BGM Pan":"0","---Battle Results---":"","Cheer Wait":"90","Battle Results Text":"Battle Results","Battle Drops Text":"Battle Spoils","---EXP Window---":"","Level Up Text":"LEVEL UP!","Max Level Text":"MAX LEVEL","Gained EXP Text":"Gained EXP","Gained EXP Format":"+%1","EXP Gauge Color 1":"30","EXP Gauge Color 2":"31","Level Gauge Color 1":"14","Level Gauge Color 2":"6","Gauge Ticks":"15","Tick SE":"Absorb2","Tick Volume":"90","Tick Pitch":"150","Tick Pan":"0"}},
{"name":"YED_TransferStealStates","status":true,"description":"v1.0.1 Allows creating skills that can transfer and/or steal\r\nstates to/from target.","parameters":{}},
{"name":"MrTS_IconMenu","status":true,"description":"Changes menu to window with icons and description only.","parameters":{"Icon Window X":"Graphics.boxWidth/2 - this._commandWindow.width/2","Icon Window Y":"200","Help Window X":"Graphics.boxWidth/2 - this._helpWindow.width/2","Help Window Y":"88","Gold Window X":"0","Help Window Width":"this._commandWindow.width + 150","Gold Window Y":"Graphics.boxHeight - this.height","Icon Window Transparent":"false","Help Window Transparent":"false","Gold Window Transparent":"false"}},
{"name":"Moogle_X_TraitsExtensionBundle","status":false,"description":"v1.02 Adds plenty of new traits to your game.","parameters":{"Victory Cry Revival":"0","Catnip Damage":"9999","Apply Catnip on Effects":"1","Apply BER to Inactive":"0","Natural Cure List":"4 5 6 7 8 9 10","Spellbound List":"14 15 16"}},
{"name":"Moogle_X_DieAtZeroMp","status":true,"description":"v1.1 Actors or Enemies will automatically die at 0 MP.","parameters":{"All Actors":"0","All Enemies":"0"}},
{"name":"Jay_Dualtechs","status":true,"description":"Adds functionality for multitech skills.","parameters":{"Cycle Actors":"false","Cycle Length":"60"}},
{"name":"WeaponSkill","status":true,"description":"Change skill id of attack for each weapon.","parameters":{}},
{"name":"GALV_MessageStyles","status":true,"description":"Settings to change how your \"Show Text\" messages look as well as code to make them floating.","parameters":{"Input Indicator":"2,0,-12","Indicator Zoom":"100","Message Padding":"0,0,0,0","Message Windowskin":"Window","Arrow Graphic":"WindowArrow","Windowskin Back Opacity":"192","Y Offset":"60","Font":"","Font Filename":"","Font Outline":"true","Font Size":"28"}},
{"name":"NeMV_OnStepEffect","status":true,"description":"v1.0 Allows your actors' states to perform JavaScript evaluations as you walk on the map.","parameters":{}},
{"name":"Yami_8DIR","status":true,"description":"","parameters":{}},
{"name":"MrTS_PopUp","status":true,"description":"Creates pop ups on item pick ups or custom ones as needed.","parameters":{"Pop Speed":".5","Pop Delay":"60","Pop Fade Out":"180","Pop Font Type":"GameFont","Pop Font Size":"28","Gold Icon":"314","Quantity Sign":"x"}},
{"name":"GALV_MapAnimEffects","status":true,"description":"Enhance the usability of animations and use them to create effects when characters stand on regions.","parameters":{"Region Effects":"7,10,a-fly | 2,9,a+fly | 5,11,a","Followers":"true"}},
{"name":"TYR_FollowerControl","status":true,"description":"v1.04  Allows greater control of party follower movement, balloon icons, animations, and transfers.","parameters":{}},
{"name":"TerraxLighting","status":true,"description":"v1.3.6 Creates an extra layer that darkens a map and adds lightsources!","parameters":{"Player radius":"0","Reset Lights":"No","Save DaynightHours":"0","Save DaynightMinutes":"0","Save DaynightSeconds":"0","Flashlight offset":"0","Screensize X":"866","Screensize Y":"630","Kill Switch":"No"}},
{"name":"YEP_ButtonCommonEvents","status":true,"description":"v1.01 On the field map, call common events when certain\nbuttons are pressed on the keyboard.","parameters":{"---Top Row---":"","Key ~":"0","Key 1":"0","Key 2":"0","Key 3":"0","Key 4":"0","Key 5":"0","Key 6":"0","Key 7":"0","Key 8":"0","Key 9":"0","Key 0":"0","Key -":"0","Key =":"0","---2nd Row---":"","Key Q (PageUp)":"0","Key W (PageDown)":"0","Key E":"0","Key R":"0","Key T":"20","Key Y":"0","Key U":"24","Key I":"21","Key O":"0","Key P":"22","Key [":"0","Key ]":"0","Key \\":"0","---3rd Row---":"","Key A":"0","Key S":"0","Key D":"0","Key F":"0","Key G":"0","Key H":"0","Key J":"0","Key K":"0","Key L":"11","Key ;":"0","Key \"":"0","Key Enter (OK)":"0","---4th Row---":"","Key Shift (Dash)":"0","Key Z (OK)":"0","Key X (Cancel)":"0","Key C":"23","Key V":"0","Key B":"0","Key N":"0","Key M":"0","Key ,":"0","Key .":"0","Key /":"0","---Misc---":"","Key Space (OK)":"0","Key Left (Left)":"0","Key Up (Up)":"0","Key Right (Right)":"0","Key Down (Down)":"0","Key Insert (Cancel)":"0","Key Delete":"0","Key Home":"0","Key End":"0","Key Page Up (PageUp)":"0","Key Page Down (PageDown)":"0","---NumPad---":"","Key NumPad 0 (Cancel)":"0","Key NumPad 1":"0","Key NumPad 2 (Down)":"0","Key NumPad 3":"0","Key NumPad 4 (Left)":"0","Key NumPad 5":"0","Key NumPad 6 (Right)":"0","Key NumPad 7":"0","Key NumPad 8 (Up)":"0","Key NumPad 9":"0","Key NumPad .":"0","Key NumPad +":"0","Key NumPad -":"0","Key NumPad *":"0","Key NumPad /":"0"}},
{"name":"YEP_KeyboardConfig","status":true,"description":"v1.01 Allows players to adjust their button configuration\nfor keyboards.","parameters":{"---General---":"","Command Name":"Keyboard Config","Button Events":"1 2 3","---Help Text---":"","Key Help":"Change the configuration of this key?","Default Layout":"Default Keyboard Layout","Default Help":"Reverts your keyboard setting to the default setup.","WASD Layout":"WASD Movement Layout","WASD Help":"Changes your keyboard to WASD movement.","Finish Config":"Finish Configuration","Finish Help":"Are you done configuring your keyboard?","Assigned Color":"21","Action Color":"4","Clear Text":"Clear","---Key Names---":"","OK Key":"OK","OK Text":"OK / Talk","Escape Key":"X","Escape Text":"Cancel / Menu","Cancel Key":"Cancel","Cancel Text":"Cancel","Menu Key":"Menu","Menu Text":"Menu","Shift Key":"Dash","Shift Text":"Dash","PageUp Key":"PgUp","PageUp Text":"Page Up","PageDown Key":"PgDn","PageDown Text":"Page Down","Left Key":"◄","Left Text":"Move ◄ Left","Up Key":"▲","Up Text":"Move ▲ Up","Right Key":"►","Right Text":"Move ► Right","Down Key":"▼","Down Text":"Move ▼ Down"}}
];
