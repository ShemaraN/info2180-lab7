window.onload = function()
{
    
    var searchB = document.getElementById("lookup");
    searchB.addEventListener("click", function(event)
    {
        event.preventDefault();
        var rhttp = new XMLHttpRequest();
        rhttp.onreadystatechange=rHtml;
        var url = "world.php?country=" + document.getElementById('country').value;
        rhttp.open("Get", url);
        rhttp.send();
        
        function rHtml()
        {
            if(rhttp.readyState === XMLHttpRequest.DONE)
            {
                if (rhttp.status === 200)
                {
                    var display= rhttp.responseText;
                    document.getElementById('result').innerHTML= display; 
                }
            }
        }
        
        
        
    })

}