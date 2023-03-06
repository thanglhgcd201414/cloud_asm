const Pool = require('pg').Pool;

const pg_conn = new Pool (
    {
        user: 'rytjxkpnltbdze',
        host: 'ec2-3-214-2-141.compute-1.amazonaws.com',
        database: 'da04h4l8giqcim',
        password: '81ed1bd3fe71bc0d246d64054d24fb59e52be188d905eaf63c70d68634f5c8c5',
        port: 5432,
        ssl: {
            rejectUnauthorized: false
        },

    }
);
module.exports = pg_conn;