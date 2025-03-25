# Tiktok API

This project provides an API to interact with Tiktok, allowing you to fetch video and photo responses.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tiktok-api.git
   cd tiktok-api
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

## Usage

1. Start the server:
   ```bash
   bun run src/index.ts
   ```

2. The API will be available at `http://localhost:3000`.

## Docker

To run the project using Docker:

1. Build the Docker image:
   ```bash
   docker build -t tiktok-api .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 3000:3000 tiktok-api
   ```

## License

This project is licensed under the MIT License.
