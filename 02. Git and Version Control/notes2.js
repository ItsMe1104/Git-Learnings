
// 1) How to set Git Bash terminal as the default terminal in VS Code

// --> Install Git in our system
// --> Go to VS Code and open terminal (CTRL + `)
// --> In the terminal tab, click on the arrow beside the current terminal name
// --> Click on "Select Default Profile"
// --> Select "Git Bash"



//******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 2) Git Repository :-


// Q) What is a Git Repository?
// --> A git repository is basically a system which tracks the status, changes and versions of all the files and folders (as well as sub folders)



// --> To let git track the status of the current folder and all the sub folders inside it, we must give permission to git
// --> To give this permission, we must make the current folder as the git repository, so that git can start tracking it.




// How to create a Git repository :-

// --> Initialize the current repository as a Git Repository
// --> Type the command "git init"




// .git hidden folder

// --> Whenever we initialize a git repository, a ".git" folder is created in the current directory which is hidden
// --> Inside this, all the versions of our files / folders will be stored
// --> Hence, never delete it.





//******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 3) Branch system in Git :-

// --> All developers have different thinking ability, hence from one point of a particular development phase, two or more users might have their own way of developing a feature
// --> Hence, from that point, all the users can create their own branches and keep track of their individual branch in git.

// Sometimes even we can try to go back in our code phase and try doing different changes in our code this time. This also leads to different branches

// --> Its like a tree where one or more branches can grow from same point --<::
// --> As well as a new branch can grow from the middle of any stem

// --> Later on all the branches can be merged and the best branch can be continued in the master/main (default) branch
// --> Or the master branch can be changed to some other branch.

// --> The default single branch is called master branch in git (In github its called main branch)






// #) MASTER BRANCH :-

// ---> By default branch that gets created when we initialize our repository as the git repository






// #) SOURCE CONTROL OPTION in VS Code :-

// --> In the leftmost vertical bar, the third option is "Source Control"
// --> It only gets active when we initialize a git repository.
// --> It is a graphical tool to use git for those who find it difficult to use it from the terminal.
// --> It helps us to analyze git in sensory terms





//******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 4) Tracking our files in git Repository :-


//#) Theory :-

// Whenever we find that we have written sufficient code and we want to preserve a snapshot of the current phase, so that even if we go on and make some mistakes, we can track back to the phase where we had the correct code

// --> Summary :-
// --> Just like in a game we get checkpoints, so that we can start the game from that checkpoint if we lose or make some mistake after that checkpoint
// --> Similarly Git helps us by enabling us to provide checkpoints to our code
// --> This helps us to go back if we make some mistakes and start from that checkpoint again








// #) Steps to provide a checkpoint :-

// Git does not track our files and provide checkpoints by itself. Instead we have to tell it which files or folders to track

// a) files --> (staging phase) --> (commit phase) --> (push)


// *) staging phase :- To tell git that these files are ready to be committed (put a checkpoint on each of these individual files and the current directory)

// *) commit phase :- To get a checkpoint on the current files.
// --> We also have to add a message inorder to commit, such that we can remember the things we did before commiting.
// --> We also get a unique ID when we do a commit, so that using that UID, we can travel back to that specific checkpoint


// Rules of that message
// --> Present Imperative
// e.g :-  Add boiler plate code to html
// e.g :-  Delete extra unnecessary files


//*) push :- To push the committed files to some online cloud repository like Github.





//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 5) Tracking our files in Source Control :-

// --> First initialize the git repository, in which we want our git to track our files
// --> Click in the third icon of the leftmost side bar in VS code

// All the files that underwent changes inside the resposioty will be shown :-
// U = Untracked
// M = Modified
// A = Added to staging area


// a) To send the all untracked files to staging area :-
// --> Click on the '+' button in the changes tab for sending all files
// --> Click on the '+' button beside each file for sending one file separately.



// b) To commit the staged files :-
// --> Write a message and click on the "commit" button



// c) To unstage files from the staging area :-
// --> Click on the '-' button in the changes tab for sending all files
// --> Click on the '-' button beside each file for sending one file separately.



// d) To check for differences between a file in the staging area and the same file before the last commit
// --> Click on the Source Control button in the leftmost bar
// --> Then click on the file, which we want to see the difference in



//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */

//                                  <Important>


// 6) Tracking our files in Command Line (Git Bash) :-

// --> First initialize the git repository, in which we want our git to track our files


// a) To see all the untracked / Modified / Uncommited  files in the repository
// --> Use "git status"     (in descriptive format)
// --> Use "git status -s"  (in short format :- ?? = Untracked, M = modified, A = added to staging area)



// b) To send the untracked files to staging area :-
// --> Use "git add ." command for sending all files together.
// --> Use "git add file_name" sending one file separately.


// c) To unstage the staged files from the staging area :-
// --> Use "git reset"    (to unstage all the files)

// First go to the directory of the file we want to unstage
// --> Use "git reset file_name"



// d) To commit the all the staged files :-
// --> Use "git commit -m 'write_a_message'"






//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 7) What is commit ?

// --> Whenever we do changes in our code, and after testing it we find that our code is working fine
// --> Hence we ask git to place a checkpoint or take a snapshot of this code in ".git folder", such that if we do some more changes and our code breaks out
// --> Then, we can come back and do our chekpoint and start again




//******************************** */

// For the first commit :-

// a) We have to configure the name and email of the user

// git config --global user.email "your_email"
// git config --global user.name "your_name"


// a) For the first commit, we generally pass in the message "Initial Commit"




//**********************************************/

// #) To know our email and name, associated with git :-

// git config --global user.email     (to know email)
// git config --global user.name      (to know name)




//  *******************************************

// #) What is staging area?
// --> Staging area is a way of separating a space where only the files we want to add a checkpoint in will be kept.
// --> Where those files can be easily checked or verified if they really want to be commited or not.




//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 8) "git log" :-

// --> To see the history of all the commits in our Git repository
// --> It gives the Date, time, message, user's name and email as well as a commit id



// #) Commit id :-
// --> Every commit we did in our repository will get a commit id
// --> It helps us to undo all the changes in our files till that checkpoint
// --> It is so strong that while undoing changes it will even remove the newly created files or remove its code just to go to that checkpoint
// --> In short it help us to start again from that checkpoint whose commit id we have


// --> Use "git checkout commit_id"


//************************* */
// #) If we ever want to go to our latest commit :-
// --> Use "git checkout master"





//******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 9) To check the git history of a particular file :-

// --> In the Explorer tab, where we see all the files and directories
// --> Go to the "Timeline" tab and then select the three dots and choose "git history"
// --> Here we can see all the commits made to a particular file


// NOTE :- It only works till we have the .git folder in our repository, if we delete that we will lose all the commits and the git history

// Solution :- To preserve this ".git" folder that keeps the checkpoints, we try to upload it online in Github or GitLab