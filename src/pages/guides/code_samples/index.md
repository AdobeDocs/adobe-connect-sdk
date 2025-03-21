# Code Samples
Learn how to initialize the SDK library, structure the breeze-manifest file, and download a sample custom pods package. 

## Initialize SDK Library

<CodeBlock slots="heading, code" languages="JavaScript"/>

#### Initialize SDK Library

```javascript
//Initialize library

// while using React it is recommended that you initialize the library
// inside componentDidMount method
var cpu = ConnectCustomSDK.SyncConnector || {};

// to inform the main client that library is getting initialised
cpu.init(
  onConfigured,
  "com.adobe.connect.basiclistsync",
  "10.5",
  "connectsdkhook"
);
cpu.registerCallback("userLeft", updateUserList);
cpu.registerCallback("userJoined", updateUserList);
cpu.registerCallback("userDetailsChanged", updateUserList);
cpu.registerCallback("userStatusChanged", updateUserList);
cpu.registerCallback("roleChanged", updateUserList);
cpu.registerCallback("syncMessageReceived", syncMessageReceived);
cpu.registerCallback("caughtUp", caughtUp);
cpu.registerCallback("update", breakOutSession);
onConfigured = function () {
  /*code to load the content of html*/
};

```
## Breeze Manifest File

<CodeBlock slots="heading, code" languages="XML"/>

#### breeze-manifest.xml

```xml
<?xml version="1.0" encoding="utf-8" ?>
<breeze-manifest version="1.0"
    xmlns="http://breeze.macromedia.com/ns/breezemanifest" generator="ZB">
    <document type="custom-pod" id="com.adobe.connect.reference" version="1.0.001"
    minimumConnectMobileVersion="2.4" minimumSDKversion="11.2.000"
    minimumConnectServerVersion="11.2.0"/>
    <assets>
        <asset type="document-view">
            <entry href="CustomPod.htm" href-html5="CustomPod.htm" />
            <file href="CustomPod.htm"/>
            <file href="lib/"/>
            <file href="lib/connect_customPodSDK.js"/>
            <file href="css/"/>
            <file href="css/style.css"/>
            <file href="img/"/>
            <file href="img/happy.jpg"/>
        </asset>
    </assets>
</breeze-manifest>
```

## Sample Custom Pod Package

To help you kickstart development of a Custom Pod, included below is a sample Custom Pod package. 

To test the functionality, you can drag and drop the pod as a ZIP package to an empty Share pod in an Adobe Connect room. You can unzip the package to examine the code and structure of the package.

The sample custom pod includes a **breeze-manifest.xml** file you can use as a starting point for your own pod as well as an HTML file that includes some JavaScript examples of functions to send and receive Sync Messages as well as to list all users in the room.

Note, that since the `allowParticipantPublish` option was not used, only Hosts and Presenters will be able to send the custom sync messages. The ability to list all users is also restricted to hosts only.
