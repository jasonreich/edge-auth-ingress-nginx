if k8s_context() != 'kind-deauth':
  fail("woah woah woah")

ingress_nginx_yaml = local('curl https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml')
k8s_yaml(ingress_nginx_yaml)

docker_build('resource-image', 'resource/.')
k8s_yaml('resource/k8s.yaml')

docker_build('auth-image', 'auth/.')
k8s_yaml('auth/k8s.yaml')