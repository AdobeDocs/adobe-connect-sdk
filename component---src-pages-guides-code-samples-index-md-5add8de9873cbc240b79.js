"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5293],{96490:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return p}});var a,o=t(87462),s=t(63366),i=(t(15007),t(64983)),r=t(91515),l=["components"],d={},c=(a="CodeBlock",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),m={_frontmatter:d},u=r.Z;function p(e){var n=e.components,t=(0,s.Z)(e,l);return(0,i.mdx)(u,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"code-samples"},"Code Samples"),(0,i.mdx)("p",null,"Learn how to initialize the SDK library, structure the breeze-manifest file, and download a sample custom pods package. "),(0,i.mdx)("h2",{id:"initialize-sdk-library"},"Initialize SDK Library"),(0,i.mdx)(c,{slots:"heading, code",languages:"JavaScript",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"initialize-sdk-library-1"},"Initialize SDK Library"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'//Initialize library\n\n// while using React it is recommended that you initialize the librar inside componentDidMount method\nvar cpu = ConnectCustomSDK.SyncConnector || {};\n\n// to inform the main client that library is getting initialised\ncpu.init(\n  onConfigured,\n  "com.adobe.connect.basiclistsync",\n  "10.5",\n  "connectsdkhook"\n);\ncpu.registerCallback("userLeft", updateUserList);\ncpu.registerCallback("userJoined", updateUserList);\ncpu.registerCallback("userDetailsChanged", updateUserList);\ncpu.registerCallback("userStatusChanged", updateUserList);\ncpu.registerCallback("roleChanged", updateUserList);\ncpu.registerCallback("syncMessageReceived", syncMessageReceived);\ncpu.registerCallback("caughtUp", caughtUp);\ncpu.registerCallback("update", breakOutSession);\nonConfigured = function () {\n  /*code to load the content of html*/\n};\n\n')),(0,i.mdx)("h2",{id:"breeze-manifest-file"},"Breeze Manifest File"),(0,i.mdx)(c,{slots:"heading, code",languages:"XML",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"breeze-manifestxml"},"breeze-manifest.xml"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8" ?>\n<breeze-manifest version="1.0"\n    xmlns="http://breeze.macromedia.com/ns/breezemanifest" generator="ZB">\n    <document type="custom-pod" id="com.adobe.connect.reference" version="1.0.001" minimumConnectMobileVersion="2.4" minimumSDKversion="11.2.000" minimumConnectServerVersion="11.2.0"/>\n    <assets>\n        <asset type="document-view">\n            <entry href="CustomPod.htm" href-html5="CustomPod.htm" />\n            <file href="CustomPod.htm"/>\n            <file href="lib/"/>\n            <file href="lib/connect_customPodSDK.js"/>\n            <file href="css/"/>\n            <file href="css/style.css"/>\n            <file href="img/"/>\n            <file href="img/happy.jpg"/>\n        </asset>\n    </assets>\n</breeze-manifest>\n\n')),(0,i.mdx)("h2",{id:"sample-custom-pod-package"},"Sample Custom Pod Package"),(0,i.mdx)("p",null,"To help you kickstart development of a Custom Pod, included below is a sample Custom Pod package. "),(0,i.mdx)("p",null,"To test the functionality, you can drag and drop the pod as a ZIP package to an empty Share pod in an Adobe Connect room. You can unzip the package to examine the code and structure of the package."),(0,i.mdx)("a",{href:"/static/SampleCustomPod.zip",download:!0},"Download Sample Custom Pod"),(0,i.mdx)("p",null,"The sample custom pod includes a ",(0,i.mdx)("strong",{parentName:"p"},"breeze-manifest.xml")," file you can use as a starting point for your own pod as well as an HTML file that includes some JavaScript examples of functions to send and receive Sync Messages as well as to list all users in the room."),(0,i.mdx)("p",null,"Note, that since the ",(0,i.mdx)("inlineCode",{parentName:"p"},"allowParticipantPublish")," option was not used, only Hosts and Presenters will be able to send the custom sync messages. The ability to list all users is also restricted to hosts only."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-code-samples-index-md-5add8de9873cbc240b79.js.map