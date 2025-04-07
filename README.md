# PixelPrompt ✨

## AI-Powered Image Generation Web Application

PixelPrompt is a modern web application built with Next.js and React that allows users to generate unique AI-created images by providing simple text prompts. It leverages the power of the Nebius AI Studio API to transform your textual descriptions into stunning visual creations.

## 🚀 Features

*   **Text-to-Image Generation:** Turn your ideas into images with simple text prompts.
*   **Adjustable Image Parameters:** Fine-tune aspects of the generated image (if applicable via API).
*   **Image Gallery:** Browse previously generated images.
*   **Responsive Design:** Looks great on desktops, tablets, and mobile devices.
*   **User-Friendly Interface:** Easy and intuitive to use.

## 🛠️ Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites

*   Node.js (Check Next.js 15.2 documentation for specific version requirements, likely >= 18.x)
*   npm or yarn
*   A Nebius AI Studio account and API key (see [API Configuration](#-api-configuration))

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/pixel-prompt.git
    ```
    *(Replace `yourusername` with the actual GitHub username if applicable)*

2.  **Navigate to the project directory:**
    ```bash
    cd pixel-prompt
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```

4.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project and add your Nebius API key:
    ```env
    NEBIUS_API_KEY=your_api_key_here
    ```

## 🏃 Usage

### Development Mode

To run the application in development mode with hot-reloading:

```bash
npm run dev
# or
# yarn dev


Open http://localhost:3000 in your browser to view the application.

Production Mode

To build and run the application optimized for production:

Build the application:

npm run build
# or
# yarn build
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Bash
IGNORE_WHEN_COPYING_END

Start the production server:

npm run start
# or
# yarn start
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Bash
IGNORE_WHEN_COPYING_END
🔑 API Configuration

PixelPrompt relies on the Nebius AI Studio API for its core image generation functionality.

Sign up for an account at Nebius AI Studio.

Navigate to your account dashboard and generate an API key.

Add this API key to your .env.local file as the NEBIUS_API_KEY variable (see Installation).

The application interacts with the following API endpoint for image generation:

https://api.studio.nebius.com/v1/images/generations
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
IGNORE_WHEN_COPYING_END
💻 Technologies Used

Next.js 15.2

React 19

Tailwind CSS 4

TypeScript 5

Axios (for API requests)

📄 License

Distributed under the MIT License. See LICENSE file for more information.

IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
IGNORE_WHEN_COPYING_END
