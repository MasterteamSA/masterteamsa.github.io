---
sidebar_position: 1
---

# Create a new repository

The first step to start a new client project is to create a new repository which uses the templete of one of the
products repos which are the following:

- ***[PPlus](https://github.com/MasterteamSA/pplus-web)***
- ***[SPlus](https://github.com/MasterteamSA/splus-web)***
- ***[Diwan](https://github.com/MasterteamSA/diwan-web)***

to do that we start by clicking the `New repository` button, located in the header bar or the organization page.

![Create Button](/img/create-repo/create-button.png)

## New repo settings

This will take you to the `Create a new repository` page where you have to configure a few settings.

### Template selection

First of all you should select the template you want the repo to be based on according the needed product.

- `MasterteamSA/pplus-web` for pplus
- `MasterteamSA/splus-web` for splus
- `MasterteamSA/diwan-web` for diwan

![Templete Selection](/img/create-repo/template-selection.png)

### Repository owner and name

Then you have to select the owner and name of the repository.

For the owner make sure to always select `MasterteamSA`.

For the naming of the repository it should be handled as follows:

- PPlus: `pplus-{{client-name}}-web`.
- SPlus: `splus-{{client-name}}-web`.
- Diwan: `diwan-{{client-name}}-web`.

![Owner and Name](/img/create-repo/owner-name.png)

### Repository access

Make sure the repository is set to `Private`.

![Repository Access](/img/create-repo/repo-access.png)

### Create the repo

Finally just click the `Create repository` button to create the repository.

## Add team access

After you create the new repository you have to manually set the team access for it, you can do that by following these
steps:

1- go to `Settings` -> `Manage access` -> `Invite teams or people`

![Team Access](/img/create-repo/team-access.png)

2- in the modal just type `frontend` and select the `MasterteamSA/frontend` option

![Select Team](/img/create-repo/select-team.png)

3- select `Write` from the role list, then click the `Add` button

![Select Role](/img/create-repo/select-role.png)

## Done

Now you're ready to clone the repository and start working, to see what are the first things to do after you clone the
repository please check ***[Configure the Project](./configure-the-project.md)***.
