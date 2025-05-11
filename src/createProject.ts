import path from 'path';
import os from 'os';
import { v4 as uuidv4 } from 'uuid';
import chalk from 'chalk';
import fs from 'fs-extra';
import ora from 'ora';
import degit from 'degit';

interface CreateProjectOptions {
  projectName: string;
  template: string; // should be a subfolder like 'saas-lite'
}

export async function createProject(options: CreateProjectOptions): Promise<void> {
  const { projectName, template } = options;
  const projectPath = path.resolve(process.cwd(), projectName);

  if (fs.existsSync(projectPath)) {
    console.error(
      chalk.red(
        `Error: Directory ${chalk.cyan(projectName)} already exists. Please choose a different project name.`
      )
    );
    process.exit(1);
  }

  const spinner = ora(`Downloading ${chalk.cyan(template)} template from GitHub...`).start();

  const tempDir = path.join(os.tmpdir(), `metallicjs-template-${uuidv4()}`);
  const repo = 'metallicjs/templates#main';

  try {

    const emitter = degit(repo, {
      cache: false,
      force: true,
      verbose: false,
    });

    await emitter.clone(tempDir);

    const templateDir = path.join(tempDir, template);

    if (!fs.existsSync(templateDir)) {
      spinner.fail(`Template "${template}" not found.`);
      process.exit(1);
    }

    spinner.text = `Copying template files...`;

    await fs.copy(templateDir, projectPath);

    // Update package.json if it exists
    const packageJsonPath = path.join(projectPath, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = await fs.readJson(packageJsonPath);
      packageJson.name = projectName;
      await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
    }

    spinner.succeed(`Created a new MetallicJS app in ${chalk.cyan(projectPath)}`);

    console.log('\nNext steps:');
    console.log(`  ${chalk.cyan('cd')} ${projectName}`);
    console.log(`  ${chalk.cyan('npm install')} (or ${chalk.cyan('yarn')}, or ${chalk.cyan('pnpm install')})`);
    console.log(`  ${chalk.cyan('npm run dev')} (or ${chalk.cyan('yarn dev')}, or ${chalk.cyan('pnpm dev')})`);
    console.log('\nHappy coding!');
  } catch (error) {
    spinner.fail('Failed to create the project');
    console.error(error);
    process.exit(1);
  }
}
