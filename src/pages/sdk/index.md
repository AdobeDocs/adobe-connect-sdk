# SDK References

Read through the SDK methods, properties, and events. 

## Methods
    
#### allowParticipantPublish (`msgName`, `allowFlag`)
**Available since**: 10.8

**Host Only** | This method will allow/block the participants from sending a sync event. 


| Param   | Type  | Description  |
| ------ | ------------------- | ------------ |
| msgName  | `string` | Name of the message for which the permission will be set |
| allowFlag | `boolean` | If `true` then participants will be allowed     |

**Returns**: `Void`
#### Example:

<CodeBlock slots="heading, code" languages="JavaScript"/>

#### allowParticipantPublish

```javascript
customPodObject.allowParticipantPublish("name", true)
```
---
  
#### dispatchSyncMessage (`msgName`, `msgValue`, `isDelta`, `echoBack`)
**Available since**: 10.0

Method to send a sync message to other participants


| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| msgName  | `string` | Name of the message to be sent -- should be meaningful to the pod running on other participant's machines |
| msgValue | `object` | The contents of the message to be sent, the format to be determined by your own custom pod     |
| isDelta | `boolean` | If `true`, then all of the events matching this message name will be sent to new particpants. If `false`, then only the last known event will be sent.     |
| echoBack | `boolean` | if `true`, then this instance of the custom pod will receive a corresponding sync message back, otherwise only the other participants will receive this message.     |

#### Example:

<CodeBlock slots="heading, code" languages="JavaScript"/>

#### dispatchSyncMessage

```javascript
customPodObject.dispatchSyncMessage("name", ["John"], true, true)
```

---

#### getBreakoutRoomDetails (`breakoutId`)
**Available since**: 11.0

**Host Only** | This method will return an object with information about a breakout room

| Param      | Type     | Description |
|------------|----------|-------------|
| breakoutId | `number` |   Breakout room ID          |

#### Returns:

`Object`: Object that has two values: Breakout Room ID and Breakout Room Name; returns `null` if a participant calls this function. 

#### Example:

<CodeBlock slots="heading, code" languages="JavaScript"/>

#### getBreakoutRoomDetails

```javascript
let borObj = customPodObject.getBreakoutRoomDetails(1)
let name = borObj.name
let id = borObj.id
```

---

#### getBreakoutRoomsList ()
**Available since**: 11.0

**Host Only** | This method will return the list of breakout rooms

#### Returns:

`Array`: Array that contains the list of breakout rooms object that contains room id and name, returns `null` if a participant calls this function.

#### Example:

<CodeBlock slots="heading, code" languages="JavaScript"/>

#### getBreakoutRoomsList

```javascript
let borList = customPodObject.getBreakoutRoomsList()
let room1Name = borList[0].name
let room1Id = borList[0].id
````

---

#### getMyBreakoutRoomDetails ()
**Available since**: 11.0

This method will return the Object that contains the details of the bor in which calling user is currently in

#### Returns:

`Object`: name, id

#### Example:

<CodeBlock slots="heading, code" languages="JavaScript"/>

#### getMyBreakoutRoomDetails

```javascript
let myBorObj = customPodObject.getMyBreakoutRoomDetails()
let borId = myBorObj.id
let borName = myBorObj.name
````

---

#### getConfig ()
**Available since**: 10.0

This method returns configuration of the meeting like accountId, isAddin, isWhiteBoardOn, etc. 

#### Returns:

`Object`: configuration

#### Example:

<CodeBlock slots="heading, code" languages="JavaScript"/>

#### getConfig

```javascript
let data = customPodObject.getConfig();
data.accountId
data.archiveDuration
data.isAddin
data.isArchive
data.isBreakOutSession
data.isCaughtUp
data.isPointerOn
data.isSecure
data.isWhiteBoardOn
data.language
data.playState
data.podTitle
data.role
data.roomSCOID
data.url
data.userID
data.userName
````

---

#### getMeetingInfo ()
**Available since**: 10.0

This method will return a meeting info object.

#### Returns:

`Object`: object that has accountId, scoId, lang, url.

#### Example:

<CodeBlock slots="heading, code" languages="JavaScript"/>

#### getMeetingInfo

```javascript
let data = customPodObject.getMeetingInfo()
data.accountId
data.lang
data.url
````

