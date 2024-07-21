# AI Text Summarizer

An AI-powered text summarizer built with Node.js and the Hugging Face API. This application allows users to input text and receive concise summaries generated by advanced AI models.

## Features

- Summarize long texts into shorter, more digestible summaries
- Leverage Hugging Face's pre-trained models for natural language processing
- Simple and intuitive interface for text input and output

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Hugging Face API Token](https://huggingface.co/docs/hub/security-tokens)

## Installation and Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/ai-text-summarizer.git
   cd ai-text-summarizer
   ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Set Up Environment Variables**

    Create a .env file in the root directory of the project with the following content:

    ```bash
    ACCESS_TOKEN=your_huggingface_api_token
    ```
4. **Run the Application**
    ```bash
    node index.js
    ```

Happy Summarizing!