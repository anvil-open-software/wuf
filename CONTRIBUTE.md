# Contributing to WUF

We would love for you to contribute to WUF and help make it even better
than it is today! As a contributor, here are the guidelines we would like you
to follow:

 - [Code of Conduct](#coc)
 - [Question or Problem?](#question)
 - [Issues and Bugs](#issue)
 - [Feature Requests](#feature)
 - [Submission Guidelines](#submit)
 - [Coding Rules](#rules)
 - [Commit Message Guidelines](#commit)
 - [Personas](#personas)
 - [Workflow](#workflow)

## <a name="coc"></a> Code of Conduct
Help us keep WUF thrive thru open and respectful contributions. 

As contributors and maintainers of the WUF project, we pledge to respect everyone who contributes by posting issues, updating documentation, submitting pull requests, providing feedback in comments, and any other activities.

Communication through any of WUF's channels (GitHub, Twitter, etc.) must be constructive and never resort to personal attacks, trolling, public or private harassment, insults, or other unprofessional conduct.

We promise to extend courtesy and respect to everyone involved in this project and expect anyone contributing to it to do the same.

If any member of the community violates this code of conduct, the maintainers of the WUF project may take action, removing issues, comments, and PRs or blocking accounts as deemed appropriate.

If you are subject to or witness unacceptable behavior, or have any other concerns, please email us at [WUF Conduct](mailto:anvil-open-source@gmail.com).

## <a name="question"></a> Got a Question or Problem?

Please, do not open issues for the general support questions as we want to keep WUF issues for
bug reports and feature requests. You've got much better chances of getting your question answered
on [StackOverflow](https://stackoverflow.com) where the questions
should be tagged with tag `WUF`.

StackOverflow is a much better place to ask questions since:

- there are thousands of people willing to help on StackOverflow
- questions and answers stay available for public viewing so your question / answer might help someone else
- StackOverflow's voting system assures that the best answers are prominently visible.

To save your and our time we will be systematically closing all the issues that are requests for
general support and redirecting people to StackOverflow.

## <a name="issue"></a> Found an Issue?
If you find a bug in the source code or a mistake in the documentation, you can help us by
[submitting an issue](#submit-issue) to our [GitHub Repository](https://github.com/anvil-open-software/wuf/issues). Even better, you can
[submit a Pull Request](#submit-pr) with a fix.

When reporting an Issue, commenting on it, or submitting a pull request you agree to abide by the [Code of Conduct](#coc).

## <a name="feature"></a> Want a Feature?
You can *request* a new feature by [submitting an issue](#submit-issue) to our [GitHub
Repository][github]. If you would like to *implement* a new feature, please submit an issue with
a proposal for your work first, to be sure that we can use it.
Please consider what kind of change it is:

* For a **Major Feature**, first open an issue and outline your proposal so that it can be
discussed. This will also allow us to better coordinate our efforts, prevent duplication of work,
and help you to craft the change so that it is successfully accepted into the project.
* **Small Features** can be crafted and directly [submitted as a Pull Request](#submit-pr).

When requesting a feature, commenting on it, or submitting a pull request you agree to abide by the [Code of Conduct](#coc).

## <a name="submit"></a> Submission Guidelines

### <a name="submit-issue"></a> Submitting an Issue

Before you submit an issue, please search the issue tracker, maybe an issue for your problem already exists and the discussion might inform you of workarounds readily available.

We want to fix all the issues as soon as possible, but before fixing a bug we need to reproduce and confirm it. Having a reproducible scenario gives us wealth of important information without going back & forth to you with additional questions like:

- version of WUF used
- 3rd-party libraries and their versions
- and most importantly - a use-case that fails

A minimal reproduce scenario using allows us to quickly confirm a bug (or point out coding problem) as well as confirm that we are fixing the right problem.

We will be insisting on a minimal reproduce scenario in order to save maintainers time and ultimately be able to fix more bugs. Interestingly, from our experience users often find coding problems themselves while preparing a minimal repository. We understand that sometimes it might be hard to extract essentials bits of code from a larger code-base but we really need to isolate the problem before we can fix it.

Unfortunately we are not able to investigate / fix bugs without a minimal reproduction, so if we don't hear back from you we are going to close an issue that don't have enough info to be reproduced.

You can file new issues by filling out our [new issue form](https://github.com/anvil-open-software/wuf/issues/new).


### <a name="submit-pr"></a> Submitting a Pull Request (PR)
Before you submit your Pull Request (PR) consider the following guidelines:

* Search [GitHub](https://github.com/anvil-open-software/wuf/issues) for an open or closed PR
  that relates to your submission. You don't want to duplicate effort.
* Make your changes in a new git branch:

     ```shell
     git checkout -b my-fix-branch master
     ```

* Create your patch, **including appropriate test cases**.
* Follow our [Coding Rules](#rules).
* Run the full WUF test suite, as described in the [developer documentation][dev-doc],
  and ensure that all tests pass (coming soon).
* Commit your changes using a descriptive commit message that follows our
  [commit message conventions](#commit). Adherence to these conventions
  is necessary because release notes are automatically generated from these messages.

     ```shell
     git commit -a
     ```
  Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

* Push your branch to GitHub:

    ```shell
    git push origin my-fix-branch
    ```

* In GitHub, send a pull request to `wuf:master`.
* If we suggest changes then:
  * Make the required updates.
  * Re-run the WUF test suites to ensure tests are still passing.
  * Rebase your branch and force push to your GitHub repository (this will update your Pull Request):

    ```shell
    git rebase master -i
    git push -f
    ```

That's it! Thank you for your contribution!

#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes
from the main (upstream) repository:

* Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

    ```shell
    git push origin --delete my-fix-branch
    ```

* Check out the master branch:

    ```shell
    git checkout master -f
    ```

* Delete the local branch:

    ```shell
    git branch -D my-fix-branch
    ```

* Update your master with the latest upstream version:

    ```shell
    git pull --ff upstream master
    ```

## <a name="rules"></a> Coding Rules
To ensure consistency throughout the source code, keep these rules in mind as you are working:

* All features or bug fixes **must be tested** by one or more specs (unit-tests or e2e-tests).
* All public API methods **must be documented**. (Details TBC).
* We follow [Google's JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html), but wrap all code at
  **100 characters**.

## <a name="commit"></a> Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted.  This leads to **more
readable messages** that are easy to follow when looking through the **project history**.  But also,
we use the git commit messages to **generate the WUF change log**.

### Commit Message Format
Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

### Revert
If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type
Must be one of the following:

* **build**: Changes that affect the build system or external dependencies. [2]
* **ci**: Changes to our CI configuration files and scripts. [2]
* **docs**: Documentation only changes. 
* **feat**: A new feature. [1]
* **fix**: A bug fix. [1]
* **refactor**: A code change that neither fixes a bug nor adds a feature 
* **release**: A release commit. Must only include version changes. [2]
* **revert**: A git commit revert. The description must include the original commit message. [2]
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc). 
* **test**: Adding missing tests or correcting existing tests. 


<sup>[1] This type MUST have a scope. See the next section for more information.</sup><br/>
<sup>[2] This type MUST NOT have a scope. It only applies to general scripts and tooling.</sup>

### Scope
The scope should be the name of the npm package affected as perceived by the person reading changelog generated from the commit messages.

The following is the list of supported scopes:

* **WUF**


### Subject
The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* be concise and direct
* no dot (.) at the end

### Examples
Examples of valid commit messages:

* `fix(WUF): prevent the flubber from grassing`
* `refactor(WUF): move all JSON classes together`

Examples of invalid commit messages:
* `fix(WUF): add a new XYZ command`

  This is a feature, not a fix.
* `ci(WUF): fix publishing workflow`

  The `ci` type cannot have a scope.

### Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer
The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

A detailed explanation can be found in this [document][commit-message-format].

## <a name="personas"></a> Personas
* **Contributor**: Anyone who actively develops and contributes to WUF; a contributor has contributor authority.
* **Core Committee**: A committee responsible for steering WUF'  issue discussion, prioritization, and scheduling. Anyonue with repository ADMIM privilege is a core committee member.
* **Core Committee Member**: A stakeholder or contributor who belongs in the Core Committee.
* **Pull Request Executor**: A project contributor who has pull request approval authority; a pull request approver has pull request review authority.
* **Pull Request Reviewer**: A project contributor who has pull request review authority; a pull request reviewer has contributor authority.
* **Stakeholder**: Anyone who uses WUF and / or submits Enhancement Requests / bug reports / Questions for WUF.


## <a name="workflow"></a> Workflow
* **Issue Submission**: Stakeholders submit issues (features enhancement / bug fixes / questions).
* **Issue Discussion**: Core committee member moderate issue discussions, using the project issue management tool.
* **Issue Prioritization**: Core committee member moderates issue prioritization discussions.
* **Issue Scheduling**: Core committee member moderate issue scheduling discussions.
* **Issue Ownership**: A contributor takes ownership of an issue.
* **Project Branching / Forking**: A contributor creates a project branch or fork to work on one an issue, and works on it.
* **Pull Request Submission**: A contributor submits a pull request, supported by an issue.
* **Pull Request Review**: A pull request must be reviewed before it is executed. A pull request reviewer chooses to review a pull request submission; submissions that have been prioritized and scheduled are likely to be reviewed first. The reviewers review the request ensuring it adheres to the project’s CONTRIB guidelines. A pull request must be approved by two distinct individuals.
* **Pull Request Execution**:  A pull request executor chooses to merge an approved pull request.
* **Project Release**: The Core Committee releases a project version consisting of the most recent approved pull requests.