---

#### getMyUserDetails ()
**Available since**: 10.0

This method will return a user data object for the current user

#### Returns:

`Object`: object that has two properties - `message` and `data`.

#### Example:

<CodeBlock slots="heading, code" languages="JavaScript"/>

#### getMyUserDetails

```javascript
let myUserData = customPodObject.getMyUserDetails()
myUserData.message   // "Success" for live meeting and "Access Denied" for recording
myUserData.data.name
myUserData.data.fullName
myUserData.data.role
myUserData.data.id
myUserData.data.status // this will be an array containing all the status set by this user
````

---

#### getPodInfo ()
**Available since**: 10.0

This method will return a pod info object

#### Returns:

`Object`: object that has `podTitle`, `isWhiteBoardOn`

#### Example:

<CodeBlock slots="heading, code" languages="JavaScript"/>

#### getPodInfo

```javascript
let data = customPodObject.getPodInfo()
data.isWhiteBoardOn
data.podTitle
````

---

#### getUserDetails (`userID`)
**Available since**: 10.0

**Host Only** | This method will return a user data object, assuming that the user is a host and that a valid UserID is provided

| Param  | Type     | Description  |
|--------|----------|--------------|
| userID | `string` | ID of the user |

#### Returns:

`Object`: object with user details, return null if participant call this function

#### Example:

<CodeBlock slots="heading, code" languages="JavaScript"/>

#### getUserDetails

```javascript
let userData = customPodObject.getUserDetails(userId)
userData.message    // "Success" for live meeting and "Access Denied" for recording
userData.data.breakoutId
userData.data.breakoutRoomName
userData.data.fullName
userData.data.name
userData.data.role
````

---

#### getUserList ()
**Available since**: 10.0

This method will return the object that has userIds of all the users in the meeting

#### Returns:

`Object`: object that has two properties - `message` and `data`.

#### Example:

<CodeBlock slots="heading, code" languages="JavaScript"/>

#### getUserList

```javascript
let userListData = customPodObject.getUserList()
userListData.message  // "Success" for live meeting and "Access Denied" for recording
userListData.data  // Array containing userIds of the user present in meeting
````

---

#### isBreakOutSessionOn ()
**Available since**: 10.0

This method will return a boolean that denotes whether Breakouts are started or not.

#### Returns:

`Boolean`: flag that denotes whether breakoutSession is started or not

#### Example:

<CodeBlock slots="heading, code" languages="JavaScript"/>

#### isBreakOutSessionOn

```javascript
let flag = customPodObject.isBreakOutSessionOn()
````

---

#### isWhiteBoardOn ()
**Available since**: 10.0

This method will return a boolean that denotes whether white board is started or not.

#### Returns:

`Boolean`: flag that denotes whether whiteboard is started or not

#### Example:

<CodeBlock slots="heading, code" languages="JavaScript"/>

#### isWhiteBoardOn

```javascript
let flag = customPodObject.isWhiteBoardOn()
````

---

### maximize (`show`)
**Available since**: 10.8

**Host Only** | This method will switch Custom Pod between maximize and minimize state

| Param | Type     | Description |
|-------|----------|-------------|
| show  | `boolean`|             |

#### Returns:

`Void`

#### Example:

<CodeBlock slots="heading, code" languages="JavaScript"/>

#### maximize

```javascript
customPodObject.maximize(true)  // this will maximize the pod but only if function called from host side
customPodObject.maximize(false) // this will restore the pod but only if function called from host side
````

---

#### podVisible (`showFlag`)
**Available since**: 10.8

This method will show/hide the sharePod in which custom pod is loaded

| Param    | Type      | Description |
|----------|-----------|-------------|
| showFlag | `boolean` |             |

#### Returns:

`Void`

#### Example:

<CodeBlock slots="heading, code" languages="JavaScript"/>

#### podVisible

```javascript
customPodObject.podVisible = true  // to show the pod
customPodObject.podVisible = false // to hide the pod
````

---

#### setMenuBarControlsVisibility (`showFlag`)
**Available since**: 10.8

This method will show/hide the app bar items

| Param    | Type      | Description |
|----------|-----------|-------------|
| showFlag | `boolean` |             |

#### Returns:

`Void`

#### Example:

<CodeBlock slots="heading, code" languages="JavaScript"/>

