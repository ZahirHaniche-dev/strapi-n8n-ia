FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install n8n
RUN npm install -g n8n

# Copy the workflow.json file into the image
COPY workflow.json /root/workflow.json

# Expose the port n8n runs on
EXPOSE 5678

# Import the workflow when the container starts
CMD ["sh", "-c", "n8n import:workflow --input=/root/workflow.json && n8n start"]
