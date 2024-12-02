
// 1) Git conflicts :-

// --> Whenever we work in a large team, there are high chances of encountering GIT CONFLICT.


// Reasons :-
// a) When we are merging some branch's code into our branch (i.e while merging branches)
// b) When in the same file, in same line no. there are different changes in different branches, while merging
// c) Reverting a previous commit, whose code was already removed in the latest commit, as those changes cannot be undone
// d) When the commits in our online repo do not align with the commits in our local repo and hence, the code might get mismatched and run into a conflict
// e) Many other cases ...




//*********************** */

// a) CASE - 1 (Merging branches) :-

// --> When the history is linear of both branches, hence there will be no conflicts. There would be a fast forward merge

// --> When the history diverges --<: for both branches then only there can be chances of conflict (not necessarily till there are changes in same line)

// e.g :- Let's say there is there is an <h1> tag in line 11 of index.html which says "Hello A"

// i) There is a "Contact" branch which changes this <h1> to "Hello Contact" and commits   (Still the history will be linear)

// ii) In the master branch, still <h1> will contain "Hello A". Now we change that <h1> to "Hello Master" and commit   (Now the history will be diverge)


// #) Conclusion :-
// --> Now if we try to merge contact branch into master branch, it will show "git conflict" as git doesn't know which changes to keep and which to ignore.


// #) Error message :- "Automatic merge failed; fix the conflicts and then commit the result"




// #) Solution :-

// a) Accepting which change :-
// --> There will be a new tab created automatically in source control named "Merge Changes"
// --> Click on that file and there we will get four options :-
// a) Accept Current Change :- (Already present in current branch)
// b) Accept Incoming Change :- (Change done by "to be merged branch" )
// c) Accept Both Changes :- (Harmful try to not use it). It will both the changes one after the other but mostly result in syntax errors
// d) Compare changes :- See both the changes in split window and then decide

// Hence, whoever people were involved in making the changes, get them in a call and decide which to keep
// If both the changes were made by us, then we can decide on our own.




// b) Merging Manually

// --> If we chose Incoming changes then we have to add the file in staging area .
// --> If we chose Current Changes then, we can just commit without staging the files
// --> After accepting which change, just use the command "git commit" (automatic message is generated)
// --> Close the dialogue box that appears.
// --> Hence, both the branch will be merged with our desired changes



//***************************** */

// b) CASE - 2 (Pulling code from online repo) :-

// --> When the history of origin branch (online repo) and the local branch is linear, then there are no conflicts on pulling code from online repo

// --> Conflicts arises when the history diverges -<: of both the origin branch and local branch, then there can be chances of conflict when we pull the code from online repo in our ocal machine. (not necessarily till there are changes in same line)


// e.g :- Let's say there is there is an <h1> tag in line 11 of index.html which says "Hello A" in online repo and we pull the code in our local system.

// i) In Github we again make the changes to this <h1> to "Hello Origin Branch" and commit. Or someone wlse pushed the code to Github making those changes.    (Still the history will be linear)

// ii) In our local system, still <h1> will contain "Hello A". Now we change that <h1> to "Hello Local Branch" and commit   (Now the history will be diverge)




// #) Conclusion :-
// --> Now if we try to pull the code from online repo to our local machine, it will show "git conflict"



// #) Why :-
// --> This is because when we pull our code there are two processes :- fetch and merge
// --> Fetching the code is okay but when we try to merge the origin branch with our local branch
// --> git doesn't know which changes to keep and which to ignore. Hence, gives conflict.



// #) Error message :- "Automatic merge failed; fix the conflicts and then commit the result"



// #) Solution :-

// a) Accepting which change :-
// --> There will be a new tab created automatically in source control named "Merge Changes"
// --> Click on that file and there we will get four options :-
// a) Accept Current Change :- (Already present in local branch)
// b) Accept Incoming Change :- (Change coming from online repo in origin branch)
// c) Accept Both Changes :- (Harmful try to not use it). It will both the changes one after the other but mostly result in syntax errors in complex code
// d) Compare changes :- See both the changes in split window and then decide


// Hence, whoever people were involved in making the changes, get them in a call and decide which to keep





// b) Merging Manually

// --> If we chose Incoming changes then we have to add the file in staging area .
// --> If we chose Current Changes then, we can just commit without staging the files
// --> After accepting which change, just use the command "git commit" (automatic message is generated)
// --> Close the dialogue box that appears.
// --> Hence, both the branch will be merged with our desired changes





//******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */



// 2) Aborting the git conflict :-

// --> Let's say the conflict is very big, and we are not able to decide, which change to keep and which to ignore
// --> Or the person that made the change is not available to decide which change to keep
// --> And we are required to some other task.
// --> Hence, we need to abort the conflict, else we will get stuck
// --> Even if we do our task in other files, we will not be able to commit them



//******************************** */
// #) SOLUTION :-

// --> Aborting the git conflict and do our task first
// --> Later, when our task is finished and the other person is available, we can again work on that conflict and resolve it.

// --> To abort the confict for the time being, we need to abort the merge
// --> Use "git merge --abort"


// Hence, the git conflict will be aborted




//******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */


// Avoiding Conflicts :-

// --> To avoid git conflicts arising due to pulling code from online repo, we need to do pull the code from online repo time to time.