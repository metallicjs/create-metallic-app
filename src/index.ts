import fs from 'fs';
import path from 'path';

import chalk from 'chalk';
import { Command } from 'commander';
import figlet from 'figlet';


import { createProject } from './createProject';

const packageJson = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8')
);


const program = new Command();

console.log(
  chalk.cyan(
    figlet.textSync('MetallicJS', { horizontalLayout: 'full' })
  )
);

program
  .name('create-metallic-app')
  .description('Create a new MetallicJS application')
  .version(packageJson.version)
  .argument('<project-directory>', 'Directory to create the project in')
  .option('-t, --template <template>', 'Template to use', 'saas-lite')
  .action(async (projectDirectory, options) => {
    try {
      const template = options.template;
      const validTemplates = ['saas-lite'];
      
      if (!validTemplates.includes(template)) {
        console.error(
          chalk.red(
            `Error: Invalid template "${template}". Valid templates are: ${validTemplates.join(', ')}`
          )
        );
        process.exit(1);
      }

      await createProject({
        projectName: projectDirectory,
        template: template,
      });
    } catch (error) {
      console.error(chalk.red('Error creating project:'), error);
      process.exit(1);
    }
  });

program.parse(process.argv);
