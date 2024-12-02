
// 1) Pull request :-

// --> It is mainly used to protect the main branch, so that all the collaborators cannot directly commit their code

// --> Creating a pull request will require the permission of the owner of that repository to verify and approve the changes to be committed

// --> This results in enhanced security as this method secures the main / master branch whose code is actually used to run our app

// --> Different branches can be protected separately by this method.




//**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */




// 2) Securing the branches of our online repository :-


// Steps :-
// --> Go to settings
// --> Go to Branches tab from the left
// --> Go to "Branch Protection Rules" section
// --> Click "Add branch protection rule" button


// --> Give the branch name we want to protect
// --> Select the markbox with the option :- "Require a pull request before merging"
// --> Check if the "Require approvals" tickbox is checked or not.
// --> Click on Create button




//**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 3) The whole flow in Github :-

// --> First a collaborator would create a branch say(new) and then pull the code from that branch
// --> Do the changes and push into the newly made branch
// --> If the collaborator wants to merge his code to the online main / master branch or any other protected branch
// --> The collaborator has to raise a new pull request
// --> Go to the pull_request tab on that online repository
// --> Select "New pull request"
// --> Select from which to which branch we want to merge  (main <-- new)   {Remember the arrow is somewhat opposite}
// --> See if there are "no conflicts" if we try to merge it.
// --> Click on Create "Pull request"
// --> Give a message about our changes
// --> Click on "Create Pull Request"
// (Review and Merging will be reviewed)



//#) Owner's task :-
// --> Owner will look into the repository
// --> Go to the "pull request tab"
// --> The owner will get the pull request info about the changes and the collaborator who did it
// --> the owner will click on "Add your review"
// --> The owner will review the changes
// --> Then owner will click on "Review Changes" button
// --> Then owner will give a message regarding the pull request and click on "Submit review"


// #) Now either the owner or the collaborator both can merge the "new" branch with the protected branch