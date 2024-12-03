
// 1) Some useful Shortcuts in Git :-


//*********************************** */

// a) To commit files directly without sending them to staging area (SKIPPING THE STAGING AREA) :-

// NOTE :- It only works if that file or folder have atleast been committed once, else it will not work

// --> Just add "a" in between "-" and "m" in the git commit comand

// e.g :-  Use "git commit -am "our_message"




// NOTE :- It can be dangerous when working with complex projects hence, should be used wisely




//*********************************** */


// b) To restore files back from Staging area into the "Changed" section
// --> Use "git restore --staged <file_name>"
// --> Use "." for restoring all files

// e.g :- "git restore --staged ."


//NOTE :- The path that we give in windows won't work.

// --> Try changing the fromat from
// --> C:\Users\shahi\Desktop\Git2\13. Some Useful Tips for Git\notes.js

// To this :-
// --> /c/Users/shahi/Desktop/Git2/13.\ Some\ Useful\ Tips\ for\ Git/notes.js



//*********************************** */


// c) Restoring a deleted file after we have already commited and pushed

// --> Let's say we deleted some file by mistake and along with other changes it got commited and pushed
// --> To bring that file back

// #) STEPS :-
// a) First manually check at which last commit, that file was present using git log and checkout
// b) Come back to the latest commit
// c) Use "git checkout <deleted_file_name>"
// d) Now the file from that commit is replicated in our current repository and added in the staging area
// e) Just commit and push that file


//*********************************** */


// d) Changing the default editor VS Code in .gitconfig file

// --> By default the editor is vim for any dialogue box files that open in conflicts or revert for new commit
// --> To open those file in VS code by default


//#) STEPS :-
// --> Type "git config --global -e"
// --> The .gitconfig file will open in new tab
// --> Change the editor value to "code --wait" and save it

// ==> We can also change the user's username and email id here and save it



//*********************************** */

// e) Alternative of "checkout" to switch to some other branch or commit id

// --> Use "git switch <branch_name>"
// --> Use "git switch <commit_id>"


//*********************************** */


// f) To create and switch branch in same command

// --> Just add "-C" flag in "git switch" cmmand
// ==> Use "git switch -C <branch_name>"

// e.g :- "git switch -C about"


//*********************************** */


// h) To revert a merge after pushing :-

// --> Directly using the "git revert <commit_id> will give error
// --> Where the <commit_id> is the merge commit_id


// ==>  Use "-m" and to tell git that after reverting which branch to get back
// ==> Use "-m 1" to tell git that after reverting move back to current branch

// --> Close the dialogue file that opened.

// e.g :- git revert <commit_id> -m 1