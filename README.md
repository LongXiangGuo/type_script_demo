# 私有NPM Registry构建
1. 准备工具: 

   ```
   npm install -g verdaccio
   ```
2. 安装:
  ```
  verdaccio
 warn --- config file  - /Users/qxq4633/.config/verdaccio/config.yaml
 warn --- Verdaccio started
 warn --- Plugin successfully loaded: verdaccio-htpasswd
 warn --- Plugin successfully loaded: verdaccio-audit
 warn --- http address - http://localhost:4873/ - verdaccio/4.3.5
  ```
3. 登陆&发布
```
npm adduser --help
npm adduser [--registry=url] [--scope=@orgname] [--auth-type=legacy] [--always-auth]
aliases: login, add-user
npm adduser --registry http://localhost:4873
npm publish --registry http://localhost:4873
```

## Verdaccio文件配置
1. 在本机的user的根目录可以找到对应的`.config`文件,里面可以配置详细的信息。
2. 如下所示: 其中config.yaml可以为你本机的私有 npm package registry配置访问,发布,撤销发布等信息。`htpasswd`为你的授权用户名和密码.

    ```
├── config.yaml
└── htpasswd
    ```
3. config.yaml详细介绍：
```
auth:
  htpasswd:
    file: ./htpasswd
    max_users: 1000
uplinks:
  taobao: 
    url: https://registry.npm.taobao.org/
packages:
  '@*/*':
    # scoped packages
    access: $all
    publish: $authenticated
    unpublish: $authenticated
    proxy: taobao #change the proxy
  '**':
    # allow all users (including non-authenticated users) to read and
    # publish all packages
    #
    # you can specify usernames/groupnames (depending on your auth plugin)
    # and three keywords: "$all", "$anonymous", "$authenticated"
    access: $all
    # allow all known users to publish/publish packages
    # (anyone can register by default, remember?)
    publish: $authenticated
    unpublish: $authenticated
    # if package is not available locally, proxy requests to 'npmjs' registry
    proxy: npmjs
# You can specify HTTP/1.1 server keep alive timeout in seconds for incoming connections.
# A value of 0 makes the http server behave similarly to Node.js versions prior to 8.0.0, which did not have a keep-alive timeout.
# WORKAROUND: Through given configuration you can workaround following issue https://github.com/verdaccio/verdaccio/issues/301. Set to 0 in case 60 is not enough.
server:
  keepAliveTimeout: 60
middlewares:
  audit:
    enabled: true
# log settings
logs:
  - { type: stdout, format: pretty, level: http }
  #- {type: file, path: verdaccio.log, level: info}
#experiments:
#  # support for npm token command
#  token: false
``` 