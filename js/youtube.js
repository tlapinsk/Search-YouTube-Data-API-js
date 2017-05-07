function handle(e){
    if(e.keyCode === 13){
        e.preventDefault();
        keyWordsearch();
    }
    return false;
}

function keyWordsearch(){
    gapi.client.setApiKey('AIzaSyDYx5RuJS8QHTDWW1ZlCIWET15bs3WaNWk');
    gapi.client.load('youtube', 'v3', function(){
            makeRequest();
    });
}

function makeRequest(){
    var q = $('#query').val();
    var request = gapi.client.youtube.search.list({
            q: q,
            part: 'id, snippet',
            maxResults: 6
    });
    request.execute(function(response)  {                                                                                    
            $('#youtube1,#youtube2,#youtube3,#youtube4,#youtube5,#youtube6').each(function(){
              $(this).empty({
              });
            });
            var srchItems = response.result.items;  
            var arr = [];                    
            $.each(srchItems, function(index, item){
            vidTitle = item.snippet.title;  
            vidThumburl =  item.snippet.thumbnails.default.url;                 
            VIDEO_ID = item.id.videoId;               

            $('#results').append('<pre>' + vidTitle +   '</pre>'); 
            // $('#results').append('<iframe id="player" type="text/html" width="640" height="390" src="http://www.youtube.com/embed/'+VIDEO_ID+'" frameborder="0" allowfullscreen="1"></iframe>');
            // $('#results').append('<object data="http://www.youtube.com/embed/'+VIDEO_ID+'" style="width:100%;height:100%;width: 300px; height: 200px; float: none; clear: both; margin: 2px auto;"></object>');
            arr.push(VIDEO_ID);
            })  
            $('#youtube1').append('<iframe width="350px" height="250px" src="http://www.youtube.com/embed/'+arr[0]+'" frameBorder="0" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen=""> </iframe>');
            $('#youtube2').append('<iframe width="350px" height="250px" src="http://www.youtube.com/embed/'+arr[1]+'" frameBorder="0" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen=""> </iframe>');
            $('#youtube3').append('<iframe width="350px" height="250px" src="http://www.youtube.com/embed/'+arr[2]+'" frameBorder="0" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen=""> </iframe>');
            $('#youtube4').append('<iframe width="350px" height="250px" src="http://www.youtube.com/embed/'+arr[3]+'" frameBorder="0" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen=""> </iframe>');
            $('#youtube5').append('<iframe width="350px" height="250px" src="http://www.youtube.com/embed/'+arr[4]+'" frameBorder="0" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen=""> </iframe>');
            $('#youtube6').append('<iframe width="350px" height="250px" src="http://www.youtube.com/embed/'+arr[5]+'" frameBorder="0" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen=""> </iframe>');
    })  
}