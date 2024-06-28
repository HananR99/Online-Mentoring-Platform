# Stage 1: Build the frontend application
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
# RUN npm run dev

# Stage 2: Serve the built frontend with a simple HTTP server
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the built frontend files from the previous stage
COPY --from=build /app/dist /app

# Expose port 5000 to the outside world (adjust as necessary)
EXPOSE 5173

# Command to run the frontend server
CMD ["npm", "run", "dev"]
