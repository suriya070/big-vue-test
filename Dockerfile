FROM node:10.16.3-stretch

WORKDIR /usr/spp

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve 

CMD [ "serve", "-s", "dist" ]