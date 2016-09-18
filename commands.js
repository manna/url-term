var commands = [
  {
    'name' : 'ls <PATH>',
    'description' : "List all links in page indicated by PATH. If PATH is not indicated, list all links on the page."
  },
  {
    'name' : 'cd <PATH>',
    'description' : "Navigate to the webopage indicated by PATH. If PATH is relative,  navigate to relative path. If PATH is not indicated, navigate to HOME_PAGE set via export command."
  },
  {
    'name' : 'export <VAR_NAME>=<VAR_VALUE>',
    'description' : "Set VAR_NAME to VAR_VALUE."
  },
  {
    'name' : 'alias <EXISTING_COMMAND> <NEW_COMMAND>',
    'description' : "Set NEW_COMMAND to have identical functionality as EXISTING_COMMAND."
  },
  {
    'name' : 'echo <TEXT>',
    'description' : "Display TEXT in pop-up."
  },
  {
    'name' : 'man <COMMAND>',
    'description' : "Redirect user to manual page. If COMMAND is provided, redirect user to manual page for COMMAND."
  },
  {
    'name' : 'cat <'<ELEMENT>' | ID | . | ''>',
    'description' : "Displays html content of first occurrence of ELEMENT if provided. If ID provided, dispaly html content of element with id ID. If '.' or '' provided, display html content of page."
  }
  {
    'name' : 'grep <TOKEN>',
    'description' : "Search for TOKEN in current webpage."
  }
];