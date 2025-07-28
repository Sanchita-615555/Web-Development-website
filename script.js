var joinBtn = document.querySelector('.nextbutton');  
  joinBtn. addEventListener('click',function(){         
    joinBtn.style.backgroundColor= 'yellow';            
    joinBtn.innerHTML='clicked!';                       
    joinBtn.style.color='purple';  
 });

    var joinBtn = document.querySelector('.nextbutton');       
    joinBtn.addEventListener('mouseover',function(){           
      joinBtn.style.backgroundColor="blue";                    
    });
joinBtn.addEventListener('mouseout',function(){         
   joinBtn.style.backgroundColor="";                   
    });


    var joinBtn = document.querySelector('.nextbutton');     
    let position=0;                                          
    joinBtn.addEventListener('click',function(){             
      const interval=setInterval(function(){                 
        if(position>=300){                                   
          clearInterval(interval);                     
        }
        else{                                                   
          position++;                                         
          joinBtn.style.left=position+'px';                           }
      },5);                                               
    });

       var loginBtn = document.querySelector('.butn');
      loginBtn.addEventListener('mouseover',function(){         
      loginBtn.style.backgroundColor="pink";                 
    });
    loginBtn.addEventListener('mouseout',function(){          
    loginBtn.style.backgroundColor="";                    
    });
    var loginBtn = document.querySelector('.butn'); 
    loginBtn. addEventListener('click',function(){         
    loginBtn.style.backgroundColor= 'wheat';           
    loginBtn.innerHTML='submission successfully complete!';                      
    loginBtn.style.color='black'; 
 });


