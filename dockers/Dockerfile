# Base image
FROM node:18

# Working directory
WORKDIR /apps

RUN git clone -b master https://github.com/gocolab/lab_vues

# Install dependencies
WORKDIR /apps/lab_vues

RUN npm Install
