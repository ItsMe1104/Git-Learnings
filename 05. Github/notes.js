
// 1) Drawback of using Git in our system :-

// --> The only drawback git has is that if our ".git" folder gets deleted, then our whole history will be lost
// --> To solve this, we use an online repository which is present in some server like Google Drive
// --> Whenever we commit something, we will push the code in that online repository so that it becomes accessible to different devices as well.


// The online Git repositories are provided by
// --> Github (mostly used)
// --> Bitbucket (mainly because of jira integration)
// --> Gitlab


//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */



// 2) Create an account in Github :-

// --> Fill up the details like email id, username, password
// --> Enroll in the free version



//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */


// 3) Making an online repository in Github :-

// --> Click on "Create Repository"
// --> Give a repository name and description
// --> Choose public / private
// --> Click on "Add a README" file
// --> Click on Create repository




//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */


// 4) Connecting our repository with online repository :-


// a) Checking if our repository is connected to an online repository or not
// --> Use "git remote show origin"

// ### If it shows a fatal error means it is not connected with an online repository.




// #) To connect with online repository :-

// --> Create a new repository in Github
// --> Then use the commands :-

// NOTE :- All the commands to connect with our remote repository as well as how to push our code, will be given if we don't add the README file option while creating our repository in Github



//******************************* */
// a) To connect with our online Github repository

// --> Use "git remote add origin https://github.com/GithubId/repo_name"
// NOTE :- We might have to login with our github id and password


//*************************************** */
// b) To rename our "master" branch to "main" branch

// --> Github always names the default branch name to "main"
// --> Hence, we have to rename our Local "master" branch to "main"
// --> Use "git branch -M main"



// NOTE :- NOW a days, Github has also adopted the "master" branch as its default branch , hence, no need to rename


//**************************************** */
// c) To push our code to the online repositoty

// --> Use "git push -u origin branch_name"


// --> First always send the master branch as it will be set as the default branch
// --> Then send whichever branch we want to in our online repository

// In Github, we can toggle between our branches and see the code in different branch versions


// Note :- We might be asked to Login




//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 5) Origin branches :-

// --> The branches in our local repository and the Github repository are shown differently
// --> The local repository branches are named like usual "main, master, contact"
// --> The remote repository branches are named like "origin/branch_name"
// --> This is maintained for every single branch



// ==> To check use "git log --oneline"





// WHY ?

// ==> This is done to show that a particular branch in our remote Repository is lagging behind to whatever changes we have done to that branch in local repository or vice versa




// #) CONCLUSION :-

// ==> We should always make sure that both our local and remote (origin) repository branches are at sync that is on the same level

// ==> Hence, if we commit our code in any code editor, then our local repository branch will go one step ahead.

// ==> On the other hand, if we do any commit in Github, then our remote repository branch will go one step ahead.

// ==> To get both the repositories on the same level, we need to push or fetch according to our requirements




// SOLUTION :-

// a) To get our online repository branch at sync with local repository branch. (origin is behind)
// --> We have to push the code in Github.
// --> First switch to that branch in local repository
// --> Use "git push"



// b) To get our local repository branch at sync with local repository branch. (local is behind)



//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */




// 6) Details we will get in Github :-

// --> All the commit details that we did till now, in our local repository can be seen
// --> The time when we last commited the file in our local repository (for the first push) will be shown instead of showing when we first pushed our code to Github
// --> The branch graph will also be seen