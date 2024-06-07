# AutoupdateCoderankings

Welcome to AutoupdateCoderankings! This innovative leaderboard script simplifies the process of updating leaderboards by fetching and updating ratings from LeetCode, CodeChef, and Codeforces every hour. Crafted with Google's Apps Script, it offers a dynamic showcase of programming prowess, enabling users to effortlessly track coding excellence.

## How it works?

1. **Copy-Paste Code**: Simply copy the code from `AutoupdateCoderankings/src/Codingrankings.gs` and paste it into your Google Apps Script.

2. **Set SheetID and Sheetname**: Make sure to customize the script by changing the SheetID and Sheetname as required.

3. **Sheet Input Format**:
   ![Screenshot 2024-05-22 110950](https://github.com/alururamesh521/AutoupdateCoderankings/assets/142136138/a2da6d2b-4297-4e4e-b0b5-dae45317886b)

4. **After running the Google Apps Script**:
   The Sheet will update as below
   ![Screenshot 2024-05-22 110931](https://github.com/alururamesh521/AutoupdateCoderankings/assets/142136138/f3e31971-f48a-44d0-95b7-de8ba5ae7862)

5. **Set a Trigger for autoupdate on hourly basis**: 
   To set the Trigger in Google Apps Script, follow the below steps:
   - Triggers > Add Triggers > select event source as Time-driven > time-based Trigger as Hour timer > and then save the trigger.
   Once done with setting Trigger, it will autoupdate every hour!!
