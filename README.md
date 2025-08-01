# 🤖 AI Code Reviewer

An intelligent code review assistant powered by AI. This tool automates the process of reviewing code changes in pull requests, offering insightful suggestions, detecting potential bugs, and helping maintain high code quality across your repositories.

## 🚀 Features

- Automatic code review on pull requests
- AI-powered suggestions for improvements
- Detection of code smells and potential bugs
- Customizable review rules and exclusions
- Easy integration with GitHub Actions

## 🛠️ Installation

To integrate the AI Code Reviewer into your GitHub workflow:

1. Clone this repository:
   ```bash
   git clone https://github.com/sandeshhu/AI_code_reviewer.git


📂 File Structure:

            AI_code_reviewer/
            ├── .github/
            │   └── workflows/
            │       └── code-review/frontend/backend
            ├── reviewer/
            │   └── backend/ai.service.js
            ├── README.md
            └── requirements.txt

🧠 How It Works:
The AI Code Reviewer scans the diff in pull requests, filters out excluded files, and sends relevant code chunks to the OpenAI API. It then posts review comments directly on the PR with suggestions and improvements.

📌 CustomizationYou can modify:- File types to exclude
- AI model used (e.g., GPT-4)
- Review depth and verbosity


Made with ❤️ by Sandesh
