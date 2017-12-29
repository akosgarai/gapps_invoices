function doGet() {
  var result = HtmlService.createTemplateFromFile('invoice');
  // Build and return HTML in IFRAME sandbox mode.
  return result.evaluate()
      .setTitle('invoice app')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

/**
 * private function, returns the opened spreadsheet.
 */
function openSheet_(type) {
  var inputId;
  switch(type) {
    case "settings":
      inputId = "1iMnl9EhAVncBBiZjjSj3uo_u8NReArSAp2wvGhLszbM";
      break;
  }  
  return SpreadsheetApp.openById(inputId);
}

function saveInvoice (invoiceObject) {
  return saveInvoice_(invoiceObject);
}

function saveInvoice_(invoiceObject) {
  var spreadsheet = openSheet_('settings');
  var sheet = spreadsheet.getSheetByName('invoices_playground');
  if (typeof (invoiceObject['id']) == 'undefined') {
    var newId = getNewId_(sheet);
    var row = [
      newId,
      invoiceObject['selectedProviderId'],
      invoiceObject['selectedServiceId'],
      invoiceObject['invoiceId'],
      invoiceObject['arriveDateString'],
      invoiceObject['validDateString'],
      invoiceObject['payedDateString'],
      '',
      invoiceObject['amount']
    ];
    sheet.appendRow(row);
    return {'status' : 'saved', 'id' : newId};
  } else {
    var row = [
      invoiceObject['id'],
      invoiceObject['selectedProviderId'],
      invoiceObject['selectedServiceId'],
      invoiceObject['invoiceId'],
      invoiceObject['arriveDateString'],
      invoiceObject['validDateString'],
      invoiceObject['payedDateString'],
      '',
      invoiceObject['amount']
    ];
    var resp = insertRowById_(row, sheet);
    return resp;
  }
}

function insertRowById_(row, sheet) {
  var toFind = row[0];
  var ranges = sheet.getRange(2,1,sheet.getLastRow(), 1).getValues();
  for (var r in ranges) {
    if (String(ranges[r]) == toFind) {
      var insertRange = sheet.getRange(r+2, 1, 1, row.length);
      insertRange.setValues([row]);
      return {'status' : 'update', 'id' : row[0]};
    }
  }
}

function getNewId_(sheet) {
  var range = sheet.getRange(2,1,sheet.getLastRow(), 1).getValues();
  var maxIndex = 0;
  for (var r in range) {
    var num = parseInt(String(range[r]), 10);
    if (num > maxIndex) {
      maxIndex = num;
    }
  }
  ++maxIndex;
  return maxIndex;
}

function getDateFromColIndex (index) {
  // index = 0 -> 2014.06
  // index = 6 -> 2014.12
  // index = 7 -> 2015.01
  // index = 18 -> 2015.12
  // index = 19 -> 2016.01
  var dateString = '';
  if (index < 7) {
    dateString = dateString + '2014.';
  } else if (index < 19) {
    dateString = dateString + '2015.';
  } else {
    dateString = dateString + '2016.';
  }
  var month = (index % 12) + 6;
  if (month > 12) {
    month = month % 12;
  }
  if (month < 10 && month[0] != '0') {
    month = '0' + month;
  }
  dateString = dateString + '' + month + '.';
  return dateString;
}

function invoicesDumpFromOldSheet () {
  //open old sheet, get active sheet
  var startCol = 6;
  var oldSpreadSheet = SpreadsheetApp.openById('15FXj6ekZnNoYwLHAD9DS3i2fZvqlFVdEtqzpoxYWebQ');
  var oldSheet = oldSpreadSheet.getActiveSheet(); 
  //get range with all relvant invoices data
  var dump = [];
  var range = oldSheet.getRange(2, startCol, 4, oldSheet.getMaxColumns()-startCol+1).getValues();
  //construct the relevant format [id, providerid, serviceid, invoiceid, arrivedate, validdate, payeddate, interval, amount]
  for (var i in range[0]) {
    for (var j = 0; j < 4; j++) {
      if (String(range[j][i]) != '') {
        var row = ['', '', '', '', '', '', '', '', ''];
        row[8] = String(range[j][i]);
        switch (j) {
          case 0:
            row[1] = '1';
            row[2] = '1';
            break;
          case 1:
            row[1] = '2';
            row[2] = '2';
            break;
          case 2:
            row[1] = '3';
            row[2] = '3';
            break;
          case 3:
            row[1] = '4';
            row[2] = '4';
            break;
        }
        var baseDate = getDateFromColIndex(i);
        row[4] = baseDate + '07';
        row[5] = baseDate + '20';
        row[6] = baseDate + '15';
        dump.push(row);
      }
    }
  }
  //open new sheet, get playground range for testing purposes
  var newSpreadSheet = SpreadsheetApp.openById('1iMnl9EhAVncBBiZjjSj3uo_u8NReArSAp2wvGhLszbM');
  var playground = newSpreadSheet.getSheetByName('invoices_playground');
  //get max id from sheet
  var newId = getNewId_(playground);
  for (var r in dump) {
    var idString = String(newId);
    dump[r][0] = idString;
    //insert constructed rows to new sheet (with incremented id)
    playground.appendRow(dump[r]);
    newId = parseInt(newId + 1);
  }
  //Logger.log(dump);
}

function regexTest () {
  var msg = 'Tisztelt Garai Ákos!             (Bejelentkezési neve: akos.garai)\n'
 + 'A számla főbb adatai:\n'
 + "\n"
 + 'Számlakibocsátó : Invitel Távközlési Zrt.\n'
 + 'Ügyfélazonosító : 41001411516-700098869 (Invitel Internet)\n'
 + "\n"
 + 'Számlaszám : 700011160670009886900343\n'
 + 'Szolgáltató : Invitel Zrt.\n'
 + 'Fizetési határidő : 2016.07.21.\n'
 + 'Összeg : 6140 Ft\n'
 + "\n"
 + "\n"
 + 'A számla tartalmával kapcsolatos észrevételeit a számla "Észrevételek" füleslapjáról indított üzenetében, vagy a Számlakibocsátó egyéb elérhetőségein jelezheti.\n'
 + 'Üdvözlettel, Díjnet ügyfélszolgálat\n'
 + 'www.dijnet.hu';
 var match = msg.match(/Számlaszám :(.)*/g);
 var index = match[0].indexOf(':');
 var parts = match[0].slice(index+2);
 Logger.log([parts, index, match]);
}
function getInfoFromDijnet (msg) {
  var accountNumber = getAccountNumber_(msg);
  var provider = getProvider_(msg);
  var userId = getUserId_(msg);
  var amount = getAmount_(msg);
  var deadline = getDeadline_(msg);
  return {
    'invoiceId': accountNumber,
    'provider': provider,
    'userId': userId,
    'amount': amount,
    'deadline': deadline
  };
}

function getAccountNumber_(msg) {
 var match = msg.match(/Számlaszám :(.)*/g);
 var index = match[0].indexOf(':');
 var parts = match[0].slice(index+2);
 return parts;
}
function getDeadline_(msg) {
 var match = msg.match(/Fizetési határidő :(.)*/g);
 var index = match[0].indexOf(':');
 var parts = match[0].slice(index+2);
 return parts;
}
function getAmount_(msg) {
 var match = msg.match(/Összeg :(.)*/g);
 var index = match[0].indexOf(':');
 var parts = match[0].slice(index+2);
 return parts;
}
function getProvider_(msg) {
 var match = msg.match(/Szolgáltató :(.)*/g);
 var index = match[0].indexOf(':');
 var parts = match[0].slice(index+2);
 return parts;
}
function getUserId_(msg) {
 var match = msg.match(/Ügyfélazonosító :(.)*/g);
 var index = match[0].indexOf(':');
 var parts = match[0].slice(index+2);
 return parts;
}

function isInvoiceFromDijnet_(subject) {
  if (subject == 'Díjnet számla érkezett') {
    return true;
  }
  return false;
}

function dijnetMap_(provider, userId) {
  var sheet = SpreadsheetApp.openById('1iMnl9EhAVncBBiZjjSj3uo_u8NReArSAp2wvGhLszbM').getSheetByName('Dijnet-map');
  var range = sheet.getRange(2, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues();
  for (var row in range) {
    var values = range[row];
    if (String(values[0]) == provider && String(values[1]) == userId) {
      return {'providerId' : String(values[2]), 'serviceId' : String(values[3])};
    }
  }
}

function getEmailsByLabel(labelName) {
  if (typeof (labelName) == 'undefined') {
    var labelName = 'szolgaltatok/dijnet';
  }
  var emails = GmailApp.getUserLabelByName(labelName).getThreads();
  for (var key in emails) {
    var messages = emails[key].getMessages();
    for (var m in messages) {
      var subject = messages[m].getSubject();
      var sender = messages[m].getFrom();
      var msg = messages[m].getPlainBody();
      //Logger.log(msg);
      //var providerRow = msg.match('/Számlakibocsátó :/g');
      if (isInvoiceFromDijnet_(subject)) {
        var data = getInfoFromDijnet(msg)
        Logger.log(data);
        Logger.log(dijnetMap_(data['provider'], data['userId']));
      }
    }    
  }
}