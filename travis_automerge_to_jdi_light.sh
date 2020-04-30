#!/bin/bash -v
export GIT_COMMITTER_EMAIL='travis%40travis'
export GIT_COMMITTER_NAME='Travis CI'

# VARIABLES
# Feel free to edit if your directory names or branches differ
TEST_SITE_DIR="$(pwd)"
ANGULAR_SITE_DIR="angular-site"
JDI_LIGHT_GITHUB_REPO="jdi-testing/jdi-light"
PUSH_URI="https://${GIT_COMMITTER_EMAIL}:${GITHUB_TOKEN}@github.com/${JDI_LIGHT_GITHUB_REPO}"
JDI_LIGHT_BRANCH="gh-pages"
JDI_LIGHT_ANGULAR_DIR="angular"
# FILES_TO_EXCLUDE=( "3rdpartylicenses.txt" "index.html" ) #todo this declaration fails


# Start
GIT_COMMIT_MSG="$(git show -s --format='[Travis automerge] %h %s')"
BRANCH_TO_MERGE="$(git show -s --format='test-site#%h')"

# Clone jdi-light and checkout the required branch
printf "\nChecking out ${JDI_LIGHT_GITHUB_REPO}\n"
REPO_TEMP="$(mktemp -d)"
git clone "https://github.com/${JDI_LIGHT_GITHUB_REPO}" "${REPO_TEMP}"
cd "${REPO_TEMP}"
git remote set-url origin "${PUSH_URI}"

printf "\nSwitching to ${JDI_LIGHT_BRANCH}\n"
git checkout "${JDI_LIGHT_BRANCH}"
git branch "${BRANCH_TO_MERGE}"
git checkout "${BRANCH_TO_MERGE}"


# Perform npm install in angular-site if not done yet
cd "${TEST_SITE_DIR}/${ANGULAR_SITE_DIR}"
([ ! -d "node_modules" ] && printf "\nPerforming npm install\n" && npm install)

# Build angular-site
printf "\nPerforming ng-build\n"
ng build --prod

# Copy the required files
printf "\nCopying the built files from ${ANGULAR_SITE_DIR}/dist/my-app/ to jdi-light/${JDI_LIGHT_ANGULAR_DIR}\n"
rm -rf "${REPO_TEMP}/${JDI_LIGHT_ANGULAR_DIR}/*"
cp -R "${TEST_SITE_DIR}/${ANGULAR_SITE_DIR}/dist/my-app/." "${REPO_TEMP}/${JDI_LIGHT_ANGULAR_DIR}/"

# These files are not needed. See beginning of script to find out why we don't iterate through an array here
rm -rf "${REPO_TEMP}/${JDI_LIGHT_ANGULAR_DIR}/3rdpartylicenses.txt"
rm -rf "${REPO_TEMP}/${JDI_LIGHT_ANGULAR_DIR}/index.html"

# Add new files to git
printf "\nAdding changes to git and checking the status.\n"
cd "${REPO_TEMP}/${JDI_LIGHT_ANGULAR_DIR}"
git add --all

# Detect if there are any changes
printf "\nChanges made since ${JDI_LIGHT_BRANCH} was checked out:\n"
git update-index --refresh
git diff-index --name-status HEAD
printf "End of list\n"

# This would stop the execution in case there is nothing to commit
git diff-index --quiet HEAD && exit 0 || printf "There are changes to be committed\n"

# Commit
printf "\nCommitting changes to ${JDI_LIGHT_BRANCH} branch of ${JDI_LIGHT_GITHUB_REPO}:\n"
git commit -a -m "${GIT_COMMIT_MSG}"
git status

# Push to a new branch of jdi-light
printf "\nPushing to ${BRANCH_TO_MERGE} of ${JDI_LIGHT_GITHUB_REPO}:\n"
git push origin "${BRANCH_TO_MERGE}"

# Create a pull request using hub
printf "\nCreating a pull request from ${BRANCH_TO_MERGE} to ${JDI_LIGHT_BRANCH}:/n"
hub pull-request --base "${JDI_LIGHT_BRANCH}" --head "${BRANCH_TO_MERGE}" --message "${GIT_COMMIT_MSG}"

printf "\nEnd of script\n"