#### setMenuBarControlsVisibility

```javascript
customPodObject.setMenuBarControlsVisibility(true)  // to show the app bar items
customPodObject.setMenuBarControlsVisibility(false) // to hide the app bar items
````

---

#### setMyStatus (`status`)
**Available since**: 10.8

Allows user to set his own status.

Accepted Status Values are:
- `speechQuestion` : Raise Hand
- `speechQuestionLower` : Lower Raised Hand
- `speechAgree` : Agree
- `speechDisagree` : Disagree
- `speechAgreeClear` : Clear Agree or Disagree
- `steppedAway` : Step Away
- `stepIn` : Step In
- `speechLouder` : Speak Louder
- `speechQuieter` : Speak Softer
- `speechFaster` : Speed Up
- `speechSlower` : Slow Down
- `speechLaughter` : Laughter
- `speechApplause` : Applause
- `clearStatus` : Clear Status

| Param  | Type     | Description  |
|--------|----------|--------------|
| status | `string` | statusValue  |

#### Returns:

`Void`

#### Example:

<CodeBlock slots="heading, code" languages="JavaScript"/>

#### setMyStatus

```javascript
setMyStatus("speechQuestion")
````

---

#### setPodControlsVisibility (`showFlag`)
**Available since**: 10.8

This method will show/hide the pod menu items.

| Param    | Type      | Description |
|----------|-----------|-------------|
| showFlag | `boolean` |             |

#### Returns:

`Void`

#### Example:

<CodeBlock slots="heading, code" languages="JavaScript"/>

#### setPodControlsVisibility

