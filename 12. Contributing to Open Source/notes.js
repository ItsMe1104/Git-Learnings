
// Open Source Projects :-

// --> Those projects whose code is available online publically and everyone can open that code, clone it and add changes to it, or download, modify and use that code.

// e.g :- React JS



// *******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************


// 1) Contributing to an open source project :-

// ==> We directly cannot change the code of anyone's repository. We have to create a fork and then after applying the changes we have to make a pull request.



//***************************** */
// #) FORK :-
// --> Fork means to duplicate someone's whole repo in our Github account but also keep a track of that repository's status in the owner's account vs our account.



// How to Fork?

// --> Just go to someone's repository we want to fork and then click on the "Fork" button
// --> Then, give the name of that repo to appear in our account
// --> Click "Create Fork" buttom


//**********************


//#) Steps to Contribute :-

// ==> Let's say we are "A" and we want to contribute to some public repository of "B"


// a) First fork the repo in A's account
// b) Clone the repo into our local system

// --> Click on Code
// --> Then copy the link in the HTTPS tab
// --> Create a folder in our local system and open VS code on it
// --> In Git terminal, type "git clone link/url"
// --> Hence, whole code will be downloaded from A's repo into A's local machine

// --> Doing cloning, will automatically connect A's online repository with local repository for pushing and pulling code


//c) Now do the changes in A's local machine
//d) Commit the changes
//e) Now push B's change into B's remote repository


// ==> Once 'A' push the code, 'A' can open the remote repository in Github
// ==> 'A' can see the status that his repository is 1 commit ahead of "B" (owner) repo


// f) Now 'A' will click on the "Pull Request" button of his repository
// g) Click on "New Pull Request"
// h) Should check " (Base(owner's) repo, base main)  <-- (head (A's) repository, main )"
// i) Check the changes, Click on "Create Pull Request"
// j) 'A' will give the short and detailed message
// k) 'A' will click on "Create Pull Request"

// ==> All checks will pass with no conflicts, except some deployment or netlify issues, which is no concern



// #) B's (owner) part :-
// a) 'B' will get a pull request notification in his online repository
// b) 'B' will check and verify the the changes
// c) "B" can see the changed files from "File changed" tab
// d) After verifying, 'B' will click on "merge pull request" button if he needs the changes
// e) A new commit will be created



// ***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************



// 2) Updating the status of cloned repo to come in sync with owner's repo :-

// ==> There can be 100 more users working on B's (owner's) repo and creating commits, hence we need to sync our cloned/forked repo with that
// ==> "A" will get a notification in his cloned repo that our branch is some commits behind B's (owner) repo
// ==> From time to time, the forked repos need to be updated to remain in sync or "up-to-data" with original repo


//************************** */

// #) Solution 1 (From Github):-
// ==> In A's forked repo, click the "Sync fork" tab just below the Green "Code" button
// ==> Click on "Update Branch" button



//************************** */

// #) Soultion 2 (From local system) :-

// a) In local system, type "git remote"
// --> to see all the remote repos our local repo is connected to


// b) Type "git remote -v"   (v = verbose means in detains)
// --> It will show the remote url for (fetch) and (push)


// c) Go to the owne's (B) repo and copy the link from GREEN "Code" button


// d) Type in terminal "git remote add <some name> <URL (owner_repo)>"
// --> Here some name is mostly chosen as "base" as convention for the owner's repo
// --> Type "git remote -v" to check if its added or not

// e.g :- git remote add base <URL (owner_repo)>



// e) Fetch the code from owner's repo using "git fetch <owner_repo_name>"
// --> A new origin branch will be seen when we see git log using "git log --all --oneline"

// e.g :- git fetch base


// f) Merge the code from Owner's repo into our local system using "git merge <owner_repo_name>/main"

// e.g :- git merge base/main


// g) Now push the code in our forked repo using "git pull"
// --> Hence, our forked repo will show the status of "up-to-date"




// ************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************



// 4) Some tips to contribute to open-source projects :-

// --> Go to a project's online repo
// --> Click on "issues" tab
// --> In the "label" tab choose the "good first issue" tag