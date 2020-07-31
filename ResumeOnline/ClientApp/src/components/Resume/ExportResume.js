import React from "react";
import resumeData from "./Resume";
var themeIn = require("modern");


var path = require('path');
//var puppeteer = require('puppeteer');
var btoa = require('btoa');

var SUPPORTED_FILE_FORMATS = ["html", "pdf"];

var resumeData1 = "";

export default function ExportResume(resumeJson, fileName, theme, format, callback) {
  if (!fileName) {
    console.error("Please enter a export destination.");
    return;
  }
    resumeData1 = resumeJson;
    var fileNameAndFormat = getFileNameAndFormat(fileName, format);
    fileName = fileNameAndFormat.fileName;
    var fileFormatToUse = fileNameAndFormat.fileFormatToUse;
    var format = "." + fileFormatToUse;
    if (format === '.html') {
      createHtml(resumeJson, fileName, theme, format, function (error) {
        if (error) {
          console.error(error, "`createHtml` errored out");
        }
        callback(error, fileName, format);
      });
    }
    //else if (format === '.pdf') {
    //  createPdf(resumeJson, fileName, theme, format, function (error) {
    //    if (error) {
    //      console.error(error, "`createPdf` errored out");
    //    }
    //    callback(error, fileName, format);
    //  });
    //}

    else {
      console.error(`JSON Resume does not support the ${format} format`);
      return;
    }
};

function extractFileFormat(fileName) {
  var dotPos = fileName.lastIndexOf('.');
  if (dotPos === -1) {
    return null;
  }
  return fileName.substring(dotPos + 1).toLowerCase();
}

function downloadTxtFile(resumeJson, fileName, theme, format, callback) {
    //const element = document.createElement("a");
    ////const file = new Blob(resumeJson, { type: 'text/plain' });
    //element.href = URL.createObjectURL(fileName);
    //element.download = "myFile.txt";
    //document.body.appendChild(element); // Required for this to work in FireFox
    //element.click();
}

function createHtml(resumeJson, fileName, theme, format, callback) {
    downloadTxtFile(resumeJson, fileName, theme, format, callback);
  var html = renderHtml(resumeJson, theme);
  //var stream = fs.createWriteStream(path.resolve(process.cwd(), fileName + format));

  //stream.write(html, function (error) {
  //  if (error) {
  //    return callback(error);
  //  }
  //  stream.close(callback);
  //});
}

const getThemePkg = theme => {
    var resumeSchema = require('resume-schema');

    try {
        //var resumeObject = JSON.parse(resumeData1);
        resumeSchema.validate(resumeData1);
        const themePkg = { themeIn };
    return themePkg;
  } catch (err) {
    // Theme not installed
    console.log(err+' - You have to install this theme relative to the folder to use it e.g. `npm install ' + theme + '`');
    return;
  }
};

const getMethods = (obj) => {
    let properties = new Set()
    let currentObj = obj
    do {
        Object.getOwnPropertyNames(currentObj).map(item => properties.add(item))
    } while ((currentObj = Object.getPrototypeOf(currentObj)))
    return [...properties.keys()].filter(item => typeof obj[item] === 'function')
}

const renderHtml = (resumeJson, theme) => {
    const themePkg = getThemePkg(theme);
    debugger;
    const test = getMethods(themeIn);
     
    const contents = themePkg(resumeJson);
  return contents;
};

//const createPdf = (resumeJson, fileName, theme, format, callback) => {
//  (async () => {
//    const html = renderHtml(resumeJson, theme);
//    const themePkg = getThemePkg(theme);
//    const puppeteerLaunchArgs = [];

//    if (process.env.RESUME_PUPPETEER_NO_SANDBOX) {
//      //puppeteerLaunchArgs.push('--no-sandbox');
//    }

//    //const browser = await puppeteer.launch({
//      //args: puppeteerLaunchArgs
//    //});
//    //const page = await browser.newPage();

//    await page.emulateMedia(themePkg.pdfRenderOptions && themePkg.pdfRenderOptions.mediaType || 'screen');
//    await page.goto(`data:text/html;base64,${btoa(unescape(encodeURIComponent(html)))}`, { waitUntil: 'networkidle0' });
//    await page.pdf({
//      path: fileName + format,
//      format: 'Letter',
//      printBackground: true,
//      ...themePkg.pdfRenderOptions
//    });

//    //await browser.close();
//  })().then(callback).catch(callback);
//};

function getFileNameAndFormat(fileName, format) {
  var fileFormatFound = extractFileFormat(fileName);
  var fileFormatToUse = format;
  if (format && fileFormatFound && format === fileFormatFound) {
    fileName = fileName.substring(0, fileName.lastIndexOf('.'));
  } else if (fileFormatFound) {
    fileFormatToUse = fileFormatFound;
    fileName = fileName.substring(0, fileName.lastIndexOf('.'));
  }

  return {
    fileName: fileName,
    fileFormatToUse: fileFormatToUse
  };
}