"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMostScoredGoalsAnalyst = void 0;
class TeamMostScoredGoalsAnalyst {
    constructor(nTopTeams = 1) {
        this.nTopTeams = nTopTeams;
    }
    run(matches) {
        let goalsPerTeam = {};
        matches.forEach((match) => {
            if (match.length) {
                const homeTeam = match[1];
                const awayTeam = match[2];
                goalsPerTeam[homeTeam] = (goalsPerTeam[homeTeam] || 0) + match[3];
                goalsPerTeam[awayTeam] = (goalsPerTeam[awayTeam] || 0) + match[4];
            }
        });
        const goalsScore = Object.keys(goalsPerTeam)
            .map((teamName) => {
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
exports.TeamMostScoredGoalsAnalyst = TeamMostScoredGoalsAnalyst;
