---
title: Adobe Connect - SDK Documentation
description: This is the overview page of Adobe Connect SDK Documentation
contributors:
  - https://github.com/skhadiya 
---

<HeroSimple slots="heading, text"/>

# Adobe Connect SDK

Adobe Connect enables customer to extend the out-of-the-box functionality of Adobe Connect using custom pods developed with standard web technologies such as HTML, Javascript, and CSS.

<Resources slots="heading, links"/>

#### Resources

* [Quickstart Guide](https://developer.adobe.com)
* [Cat Analytics Github Repo](https://github.com/AdobeDocs/dev-site)

## Overview

This documentation provides instructions for Adobe Connect Custom Pods SDK Documentation v11. For working with Cat Analytics APIs, see [Cat Analytics API Documentation](https://github.com/AdobeDocs/dev-site).

Custom pods can be used to allow multi-user interactions within a session, they can provide a synchronized display of information for all users and can even send and receive data from external websites. Simple examples include a countdown-timer that lets a host show everyone when the meeting will start, or an interactive game that displays a leaderboard with all the participants’ scores, or a map application that combines user location data with map data from an external mapping website. 

## Getting Started

<DiscoverBlock width="100%" slots="heading, link, text"/>

### Get Started

[Quickstart Guide](guides/)

Get started with the Cat Analytics APIs.

<DiscoverBlock slots="heading, link, text"/>

### Guides

[Calculated Metrics API](guides/dummy_metrics_api/)

Returns information on the user's company that is necessary for making other Cat Analytics API calls.

<DiscoverBlock slots="link, text"/>

[Segments API](guides/dummy_oauth_client/)

Provides configuration guidance and best practices for the /segments endpoint.

<DiscoverBlock slots="link, text"/>

[Reporting Guide API](guides/dummy_using_postman/)

Provides configuration guidance and best practices for the /reports endpoint.

<DiscoverBlock slots="link, text"/>

[Migrating from 1.4 to 2.0](guides/migrating/)

For help migrating from the 1.4 versions of the Analytics API to the newer and more capable /reports API.

<DiscoverBlock width="100%" slots="heading, link, text"/>

### API References

[Try the API](api/)

Try the Analytics API with Swagger UI. Explore, make calls, with full endpoint descriptions.

## Contributing

We encourage you to participate in our open documentation initiative, if you have suggestions, corrections, additions
or deletions for this documentation, check out the source from [this github repo](https://github.com/adobe/gatsby-theme-spectrum-example), and submit a pull
request with your contribution. For more information, refer to the [contributing page](support/contribute/).

## API Requests & Rate Limits

The timeout for API requests through adobe.io is currently *60 seconds*.

The default rate limit for an Cat Analytics Company is *120 requests per minute*. (The limit is enforced as *12 requests every 6 seconds*).
When rate limiting is being enforced you will get `429` HTTP response codes with the following response body: `{"error_code":"429050","message":"Too many requests"}`.
