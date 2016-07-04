$("#gallerybtn").on("click", displayImages);

function jsonFlickrFeed(json) {
  $.each(json.items, function(i, item) {
    //add images to div
    $("<img />").attr("src", item.media.m).appendTo("#images");
  });
};

function displayImages() {
  $("#gallerybtn").remove(); //remove button
  $.ajax({ 
    //url = location of public photos for demo
    url: 'https://api.flickr.com/services/feeds/photos_public.gne',
    dataType: 'jsonp',
    data: { "tags": "garden", "format": "json" }
  });
}

