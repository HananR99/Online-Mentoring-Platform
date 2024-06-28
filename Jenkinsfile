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
                dir('backend') {
                    bat 'docker build -t backend:latest .'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    // Adjust this script to capture build errors and provide more information
                    script {
                        try {
                            bat 'docker build -t frontend:latest .'
                        } catch (Exception e) {
                            // Print out more detailed error information for debugging
                            echo "Error building frontend: ${e}"
                            currentBuild.result = 'FAILURE'
                            error "Frontend build failed"
                        }
                    }
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                // Your deployment steps here
                bat 'docker-compose up -d --build'
            }
        }
    }

    post {
        success {
            echo 'Build and deployment successful!'
        }
        failure {
            echo 'Build or deployment failed!'
        }
    }
}
