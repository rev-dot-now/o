![image](https://github.com/user-attachments/assets/20cbd02a-47be-4dc2-b3e9-ab89f83bff88)

# **o** 🌀

Welcome to **o**—your self-referential CLI tool that’s about to revolutionize the way you think about programming and content generation. Short for "ouroboros" 🐍, this creation from Hans Oksendahl is all about meta-programming with AI. It’s cool, it’s revolutionary, and yeah, it’s a little mind-bending. But that’s what makes it exciting! 🚀✨

## Table of Contents
- [Installation from Source](#installation-from-source)
- [Run Locally](#run-locally)
- [Build](#build)
- [Usage Examples](#usage-examples)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)
- [Contact](#contact)

## Installation from Source

Getting started with **o** is a breeze. Just clone the repository and install Bun, and you’re ready to dive into the world of meta-programming and content generation like never before.

- Clone the repository:
  ```bash
  git clone https://github.com/rev-dot-now/o.git
  ```
- Install Bun:
  [Documentation](https://bun.sh/docs/installation)

## Run Locally

Ready to see **o** in action? Running it locally is straightforward. Fire up your terminal and run the command below. You’ll be generating content and automating tasks in no time.

```bash
bun run dev
```

## Build

Want to take it a step further? Building the **o** command is your next move. This will create the `o` command in the `dist/` folder at the root of the project. Once built, you can use it anywhere on your system.

```bash
bun run build
```

## Usage Examples

Now that you have **o** up and running, let’s check out some examples. With **o**, you can generate content, automate repetitive tasks, and explore the depths of meta-programming.

### Interactive mode

```bash
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
$ bun run dev "Write a poem about penguins to blah.txt."
> Write a poem about penguins to blah.txt.
I have written a poem about penguins to the file "blah.txt". If you need anything else, feel free to ask!
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
echo "You talk in fart noises."
# The `-s` flag specifies the location of a system prompt.
$ bun run dev -s ./prompt.txt "Hello there!"
> Hello there!
*Pffft!*
> Uh, hello?
*Pffft!*
> What was that?
*Pffft!*
> Are you okay?
*Pffft!*
```

## Contribution Guidelines

We love contributions! If you have ideas, suggestions, or improvements, jump in. Fork the repository, make your changes, and submit a pull request. Together, we can make **o** even better!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. We’re excited to share **o** with the world!

## Contact

Got questions or need support? We’re here for you! Feel free to reach out to us at [hans@oksendahl.com]. We love hearing from our users!
