pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                sh 'pnpm install'
            }
        }

        stage('Build') {
            steps {
                sh 'pnpm build'
            }
        }

        stage('Check and Kill Process on Port 3000') {
            steps {
                script {
                    def result = sh(script: 'lsof -ti :3000', returnStatus: true, returnStdout: true)
                    def pid = result?.trim()
                    if (pid?.isInteger()) {
                        sh "kill -9 $pid"
                    }
                }
            }
        }

        stage('Start in Background') {
            steps {
                sh 'nohup pnpm start > /dev/null 2>&1 &'
            }
        }
    }
}