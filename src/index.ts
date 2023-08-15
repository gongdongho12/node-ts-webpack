import consoleLogo from 'resource/console_logo.txt';
import { argv } from 'process';
// @ts-ignore
import naverCrawlingWithPuppeteer from 'src/runner/naverCrawlingWithPuppeteer';

console.log(consoleLogo);

argv.slice(2).reduce((promise: Promise<any>, runScript: string) => {
  // @ts-ignore
  return promise.then(import(`src/runner/${runScript}`));
}, Promise.resolve<any>(undefined));
