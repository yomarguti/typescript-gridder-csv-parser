import { Analyzer } from '../Analyzer';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

type Accumulator = {
  [key: string]: number;
};

export class MostMatchWinsAnalysis implements Analyzer {
  run(matches: MatchData[]): string {
    const winnersData = matches.reduce<Accumulator>((acc, current: MatchData): Accumulator => {
      if (current[5] === MatchResult.Draw) return acc;

      const homeTeam = current[1];
      const awayTeam = current[2];
      if (current[5] === MatchResult.HomeWin) {
        acc[homeTeam] = (acc[homeTeam] || 0) + 1;
      } else {
        acc[awayTeam] = (acc[awayTeam] || 0) + 1;
      }

      return acc;
    }, {});

    let mostWinnerTeam = '';
    let matchWons = 0;

    Object.keys(winnersData).forEach((team: string) => {
      if (winnersData[team] > matchWons) {
        mostWinnerTeam = team;
        matchWons = winnersData[team];
      }
    });

    return `The most match winner team is ${mostWinnerTeam} and won ${matchWons} games`;
  }
}
