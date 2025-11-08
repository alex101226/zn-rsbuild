# 阶段 1：构建 React 项目
# FROM node:19 AS build

# 设置工作目录
# WORKDIR /app

# 先复制 package 文件，利用缓存加速构建
# OPY package*.json ./
# RUN npm install

# 再复制剩下的项目文件
# COPY . .

# 构建生产环境
# RUN npm run build:file


# 阶段 2：使用 Nginx 作为 Web 服务器
FROM nginx:1.25-alpine

# 暴露端口（Nginx 默认 80）
EXPOSE 80

# 删除 Nginx 默认站点
RUN rm -rf /usr/share/nginx/html/*

# 将 React 构建的静态文件复制到 Nginx 容器中
COPY build/ /usr/share/nginx/html

# 复制自定义的 nginx 配置（可选）
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
