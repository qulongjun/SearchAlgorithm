requirejs.config({
    baseUrl: '/assets/js',
    paths: {
        jquery: ['jquery.min'],
        text:'text',
        amazeui:'amazeui',
        template:'template',
        underscore:'underscore-min'
    },
    shim: {
        text:{
            deps:['jquery']
        },
        amazeui:{
            deps:['jquery']
        },
        template:{
            deps:['jquery']
        }

    }
});
