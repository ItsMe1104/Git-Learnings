
// 1) Revert and Resetting Commits :-

// --> These are mainly useful if we accidentally did a commit and we want to delete it or by mistake we deleted some commit and we want to bring that back


// RULES :-

// a) If we have only committed in our local system only and not pushed the code to our online repo :-
// --> Then, we can simply reset the commit


// b) If we have commited to our local system as well as pushed the code to our Github repo (origin branch we can see in git log --oneline --all):-
// --> Then, it is not advisable to reset our commit locally as someone else might have already pulled the code in their local system
// --> Hence, they might continue to work on that deleted commit even if we reset our commit locally. And hence, when we again push the code then our history might mismatch with their ones.
// --> Hence, there we have to use revert instead of reset




//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************ */



// 2) Git Reset :-

// #) For resetting a commit, we need the following :-

// --> First checkout to that branch in which the commit was made.
// --> Get the commit id, till which we want to delete. Hence, all the commits above it in that branch will be deleted excluding itself.
// --> To get the commit id first use git log --oneline.
// --> specify the type of reset (--hard or --soft or --mixed ) {If we don't specify, then by default it will be mixed}.

// ==> Use the command "git reset --<type_of_reset> <commit_id>"


// e.g :- git reset --hard 6e43abc




//******************************************************* */

// #) Commit id required for reset :-
// --> We never give the "commit id" of the commit we want to delete


// a) Deleting a single commit :-
// --> We always give the one step below commit id of the commit we want to delete. Hence, the commit id we give will be excluded


// b) Deleting a range of commits :-
// --> Whatever commit id we give, all the commit ids above it will be deleted excluding itself.



//******************************************************** */

// #) Types of reset :-

// a) hard (mostly used) :- commit will be removed from history as well as the changes in those commits will be undone and the files and the code will be gone.

// b) soft :- commit will be removed from history as well as all the changes in those commit will be added to the staging area altogether. Hence, the files and the code will not be gone.

// c) mixed :- commit will be removed from history as well as all the changes in those commit will be marked as uncommited changes. Hence, the files and the code will not be gone.


// By default the commit type is "mixed".




//******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */



// 3) Retrieving the Deleted Commits :-


// #) Process :-
// --> Whenever we retrieve a commit (say A), it will simply make the git history look same as it was during its commit.



// #) MEANING :-
// --> It will retrieve all the deleted commits before it (A) was initially committed.
// --> It will adjust the repository and files as they were at the time of this checkpoint (i.e when (A) was initially committed)
// --> If any new commits were made after deleting (A), it will delete those commits and all the new changes in those commits will be moved to the "Changes" area (Only if --mixed is used) as Untracked or Modified so that we can move them to the staging area and commit them



// #) Exercise :-
// --> Add 1.html, 2.html, 3.html, .... 6.html                                (Changes :- 1,2,3,4,5,6)
// --> Commit all files one by one separately from 1 to 6                     last_commit -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 ->

// --> Now see the git history
// --> Now delete all the 6 commits                                           last commit ->
// (We will see the files from 1.html to 6.html in changes area)              (Changes :- 1,2,3,4,5,6)

// --> Now see the git history
// --> Now retrieve the commit id of 3.html                                   last_commit -> 1 -> 2 -> 3 ->
// (We will see the files 4.html, 5.html, 6.html in changes area)             (Changes :- 4,5,6)

// --> Now see the git history
// --> Now add a file 7.html
// --> Commit that file                                                       last_commit -> 1 -> 2 -> 3 -> 7 ->
//                                                                            (Changes :- 4,5,6)

// --> Now see the git history
// --> Now retrieve the the commit id of the earlier 6.html                   last_commit -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 ->
// (We will see the files 7.html is in changes area)                          (Changes :- 7)





//******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */


// 4) Git reflog :-

// --> Sometimes while retrieving commits we might not be able to get the id of the deleted commit
// --> It might happen if we hadn't printed the git history in our terminal before deleting that commit
// --> Hence, to solve that, we can use "git reflog"
// --> This command will display a list of recent actions
// --> It mainly tracks the movement of the HEAD reference

//#) Command :-
// --> "git reflog"


// #) Need :-
// --> Using "git log", we cannot see the removed commits, while using "git reflog" we can also see the removed commits




//******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */



// 5) Navigating using "HEAD" reference :-

// --> The "HEAD" reference points to the current working directory.
// --> If we checkout to some other branch or some other commit, then our current working directory changes accordingly and so does the "HEAD"



//*********************************************************** */
// #) Detached Head State :-
// --> Normally the "HEAD" is always attached to some branch
// --> But when we checkout to some commit, our current working directory changes and hence our HEAD gets detached and points to that commit.
// --> Even if we try to checkout to the last commit id of that branch, we will still have a detached "HEAD" even though both "HEAD" and that branch points to that same commit.
// --> To make the HEAD attached again, we have to use "git checkout <branch_name>"




//*********************************************************** */
// #) Navigation :-

// --> "HEAD" actually holds the reference to the current commit id it is pointing
// --> "head" or "head ~0" points to the current working directory's commit id
// --> "head~1" will point to the commit id 1 step below of our current HEAD position
// --> "head~2" will point to the commit id 2 step below of our current HEAD position
// --> "head~3" will point to the commit id 3 step below of our current HEAD position
//.
//.
//.
// --> "head~n" will point to the commit id "n" step below of our current HEAD position




//**************************************************** */
// #) Uses :-
// --> It can be used wherever we use commit ids in our git commands


// e.g (1) :- While checking out to some other commit
//         --> "git checkout head~4" :- will change the current working directory according to the fifth commit below from the current head.


// e.g (2) :- While deleting or retrieving other commits
//         --> "git reset head~4" :- will delete 4 commits from current Head position to below including the current Head. That is head~0, head~1, head~2 and head~3 commits will be deleted.





//*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */




// 6) Git Revert :-

// --> It is used to delete a commit from online repo
// --> Mainly used when we have already pushed our commit to the online repo
