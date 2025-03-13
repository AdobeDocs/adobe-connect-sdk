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
- A boolean value, called isDelta, to indicate if it is a stateful message or not. (Defaults to false if not specified)
- A boolean value, called echoBack, to indicate if the sender of the message should aslo receive the message. (Defaults to false if not specified).

So, a typical way to send a message might be:

<CodeBlock slots="heading, code" languages="JavaScript"/>

#### Request

```JavaScript
customPodObject.dispatchSyncMessage("update-note","this is my new note
text",false, false);
```

## Stateful vs Delta Messages



## Receiving Messages


