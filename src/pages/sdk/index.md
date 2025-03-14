---
title: SDK Reference
description: This page lists the SDK methods, properties, and events.  
---

# SDK References

Read through the SDK methods, properties, and events. 

## Methods

<details>

  <summary>allowParticipantPublish(msgName, allowFlag)</summary>
    
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
</details>

<details>

<summary>dispatchSyncMessage(msgName, msgValue, isDelta, echoBack)</summary>

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

</details>

### getBreakoutRoomDetails (`breakoutId`)
**Available since**: 11.0

[Host Only Function] This method will return an object with information about a breakout room

| Param      | Type     | Description |
|------------|----------|-------------|
| breakoutId | `number` |             |

#### Returns:

`Object`: Object that has two values breakoutRoom id and breakout room name, returns null if participant calls this function

#### Example:

<CodeBlock slots="heading, code" languages="JavaScript"/>

#### getBreakoutRoomDetails

```javascript
let borObj = customPodObject.getBreakoutRoomDetails(1)
let name = borObj.name
let id = borObj.id
```

### getBreakoutRoomsList ()
**Available since**: 11.0

[Host Only Function] This method will return the list of breakout rooms

| Param | Type   | Description |
|-------|--------|-------------|
|       |        |             |

#### Returns:

`Array`: Array that contains the list of breakout rooms object that contains room id and name, returns null if participant calls this function

#### Example:

<CodeBlock slots="heading, code" languages="JavaScript"/>

#### getBreakoutRoomsList

```javascript
let borList = customPodObject.getBreakoutRoomsList()
let room1Name = borList[0].name
let room1Id = borList[0].id
````



## Properties


## Events
