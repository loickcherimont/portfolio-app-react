Portfolio Frontend

## Setup for Development

1. Clone the repository using `gh repo clone loickcherimont/one-front`
2. Install the dependencies into the project directory using 

```bash
cd ./one-front
pnpm i
```

3. Create a `.env` file in the project root directory and add the necessary environment variables.

```bash
touch .env
VITE_BACKEND_API="http://localhost:[BACKEND_PORT]/api"

# Replace [BACKEND_PORT] with the port your backend is running on
# By default, it is 8080