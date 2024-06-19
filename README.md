<p align="center">
  <a href="https://liveblocks.io#gh-light-mode-only">
    <img src="https://raw.githubusercontent.com/liveblocks/liveblocks/main/.github/assets/header-light.svg" alt="Liveblocks" />
  </a>
  <a href="https://liveblocks.io#gh-dark-mode-only">
    <img src="https://raw.githubusercontent.com/liveblocks/liveblocks/main/.github/assets/header-dark.svg" alt="Liveblocks" />
  </a>
</p>

# Advanced Collaborative Rich Text Editor (Tiptap)

## Important steps for Execution

- Please click on 'Sign In' to reach the main UI page
- Please ensure to log out of each Session


## Technology Used
- Next.js - Typescript/React
- Supabase - ORM & DB
- Yjs
- LiveCode
- TipTap
- Next-Auth v5
- Shadcn UI


## To run locally

- Download the Github Zip for the repository
- Initialize your local .env variables
- Run the following commands -

  `npm install`

  `npm run dev`


## Features implemented
Authentication:
- Implement authentication mechanism to ensure that only registered users can <br/>
access the application.
- Additional:
  - User Session management

<a href="https://ibb.co/qnC0dMz"><img src="https://i.ibb.co/hMcXyRk/Screen-Shot-2024-06-19-at-3-04-27-PM.png" alt="Screen-Shot-2024-06-19-at-3-04-27-PM" border="0"></a>


Authorization:
- By default, you can implement a model without any roles i.e., one user creates a <br/>
document and invites other users to collaborate. Everyone has the ability to do all <br/>
the actions.
- Additional: Implement an owner-collaborator model:(Added role to database)

<a href="https://ibb.co/styDTPY"><img src="https://i.ibb.co/ZNWwQJD/Screen-Shot-2024-06-19-at-3-24-14-PM.png" alt="Screen-Shot-2024-06-19-at-3-24-14-PM" border="0"></a>

Data Storage:
- Implement a simple database to store user information, including usernames and <br/>
passwords.
- Store the document content and its corresponding permissions in the database. (Stores the document locally in session currrently, can be viewed in logs)
- Additional:
  -  Implement best practices to store user credentials and ensure that proper
security measures are in place to protect user data.


<a href="https://ibb.co/5rsW6N2"><img src="https://i.ibb.co/hB2RyPC/Screen-Shot-2024-06-19-at-3-33-02-PM.png" alt="Screen-Shot-2024-06-19-at-3-33-02-PM" border="0"></a>


Collaboration:
- The application should support collaborative plain text editing.
- Additional:
- Support rich text editing.
- Support adding “shapes” or other objects in the document and work on it
collaboratively.

<a href="https://ibb.co/tmTZDXG"><img src="https://i.ibb.co/3r9fcz3/Screen-Shot-2024-06-19-at-3-36-50-PM.png" alt="Screen-Shot-2024-06-19-at-3-36-50-PM" border="0"></a>


## Structure of the files - 

Made with <3 by @[Mohith2017](https://github.com/mohith2017)

