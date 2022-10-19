## Licensing

This project is licensed under BSD-3-Clause which means any forks of the project don't have to be open sourced. If you would like to download the code edit it to your own blog and not make it open source that is
perfectly fine.

## Layout

The layout is up to you on how you want to set things up in its current state it's pretty straightforward. I am using the NextJS framework for this template so any .js files inside of the pages directory will
automatically be created into a url you can visit no extra programming needed. I have organized things into folders inside of the pages directory for my blog to make things easier to find. The url will change
if you use a folder or multiple folders inside each other for example Linux/Gentoomusl is the url of one of my posts Linux being the folder then Gentoomusl being the .js file. If you wanted to add a second
sub directory it could look something like Linux/Gentoo/musl where musl would be the .js file. 

_app.js is a very important file this contains the code that should load on every single page it is setup to retain the template I have setup if you are looking to change the overall colors of the pages or design
look in here. Things like your header and footer are also found inside this file.

index.js is your Home Page everything can be changed for that in here.

Inside the components/Modals folder I have the basic templates for a modal that will load when you click on one of the buttons in the header. You can remove these if this isn't something you want. If your looking
to add more buttons in your header and therefore need more modals you will need to mimic the button configs for the current modals and add a few new variables similar to the current modals which different names of
course. Then just copy one of the current modals and paste into the same components/Modals folder and rename it and change it to your liking.

OnClickOutside shouldn't need to be touched this is to close the modals anytime the user clicks outside of the modal.

Images can be stored in the images folder in as many subdirectories as you like, just remember the directory to call when importing them into your posts.

This project is using TailwindCSS so any code you don't understand can be found in there documentation here - https://tailwindcss.com/docs/padding Just select whatever section you need on the left or search for it.
If you would like to add different colors to be used you can edit the tailwind.config.js file.

## I've never used NextJS what's different than React.

Not to much at least in this use case. Creating Links and adding Images is different, I have provided links to how to use below.

next/link - https://nextjs.org/docs/api-reference/next/link

next/image - https://nextjs.org/docs/api-reference/next/image#required-props

The only other thing you should need to know about is next/head which is where you add your meta tags (Stuff like description of your page when found in a search browser) and the page title (The text shown in the
tab of your browser).

next/head - https://nextjs.org/docs/api-reference/next/head

## I've never done web development how can I use this?

No worries you can use this as a test environment first you will need to fork the repository which can be done easily by clicking the fork button next to the stars icon below the search bar in the top right of 
the screen. After this you can git clone the directory or just download it whatever you prefer the command to git clone is below just remember to change it to your github username

`git clone https://github.com/your-username/Blog.git`

after this go into the directory and open a terminal or using the same terminal run

`cd Blog`

At this point you will need to have NodeJS installed which you can find out how to do here - https://nodejs.org/en/download/ 

LTS stands for Long Term Support it should work fine for this project. These versions are usually more stable as they don't contain bleeding edge changes.

This project is also using a package manager called yarn instead of the default npm from NodeJS so you will need to do 1 of 2 things you can either install yarn using this link - https://yarnpkg.com/getting-started/install
then continue to the next step. If that's not working for you then you can delete the file yarn.lock and use npm from here on I will provide commands for both.

First we need to install all the modules this repository is using we can do that by running

<b>npm</b>

`npm install`

<b>yarn</b>

`yarn install`

To start the server in a test environment we can run 

<b>npm</b>

`npm run dev`

<b>yarn</b>

`yarn run dev`

If you open your browser you can now go to the url <b>localhost:3000</b> and you should see the template loaded . Any changes you now make to the code will automatically be changed upon saving the file without re-running
the command just leave the terminal open in the background.

I'm not going to cover how to get the repository to an active url but you can look into something like github pages or use what I am using which is a website called Vercel. I have also provided some links on how to setup
git aswell as how to make a commit to push to your repository on your github account.


Deploy with github pages - https://www.viget.com/articles/host-build-and-deploy-next-js-projects-on-github-pages/ 

Deploy with Vercel - https://nextjs.org/learn/basics/deploying-nextjs-app/deploy

git config username - https://docs.github.com/en/get-started/getting-started-with-git/setting-your-username-in-git

git config email - https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address

To make the the push to your github repo there is a few steps you need to do first inside the Blog directory in a terminal run 

`git add .`

This will add changes in every file to the commit. You can also push 1 file incase you edited multiple files but only want 1 to be changed on github by running

`git add filename`

the filename can be say <b>pages/index.js</b> if you only wanted a change on your home page to get pushed. If you only edited 1 thing it's easier to just run the first command and include all changes.

Then we can make a commit by running

`git commit -m "Message of change"`

The message can say anything you want and must be in quotes for example "Changed text on index.js" after that we can finally push the changes to github first you will need to make a personal access token

you can read about this here - https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

This will be used as the "password" when pushing your commit.

To push the commit you can run

`git push -u origin main`

After running this it will ask for a username this is the email for your account after pressing enter it will ask for a password this will be the personal access token you created.

After this you should see the commit on your github account.
