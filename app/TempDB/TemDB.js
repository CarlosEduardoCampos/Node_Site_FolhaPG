const fs = require('fs');
const {join} = require('path');

// Cria um ID aleatorio
const ID = () => {
    return Math.floor(Date.now() * Math.random()).toString(36)
}
/*
    Guia de uso:

    // Inicia um novo arquivo (tabela)
    const testData = new TempData("Usuarios");

    // Salva uma nova linha de dados
    testData.saveData({'id':'0', 'teste':'teste0'});

    // Edita uma linha existente
    testData.updateData({'id':'0', 'teste':'teste'});

    // Apaga uma linha existente
    testData.deleteData({'id':'0'});

    // Obtém as informações existentes
    const data = testData.getData();
    console.log(data);
*/

class TempData {
    constructor(data_nome) {
        // Monta a strig(filePath) do endereço do arquivo:
        this.data_nome = join(__dirname, `${data_nome}.json`);

    }
    // Faz a leitura do arquivo .json e retorna um array:
    getData() {
        // testa se o data_nome existe ?(se sim) le o arquivo :(se não) retorna array vazio:
        const data = fs.existsSync(this.data_nome)?fs.readFileSync(this.data_nome):[];

        try {
            return (JSON.parse(data));
        }
        catch (erro) {
            return ([]);
        }
    }

    // Escreve no arquivo o array passado na função:
    // data = array[];
    saveData(new_data){
        const existeValue = (new_data && typeof new_data === 'object' && Object.keys(new_data).length > 0);

        if (existeValue) {
            const old_data = this.getData();

            old_data.push(new_data);

            fs.writeFileSync(this.data_nome, JSON.stringify(old_data,null,'\t'));
        }
    }

    // Atualiza uma linha do arquivo
    upData(new_data){
        const existeValue = (new_data && typeof new_data === 'object' && Object.keys(new_data).length > 0);

        if (existeValue) {
            const old_data = this.getData();

            const update = old_data.map(data => {
                if (data.id == new_data.id)
                {
                    return{
                        ...data,
                        ...new_data
                    }
                }
                return data;
            });

            fs.writeFileSync(this.data_nome, JSON.stringify(update,null,'\t'));
        }
    }

    // Apaga informação
    deleteData(new_data){
        const existeValue = (new_data && typeof new_data === 'object' && Object.keys(new_data).length > 0);

        if (existeValue) {
            const old_data = this.getData();

            const update = old_data.filter(data => data.id != new_data.id);

            fs.writeFileSync(this.data_nome, JSON.stringify(update,null,'\t'));
        }
    }
}

module.exports = TempData;