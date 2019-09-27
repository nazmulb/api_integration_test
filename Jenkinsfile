pipeline {
  agent {
    docker {
      image 'node:10'
      args '-p 8082:8082'
    }

  }
  stages {
    stage('Install docker-compose') {
      steps {
        sh 'bash ./jenkins/docker-com.sh'
      }
    }
    stage('Start App') {
      steps {
        sh 'bash ./jenkins/start.sh'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Test Coverage') {
      steps {
        sh 'npm run test:coverage'
      }
    }
  }
  environment {
    CI = 'true'
  }
}