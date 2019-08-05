// import { ... } from 'espn-fantasy-football-api'; // web
// import { ... } from 'espn-fantasy-football-api/node'; // node
// import { ... } from 'espn-fantasy-football-api/web-dev'; // web development build
// import { ... } from 'espn-fantasy-football-api/node-dev'; // node development build

import { Client } from 'espn-fantasy-football-api';
const myClient = new Client({ leagueId: 432132 });

myClient.setCookies({ espnS2: 'YOUR_ESPN_S2', SWID: 'YOUR_SWID' });

myClient.getBoxscoreForWeek({ seasonId: 2018, scoringPeriodId: 1, matchupPeriodId: 1 }).then((boxscores) => {
    // Do whatever with boxscores
});

myClient.getFreeAgents({ seasonId: 2018, scoringPeriodId: 1 }).then((freeAgents) => {
    // Do whatever with free agents
});

myClient.getTeamsAtWeek({ seasonId: 2018, scoringPeriodId: 1 }).then((teams) => {
    // Do whatever with teams
  });
