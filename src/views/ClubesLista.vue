<template>
    <v-container>
        <h2 class="text-h5 text-center mb-3 mt-5">
            Classificação
        </h2>

        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th colspan="2" class="text-left">
                            Clubes
                        </th>
                        <th class="text-right">
                            Pontos
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(clube, index) of clubesListaOrdenada" :key="clube.id">
                        <td>{{ index + 1}}</td>
                        <td>
                            <v-avatar size="24">
                                <img
                                    :src="clube.escudo"
                                    :alt="clube.nome"
                                >
                            </v-avatar>
                            <span class="pl-2">{{ clube.nome }}</span>
                        </td>
                        <td class="text-right">{{ clube.pontos }}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
        
    </v-container>
</template>

<script>
export default {
    name: 'ClubesLista',
    data() {
        return {
            clubesLista: []
        }
    },
    computed: {
        clubesListaOrdenada() {
            const listaOrdenada = this.clubesLista.slice(0).sort(
                (a,b) => a.pontos > b.pontos ? -1 : 1
                );
                /*Se A for maior que B então retorna -1 
                -1 significa que o valor de A será ordenado ANTES do B */
                /*Slice: no computed não é permitido mutar o dado original
                Usamos o slice(0) como uma gambiarra, pois o slice() retorna
                um novo array, sem modificar o array original */
            return listaOrdenada;  
        }
    },
    created() {
        fetch('https://hackthon-decola.firebaseio.com/clubes-lista.json')
            .then(resposta => resposta.json())
            .then(json => {
                this.clubesLista = json
                console.log(this.clubesLista)
            });
    }
}
</script>

<style scoped>

</style>