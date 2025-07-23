# PlayingWithCursor Changelog

## Step 0 - React Setup

![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step0.PNG "Step 0 - PNG")

## Step 1

Prompt text: rewrite to become a react app that looks like a simplistic iphone frame and resolution, and inside add a line of text that says "Hello, World!" 

![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step1-Prompt.PNG "Step 1 - Prompt")
![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step1.PNG "Step 1 - PNG")

## Step 2

Prompt text: let's now make multiple pages, each with basic text denoting the names of them: In a new folder titled "Pages" under "frontend/src", make new files for a Calendar page, ToDo list page, and a Profile page. The index.js file will serve as our Home page. To denote each page, include basic text in each file with the corresponding name of the file. For each page, include 3 funtional navigation buttons to get to the other pages.

![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step2-Prompt.PNG "Step 2 - Prompt")
![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step2.PNG "Step 2 - PNG")

### Step 2a

The navigation didn't work, nor did it function how I expected it to, because it used a different nav tool than I am used to. I now will `npm install react-router-dom` and instruct Cursor to use that instead. I also made some stylistic changes:
- `ToDo List` -> `ToDo`
- Removed basic description text for each page

![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step2a-Prompt.PNG "Step 2a - Prompt")
![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step2a.PNG "Step 2a - PNG")

## Step 3

Prompt text: Change the buttons to a selectable nav bar at the bottom. Should have all 4 tabs with the selected tab greyed out.

![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step3-Prompt.PNG "Step 3 - Prompt")
![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step3.PNG "Step 3 - PNG")

## Step 3a

- Changed colors to start reflecting the identity of the project
- Removed rectangular visual for the buttons
- Fixed misc alignment issues

![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step3a.PNG "Step 3a - PNG")

## Step 4

I want to test Cursor's functionality of removing integral parts of the already-built system. Let's remove a tab... and hope it goes well!

Prompt text: Please remove the Home page in its entirety, as it is unnecessary. Make the Profile page our new entry point.

![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step4-Prompt.PNG "Step 4 - Prompt")
![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step4.PNG "Step 4 - PNG")


## Step 5

Magic. Now that the navigation skeleton is up and working, let's work on the pages, starting with Profile.

Prompt text: For the Profile page, let's include a profile photo, the user's name (First Last), the user's email, and a slider denoting Notifications, toggled off by default. These should be in the center column of the screen, with greater emphasis on the photo

![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step5-Prompt.PNG "Step 5 - Prompt")
![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step5.PNG "Step 5 - PNG")

## Step 6

Prompt text: Let's spice it up even more! Make the profile photo a little bigger, and fill the space with an actual photo instead of text. Locke Cole, perhaps? Under the photo, greet the person with "Hi, [first name]!". Then, under all that, each section of name, email, and push notifications should be labeled with the name of the section (bigger, bold text) and the value underneath.

![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step6-Prompt.PNG "Step 6 - Prompt")
![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step6.PNG "Step 6 - PNG")

Great layout! ...I'll fix its tiny UI mistakes later.

## Step 7

Prompt text: I've added an image of Locke Cole for you, under frontend/Images/LockColePFP.webp. Please fill the photo with his beautiful face, and make sure it is aligned appropriately. Next, add an "Edit" option in the top right corner. When toggled (with appropriate visual indication), it should let a user edit their Name and Email. You decide how they will look, but make sure they are able to be edited at the same tim end in the same way.


![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step7-Prompt.PNG "Step 7 - Prompt")

![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step7Error.PNG "Step 7 - ERROR")

I spent 5 mintues trying to figure out why the module wasn not found... turns out, I spelled his name wrong in the filepath. LOL. At least the AI listened! The next step would be to spellcheck me... (and grammar check holy moly). Lesson learned.

![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step7.PNG "Step 7 - PNG")
![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step7Edit.PNG "Step 7 - Edit Screen")

## Step 8

There is a weird CSS difference with the edit toggle, but that's okay. Eventually, a backend will be useful for saving the Name and Email, so right now those can only be changed locally and will be reset upon startup. Let's move on to bigger and better things. 

Prompt text: That's enough with the profile screen, thank you. Now for the Calendar page: Please create a monthly calendar view, complete with every week and every day of the year 2025 similar to how one would have a physical calendar. I want to be able to change the month by clicking on the year and have the main view reflect that decision. For flair, make the columns alternate between white and a faded sky blue. 

![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step8-Prompt.PNG "Step 8 - Prompt")
![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step8.PNG "Step 8 - PNG")

## Step 9

Prompt text: Please center the calendar itself and make the month/year slightly bigger. Nex, let's make an "Add Event" button on the bottom (also fairly prominent), with a popup UI to fill in the Title, Start Date and Time, and End Date and Time. Upon submission of the Event, it should have an indicator on the day(s) in which it lands. A user should be able to click on any date square and see events planned, or the text "No events!"

![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step9-Prompt.PNG "Step 9 - Prompt")
![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step9Event.PNG "Step 9 - Add Event")
![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step9Calendar.PNG "Step 9 - Calendar")
![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step9View.PNG "Step 9 - View Day")

## Step 10

Prompt text: Please center the Calendar page items vertically this time as well as horizontally. Afterward, let's tackle the ToDo page. A blank list should be a good thing, so creatively show that. Otherwise, in the top right, there should be an icon to denote Adding a ToDo List task, item, etc. A UI should popup similar to the Calendar page, with fields to enter its Title, Due Date, and priority (High, Medium, and Low). As for the general view with tasks that have yet to be fulfilled, tasks have a checkbox to their left (centered with the text) that, when checked, signify completion. Tasks shall be ordered top-down with a default filter of higher priority tasks on top.


![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step10-Prompt.PNG "Step 10 - Prompt")
![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step10ToDo.PNG "Step 10 - ToDo")
![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step10Task.PNG "Step 10 - Add Task")
![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step10View.PNG "Step 10 - View")
