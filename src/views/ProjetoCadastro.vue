<template>
    <div style="width: 80%" class="cadastro">
        <h2>Cadastro</h2>
     
        <v-form class="cadastro-box" ref="form" v-model="valid" lazy-validation>
            
            <v-text-field 
            v-model="nome" 
            :rules="[rules.required]"
            label="Name" 
            required>
            </v-text-field>

            <v-text-field 
            v-model="password" 
            :rules="[rules.required]"
            type="password" 
            label="Senha" 
            required>
            </v-text-field>

            <v-text-field
            v-model="numeroTelefone"
            :rules="[rules.required]" 
            label="Telefone" 
            required>
            </v-text-field>
            
            <v-text-field 
            v-model="email"
            :rules="[rules.required, rules.email]"
            label="E-mail"
            required>
            </v-text-field>

            <v-text-field 
            v-model="endereco" 
            :rules="[rules.required]"
            label="Endereço" 
            required>
            </v-text-field>

            <v-select
                v-model="select"
                :items="items"
                :rules="[v => !!v || 'Item is required']"
                label="Qual seu time do coração"
                required>
            </v-select>
            
            <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'Você deve aceitar para continuar!']" 
                label="Aceita os termos de uso?" 
                required>
            </v-checkbox>
        </v-form>  

        <div class="botoes">
            <!-- <router-link to="/login"> -->
            <v-btn
                class="botaoCadastrar"
                color="green"
                elevation="2"
                medium
                outlined
                rounded
                @click="cadastrar"
            >
                Cadastrar
            </v-btn>
            <!-- </router-link> -->
            <v-btn
                class="botaoLimpar"
                color="green"
                elevation="2"
                medium
                outlined
                rounded
                @click="limpar"
            >
                Limpar
            </v-btn>
        </div>
        
    </div>
</template>


<script>
export default {
    name: "ProjetoCadastro",
    data() {
        return {
            nome: "",
            password: "",
            numeroTelefone: "(xx) xxxxx-xxxx",
            email: "seuemail@seuemail.com",
            endereco: "",
            rules: {
                required: value => !!value || 'Required.',
                counter: value => value.length <= 20 || 'Max 20 characters',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                },
            },
            select: null,
            items: [
                'Corinthians',
                'Flamengo',
                'Fortaleza',
                'Internacional',
                'Palmeiras',
            ],
        };
    },

    methods: {
        cadastrar() {
            this.nome = "Cadastro realizado. Faça login.";
            this.password = "*****";
            this.numeroTelefone = "Cadastro realizado. Faça login.";
            this.email = "Cadastro realizado. Faça login.";
            this.endereco = "Cadastro realizado. Faça login.";
            this.select = "Cadastro realizado. Faça login.";
        },
        limpar() {
            this.nome = "";
            this.password = "";
            this.numeroTelefone = "";
            this.email = "";
            this.endereco = "";
            this.select = "";
        },
    },
};
</script>

<style>
.cadastro {
    text-align: center;
    margin: auto;
    margin-top: 30px;   
}
.cadastro-box {
    max-width: 100vw;
}
.botoes a {
    text-decoration: none;
}
</style>