
// 1) Cherry Pick :-

// --> It is a concept where we only want to merge some specific commits from other branch to our current branch.
// --> Hence, the other branch will not be merged as a whole



//******************************** */
// #) Command :-

// --> First checkout to the branch where the other branch will merge
// --> Use "git cherry-pick < commit_id >"


// NOTE :- Here commit_id refers to the commit id of the commit from the other branch we want to specifically merge in our current branch


// NOTE :- Whenever we cherry-pick a commit, a new commit is created in our current branch with the commit message same as that of the original commit.




//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 2) BONUS :-

// --> To run two commands in git one by one
// --> Use && between the two commands
// --> The second command will only run if the first command successfully got executed


// e.g :-
' git commit -m "message"  &&  git push'