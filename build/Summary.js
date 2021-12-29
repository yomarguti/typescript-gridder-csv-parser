"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const TeamMostScoredGoalsAnalyst_1 = require("./Analyzers/TeamMostScoredGoalsAnalyst");
const WinsAnalysis_1 = require("./Analyzers/WinsAnalysis");
const ConsoleReport_1 = require("./Reports/ConsoleReport");
const HtmlReport_1 = require("./Reports/HtmlReport");
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    static winsAnalysisAndReport(team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new ConsoleReport_1.ConsoleReport());
    }
    static mostScoredGoalsAnalystAndReport() {
        return new Summary(new TeamMostScoredGoalsAnalyst_1.TeamMostScoredGoalsAnalyst(3), new HtmlReport_1.HtmlReport('most-scored-report'));
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
