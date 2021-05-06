var src,jogador="1",jogada=0,novajogada, idquadrado, partstring, vit = 0;
var codigo = [0,0,0,0,0,0,0,0,0];

function ckSrc(id){
	src=document.getElementById(id).src;  // A variavel src vai receber o endereço da imagem correspondente ao "id"
	return src.substring(src.length - 5, src.length);  // Retorna uma parte do texto formado pelo tamanho total do texto-5
}

function ckPlay(id){	
	src=ckSrc(id);  // src recebe o valor retornado pela function ckSrc, ou seja, B.png
	if(src == "B.png"){
		document.getElementById(id).src="Imagens/"+jogador+".png"; // Muda o endereço src da imagem B.png para a do jogador
		jogada++;
		idquadrado = event.target.id;  // Pega a id da célula que cliquei
		if(jogador == "1"){  // Se o primeiro jogador for o 1, o próximo será o 2
			jogador = "2";
			partstring = idquadrado.slice(-1);   // Pega o número da id da célula. Se c1, pega o 1
			codigo[partstring -1] = 1;  // Pega o partstring (que vai ser o numero) e subtrai de 1 posição para corrigir
										// a posição no vetor que começa do 0 e coloca dentro do vetor codigo.
		}
		else{
			jogador = "1";
			partstring = idquadrado.slice(-1);
			codigo[partstring -1] = 2;
		}
		if(ckVitoria()){  // Se retornar uma condição de vitória true			
			if(vit == 1){  // Se a vitória for do jogador 1
			alert("Fim! Vitoria do jogador 1");
			}else{
			alert("Fim! Vitoria do jogador 2");
			}
			novajogada=parseInt(prompt("Deseja jogar novamente? Se sim, digite 1; Se nao, digite 2"));
			if(novajogada == 1){
			location.reload();
			}
			if(novajogada == 2){
				alert("Jogo finalizado");
			}
		}
		if(jogada >= 9 && vit != 1 && vit!= 2){
			alert("Fim! Empate");
			novajogada=parseInt(prompt("Deseja jogar novamente? Se sim, digite 1; Se nao, digite 2"));
			if(novajogada == 1){
			location.reload();
			}
			if(novajogada == 2){
				alert("Jogo finalizado");	
			}
		}
	}
}

function ckVitoria(){  // Testou todas as condições de vitória separadamente para cada possível vencedor
	if((codigo[0] == 1) && (codigo[1] == 1) && (codigo[2] == 1)){
		vit = 1;
		return true;
	} 
	if((codigo[0] == 2) && (codigo[1] == 2) && (codigo[2] == 2)){
		vit = 2;
		return true;
	} 
	if((codigo[3] == 1) && (codigo[4] == 1) && (codigo[5] == 1)){
		vit = 1;
		return true;
	} 
	if((codigo[3] == 2) && (codigo[4] == 2) && (codigo[5] == 2)){
		vit = 2;
		return true;
	} 
	if((codigo[6] == 1) && (codigo[7] == 1) && (codigo[8] == 1)){
		vit = 1;
		return true;
	} 
	if((codigo[6] == 2) && (codigo[7] == 2) && (codigo[8] == 2)){
		vit = 2;
		return true;
	} 
	if((codigo[0] == 1) && (codigo[4] == 1) && (codigo[8] == 1)){
		vit = 1;
		return true;
	} 
	if((codigo[0] == 2) && (codigo[4] == 2) && (codigo[8] == 2)){
		vit = 2;
		return true;
	} 
	if((codigo[2] == 1) && (codigo[4] == 1) && (codigo[6] == 1)){
		vit = 1;
		return true;
	} 
	if((codigo[2] == 2) && (codigo[4] == 2) && (codigo[6] == 2)){
		vit = 2;
		return true;
	} 
	if((codigo[0] == 1) && (codigo[3] == 1) && (codigo[6] == 1)){
		vit = 1;
		return true;
	} 
	if((codigo[0] == 2) && (codigo[3] == 2) && (codigo[6] == 2)){
		vit = 2;
		return true;
	} 
	if((codigo[1] == 1) && (codigo[4] == 1) && (codigo[7] == 1)){
		vit = 1;
		return true;
	} 
	if((codigo[1] == 2) && (codigo[4] == 2) && (codigo[7] == 2)){
		vit = 2;
		return true;
	} 
	if((codigo[2] == 1) && (codigo[5] == 1) && (codigo[8] == 1)){
		vit = 1;
		return true;
	} 
	if((codigo[2] == 2) && (codigo[5] == 2) && (codigo[8] == 2)){
		vit = 2;
		return true;
	} 
	return false;	
}
		