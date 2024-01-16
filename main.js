
function is_in_word(letter, word){
    for(let i = 0; i < 5; i++)
    {
        if(letter == word[i])
        {
            return 1;
        }        
    }
    return 0;
}

function sutom(word)
{    
    var t = 0;
    var print_word = '';
    while( t < 7 )
    {
        let word_user = prompt("Rentrez un mot :")
        for(var i = 0; i < 5; i++)
        {
            if (word_user[i] == word[i])
                print_word += '💚';                
            else if (is_in_word(word_user[i], word))
                print_word += '💛';
            else if(!is_in_word(word_user[i], word))
                print_word += '🖤';
        }
        console.log(print_word);
        if (word_user == word)
            return console.log('Vous avez gagné'); 
        t++;
    }
    return console.log('Vous avez perdu !'); 
}

is_in_word('s', 'salut');
sutom('tests');