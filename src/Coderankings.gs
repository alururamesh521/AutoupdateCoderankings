// Function to update ratings for all users in the spreadsheet
function updateRatings(sheetId, sheetName) {
  try {
    var sheet = SpreadsheetApp.openById('SheetID').getSheetByName('SheetName');
    if (!sheet) {
      throw new Error("Sheet '" + sheetName + "' not found.");
    }

    var lastRow = sheet.getLastRow();
    if (lastRow == 0) {
      Logger.log("Sheet '" + sheetName + "' is empty.");
      return;
    }

    var range = sheet.getRange("A2:I" + (lastRow + 1));
    var data = range.getValues();

    // Loop through each row and update ratings
    for (var i = 0; i < data.length; i++) {
      var leetCodeUsername = data[i][1];
      var codeChefHandle = data[i][3];
      var codeforcesHandle = data[i][5];
      

      // Update LeetCode rating
      var leetCodeRating = getLeetCodeRating(leetCodeUsername);
      if (leetCodeRating !== null) {
        sheet.getRange(i + 2, 3).setValue(leetCodeRating);
      }

      // Update CodeChef rating
      var codeChefRating = getCodeChefRating(codeChefHandle);
      if (codeChefRating !== null) {
        sheet.getRange(i + 2, 5).setValue(codeChefRating);
      }

      // Update Codeforces rating
      var codeforcesRating = getCodeforcesRating(codeforcesHandle);
      if (codeforcesRating !== null) {
        sheet.getRange(i + 2, 7).setValue(codeforcesRating);
      }


      // Sleep for 1 second to avoid rate limiting
      Utilities.sleep(1000);
    }
  } catch (error) {
    Logger.log("Error updating ratings: " + error);
  }
}

// Function to fetch LeetCode user's rating using GraphQL
function getLeetCodeRating(username) {
  try {
    var apiUrl = 'https://leetcode.com/graphql';
    var query = `
      query {
        userContestRanking(username: "${username}") {
          rating
        }
      }
    `;
    var payload = JSON.stringify({ query: query });
    var options = {
      method: 'post',
      contentType: 'application/json',
      payload: payload,
    };

    var response = UrlFetchApp.fetch(apiUrl, options);
    if (response.getResponseCode() === 200) {
      var data = JSON.parse(response.getContentText());
      if (data.hasOwnProperty('data') && data.data.hasOwnProperty('userContestRanking')) {
        return data.data.userContestRanking.rating;
      } else {
        Logger.log('Rating not found for LeetCode username: ' + username);
        return null;
      }
    } else {
      Logger.log('Failed to fetch data for LeetCode username: ' + username);
      return null;
    }
  } catch (error) {
    Logger.log("Error fetching LeetCode rating: " + error);
    return null;
  }
}

// Function to fetch CodeChef user's rating
function getCodeChefRating(handle) {
  try {
    if (!handle) throw new Error("CodeChef handle is blank");

    var url = "https://codechef-api.vercel.app/" + handle;
    var response = UrlFetchApp.fetch(url);

    if (response.getResponseCode() === 200) {
      var jsonContent = response.getContentText();
      var jsonObject = JSON.parse(jsonContent);
      var rating = jsonObject.currentRating || 0;

      return rating;
    } else {
      throw new Error("Failed to fetch data for CodeChef handle: " + handle);
    }
  } catch (error) {
    Logger.log("Error fetching CodeChef rating: " + error);
    return null;
  }
}

// Function to fetch Codeforces user's rating
function getCodeforcesRating(handle) {
  try {
    if (!handle) throw new Error("Codeforces handle is blank");

    var url = "https://codeforces.com/api/user.info?handles=" + handle;
    var response = UrlFetchApp.fetch(url);

    if (response.getResponseCode() === 200) {
      var jsonContent = response.getContentText();
      var jsonObject = JSON.parse(jsonContent);
      var rating = jsonObject.result[0].rating || 0;

      return rating;
    } else {
      throw new Error("Failed to fetch data for Codeforces handle: " + handle);
    }
  } catch (error) {
    Logger.log("Error fetching Codeforces rating: " + error);
    return null;
  }
}
