import { OutputTarget } from '../OutputTarget';
import fs from 'fs';

export class HtmlReport implements OutputTarget {
  constructor(private filename: string) {}
  print(report: string): void {
    const html = `
      <div>
        <h1>Analysis Output</h1>
        <div>${report}</div>
      </div>
    `;

    fs.writeFileSync(`${this.filename}.html`, html);
  }
}
