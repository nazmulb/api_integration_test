pipeline {
  agent {
    docker {
      image 'node:10'
      args '-p 8082:8082'
    }
  }
  environment {
    CI = 'true'
  }
  stages {
    stage('Install docker-compose') {
      steps {
        sh 'bash ./docker_com.sh'
      }
    }
    stage('Start App') {
      steps {
        sh 'bash ./start.sh'
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
}