import { Analyzer } from './Analyzer';
import { WinsAnalysis } from './Analyzers/WinsAnalysis';
import { MatchData } from './MatchData';
import { OutputTarget } from './OutputTarget';
import { ConsoleReport } from './Reports/ConsoleReport';
import { HtmlReport } from './Reports/HtmlReport';

export class Summary {
  static winsAnalysisAndReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new ConsoleReport());
  }
  constructor(private analyzer: Analyzer, private outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
