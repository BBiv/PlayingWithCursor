# PlayingWithCursor Changelog

## Step 0 - Manual React Setup

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

[Image got lost somewhere. Not sure what happened, but it looks like Step 7's image just without the pfp and edit button]

![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step6-Prompt.PNG "Step 6 - Prompt")

Great layout! ...I'll fix its tiny UI mistakes later.

## Step 7

Prompt text: I've added an image of Locke Cole for you, under frontend/Images/LockColePFP.webp. Please fill the photo with his beautiful face, and make sure it is aligned appropriately. Next, add an "Edit" option in the top right corner. When toggled (with appropriate visual indication), it should let a user edit their Name and Email. You decide how they will look, but make sure they are able to be edited at the same tim end in the same way.


![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step7-Prompt.PNG "Step 7 - Prompt")

![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step7Error.PNG "Step 7 - ERROR")

I spent 5 mintues trying to figure out why the module was not found... turns out, I spelled his name wrong in the filepath. LOL. At least the AI listened perfectly! The next step would be to spellcheck me... (and grammar check, holy moly). Lesson learned.

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

## Step 11

Prompt text: Now let a user check the checkbox without the task disappearing, and let's have the user decide to remove a task. Indicate a Delete icon in the rightmost portion of each task. Also, have ToDo tasks appear on the Calendar as events on their due date, with a slight distinction to tell them apart such as a tag labeled "TASK".

![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step11-Prompt.PNG "Step 11 - Prompt")
![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step11ToDo.PNG "Step 11 - ToDo")
![alt text](https://github.com/BBiv/PlayingWithCursor/blob/main/PictureJourney/Step11Calendar.PNG "Step 11 - Calendar")

Interesting. Upon switching to the Calendar page and back to the ToDo list page, it removed the event. Clearly, it was there before. Time to troubleshoot...

I suspect that this is due to lack of a proper backend to store information. I found that there is similar behavior for the Calendar events when leaving the page and coming back, which confirms my suspicions. If I add a backend, it'll solve this issue. Let's do that!

## Step 12

Let's add a backend to our project. But first, I want to use Cursor to give me recommendations.

Prompt text: Please give me some recommendations for a backend framework that would be the most ideal framework to suit this project.

To summarize, it recommended me Node.js + Express.js as well as Python + FastAPI, and Python + Django REST Framework; each with their own upsides and useful tools. I ended up choosing the first option because I am familiar with it and it also happens to be the best option.

Very cool! It added so, SO much. After manually reviewing the main files, I noted the following:
- It's fully set up a Mongoose database connection, complete with error checking and verbose error feedback.
- It's got nodemon and jest. Good for testing and easy development.
- Some of the schema attributes have unforeseen/unwanted additions that I would use if I had thought of it. Nice, but that does create work.

This makes me realise that I can guess how the rest of the project will go if I continue along the same route I have been traveling. Also, it's a little out of scope to set up and test a DB for a project I don't want to use after today. Perhaps in the future, I can build on it! So, for now, I want to pause the progression of this and look into other functions of this IDE. 

=============================================================================================

Other Things:
- The option to include Context is nice to keep the scope of a command localized
- The amount of Models is ridiculous
- The Memories feature is a little... underwhelming? Obviously, it gives context and explicit rules to the AI. I'm just not sure why exactly it's needed... I guess it's useful for me to be able to change them to be more specific? Sure.
    - My own project has a rule to Use React Router for Navigation, which I technically told it to do. 
-  Inline Editing (crtl+k) is useful for small changes. I assume this can be replicated with the Context feature
- Terminal AI Commands sound AWESOME! No more googling exact verbage!!