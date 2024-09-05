const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 
global.ANTI_BOT = false;
global.PM_BLOCKER = false;
global.CHATBOT = false;

global.SESSION_ID = process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"CBos4ZyYdE1U08ZHVkvHTVTENSiJu+/6Q9bPI1FtfF8="},"public":{"type":"Buffer","data":"1ERdHlQAoPGWaqJsi7AjAaVi/Na8X/5nIG7jouP1Qxg="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"cG65lqA9y6hDpHYb8mnSByPfuX/ksNzDctzM4mnVfFI="},"public":{"type":"Buffer","data":"Ny9U/wtuM9544pML3D9QtCr8M3eB1ZCfKVaGKvAzDhs="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"KO3PU15vq+u2OU8GyQEob5UbLE2jiJnOBjXy0vFnk0M="},"public":{"type":"Buffer","data":"9lldPuokNOejdd6tzTpzGqBo+CDc5kAyF1w/NKxPrww="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"OOg46DAeAfAiBSkr9RUXqkpvPwBmpkmIO3elty5iHGM="},"public":{"type":"Buffer","data":"Qt1O8N8V7xXepBbob8XUn5XufhLIOY11xMLDQJgTDT4="}},"signature":{"type":"Buffer","data":"CEls6y433dZUCblHG1xx+dttAylZvPp5RDrP5Ciili/ICxKTh/EmaM8E+/MKtdIvz2tcIzuBOmhVYs9obuAhAg=="},"keyId":1},"registrationId":178,"advSecretKey":"pBCzCmW0UUqN8rwrpCq/59sHx/Bs1il46zhdkN+5IVk=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"u-A4IHz6SJWujujScuN1Cg","phoneId":"5d872ff3-dfda-4c23-b58b-9474bc183ace","identityId":{"type":"Buffer","data":"lJpASIl65MHGh+jAJlCLsfNu/og="},"registered":true,"backupToken":{"type":"Buffer","data":"vOuFsJsIoUbfKOqM/zWSu2g0JQ4="},"registration":{},"pairingCode":"86DPFLNM","me":{"id":"2349074717388:23@s.whatsapp.net"},"account":{"details":"CJXPv7YLEMOl5LYGGAIgACgA","accountSignatureKey":"9ihVjFBi79GRs57S2mY7LQmxzUm8c0DOPaDAoqBdgGM=","accountSignature":"WCfa1Mxmp0Ee+BZd3azIEC+70pbLhliIQ0D4iRgA0J1KudFW5omWppQkS6RzZANPUVeTVD1A1A08k8C/Ib2QiQ==","deviceSignature":"+pJxXjy/UTxekgKeWB8a8lamEXoXhVE480EvcYoK8sxqH7ET51rYZ4jHIeGTSF42dQibO0S8U6Gsv1iZJESOAw=="},"signalIdentities":[{"identifier":{"name":"2349074717388:23@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BfYoVYxQYu/RkbOe0tpmOy0Jsc1JvHNAzj2gwKKgXYBj"}}],"platform":"iphone","lastAccountSyncTimestamp":1725502160,"myAppStateKeyId":"AAAAAHbI"}"
global.Owner = ["2349074717388"]; //like 2347080968564 
global.OwnerName =  "DRACULA";
global.BotName = "♱DRACULA's-DEMON♱♡⃤";
global.packname = "♱DRACULA-V2♱♡⃤";                             //Do not change.
global.author = "DRACULA";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/DOVRqF006VHHZhiSNwJRce"; 
global.SupportGroupLink = "https://chat.whatsapp.com/DOVRqF006VHHZhiSNwJRce"; //Do not change!
global.menutype = "v3"

global.prefa = ['','!','.',','] 

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic7.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");
global.OwnerNumber = [""] //Ignore,Unused

//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner-DRACULA* can use this command!',
    grouponly: 'This command is only made for *Groups*',
    privateonly: 'This command is only made for *Private Chat*',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
