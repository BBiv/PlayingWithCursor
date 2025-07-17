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

