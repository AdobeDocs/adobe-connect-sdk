# SDK References

Read through the SDK methods, properties, and events. 

## Methods

### `allowParticipantPublish` (msgName, allowFlag)
**Available since**: 10.8

**Host Only** | This method will allow/block the participants from sending a sync event. 


| Param  | Type                | Description  |
| ------ | ------------------- | ------------ |
| msgName  | `String` | Name of the message for which the permission will be set |
| allowFlag | `Boolean` | If `True` then participants will be allowed     |

**Returns**: `Void`

#### Example

<CodeBlock slots="heading, code" languages="JavaScript"/>

#### allowParticipantPublish

```javascript
customPodObject.allowParticipantPublish("name", true)
```

## Properties


## Events
