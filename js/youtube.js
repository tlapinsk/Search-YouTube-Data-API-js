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
            maxResults: 10
    });
    request.execute(function(response)  {                                                                                    
            $('#results').empty()
            var srchItems = response.result.items;                      
            $.each(srchItems, function(index, item){
            vidTitle = item.snippet.title;  
            vidThumburl =  item.snippet.thumbnails.default.url;                 
            vidThumbimg = '<pre><img id="thumb" src="'+vidThumburl+'" alt="No  Image  Available." style="width:204px;height:128px"></pre>';  
            VIDEO_ID = item.id.videoId;                

            $('#results').append('<pre>' + vidTitle +   '</pre>'); 
            $('#results').append('<iframe id="player" type="text/html" width="640" height="390" src="http://www.youtube.com/embed/'+VIDEO_ID+'" frameborder="0" allowfullscreen="1"></iframe>');                   
    })  
  })  
}