import { Analyzer } from '../Analyzer';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

export class WinsAnalysis implements Analyzer {
  constructor(private team: string) {}

  run(matches: MatchData[]): string {
    let winsCounter = 0;

    for (const match of matches) {
      if (
        (match[1] === this.team && match[5] === MatchResult.HomeWin) ||
        (match[2] === this.team && match[5] === MatchResult.AwayWin)
      ) {
        winsCounter++;
      }
    }

    return `Team ${this.team} won ${winsCounter} games`;
  }
}
