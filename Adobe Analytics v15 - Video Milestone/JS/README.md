# Video Milestone and Adobe Analytics V15: Steps for JS player implementation

## Prerequisites

Please make sure the [prerequisites](https://github.com/alcazes/Video-in-Adobe-Analytics-V15/blob/master/Adobe%20Analytics%20v15%20-%20Video%20Milestone/README.md). You will find the steps to enable Video Reporting which is the first step.

## Steps to enable Video Milestone tracking for Adobe Analytics

### First Step: Configure Video reporting in Adobe Analytics V15

Steps described [here](https://github.com/alcazes/Video-in-Adobe-Analytics-V15/blob/master/Adobe%20Analytics%20v15%20-%20Video%20Milestone/README.md).

### Second Step: Configure the Media Module settings

#### Download and add Media Module

1. Go to Code Manager
![code manager](https://github.com/alcazes/Video-in-Adobe-Analytics-V15/blob/master/Adobe%20Analytics%20v15%20-%20Video%20Milestone/doc/images/Code%20manager.png)
2. Download the zip file for the New JS AppMeasurement library
![AppMeasurement zip](https://github.com/alcazes/Video-in-Adobe-Analytics-V15/blob/master/Adobe%20Analytics%20v15%20-%20Video%20Milestone/doc/images/AppMeasurementjs.png)
3. Extract Media module library
![Media Module](https://github.com/alcazes/Video-in-Adobe-Analytics-V15/blob/master/Adobe%20Analytics%20v15%20-%20Video%20Milestone/doc/images/Media%20Module.png)
4. Add Media Module Library to your AppMeasurement.js file
```javascript
code to add here
```

#### Configure Media Milestone tracking

### Third Step: Call Media Module methods at the right time