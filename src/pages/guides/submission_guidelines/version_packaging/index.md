# Version Packaging

Learn about how to package your custom pod for successfully submitting to Developer Distribution. 

## Organizing the files

Ensure all the necessary files for your custom pod are in a single directory. This includes:
- **HTML files**: The main files that contain the code for your custom pod.
- **Assets**: Any images, stylesheets, scripts, or other resources your custom pod needs.
- **Configuration files**: Any XML files that define settings or parameters for your pod.

## Create a manifest

The custom pod package should include a breeze-manifest.xml file in the root directory. The manifest file should include the following information: 

- **Document type**: Specify the type as `custom-pod`.
- **ID and version**: Unique identifier and version number for your pod. The ID should be have a reverse domain name notation like com.adobe.connect.podName. Version should be of the form `x.y.z` where x, y, and z are numeric.  
- **minimumConnectServerVersion**: The minimum version of Adobe Connect required to run your custom pod.
- **minimumSDKversion**: The minimum Adobe Connect SDK version required to run your custom pod.   
- **Assets**: List all the assets (files and directories) your pod uses.

## Compress the file

Once you have all your files organized and tested, compress them into a ZIP file. Ensure the ZIP file maintains the directory structure. Change the extension type from `.zip` to `.pod`. Please note that renaming the custom pod package to a `.pod` extension is required if you are submitting the Custom Pod to Developer Distribution. 

## Test and verify locally

Upload the .pod file into a share pod inside an Adobe Connect room to test it locally. If the Custom Pod works as expected, you are now ready to submit the Custom Pod package through Developer Distribution. 
   
## Example Directory Structure
<CodeBlock slots="heading, code" languages="JavaScript"/>

####   
```
MyCustomPod/
├── index.html
├── breeze-manifest.xml
├── assets/
│   ├── style.css
│   ├── script.js
│   └── image.png
└── libs/
    └── connect_customPodSDK.js
```
