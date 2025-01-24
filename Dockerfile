# Dockerfile
# Use the Node.js image as the base
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application files
COPY . .

# Build the application
RUN yarn build

# Expose the application port
EXPOSE 3000

# Command to start the application
CMD ["yarn", "start:prod"]

# Note :  still need to generate migrations and run them through exec