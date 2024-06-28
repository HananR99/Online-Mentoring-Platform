pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = 'docker.io'  // Example for Docker Hub
        FRONTEND_IMAGE = 'hanan99/Docker-frontend'  // Replace with your frontend image name
        BACKEND_IMAGE = 'hanan99/Docker-backend'    // Replace with your backend image name
    }

    stages {
        stage('Build Frontend') {
            steps {
                script {
                    // Build frontend Docker image
                    docker.build("${env.FRONTEND_IMAGE}:${env.BUILD_NUMBER}", "-f frontend/Dockerfile .")
                }
            }
        }

        stage('Build Backend') {
            steps {
                script {
                    // Build backend Docker image
                    docker.build("${env.BACKEND_IMAGE}:${env.BUILD_NUMBER}", "-f backend/Dockerfile .")
                }
            }
        }

        stage('Push Images to Registry') {
            steps {
                script {
                    // Push frontend image to Docker registry
                    docker.withRegistry("https://${env.DOCKER_REGISTRY}", 'docker-credentials-id') {
                        docker.image("${env.FRONTEND_IMAGE}:${env.BUILD_NUMBER}").push()
                    }

                    // Push backend image to Docker registry
                    docker.withRegistry("https://${env.DOCKER_REGISTRY}", 'docker-credentials-id') {
                        docker.image("${env.BACKEND_IMAGE}:${env.BUILD_NUMBER}").push()
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                // SSH into your deployment server and execute commands to deploy Docker containers
                sshPublisher(publishers: [
                    sshPublisherDesc(
                        configName: 'your-ssh-server',
                        transfers: [
                            sshTransfer(
                                execCommand: """
                                    docker pull ${env.FRONTEND_IMAGE}:${env.BUILD_NUMBER}
                                    docker pull ${env.BACKEND_IMAGE}:${env.BUILD_NUMBER}
                                    docker stop frontend-container || true
                                    docker rm frontend-container || true
                                    docker run -d --name frontend-container -p 5173:80 ${env.FRONTEND_IMAGE}:${env.BUILD_NUMBER}
                                    docker stop backend-container || true
                                    docker rm backend-container || true
                                    docker run -d --name backend-container -p 5000:5000 ${env.BACKEND_IMAGE}:${env.BUILD_NUMBER}
                                """,
                                usePty: true
                            )
                        ]
                    )
                ])
            }
        }
    }
}
