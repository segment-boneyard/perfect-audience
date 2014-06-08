
# perfect-audience

  Query the [Perfect Audience](http://perfectaudience.com/) reporting API from node.

## Installation

    $ npm install perfect-audience

## Example

Create a new Perfect Audience instance, and [authenticate](http://support.perfectaudience.com/knowledgebase/articles/233919-reporting-api#data-api-authenticating) with an `email` and `password`:

```js
var pa = require('perfect-audience')('email', 'password');
```

Then you can query a campaign report:

```js
pa.campaigns(function (err, campaigns) {
  console.log(campaigns);
});
```

```
[
    {
      "campaign_id": "941e29f625f97b74620000e7",
      "impressions": 78817,
      "clicks": 164,
      "costs": 149.437427,
      "click_conversions": 2,
      "view_conversions": 5,
      "campaign_name": "Site Retargeting",
      "conversions": 7,
      "ctr": 0.0020807693771648247,
      "cpc": 0.9112038231707318,
      "conversion_rate": 0.042682926829268296,
      "cpm": 1.896005011609171
    },
    {
      "campaign_id": "82e0ecd0512c76000824019b",
      "impressions": 51955,
      "clicks": 54,
      "costs": 12.574825,
      "click_conversions": 3,
      "view_conversions": 5,
      "campaign_name": "Facebook Retargeting",
      "conversions": 8,
      "ctr": 0.0010393609854681936,
      "cpc": 0.23286712962962963,
      "conversion_rate": 0.14814814814814814,
      "cpm": 0.24203300933500146
    },
  ]
```

## License

MIT