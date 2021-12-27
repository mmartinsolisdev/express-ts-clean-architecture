#Stage 1
# Start by selecting the base image for our service
FROM node:14-alpine As Builder

# Directory in which the app will run
WORKDIR /usr/src/app

# Move everything from root to the newly created app directory
COPY . .

# Install all project dependencies
RUN npm install

# Generate build for production
RUN npm run build

# Copy .env file into build folder
COPY .env build
# Copy package.json file into build folder
COPY package.json build
# Copy package.json file into build folder
COPY package-lock.json build

#Stage 2
# Build a New Image and copy only the production build and de .env files
FROM node:14-alpine As production

# Directory in which the app will run
WORKDIR /usr/src/app

# Copy project from Builder from new instance
COPY --from=builder /usr/src/app/build .

# Install all project dependencies for production
RUN npm ci --only=production

EXPOSE 8000
CMD [ "node", "index.js" ]
