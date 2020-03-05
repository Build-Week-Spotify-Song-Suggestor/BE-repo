This is the template for the Product Vision Document that teams complete after their initial icebreaker. The PVD is crucial to the planning phase and is mandatory for all groups to complete and submit to their Project Lead before starting their project.
☝️ Proposal
________________


* What problem does your app solve?
   * Problem: Finding music can be a pain, and time consuming, we want to improve time efficiency;
* Be as specific as possible; how does your app solve the problem?
   * ML: Improves on personalization with regard to suggestions; ML algo to provide better suggestions
   * Finding music can be a pain; this song suggester provides suggestions
   * Curate music
   * Offers insight on personal preference
   * UX design will improve on aesthetics
* What is the mission statement?
   * Less time searching and more time listening.  Help individuals find songs they want to listen to based on previously heard by improving on the machine learning suggestions.
💡 Features
________________


* What features are required for your minimum viable product?
   * ReactOne: Login Form, Search Form, Main Page
   * Marketing:  Landing Page (Main Page, Login Page) (suggestion: about page -> team), 
   * Backend: Username and pw auth, DB (comm with DS/ML)
   * DS: functional app that populates data (heroku) Kink: find where the data is coming from; will try to use the Spotify API
   * ML: .py file that connects to DS created API and feeds back to DB, eventually
   * UX: ??
* What features may you wish to put in a future release?
   * Extension to existing app
   * Connect to actual Spotify user account to push a  suggested song to a playlist, ready to listen.
   * Song preview
   * YouTube vid suggestions
* What do the top 3 similar apps do for their users?
   * They all suggest, but in different ways?
   * Provide playlists
   * They allow for playlist curation
🛠 Frameworks - Libraries
________________


* What 3rd party frameworks/libraries are you considering using?
   * ML: possibly use Keras, Tensorflow et al
   * DS: Flask, SQLAlchemy
   * Backend: KNEX, Express, JSONWEBTOKEN
   * ReactTwo: CSS module, Styled-components, Formik
   * ReactOne/Marketing: SASS
* Do the APIs you need require you to contact them to gain access?
   * DS: yes
   * Backend: no
* Are you required to pay to use said API(s)?
   * Spotify? Need to find out.
🧮 For Data Scientists
________________


* Describe the established data source with at least rough data able to be provided on day one.
   * (will come back to)
* Write a description for what the data science problem is. What uncertainty or prediction are you trying to discover? How could this data be used to find a solution to this problem?
   * Problem: Need to suggest music based on params
      * Params: song data, music metadata
   * Certainty/prediction: predict preferences
   * Data solutions to problem: Better predictions/suggestions
* What kind of target output can you deliver to the Web/UX/iOS teams to work with? Is it in JSON format or something else?
   * Depends on what kind of input needs; JSON would be ideal
🎯 Target Audience
________________


* Who is your target audience? Be specific.
   * Everyone.
   * People with spotify accounts; demographic breakdown
* What feedback have you gotten from potential users?
   * No feedback; will back to.
* Have you validated this problem and your solution with a target audience? Describe how,
   * Not all.  New song suggestions that are actually prefered; approach to problem is feasible.
________________


🔑 Prototype Key Feature(s)
________________


* How long do you think it will take to implement these features?
   * ML: Potentially a day or two
   * DS: couple days
   * Marketing: few days
   * Backend: Before monday
   * Overall group: Tuesday, Wednesday adhere product, polish on thursday
* Do you anticipate working on stretch functionality after completion of a Minimal Viable Product?
   * Yes, because portfolio.
