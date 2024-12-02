
// 1) .gitignore file

// --> Sometimes, we want that sensitive info should not be passed into the public online repository for security purpose. Like API keys or passwords, database credentials, etc

// --> But if we simply don't use these in our files then our app won't work properly

// --> Hence, we create a file with no name but just an extension ".gitignore" to solve this error.

// --> It is a file that is created so that all the files or folders mentioned inside it won't be tracked by git.

// --> They will be functional in our app, but any changes we do in those files and folders will not be tracked by git.

// --> NOTE :- ".gitignore" file is itself tracked by git software,

// --> As a result while pushing our code to Github, the ".gitignore" file will be also pushed but all the files and folders mentioned inside it won't pe pushed




//*********************************** */

// #) Which files/folders will git still track even if they are inside .gitignore


// i) If the files/folders are never ever commited earlier :-
// --> Then, git won't track them from starting



// ii) If the files / folders are already commited earlier but now we put them in the .gitignore file
// --> Then, even if we have put them in the .gitignore file, still git will continue tracking it
// --> This is because git has already cached those files



// #) Solution :-
// --> For files ==> "git rm --cached <file_name>"
// --> For folders ==> "git rm --cached -r <folder_name>"    (-r = recursive)

// Now if we put these files or folders inside .gitignore, git would stop tracking them.



//****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 2) BONUS TOPIC :-

// a) Before pushing our code to our online repository :-
// --> If our local branch is behind the origin branch because a new commit is made in the origin branch which our local branch donesn't know.
// --> Hence, when we try to push our code, git won't allow us to do that saying our local branch is behind the origin branch




// SOLUTION :-

// --> First, we need to pull our code from the origin branch
// --> Solve any conflicts if there are
// --> So that both the local and origin branch are at same level
// --> Then, only we can push our changes