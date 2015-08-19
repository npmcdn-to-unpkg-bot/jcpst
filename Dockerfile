FROM mhart/alpine-node
ENV NODE_ENV=production
WORKDIR /jcpst
ADD build/ .
RUN npm install
EXPOSE 8080
CMD ["npm" "run" "static"]

