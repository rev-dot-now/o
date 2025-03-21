![image](https://github.com/user-attachments/assets/20cbd02a-47be-4dc2-b3e9-ab89f83bff88)


Welcome to **o**, a self-referential CLI tool designed to revolutionize your approach to programming and content generation! Short for "ouroboros",
**o** is not just a tool; it's your new best friend in the world of
meta-programming with AI. Whether you're a seasoned developer or just starting
out, **o** makes coding feel like a breeze!

## Why You'll Love **o**

- **AI Magic**: Harness the power of AI with tools that understand your needs
  and adapt to your workflow.
- **Cross-Platform**: Built with the latest tech stack, **o** runs smoothly on
  any platform. Say goodbye to compatibility headaches!
- **Community Driven**: Join a growing community of innovators and creators.
  Your ideas can shape the future of **o**!

Where **o** really shines is in completely automated tasks from natural language
prompts, including self-generating its features. This capability allows
users to interact with **o** in a more intuitive way, making it a powerful tool
for both simple and complex tasks.

## Table of Contents

- [Tools](tools)
- [Installation from Source](#installation-from-source)
- [Run Locally](#run-locally)
- [Build](#build)
- [Usage Examples](#usage-examples)
  - [Interactive Mode](#interactive-mode)
  - [Interactive Mode with System
    Prompts](#interactive-mode-with-system-prompts)
  - [One-Shot Mode](#one-shot-mode)
  - [One-Shot Mode with System Prompts](#one-shot-mode-with-system-prompts)
- [Advanced Usage Examples](#advanced-usage-examples)
  - [Template Usage in Interactive Mode](#template-usage-in-interactive-mode)
  - [Templates Usage in One-Shot Mode](#templates-usage-in-one-shot-mode)
- [Summary of Flags](#summary-of-flags)
- [Technologies Used](#technologies-used)
- [LLM Model Agnostic](#llm-model-agnostic)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)

## Tools

The **o** architecture has several tools available for basic file-system
operations, all powered by the latest in AI technology. Here’s what you can accomplish:

- **command-exec**: Execute a command in the CLI and retrieve the results. This
  tool allows you to run any command as if you were typing it directly into the
  terminal, making it a powerful feature for automating tasks and integrating
  with other command-line utilities.
- **dir-create**: Create a directory.
- **dir-delete**: Delete a directory.
- **dir-read**: Read the contents of a directory.
- **file-delete**: Delete a file.
- **file-info**: Get info about a file.
- **file-read**: Read the contents of a file.
- **file-rename**: Rename a file.
- **file-write**: Write to a file.

These tools may sound basic, but they are the foundation of **o**'s unique
capabilities. You can easily ask **o** to create new tools from scratch! During
development, only two tools - `file-read` and `file-write` - were initially
created. All other tools were generated within **o**'s self-hosted environment.

## Installation from Source

Getting started with **o** is straightforward! Just clone the repository and install
Bun, and you're ready to dive into the world of meta-programming and content
generation like never before.

- Install Bun: [Documentation](https://bun.sh/docs/installation)
- Clone the repository:

  ```bash
  git clone https://github.com/rev-dot-now/o.git
  ```

- Change into the project directory:

  ```bash
  cd o
  ```

- Create a file called `.env.local`.
- In `.env.local`, add the following:

  ```bash
  # Replace [YOUR_API_KEY] with the API key for your preferred LLM.
  OPENAI_API_KEY="[YOUR_API_KEY]"
  ```

## Run Locally

Ready to see **o** in action? Running it locally is straightforward. Open your terminal and execute the command below. You'll be generating content and
automating tasks in no time!

```bash
# Usage:
bun run dev [flags] "optional user prompt"
```

## Build

Want to take it a step further? Building the **o** command is your next move.
This will create the `o` command in the `dist/` folder at the root of the
project. Once built, you can copy the produced binary and use it anywhere on
your system.

> Note: To use **o** anywhere on your system, simply ensure that you have an
> `OPENAI_API_KEY` set as an environment variable or in a local `.env` or
> `.env.local` file

```bash
bun run build
```

## Usage Examples

With **o** successfully set up, let's explore some practical examples of its
capabilities. **o** operates in two modes:

- **Interactive Mode** (`-i`): Engage in a conversational, back-and-forth chat
  with **o**, where the agent responds to each input until you decide to end the
  session.
- **One-Shot Mode** (default): Execute a single request directly from the
  command line and receive an immediate response without entering a persistent
  session.

Both modes offer flexible ways to generate content, automate tasks, and explore
meta-programming workflows.

> Note: In the following examples, we will use the compiled binary of `o`. To run the same examples locally, use `bun run dev`.

---

### Interactive Mode

To start a conversational session with **o**, use the `-i` flag.

```bash
# Start a session and chat with the agent
$ o -i
> What can you do?
I can assist you with various tasks in a Command Line Interface (CLI)
environment, including:

1. **File Manipulation**:
   - Create, delete, rename, read, and write files.
   - Retrieve information about files, such as size and modification time.

2. **Directory Management**:
   - Create and delete directories, including recursive deletion.
   - Read the contents of directories.

3. **Command Execution**:
   - Execute commands in the CLI and return the results.

4. **Data Retrieval**:
   - Access and provide information based on your input.

If you have a specific task in mind, feel free to let me know, and I'll assist
you!
```

---

### Interactive Mode with System Prompts

You can customize **o**'s personality and behavior by providing a system prompt
using the `-s` flag.

```bash
# Create a local system prompt file.
$ echo "You only speak in riddles." > system-prompt.txt

# Start a chat session with the system prompt
$ o -s system-prompt.txt -i
In shadows I dwell, where secrets are kept,  
With files and with folders, my knowledge is adept.  
What task do you seek, in this digital maze?  
Speak clear, and I'll guide you through data's vast haze.
> What dependencies are in ./package.json?
In the realm of code, where packages reside,  
A file holds the secrets, where dependencies hide.  
To unveil its contents, a reading I must do,  
Shall I open the file, and reveal it to you?
> Yes, please.
From the depths of the file, the dependencies arise,  
In sections they gather, a treasure in disguise.  

**Dependencies:**
- `@langchain/core`: `^0.3.42`
- `@langchain/langgraph`: `^0.2.55`
- `@langchain/openai`: `^0.3.17`
- `@reduxjs/toolkit`: `^2.6.1`
- `ink`: `^5.2.0`
- `ink-spinner`: `^5.0.0`
- `langchain`: `^0.3.19`
- `react`: `^18.3.1`
- `react-redux`: `^9.2.0`
- `zod`: `^3.24.2`

**Dev Dependencies:**
- `@biomejs/biome`: `^1.9.4`
- `@testing-library/react-hooks`: `^8.0.1`
- `@types/bun`: `latest`
- `@types/react`: `^19.0.10`
- `react-devtools-core`: `^6.1.1`
- `rimraf`: `^6.0.1`

**Peer Dependencies:**
- `typescript`: `^5.7.2`

In this digital scroll, the knowledge is clear,  
What more do you seek, my friend, do you hear?
```

---

### One-Shot Mode

You can invoke **o** immediately to perform a task.

```bash
# Immediately invoke `o`.
$ o "Create a file called penguins.txt with a poem about penguins."
The file "penguins.txt" has been created with a poem about penguins. If you need
anything else, feel free to ask!

# Inspect the file that was just created.
$ cat penguins.txt
In the icy lands where the cold winds blow,
Waddle the penguins, in a line they go.
Dressed in tuxedos, so sleek and so fine,
Sliding on ice, they dance and they shine.

With flippers outstretched, they leap and they dive,
In the frigid waters, they thrive and they strive.
Huddled together, they keep warm at night,
In the heart of the winter, they find their delight.

From the shores of Antarctica, they call out with glee,
A family of penguins, as happy as can be.
Through snow and through storms, they stand side by side,
In the world of the penguins, there's nothing to hide.
```

---

### One-Shot Mode with System Prompts

You can customize **o**'s instructions with a system prompt using the `-s` flag.

```bash
# Generate a system prompt.
$ echo "Create TypeScript programs using Bun that can run in the CLI" > prompt.txt

# Immediately invoke `o` with the system prompt.
$ o -s prompt.txt "Create fizz-buzz.ts that takes a CLI argument."
The `fizz-buzz.ts` file has been created successfully. You can run it in the CLI
by providing a number as an argument. Here is how you can execute it:

bun fizz-buzz.ts 15

This will output the FizzBuzz results for numbers from 1 to 15.

# Run the file
$ bun fizz-buzz.ts 15
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
```

---

## Advanced Usage Examples

Additionally, `o` provides a robust templating system enabling you to compose
templates that have variables defined in them. Variables are surrounded
in curly braces (example: `Hello {name}!`).

The agent will attempt to infer the meaning of the variables from both the
provided template and the variable names.

---

### Template Usage in Interactive Mode

In interactive mode `o` will ask you for the values of each of the variables
defined in the template in a step-wise fashion. This can be a great way to
define processes in automations.

```bash
$ echo "\
Provide source code comments for the following files in {comment_format}:
{files}" > comment-prompt.txt

$ o -i -s comment-prompt.txt
Please provide the comment format you would like to use for the source code
comments.
> TSDoc
Great! Now, please provide the list of files that you would like to add comments
to. This will be the value for `files`.
> All the files in ./components
I have added TSDoc comments to both the `icon.tsx` and `button.tsx` files in the
`./components` directory. If you need any further modifications or additional
files to comment on, please let me know!
```

---

### Templates Usage in One-Shot Mode

In One-Shot Mode, most variables defined in the template must be provided at once. The agent will assess whether it can complete the task with
the variables provided. It is recommended to provide the variables in a
serialized format. However, the agent will attempt to match the variables
defined in the prompt, to whatever input it receives.

```bash
# Using the same comment-prompt template provided earlier.

$ o -s comment-prompt.txt commentFormat: TSDoc files: the files in ./components
> commentFormat: TSDoc files: the files in ./components
I have successfully added TSDoc comments to the following files in the `./components` directory:

1. **icon.tsx**
2. **button.tsx**

If you need any further modifications or assistance, feel free to ask!
```

---

## Summary of Flags

| Mode | Description | Flags | Best For |
|---|---|---|---|
| Interactive | Persistent chat session | -i | Back-and-forth dialogue, exploratory conversations |
| One-Shot | Immediate single response | (default) | Quick tasks, content generation, file operations |
| System Prompt | Custom agent behavior | -s | Tailoring the agent's personality or constraints |

## Technologies Used

**o** is built on a powerful tech stack that includes:

- **Ink**: A library for building interactive command-line applications,
  enhancing the user experience.
- **React**: For building user interfaces.
- **LangChain**: To leverage advanced AI capabilities.
- **Redux Toolkit**: For state management.
- **TypeScript**: Ensuring type safety and better developer experience.
- **Bun**: A fast JavaScript runtime for modern web applications.

## LLM Model Agnostic

While **o** uses the OpenAI library by default, it is designed to be **LLM model
agnostic**. This means that you can easily switch between different language
models to suit your needs. Whether you're working with OpenAI, Anthropic,
Gemini, DeepSeek, or any other model, **o** gives you the flexibility to
integrate with them seamlessly.

This modular approach allows you to:

- **Switch Models**: Use different LLMs based on the task at hand.
- **Leverage Best-in-Class AI**: Choose the best performing model for your
  specific use case, whether it's for content generation, code completion, or
  advanced analytics.
- **Stay Future-Proof**: As new models emerge, you can quickly swap them into
  the **o** environment without any hassle.

To get started with a different model, simply configure the corresponding API
and adjust your environment settings. **o** takes care of the rest!

> Note: A [bug](https://github.com/deepseek-ai/DeepSeek-V3/issues/15) has been
> reported in DeepSeek's model that can sometimes put tool calls into an
> infinite loop. Be aware if using **o** with DeepSeek.

## Contribution Guidelines

We welcome contributions! If you have ideas, suggestions, or improvements,
please feel free to contribute. Together, we can make **o** even better!

## License

This project is licensed under a restricted MIT License - see the
[LICENSE](LICENSE) file for details. We're excited to share **o** with the
world!

## Blog Entries

- [o - AI-Powered CLI Tool](https://hans.oksendahl.com/blog/o) - An
  Introduction: a brief overview of the README.
- [o - Going Deeper](https://hans.oksendahl.com/blog/o-going-deeper) - More
  about the author and the research process that went into the creation of this
  tool.
- [The Looming Threat of AI: A Call to Action](https://hans.oksendahl.com/blog/the-looming-threat-of-ai) - 
  An analysis of the problematic factors that could be exploited using tools
  like this, some of the individuals currently using them, and revelations about
  their nefarious purposes.
- [Rant: Why I Refuse to Use AI Tools in My Browser](https://hans.oksendahl.com/blog/rant-about-ai-tools) -
  Some explanations about the impetus for the development of `o`.