```javascript
customPodObject.setPodControlsVisibility(true)  // to show the pod options
customPodObject.setPodControlsVisibility(false) // to hide the pod options
````

---

## Properties

#### `AGREE`

**Type:** `string`

**Available since:** 10.8

**Description:** A String value that is used to set the "Agree" user status.

---

#### `AGREE_DISAGREE_CLEAR`
**Type:** `string`

**Available since:** 10.8

**Description:** A String value that is used to clear the Agree or disagree status.

**Example:**
````javascript
sdkobject.setMyStatus(sdkObject.AGREE_DISAGREE_CLEAR)
````

---

#### `APPLAUSE`
**Type:** `string`

**Available since:** 10.8

**Description:** A String value that is used to set the "Applause" status in connect.

---

#### `archiveDuration`
**Type:** `number`

**Available since:** 10.5

**Description:** This specifies the duration of the recording.

---

#### `BUILD_NO`

**Type:** `string`

**Available since:** 10.8

**Description:** This String defaults to "2.0".

---

#### `CLEAR_STATUS`

**Type:** `string`

**Available since:** 10.8

**Description:** User status value used as an argument of setMyStatus function. This String is used to clear the status.

---

#### `connectVersion`

**Type:** `number`

**Available since:** 10.0

**Description:** A boolean that tells which version of connect you are using.

---

#### `DATE`

**Type:** `string`

**Available since:** 11.0

**Description:** This String value will give today's date.

---

#### `DISAGREE`

**Type:** `string`

**Available since:** 10.8

**Description:** User status value used as an argument of setMyStatus function. A String value that is used to set the "Disagree" status.

---

#### `isSynced`

**Type:** `number`

**Available since:** 10.0

**Description:** A boolean that tells whether share pod is Synced or not.

---

#### `k_HOST`

**Type:** `string`

**Available since:** 10.8

**Description:** A String value that denotes the host role in connect application.

---

#### `k_PARTICIPANT`

**Type:** `string`

**Available since:** 10.8

**Description:** A String value that denotes the participant role in connect application.

---

#### `k_PRESENTER`

**Type:** `string`

**Available since:** 10.8

**Description:** A String value that denotes the presenter role in connect application.

---

#### `language`

**Type:** `string`

**Available since:** 10.8

**Description:** A String value that denotes the language set in connect application.

---

#### `LAUGHTER`

**Type:** `string`

**Available since:** 10.8

**Description:** User status value used as an argument of setMyStatus function. A String value that is used to set the "Laughter" status.

---

#### `LOWER_HAND`

**Type:** `string`

**Available since:** 10.8

**Description:** User status value used as an argument of setMyStatus function. A String value that is used to clear "Raise Hand" status.

---

#### `playState`

**Type:** `string`

**Available since:** 10.5

**Description:** A String that specifies the playState of the recording.

---

#### `podHeight`

**Type:** `number`

**Available since:** 10.8

**Description:** A number that specifies the height of the pod containing the application.

---

#### `podID`

**Type:** `number`

**Available since:** 11.0

**Description:** A number that specifies the podId in which custom pod is loaded.

---

#### `podMinHeight`

**Type:** `number`

**Available since:** 10.8

**Description:** A number that specifies the minimum height of the pod containing the application.

---

#### `podMinWidth`

**Type:** `number`

**Available since:** 10.8

**Description:** A number that specifies the minimum width of the pod containing the application.

---


#### `podWidth`

**Type:** `number`

**Available since:** 10.8

**Description:** A number that specifies the width of the pod containing the application.

---

#### `RAISE_HAND`

**Type:** `string`

**Available since:** 10.8

**Description:** User status value used as an argument of setMyStatus function. A String value that is used to set the "Raise Hand" status.

---

#### `SLOW_DOWN`

**Type:** `string`

**Available since:** 10.8

**Description:** User status value used as an argument of setMyStatus function. A String value that is used to set the "Slow Down" status.

---

#### `SPEAK_LOUDER`

**Type:** `string`

**Available since:** 10.8

**Description:** User status value used as an argument of setMyStatus function. A String value that is used to set the "Speak Louder" status.

---

#### `SPEAK_SOFTER`

**Type:** `string`

**Available since:** 10.8

**Description:** User status value used as an argument of setMyStatus function. A String value that is used to set the "Speak Softer" status.

---

#### `SPEED_UP`

**Type:** `string`

**Available since:** 10.8

**Description:** User status value used as an argument of setMyStatus function. A String value that is used to set the "Speed Up" status.

---

#### `STEP_AWAY`

**Type:** `string`

**Available since:** 10.8

**Description:** User status value used as an argument of setMyStatus function. A String value that is used to set the "Step Away" status.

---

#### `STEP_IN`

**Type:** `string`

**Available since:** 10.8

**Description:** User status value used as an argument of setMyStatus function. A String value that is used to set the "Step In" status.

---

#### `VERSION`

**Type:** `string`

**Available since:** 10.8

**Description:** This String value that defaults to "2.0".

---

## Events

#### caughtUp

**Available since**: 10.0

**Description**: Event that indicates that the caughtUp phase is complete, but also is an indication that it is now safe to send messages more freely to the Connect application.

**Event Payload**: 
- `UNKNOWN` (Void)

#### Example:
```javascript
customPodObject.registerCallback("caughtUp", () => ( this.caughtUp() ));
this.caughtUp(){
    console.log("Here my event got caught I will put my logic here");
}
````

---

#### playStateChanged

**Available since**: 10.5

**Description**: [RECORDING]: When playStateChanged from play to pause or vice versa.

**Event Payload**: 
- `event` (Object): this object has playState property

#### Example:
```javascript
customPodObject.registerCallback("playStateChanged", (evt) => ( this.playStateChanged(evt) ));
this.roleChanged(evt){
    evt.playState
    evt.type // 'playStateChanged'
}
````

---

#### podClosed

**Available since**: 11.0

**Description**: When pod is hidden / closed.

**Event Payload**: 
- `event` (Object): this object only contains event type

#### Example:
```javascript
customPodObject.registerCallback("podClosed", (evt) => ( this.podClosed(evt) ));
this.podClosed(evt){
    evt.type // 'sizeChanged'
}
````

---

#### podTitleChanged

**Available since**: 10.0

**Description**: When title of pod in which custom pod is shared is changed.

**Event Payload**: 
- `event` (Object): this object has podTitle as property that gives the new title

#### Example:
```javascript
customPodObject.registerCallback("podTitleChanged", (evt) => ( this.podTitleChanged(evt) ));
this.podTitleChanged(evt){
    evt.podTitle
    evt.type // 'podTitleChanged'
}
````

---

#### pointerToggle

**Available since**: 10.0

**Description**: When state of pointer is toggled.

**Event Payload**: 
- `event` (Object): this object has isPointerOn property

#### Example:
```javascript
customPodObject.registerCallback("pointerToggle", (evt) => ( this.pointerToggle(evt) ));
this.pointerToggle(evt){
    evt.isPointerOn
    evt.type // 'pointerToggle'
}
````

