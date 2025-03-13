# Custom Pod Structure
Understand the structure of a Custom Pods package.
A custom pod is delivered as a zip package containing source files, a manifest, and libraries. The package can optionally be renamed with a `.pod` extension to make downloading and distrubution easier. If you would like to submit the custom pod to the Adobe Connect marketplace, renaming to a `.pod` extension is required. Meeting hosts simply load this `.pod` or `.zip` package into an empty Share pod to install the application into any meeting room. The custom pod can also be uploaded to the Content library to make it easily accessible across meeting rooms. Custom pods which have been submitted and accepted to the Adobe Connect marketplace can be discovered from the in-app marketplace. 

At a minimum, a custom pod must include both an HTML file with a **.htm** extension, and a manifest file to list all of the files as assets called **breeze-manifest.xml**. 

Pods that use the Custom Pod SDK, will also need to include the SDK as part of the package. We recommend adding connect_customPodSDK.js in a folder called lib. **Do not modify this file**. 

Additional files and directories can be added such as images, css stylesheets, javascript files and other web libraries and technologies. Remember to reference all of your files in the **breeze-manifest.xml**. Adobe Connect may generate an error if files are not properly listed. 

HTML documents require a **.htm** extension, do not use .html. If a file is listed within the breeze-manifest.xml but not present in the package, Adobe Connect will produce a conversion error when the pod is uploaded. These documents must be compressed into a single ZIP archive prior to being uploaded to Adobe Connect. Adobe Connect supports both the .zip and .pod extensions.
