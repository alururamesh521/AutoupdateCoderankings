# AutoupdateCoderankings
"I have created an innovative autoupdate leaderboard script designed to simplify the process of updating leaderboards. Crafted with Google's Apps Script, this script fetches and updates ratings from LeetCode, CodeChef, and Codeforces every hour. It provides a dynamic showcase of programming prowess, allowing users to stay ahead of the curve in tracking coding excellence effortlessly."

How it works??
Just copy paste the Code form AutoupdateCoderankings/src/Codingrankings.gs and paste in your Googleappscript
Make sure to Change the SheetID and Sheetname 

Sheet input should be 

![Screenshot 2024-05-22 110950](https://github.com/alururamesh521/AutoupdateCoderankings/assets/142136138/a2da6d2b-4297-4e4e-b0b5-dae45317886b)

After running the Google apprscript 
The Sheet will update as below


![Screenshot 2024-05-22 110931](https://github.com/alururamesh521/AutoupdateCoderankings/assets/142136138/f3e31971-f48a-44d0-95b7-de8ba5ae7862)

Set a Trigger for autoupdate on hourly based in ur script 
To set the Trigger in GoogleAppscript Follow the below steps
Triggers> AddTriggers> select event source as Timedriven> time based Trigger as Hour timer> and then save the trigger

Once done with setting Trigger it will autoupdate every hour!!
