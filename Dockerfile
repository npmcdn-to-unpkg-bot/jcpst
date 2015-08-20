FROM mhart/alpine-node
ENV NODE_ENV=production
WORKDIR /jcpst
ADD build/ .
RUN npm install -g http-server
EXPOSE 8080
CMD ["http-server"]

