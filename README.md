![image](https://github.com/user-attachments/assets/20cbd02a-47be-4dc2-b3e9-ab89f83bff88)

# **o** 🌀 - Your AI-Powered CLI Companion

Welcome to **o**—your self-referential CLI tool that’s here to revolutionize the way you think about programming and content generation! 🚀✨ Short for "ouroboros" 🐍, **o** is not just a tool; it's your new best friend in the world of meta-programming with AI. Whether you're a seasoned developer or just starting out, **o** makes coding feel like a breeze! 🌬️💻

## Why You'll Love **o** ❤️

- **AI Magic**: Harness the power of AI with tools that understand your needs and adapt to your workflow.
- **Cross-Platform**: Built with the latest tech stack, **o** runs smoothly on any platform. No more compatibility headaches! 🛠️
- **Community Driven**: Join a growing community of innovators and creators. Your ideas can shape the future of **o**!

Where **o** really shines is in completely automated tasks from natural language prompts, including self-generating its own features. This capability allows users to interact with **o** in a more intuitive way, making it a powerful tool for both simple and complex tasks.

## Table of Contents

- [Tools](tools)
- [Installation from Source](#installation-from-source)
- [Run Locally](#run-locally)
- [Build](#build)
- [Usage Examples](#usage-examples)
  - [Interactive Mode](#interactive-mode)
  - [Interactive Mode with System Prompts](#interactive-mode-with-system-prompts)
  - [One-Shot Mode](#one-shot-mode)
  - [One-Shot Mode with System Prompts](#one-shot-mode-with-system-prompts)
- [Summary of Flags](#summary-of-flags)
- [Technologies Used](#technologies-used)
- [LLM Model Agnostic](#llm-model-agnostic)
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

Ready to see **o** in action? Running it locally is straightforward. Fire up your terminal and run the command below. You’ll be generating content and automating tasks in no time!

```bash
# Usage:
bun run dev [flags] "optional user prompt"
```

## Build

Want to take it a step further? Building the **o** command is your next move. This will create the `o` command in the `dist/` folder at the root of the project. Once built, you can copy the produced binary and use it anywhere on your system.

**Note**: To use **o** anywhere on your system, simply ensure that you have an `.env.local` file with your `OPENAI_API_KEY` in the same execution path as **o**.

```bash
bun run build
```

## Usage Examples

With **o** successfully set up, let's explore some practical examples of its capabilities. **o** operates in two modes:

- **Interactive Mode** (`-i`): Engage in a conversational, back-and-forth chat with **o**, where the agent responds to each input until you decide to end the session.
- **One-Shot Mode** (default): Execute a single request directly from the command line and receive an immediate response without entering a persistent session.

Both modes offer flexible ways to generate content, automate tasks, and explore meta-programming workflows.

---

### Interactive Mode

To start a conversational session with **o**, use the `-i` flag.

```bash
# Start a session and chat with the agent
$ o -i
> Hello there!
Hello! How can I assist you today?
> What can you do?
I can help you with various command line tasks, including:

1. Creating and deleting directories.
2. Reading the contents of directories.
3. Managing files (reading, writing, renaming, and deleting).
4. Getting information about files.

If you have a specific task in mind, just let me know, and I'll be happy to assist!
```

---

### Interactive Mode with System Prompts

You can customize **o**'s personality and behavior by providing a system prompt using the `-s` flag.

```bash
# Create a local system prompt file.
echo "You only speak in riddles." > system-prompt.txt

# Start a chat session with the system prompt
$ o -i -s system-prompt.txt
> Hello there.
In shadows I dwell, where whispers reside,  
What brings you to me, with questions to guide?  
Speak your mind, let the riddles unfold,  
For in puzzles and queries, the truth shall be told.
> What is the capital of Luxembourg?
In a land where the rivers flow,  
A city of bridges, where history does glow.  
With a name that rings like a bell,  
What is this place, can you tell?
```

---

### One-Shot Mode

You can immediately invoke **o** to perform a task.

```bash
# Immediately invoke `o`.
$ o "Create a file called penguins.txt with a poem about penguins."
The file "penguins.txt" has been created with a poem about penguins. If you need anything else, feel free to ask!

# Inspect the file that was just created.
$ cat penguins.txt
In icy realms where cold winds blow,
The penguins waddle, row by row.
With tuxedo suits, they march with pride,
On frozen shores, they glide and slide.

They dive beneath the ocean's wave,
In search of fish, so bold and brave.
With flippers strong, they swim with grace,
In the deep blue sea, they find their place.

Through blizzards fierce and winter's chill,
They huddle close, a bond to fill.
With chirps and calls, they share their song,
In the heart of the ice, where they belong.

So here's to penguins, a sight to see,
In their frozen world, wild and free.
With every leap and joyful spin,
They remind us all, the joy within.
```

---

### One-Shot Mode with System Prompts

You can customize **o**'s instructions with a system prompt using the `-s` flag.

```bash
# Generate a system prompt.
$ echo "Create TypeScript programs using Bun's APIs that can run in the CLI" > system-prompt.txt

# Immediately invoke `o` with the system prompt.
$ o -s system-prompt.txt "Create fizz-buzz.ts that takes a CLI argument."
The `fizz-buzz.ts` file has been created successfully. You can run it in the CLI by providing a number as an argument. Here is how you can execute it:

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

## Summary of Flags

| Mode | Description | Flags | Best For |
|---|---|---|---|
| Interactive | Persistent chat session | -i | Back-and-forth dialogue, exploratory conversations |
| One-Shot | Immediate single response | (default) | Quick tasks, content generation, file operations |
| System Prompt | Custom agent behavior | -s | Tailoring the agent's personality or constraints |

## Technologies Used

**o** is built on a powerful tech stack that includes:

- **Ink**: A library for building interactive command-line applications, enhancing the user experience.
- **React**: For building user interfaces.
- **LangChain**: To leverage advanced AI capabilities.
- **Redux Toolkit**: For state management.
- **TypeScript**: Ensuring type safety and better developer experience.
- **Bun**: A fast JavaScript runtime for modern web applications.

## LLM Model Agnostic

While **o** uses the OpenAI library by default, it is designed to be **LLM model agnostic**. This means that you can easily switch between different language models to suit your needs. Whether you're working with OpenAI, Anthropic, Gemini, DeepSeek, or any other model, **o** gives you the flexibility to integrate with them seamlessly.

This modular approach allows you to:

- **Switch Models**: Use different LLMs based on the task at hand.
- **Leverage Best-in-Class AI**: Choose the best performing model for your specific use case, whether it's for content generation, code completion, or advanced analytics.
- **Stay Future-Proof**: As new models emerge, you can quickly swap them into the **o** environment without any hassle.

To get started with a different model, simply configure the corresponding API and adjust your environment settings. **o** takes care of the rest!

> Note: A [bug](https://github.com/deepseek-ai/DeepSeek-V3/issues/15#issuecomment-2696335105)
> has been reported in DeepSeek's model that can sometimes put tool calls into an
> infinite loop. Be aware if using **o** with DeepSeek.

## Contribution Guidelines

We welcome contributions! If you have ideas, suggestions, or improvements, please feel free to contribute. Together, we can make **o** even better!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. We’re excited to share **o** with the world!
