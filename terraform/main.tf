provider "kubernetes" {
  config_path = "~/.kube/config"
}

module "k8s-deployment" {
  source = "./modules/k8s-deployment"
}
