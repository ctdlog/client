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

        stage('Test') {
            steps {
                sh 'pnpm test'
            }
        }
    }
}