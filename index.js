

    var currentID="",prevID="";
    var num=1;
    $("div").click(function(evt){
        currentID=this.id;
         if(num==1){
            num=fun1();
        }else if(num==0){
            num=bpawn();
        }else if(num==2){
            num=wpawn();
        }else if(num==3){
            num=boat();
        }else if(num==4){
            num=bishop();
        }else if(num==5){
            num=queen();
        }else if(num==6){
            num=knight();
        }else if(num==7){
            num=king();
        }
        
    })


    function fun1(){
        /// black pawn
        if(document.getElementById(currentID).innerText.charCodeAt(0)=="9817"){
     document.getElementById(parseInt(currentID)-10).classList.add("col")
     prevID=currentID;
     console.log("fun1"+currentID+" "+prevID)
     return 0;
        }
        /// white pawn
        else if(document.getElementById(currentID).innerText.charCodeAt(0)=="9823"){
            document.getElementById(parseInt(currentID)+10).classList.add("col")
     prevID=currentID;
     return 2;
        }
        /// boat
        else if(document.getElementById(currentID).innerText.charCodeAt(0)=="9820" || document.getElementById(currentID).innerText.charCodeAt(0)=="9814"){
            var boatId=currentID;
            prevID=currentID;
            while((parseInt(boatId)+10)<=77)
            {   
                document.getElementById(parseInt(boatId)+10).classList.add("col");
                boatId=parseInt(boatId)+10;
            }
            var boatId2=currentID.charAt(0);
            var t=currentID.charAt(1);
            console.log(boatId2)
            while((parseInt(boatId2)-1)>=0)
            {
                console.log("boatId"+boatId2)
                boatId2=parseInt(boatId2)-1;
                document.getElementById(boatId2+t).classList.add("col");
                
                console.log("boatId"+boatId2)
            }
            var boatId2=currentID.charAt(0);
            var t=currentID.charAt(1);
            while((parseInt(t)-1)>=0)
            {
                console.log("boatId"+boatId2)
                t=parseInt(t)-1;
                document.getElementById(boatId2+t).classList.add("col");
                
                console.log("boatId"+boatId2)
            }
            var boatId2=currentID.charAt(0);
            var t=currentID.charAt(1);
            while((parseInt(t)+1)<=7)
            {
                console.log("boatId"+boatId2)
                t=parseInt(t)+1;
                document.getElementById(boatId2+t).classList.add("col");
                
                console.log("boatId"+boatId2)
            }
            
    return 3;
        }

        ///bishop
        else if(document.getElementById(currentID).innerText.charCodeAt(0)=="9821" || document.getElementById(currentID).innerText.charCodeAt(0)=="9815")
        {
            prevID=currentID;
            var u=currentID.charAt(0);
            var s=currentID.charAt(1);
            while((parseInt(u)+1)<=7 && (parseInt(s)+1)<=7)
            {
                u=parseInt(u)+1;
                s=parseInt(s)+1;
                document.getElementById(u.toString()+s.toString()).classList.add("col");
            }
            var u=currentID.charAt(0);
            var s=currentID.charAt(1);
            while((parseInt(u)-1)>=0 && (parseInt(s)-1)>=0)
            {
                u=parseInt(u)-1;
                s=parseInt(s)-1;
                document.getElementById(u.toString()+s.toString()).classList.add("col");
            }
            var u=currentID.charAt(0);
            var s=currentID.charAt(1);
            while((parseInt(u)+1)<=7 && (parseInt(s)-1)>=0)
            {
                u=parseInt(u)+1;
                s=parseInt(s)-1;
                document.getElementById(u.toString()+s.toString()).classList.add("col");
            }
            var u=currentID.charAt(0);
            var s=currentID.charAt(1);
            while((parseInt(u)-1)>=0 && (parseInt(s)+1)<=7)
            {
                u=parseInt(u)-1;
                s=parseInt(s)+1;
                document.getElementById(u.toString()+s.toString()).classList.add("col");
            }
    return 4;
        }
        /// queen
        else if(document.getElementById(currentID).innerText.charCodeAt(0)=="9819" || document.getElementById(currentID).innerText.charCodeAt(0)=="9813")
        {
            prevID=currentID;
            var u=currentID.charAt(0);
            var s=currentID.charAt(1);
            while((parseInt(u)+1)<=7 && (parseInt(s)+1)<=7)
            {
                u=parseInt(u)+1;
                s=parseInt(s)+1;
                if(document.getElementById(u.toString()+s.toString()).innerHTML=="")
                addGreen(u.toString(),s.toString());
                else
                {
                    if($("#"+currentID).attr("class")==$("#"+u.toString()+s.toString()).attr("class"))
                    break;
                    else{
                        addGreen(u.toString(),s.toString());
                    break;    
                }
                }
            }
            var u=currentID.charAt(0);
            var s=currentID.charAt(1);
            while((parseInt(u)-1)>=0 && (parseInt(s)-1)>=0)
            {
                u=parseInt(u)-1;
                s=parseInt(s)-1;
                if(document.getElementById(u.toString()+s.toString()).innerHTML=="")
                addGreen(u.toString(),s.toString());
                else
                {
                    if($("#"+currentID).attr("class")==$("#"+u.toString()+s.toString()).attr("class"))
                    break;
                    else{
                        addGreen(u.toString(),s.toString());
                    break;    
                }
                }
            }
            var u=currentID.charAt(0);
            var s=currentID.charAt(1);
            while((parseInt(u)+1)<=7 && (parseInt(s)-1)>=0)
            {
                u=parseInt(u)+1;
                s=parseInt(s)-1;
                if(document.getElementById(u.toString()+s.toString()).innerHTML=="")
                addGreen(u.toString(),s.toString());
                else
                {
                    if($("#"+currentID).attr("class")==$("#"+u.toString()+s.toString()).attr("class"))
                    break;
                    else{
                        addGreen(u.toString(),s.toString());
                    break;    
                }
                }
            }
            var u=currentID.charAt(0);
            var s=currentID.charAt(1);
            while((parseInt(u)-1)>=0 && (parseInt(s)+1)<=7)
            {
                u=parseInt(u)-1;
                s=parseInt(s)+1;
                if(document.getElementById(u.toString()+s.toString()).innerHTML=="")
                addGreen(u.toString(),s.toString());
                else
                {
                    if($("#"+currentID).attr("class")==$("#"+u.toString()+s.toString()).attr("class"))
                    break;
                    else{  
                        addGreen(u.toString(),s.toString());
                    break;    
                }
                }
            }
            ///////////////////////////////////////////////////
            var u=currentID.charAt(0);
            var s=currentID.charAt(1);
            while((parseInt(u)+1)<=7)
            {
                u=parseInt(u)+1;
                if(document.getElementById(u.toString()+s).innerHTML=="")
                addGreen(u.toString(),s);
                else
                {
                    if($("#"+currentID).attr("class")==$("#"+u.toString()+s).attr("class"))
                    break;
                    else{
                        addGreen(u.toString(),s);
                    break;    
                }
                }
            }
            var u=currentID.charAt(0);
            var s=currentID.charAt(1);
            while((parseInt(u)-1)>=0 )
            {
                u=parseInt(u)-1;
                if(document.getElementById(u.toString()+s).innerHTML=="")
                addGreen(u.toString(),s);
                else
                {
                    if($("#"+currentID).attr("class")==$("#"+u.toString()+s).attr("class"))
                    break;
                    else{
                        addGreen(u.toString(),s);
                    break;    
                }
                }
            }
            var u=currentID.charAt(0);
            var s=currentID.charAt(1);
            while((parseInt(s)-1)>=0)
            {
                
                s=parseInt(s)-1;
                if(document.getElementById(u+s.toString()).innerHTML=="")
                addGreen(u,s.toString());
                else
                {
                    if($("#"+currentID).attr("class")==$("#"+u+s.toString()).attr("class"))
                    break;
                    else{
                        addGreen(u,s.toString());
                    break;    
                }
                }
            }
            var u=currentID.charAt(0);
            var s=currentID.charAt(1);
            while( (parseInt(s)+1)<=7)
            {
                s=parseInt(s)+1;
                if(document.getElementById(u+s.toString()).innerHTML=="")
                addGreen(u,s.toString());
                else
                {
                    if($("#"+currentID).attr("class")==$("#"+u+s.toString()).attr("class"))
                    break;
                    else{
                        addGreen(u,s.toString());
                    break;    
                }
                }
            }
            
            
            return 5;
           } 

           //// knight
           else if(document.getElementById(currentID).innerText.charCodeAt(0)=="9816" || document.getElementById(currentID).innerText.charCodeAt(0)=="9822")
        {
            prevID=currentID;
            var u=currentID.charAt(0);
            var s=currentID.charAt(1);
            if((parseInt(u)-1)>=0 && (parseInt(s)-2)>=0)
            {
                u=parseInt(u)-1;
                s=parseInt(s)-2;
                document.getElementById(u.toString()+s.toString()).classList.add("col");
                
            }
            var u=currentID.charAt(0);
            var s=currentID.charAt(1);
            if((parseInt(u)+1)<=7 && (parseInt(s)-2)>=0)
            {
                u=parseInt(u)+1;
                s=parseInt(s)-2;
                document.getElementById(u.toString()+s.toString()).classList.add("col");
                
            }
            var u=currentID.charAt(0);
            var s=currentID.charAt(1);
            if((parseInt(u)+2)<=7 && (parseInt(s)-1)>=0)
            {
                u=parseInt(u)+2;
                s=parseInt(s)-1;
                document.getElementById(u.toString()+s.toString()).classList.add("col");
                
            }
            var u=currentID.charAt(0);
            var s=currentID.charAt(1);
            if((parseInt(u)+2)<=7 && (parseInt(s)+1)<=7)
            {
                u=parseInt(u)+2;
                s=parseInt(s)+1;
                document.getElementById(u.toString()+s.toString()).classList.add("col");
                
            }
            var u=currentID.charAt(0);
            var s=currentID.charAt(1);
            if((parseInt(u)+1)<=7 && (parseInt(s)+2)<=7)
            {
                u=parseInt(u)+1;
                s=parseInt(s)+2;
                document.getElementById(u.toString()+s.toString()).classList.add("col");
                
            }
            var u=currentID.charAt(0);
            var s=currentID.charAt(1);
            if((parseInt(u)-1)>=0 && (parseInt(s)+2)<=7)
            {
                u=parseInt(u)-1;
                s=parseInt(s)+2;
                document.getElementById(u.toString()+s.toString()).classList.add("col");
                
            }
            var u=currentID.charAt(0);
            var s=currentID.charAt(1);
            if((parseInt(u)-2)>=0 && (parseInt(s)-1)>=0)
            {
                u=parseInt(u)-2;
                s=parseInt(s)-1;
                document.getElementById(u.toString()+s.toString()).classList.add("col");
                
            }
            var u=currentID.charAt(0);
            var s=currentID.charAt(1);
            if((parseInt(u)-2)>=0 && (parseInt(s)+1)<=7)
            {
                u=parseInt(u)-2;
                s=parseInt(s)+1;
                document.getElementById(u.toString()+s.toString()).classList.add("col");
               
            }
    return 6;
        }
        //// king
        else if(document.getElementById(currentID).innerText.charCodeAt(0)=="9812" || document.getElementById(currentID).innerText.charCodeAt(0)=="9818")
        {
            prevID=currentID;
            var u=currentID.charAt(0);
            var s=currentID.charAt(1);
            if((parseInt(u)+1)<=7 && (parseInt(s)+1)<=7)
            {
                u=parseInt(u)+1;
                s=parseInt(s)+1;
                document.getElementById(u.toString()+s.toString()).classList.add("col");
            }
            var u=currentID.charAt(0);
            var s=currentID.charAt(1);
            if((parseInt(u)-1)>=0 && (parseInt(s)-1)>=0)
            {
                u=parseInt(u)-1;
                s=parseInt(s)-1;
                document.getElementById(u.toString()+s.toString()).classList.add("col");
            }
            var u=currentID.charAt(0);
            var s=currentID.charAt(1);
            if((parseInt(u)+1)<=7 && (parseInt(s)-1)>=0)
            {
                u=parseInt(u)+1;
                s=parseInt(s)-1;
                document.getElementById(u.toString()+s.toString()).classList.add("col");
            }
            var u=currentID.charAt(0);
            var s=currentID.charAt(1);
            if((parseInt(u)-1)>=0 && (parseInt(s)+1)<=7)
            {
                u=parseInt(u)-1;
                s=parseInt(s)+1;
                document.getElementById(u.toString()+s.toString()).classList.add("col");
            }
            ///////////////////////////////////////////////////
            var u=currentID.charAt(0);
            var s=currentID.charAt(1);
            if((parseInt(u)+1)<=7)
            {
                u=parseInt(u)+1;
               
                document.getElementById(u.toString()+s).classList.add("col");
            }
            var u=currentID.charAt(0);
            var s=currentID.charAt(1);
            if((parseInt(u)-1)>=0 )
            {
                u=parseInt(u)-1;
                
                document.getElementById(u.toString()+s).classList.add("col");
            }
            var u=currentID.charAt(0);
            var s=currentID.charAt(1);
            if((parseInt(s)-1)>=0)
            {
                
                s=parseInt(s)-1;
                document.getElementById(u+s.toString()).classList.add("col");
            }
            var u=currentID.charAt(0);
            var s=currentID.charAt(1);
            if( (parseInt(s)+1)<=7)
            {
                s=parseInt(s)+1;
                document.getElementById(u+s.toString()).classList.add("col");
            }
            
            
            
            return 7;
           } 


        else{
            currentID="";
            prevID="";
            return 1;  
        }

    }




    /// function for guties

    function bpawn(){
        if(document.getElementById(currentID).innerHTML!=""){
        document.getElementById(parseInt(prevID)-10).classList.remove("col");
        return 1;
        }
        else{
    document.getElementById(parseInt(prevID)-10).classList.remove("col")
    console.log("fun2 if out"+currentID+" "+prevID)
    if(currentID==parseInt(prevID)-10){
        
        document.getElementById(currentID).innerHTML="<p class='inside' >&#9817</p>"
        document.getElementById(prevID).innerHTML=""
        console.log("fun2 if in"+currentID+" "+prevID)
        return 1;
    }
    else if(currentID!=parseInt(prevID)-10){
        console.log("fun2 else in"+currentID+" "+prevID)
        return 1;
    }
    }
    }


    function wpawn(){
        if(document.getElementById(currentID).innerHTML!=""){
        document.getElementById(parseInt(prevID)+10).classList.remove("col");
        return 1;
        }
        else{
    document.getElementById(parseInt(prevID)+10).classList.remove("col")
    console.log("fun2 if out"+currentID+" "+prevID)
    if(currentID==parseInt(prevID)+10){
        
        document.getElementById(currentID).innerHTML="<p class='inside' >&#9823</p>"
        document.getElementById(prevID).innerHTML=""
        console.log("fun2 if in"+currentID+" "+prevID)
        return 1;
    }
    else if(currentID!=parseInt(prevID)+10){
        console.log("fun2 else in"+currentID+" "+prevID)
        return 1;
    }
    }
    }


    function boat(){
        if(document.getElementById(currentID).innerHTML!=""){
            boatId=prevID;
            while((parseInt(boatId)+10)<=77)
            {   
                document.getElementById(parseInt(boatId)+10).classList.remove("col");
                boatId=parseInt(boatId)+10;
            }
            var boatId2=prevID.charAt(0);
            var t=prevID.charAt(1);
            while((parseInt(boatId2)-1)>=0)
            {
                boatId2=parseInt(boatId2)-1;
                document.getElementById(boatId2+t).classList.remove("col");
            }
            var boatId2=prevID.charAt(0);
            var t=prevID.charAt(1);
            while((parseInt(t)-1)>=0)
            {
                t=parseInt(t)-1;
                document.getElementById(boatId2+t).classList.remove("col");
            }
            var boatId2=prevID.charAt(0);
            var t=prevID.charAt(1);
            while((parseInt(t)+1)<=7)
            {
                t=parseInt(t)+1;
                document.getElementById(boatId2+t).classList.remove("col");
            }
        return 1;
        }
        else{
            boatId=prevID;
            while((parseInt(boatId)+10)<=77)
            {   
                document.getElementById(parseInt(boatId)+10).classList.remove("col");
                if(currentID==parseInt(boatId)+10){
                    var z=document.getElementById(prevID).innerHTML;
                    document.getElementById(currentID).innerHTML=z;
                    document.getElementById(prevID).innerHTML=""
                }
                boatId=parseInt(boatId)+10;
            }
            var boatId2=prevID.charAt(0);
            var t=prevID.charAt(1);
            while((parseInt(boatId2)-1)>=0)
            {
                boatId2=parseInt(boatId2)-1;
                document.getElementById(boatId2+t).classList.remove("col");
                if(currentID==boatId2+t){
                    var z=document.getElementById(prevID).innerHTML;
                    document.getElementById(currentID).innerHTML=z;
                    document.getElementById(prevID).innerHTML=""
                }
            }
            var boatId2=prevID.charAt(0);
            var t=prevID.charAt(1);
            while((parseInt(t)-1)>=0)
            {
                t=parseInt(t)-1;
                document.getElementById(boatId2+t).classList.remove("col");
                if(currentID==boatId2+t){
                    var z=document.getElementById(prevID).innerHTML;
                    document.getElementById(currentID).innerHTML=z;
                    document.getElementById(prevID).innerHTML=""
                }
            }
            var boatId2=prevID.charAt(0);
            var t=prevID.charAt(1);
            while((parseInt(t)+1)<=7)
            {
                t=parseInt(t)+1;
                document.getElementById(boatId2+t).classList.remove("col");
                if(currentID==boatId2+t){
                    var z=document.getElementById(prevID).innerHTML;
                    document.getElementById(currentID).innerHTML=z;
                    document.getElementById(prevID).innerHTML=""
                }
            }
        return 1;
    }
    }
    



    function bishop(){
        if(document.getElementById(currentID).innerHTML!=""){
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            while((parseInt(u)+1)<=7 && (parseInt(s)+1)<=7)
            {
                u=parseInt(u)+1;
                s=parseInt(s)+1;
                document.getElementById(u.toString()+s.toString()).classList.remove("col");
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            while((parseInt(u)-1)>=0 && (parseInt(s)-1)>=0)
            {
                u=parseInt(u)-1;
                s=parseInt(s)-1;
                document.getElementById(u.toString()+s.toString()).classList.remove("col");
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            while((parseInt(u)+1)<=7 && (parseInt(s)-1)>=0)
            {
                u=parseInt(u)+1;
                s=parseInt(s)-1;
                document.getElementById(u.toString()+s.toString()).classList.remove("col");
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            while((parseInt(u)-1)>=0 && (parseInt(s)+1)<=7)
            {
                u=parseInt(u)-1;
                s=parseInt(s)+1;
                document.getElementById(u.toString()+s.toString()).classList.remove("col");
            }
            return 1;
            }
            else{
                var u=prevID.charAt(0);
                var s=prevID.charAt(1);
                while((parseInt(u)+1)<=7 && (parseInt(s)+1)<=7)
                {
                    u=parseInt(u)+1;
                    s=parseInt(s)+1;
                    document.getElementById(u.toString()+s.toString()).classList.remove("col");
                    if(currentID==u.toString()+s.toString()){
                        var z=document.getElementById(prevID).innerHTML;
                        document.getElementById(currentID).innerHTML=z;
                        document.getElementById(prevID).innerHTML=""
                    }
                }
                var u=prevID.charAt(0);
                var s=prevID.charAt(1);
                while((parseInt(u)-1)>=0 && (parseInt(s)-1)>=0)
                {
                    u=parseInt(u)-1;
                    s=parseInt(s)-1;
                    document.getElementById(u.toString()+s.toString()).classList.remove("col");
                    if(currentID==u.toString()+s.toString()){
                        var z=document.getElementById(prevID).innerHTML;
                        document.getElementById(currentID).innerHTML=z;
                        document.getElementById(prevID).innerHTML=""
                    }
                }
                var u=prevID.charAt(0);
                var s=prevID.charAt(1);
                while((parseInt(u)+1)<=7 && (parseInt(s)-1)>=0)
                {
                    u=parseInt(u)+1;
                    s=parseInt(s)-1;
                    document.getElementById(u.toString()+s.toString()).classList.remove("col");
                    if(currentID==u.toString()+s.toString()){
                        var z=document.getElementById(prevID).innerHTML;
                        document.getElementById(currentID).innerHTML=z;
                        document.getElementById(prevID).innerHTML=""
                    }
                }
                var u=prevID.charAt(0);
                var s=prevID.charAt(1);
                while((parseInt(u)-1)>=0 && (parseInt(s)+1)<=7)
                {
                    u=parseInt(u)-1;
                    s=parseInt(s)+1;
                    document.getElementById(u.toString()+s.toString()).classList.remove("col");
                    if(currentID==u.toString()+s.toString()){
                        var z=document.getElementById(prevID).innerHTML;
                        document.getElementById(currentID).innerHTML=z;
                        document.getElementById(prevID).innerHTML=""
                    }
                }
        return 1;
        }
    }


    /////////////////////////////////////////////////////////////////////////

    function queen(){
        if(document.getElementById(currentID).innerHTML!=""){
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            while((parseInt(u)+1)<=7 && (parseInt(s)+1)<=7)
            {
                u=parseInt(u)+1;
                s=parseInt(s)+1;
                removeGreen(u.toString(),s.toString())
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            while((parseInt(u)-1)>=0 && (parseInt(s)-1)>=0)
            {
                u=parseInt(u)-1;
                s=parseInt(s)-1;
                removeGreen(u.toString(),s.toString())
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            while((parseInt(u)+1)<=7 && (parseInt(s)-1)>=0){
                u=parseInt(u)+1;
                s=parseInt(s)-1;
                removeGreen(u.toString(),s.toString())
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            while((parseInt(u)-1)>=0 && (parseInt(s)+1)<=7)
            {
                u=parseInt(u)-1;
                s=parseInt(s)+1;
                removeGreen(u.toString(),s.toString())
            }
            ///////////////////////////////////////////////////
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            while((parseInt(u)+1)<=7)
            {
                u=parseInt(u)+1;
               
                removeGreen(u.toString(),s)
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            while((parseInt(u)-1)>=0 )
            {
                u=parseInt(u)-1;
                
                removeGreen(u.toString(),s)
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            while((parseInt(s)-1)>=0)
            {
                
                s=parseInt(s)-1;
                removeGreen(u,s.toString())
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            while( (parseInt(s)+1)<=7)
            {
                
                s=parseInt(s)+1;
                removeGreen(u,s.toString())
            }
            if($("#"+currentID).attr("class")!=$("#"+prevID).attr("class"))
            {
                document.getElementById(currentID).innerHTML=""
                var z=document.getElementById(prevID).innerHTML;
                document.getElementById(currentID).innerHTML=z;
                document.getElementById(currentID).classList.remove($("#"+currentID).attr("class"))   
                document.getElementById(currentID).classList.add($("#"+prevID).attr("class"))
                document.getElementById(prevID).innerHTML=""
            }
            
            return 1;
            }
        
            else{
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            while((parseInt(u)+1)<=7 && (parseInt(s)+1)<=7)
            {
                u=parseInt(u)+1;
                s=parseInt(s)+1;
                removeGreen(u.toString(),s.toString())
                if(currentID==u.toString()+s.toString()){
                    var z=document.getElementById(prevID).innerHTML;
                    document.getElementById(currentID).innerHTML=z;
                    console.log($("#"+prevID).attr("class"))
                    document.getElementById(prevID).innerHTML=""
                    document.getElementById(currentID).classList.add($("#"+prevID).attr("class"));
                    document.getElementById(prevID).classList.remove($("#"+currentID).attr("class"));
                }
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            while((parseInt(u)-1)>=0 && (parseInt(s)-1)>=0)
            {
                u=parseInt(u)-1;
                s=parseInt(s)-1;
                removeGreen(u.toString(),s.toString())
                if(currentID==u.toString()+s.toString()){
                    var z=document.getElementById(prevID).innerHTML;
                    document.getElementById(currentID).innerHTML=z;
                    console.log($("#"+prevID).attr("class"))
                    document.getElementById(prevID).innerHTML=""
                    document.getElementById(currentID).classList.add($("#"+prevID).attr("class"));
                    document.getElementById(prevID).classList.remove($("#"+currentID).attr("class"));
                }
                
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            while((parseInt(u)+1)<=7 && (parseInt(s)-1)>=0)
            {
                u=parseInt(u)+1;
                s=parseInt(s)-1;
                removeGreen(u.toString(),s.toString())
                if(currentID==u.toString()+s.toString()){
                    var z=document.getElementById(prevID).innerHTML;
                    document.getElementById(currentID).innerHTML=z;
                    console.log($("#"+prevID).attr("class"))
                    document.getElementById(prevID).innerHTML=""
                    document.getElementById(currentID).classList.add($("#"+prevID).attr("class"));
                    document.getElementById(prevID).classList.remove($("#"+currentID).attr("class"));
                }

            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            while((parseInt(u)-1)>=0 && (parseInt(s)+1)<=7)
            {
                u=parseInt(u)-1;
                s=parseInt(s)+1;
                removeGreen(u.toString(),s.toString())
                if(currentID==u.toString()+s.toString()){
                    var z=document.getElementById(prevID).innerHTML;
                    document.getElementById(currentID).innerHTML=z;
                    console.log($("#"+prevID).attr("class"))
                    document.getElementById(prevID).innerHTML=""
                    document.getElementById(currentID).classList.add($("#"+prevID).attr("class"));
                    document.getElementById(prevID).classList.remove($("#"+currentID).attr("class"));
                }
            }
            ///////////////////////////////////////////////////
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            while((parseInt(u)+1)<=7)
            {
                u=parseInt(u)+1;
                removeGreen(u.toString(),s)
                if(currentID==u.toString()+s){
                    var z=document.getElementById(prevID).innerHTML;
                    document.getElementById(currentID).innerHTML=z;
                    console.log($("#"+prevID).attr("class"))
                    document.getElementById(prevID).innerHTML=""
                    document.getElementById(currentID).classList.add($("#"+prevID).attr("class"));
                    document.getElementById(prevID).classList.remove($("#"+currentID).attr("class"));
                }
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            while((parseInt(u)-1)>=0 )
            {
                u=parseInt(u)-1;
                removeGreen(u.toString(),s)
                if(currentID==u.toString()+s){
                    var z=document.getElementById(prevID).innerHTML;
                    document.getElementById(currentID).innerHTML=z;
                    console.log($("#"+prevID).attr("class"))
                    document.getElementById(prevID).innerHTML=""
                    document.getElementById(currentID).classList.add($("#"+prevID).attr("class"));
                    document.getElementById(prevID).classList.remove($("#"+currentID).attr("class"));
                }
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            while((parseInt(s)-1)>=0)
            {
                
                s=parseInt(s)-1;
                removeGreen(u,s.toString())
                if(currentID==u+s.toString()){
                    var z=document.getElementById(prevID).innerHTML;
                    document.getElementById(currentID).innerHTML=z;
                    console.log($("#"+prevID).attr("class"))
                    document.getElementById(prevID).innerHTML=""
                    document.getElementById(currentID).classList.add($("#"+prevID).attr("class"));
                    document.getElementById(prevID).classList.remove($("#"+currentID).attr("class"));
                }
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            while( (parseInt(s)+1)<=7)
            {
               s=parseInt(s)+1;
               removeGreen(u,s.toString())
                if(currentID==u+s.toString()){
                    var z=document.getElementById(prevID).innerHTML;
                    document.getElementById(currentID).innerHTML=z;
                    console.log($("#"+prevID).attr("class"))
                    document.getElementById(prevID).innerHTML=""
                    document.getElementById(currentID).classList.add($("#"+prevID).attr("class"));
                    document.getElementById(prevID).classList.remove($("#"+currentID).attr("class"));
                }
            }
            return 1;
            }
    }


/// knight function
function knight(){
    if(document.getElementById(currentID).innerHTML!=""){
        var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            if((parseInt(u)-1)>=0 && (parseInt(s)-2)>=0)
            {
                u=parseInt(u)-1;
                s=parseInt(s)-2;
                document.getElementById(u.toString()+s.toString()).classList.remove("col");
                
                
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            if((parseInt(u)+1)<=7 && (parseInt(s)-2)>=0)
            {
                u=parseInt(u)+1;
                s=parseInt(s)-2;
                document.getElementById(u.toString()+s.toString()).classList.remove("col");
                
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            if((parseInt(u)+2)<=7 && (parseInt(s)-1)>=0)
            {
                u=parseInt(u)+2;
                s=parseInt(s)-1;
                document.getElementById(u.toString()+s.toString()).classList.remove("col");
                
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            if((parseInt(u)+2)<=7 && (parseInt(s)+1)<=7)
            {
                u=parseInt(u)+2;
                s=parseInt(s)+1;
                document.getElementById(u.toString()+s.toString()).classList.remove("col");
                
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            if((parseInt(u)+1)<=7 && (parseInt(s)+2)<=7)
            {
                u=parseInt(u)+1;
                s=parseInt(s)+2;
                document.getElementById(u.toString()+s.toString()).classList.remove("col");
                
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            if((parseInt(u)-1)>=0 && (parseInt(s)+2)<=7)
            {
                u=parseInt(u)-1;
                s=parseInt(s)+2;
                document.getElementById(u.toString()+s.toString()).classList.remove("col");
                
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            if((parseInt(u)-2)>=0 && (parseInt(s)-1)>=0)
            {
                u=parseInt(u)-2;
                s=parseInt(s)-1;
                document.getElementById(u.toString()+s.toString()).classList.remove("col");
                
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            if((parseInt(u)-2)>=0 && (parseInt(s)+1)<=7)
            {
                u=parseInt(u)-2;
                s=parseInt(s)+1;
                document.getElementById(u.toString()+s.toString()).classList.remove("col");
               
            }
                
                
        
        
        }else{
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            if((parseInt(u)-1)>=0 && (parseInt(s)-2)>=0)
            {
                u=parseInt(u)-1;
                s=parseInt(s)-2;
                document.getElementById(u.toString()+s.toString()).classList.remove("col");
                if(currentID==u.toString()+s.toString()){
                    var z=document.getElementById(prevID).innerHTML;
                    document.getElementById(currentID).innerHTML=z;
                    document.getElementById(prevID).innerHTML=""
                }
                
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            if((parseInt(u)+1)<=7 && (parseInt(s)-2)>=0)
            {
                u=parseInt(u)+1;
                s=parseInt(s)-2;
                document.getElementById(u.toString()+s.toString()).classList.remove("col");
                if(currentID==u.toString()+s.toString()){
                    var z=document.getElementById(prevID).innerHTML;
                    document.getElementById(currentID).innerHTML=z;
                    document.getElementById(prevID).innerHTML=""
                }
                
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            if((parseInt(u)+2)<=7 && (parseInt(s)-1)>=0)
            {
                u=parseInt(u)+2;
                s=parseInt(s)-1;
                document.getElementById(u.toString()+s.toString()).classList.remove("col");
                if(currentID==u.toString()+s.toString()){
                    var z=document.getElementById(prevID).innerHTML;
                    document.getElementById(currentID).innerHTML=z;
                    document.getElementById(prevID).innerHTML=""
                }
                
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            if((parseInt(u)+2)<=7 && (parseInt(s)+1)<=7)
            {
                u=parseInt(u)+2;
                s=parseInt(s)+1;
                document.getElementById(u.toString()+s.toString()).classList.remove("col");
                if(currentID==u.toString()+s.toString()){
                    var z=document.getElementById(prevID).innerHTML;
                    document.getElementById(currentID).innerHTML=z;
                    document.getElementById(prevID).innerHTML=""
                }
                
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            if((parseInt(u)+1)<=7 && (parseInt(s)+2)<=7)
            {
                u=parseInt(u)+1;
                s=parseInt(s)+2;
                document.getElementById(u.toString()+s.toString()).classList.remove("col");
                if(currentID==u.toString()+s.toString()){
                    var z=document.getElementById(prevID).innerHTML;
                    document.getElementById(currentID).innerHTML=z;
                    document.getElementById(prevID).innerHTML=""
                }
                
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            if((parseInt(u)-1)>=0 && (parseInt(s)+2)<=7)
            {
                u=parseInt(u)-1;
                s=parseInt(s)+2;
                document.getElementById(u.toString()+s.toString()).classList.remove("col");
                if(currentID==u.toString()+s.toString()){
                    var z=document.getElementById(prevID).innerHTML;
                    document.getElementById(currentID).innerHTML=z;
                    document.getElementById(prevID).innerHTML=""
                }
                
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            if((parseInt(u)-2)>=0 && (parseInt(s)-1)>=0)
            {
                u=parseInt(u)-2;
                s=parseInt(s)-1;
                document.getElementById(u.toString()+s.toString()).classList.remove("col");
                if(currentID==u.toString()+s.toString()){
                    var z=document.getElementById(prevID).innerHTML;
                    document.getElementById(currentID).innerHTML=z;
                    document.getElementById(prevID).innerHTML=""
                }
                
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            if((parseInt(u)-2)>=0 && (parseInt(s)+1)<=7)
            {
                u=parseInt(u)-2;
                s=parseInt(s)+1;
                document.getElementById(u.toString()+s.toString()).classList.remove("col");
                if(currentID==u.toString()+s.toString()){
                    var z=document.getElementById(prevID).innerHTML;
                    document.getElementById(currentID).innerHTML=z;
                    document.getElementById(prevID).innerHTML=""
                }
               
            }
        }
        return 1;
    }


    function king(){
        if(document.getElementById(currentID).innerHTML!=""){
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            if((parseInt(u)+1)<=7 && (parseInt(s)+1)<=7)
            {
                u=parseInt(u)+1;
                s=parseInt(s)+1;
                document.getElementById(u.toString()+s.toString()).classList.remove("col");
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            if((parseInt(u)-1)>=0 && (parseInt(s)-1)>=0)
            {
                u=parseInt(u)-1;
                s=parseInt(s)-1;
                document.getElementById(u.toString()+s.toString()).classList.remove("col");
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            if((parseInt(u)+1)<=7 && (parseInt(s)-1)>=0)
            {
                u=parseInt(u)+1;
                s=parseInt(s)-1;
                document.getElementById(u.toString()+s.toString()).classList.remove("col");
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            if((parseInt(u)-1)>=0 && (parseInt(s)+1)<=7)
            {
                u=parseInt(u)-1;
                s=parseInt(s)+1;
                document.getElementById(u.toString()+s.toString()).classList.remove("col");
            }
            ///////////////////////////////////////////////////
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            if((parseInt(u)+1)<=7)
            {
                u=parseInt(u)+1;
               
                document.getElementById(u.toString()+s).classList.remove("col");
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            if((parseInt(u)-1)>=0 )
            {
                u=parseInt(u)-1;
                
                document.getElementById(u.toString()+s).classList.remove("col");
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            if((parseInt(s)-1)>=0)
            {
                
                s=parseInt(s)-1;
                document.getElementById(u+s.toString()).classList.remove("col");
            }
            var u=prevID.charAt(0);
            var s=prevID.charAt(1);
            if( (parseInt(s)+1)<=7)
            {
                s=parseInt(s)+1;
                document.getElementById(u+s.toString()).classList.remove("col");
            }
            
            
            return 1;
            }
        
            else{
                var u=prevID.charAt(0);
                var s=prevID.charAt(1);
                if((parseInt(u)+1)<=7 && (parseInt(s)+1)<=7)
                {
                    u=parseInt(u)+1;
                    s=parseInt(s)+1;
                    document.getElementById(u.toString()+s.toString()).classList.remove("col");
                    if(currentID==u.toString()+s.toString()){
                        var z=document.getElementById(prevID).innerHTML;
                        document.getElementById(currentID).innerHTML=z;
                        document.getElementById(prevID).innerHTML=""
                    }
                }
                var u=prevID.charAt(0);
                var s=prevID.charAt(1);
                if((parseInt(u)-1)>=0 && (parseInt(s)-1)>=0)
                {
                    u=parseInt(u)-1;
                    s=parseInt(s)-1;
                    document.getElementById(u.toString()+s.toString()).classList.remove("col");
                    if(currentID==u.toString()+s.toString()){
                        var z=document.getElementById(prevID).innerHTML;
                        document.getElementById(currentID).innerHTML=z;
                        document.getElementById(prevID).innerHTML=""
                    }
                }
                var u=prevID.charAt(0);
                var s=prevID.charAt(1);
                if((parseInt(u)+1)<=7 && (parseInt(s)-1)>=0)
                {
                    u=parseInt(u)+1;
                    s=parseInt(s)-1;
                    document.getElementById(u.toString()+s.toString()).classList.remove("col");
                    if(currentID==u.toString()+s.toString()){
                        var z=document.getElementById(prevID).innerHTML;
                        document.getElementById(currentID).innerHTML=z;
                        document.getElementById(prevID).innerHTML=""
                    }
                }
                var u=prevID.charAt(0);
                var s=prevID.charAt(1);
                if((parseInt(u)-1)>=0 && (parseInt(s)+1)<=7)
                {
                    u=parseInt(u)-1;
                    s=parseInt(s)+1;
                    document.getElementById(u.toString()+s.toString()).classList.remove("col");
                    if(currentID==u.toString()+s.toString()){
                        var z=document.getElementById(prevID).innerHTML;
                        document.getElementById(currentID).innerHTML=z;
                        document.getElementById(prevID).innerHTML=""
                    }
                }
                ///////////////////////////////////////////////////
                var u=prevID.charAt(0);
                var s=prevID.charAt(1);
                if((parseInt(u)+1)<=7)
                {
                    u=parseInt(u)+1;
                   
                    document.getElementById(u.toString()+s).classList.remove("col");
                    if(currentID==u.toString()+s.toString()){
                        var z=document.getElementById(prevID).innerHTML;
                        document.getElementById(currentID).innerHTML=z;
                        document.getElementById(prevID).innerHTML=""
                    }
                }
                var u=prevID.charAt(0);
                var s=prevID.charAt(1);
                if((parseInt(u)-1)>=0 )
                {
                    u=parseInt(u)-1;
                    
                    document.getElementById(u.toString()+s).classList.remove("col");
                    if(currentID==u.toString()+s.toString()){
                        var z=document.getElementById(prevID).innerHTML;
                        document.getElementById(currentID).innerHTML=z;
                        document.getElementById(prevID).innerHTML=""
                    }
                }
                var u=prevID.charAt(0);
                var s=prevID.charAt(1);
                if((parseInt(s)-1)>=0)
                {
                    
                    s=parseInt(s)-1;
                    document.getElementById(u+s.toString()).classList.remove("col");
                    if(currentID==u.toString()+s.toString()){
                        var z=document.getElementById(prevID).innerHTML;
                        document.getElementById(currentID).innerHTML=z;
                        document.getElementById(prevID).innerHTML=""
                    }
                }
                var u=prevID.charAt(0);
                var s=prevID.charAt(1);
                if( (parseInt(s)+1)<=7)
                {
                    s=parseInt(s)+1;
                    document.getElementById(u+s.toString()).classList.remove("col");
                    if(currentID==u.toString()+s.toString()){
                        var z=document.getElementById(prevID).innerHTML;
                        document.getElementById(currentID).innerHTML=z;
                        document.getElementById(prevID).innerHTML=""
                    }
                }
                
                
            
                
            return 1;
            }
    }


function addGreen(i,j){
    $("#"+i+j).css({
        "background-color":"green",
        "border-radius":"50%",
        "opacity":"0.3"
    })
}
function removeGreen(i,j){
    $("#"+i+j).css({
        "background-color":"",
        "border-radius":"",
        "opacity":"1"
    })
}
