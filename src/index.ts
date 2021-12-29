import { MostMatchWinsAnalysis } from './Analyzers/MostMatchWinsAnalysis';
import { WinsAnalysis } from './Analyzers/WinsAnalysis';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './Reports/ConsoleReport';
import { HtmlReport } from './Reports/HtmlReport';
import { Summary } from './Summary';

//const csvFileReader = new CsvFileReader('football.csv');
//const matchReader = new MatchReader(csvFileReader);

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
summary.buildAndPrintReport(matchReader.matches);

const newSummary = Summary.winsAnalysisAndReport('Man United');
newSummary.buildAndPrintReport(matchReader.matches);

const aSummary = new Summary(new MostMatchWinsAnalysis(), new ConsoleReport());
aSummary.buildAndPrintReport(matchReader.matches);
