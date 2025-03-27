![image](https://github.com/user-attachments/assets/20cbd02a-47be-4dc2-b3e9-ab89f83bff88)

Welcome to **o**, the Agentic Design CLI Framework that transforms tasks into
reusable agents with unprecedented speed and simplicity. Originally envisioned
as "ouroboros," this cutting-edge framework empowers users to achieve automation
effortlessly through natural language inputs. Whether you're crafting intricate
workflows or automating everyday tasks, **o** provides the agility and
intelligence needed to revolutionize your command line interactions.

## Why You'll Love **o**

Video demonstration: [O: The Future of Command Line Automation](https://youtu.be/f0Erk-zmuLo?feature=shared)

- **Instant Automation**: Leverage the power of AI to rapidly convert natural
  language prompts into actionable agents, streamlining your workflow.
- **Reusability**: Create agents that can be reused across different projects,
  saving time and effort while maintaining consistency.
- **Cross-Platform Flexibility**: Designed to run smoothly on any platform,
  **o** eliminates compatibility issues and integrates seamlessly into your
  existing infrastructure.
- **Innovative Community**: Join an engaged community of developers and
  innovators shaping the future of agentic design. Your contributions can
  influence the evolution of **o**.
- **Scalability**: Handle complex tasks efficiently with tools that scale
  alongside your projects, offering unmatched performance and adaptability.

Where **o** really shines is in completely automated tasks from natural language
prompts, including self-generating its features. This capability allows users to
interact with **o** in a more intuitive way, making it a powerful tool for both
simple and complex tasks.

## Table of Contents

- [Tools](tools)
- [Installation from Source](#installation-from-source)
- [Run Locally](#run-locally)
- [Summary of Flags](#summary-of-flags)
- [Compile](#compile)
- [Usage Examples](#usage-examples)
  - [Interactive Mode](#interactive-mode)
  - [Interactive Mode with System
    Prompts](#interactive-mode-with-system-prompts)
  - [One-Shot Mode](#one-shot-mode)
  - [One-Shot Mode with System Prompts](#one-shot-mode-with-system-prompts)
- [Advanced Usage Examples](#advanced-usage-examples)
  - [Template Usage in Interactive Mode](#template-usage-in-interactive-mode)
  - [Templates Usage in One-Shot Mode](#templates-usage-in-one-shot-mode)
- [Technologies Used](#technologies-used)
- [Supported LLM Providers](#supported-llm-providers)
  - [LLM Model Configuration](#llm-model-configuration)
- [Ethos](#ethos)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)
- [Blog Entries](#blog-entries)
- [Suggestions or Comments](#suggestions-or-comments)

## Tools

The **o** architecture has several tools available for basic file-system operations, all powered by the latest in AI technology. Here’s what you can accomplish:

- **agent-exit**: Exit an interactive agent session. This tool logs an optional message and error before exiting the process with a status code of 0 or 1, depending on whether an error was provided.
- **command-exec**: Execute a command in the CLI and retrieve the results. This tool allows you to run any command as if you were typing it directly into the terminal, making it a powerful feature for automating tasks and integrating with other command-line utilities.
- **dir-create**: Create a directory.
- **dir-delete**: Delete a directory.
- **dir-read**: Read the contents of a directory.
- **file-delete**: Delete a file.
- **file-info**: Get info about a file.
- **file-read**: Read the contents of a file.
- **file-rename**: Rename a file.
- **file-write**: Write to a file.

These tools may sound basic, but they are the foundation of **o**'s unique capabilities. You can easily ask **o** to create new tools from scratch! During development, only two tools - `file-read` and `file-write` - were initially created. All other tools were generated within **o**'s self-hosted environment.

## Agent Creation

Creating agents is as simple as defining a template in a file and then executing
`o` with the `--system` (`-s`) flag. Templates can contain variables.

```bash
# Example
echo "Create a poem about {subject} in the style of {style}, save to {filename}." > prompt.txt

o --system prompt.txt --llm xai --config xai-config.json --interactive
# Equivalent to:
# o -s prompt.txt -l xai -c xai-config.json -i
```

## Installation from Source

Getting started with **o** is straightforward! Just clone the repository and
install Bun, and you're ready to dive into the world of meta-programming and
content generation like never before.

- Install Bun: [Documentation](https://bun.sh/docs/installation)
- Clone the repository:

  ```bash
  git clone https://github.com/rev-dot-now/o.git
  ```

- Change into the project directory:

  ```bash
  cd o
  ```

## Run Locally

Ready to see **o** in action? Running it locally is straightforward. Open your
terminal and execute the command below. You'll be generating content and
automating tasks in no time!

```bash
# Usage:
bun run dev [flags] "optional user prompt"
```

## Summary of Flags

| Long | Short | Default | Description |
|---|---|---|---|
| --config | -c | './config.json' | JSON config file for the LLM type |
| --interactive | -i | false | Back-and-forth dialogue, exploratory conversations |
| --llm | -l | undefined | Specify the LLM provider ([Supported LLM Providers](#supported-llm-providers)) |
| --system | -s | undefined | Tailor the agent's personality or constraints |

## Compile

Want to take it a step further? Compiling the **o** command is your next move.
This will create the `o` binary in the `dist/` folder at the root of the
project. Once built, you can copy the produced binary and use it anywhere on
your system.

```bash
bun run build
```

> When using `o` as a binary it is recommended to set the environment variables
> `O_LLM` and `O_CONFIG` so that a default LLM provider and configuration is
> always available.

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

> Note: In the following examples, we will use the compiled binary of `o`. To
> run the same examples locally, use `bun run dev`. For all of the following
> examples the environment variable `O_LLM` was set to `openai` and `O_CONFIG`
> was `{ "model": "gpt-40", "temperature": 0 }`

---

### Interactive Mode

To start a conversational session with **o**, use the `-i` flag.

```bash
# Start a session and chat with the agent
$ o --interactive
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
using the `--system` (`-s`) flag.

```bash
# Create a local system prompt file.
echo "Instructions:" > prompt.txt
echo "- Look up an image url from the open dog API for {breed}." >> prompt.txt
echo "- Open the image in a web browser." >> prompt.txt


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

You can customize **o**'s instructions with a system prompt using the `--system`
(`-s`) flag.

```bash
# Create a local system prompt file.
$ echo "Instructions:" > prompt.txt
$ echo "- Look up an image url from the open dog API for {breed}." >> prompt.txt
$ echo "- Open the image in a web browser." >> prompt.txt

# Opens a random image of a doge.
$ o --system prompt.txt "shiba inu"
```

---

## Advanced Usage Examples

Additionally, `o` provides a robust templating system enabling you to compose
templates that have variables defined in them. Variables are surrounded in curly
braces (example: `Hello {name}!`).

The agent will attempt to infer the meaning of the variables from both the
provided template and the variable name.

---

### Template Usage in Interactive Mode

In interactive mode `o` will ask you for the values of each of the variables
defined in the template in a step-wise fashion. This can be a great way to
define processes in automations.

```bash
$ echo "\
Provide source code comments for the following files in {comment_format}:
{files}" > comment-prompt.txt

$ o --system comment-prompt.txt --interactive
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

In One-Shot Mode, most variables defined in the template must be provided at
once. The agent will assess whether it can complete the task with the variables
provided. It is recommended to provide the variables in a serialized format.
However, the agent will attempt to match the variables defined in the prompt, to
whatever input it receives.

```bash
# Using the same comment-prompt template provided earlier.

$ o --system comment-prompt.txt commentFormat: TSDoc files: the files in ./components
> commentFormat: TSDoc files: the files in ./components
I have successfully added TSDoc comments to the following files in the `./components` directory:

1. **icon.tsx**
2. **button.tsx**

If you need any further modifications or assistance, feel free to ask!
```

---

## Technologies Used

**o** is built on a powerful tech stack that includes:

- **Ink**: A library for building interactive command-line applications,
  enhancing the user experience.
- **React**: For building user interfaces.
- **LangChain**: To leverage advanced AI capabilities.
- **Redux Toolkit**: For state management.
- **TypeScript**: Ensuring type safety and better developer experience.
- **Bun**: A fast JavaScript runtime for modern web applications.

## Supported LLM Providers

The LLM is set through the `--llm` (`-l`) flag.

- Anthropic (`--llm anthropic`)
- AWS Bedrock (`--llm aws`)
- Cerebras (`--llm cerebras`)
- Cohere (`--llm cohere`)
- DeepSeek (`--llm deepseek`)
- Google Generative AI (`--llm googlegenai`)
- Groq (`--llm groq`)
- MistralAI (`--llm mistralai`)
- Ollama (`--llm ollama`)
- OpenAI (`--llm openai`) ✅
- xAI (`--llm xai`)

✅ - Verified

> Note: There is no default LLM for `o`. However, you can set the environment
> variable `O_LLM` to provide one. Setting the environment variable is
> particularly useful when using `o` compiled as a binary.

### LLM Model Configuration

You can provide the configuration for the LLM model specified through the
`--config` (`-c`) flag. Please, see the appropriate configuration page in the
langchain documentation for constructor configuration arguments. Configuration
files are in JSON format.

- [Anthropic](https://v03.api.js.langchain.com/classes/_langchain_anthropic.index.ChatAnthropic.html#constructor)
- [AWS
  Bedrock](https://v03.api.js.langchain.com/classes/_langchain_aws.ChatBedrockConverse.html#constructor)
- [Cerebras](https://v03.api.js.langchain.com/classes/_langchain_cerebras.ChatCerebras.html#constructor)
- [Cohere](https://v03.api.js.langchain.com/classes/_langchain_cohere.ChatCohere.html#constructor)
- [DeepSeek](https://v03.api.js.langchain.com/classes/_langchain_deepseek.ChatDeepSeek.html#constructor)
- [Google Generative
  AI](https://v03.api.js.langchain.com/classes/_langchain_google_genai.ChatGoogleGenerativeAI.html#constructor)
- [Groq](https://v03.api.js.langchain.com/classes/_langchain_groq.ChatGroq.html#constructor)
- [MistralAI](https://v03.api.js.langchain.com/classes/_langchain_mistralai.ChatMistralAI.html#constructor)
- [Ollama](https://v03.api.js.langchain.com/classes/_langchain_ollama.ChatOllama.html#constructor)
- [OpenAI](https://v03.api.js.langchain.com/classes/_langchain_openai.ChatOpenAI.html#constructor)
- [xAI](https://v03.api.js.langchain.com/classes/_langchain_xai.ChatXAI.html)

> Note: the default configuration path is `./config.json`. However, you can set
> the environment variable `O_CONFIG` to set one. setting the environment
> variable is particular useful when using `o` compiled as a binary.

## Ethos

1. **AI as Co-Creator**: We believe that as much as possible the tool should be
   responsible for changes to itself.
2. **User-Centric Design**: We prioritize designing with the end-user in mind,
   ensuring the tool is intuitive and accessible.
3. **If You Make It, You Must Eat It**: We believe in using our own features,
   ensuring they are practical and effective.
4. **Transparency and Ethical AI Use**: We commit to responsible AI use and
   clear communication about changes.
5. **Continuous Learning and Adaptation**: We emphasize ongoing improvement and
   responsiveness to feedback.
6. **Collaboration and Community Engagement**: We encourage community
   involvement to foster innovation and diverse contributions.
7. **Sustainability**: We consider the long-term impact and viability of the
   project, both environmentally and in terms of community support.

## Contribution Guidelines

We welcome contributions! If you have ideas, suggestions, or improvements,
please feel free to contribute. Together, we can make **o** even better!

Per Ethos item #3, we eat our own dog food. If you are contributing please use
the provided command `bun run ship-it` to launch an interactive session with `o`
to create your commits.

## License

This project is licensed under a restricted MIT License - see the
[LICENSE](LICENSE) file for details. We're excited to share **o** with the
world!

## Ethos

1. **AI as Co-Creator**: We believe that as much as possible the tool should be
   responsible for changes to itself.
2. **User-Centric Design**: We prioritize designing with the end-user in mind,
   ensuring the tool is intuitive and accessible.
3. **If You Make It, You Must Eat It**: We believe in using our own features,
   ensuring they are practical and effective.
4. **Transparency and Ethical AI Use**: We commit to responsible AI use and
   clear communication about changes.
5. **Continuous Learning and Adaptation**: We emphasize ongoing improvement and
   responsiveness to feedback.

## Blog Entries

- [o - AI-Powered CLI Tool](https://hans.oksendahl.com/blog/o) - An
  Introduction: a brief overview of the README.
- [o - Going Deeper](https://hans.oksendahl.com/blog/o-going-deeper) - More
  about the author and the research process that went into the creation of this
  tool.
- [Rant: Why I Refuse to Use AI Tools in My
  Browser](https://hans.oksendahl.com/blog/rant-about-ai-tools) - Some
  explanations about the impetus for the development of `o`.

## Suggestions or Comments

If you have any comments or suggestions about `o` feel free to contact the
author <a href="mailto:hans@oksendahl.com">hans@oksendahl.com</a>.
