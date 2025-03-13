"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[946],{90732:function(e,t,o){o.r(t),o.d(t,{_frontmatter:function(){return r},default:function(){return m}});var n=o(87462),a=o(63366),i=(o(15007),o(64983)),s=o(91515),d=["components"],r={},l={_frontmatter:r},c=s.Z;function m(e){var t=e.components,o=(0,a.Z)(e,d);return(0,i.mdx)(c,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"custom-pod-structure"},"Custom Pod Structure"),(0,i.mdx)("p",null,"Understand the structure of a Custom Pods package.\nA custom pod is delivered as a zip package containing source files, a manifest, and libraries. The package can optionally be renamed with a .pod extension to make downloading and distrubution easier. Meeting hosts simply load this .pod or .zip package into an empty Share pod to install the application into any meeting room. The custom pod can also be uploaded to the Content library to make it easily accessible across meeting rooms. "),(0,i.mdx)("p",null,"At a minimum, a custom pod must include both an HTML file with a .htm extension, and a manifest file to list all of the files as assets called breeze-manifest.xml. Pods that use the Custom Pod SDK, will also need to include the SDK as part of the package. We recommend adding connect_customPodSDK.js in a folder called lib. Do not modify this file. Additional files and directories can be added such as images, css stylesheets, javascript files and other web libraries and technologies. Remember to reference all of your files in the breezemanifest.xml. Adobe Connect may generate an error if files are not properly listed. HTML documents require a .htm extension, do not use .html. If a file is listed within the breeze-manifest.xml but not present in the package, Adobe Connect will produce a conversion error when the pod is uploaded. These documents must be compressed into a single ZIP archive prior to being uploaded to Adobe Connect. Adobe Connect supports both the .zip and .pod extensions."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-custom-pod-structure-index-md-6fd7268c823f98302003.js.map