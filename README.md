# Order Management System

This project is a simple Order Management System built using Node.js and Express, allowing users to submit orders through an HTML form. The system includes features such as order counting, saving orders as JSON files, and sending order details to a Discord webhook.
To see it visit it [here](https://irxqi.github.io/order/)
## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Discord Webhook](#discord-webhook)
- [Screenshots](#screenshots)
- [Acknowledgments](#acknowledgments)

## Introduction

The Order Management System is designed to streamline the process of receiving and managing orders. It is implemented as a Node.js application with the help of the Express framework, providing a web-based interface for users to submit their orders.

## Prerequisites

Before you begin, ensure that you have the following prerequisites installed:

- [Node.js](https://nodejs.org/) - The JavaScript runtime used for building the application.
- [npm](https://www.npmjs.com/) - The package manager for Node.js, used to install project dependencies.
- [Discord Webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) - You'll need a Discord webhook URL to receive order notifications. Create a webhook in your Discord server if you don't have one.

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd order-management-system
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. **Set Up Discord Webhook:**
   - Create a Discord webhook in your server to receive order notifications.
   - Copy the webhook URL and set it as an environment variable named `webhook`.

2. **Start the Server:**

    ```bash
    npm start
    ```

3. **Access the Order Management System:**
   - Open your web browser and go to [http://localhost:3000](http://localhost:3000).
   - Fill out the order form and submit your order.

4. **Check Notifications:**
   - View server logs in the console for detailed information.
   - Check your Discord server for order notifications.

## Project Structure

...

## Discord Webhook

To receive order notifications, you need to set up a Discord webhook. Follow these steps:

1. In your Discord server, navigate to the channel where you want to receive notifications.

2. Click on the gear icon next to the channel name, and select "Integrations."

3. Click on "Create Webhook" and give your webhook a name.

4. Copy the webhook URL and set it as an environment variable named `webhook` in your Node.js environment.

## Screenshots

Main Page
![Main Page](https://imgur.com/fgLWTvo)


Example of submitting a page
![Sumbitting](https://imgur.com/8TbegIB)


After hitting "Sumbit Order"
![Sumbitted](https://imgur.com/VtkICa9)


From discord side
![Discord](https://imgur.com/iFyDymt)


## Acknowledgments

The Order Management System uses the following technologies and libraries:

- **Express**: A fast, unopinionated, minimalist web framework for Node.js.
- **axios**: A promise-based HTTP client for making requests to the Discord webhook.
- **fs**: The Node.js filesystem module for reading and writing files.
- **path**: A Node.js module for handling file paths.

Feel free to explore, modify, and enhance the system to meet your specific requirements.
