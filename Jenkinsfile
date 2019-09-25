pipeline {
  agent {
    node {
      label '10'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Test Coverage') {
      steps {
        sh 'npm run test-coverage'
      }
    }
    stage('Run App') {
      steps {
        sh 'npm start'
        sleep 5
        sh 'curl http://localhost:8082/api/home'
      }
    }
  }
}