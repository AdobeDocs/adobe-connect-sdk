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



## Properties


## Events
