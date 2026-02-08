# 🔍 CodeFlow v2.0

**Software Evolution Intelligence + Security Scanner for Git Repositories**

[![Python 3.11+](https://img.shields.io/badge/Python-3.11+-blue.svg)](https://www.python.org/downloads/)
[![Platform](https://img.shields.io/badge/Platform-macOS%20%7C%20Linux-lightgrey.svg)](https://github.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Version](https://img.shields.io/badge/Version-2.0.0-green.svg)](https://github.com)

CodeFlow analyzes your Git repository to find code hotspots, track evolution patterns, and scan for security vulnerabilities - all in one powerful CLI tool.

---

## ✨ Key Features

### 📊 Code Evolution Analysis
- **Hotspot Detection**: Identify frequently modified files
- **Churn Analysis**: Track code changes over time
- **Risk Scoring**: Calculate risk based on complexity and changes
- **Change History**: View detailed file modification history

### 🔐 Security Scanning
- **Secret Detection**: Find API keys, passwords, tokens
- **AWS Credentials**: Detect AWS access keys and secrets
- **Database URLs**: Identify connection strings
- **Private Keys**: Scan for SSH/RSA keys
- **JWT Tokens**: Find authentication tokens

### 🛡️ Safety Features
- **Pre-commit Checks**: Prevent secret leaks before commits
- **Smart Filtering**: Analyze specific directories
- **Auto .gitignore**: Automatically excludes CodeFlow data
- **File Exclusions**: Skips node_modules, build files

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|------------|
| **Language** | Python 3.11+ |
| **CLI Framework** | Click 8.1+ |
| **Database** | SQLite3 |
| **Git Integration** | GitPython 3.1+ |
| **Tables** | Rich 13.0+ |
| **Progress Bars** | tqdm 4.65+ |
| **Regex Patterns** | Custom security patterns |

### Dependencies

```txt
click>=8.1.0
gitpython>=3.1.0
rich>=13.0.0
tqdm>=4.65.0
```

---

## 📦 Installation

### Prerequisites

Before installing CodeFlow, ensure you have:

- ✅ **Python 3.11 or higher**
- ✅ **Git** installed
- ✅ **pip3** package manager
- ✅ **macOS or Linux** (Windows support coming soon)

### Step 1: Check Prerequisites

```bash
# Check Python version (must be 3.11+)
python3 --version

# Check Git
git --version

# Check pip
pip3 --version
```

**If Python is outdated, install Python 3.11+:**

```bash
# macOS (using Homebrew)
brew install python@3.11

# Linux (Ubuntu/Debian)
sudo apt update
sudo apt install python3.11 python3-pip

# Verify installation
python3 --version
```

### Step 2: Clone or Download CodeFlow

```bash
# Option A: Clone from GitHub (if available)
git clone https://github.com/yourusername/codeflow.git
cd codeflow

# Option B: If you have the source code
cd /path/to/codeflow
```

### Step 3: Install CodeFlow

**Recommended Method: Editable Install**

```bash
# Navigate to CodeFlow directory
cd codeflow

# Install in editable mode
pip3 install -e .

# Verify installation
codeflow --version
```

**Expected Output:**
```
codeflow, version 2.0.0
```

### Alternative: Virtual Environment Install

For isolated installation without affecting system packages:

```bash
# Create virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate  # macOS/Linux
# venv\Scripts\activate   # Windows

# Install CodeFlow
pip install -e .

# Verify
codeflow --version
```

**Note**: Remember to activate the virtual environment each time:
```bash
source /path/to/codeflow/venv/bin/activate
```

---

## 🚀 Quick Start

### 1. Initialize Your Repository

```bash
# Navigate to your Git repository
cd ~/projects/your-app

# Initialize CodeFlow (auto-updates .gitignore)
codeflow init
```

**What happens:**
- ✅ Creates `.codeflow/` directory
- ✅ Analyzes Git history
- ✅ Builds internal database
- ✅ Adds `.codeflow/` to `.gitignore`

### 2. Find Code Hotspots

```bash
codeflow hotspots
```

**Sample Output:**
```
🔥 Code Hotspots

Hotspot Files (by commit count)
┌────────────────────────────┬─────────┬────────┬──────────┐
│ File                       │ Commits │ Churn  │ Risk     │
├────────────────────────────┼─────────┼────────┼──────────┤
│ src/components/App.tsx     │   45    │ 1,234  │ 85/100   │
│ backend/api/routes.py      │   38    │   956  │ 72/100   │
│ src/utils/helpers.ts       │   32    │   678  │ 68/100   │
└────────────────────────────┴─────────┴────────┴──────────┘

⚠️  High-risk files: 3
```

### 3. Scan for Security Issues

```bash
codeflow security
```

**Sample Output:**
```
🔐 Security Scan

⚠️  Found 3 potential secrets

Security Findings
┌──────────────────────┬──────┬────────────┬─────────────────┐
│ File                 │ Line │ Type       │ Value           │
├──────────────────────┼──────┼────────────┼─────────────────┤
│ src/config.ts        │  12  │ API Key    │ sk_t...ABC123   │
│ .env.backup          │  5   │ Secret Key │ a1b2...xyz9     │
│ db/connection.py     │  28  │ DB URL     │ postgres://...  │
└──────────────────────┴──────┴────────────┴─────────────────┘

🔧 Recommendations:
  1. Move all secrets to .env file
  2. Add .env to .gitignore
  3. Use environment variables
  4. Never commit API keys

⚠️  CRITICAL: Do NOT commit until secrets removed!
```

### 4. Pre-Commit Safety Check

```bash
# Run before committing
codeflow precommit
```

**Sample Output:**
```
🛡️  Pre-Commit Safety Check

⚙  Scanning for secrets...
  ✓ No secrets detected

⚙  Checking high-risk files...
  ⚠  2 critical-risk files detected

📋 Summary:
  • 0 secrets found
  • 2 high-risk files
  
✅ Safe to commit (with caution on high-risk files)
```

---

## 📖 All Commands

### Basic Commands

| Command | Description | Example |
|---------|-------------|---------|
| `codeflow init` | Initialize repository analysis | `codeflow init` |
| `codeflow hotspots` | Find frequently changed files | `codeflow hotspots` |
| `codeflow security` | Scan for secrets/vulnerabilities | `codeflow security` |
| `codeflow precommit` | Pre-commit safety check | `codeflow precommit` |

### Advanced Commands

| Command | Description | Example |
|---------|-------------|---------|
| `codeflow changes <file>` | View file change history | `codeflow changes src/App.tsx` |
| `codeflow filter <path>` | Analyze specific directory | `codeflow filter src/` |
| `codeflow churn --last <time>` | Analyze code churn | `codeflow churn --last 3m` |
| `codeflow risk-score <path>` | Calculate risk score | `codeflow risk-score src/` |

### Command Options

```bash
# View detailed file history
codeflow changes src/App.tsx --limit 20

# Analyze churn over time periods
codeflow churn --last 1w   # Last week
codeflow churn --last 2m   # Last 2 months
codeflow churn --last 6m   # Last 6 months

# Filter analysis by directory
codeflow filter frontend/
codeflow filter backend/api/
codeflow filter src/components/
```

---

## 💡 Usage Examples

### Typical Workflow

```bash
# 1. Initialize repository
cd ~/projects/my-app
codeflow init

# 2. Check for security issues
codeflow security

# 3. Work on your features...
# ... coding ...

# 4. Before committing
codeflow precommit

# 5. If issues detected
codeflow security           # Find secrets
codeflow filter src/        # Analyze specific area
codeflow changes src/App.tsx  # View what changed

# 6. Fix issues and commit
# ... fix secrets ...
git add .
git commit -m "Fixed security issues"

# 7. Regular maintenance
codeflow hotspots           # Weekly review
codeflow churn --last 1w    # Sprint review
```

### Security Best Practices

**✅ Good Practice - Using .env:**

```javascript
// .env file (add to .gitignore!)
OPENAI_API_KEY=sk_test_abc123xyz
DATABASE_URL=postgresql://user:pass@localhost/db
AWS_ACCESS_KEY=AKIA123456789

// In your code
const apiKey = process.env.OPENAI_API_KEY;
const dbUrl = process.env.DATABASE_URL;
```

**❌ Bad Practice - Hardcoded Secrets:**

```javascript
// CodeFlow WILL detect this!
const apiKey = "sk_test_abc123xyz";  // ⚠️ Security risk!
const dbUrl = "postgresql://user:pass@localhost/db";  // ⚠️ Will be flagged!
```

### Git Hook Integration

Add pre-commit hook to automatically check for secrets:

```bash
# Create pre-commit hook
cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash
echo "🛡️  Running CodeFlow security check..."
codeflow precommit
exit $?
EOF

# Make executable
chmod +x .git/hooks/pre-commit
```

Now every commit will be checked automatically!

---

## 🎯 What CodeFlow Detects

### Security Patterns

| Type | Examples | Pattern |
|------|----------|---------|
| **API Keys** | OpenAI, Stripe, Google | `sk_`, `pk_`, `AIza` |
| **AWS Credentials** | Access keys, Secret keys | `AKIA`, `aws_secret` |
| **Passwords** | Hardcoded passwords | `password=`, `pwd=` |
| **Database URLs** | Connection strings | `postgres://`, `mongodb://` |
| **Private Keys** | SSH, RSA keys | `BEGIN PRIVATE KEY` |
| **JWT Tokens** | Authentication tokens | `eyJ`, Bearer tokens |
| **OAuth Tokens** | GitHub, GitLab | `ghp_`, `glpat-` |

### Code Evolution Metrics

- **Commit Frequency**: How often files change
- **Code Churn**: Lines added/deleted over time
- **Complexity**: Based on file size and changes
- **Risk Score**: Combined metric (0-100)

---

## 📁 Project Structure

```
codeflow/
├── codeflow/
│   ├── __init__.py
│   ├── cli.py              # Main CLI commands
│   ├── analyzer.py         # Code analysis logic
│   ├── security.py         # Security scanner
│   ├── database.py         # SQLite operations
│   ├── git_integration.py  # Git operations
│   └── utils.py            # Helper functions
├── setup.py                # Package setup
├── requirements.txt        # Dependencies
├── README.md              # This file
├── INSTALL.md             # Detailed install guide
└── QUICKSTART.md          # Quick reference
```

### Data Storage

CodeFlow stores analysis data in `.codeflow/` directory:

```
your-repo/
├── .codeflow/
│   ├── codeflow.db        # SQLite database
│   └── cache/             # Temporary files
├── .gitignore             # Auto-updated by CodeFlow
└── ... (your code)
```

**Note**: `.codeflow/` is automatically added to `.gitignore` during `init`

---

## 🔧 Troubleshooting

### Issue: "command not found: codeflow"

**Solution 1**: Add pip bin to PATH

```bash
# Add to ~/.zshrc or ~/.bash_profile
export PATH="$PATH:$HOME/Library/Python/3.11/bin"

# Reload shell
source ~/.zshrc
```

**Solution 2**: Use Python module directly

```bash
python3 -m codeflow --help
```

**Solution 3**: Reinstall with --user

```bash
pip3 install --user -e .
```

### Issue: "ModuleNotFoundError"

```bash
# Reinstall dependencies
cd /path/to/codeflow
pip3 install -r requirements.txt
pip3 install -e .
```

### Issue: "Permission denied"

```bash
# Install in user directory
pip3 install --user -e .

# OR use virtual environment (recommended)
python3 -m venv venv
source venv/bin/activate
pip install -e .
```

### Issue: Git repository not found

```bash
# Ensure you're in a Git repository
git status

# If not initialized
git init
git add .
git commit -m "Initial commit"

# Then run CodeFlow
codeflow init
```

---

## 🆙 Upgrading from v1.0

```bash
# Uninstall old version
pip3 uninstall codeflow

# Navigate to new CodeFlow directory
cd /path/to/codeflow-v2

# Install new version
pip3 install -e .

# Verify upgrade
codeflow --version  # Should show 2.0.0
```

**Note**: Existing `.codeflow/` databases are compatible!

---

## 🗑️ Uninstallation

### Remove CodeFlow Tool

```bash
pip3 uninstall codeflow
```

### Remove Repository Data

```bash
# Navigate to your repository
cd ~/projects/your-repo

# Remove CodeFlow data
rm -rf .codeflow/

# Remove from .gitignore (optional)
# Edit .gitignore and remove .codeflow/ line
```

---

## 📊 Example Output

### Hotspots Analysis

```
🔥 Code Hotspots

Hotspot Files (by commit count)
┌──────────────────────────────────┬─────────┬────────┬──────────┐
│ File                             │ Commits │ Churn  │ Risk     │
├──────────────────────────────────┼─────────┼────────┼──────────┤
│ src/components/Dashboard.tsx     │   52    │ 2,145  │ 92/100   │
│ backend/controllers/auth.py      │   48    │ 1,678  │ 88/100   │
│ src/utils/api.ts                 │   41    │ 1,234  │ 79/100   │
│ backend/models/user.py           │   35    │   892  │ 71/100   │
│ src/components/Navbar.tsx        │   28    │   654  │ 64/100   │
└──────────────────────────────────┴─────────┴────────┴──────────┘

📊 Summary:
  • Total files analyzed: 247
  • High-risk files (>70): 8
  • Medium-risk files (40-70): 34
  • Total commits: 1,543
```

### Change History

```
📝 Change History: src/App.tsx

Change #1 • commit a3b4c5d
Author: John Doe <john@example.com>
Date: 2025-02-07 14:23:15
Message: Added new dashboard feature

  📈 +45 lines / -12 lines

Change #2 • commit x1y2z3a
Author: Jane Smith <jane@example.com>
Date: 2025-02-05 09:15:42
Message: Refactored React hooks

  📈 +23 lines / -18 lines

Change #3 • commit m9n8o7p
Author: John Doe <john@example.com>
Date: 2025-02-03 16:45:20
Message: Fixed bug in routing

  📈 +8 lines / -15 lines
```

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 Changelog

### v2.0.0 (Latest)

**New Features:**
- ✨ Security scanner for secrets/credentials
- ✨ Pre-commit safety checks
- ✨ Detailed change history viewer
- ✨ Directory filtering for focused analysis
- ✨ Auto .gitignore updates
- ✨ Smart file exclusions (node_modules, build files)

**Improvements:**
- 🚀 Faster repository analysis
- 🎨 Better CLI output formatting
- 📊 Enhanced risk scoring algorithm
- 🔒 Improved secret detection patterns

**Bug Fixes:**
- 🐛 Fixed package-lock.json causing noise
- 🐛 Resolved memory issues on large repos
- 🐛 Fixed Windows path compatibility

### v1.0.0

- Initial release
- Hotspot detection
- Churn analysis
- Basic risk scoring

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

---

## 🙏 Acknowledgments

Built with:
- [Click](https://click.palletsprojects.com/) - CLI framework
- [GitPython](https://gitpython.readthedocs.io/) - Git integration
- [Rich](https://rich.readthedocs.io/) - Beautiful terminal output
- [tqdm](https://tqdm.github.io/) - Progress bars

---

## 📧 Support

- 📖 **Documentation**: [README.md](README.md) | [INSTALL.md](INSTALL.md)
- 🐛 **Bug Reports**: Open an issue on GitHub
- 💡 **Feature Requests**: Open an issue with `enhancement` label
- 📧 **Email**: support@codeflow.dev

---

## 🎉 Quick Reference Card

```bash
# Setup
pip3 install -e .
codeflow init

# Security
codeflow security      # Find secrets
codeflow precommit     # Pre-commit check

# Analysis
codeflow hotspots      # Find risky files
codeflow churn --last 1w  # Weekly churn

# Detailed Views
codeflow changes <file>   # File history
codeflow filter src/      # Filter by path

# Help
codeflow --help
codeflow <command> --help
```

---

**Ready to analyze your codebase?**

```bash
pip3 install -e . && codeflow init
```

⭐ **Star this repo if CodeFlow helps you!** ⭐
