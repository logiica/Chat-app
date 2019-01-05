# chat
chat app is based on Per Harald Borgen's Blog Article "How to build a React.js chat app in 10 minutes".  It uses React with ChatKit.

See Feature Request list below for possible project plans.

# Installation Instructions
Fork and clone this GIT repo. 
Set up frontend by running npm install

# Running chat
To run, npm start

For demo purposes, room and current user is hardcoded (see src/components/App.js).   To 
set up a different room and user, go to https://pusher.com/

# Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/'BarbaraPruz'/chat. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

# License
Open source under the terms of the MIT License.

# Code of Conduct
Everyone interacting in the ike project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the code of conduct.

# Feature Request List
- "Login" as a ChatKit user (no signup yet but that could be added).  There is no current
   authentication.  Just "login" and provide a user id (known to ChatKit for the room)
- Authenticate user (tbd: rails backend with user details?)
- Signup (creates a user on chatkit)
- "Production" - don't use ChatKit test token provider.  Create a token provider.
