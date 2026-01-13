# Company Git Challenge

Welcome to the Git evaluation repository. This repository simulates a real-world development scenario where you'll work with Git to fix bugs, add features, and handle common collaboration situations.

## Prerequisites

- Node.js installed (v14 or higher)
- Git installed and configured
- Basic knowledge of Git commands

## Getting Started

### Task 1: Repository Setup

1. Clone this repository to your local machine
2. Navigate to the repository directory
3. Run the application: `node app/index.js`
4. Observe the output - you should notice that the addition test fails
5. Use `git status` to check the current state of your repository
6. Use `git log` to view the commit history

**Deliverable:** Confirm that you can see the bug in the calculator output.

---

### Task 2: Bug Fix (Branching)

The `add()` function in `app/calculator.js` has a bug. Your task is to fix it using proper Git workflow.

1. Create a new branch named `fix/addition-bug` from the current branch
2. Switch to this new branch
3. Fix the bug in the `add()` function (it should return `a + b`)
4. Test your fix by running `node app/index.js` - the addition test should now pass
5. Stage your changes
6. Commit with a clear, descriptive commit message following best practices
7. Push this branch to the remote repository

**Deliverable:** A new branch with a commit that fixes the addition bug.

**Note:** Do NOT merge this branch yet. We'll handle that in a later task.

---

### Task 3: Upstream Conflict Simulation

Your mentor has pushed changes to the `main` branch while you were working. You need to integrate these changes.

**Scenario:** The mentor has updated `docs/roadmap.md` with new content. You need to pull these changes and resolve any conflicts.

1. Switch back to the `main` branch
2. Pull the latest changes from the remote `main` branch
3. If there are conflicts, resolve them appropriately
4. After resolving conflicts (if any), push your updated `main` branch

**Deliverable:** Your local `main` branch is up-to-date with remote, and any conflicts are resolved.

---

### Task 4: Feature Development

Add a new feature to the calculator: multiplication.

1. Create a new branch from `main` named `feature/multiplication`
2. Add a `multiply(a, b)` function to `app/calculator.js`
3. Export the new function from the module
4. Update `app/index.js` to test the new function (add a test case similar to the existing ones)
5. Test your implementation
6. Commit your changes with an appropriate message
7. Push the branch to remote
8. Merge this branch into `main` (use a merge commit, not rebase)
9. Push the updated `main` branch

**Deliverable:** A new multiplication feature merged into `main`.

---

### Task 5: Mistake Recovery

You've made a commit that you need to undo, but you've already pushed it to the remote repository.

**Scenario:** After merging the multiplication feature, you realize that the last commit message was incorrect or you need to undo a specific change. However, since it's already pushed, you cannot use `git reset`.

1. Identify the commit hash of the last commit using `git log`
2. Use `git revert` to create a new commit that undoes the changes
3. Push the revert commit to the remote repository

**Important:** Do NOT use `git reset` or `git push --force` on the `main` branch. Use `git revert` instead.

**Deliverable:** The problematic commit is reverted using `git revert`, and the revert is pushed to remote.

---

### Task 6: History Review

Review the Git history and answer the following:

1. Use `git log` to view the commit history
2. Find the commit hash of the commit that fixed the addition bug
3. Use `git show <commit-hash>` to view the details of that commit
4. Identify the author and date of the multiplication feature commit
5. List all branches (local and remote) using appropriate Git commands

**Deliverable:** Document the commit hash of the bug fix commit.


---

## Final Checklist

Before submitting your work, ensure:

- [ ] All tasks are completed
- [ ] All branches are pushed to remote
- [ ] `main` branch contains the bug fix and multiplication feature
- [ ] No force pushes were used on `main`
- [ ] Commit messages follow best practices
- [ ] Your repository history is clean and logical

## Submission

Push all your branches and commits to the remote repository. Your mentor will review your Git history and evaluate your work.

## Important Notes

- **DO NOT** use `git push --force` on the `main` branch
- **DO NOT** use `git reset` on commits that have been pushed
- Always create branches for new work
- Write clear, descriptive commit messages
- Test your code before committing

Good luck!

