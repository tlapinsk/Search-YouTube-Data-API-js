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
            $('#results').empty()
            var srchItems = response.result.items;                      
            $.each(srchItems, function(index, item){
            vidTitle = item.snippet.title;  
            vidThumburl =  item.snippet.thumbnails.default.url;                 
            VIDEO_ID = item.id.videoId;                

            $('#results').append('<pre>' + vidTitle +   '</pre>'); 
            // $('#results').append('<iframe id="player" type="text/html" width="640" height="390" src="http://www.youtube.com/embed/'+VIDEO_ID+'" frameborder="0" allowfullscreen="1"></iframe>');
            $('#results').append('<object data="http://www.youtube.com/embed/'+VIDEO_ID+'" style="width:100%;height:100%;width: 300px; height: 200px; float: none; clear: both; margin: 2px auto;"></object>');

    })  
  })  
}