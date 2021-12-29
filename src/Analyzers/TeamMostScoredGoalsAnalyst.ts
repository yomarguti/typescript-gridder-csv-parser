import { Analyzer } from '../Analyzer';
import { MatchData } from '../MatchData';

type Accumulator = {
  [key: string]: number;
};

export class TeamMostScoredGoalsAnalyst implements Analyzer {
  constructor(private nTopTeams: number = 1) {}

  run(matches: MatchData[]): string {
    let goalsPerTeam: Accumulator = {};

    matches.forEach((match: MatchData) => {
      const homeTeam = match[1];
      const awayTeam = match[2];
      goalsPerTeam[homeTeam] = (goalsPerTeam[homeTeam] || 0) + match[3];
      goalsPerTeam[awayTeam] = (goalsPerTeam[awayTeam] || 0) + match[4];
    });

    const goalsScore = Object.keys(goalsPerTeam)
      .map((teamName: string) => {
        return {
          team: teamName,
          goals: goalsPerTeam[teamName],
        };
      })
      .sort((a, b) => (a.goals > b.goals ? -1 : 1))
      .slice(0, this.nTopTeams)
      .map((item, index) => `${index + 1}- ${item.team}   Goals: ${item.goals}`)
      .join('\n');

    return goalsScore;
  }
}
