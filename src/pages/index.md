---
title: Adobe Connect - SDK Documentation
description: This is the overview page of Adobe Connect SDK Documentation
contributors:
  - https://github.com/skhadiya 
---

<HeroSimple slots="heading, text"/>

# Adobe Connect SDK

Adobe Connect enables customers to extend the out-of-the-box functionality of Adobe Connect using custom pods developed with standard web technologies such as HTML, Javascript, and CSS.

<Resources slots="heading, links"/>

#### Resources

* [SDK Reference](https://developer.adobe.com)
* [Sample Custom Pods Package](https://github.com/AdobeDocs/dev-site)

## Overview

This documentation provides instructions for Adobe Connect Custom Pods SDK Documentation v11. For detailed SDK reference, see [Adobe Connect SDK reference](https://github.com/AdobeDocs/dev-site).

Custom pods can be used to allow multi-user interactions within a session, they can provide a synchronized display of information for all users and can even send and receive data from external websites. Simple examples include a countdown-timer that lets a host show everyone when the meeting will start, or an interactive game that displays a leaderboard with all the participants’ scores, or a map application that combines user location data with map data from an external mapping website. 

## Getting Started

<DiscoverBlock slots="heading, link, text"/>

### Development Basics

[Development Considerations](guides/)

Provides the development considerations while using Adobe Connect SDK to develop custom pods

<DiscoverBlock slots="link, text"/>

[Custom Pods Structure](guides/dummy_oauth_client/)

Understand the structure of a Custom Pods package

<DiscoverBlock slots="link, text"/>

[Message Handling](guides/dummy_oauth_client/)

Learn how Custom Pods can communicate with other components of a room using Messages

<DiscoverBlock slots="heading, link, text"/>

### Guides

[Create a New Listing](guides/dummy_metrics_api/)

Learn about creating and submitting a custom pod listing on Developer Distribution

<DiscoverBlock slots="link, text"/>

[SDK Reference](guides/dummy_oauth_client/)

Read through the complete reference to the Methods, Properties, and Events available in the SDK. 

<DiscoverBlock width="100%" slots="heading, link, text"/>

## Contributing

We encourage you to participate in our open documentation initiative, if you have suggestions, corrections, additions
or deletions for this documentation, check out the source from [this github repo](https://github.com/adobe/gatsby-theme-spectrum-example), and submit a pull
request with your contribution. For more information, refer to the [contributing page](support/contribute/).

## API Requests & Rate Limits

The timeout for API requests through adobe.io is currently *60 seconds*.

The default rate limit for an Cat Analytics Company is *120 requests per minute*. (The limit is enforced as *12 requests every 6 seconds*).
When rate limiting is being enforced you will get `429` HTTP response codes with the following response body: `{"error_code":"429050","message":"Too many requests"}`.
