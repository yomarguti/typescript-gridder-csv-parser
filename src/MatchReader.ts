import { CsvFileReader } from './CsvFileReader';
import { DataReader } from './DataReader';
import { MatchData } from './MatchData';
import { MatchResult } from './MatchResult';
import { dateStringToDate } from './utils';

export class MatchReader {
  static fromCsv(filename: string) {
    return new MatchReader(new CsvFileReader(filename));
  }
  matches: MatchData[] = [];
  constructor(private reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });
  }
}
