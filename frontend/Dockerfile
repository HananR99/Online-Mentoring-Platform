# Use an official Node runtime as the base image for building
FROM node:14-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the frontend application
#RUN npm run dev

# Use NGINX as the web server to serve the built static files
FROM nginx:alpine

# Copy the built static files from the previous stage to NGINX's web root directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 5173

# Start NGINX server when the container launches
#CMD ["nginx", "-g", "daemon off;"]

CMD ["npm", "run", "dev;"]