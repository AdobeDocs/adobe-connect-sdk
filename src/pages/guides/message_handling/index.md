# Message Handling
Learn how Custom Pods can communicate with other components of a room using Messages. 

## Sending Messages

Each participant loads their own instance of the pod you build. The documentation reference outlines all of the Methods, Events, and Properties available in the Custom Pod SDK. The core functionality is sending messages to other instances of the pod and listening for those messages from other pods. In this way, a custom pod can communicate with other instances of itself.

There are two functions that enable this. 

- **dispatchSyncMessage**
- **syncMessageReceived**

**dispatchSyncMessage** sends messages to other pods. Those messages include:
- A message name to differentiate it from other messages
- A message value - the contents of the message. A payload that can be a string, boolean, array, object or other data type.
- A boolean value, called `isDelta`, to indicate if it is a stateful message or not. (Defaults to `False` if not specified)
- A boolean value, called `echoBack`, to indicate if the sender of the message should aslo receive the message. (Defaults to `False` if not specified).

So, a typical way to send a message might be:

<CodeBlock slots="heading, code" languages="JavaScript"/>

#### Dispatching Sync Messages

```javascript
customPodObject.dispatchSyncMessage(
  "update-note",
  "this is my new note text",
  false,
  false
);

```
By default, only hosts and presenters can send sync messages. To enable participants to send a specific sync messge, use the following syntax in your code for each of the message types they should be able to send:

<CodeBlock slots="heading, code" languages="JavaScript"/>

#### Allowing participants to dispatch Sync Messages

```javascript
customPodObject.allowParticipantPublish(
    "update-note", 
    true
);

```

## Stateful vs Delta Messages

To determine whether your message is a **Delta** message or a **Stateful** message, consider the following:
- A stateful message reflects the entire state for this message name. When the pod is loaded by someone who joined late, only the last message will be received.
- A delta message only reflects a part of the entire state. When the pod is loaded by someone who joined late, they will receive all of the delta messages for this message name.

So for a chat application, the Sync Messages to set an option or show who is typing a message would be **stateful**, but each chat message would be a **delta** message. In general, the large majority of your messages will be stateful and `isDelta` should be `false`.

## Receiving Messages


