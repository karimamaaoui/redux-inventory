resource "kubernetes_deployment" "frontend" {
  metadata {
    name = "frontend"
  }

  spec {
    replicas = 2

    selector {
      match_labels = {
        app = "frontend"
      }
    }

    template {
      metadata {
        labels = {
          app = "frontend"
        }
      }

      spec {
        container {
          image = "localhost:5000/redux-inventory_frontend:latest"
          name  = "frontend"
          image_pull_policy = "IfNotPresent"

          port {
            container_port = 80
          }
        }
      }
    }
  }

  timeouts {
    create = "5m"
    update = "2m"
    delete = "1m"
  }
}

resource "kubernetes_service" "frontend" {
  metadata {
    name = "frontend"
  }

  spec {
    selector = {
      app = "frontend"
    }

    port {
      port        = 80
      target_port = 80
      node_port   = 30080
    }

    type = "NodePort"
  }
}
