setTimeout(()=>[
    'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js',
    'js/main.js',
    'js/index-post-jq.js'
].forEach(function(src) {
    var script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.head.appendChild(script);
})
,1800);

