var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://unicavmdemo:7001/interact/servlet/RestServlet",
  "method": "POST",
  "headers": {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-cache",
    "postman-token": "5fb424dd-5936-65d9-ccf2-277d59bb1e28"
  },
  "data": "{\r\n  \"sessionId\": \"123\",\r\n  \"commands\": [\r\n    {\r\n      \"audienceLevel\": \"Individual\",\r\n      \"debug\": true,\r\n      \"action\": \"startSession\",\r\n      \"ic\": \"Towne Bank Website Channel\",\r\n      \"relyOnExistingSession\": false,\r\n      \"audienceID\": [\r\n        {\r\n          \"t\": \"numeric\",\r\n          \"v\": 444,\r\n          \"n\": \"Indiv_ID\"\r\n        }\r\n      ]\r\n    },\r\n    {\r\n      \"numberRequested\": 1,\r\n      \"action\": \"getOffers\",\r\n      \"ip\": \"AccountsPageOffers\"\r\n    }\r\n  ]\r\n}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});