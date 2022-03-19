<template>
    <v-container>
        <h2 class="text-h5 text-center px-6 ma-2">Página do usuário</h2>
        <v-simple-table>
        <template v-slot:default>

            <tbody>
                <tr>
                    <th colspan="2" class="text-left">Nome do usuário</th>
                    <th colspan="2" class="text-right">Keyth</th>
                </tr>
                <tr>
                    <th colspan="2" class="text-left">Time que torce</th>
                    <th colspan="2" class="text-right">Palmeiras</th>
                </tr>
                <tr>
                    <th colspan="2" class="text-left">Classificação do seu time</th>
                    <th colspan="2" class="text-right">5</th>
                </tr>
                <tr>
                    <th colspan="2" class="text-left">Pontos do seu time</th>
                    <th colspan="2" class="text-right">19</th>
                </tr>
            </tbody>
        </template>
        </v-simple-table>
    </v-container>
</template>

<script>
export default {
    name: 'ProjetoUsuario',
    data() {
        return {
            ProjetoUsuario: []
        }
    },
}
</script>

<style scoped>

</style>