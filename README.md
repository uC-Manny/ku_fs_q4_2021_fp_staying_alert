<h1> KU FS Q4 2021 - Final Project : Staying Alert</h1>
<br>
<div align="center"><b><font size="5">Kingsland university Full Stack Q4 2021 Cohort</font></b></div>
<br>
<b>Project Team Members:</b> Stephen Svetlovics, James Ingram II and Manuel "Manny" Muro
<br>
<h2> Project Description </h2>

The purpose behind the “Staying Alert” project was to serve as a software version of the “Medical Alert” bracelets and necklaces, used in the past, to warn others that the person wearing the medical alert item as having a medical condition that should the wearer need help that information would be taken into consideration and be made readily available. However, what if someone does not have a medical condition, but is involved in a situation that other people should be notified that a given person needs help, think amnesia or dementia, but there are probably other such conditions where getting in touch with others, such as a lot child, connecting with others can be extremely helpful.  As we brainstormed, we also saw the need beyond just medical conditions, such as people going on a date or sleep-over, so we identified two types of “Alerts”: 1) Assistance and 2) Check-In Alerts. The Assistance type alerts will cover medical conditions and general unplanned needs for assistance, such that there will only be one assistance alert per person. Check-In alerts can be multiple such that the people to do a date based check-in may be different than an emergency based alerts.

Depending on the nature of the alert(s), it might be desirable for a user of the “Staying Alert” system to set up alerts for other people such as for their children or elderly parents. For this reason, as the user of the system adds people via their account, they also need to indicate if the person that they are adding is a “self” entry. While a user can enter several people, there can only be one person tagged as “self”. This individual should also set up an assistance alert for themself, so that such assistance information can be used for their benefit as well; ideally via an emergency alert button that is accessible on their smartphone even if the phone is locked.

Aside from the option to access the emergency assistance alert information from a person’s smart, and really independent of the smartphone itself, for each person a unique QSR code will be generated that contains the URL information to access the emergency assistance information for the person needing assistance, but underneath or around the QSR code will be a human readable version of the URL, so that if someone else has a device that can access the internet they can access the assistance alert information, and the key point being without needing to log into the application. On this page, the person providing assistance will be presented with a form that will allow them to provide: 1) their name 2) their contact information and 3) a message as to why assistance is needed. That information will then be sent to the person, or group of persons, listed as being the contact(ees) for the person in need of assistance.

Check-in alerts will be more involved, with information relating to the duration and frequency of check-ins related activities. Additionally, unlike assistance alerts, check-in alerts can be activated and deactivated as they may not always be needed.

# Downloading And Running The Project Locally On FS Dev Machine
This project is an open source project because we, as a team, feel that a project of this nature can be truly helpful for ALL of humanity and that being keep safe, healthy and alive, should not come at a cost. While this project is just based on a 2-week class project, we hope that others might add to the project the future.

The code as is **NOT** meant for the general public, but rather for people with knowledge of: 
* HTML
* CSS
* JavaScript
* REACT
* Node & Node.js
* MongoDB & Mongoose
* Formik

First thing to do is clone the repo locally on a Full Stack development system with the following command:
> **git clone https://github.com/uC-Manny/ku_fs_q4_2021_fp_staying_alert.git**

There are probably very few developers who have not been exposed to or used Visual Studio Code, a.k.a. VSCode, so the rest of the instructions for simplicity will make this assumption! ;-)

To help keep this code system independent, system specific packages are not included in the repo but need to be pulled into the code base in order to run the code. So the next step is to pull in the proper package dependencies in both the "client" and "server" side. From the projects base directory switch to both the "client" and "server" directories separate, i.e. the command needs to be done twice, and then type the following command from within a VSCode terminal command view:
> **npm install**

Again, this command needs to be done twice, one in the "..../ku_fs_q4_2021_fp_staying_alert/client/" directory and the "..../ku_fs_q4_2021_fp_staying_alert/server/"

In the VSCode terminal from the project base directory "..../ku_fs_q4_2021_fp_staying_alert/" create a split terminal view so that there are two separate terminal views.

In one of the terminal views type the follwoing commands:
> **cd server**
> **npm start**

In the other terminal view type the following commands:
> **cd client**
> **npm start**

At this point, the Back-End (server) is running and the Front-End (client) is running and a browser view will automatically come up.

Thanks for taking the time to review and consider our project worthy of your time!

Sincerely,


Stephen, James and Manny
