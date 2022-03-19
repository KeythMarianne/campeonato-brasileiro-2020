<template>
    <v-container>
        <h2 class="text-h5 text-center mb-3 mt-5">
            Brasileirão Série A - 2020
        </h2>
        <v-img class="inicio-imagem mb-4"
            src="https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.2974821:1596806515/Serie-A.png"
            alt ="imagem-brasileirao">
        </v-img>
        <p>A Série A do Campeonato Brasileiro de Futebol de 2020, oficialmente Brasileirão Assaí – Série A 2020 por motivos de patrocínio, é a 64.ª edição da principal divisão do futebol brasileiro. A disputa tem o mesmo regulamento dos anos anteriores, quando foi implementado o sistema de pontos corridos.</p>

        <h3 class="text-center mb-3 mt-5">Quer receber novidades exclusivas?</h3>
        <div class="btn-contato text-center">
            <router-link to="/cadastro">
                <v-btn outlined rounded color="#43A047" elevation="2">
                    <span class="text-btn"><strong>Cadastre-se</strong></span>
                </v-btn>
            </router-link>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'ProjetoInicio'
}
</script>

<style scoped>
    .inicio-imagem {
        border-radius: 5px;
    }
    p {
        text-align: justify;
    }
    .home-img {
    display: flex;
    justify-content: center;
    max-width: 100%;
    }
    .text-btn {
    
    }
    .btn-contato a {
    text-decoration: none;
    }
</style>