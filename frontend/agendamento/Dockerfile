FROM nginx

WORKDIR /app

COPY package*.json ./

COPY *.env ./src

COPY ./src ./scr

RUN npm install

COPY /build /usr/share/nginx/html

EXPOSE 80

RUN node -v
# ENV NODE_ENV="production"

# CMD ["npm run build", "./agendamento"]