FROM mhart/alpine-node
WORKDIR /jcpst
ADD build/ .
RUN npm install -g http-server
EXPOSE 8080
CMD ["http-server"]

