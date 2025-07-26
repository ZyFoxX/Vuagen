# Vuagen - User-Agent Generator

Vuagen is a simple and flexible User-Agent generator for browser automation, testing, and web scraping.

## Features

- **Generate random or specific browser User-Agents**
- **Support for both mobile and desktop devices**
- **OS-specific User-Agent generation**
- **Save output to file in TXT or JSON format**
- **Highly customizable through command-line options**

## Installation

### Via npm (recommended)

Install globally so you can use the `vuagen` command anywhere:
```bash
npm install -g vuagen
```

### Manual 

```bash
# Clone the repository
git clone https://github.com/ZyFoxX/vuagen.git

# Navigate to the directory
cd vuagen
```

## Usage

### Via CLI

```bash
vuagen [options]
```

### Via Node.js 

```bash
node Vuagen.js [options]
```

If you run without any options, help will appear automatically.

## Options

| Option        | Description                                                        | Values                                                                      |
|---------------|--------------------------------------------------------------------|-----------------------------------------------------------------------------|
| `-t <type>`   | Browser type to generate                                           | `chrome`, `firefox`, `safari`, `edge`, `opera`, `yandex`, `random`          |
| `-c <num>`    | Number of User-Agents to generate                                  | Any positive number (default: 1)                                            |
| `-o <file>`   | Output file to save results                                        | Any valid filename                                                          |
| `-m`          | Generate mobile user agents only                                   | Flag (no value needed)                                                      |
| `-d`          | Generate desktop user agents only                                  | Flag (no value needed)                                                      |
| `-f <format>` | Output format                                                      | `txt`, `json` (default: txt)                                                |
| `-s <os>`     | Specific OS                                                        | `windows`, `macos`, `linux`, `android`, `ios`                               |
| `-h`          | Show help message                                                  | Flag (no value needed)                                                      |

## Examples

### Generate 5 Firefox mobile user agents

```bash
vuagen -t firefox -c 5 -m
```

### Generate a Safari desktop user agent and save to file

```bash
vuagen -t safari -o agents.txt -d
```

### Generate 10 random user agents in JSON format

```bash
vuagen -c 10 -f json -o agents.json
```

### Generate Windows-specific Chrome user agents

```bash
vuagen -t chrome -c 3 -s windows
```

## License  
**Apache License 2.0** - Free to use, modify, and distribute under the terms of the Apache License. See [LICENSE](LICENSE) for details.  
