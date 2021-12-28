"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalysis_1 = require("./Analyzers/WinsAnalysis");
const ConsoleReport_1 = require("./Reports/ConsoleReport");
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    static winsAnalysisAndReport(team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new ConsoleReport_1.ConsoleReport());
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
