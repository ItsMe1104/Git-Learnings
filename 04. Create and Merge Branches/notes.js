// 1) Story of Branches in Git :-

// --> The main Branch in Git is called the "master" branch. In Github its called the "main" branch.
// --> The final code in this branch is actually used to publish our live site
// --> Hence, all the team members are not allowed to directly contribute to the master branch as any bug or issue might reflect on the live website.
// --> Hence, for creating a new feature, we always create a new branch.
// --> The new branch will have all the code, till the current breakpoint.
// --> After adding code in this new branch and testing it, we try to merge it with our master branch
// --> For merging in github, we have to create a pull request and the team leads might merge it.




//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */



// 2) Git branches :-


// a) To see all the branches in our respository :-
// --> Use "git branch"                (The star symbol will specify in which branch we currently are)


//********************** */
// b) To create a new branch :-
// --> Use "git branch branch_name"    (The branch emerges from the current working branch )



//*********************** */
// c) Switching to some other branch :-
// --> Use "git checkout branch_name"   (our HEAD will move to that branch)
// --> We can also change branch graphically by clicking on the bottom left corner in the branch name and then selecting our desired branch


// NOTE :- Whenever we switch to any other branch, all the files not recorded in the last commit of this branch will be removed



//***************************** */
// d) To check all the commits from the current branch :-
// --> use "git log"



//****************************** */
// e) To check all the commits from every branch :-
// --> use "git log --all"              (in detail)
// --> use "git log --all --oneline"    (in short)



//****************************** */
// e) To check all the commits from every branch along with the graph :-
// --> use "git log --all --oneline --graph"    (we will see a graph like structure represing our git tree in command line )


// Graph :-
// --> It is just like a tree, where the trunk can be thought of as the "master" and other branches are what we try to create


// Use git lens to see it more precisely
// --> Install "git lens" extension
// --> Then, type CTRL+Shift+P
// --> Then type graph
// --> Select the option "show graph" by gitlens




//************************************** */
// f) Deleting a branch :-

// --> To delete a branch, first we need to checkout to some other branch as we cannot delete the same branch we are in

// --> Use "git branch -D branch_name"    (for any branch which has commits and is not merged with master branch)

// --> Use "git branch --delete branch_name"    (for any branch which has no commits or is already merged)




//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 3) What is HEAD?

// --> HEAD represents the current working branch we are in or the current checkpoint/version we are at.

// --> If we change branch the HEAD will move to that branch

// --> The current working directory will change accordingly