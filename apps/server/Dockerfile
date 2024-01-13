FROM node:18.19.0

WORKDIR /server

COPY package.json ./

RUN pnpm install

COPY . .

EXPOSE 8080

CMD ["yarn", "dev"]