# Video Milestone and Adobe Analytics V15

## Video Milestone and Video Players

Video Milestone implementation logic is exactly the same for all Media/Video players.
This means that the same settings will be used each time and same Video reporting parameters will be enabled in Adobe Analytics V15.
This also means that the same Video Milestone method will be used and they will always be used in the same established order.
Using the steps below, you should be able to implement any existing and future video players.

##Important Notice

SiteCatalyst 14, ExcelClient, and a number of other legacy components will reach end-of-life in September 2016.
This means that all access to the SiteCatalyst 14 user interface and several related features will be removed. 

* Video Milestone implementation enabled only with V14 implementation steps
  * All legacy Video Milestone implementation should still work once SiteCatalyst 14 is sunset.
  * The legacy Video Milestone implementation using eVars and events allocation will still be valid, however it is advised to migrate to solution variables implementation.
* All new implementation should be done using Video reporting settings in Adobe Analytics V15
  * It is advised to use the solution variables implementation, this will save you several eVars and events.
* Video Milestone should not be used if you plan to implement a very heavy/detailed video tracking.
  * You should contact your account manager to discuss the terms of the contract to use Video heartbeat
  * Video heartbeat tracking will be less expensive for heavy/detailed video tracking
* If you only plan to track the fact the customer simply interacted with your video but have no plan to gather details then do not use Video Milestone nor Video heartbeat tracking
  * Instead simply use custom link tracking to send details about video interaction

## Requirements

To be able to implement Video Milestone:
* You need to be customer using Adobe Analytics V15
* You should have implement Adobe Analytics successfully on your website/app
* You will need to have admin rights to enable Video Reporting
* You need to have developers access to update your Video Player code.

## Steps to enable Video Milestone tracking for Adobe Analytics

### First Step: Configure Video reporting in Adobe Analytics V15

* Go to Admin >> Report suite
![admin report suite](https://github.com/alcazes/Video-in-Adobe-Analytics-V15/blob/master/Adobe%20Analytics%20v15%20-%20Video%20Milestone/doc/images/Admin%20-%20Report%20Suite.png)
* Select your report suite then select *Edit Settings* then *Video Management* then *Video reporting*
![Video Reporting](https://github.com/alcazes/Video-in-Adobe-Analytics-V15/blob/master/Adobe%20Analytics%20v15%20-%20Video%20Milestone/doc/images/Video%20Reporting.png)
* Follow the steps in the interface and make to select **Use Solution Variables**

Once you have completed all of the steps and saved the following will happen:
* A set of backend processing rules will be created to automatically map Video reserved variables to the video reports
* In the menu you should now see Video

### Second Step: Configure the Media Module settings

* Media Module Configuration in JS implementation
* Media Module Configuration in Android SDK 4.x implementation
* Media Module Configuration in IOS SDK 4.x implementation