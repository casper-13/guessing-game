
        var guessnumber = document.getElementById("guessnumber")
        var result = document.getElementById("result")
        var randomnumber = Math.floor(Math.random()*10)+1
        var score = document.getElementById("score")

        var totalscore = 10

        function Check() {
            var enterednumber =guessnumber.value
            if(randomnumber== enterednumber){
                console.log("Right")
                result.textContent = "Youre Right"
                alert("YOU WON .... !")
                window.location.reload()
            }else{
                totalscore = totalscore-1
                score.textContent = "Score : "+totalscore
                console.log("Wrong")
                result.textContent = "Guess Again" 
                if (totalscore == 0) {
                    alert("You Have Lost The Game....")
                    result.textContent = "You Have Lost"
                    window.location.reload()
                }
            }

            
        }

        
    