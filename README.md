# PixelPrompt ✨

## AI-Powered Image Generation Web Application

PixelPrompt is a modern web application built with Next.js and React that allows users to generate unique AI-created images by providing simple text prompts. It leverages the power of the Nebius AI Studio API to transform your textual descriptions into stunning visual creations.

## 🚀 Features

*   **Imagine to Image**  Image from text Input.
*   **Model Selection:** Switch between different underlying generation models or fine-tuned versions.
*   **Responsive Design:** Looks great on desktops, tablets, and mobile devices.
*   **User-Friendly Interface:** Easy and intuitive to use.

## 🛠️ Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites

*   Node.js 
*   npm 
*   A Nebius AI Studio account and API key (see [API Configuration](#-api-configuration))

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Samit-codes/pixel-prompt.git
    ```
    

2.  **Navigate to the project directory:**
    ```bash
    cd pixel-prompt
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project and add your Nebius API key:
    ```env
    NEBIUS_API_KEY=your_api_key_here
    ```

🏃 Usage

Development: npm run dev (View at http://localhost:3000)

Production: npm run build then npm run start

🔑 API Configuration

Get an API key from Nebius AI Studio.

Add it to .env.local as NEBIUS_API_KEY.
(Uses Nebius API: https://api.studio.nebius.com/v1/images/generations)

📄 License

Distributed under the MIT License. See LICENSE file for more information.

IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
IGNORE_WHEN_COPYING_END
