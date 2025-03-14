---
title: SDK Reference
description: This page lists the SDK methods, properties, and events.  
---

# SDK References

Read through the SDK methods, properties, and events. 

## Methods

### allowParticipantPublish (`msgName`, `allowFlag`)
**Available since**: 10.8

**Host Only** | This method will allow/block the participants from sending a sync event. 


| Param  | Type                | Description  |
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

### dispatchSyncMessage (`msgName`, `msgValue`, `isDelta`, `echoBack`)
**Available since**: 10.0

Method to send a sync message to other participants


| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| msgName  | `string` | Name of the message to be sent -- should be meaningful to the pod running on other participant's machines |
| msgValue | `object` | The contents of the message to be sent, the format to be determined by your own custom pod     |
| isDelta | `boolean` | If true, then all of the events matching this message name will be sent to new particpants. If false, then only the last known event will be sent.     |
| echoBack | `boolean` | if true, then this instance of the custom pod will receive a corresponding sync message back, otherwise only the other participants will receive this message.     |

#### Example:

<CodeBlock slots="heading, code" languages="JavaScript"/>

#### allowParticipantPublish

```javascript
customPodObject.dispatchSyncMessage("name", ["John"], true, true)
```


## Properties


## Events
