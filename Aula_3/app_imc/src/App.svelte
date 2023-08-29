<script>
	let weight = 0;
	let height = 0;
	let bmi = 0;
	let index = null;
	let imgPath = null

	function calculateBMI(){
		if (weight > 0 && height > 0){
			bmi = (weight/ Math.pow(height, 2)).toFixed(2);
			verifyIndex(bmi)
		}else{
			bmi = 0;
			verifyIndex(bmi)
		}
	}

	function verifyIndex(bmi){
		if (bmi < 18.5){
			index = 'Abaixo do peso';
		}else if (bmi >= 18.5 && bmi < 25.0){
			index = 'Peso ideal (parabéns)';
		}else if (bmi >= 25.0 && bmi < 30.0){
			index = 'Levemente acima do peso';
		}else if (bmi >= 30.0 && bmi < 35.0){
			index = 'Obesidade de grau I';
		}else if (bmi >= 35.0 && bmi < 40.0){
			index = 'Obesidade de grau II';
		}else if (bmi > 40){
			index = 'Obesidade de grau III (mórbida)'
		}else{
			index = 'IMC inválido ou 0'
		}
	}

</script>

<main>

	<div class="img">
		<div class="output">
			{#if bmi > 0}
			<p>Seu IMC é {bmi}</p>
			<p>{index}</p>
			{/if}
		</div>
		<img alt="The project logo" src='lib/images/alien_eating-removebg-preview.png'/>
	</div>

	<div>
		<hr>
	</div>

	<div class="container">

		<div class="title">
			<h1>CALCULADORA DE IMC</h1>
		</div>

		<div class="inputs">
			<label>
				Peso (kg): <input type="number" bind:value={weight} on:input={calculateBMI}/>
			</label>
			<label>
				Altura (m): <input type="number" bind:value={height} on:input={calculateBMI}/>
			</label>
		</div>


		<table border="1">
			<tr>
				<th>IMC</th>
				<th>Classificação</th>
			</tr>
			<tr>
				<td> IMC &lt; 18.5 </td>
				<td> Abaixo do peso </td>
			</tr>
			<tr>
				<td> 18.5 &le; IMC &lt; 25.0 </td>
				<td> Peso ideal </td>
			</tr>
			<tr>
				<td> 25.0 &le; IMC &lt; 30.0 </td>
				<td> Levemente acima do peso </td>
			</tr>
			<tr>
				<td> 30.0 &le; IMC &lt; 35.0 </td>
				<td> Obesidade de grau I </td>
			</tr>
			<tr>
				<td> 35.0 &le; IMC &lt; 40.0 </td>
				<td> Obesidade de grau II </td>
			</tr>
			<tr>
				<td> 40.0 &le; IMC </td>
				<td> Obesidade de grau III </td>
			</tr>
		</table>
	</div>

</main>

<style>

	img{
		max-width: 100%;
		height: 100%;
	}

	hr{
		height: 200px;
		align-items: center;
		align-self: center;
		align-content: center;
	}

	body {
    	font-family: Arial, sans-serif;
    	margin: 0;
    	padding: 0;
    	min-height: 100vh;
	}

	main {
		width: 50%;
    	padding: 20px;
    	background-color: midnightblue;
    	border-radius: 30px;
    	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
		margin-right: auto;
		margin-left: auto;
		align-items: center;
		display: flex;
		flex-direction: row;
		border: 4px solid white;
	}

	.title{
		color: white;
		text-align: center;
		background-color: #58A3E5;
		width: 70%;
		margin: auto;
		border-radius: 30px;
		border: 3px solid white;
	}

	.container{
		width: 70%;
		min-height: 500px;
		border-radius: 30px;
		display: flex;
    	flex-direction: column;
    	align-items: center;
		margin-left: auto;
		margin-right: auto;
		border-color: black;
	}

	.inputs{
		padding-top: 20px;
	}

	label {
    	display: block;
    	margin-bottom: 5px;
    	font-weight: bold;
    	color: white;
		text-shadow: black;
		text-align: center;
	}

	input[type="number"] {
    	width: 100%;
    	padding: 10px;
    	border: 1px solid #ccc;
    	border-radius: 5px;
	}

	.output {
    	font-size: 18px;
    	color: white;
		font-weight: bold;
		text-shadow: midnightblue;
		padding-bottom: 10px;
		text-align: center;
		text-transform: uppercase;
	}

	table {
    	width: 50%;
    	margin: 0 auto;
    	border-collapse: collapse;
    	background-color: white;
    	border-radius: 10px;
    	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
		text-align: center;
	}

</style>