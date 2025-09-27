FROM node:24-alpine

# Install PNPM globallY
RUN npm install -g pnpm 

WORKDIR /frontend

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

# RUN pnpm build

EXPOSE 5173

ENTRYPOINT [ "pnpm", "dev", "--host"]