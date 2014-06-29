require 'base64'
require 'webrick'

TEXT = 'cNefyblvyo0gb9ef15/HncmlCg=='

TEMPLATE = %w[
  PCFET0NUWVBFIGh0bWw+CjxodG1sPgo8c3R5bGU+CmJvZHkgewogIG1hcmdpbi10b3A6IDFlbTsKIC
  Bmb250LXNpemU6IDEwZW07CiAgdGV4dC1hbGlnbjogY2VudGVyOwogIHRyYW5zZm9ybTogcm90YXRl
  KDE4MGRlZyk7CiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7CiAgLXdlYmtpdC10cmFuc2
  Zvcm06IHJvdGF0ZSgxODBkZWcpOwp9Cjwvc3R5bGU+CiV7dGV4dH0K
].join

HTML = Base64.decode64(TEMPLATE) % { text: Base64.decode64(TEXT) }

WEBrick::HTTPServer.new(Port: 3000).tap do |server|
  trap('INT') { server.shutdown }
  server.mount_proc('/') do |request, response|
    response['Content-Type'] = 'text/html; charset=utf-8'
    response.body = HTML
  end
  server.start
end
