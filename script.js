function importCSVFromWeb() {

  var csvUrl = "xxxxxx.csv";
  var csvContent = UrlFetchApp.fetch(csvUrl).getContentText();
  var csvData = Utilities.parseCsv(csvContent);

  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.getRange(1, 1, csvData.length, csvData[0].length).setValues(csvData);

}

function importCSVZIPFromWeb() {

  var csvUrl ='xxxxxxx.zip'
  var csvContent = UrlFetchApp.fetch(csvUrl);
  var files = Utilities.unzip(csvContent)[0];
  var csvData = Utilities.parseCsv(files.getDataAsString());

  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.getRange(1, 1, csvData.length, csvData[0].length).setValues(csvData);

}
