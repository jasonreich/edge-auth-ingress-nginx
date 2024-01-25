# Edge auth with ingress-nginx

This is to demonstrate how to get nginx (deployed using ingress-nginx) to
provide token validation and exchange at ingress to a cluster.

I have two services;
* `auth` – Inspects the `authorization` request header. If;
  - `Bearer jason` then return 200 and pass `X-Auth-Attributes` in response header.
  - Else, return 401.
* `resource` – Shows request headers.

I then annotated the ingress for `resource`` with
```
    nginx.ingress.kubernetes.io/auth-url: "http://auth.default.svc.cluster.local:3000/"
    nginx.ingress.kubernetes.io/auth-response-headers: "X-Auth-Attributes
```

## Examples

```shell
❯ curl localhost/resource
<html>
<head><title>401 Authorization Required</title></head>
<body>
<center><h1>401 Authorization Required</h1></center>
<hr><center>nginx</center>
</body>
</html>

❯ curl -H "Authorization: Bearer jason" localhost/resource
Resource Server!
{
  "host": "localhost",
  "user-agent": "curl/8.4.0",
  "accept": "*/*",
  "authorization": "Bearer jason",
  "x-auth-attributes": "he's awesome",
  "x-request-id": "3b9e1b280a9a799aa5da8568dc75b441",
  "x-real-ip": "192.168.65.1",
  "x-forwarded-for": "192.168.65.1",
  "x-forwarded-host": "localhost",
  "x-forwarded-port": "80",
  "x-forwarded-proto": "http",
  "x-forwarded-scheme": "http",
  "x-scheme": "http"
}%
```