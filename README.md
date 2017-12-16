# Twilio Tasks

## Description

Twilio Tasks taska allows a user to create a task to a special phone number.  This task is sent via a text that includes the Task Title, Task Category, and the Task Contents.  A confirmation text will be sent to the creator of the task.  This task will then be displayed on the app under the correct category.

This app lists all tasks that are sorted reverse chronologically and by category.  Users must be registered or signed in to comment on a task.  When a user responds to a task, a text message will be sent to the creator of the text.  The profile of the person who responded to the task will be provided on the text message in order to facilitate collaboration.

## Installation

1. Navigate to [the site](https://jkcodes-tasks.herokuapp.com/)

2. Send a text to this number: (646) 679-6859
  * Please make sure that your text is in this format.  'Title. Category. Description'.  Those periods are mandatory so that the app knows how to parse the text.  One example would be the following:
  ```
  Walk my dog. Dog Walking. Time to walk my dog today
  ```

3. You can also clone the repo, but you will need to create a Twilio Account, pay money for each text, pay money for a phone number, and also deploy the project to Heroku or similar platform.  It is recommended to just follow step 1 to 2.