---

#### roleChanged

**Available since**: 10.0

**Description**: When role of a user is changed.

**Event Payload**: 
- `event` (Object): this object has type, newRole and userId as property.

#### Example:
```javascript
customPodObject.registerCallback("roleChanged", (evt) => ( this.roleChanged(evt) ));
this.roleChanged(evt){
    evt.newRole
    evt.type // 'roleChanged'
    evt.userId
}
````

---

#### sizeChanged

**Available since**: 11.0

**Description**: When pod Size is Changed.

**Event Payload**: 
- `event` (Object): this object has updated width and height as property

#### Example:
```javascript
customPodObject.registerCallback("sizeChanged", (evt) => ( this.sizeChanged(evt) ));
this.sizeChanged(evt){
    evt.width
    evt.height 
    evt.type // 'sizeChanged'
}
````

---

#### syncMessageReceived

**Available since**: 10.0

**Description**: When sync messages are received.

**Event Payload**: 
- `event` (Object): this object has msgNm and msgVal

#### Example:
```javascript
customPodObject.registerCallback("syncMessageReceived", (evt) => ( this.syncMessageReceived(evt) ));
this.syncMessageReceived(evt){
    evt.isDelta
    evt.msgNm
    evt.msgVal
    evt.type // 'syncMessageReceived'
    evt.uID  // userId of the user sending the sync message
}
````

---

#### syncModeChanged

**Available since**: 10.0

**Description**: When Sync Mode of share pod is changed.

**Event Payload**: 
- `event` (Object): this object has two properties didISync and isSynced

#### Example:
```javascript
customPodObject.registerCallback("syncModeChanged", (evt) => ( this.syncModeChanged(evt) ));
this.syncModeChanged(evt){
    evt.didISync
    evt.isSynced
    evt.type // 'syncModeChanged'
}
````

---

#### userDetailsChanged

**Available since**: 10.0

**Description**: When user details get changed such as name of the user is changed.

**Event Payload**: 
- `event` (Object): this object has type property that denotes the type of the event, fullName and userId of the user

#### Example:
```javascript
customPodObject.registerCallback("userDetailsChanged", (evt) => ( this.userDetailsChanged(evt) ));
this.userDetailsChanged(evt){
    evt.fullName
    evt.name
    evt.type // 'userDetailsChanged'
    evt.userId
}
````

---

#### userJoined

**Available since**: 10.0

**Description**: Event fired when user enters the meeting.

**Event Payload**: 
- `event` (Object): this object has user property that holds details of the user joined and type property that shows type of event

#### Example:
```javascript
customPodObject.registerCallback("userJoined", (evt) => ( this.userJoined(evt) ));
this.userJoined(evt){
    evt.type       // 'userJoined'
    evt.user.breakoutId
    evt.user.breakoutRoomName
    evt.user.fullName
    evt.user.id
    evt.user.name
    evt.user.role
}
````

---

#### userLeft

**Available since**: 10.0

**Description**: When user joins the meeting.

**Event Payload**: 
- `event` (Object): this object has type property and userId property

#### Example:
```javascript
customPodObject.registerCallback("userLeft", (evt) => ( this.userLeft(evt) ));
this.userLeft(evt){
    evt.type  // "userLeft"
    evt.userID
}
````

---

#### userStatusChanged

**Available since**: 10.0

**Description**: When user status gets changed.

**Event Payload**: 
- `event` (Object): this object has userId and status as its property

#### Example:
```javascript
customPodObject.registerCallback("userStatusChanged", (evt) => ( this.userStatusChanged(evt) ));
this.userStatusChanged(evt){
    evt.type  // 'userStatusChanged'
    evt.status  // Array containing all the status of this user
    evt.userId
}
````

---

#### whiteBoardToggle

**Available since**: 10.0

**Description**: When state of whiteboard is toggled.

**Event Payload**: 
- `event` (Object): this object has isWhiteBoardOn property

#### Example:
```javascript
customPodObject.registerCallback("whiteBoardToggle", (evt) => ( this.whiteBoardToggle(evt) ));
this.whiteBoardToggle(evt){
    evt.isWhiteBoardOn
    evt.type // 'whiteBoardToggle'
}
````

---
