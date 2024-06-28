pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from your version control system
                checkout scm
            }
        }

        stage('Build Backend') {
            steps {
                script {
                    // Navigate to the backend directory and build the Docker image
                    dir('backend') {
                        bat 'docker build -t backend:latest .'
                    }
                }
            }
        }

        stage('Build Frontend') {
            steps {
                script {
                    // Navigate to the frontend directory and build the Docker image
                    dir('frontend') {
                        bat 'docker build -t frontend:latest .'
                    }
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                script {
                    // Deploy the application using Docker Compose
                    bat 'docker-compose up --build -d'
                }
            }
        }
    }

    post {
        success {
            // Notify on successful build
            echo 'Build and deployment successful!'
        }
        failure {
            // Notify on failed build
            echo 'Build or deployment failed!'
        }
    }
}
