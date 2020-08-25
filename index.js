

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
        }
        
    })
    function fun1(){
        if(document.getElementById(currentID).innerText.charCodeAt(0)=="9817"){
     document.getElementById(parseInt(currentID)-10).classList.add("col")
     prevID=currentID;
     console.log("fun1"+currentID+" "+prevID)
     return 0;
        }
        else if(document.getElementById(currentID).innerText.charCodeAt(0)=="9823"){
            document.getElementById(parseInt(currentID)+10).classList.add("col")
     prevID=currentID;
     return 2;
        }
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
        else{
            currentID="";
            prevID="";
            return 1;  
        }

    }

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


