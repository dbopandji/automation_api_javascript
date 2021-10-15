FROM node:14-alpine3.14

# install git
RUN apk update
RUN apk update && apk add --no-cache git openssh-client

# add credentials on build
ARG SSH_PRIVATE_KEY
RUN mkdir /root/.ssh/
RUN echo "${SSH_PRIVATE_KEY}" > /root/.ssh/id_rsa

# make sure your domain is accepted
RUN touch /root/.ssh/known_hosts
RUN mkdir -p -m 0600 ~/.ssh && ssh-keyscan github.com >> /root/.ssh/known_hosts
RUN chmod 400 /root/.ssh/id_rsa

RUN git clone https://github.com/dbopandji/automation_api_javascript.git

WORKDIR /app
COPY . /app

RUN npm ci && npm cache clean --force

CMD ["npm", "run", "test"]

EXPOSE 8081