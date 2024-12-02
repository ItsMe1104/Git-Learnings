

// 1) Stashing in Git :-


// #) NEED :-

// --> Whenever we are working on some branch "A" and we haven't completed our feature totally.
// --> But suddenly or urgently we have to checkout to some other branch "B", to do some other work
// --> But git won't allow us to checkout to other branch "B" until we have commited the changes we did on this branch "A"
// --> It will throw an error and abort the checkout
// --> Since, it is not a good habit to commit our code unles some feature has totally been completed by us
// --> Hence, we cannot commit our code on branch "A", but we need to urgently work on branch "B" also



// #) SOLUTION :-

// --> Inorder to checkout to some other branch, we can "stash" them instead of commiting them.
// --> Use ' git stash -m "message" '



//NOTE :-
// --> Whenever we stash, all the changes will be temporarily removed from the file and saved somewhere


// --> Now, we can happily checkout to some other branch.




//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */



// 2) Stashing commands :-

// i) git stash -m "message"
// --> To stash our changes in the current branch


//************************* */

// ii) git stash list
// --> To get a log or info of all the Stashed changes in all the branches

// NOTE :- here we will get Stash index which will be used to retrieve the code from the stash


//************************** */

// iii) git stash apply <stash_index>
// --> To retrieve our code in our file from the stash

// e.g :- gut stash apply 1


// NOTE :- We have to get the STASH index from STASH list using "git stash list"

// NOTE :- We can retrieve any stashed code from any branch into our current branch



//************************** */

// iv) git stash drop <stash_index>
// --> Even our we retrieved the Stashed code, it still stays in the STASH bucket (stack)
// --> To remove it we have to use this command

// e.g :- gut stash apply 1


// NOTE :- We have to get the STASH index from STASH list using "git stash list"

// NOTE :- We can drop any stashed code of any branch from our current branch


//************************** */

// v) git stash clear
// --> It will drop all the stashed changes from our Stash bucket (stack) in one go