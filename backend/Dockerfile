# Use official Node image
FROM node:18-alpine

WORKDIR /usr/src/app

# Copy package.json and lockfile first (for caching)
COPY package*.json ./

RUN npm install

# Copy rest of the source
COPY . .

# Expose port
EXPOSE 5000

CMD ["npm", "start"]
