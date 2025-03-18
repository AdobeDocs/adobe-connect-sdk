"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8807],{11934:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return o},default:function(){return x}});var n,d=t(87462),m=t(63366),l=(t(15007),t(64983)),r=t(91515),i=["components"],o={},s=(n="CodeBlock",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),p={_frontmatter:o},u=r.Z;function x(e){var a=e.components,t=(0,m.Z)(e,i);return(0,l.mdx)(u,(0,d.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"sdk-references"},"SDK References"),(0,l.mdx)("p",null,"Read through the SDK methods, properties, and events. "),(0,l.mdx)("h2",{id:"methods"},"Methods"),(0,l.mdx)("h4",{id:"allowparticipantpublish-msgname-allowflag"},"allowParticipantPublish (",(0,l.mdx)("inlineCode",{parentName:"h4"},"msgName"),", ",(0,l.mdx)("inlineCode",{parentName:"h4"},"allowFlag"),")"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Available since"),": 10.8"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Host Only")," | This method will allow/block the participants from sending a sync event. "),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Param"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"msgName"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"string")),(0,l.mdx)("td",{parentName:"tr",align:null},"Name of the message for which the permission will be set")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"allowFlag"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"boolean")),(0,l.mdx)("td",{parentName:"tr",align:null},"If ",(0,l.mdx)("inlineCode",{parentName:"td"},"true")," then participants will be allowed")))),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Returns"),": ",(0,l.mdx)("inlineCode",{parentName:"p"},"Void")),(0,l.mdx)("h4",{id:"example"},"Example:"),(0,l.mdx)(s,{slots:"heading, code",languages:"JavaScript",mdxType:"CodeBlock"}),(0,l.mdx)("h4",{id:"allowparticipantpublish"},"allowParticipantPublish"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},'customPodObject.allowParticipantPublish("name", true)\n')),(0,l.mdx)("h4",{id:"dispatchsyncmessage-msgname-msgvalue-isdelta-echoback"},"dispatchSyncMessage (",(0,l.mdx)("inlineCode",{parentName:"h4"},"msgName"),", ",(0,l.mdx)("inlineCode",{parentName:"h4"},"msgValue"),", ",(0,l.mdx)("inlineCode",{parentName:"h4"},"isDelta"),", ",(0,l.mdx)("inlineCode",{parentName:"h4"},"echoBack"),")"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Available since"),": 10.0"),(0,l.mdx)("p",null,"Method to send a sync message to other participants"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Param"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"msgName"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"string")),(0,l.mdx)("td",{parentName:"tr",align:null},"Name of the message to be sent -- should be meaningful to the pod running on other participant's machines")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"msgValue"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"object")),(0,l.mdx)("td",{parentName:"tr",align:null},"The contents of the message to be sent, the format to be determined by your own custom pod")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"isDelta"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"boolean")),(0,l.mdx)("td",{parentName:"tr",align:null},"If ",(0,l.mdx)("inlineCode",{parentName:"td"},"true"),", then all of the events matching this message name will be sent to new particpants. If ",(0,l.mdx)("inlineCode",{parentName:"td"},"false"),", then only the last known event will be sent.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"echoBack"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"boolean")),(0,l.mdx)("td",{parentName:"tr",align:null},"if ",(0,l.mdx)("inlineCode",{parentName:"td"},"true"),", then this instance of the custom pod will receive a corresponding sync message back, otherwise only the other participants will receive this message.")))),(0,l.mdx)("h4",{id:"example-1"},"Example:"),(0,l.mdx)(s,{slots:"heading, code",languages:"JavaScript",mdxType:"CodeBlock"}),(0,l.mdx)("h4",{id:"dispatchsyncmessage"},"dispatchSyncMessage"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},'customPodObject.dispatchSyncMessage("name", ["John"], true, true)\n')),(0,l.mdx)("h4",{id:"getbreakoutroomdetails-breakoutid"},"getBreakoutRoomDetails (",(0,l.mdx)("inlineCode",{parentName:"h4"},"breakoutId"),")"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Available since"),": 11.0"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Host Only")," | This method will return an object with information about a breakout room"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Param"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"breakoutId"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"number")),(0,l.mdx)("td",{parentName:"tr",align:null},"Breakout room ID")))),(0,l.mdx)("h4",{id:"returns"},"Returns:"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"Object"),": Object that has two values: Breakout Room ID and Breakout Room Name; returns ",(0,l.mdx)("inlineCode",{parentName:"p"},"null")," if a participant calls this function. "),(0,l.mdx)("h4",{id:"example-2"},"Example:"),(0,l.mdx)(s,{slots:"heading, code",languages:"JavaScript",mdxType:"CodeBlock"}),(0,l.mdx)("h4",{id:"getbreakoutroomdetails"},"getBreakoutRoomDetails"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"let borObj = customPodObject.getBreakoutRoomDetails(1)\nlet name = borObj.name\nlet id = borObj.id\n")),(0,l.mdx)("h4",{id:"getbreakoutroomslist-"},"getBreakoutRoomsList ()"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Available since"),": 11.0"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Host Only")," | This method will return the list of breakout rooms"),(0,l.mdx)("h4",{id:"returns-1"},"Returns:"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"Array"),": Array that contains the list of breakout rooms object that contains room id and name, returns ",(0,l.mdx)("inlineCode",{parentName:"p"},"null")," if a participant calls this function."),(0,l.mdx)("h4",{id:"example-3"},"Example:"),(0,l.mdx)(s,{slots:"heading, code",languages:"JavaScript",mdxType:"CodeBlock"}),(0,l.mdx)("h4",{id:"getbreakoutroomslist"},"getBreakoutRoomsList"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"let borList = customPodObject.getBreakoutRoomsList()\nlet room1Name = borList[0].name\nlet room1Id = borList[0].id\n")),(0,l.mdx)("h4",{id:"getmybreakoutroomdetails-"},"getMyBreakoutRoomDetails ()"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Available since"),": 11.0"),(0,l.mdx)("p",null,"This method will return the Object that contains the details of the bor in which calling user is currently in"),(0,l.mdx)("h4",{id:"returns-2"},"Returns:"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"Object"),": name, id"),(0,l.mdx)("h4",{id:"example-4"},"Example:"),(0,l.mdx)(s,{slots:"heading, code",languages:"JavaScript",mdxType:"CodeBlock"}),(0,l.mdx)("h4",{id:"getmybreakoutroomdetails"},"getMyBreakoutRoomDetails"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"let myBorObj = customPodObject.getMyBreakoutRoomDetails()\nlet borId = myBorObj.id\nlet borName = myBorObj.name\n")),(0,l.mdx)("h4",{id:"getconfig-"},"getConfig ()"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Available since"),": 10.0"),(0,l.mdx)("p",null,"This method returns configuration of the meeting like accountId, isAddin, isWhiteBoardOn, etc. "),(0,l.mdx)("h4",{id:"returns-3"},"Returns:"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"Object"),": configuration"),(0,l.mdx)("h4",{id:"example-5"},"Example:"),(0,l.mdx)(s,{slots:"heading, code",languages:"JavaScript",mdxType:"CodeBlock"}),(0,l.mdx)("h4",{id:"getconfig"},"getConfig"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"let data = customPodObject.getConfig();\ndata.accountId\ndata.archiveDuration\ndata.isAddin\ndata.isArchive\ndata.isBreakOutSession\ndata.isCaughtUp\ndata.isPointerOn\ndata.isSecure\ndata.isWhiteBoardOn\ndata.language\ndata.playState\ndata.podTitle\ndata.role\ndata.roomSCOID\ndata.url\ndata.userID\ndata.userName\n")),(0,l.mdx)("h4",{id:"getmeetinginfo-"},"getMeetingInfo ()"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Available since"),": 10.0"),(0,l.mdx)("p",null,"This method will return a meeting info object."),(0,l.mdx)("h4",{id:"returns-4"},"Returns:"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"Object"),": object that has accountId, scoId, lang, url."),(0,l.mdx)("h4",{id:"example-6"},"Example:"),(0,l.mdx)(s,{slots:"heading, code",languages:"JavaScript",mdxType:"CodeBlock"}),(0,l.mdx)("h4",{id:"getmeetinginfo"},"getMeetingInfo"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"let data = customPodObject.getMeetingInfo()\ndata.accountId\ndata.lang\ndata.url\n")),(0,l.mdx)("h4",{id:"getmyuserdetails-"},"getMyUserDetails ()"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Available since"),": 10.0"),(0,l.mdx)("p",null,"This method will return a user data object for the current user"),(0,l.mdx)("h4",{id:"returns-5"},"Returns:"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"Object"),": object that has two properties message and data."),(0,l.mdx)("h4",{id:"example-7"},"Example:"),(0,l.mdx)(s,{slots:"heading, code",languages:"JavaScript",mdxType:"CodeBlock"}),(0,l.mdx)("h4",{id:"getmyuserdetails"},"getMyUserDetails"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},'let myUserData = customPodObject.getMyUserDetails()\nmyUserData.message   // "Success" for live meeting and "Access Denied" for recording\nmyUserData.data.name\nmyUserData.data.fullName\nmyUserData.data.role\nmyUserData.data.id\nmyUserData.data.status // this will be an array containing all the status set by this user\n')),(0,l.mdx)("h4",{id:"getpodinfo-"},"getPodInfo ()"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Available since"),": 10.0"),(0,l.mdx)("p",null,"This method will return a pod info object"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Param"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null})))),(0,l.mdx)("h4",{id:"returns-6"},"Returns:"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"Object"),": object that has podTitle, isWhiteBoardOn"),(0,l.mdx)("h4",{id:"example-8"},"Example:"),(0,l.mdx)(s,{slots:"heading, code",languages:"JavaScript",mdxType:"CodeBlock"}),(0,l.mdx)("h4",{id:"getpodinfo"},"getPodInfo"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"let data = customPodObject.getPodInfo()\ndata.isWhiteBoardOn\ndata.podTitle\n")),(0,l.mdx)("h4",{id:"getuserdetails-userid"},"getUserDetails (",(0,l.mdx)("inlineCode",{parentName:"h4"},"userID"),")"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Available since"),": 10.0"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Host Only")," | This method will return a user data object, assuming that the user is a host and that a valid UserID is provided"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Param"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"userID"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"string")),(0,l.mdx)("td",{parentName:"tr",align:null},"ID of the user")))),(0,l.mdx)("h4",{id:"returns-7"},"Returns:"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"Object"),": object with user details, return null if participant call this function"),(0,l.mdx)("h4",{id:"example-9"},"Example:"),(0,l.mdx)(s,{slots:"heading, code",languages:"JavaScript",mdxType:"CodeBlock"}),(0,l.mdx)("h4",{id:"getuserdetails"},"getUserDetails"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},'let userData = customPodObject.getUserDetails(userId)\nuserData.message    // "Success" for live meeting and "Access Denied" for recording\nuserData.data.breakoutId\nuserData.data.breakoutRoomName\nuserData.data.fullName\nuserData.data.name\nuserData.data.role\n')),(0,l.mdx)("h2",{id:"properties"},"Properties"),(0,l.mdx)("h2",{id:"events"},"Events"))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-sdk-index-md-6ace7f405f977b2b7931.js.map