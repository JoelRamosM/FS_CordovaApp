(function(){
    var containerForm = $('.container-form');
    var inputPis = $('.pis');
    var filtroData = $('.filtroData');
    var home = $('.home');
    
    
    var enviar = $('.pesquisar');
    
    var batidasHoje= $('.batidasHoje');
    var batidasDoDia= $('.doDia');
    var justificativa= $('.justificativa');
    var homeBtn = $('.homeBtn');
    batidasHoje.click(function(){
        home.hide()    
        filtroData.hide();
        containerForm.show();
    });
    
    batidasDoDia.click(function(){
        home.hide()    
        containerForm.show();
        filtroData.show();
    });
    
    homeBtn.click(function(){
        home.show()
        containerForm.hide();
        
    });
    enviar.click(function(){
        
        var pis = $('#PIS').val();
        var data  = $('#Data').val();
        var url = "http://fortesponto.azurewebsites.net/api/Lancamentos/"+pis;
        if(data){
            url+="/"+data;
        }
        else{
            url+="/Hoje"
        }
        
        var options={
            url:url,            
        };
        $.get(url,function(data){
            alert(data.toJson());
        });
    });
    
})();