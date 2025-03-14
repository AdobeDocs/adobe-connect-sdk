# Development Considerations

Learn about the development considerations while using Adobe Connect SDK to develop custom pods.

Broadly speaking, there are two types of custom pods that you can create:

- Applications that do not require synchronization, such as a clock that displays the users local time. This type of custom pod does not use or require the Custom Pod SDK, but your pod will still need to be packaged correctly with the required structure explained below.

- Applications designed specifically for Adobe Connect. These pods can be synchronized across all participants in an Adobe Connect room. In addition to synchonization, developers have some additional capabilities to get information about the user - such as their name and role, the virtual room, and events.

You can create your custom pod with plain (vanilla) JavaScript or use a web framework. While you could use any framework for your JavaScript development, the Adobe Connect meeting interface uses React.js and there may be performance advantages to using this framework for your Custom Pod development.
