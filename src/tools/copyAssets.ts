import * as shell from "shelljs";

// Copy all the view templates
shell.cp( "-R", "client/dist", "build/public" );