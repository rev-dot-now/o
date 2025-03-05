![image](https://github.com/user-attachments/assets/20cbd02a-47be-4dc2-b3e9-ab89f83bff88)

# **o** 🌀 - Your AI-Powered CLI Companion!

Welcome to **o**—your self-referential CLI tool that’s here to revolutionize the way you think about programming and content generation! 🚀✨ Short for "ouroboros" 🐍, **o** is not just a tool; it's your new best friend in the world of meta-programming with AI. Whether you're a seasoned developer or just starting out, **o** makes coding feel like a breeze! 🌬️💻

## Why You'll Love **o** ❤️

- **AI Magic**: Harness the power of AI with tools that understand your needs and adapt to your workflow.
- **Cross-Platform**: Built with the latest tech stack, **o** runs smoothly on any platform. No more compatibility headaches! 🛠️
- **Community Driven**: Join a growing community of innovators and creators. Your ideas can shape the future of **o**!

## Table of Contents

- [Tools](tools)
- [Installation from Source](#installation-from-source)
- [Run Locally](#run-locally)
- [Build](#build)
- [Usage Examples](#usage-examples)
  - [Vanilla Mode](#vanilla-mode)
  - [Read Input from Stdin](#read-input-from-stdin)
  - [Use System Prompts](#use-system-prompts)
- [Technologies Used](#technologies-used)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)
- [Contact](#contact)

## Tools

The **o** architecture has several tools available for basic file-system operations, all powered by the latest in AI technology. Here’s what you can do:
- **dir-create**: Create a directory.
- **dir-delete**: Delete a directory.
- **dir-read**: Read the contents of a directory.
- **file-delete**: Delete a file.
- **file-info**: Get info about a file.
- **file-read**: Read the contents of a file.
- **file-rename**: Rename a file.
- **file-write**: Write to a file.

These tools may sound basic, but they are the foundation of **o**'s unique capabilities. You can easily ask **o** to create new tools from scratch! During development, only two tools—`file-read` and `file-write`—were initially created. All other tools were generated within **o**'s self-hosted environment. 🌱

## Installation from Source

Getting started with **o** is a breeze! Just clone the repository and install Bun, and you’re ready to dive into the world of meta-programming and content generation like never before.

- Install Bun:
  [Documentation](https://bun.sh/docs/installation)
- Clone the repository:
  ```bash
  git clone https://github.com/rev-dot-now/o.git
  ```
- Create a file called `.env.local`.
- In `.env.local` add the following.
  ```
  OPENAI_API_KEY="[YOUR_API_KEY]"
  ```

## Run Locally

Ready to see **o** in action? Running it locally is straightforward. Fire up your terminal and run the command below. You’ll be generating content and automating tasks in no time!

```bash
bun run dev
```

## Build

Want to take it a step further? Building the **o** command is your next move. This will create the `o` command in the `dist/` folder at the root of the project. Once built, you can copy the produced binary and use it anywhere on your system.

```bash
bun run build
```

## Usage Examples

With **o** successfully set up, let's explore some practical examples of its capabilities. With **o**, you can generate content, automate repetitive tasks, and explore the depths of meta-programming.

### Vanilla Mode

```bash
# You can run the tool without any arguments to start a dialog with the agent.
$ bun run dev
> Hello there!
Hello! How can I assist you today?
> What can you do?
I can help you with various command line tasks, including:
- Creating and deleting directories
- Reading the contents of directories
- Deleting and renaming files
- Reading file contents and getting file information
- Writing content to files

If you have a specific task in mind, just let me know!
```

### Read Input from Stdin

```bash
# You can pass in a string from stdin to start the conversation
$ bun run dev "Write a poem about penguins to blah.txt."
> Write a poem about penguins to blah.txt.
I have saved a poem about penguins to the file "blah.txt". If you have any other requests, just let me know!
> Read ./blah.txt.
Here is the content of "blah.txt":

In icy realms where cold winds blow,
The penguins waddle, row by row.
With tuxedo suits, so sharp and neat,
They march along on flippered feet.

On frozen shores, they dive and play,
In crystal waters, they glide away.
With joyful calls, they greet the day,
In their frosty world, they find their way.

Through blizzards fierce and storms that roar,
They huddle close, a loving core.
In family bonds, they find their strength,
Together they journey, at any length.

With hearts so warm in the coldest place,
These charming birds, with their gentle grace.
Oh, penguins dear, in your icy land,
You dance through life, a merry band.

If you need anything else, just let me know!
```

### Use System Prompts

```bash
echo "You only speak in riddles." > prompt.txt

# The `-s` flag specifies the location of a system prompt.
$ bun run dev -s ./prompt.txt "Hello there."
> Hello there.
In shadows I dwell, where whispers reside,  
What brings you to me, with secrets to confide?  
Speak your riddle, and I shall reply,  
For in puzzles and queries, our thoughts can fly.
> What is the capitol of Luxembourg?
A tiny realm, where the rivers flow,  
Its heart beats strong, yet few may know.  
With cobblestone streets and a fortress grand,  
What city is this, in a small, proud land?
```

## Technologies Used

**o** is built on a powerful tech stack that includes:
- **Ink**: A library for building interactive command-line applications, enhancing the user experience.
- **React**: For building user interfaces.
- **LangChain**: To leverage advanced AI capabilities.
- **Redux Toolkit**: For state management.
- **TypeScript**: Ensuring type safety and better developer experience.
- **Bun**: A fast JavaScript runtime for modern web applications.

Check out the full list of dependencies in our [package.json](./package.json) for more details!

## Contribution Guidelines

We welcome contributions! If you have ideas, suggestions, or improvements, please feel free to contribute. Together, we can make **o** even better!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. We’re excited to share **o** with the world!

## Contact

If you have questions or need support, we're here to help! Feel free to reach out to us at <a href="mailto:hans@oksendahl.com">hans@oksendahl.com</a>. We love hearing from our users! 🌟