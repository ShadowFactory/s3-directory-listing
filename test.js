import 'babel-polyfill';

import { expect } from 'chai';

import { files, directories } from './test/fixtures';
import getDirectoryList from './lib/getDirectoryList';
import getFileList from './lib/getFileList';
import summarizeFileList from './lib/summarizeFileList';

describe('getDirectoryList', () => {
  it('returns directory list', () => {
    const expectedResult = ["demos", "images", "javascripts", "layouts", "stylesheets"];
    expect(getDirectoryList(directories)).to.eql(expectedResult);
  });
});

describe('getFileList', () => {
  it('returns processed file list', () => {
    let result = getFileList(files);
    expect(result.length).to.equal(2);
  });

  it('determines file type', () => {
    let result = getFileList(files);
    expect(result[0].fileType).to.equal("fa-file-code-o");
  });

  it('formats file size', () => {
    let result = getFileList(files);
    expect(result[0].humanSize).to.equal("12.2 kB");
  });

  it('formats date', () => {
    let result = getFileList(files);
    expect(result[0].humanDate).to.equal("July 30th 2017");
  });
});

describe('summarize', () => {
  it('provides a file list summary', () => {
    expect(summarizeFileList(getFileList(files))).to.eql("2 files, 16.2 kB total");
  });
});
