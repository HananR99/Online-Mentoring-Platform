# Use an official Node runtime as the base image for running the backend
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the backend application
 RUN npm start

# Expose port 5000 to the outside world
EXPOSE 5000

# Command to run the backend
CMD ["npm", "start"]
