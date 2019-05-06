FROM node:alpine
WORKDIR '/app'
COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build
ENV HOST 0.0.0.0
CMD ["npm", "run", "start"]