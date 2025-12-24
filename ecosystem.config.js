module.exports = {
  apps: [
    {
      name: 'lalex-web',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      cwd: '/var/www/www-root/data/www/lalex-web.com',
      env: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=512',
        PORT: 3001,
      },
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '700M',
      exp_backoff_restart_delay: 100,
      watch: false,
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      error_file: 'logs/error.log',
      out_file: 'logs/out.log',
      merge_logs: true,
      max_restarts: 10,
      min_uptime: '30s',
    },
  ],
};
