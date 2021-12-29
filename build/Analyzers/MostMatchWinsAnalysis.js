"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MostMatchWinsAnalysis = void 0;
const MatchResult_1 = require("../MatchResult");
class MostMatchWinsAnalysis {
    run(matches) {
        const winnersData = matches.reduce((acc, current) => {
            if (current[5] === MatchResult_1.MatchResult.Draw)
                return acc;
            const homeTeam = current[1];
            const awayTeam = current[2];
            if (current[5] === MatchResult_1.MatchResult.HomeWin) {
                acc[homeTeam] = (acc[homeTeam] || 0) + 1;
            }
            else {
                acc[awayTeam] = (acc[awayTeam] || 0) + 1;
            }
            return acc;
        }, {});
        let mostWinnerTeam = '';
        let matchWons = 0;
        Object.keys(winnersData).forEach((team) => {
            if (winnersData[team] > matchWons) {
                mostWinnerTeam = team;
                matchWons = winnersData[team];
            }
        });
        return `The most match winner team is ${mostWinnerTeam} and won ${matchWons} games`;
    }
}
exports.MostMatchWinsAnalysis = MostMatchWinsAnalysis;
