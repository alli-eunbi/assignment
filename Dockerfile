FROM node:16

WORKDIR /app

#npm install 을 위해, package.json과 package-lock.json을 먼저 copy해둠
COPY package*.json /app/
COPY yarn.lock /app/

RUN yarn

COPY . /app

EXPOSE 3000

#컨테이너가 켜지자마자 실행할 명령어 
#npm start : package.json의 scripts에 있는 start 명령어를 실행
CMD ["yarn", "dev"]